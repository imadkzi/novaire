<script setup lang="ts">
import { fleet } from '~/data/fleet/index'
import { resolveServiceFormValue, serviceFormLabels } from '~/data/services'

const route = useRoute()
const config = useRuntimeConfig()
const { trackGenerateLead } = useAnalytics()

function fieldErrorId(field: string) {
  return `${field}-error`
}

function initialService() {
  const q = route.query.service
  if (typeof q === 'string') return resolveServiceFormValue(q)
  return ''
}

type Step = 1 | 2 | 3
type LocationField = 'location' | 'pickupFrom' | 'dropoffTo'

const form = reactive({
  name: '',
  email: '',
  phone: '',
  service: initialService(),
  journeyType: '' as '' | 'one-way' | 'return',
  pickupFrom: '',
  dropoffTo: '',
  date: '',
  location: '',
  guestCount: '',
  experience: '',
  vehicles: [] as string[],
  message: '',
  website: '',
})

const status = ref<'idle' | 'loading' | 'success' | 'error'>('idle')
const errorMessage = ref('')
const step = ref<Step>(1)
const vehiclePickerOpen = ref(false)
const fieldErrors = reactive<Record<string, string>>({
  name: '',
  email: '',
  phone: '',
  service: '',
  experience: '',
  journeyType: '',
  pickupFrom: '',
  dropoffTo: '',
  location: '',
  message: '',
})
const addressSuggestions = reactive<Record<LocationField, string[]>>({
  location: [],
  pickupFrom: [],
  dropoffTo: [],
})
const addressLookupLoading = reactive<Record<LocationField, boolean>>({
  location: false,
  pickupFrom: false,
  dropoffTo: false,
})
const addressLookupError = reactive<Record<LocationField, string>>({
  location: '',
  pickupFrom: '',
  dropoffTo: '',
})
const lookupTimers: Partial<Record<LocationField, ReturnType<typeof setTimeout>>> = {}
const stepErrorMessage = ref('')

const serviceOptions = [...serviceFormLabels, 'Other']

const experienceOptions = [
  { value: 'chauffeur', label: 'Chauffeur' },
  { value: 'self-drive', label: 'Self-drive' },
  { value: 'either', label: 'Either / open to advice' },
]

const vehicleOptions = computed(() => {
  const used = new Set<string>()
  return fleet.map((v) => {
    let label = `${v.marque} ${v.name}`
    if (used.has(label)) label = `${label} (${v.slug.replace(`${v.marque.toLowerCase()}-`, '').replaceAll('-', ' ')})`
    used.add(`${v.marque} ${v.name}`)
    return {
      value: v.slug,
      label,
    }
  })
})

const selectedVehicleLabels = computed(() => {
  const map = new Map(vehicleOptions.value.map((o) => [o.value, o.label]))
  return form.vehicles.map((slug) => map.get(slug)).filter(Boolean) as string[]
})

const serviceSelected = computed(() => form.service.trim().length > 0)
const personalStepValid = computed(() => form.name.trim().length > 0 && form.email.trim().length > 0)
const isSelfDriveService = computed(() => form.service.toLowerCase().includes('self-drive'))
const isChauffeurService = computed(() => form.service.toLowerCase().includes('chauffeur'))
const showExperienceField = computed(
  () => serviceSelected.value && !isSelfDriveService.value && !isChauffeurService.value,
)
const isSelfDriveExperience = computed(() => form.experience === 'self-drive')
const showJourneyFields = computed(
  () =>
    serviceSelected.value &&
    !isSelfDriveService.value &&
    (!showExperienceField.value || !isSelfDriveExperience.value),
)
const journeyFieldsValid = computed(() => {
  if (!showJourneyFields.value) return true
  return !!form.journeyType && form.pickupFrom.trim().length > 0 && form.dropoffTo.trim().length > 0
})
const experienceFieldValid = computed(() => {
  if (!showExperienceField.value) return true
  return form.experience.trim().length > 0
})
const eventStepValid = computed(
  () => serviceSelected.value && experienceFieldValid.value && journeyFieldsValid.value,
)
const finalStepValid = computed(() => form.message.trim().length > 0)
const stepProgress = computed(() => (step.value / 3) * 100)

if (route.query.vehicle && typeof route.query.vehicle === 'string') {
  const q = route.query.vehicle.toLowerCase()
  const match = vehicleOptions.value.find((o) => o.label.toLowerCase().includes(q))
  if (match) form.vehicles = [match.value]
}

function goToStep(next: Step) {
  if (status.value === 'loading') return
  if (next === 2 && !personalStepValid.value) return
  if (next === 3 && !eventStepValid.value) return
  step.value = next
}

function goBackStep() {
  if (step.value === 1) return
  goToStep((step.value - 1) as Step)
}

function toggleVehicle(slug: string) {
  if (form.vehicles.includes(slug)) {
    form.vehicles = form.vehicles.filter((s) => s !== slug)
  } else {
    form.vehicles = [...form.vehicles, slug]
  }
}

function onVehicleKeydown(event: KeyboardEvent) {
  if (event.key === 'Escape') vehiclePickerOpen.value = false
}

function clearFieldError(field: keyof typeof fieldErrors) {
  fieldErrors[field] = ''
  stepErrorMessage.value = ''
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

function isValidPhone(phone: string) {
  if (!phone.trim()) return true
  return /^\+?[0-9\s()\-]{7,20}$/.test(phone)
}

function validateStepOne() {
  let ok = true
  if (!form.name.trim()) {
    fieldErrors.name = 'Please enter your name.'
    ok = false
  } else {
    fieldErrors.name = ''
  }

  if (!form.email.trim()) {
    fieldErrors.email = 'Please enter your email.'
    ok = false
  } else if (!isValidEmail(form.email.trim())) {
    fieldErrors.email = 'Please enter a valid email address.'
    ok = false
  } else {
    fieldErrors.email = ''
  }

  if (!isValidPhone(form.phone)) {
    fieldErrors.phone = 'Please enter a valid phone number.'
    ok = false
  } else {
    fieldErrors.phone = ''
  }

  stepErrorMessage.value = ok ? '' : 'Please correct the highlighted fields before continuing.'
  return ok
}

function validateStepTwo() {
  let ok = true

  if (!form.service.trim()) {
    fieldErrors.service = 'Please choose a service.'
    ok = false
  } else {
    fieldErrors.service = ''
  }

  if (showExperienceField.value) {
    if (!form.experience.trim()) {
      fieldErrors.experience = 'Please choose an experience type.'
      ok = false
    } else {
      fieldErrors.experience = ''
    }
  } else {
    fieldErrors.experience = ''
  }

  if (showJourneyFields.value) {
    if (!form.journeyType) {
      fieldErrors.journeyType = 'Please choose one-way or return.'
      ok = false
    } else {
      fieldErrors.journeyType = ''
    }
    if (!form.pickupFrom.trim()) {
      fieldErrors.pickupFrom = 'Please enter a pickup address.'
      ok = false
    } else {
      fieldErrors.pickupFrom = ''
    }
    if (!form.dropoffTo.trim()) {
      fieldErrors.dropoffTo = 'Please enter a destination address.'
      ok = false
    } else {
      fieldErrors.dropoffTo = ''
    }
  } else {
    fieldErrors.journeyType = ''
    fieldErrors.pickupFrom = ''
    fieldErrors.dropoffTo = ''
  }

  stepErrorMessage.value = ok ? '' : 'Please correct the highlighted fields before continuing.'
  return ok
}

function validateFinalStep() {
  if (!form.message.trim()) {
    fieldErrors.message = 'Please tell us about your booking.'
    stepErrorMessage.value = 'Please correct the highlighted fields before submitting.'
    return false
  }
  if (form.message.trim().length < 10) {
    fieldErrors.message = 'Please provide a little more detail (at least 10 characters).'
    stepErrorMessage.value = 'Please correct the highlighted fields before submitting.'
    return false
  }
  fieldErrors.message = ''
  stepErrorMessage.value = ''
  return true
}

function continueToStepTwo() {
  if (!validateStepOne()) return
  goToStep(2)
}

function continueToStepThree() {
  if (!validateStepTwo()) return
  goToStep(3)
}

async function runAddressLookup(field: LocationField, query: string) {
  addressLookupError[field] = ''
  addressLookupLoading[field] = true
  try {
    const res = await fetch(
      `https://nominatim.openstreetmap.org/search?format=jsonv2&q=${encodeURIComponent(query)}&countrycodes=gb&addressdetails=1&limit=6`,
    )
    if (!res.ok) throw new Error('Lookup failed')
    const data = (await res.json()) as Array<{ display_name?: string }>
    addressSuggestions[field] = data
      .map((item) => item.display_name?.trim() ?? '')
      .filter(Boolean)
  } catch {
    addressSuggestions[field] = []
    addressLookupError[field] = 'Could not fetch address suggestions.'
  } finally {
    addressLookupLoading[field] = false
  }
}

function scheduleAddressLookup(field: LocationField) {
  const value = form[field].trim()
  clearFieldError(field)
  if (lookupTimers[field]) clearTimeout(lookupTimers[field])
  if (value.length < 3) {
    addressSuggestions[field] = []
    addressLookupError[field] = ''
    return
  }
  lookupTimers[field] = setTimeout(() => {
    void runAddressLookup(field, value)
  }, 250)
}

function applyAddressSuggestion(field: LocationField, suggestion: string) {
  form[field] = suggestion
  addressSuggestions[field] = []
  addressLookupError[field] = ''
}

watch(
  () => form.service,
  () => {
    if (!showExperienceField.value) {
      form.experience = ''
    }
    if (isSelfDriveService.value) {
      form.journeyType = ''
      form.pickupFrom = ''
      form.dropoffTo = ''
      addressSuggestions.pickupFrom = []
      addressSuggestions.dropoffTo = []
      addressLookupError.pickupFrom = ''
      addressLookupError.dropoffTo = ''
    }
  },
)

watch(
  () => form.experience,
  () => {
    if (!showExperienceField.value) {
      form.experience = ''
      return
    }
    if (isSelfDriveExperience.value) {
      form.journeyType = ''
      form.pickupFrom = ''
      form.dropoffTo = ''
      addressSuggestions.pickupFrom = []
      addressSuggestions.dropoffTo = []
      addressLookupError.pickupFrom = ''
      addressLookupError.dropoffTo = ''
    }
  },
)

function startNewEnquiry() {
  Object.assign(form, {
    name: '',
    email: '',
    phone: '',
    service: initialService(),
    journeyType: '',
    pickupFrom: '',
    dropoffTo: '',
    date: '',
    location: '',
    guestCount: '',
    experience: '',
    vehicles: [],
    message: '',
    website: '',
  })
  status.value = 'idle'
  errorMessage.value = ''
  stepErrorMessage.value = ''
  step.value = 1
  vehiclePickerOpen.value = false
}

async function onSubmit() {
  if (form.website) return
  if (!validateStepOne() || !validateStepTwo() || !validateFinalStep()) return

  status.value = 'loading'
  errorMessage.value = ''

  const formspreeId = config.public.formspreeId as string
  const preferredVehicles = selectedVehicleLabels.value.join(', ')

  const payload = {
    name: form.name,
    email: form.email,
    phone: form.phone,
    service: form.service,
    journeyType: showJourneyFields.value ? form.journeyType : '',
    pickupFrom: showJourneyFields.value ? form.pickupFrom : '',
    dropoffTo: showJourneyFields.value ? form.dropoffTo : '',
    date: form.date,
    location: form.location,
    guestCount: form.guestCount,
    experience: showExperienceField.value ? form.experience : '',
    vehicles: form.vehicles,
    vehicle: preferredVehicles,
    message: form.message,
  }

  try {
    if (formspreeId) {
      const res = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload),
      })
      if (!res.ok) throw new Error('Submission failed')
    } else {
      await $fetch('/api/quote', {
        method: 'POST',
        body: payload,
      })
    }
    status.value = 'success'
    vehiclePickerOpen.value = false
    trackGenerateLead({
      service: form.service || 'unspecified',
      method: formspreeId ? 'formspree' : 'api',
    })
  } catch {
    status.value = 'error'
    errorMessage.value = 'Something went wrong. Please email enquiries@novaire.co.uk directly.'
  }
}
</script>

<template>
  <div
    v-if="status === 'success'"
    class="form-success"
    role="status"
    aria-live="polite"
  >
    <p class="label-caps text-charcoal/60">Enquiry received</p>
    <h3 class="heading-editorial text-onyx">Thank you. Your request is with our team.</h3>
    <p class="text-sm leading-relaxed text-charcoal/80">
      We will reply within one business day with availability and a tailored quote.
    </p>
    <div class="space-y-1 pt-1 text-sm text-charcoal/80">
      <p><span class="text-onyx">Service:</span> {{ form.service || 'Not selected' }}</p>
      <p><span class="text-onyx">Date:</span> {{ form.date || 'Flexible' }}</p>
      <p><span class="text-onyx">Vehicles:</span> {{ selectedVehicleLabels.join(', ') || 'No preference' }}</p>
    </div>
    <button type="button" class="btn-on-stone" @click="startNewEnquiry">
      Start new enquiry
    </button>
  </div>

  <form v-else class="space-y-6" @submit.prevent="onSubmit">
    <div class="absolute -left-[9999px]" aria-hidden="true">
      <label for="website">Website</label>
      <input id="website" v-model="form.website" type="text" name="website" tabindex="-1" autocomplete="off" />
    </div>

    <div class="space-y-3 rounded-lg border border-onyx/15 bg-white/60 p-4" aria-label="Quote progress">
      <div class="stepper-track" aria-hidden="true">
        <div class="stepper-fill" :style="{ width: `${stepProgress}%` }" />
      </div>
      <div class="flex flex-wrap items-center gap-3 text-xs tracking-wide text-charcoal/70">
        <span
          class="step-pill"
          :class="step === 1 ? 'border-gold bg-gold text-onyx' : 'border-onyx/30 text-charcoal/70'"
          :aria-current="step === 1 ? 'step' : undefined"
        >
          1
        </span>
        <span :class="step === 1 ? 'text-onyx' : ''">Personal details</span>
        <span class="text-charcoal/40">/</span>
        <span
          class="step-pill"
          :class="step === 2 ? 'border-gold bg-gold text-onyx' : 'border-onyx/30 text-charcoal/70'"
          :aria-current="step === 2 ? 'step' : undefined"
        >
          2
        </span>
        <span :class="step === 2 ? 'text-onyx' : ''">Event details</span>
        <span class="text-charcoal/40">/</span>
        <span
          class="step-pill"
          :class="step === 3 ? 'border-gold bg-gold text-onyx' : 'border-onyx/30 text-charcoal/70'"
          :aria-current="step === 3 ? 'step' : undefined"
        >
          3
        </span>
        <span :class="step === 3 ? 'text-onyx' : ''">Vehicle & notes</span>
      </div>
    </div>

    <template v-if="step === 1">
      <p class="text-sm text-charcoal/70">Tell us how to reach you. We usually reply within one business day.</p>
      <div class="grid gap-6 md:grid-cols-2">
        <div>
          <label for="name" class="label-caps mb-2 block text-onyx">Name</label>
          <input
            id="name"
            v-model="form.name"
            type="text"
            required
            autocomplete="name"
            class="form-input"
            :aria-invalid="!!fieldErrors.name"
            :aria-describedby="fieldErrors.name ? fieldErrorId('name') : undefined"
            @input="clearFieldError('name')"
          />
          <p v-if="fieldErrors.name" :id="fieldErrorId('name')" class="mt-2 text-xs text-red-700" role="alert">
            {{ fieldErrors.name }}
          </p>
        </div>
        <div>
          <label for="email" class="label-caps mb-2 block text-onyx">Email</label>
          <input
            id="email"
            v-model="form.email"
            type="email"
            required
            autocomplete="email"
            class="form-input"
            :aria-invalid="!!fieldErrors.email"
            :aria-describedby="fieldErrors.email ? fieldErrorId('email') : undefined"
            @input="clearFieldError('email')"
          />
          <p v-if="fieldErrors.email" :id="fieldErrorId('email')" class="mt-2 text-xs text-red-700" role="alert">
            {{ fieldErrors.email }}
          </p>
        </div>
      </div>

      <div>
        <label for="phone" class="label-caps mb-2 block text-onyx">Phone</label>
        <input
          id="phone"
          v-model="form.phone"
          type="tel"
          autocomplete="tel"
          class="form-input"
          @input="clearFieldError('phone')"
        />
        <p v-if="fieldErrors.phone" class="mt-2 text-xs text-red-700">{{ fieldErrors.phone }}</p>
      </div>
    </template>

    <template v-else-if="step === 2">
      <p class="text-sm text-charcoal/70">Share the event basics so we can quote accurately on the first reply.</p>
      <div class="grid gap-6 md:grid-cols-2">
        <div>
          <label for="service" class="label-caps mb-2 block text-onyx">Service</label>
          <select
            id="service"
            v-model="form.service"
            class="form-input"
            @change="clearFieldError('service')"
          >
            <option value="">Select…</option>
            <option v-for="opt in serviceOptions" :key="opt" :value="opt">{{ opt }}</option>
          </select>
          <p v-if="fieldErrors.service" class="mt-2 text-xs text-red-700">{{ fieldErrors.service }}</p>
        </div>
        <div v-if="showExperienceField">
          <label for="experience" class="label-caps mb-2 block text-onyx">Experience type</label>
          <select
            id="experience"
            v-model="form.experience"
            class="form-input"
            :required="showExperienceField"
            @change="clearFieldError('experience')"
          >
            <option value="">Select…</option>
            <option v-for="opt in experienceOptions" :key="opt.value" :value="opt.value">{{ opt.label }}</option>
          </select>
          <p v-if="fieldErrors.experience" class="mt-2 text-xs text-red-700">{{ fieldErrors.experience }}</p>
        </div>
      </div>

      <div v-if="showJourneyFields" class="grid gap-6 md:grid-cols-3">
        <div>
          <label for="journeyType" class="label-caps mb-2 block text-onyx">Journey type</label>
          <select
            id="journeyType"
            v-model="form.journeyType"
            class="form-input"
            :required="showJourneyFields"
            @change="clearFieldError('journeyType')"
          >
            <option value="">Select…</option>
            <option value="one-way">One-way</option>
            <option value="return">Return</option>
          </select>
          <p v-if="fieldErrors.journeyType" class="mt-2 text-xs text-red-700">{{ fieldErrors.journeyType }}</p>
        </div>
        <div>
          <label for="pickupFrom" class="label-caps mb-2 block text-onyx">From</label>
          <input
            id="pickupFrom"
            v-model="form.pickupFrom"
            type="text"
            placeholder="Start typing an address"
            class="form-input"
            :required="showJourneyFields"
            @input="scheduleAddressLookup('pickupFrom')"
          />
          <p v-if="fieldErrors.pickupFrom" class="mt-2 text-xs text-red-700">{{ fieldErrors.pickupFrom }}</p>
          <p v-if="addressLookupLoading.pickupFrom" class="mt-2 text-xs text-charcoal/60">Looking up address…</p>
          <p v-if="addressLookupError.pickupFrom" class="mt-2 text-xs text-red-700">{{ addressLookupError.pickupFrom }}</p>
          <ul v-if="addressSuggestions.pickupFrom.length" class="mt-2 max-h-40 overflow-auto rounded border border-onyx/15 bg-white/70 p-1 text-xs">
            <li v-for="s in addressSuggestions.pickupFrom" :key="s">
              <button
                type="button"
                class="w-full rounded px-2 py-1 text-left text-onyx hover:bg-white"
                @click="applyAddressSuggestion('pickupFrom', s)"
              >
                {{ s }}
              </button>
            </li>
          </ul>
        </div>
        <div>
          <label for="dropoffTo" class="label-caps mb-2 block text-onyx">To</label>
          <input
            id="dropoffTo"
            v-model="form.dropoffTo"
            type="text"
            placeholder="Start typing an address"
            class="form-input"
            :required="showJourneyFields"
            @input="scheduleAddressLookup('dropoffTo')"
          />
          <p v-if="fieldErrors.dropoffTo" class="mt-2 text-xs text-red-700">{{ fieldErrors.dropoffTo }}</p>
          <p v-if="addressLookupLoading.dropoffTo" class="mt-2 text-xs text-charcoal/60">Looking up address…</p>
          <p v-if="addressLookupError.dropoffTo" class="mt-2 text-xs text-red-700">{{ addressLookupError.dropoffTo }}</p>
          <ul v-if="addressSuggestions.dropoffTo.length" class="mt-2 max-h-40 overflow-auto rounded border border-onyx/15 bg-white/70 p-1 text-xs">
            <li v-for="s in addressSuggestions.dropoffTo" :key="s">
              <button
                type="button"
                class="w-full rounded px-2 py-1 text-left text-onyx hover:bg-white"
                @click="applyAddressSuggestion('dropoffTo', s)"
              >
                {{ s }}
              </button>
            </li>
          </ul>
        </div>
      </div>
      <p v-if="showJourneyFields" class="text-xs text-charcoal/60">
        For non-self-drive bookings we need your route details to quote accurately.
      </p>

      <div class="grid gap-6 md:grid-cols-2">
        <div>
          <label for="location" class="label-caps mb-2 block text-onyx">Location</label>
          <input
            id="location"
            v-model="form.location"
            type="text"
            placeholder="City, venue, or address"
            class="form-input"
            @input="scheduleAddressLookup('location')"
          />
          <p v-if="addressLookupLoading.location" class="mt-2 text-xs text-charcoal/60">Looking up address…</p>
          <p v-if="addressLookupError.location" class="mt-2 text-xs text-red-700">{{ addressLookupError.location }}</p>
          <ul v-if="addressSuggestions.location.length" class="mt-2 max-h-40 overflow-auto rounded border border-onyx/15 bg-white/70 p-1 text-xs">
            <li v-for="s in addressSuggestions.location" :key="s">
              <button
                type="button"
                class="w-full rounded px-2 py-1 text-left text-onyx hover:bg-white"
                @click="applyAddressSuggestion('location', s)"
              >
                {{ s }}
              </button>
            </li>
          </ul>
        </div>
        <div>
          <label for="guestCount" class="label-caps mb-2 block text-onyx">Guest count</label>
          <input
            id="guestCount"
            v-model="form.guestCount"
            type="text"
            placeholder="Optional"
            class="form-input"
          />
        </div>
      </div>

      <div>
        <label for="date" class="label-caps mb-2 block text-onyx">Date</label>
        <input
          id="date"
          v-model="form.date"
          type="date"
          class="form-input"
        />
      </div>
    </template>

    <template v-else>
      <p class="text-sm text-charcoal/70">Choose one or more vehicles and tell us the important details.</p>
      <div>
        <label class="label-caps mb-2 block text-onyx">Preferred vehicle(s)</label>
        <button
          type="button"
          class="form-input flex items-center justify-between text-left"
          :aria-expanded="vehiclePickerOpen"
          aria-haspopup="listbox"
          @click="vehiclePickerOpen = !vehiclePickerOpen"
          @keydown="onVehicleKeydown"
        >
          <span class="text-onyx">
            {{ selectedVehicleLabels.length ? `${selectedVehicleLabels.length} selected` : 'Select vehicles' }}
          </span>
          <span class="text-charcoal/60">{{ vehiclePickerOpen ? 'Hide' : 'Choose' }}</span>
        </button>
        <div
          v-if="vehiclePickerOpen"
          class="mt-3 rounded-lg border border-onyx/15 bg-white/60 p-3 shadow-[0_8px_24px_-20px_rgba(1,1,1,0.18)]"
          role="listbox"
          aria-label="Preferred vehicles"
          aria-multiselectable="true"
          @keydown="onVehicleKeydown"
        >
          <ul class="space-y-2">
            <li v-for="opt in vehicleOptions" :key="opt.value">
              <label class="flex cursor-pointer items-center gap-3 rounded px-1 py-0.5 text-sm text-onyx hover:bg-white/30">
                <input
                  type="checkbox"
                  class="h-4 w-4 accent-[#B8956A]"
                  :checked="form.vehicles.includes(opt.value)"
                  @change="toggleVehicle(opt.value)"
                />
                <span>{{ opt.label }}</span>
              </label>
            </li>
          </ul>
        </div>
        <div v-if="selectedVehicleLabels.length" class="mt-3 flex flex-wrap gap-2">
          <span
            v-for="label in selectedVehicleLabels"
            :key="label"
            class="rounded-full border border-onyx/20 bg-white/50 px-3 py-1 text-xs text-charcoal"
          >
            {{ label }}
          </span>
        </div>
      </div>
      <div>
        <label for="message" class="label-caps mb-2 block text-onyx">Message</label>
        <textarea
          id="message"
          v-model="form.message"
          rows="5"
          required
          class="form-input resize-y"
          @input="clearFieldError('message')"
        />
        <p v-if="fieldErrors.message" class="mt-2 text-xs text-red-700">{{ fieldErrors.message }}</p>
      </div>

      <div class="rounded-lg border border-onyx/15 bg-white/60 p-4 text-sm text-charcoal/80 shadow-[0_8px_24px_-20px_rgba(1,1,1,0.18)]">
        <p class="font-medium text-onyx">Review</p>
        <p class="mt-2">Name: {{ form.name || 'Not provided' }}</p>
        <p>Email: {{ form.email || 'Not provided' }}</p>
        <p>Service: {{ form.service || 'Not selected' }}</p>
        <p>Date: {{ form.date || 'Flexible' }}</p>
        <p>Vehicles: {{ selectedVehicleLabels.join(', ') || 'No preference' }}</p>
      </div>
    </template>

    <p v-if="stepErrorMessage" class="text-sm text-red-800" role="alert">{{ stepErrorMessage }}</p>
    <p v-if="status === 'error'" class="text-sm text-red-800" role="alert">{{ errorMessage }}</p>

    <div class="flex flex-wrap items-center gap-3">
      <button
        v-if="step > 1"
        type="button"
        class="btn-on-stone-outline"
        :disabled="status === 'loading'"
        @click="goBackStep"
      >
        Back
      </button>

      <button
        v-if="step === 1"
        type="button"
        class="btn-on-stone"
        :disabled="status === 'loading'"
        @click="continueToStepTwo"
      >
        Continue
      </button>

      <button
        v-else-if="step === 2"
        type="button"
        class="btn-on-stone"
        :disabled="status === 'loading'"
        @click="continueToStepThree"
      >
        Continue
      </button>

      <button
        v-else
        type="submit"
        class="btn-on-stone"
        :disabled="status === 'loading'"
      >
        {{ status === 'loading' ? 'Sending…' : 'Submit enquiry' }}
      </button>
    </div>
  </form>
</template>

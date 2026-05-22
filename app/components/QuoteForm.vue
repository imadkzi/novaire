<script setup lang="ts">
const route = useRoute()
const config = useRuntimeConfig()

const form = reactive({
  name: '',
  email: '',
  phone: '',
  service: (route.query.service as string) || '',
  vehicle: (route.query.vehicle as string) || '',
  date: '',
  message: '',
  website: '',
})

const status = ref<'idle' | 'loading' | 'success' | 'error'>('idle')
const errorMessage = ref('')

const serviceOptions = [
  'Wedding',
  'Gala / Black tie',
  'Airport transfer',
  'Film / Music video',
  'Chauffeured hire',
  'Self-drive supercar',
  'Other',
]

async function onSubmit() {
  if (form.website) return

  status.value = 'loading'
  errorMessage.value = ''

  const formspreeId = config.public.formspreeId as string

  try {
    if (formspreeId) {
      const res = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          service: form.service,
          vehicle: form.vehicle,
          date: form.date,
          message: form.message,
        }),
      })
      if (!res.ok) throw new Error('Submission failed')
    } else {
      await $fetch('/api/quote', {
        method: 'POST',
        body: {
          name: form.name,
          email: form.email,
          phone: form.phone,
          service: form.service,
          vehicle: form.vehicle,
          date: form.date,
          message: form.message,
        },
      })
    }
    status.value = 'success'
    Object.assign(form, {
      name: '',
      email: '',
      phone: '',
      service: '',
      vehicle: '',
      date: '',
      message: '',
      website: '',
    })
  } catch {
    status.value = 'error'
    errorMessage.value = 'Something went wrong. Please email enquiries@novaire.co.uk directly.'
  }
}
</script>

<template>
  <form class="space-y-6" @submit.prevent="onSubmit">
    <div class="absolute -left-[9999px]" aria-hidden="true">
      <label for="website">Website</label>
      <input id="website" v-model="form.website" type="text" name="website" tabindex="-1" autocomplete="off" />
    </div>

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
        />
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
        />
      </div>
    </div>

    <div class="grid gap-6 md:grid-cols-2">
      <div>
        <label for="phone" class="label-caps mb-2 block text-onyx">Phone</label>
        <input
          id="phone"
          v-model="form.phone"
          type="tel"
          autocomplete="tel"
          class="form-input"
        />
      </div>
      <div>
        <label for="service" class="label-caps mb-2 block text-onyx">Service</label>
        <select
          id="service"
          v-model="form.service"
          class="form-input"
        >
          <option value="">Select…</option>
          <option v-for="opt in serviceOptions" :key="opt" :value="opt">{{ opt }}</option>
        </select>
      </div>
    </div>

    <div class="grid gap-6 md:grid-cols-2">
      <div>
        <label for="vehicle" class="label-caps mb-2 block text-onyx">Preferred vehicle</label>
        <input
          id="vehicle"
          v-model="form.vehicle"
          type="text"
          placeholder="Optional"
          class="form-input"
        />
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
    </div>

    <div>
      <label for="message" class="label-caps mb-2 block text-onyx">Message</label>
      <textarea
        id="message"
        v-model="form.message"
        rows="5"
        required
        class="form-input resize-y"
      />
    </div>

    <p v-if="status === 'success'" class="text-sm text-onyx" role="status">
      Thank you, we have your enquiry and will be in touch within one business day.
    </p>
    <p v-if="status === 'error'" class="text-sm text-red-800" role="alert">{{ errorMessage }}</p>

    <button
      type="submit"
      class="btn-on-stone"
      :disabled="status === 'loading'"
    >
      {{ status === 'loading' ? 'Sending…' : 'Submit enquiry' }}
    </button>
  </form>
</template>

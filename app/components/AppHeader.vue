<script setup lang="ts">
const route = useRoute()
const menuOpen = ref(false)
const scrolled = ref(false)

const { telHref, hasPhone } = useContactLinks()

const links = [
  { to: '/fleet', label: 'Fleet' },
  { to: '/services', label: 'Services' },
  { to: '/experience', label: 'Experience' },
  { to: '/faq', label: 'FAQ' },
  { to: '/contact', label: 'Contact' },
]

const isFleetDetail = computed(
  () => route.path.startsWith('/fleet/') && route.path !== '/fleet',
)

const headerSolid = computed(
  () => scrolled.value || menuOpen.value || isFleetDetail.value,
)

const logoVariant = computed(() => (headerSolid.value ? 'gold' : 'stone'))

function onScroll() {
  scrolled.value = window.scrollY > 48
}

watch(menuOpen, (open) => {
  document.body.style.overflow = open ? 'hidden' : ''
})

watch(
  () => route.path,
  () => {
    menuOpen.value = false
  },
)

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
  document.body.style.overflow = ''
})
</script>

<template>
  <header
    class="fixed inset-x-0 top-0 transition-[background-color,padding] duration-300"
    :class="[
      menuOpen
        ? 'z-[110] bg-charcoal'
        : headerSolid
          ? 'z-50 bg-charcoal/95 backdrop-blur-md'
          : 'z-50 bg-transparent',
      headerSolid ? 'py-6' : 'py-5',
    ]"
  >
    <div class="content-wrap content-pad-x flex items-center justify-between">
      <BrandLogo :variant="logoVariant" />

      <nav class="hidden items-center gap-10 md:flex" aria-label="Main">
        <NuxtLink
          v-for="link in links"
          :key="link.to"
          :to="link.to"
          class="nav-link pb-0.5"
          :class="route.path.startsWith(link.to) ? 'nav-link-active' : ''"
        >
          {{ link.label }}
        </NuxtLink>
        <a v-if="hasPhone" :href="telHref" class="nav-link hidden lg:inline">Call</a>
        <NuxtLink to="/contact" class="btn-primary">Request quote</NuxtLink>
      </nav>

      <button
        type="button"
        class="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
        :aria-expanded="menuOpen"
        aria-controls="mobile-menu"
        aria-label="Toggle menu"
        @click="menuOpen = !menuOpen"
      >
        <span
          class="block h-px w-6 bg-stone transition-all"
          :class="menuOpen ? 'translate-y-2 rotate-45' : ''"
        />
        <span class="block h-px w-6 bg-stone transition-opacity" :class="menuOpen ? 'opacity-0' : ''" />
        <span
          class="block h-px w-6 bg-stone transition-all"
          :class="menuOpen ? '-translate-y-2 -rotate-45' : ''"
        />
      </button>
    </div>
  </header>

  <Teleport to="body">
    <Transition
      enter-active-class="transition-opacity duration-200 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-opacity duration-150 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="menuOpen"
        id="mobile-menu"
        class="fixed inset-0 z-[100] flex flex-col bg-charcoal md:hidden"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        <nav class="content-wrap content-pad-x flex flex-1 flex-col overflow-y-auto pb-28 pt-28">
          <NuxtLink
            v-for="link in links"
            :key="link.to"
            :to="link.to"
            class="border-b border-gold/10 py-5 text-lg tracking-wide text-stone transition-colors hover:text-gold"
            @click="menuOpen = false"
          >
            {{ link.label }}
          </NuxtLink>
          <NuxtLink
            to="/contact"
            class="btn-primary-solid mt-10 text-center"
            @click="menuOpen = false"
          >
            Request quote
          </NuxtLink>
        </nav>
      </div>
    </Transition>
  </Teleport>
</template>

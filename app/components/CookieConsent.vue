<script setup lang="ts">
const { needsBanner, acceptAll, essentialOnly, hydrate } = useCookieConsent()

onMounted(() => {
  hydrate()
})
</script>

<template>
  <Transition
    enter-active-class="transition duration-300 ease-out"
    enter-from-class="translate-y-full opacity-0"
    enter-to-class="translate-y-0 opacity-100"
    leave-active-class="transition duration-200 ease-in"
    leave-from-class="translate-y-0 opacity-100"
    leave-to-class="translate-y-full opacity-0"
  >
    <div
      v-if="needsBanner"
      class="fixed-safe-bottom fixed inset-x-0 bottom-0 z-[120] border-t border-gold/20 bg-charcoal/95 p-4 backdrop-blur-md md:bottom-0 md:p-6"
      role="dialog"
      aria-modal="true"
      aria-label="Cookie preferences"
    >
      <div
        class="content-wrap flex flex-col gap-4 md:flex-row md:items-center md:justify-between md:gap-8"
      >
        <p class="max-w-2xl text-sm leading-relaxed text-stone/90">
          We use essential cookies for site operation. With your permission we also use analytics cookies to
          understand how visitors use our site.
          <NuxtLink to="/privacy#cookies" class="link-gold">Privacy policy</NuxtLink>
        </p>
        <div class="flex shrink-0 flex-wrap gap-3">
          <button type="button" class="btn-primary btn-sm" @click="essentialOnly">
            Essential only
          </button>
          <button type="button" class="btn-primary-solid btn-sm" @click="acceptAll">
            Accept all
          </button>
        </div>
      </div>
    </div>
  </Transition>
</template>

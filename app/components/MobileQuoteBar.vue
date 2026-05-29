<script setup lang="ts">
const { needsBanner } = useCookieConsent()
</script>

<template>
  <div
    v-if="!needsBanner"
    class="fixed-safe-bottom fixed inset-x-0 z-40 border-t border-gold/10 bg-charcoal/90 p-4 backdrop-blur-md md:hidden"
  >
    <NuxtLink to="/contact" class="btn-primary block w-full text-center">
      Request quote
    </NuxtLink>
  </div>
</template>

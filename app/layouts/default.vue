<script setup lang="ts">
const { hydrate } = useCookieConsent()

useOrganizationJsonLd()

onMounted(() => {
  hydrate()
})
</script>

<template>
  <div class="flex min-h-screen flex-col">
    <AppHeader />
    <main class="page-enter flex-1">
      <slot />
    </main>
    <AppFooter />
    <CookieConsent />
    <NuxtRouteAnnouncer />
  </div>
</template>

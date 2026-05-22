<template>
  <div class="flex min-h-screen flex-col">
    <AppHeader />
    <main class="page-enter flex-1 pb-20 md:pb-0">
      <slot />
    </main>
    <AppFooter />
    <MobileQuoteBar />
    <NuxtRouteAnnouncer />
  </div>
</template>

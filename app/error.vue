<script setup lang="ts">
const props = defineProps<{
  error: {
    statusCode?: number
    statusMessage?: string
    message?: string
  }
}>()

const is404 = computed(() => props.error?.statusCode === 404)

usePageSeo({
  title: is404.value ? 'Page not found' : 'Something went wrong',
  description: is404.value
    ? 'The page you requested could not be found on Novaire.'
    : 'An error occurred while loading this page.',
})

function goHome() {
  clearError({ redirect: '/' })
}
</script>

<template>
  <section class="flex flex-1 items-center section-pad pt-32">
    <div class="content-wrap max-w-xl text-center md:text-left">
      <p class="label-caps text-gold">{{ is404 ? '404' : 'Error' }}</p>
      <h1 class="heading-display mt-4">
        {{ is404 ? 'This page has moved on.' : 'Something went wrong.' }}
      </h1>
      <p class="mt-6 font-normal leading-relaxed text-grey">
        {{
          is404
            ? 'The link may be outdated. Explore the fleet or send us an enquiry and we will help.'
            : error.message || 'Please try again or contact us directly.'
        }}
      </p>
      <div class="mt-10 flex flex-wrap justify-center gap-4 md:justify-start">
        <button type="button" class="btn-primary-solid" @click="goHome">Back to home</button>
        <NuxtLink to="/fleet" class="btn-primary">View fleet</NuxtLink>
        <NuxtLink to="/contact" class="btn-primary">Contact</NuxtLink>
      </div>
    </div>
  </section>
</template>

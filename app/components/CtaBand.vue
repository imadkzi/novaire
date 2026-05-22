<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    title?: string
    description?: string
    vehicle?: string
    service?: string
  }>(),
  {
    title: 'Ready when you are',
    description: 'Share the date, the occasion, and the car you have in mind, we will reply with a clear quote and next steps.',
  },
)

const query = computed(() => {
  const q: Record<string, string> = {}
  if (props.vehicle) q.vehicle = props.vehicle
  if (props.service) q.service = props.service
  return q
})
</script>

<template>
  <section class="section-pad border-y border-gold/10 bg-charcoal/40">
    <div
      class="content-wrap flex flex-col items-start justify-between gap-10 md:flex-row md:items-center md:gap-16"
    >
      <div class="max-w-xl xl:max-w-2xl 2xl:max-w-3xl">
        <h2 class="heading-section">{{ props.title }}</h2>
        <p class="mt-4 font-normal leading-relaxed text-grey">{{ props.description }}</p>
      </div>
      <NuxtLink :to="{ path: '/contact', query }" class="btn-primary-solid shrink-0">
        Request quote
      </NuxtLink>
    </div>
  </section>
</template>

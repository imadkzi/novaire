<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    title?: string
    description?: string
    vehicle?: string
    service?: string
  }>(),
  {
    title: 'Begin your Novaire experience',
    description: 'Tell us your occasion, dates, and preferences — our team will craft a bespoke proposal.',
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
  <section class="section-pad bg-charcoal">
    <div class="content-wrap flex flex-col items-start justify-between gap-8 border border-gold/30 p-10 md:flex-row md:items-center md:p-14">
      <div class="max-w-xl xl:max-w-2xl 2xl:max-w-3xl">
        <h2 class="heading-section">{{ props.title }}</h2>
        <p class="mt-4 font-normal text-grey">{{ props.description }}</p>
      </div>
      <NuxtLink :to="{ path: '/contact', query }" class="btn-primary-solid shrink-0">
        Request quote
      </NuxtLink>
    </div>
  </section>
</template>

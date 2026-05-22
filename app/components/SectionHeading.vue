<script setup lang="ts">
defineProps<{
  label?: string
  title: string
  description?: string
  light?: boolean
}>()
</script>

<template>
  <div class="max-w-2xl xl:max-w-3xl 2xl:max-w-4xl">
    <p v-if="label" class="label-caps mb-4">{{ label }}</p>
    <h2
      class="heading-section"
      :class="light ? 'text-onyx' : ''"
    >
      {{ title }}
    </h2>
    <p
      v-if="description"
      class="mt-4 text-base font-normal leading-relaxed"
      :class="light ? 'text-charcoal/80' : 'text-grey'"
    >
      {{ description }}
    </p>
  </div>
</template>

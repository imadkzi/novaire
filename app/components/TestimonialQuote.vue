<script setup lang="ts">
import type { Testimonial } from '~/data/testimonials'

const props = withDefaults(
  defineProps<{
    testimonial: Testimonial
    variant?: 'stone' | 'carousel'
    emphasized?: boolean
  }>(),
  {
    variant: 'stone',
    emphasized: false,
  },
)

const borderClass = computed(() =>
  props.variant === 'carousel' ? 'border-gold pl-8 md:pl-10' : props.emphasized ? 'border-gold' : 'border-gold/60',
)

const quoteClass = computed(() => {
  if (props.variant === 'carousel') {
    return 'text-lg font-normal italic leading-relaxed text-charcoal md:text-xl md:leading-relaxed'
  }
  return props.emphasized
    ? 'text-lg font-normal italic leading-relaxed text-charcoal md:text-xl'
    : 'text-lg font-normal italic leading-relaxed text-charcoal'
})
</script>

<template>
  <blockquote class="border-l-2" :class="borderClass">
    <p :class="quoteClass">“{{ testimonial.quote }}”</p>
    <footer class="mt-4 space-y-1" :class="variant === 'carousel' ? 'mt-6' : ''">
      <p class="text-sm font-medium tracking-wide text-onyx">
        {{ testimonial.name }}
      </p>
      <p class="text-xs tracking-wide text-charcoal/60">
        {{ testimonial.context }}
      </p>
      <p class="label-caps mt-2 text-charcoal/70">
        {{ testimonial.service }}
      </p>
    </footer>
  </blockquote>
</template>

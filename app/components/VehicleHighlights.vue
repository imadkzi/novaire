<script setup lang="ts">
import type { VehicleHighlight, VehicleHighlightIcon } from '~/types'

defineProps<{
  highlights: VehicleHighlight[]
}>()

const iconPaths: Record<VehicleHighlightIcon, string> = {
  power:
    'M13 2L4 14h6l-1 8 9-12h-6l1-8z',
  speed:
    'M12 2a10 10 0 1 0 10 10M12 6v6l4 2',
  seats:
    'M4 18v-2a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v2M8 10a4 4 0 1 1 8 0M6 18h12',
  experience:
    'M4 17h16M6 17l2-9h8l2 9M8 8V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2',
}
</script>

<template>
  <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
    <div
      v-for="item in highlights"
      :key="item.label"
      class="flex flex-col items-center border border-gold/20 bg-charcoal/50 px-6 py-8 text-center"
    >
      <svg
        class="h-8 w-8 text-gold"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1.25"
        stroke-linecap="round"
        stroke-linejoin="round"
        aria-hidden="true"
      >
        <path :d="iconPaths[item.icon]" />
      </svg>
      <p class="label-caps mt-5 text-grey">{{ item.label }}</p>
      <p class="mt-2 text-xl font-medium tracking-wide text-stone">{{ item.value }}</p>
    </div>
  </div>
</template>

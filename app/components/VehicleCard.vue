<script setup lang="ts">
import { vehicleCategoryLabel } from '~/data/fleet'
import type { Vehicle } from '~/types'

const props = defineProps<{
  vehicle: Vehicle
  /** Align copy with image edges (fleet index grid) */
  flushContent?: boolean
}>()

const { trackSelectItem } = useAnalytics()

function onSelect() {
  trackSelectItem(props.vehicle.slug, `${props.vehicle.marque} ${props.vehicle.name}`)
}
</script>

<template>
  <article class="group flex flex-col bg-charcoal/80 transition-colors hover:bg-charcoal">
    <NuxtLink
      :to="`/fleet/${vehicle.slug}`"
      class="block overflow-hidden border-b border-gold/10"
      @click="onSelect"
    >
      <AppImage
        :src="vehicle.image"
        :alt="`${vehicle.marque} ${vehicle.name}`"
        class="aspect-[4/3] w-full object-cover transition-opacity duration-700 group-hover:opacity-95"
        width="600"
        height="450"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        loading="lazy"
      />
    </NuxtLink>
    <div
      class="flex flex-1 flex-col"
      :class="flushContent ? 'pt-4 pb-5' : 'p-6 md:p-7'"
    >
      <p class="label-caps">{{ vehicleCategoryLabel(vehicle.category) }}</p>
      <h3 class="mt-2 text-lg font-semibold tracking-wide text-stone">
        <NuxtLink
          :to="`/fleet/${vehicle.slug}`"
          class="transition-colors duration-300 group-hover:text-gold"
        >
          {{ vehicle.marque }} {{ vehicle.name }}
        </NuxtLink>
      </h3>
      <p class="mt-2 flex-1 text-sm font-normal text-grey">{{ vehicle.tagline }}</p>
      <NuxtLink :to="`/fleet/${vehicle.slug}`" class="link-gold mt-5 text-sm">
        View details
      </NuxtLink>
    </div>
  </article>
</template>

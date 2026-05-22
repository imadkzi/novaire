<script setup lang="ts">
import { vehicleCategoryLabel } from '~/data/fleet'
import type { Vehicle } from '~/types'

defineProps<{
  vehicle: Vehicle
}>()
</script>

<template>
  <article class="group flex flex-col border border-gold/20 bg-charcoal transition-colors hover:border-gold/50">
    <NuxtLink :to="`/fleet/${vehicle.slug}`" class="block overflow-hidden">
      <AppImage
        :src="vehicle.image"
        :alt="`${vehicle.marque} ${vehicle.name}`"
        class="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
        width="600"
        height="450"
        loading="lazy"
      />
    </NuxtLink>
    <div class="flex flex-1 flex-col p-6">
      <p class="label-caps">{{ vehicleCategoryLabel(vehicle.category) }}</p>
      <h3 class="mt-2 text-lg font-bold uppercase tracking-wider text-stone">
        <NuxtLink :to="`/fleet/${vehicle.slug}`" class="hover:text-gold">
          {{ vehicle.marque }} {{ vehicle.name }}
        </NuxtLink>
      </h3>
      <p class="mt-2 flex-1 text-sm font-normal text-grey">{{ vehicle.tagline }}</p>
      <NuxtLink :to="`/fleet/${vehicle.slug}`" class="link-gold mt-4 text-xs uppercase tracking-widest">
        View details
      </NuxtLink>
    </div>
  </article>
</template>

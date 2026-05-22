<script setup lang="ts">
import { fleet, matchesFleetFilter } from '~/data/fleet'
import type { FleetCategory } from '~/types'

usePageSeo({
  title: 'Fleet',
  description:
    'Novaire fleet, Rolls-Royce Phantom, Dawn and Black Badge Cullinan chauffeur hire; Ferrari SF90 and Lamborghini Huracán self-drive. UK-wide.',
})

const filter = ref<FleetCategory>('all')

const filtered = computed(() => {
  if (filter.value === 'all') return fleet
  return fleet.filter((v) => matchesFleetFilter(v.category, filter.value))
})

const filters: { value: FleetCategory; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'chauffeur', label: 'Chauffeur' },
  { value: 'self-drive', label: 'Self drive' },
]
</script>

<template>
  <div>
    <section class="section-pad bg-charcoal pt-32">
      <div class="content-wrap">
        <SectionHeading
          label="Fleet"
          title="Choose your arrival"
          description="Filter by chauffeur or self-drive, including Cullinan available both ways. Every car is prepared to editorial standard."
        />
        <div class="mt-10 flex flex-wrap gap-6" role="tablist" aria-label="Filter fleet">
          <button
            v-for="f in filters"
            :key="f.value"
            type="button"
            role="tab"
            :aria-selected="filter === f.value"
            class="pb-1 text-sm tracking-wide transition-[color,box-shadow] duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-charcoal"
            :class="
              filter === f.value
                ? 'text-gold shadow-[inset_0_-1px_0_0] shadow-gold'
                : 'text-grey hover:text-stone'
            "
            @click="filter = f.value"
          >
            {{ f.label }}
          </button>
        </div>
        <div class="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-3 2xl:gap-12 4xl:gap-14">
          <VehicleCard
            v-for="vehicle in filtered"
            :key="vehicle.slug"
            :vehicle="vehicle"
            flush-content
          />
        </div>
      </div>
    </section>
    <CtaBand />
  </div>
</template>

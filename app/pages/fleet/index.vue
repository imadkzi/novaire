<script setup lang="ts">
import { fleet, matchesFleetFilter } from '~/data/fleet'
import type { FleetCategory } from '~/types'

usePageSeo({
  title: 'Fleet',
  description: 'Explore Novaire chauffeured and self-drive supercar fleet — Rolls-Royce, Bentley, Ferrari, and more.',
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
          title="Every arrival considered"
          description="Filter by experience — chauffeured luxury or self-drive supercars."
        />
        <div class="mt-10 flex flex-wrap gap-3" role="tablist" aria-label="Filter fleet">
          <button
            v-for="f in filters"
            :key="f.value"
            type="button"
            role="tab"
            :aria-selected="filter === f.value"
            class="border px-5 py-2 text-xs font-medium uppercase tracking-widest transition-colors"
            :class="
              filter === f.value
                ? 'border-gold bg-gold text-onyx'
                : 'border-gold/30 text-grey hover:border-gold hover:text-stone'
            "
            @click="filter = f.value"
          >
            {{ f.label }}
          </button>
        </div>
        <div class="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 2xl:gap-10 4xl:gap-12">
          <VehicleCard v-for="vehicle in filtered" :key="vehicle.slug" :vehicle="vehicle" />
        </div>
      </div>
    </section>
    <CtaBand />
  </div>
</template>

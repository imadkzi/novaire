<script setup lang="ts">
import { fleet } from '~/data/fleet'
import type { Vehicle } from '~/types'

const selected = ref<string[]>([])

const selectedVehicles = computed(() =>
  selected.value
    .map((slug) => fleet.find((v) => v.slug === slug))
    .filter((v): v is Vehicle => Boolean(v)),
)

const specLabels = computed(() => {
  const labels = new Set<string>()
  for (const v of selectedVehicles.value) {
    for (const spec of v.specs) labels.add(spec.label)
  }
  return [...labels]
})

function toggle(slug: string) {
  if (selected.value.includes(slug)) {
    selected.value = selected.value.filter((s) => s !== slug)
    return
  }
  if (selected.value.length >= 3) return
  selected.value = [...selected.value, slug]
}

function clearAll() {
  selected.value = []
}
</script>

<template>
  <div class="mt-12 rounded-lg border border-gold/15 bg-charcoal/40 p-6 md:p-8">
    <div class="flex flex-wrap items-end justify-between gap-4">
      <div>
        <p class="label-caps">Compare</p>
        <h2 class="heading-section mt-2 text-stone">Up to three vehicles</h2>
        <p class="mt-2 max-w-xl text-sm text-grey">
          Select vehicles to compare key specifications side by side.
        </p>
      </div>
      <button
        v-if="selected.length"
        type="button"
        class="link-gold text-sm"
        @click="clearAll"
      >
        Clear selection
      </button>
    </div>

    <div class="mt-6 flex flex-wrap gap-3">
      <button
        v-for="vehicle in fleet"
        :key="vehicle.slug"
        type="button"
        class="rounded border px-3 py-2 text-xs tracking-wide transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
        :class="
          selected.includes(vehicle.slug)
            ? 'border-gold bg-gold/10 text-gold'
            : 'border-gold/20 text-stone/80 hover:border-gold/40 hover:text-stone'
        "
        :disabled="!selected.includes(vehicle.slug) && selected.length >= 3"
        @click="toggle(vehicle.slug)"
      >
        {{ vehicle.marque }} {{ vehicle.name }}
      </button>
    </div>

    <div
      v-if="selectedVehicles.length >= 2"
      class="mt-8 overflow-x-auto"
      role="region"
      aria-label="Vehicle comparison table"
    >
      <table class="w-full min-w-[32rem] border-collapse text-left text-sm">
        <thead>
          <tr class="border-b border-gold/20">
            <th class="py-3 pr-4 font-medium text-grey" scope="col">Specification</th>
            <th
              v-for="vehicle in selectedVehicles"
              :key="vehicle.slug"
              class="py-3 pr-4 font-medium text-stone"
              scope="col"
            >
              {{ vehicle.marque }} {{ vehicle.name }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="label in specLabels"
            :key="label"
            class="border-b border-gold/10"
          >
            <th class="py-3 pr-4 font-normal text-grey" scope="row">{{ label }}</th>
            <td
              v-for="vehicle in selectedVehicles"
              :key="`${vehicle.slug}-${label}`"
              class="py-3 pr-4 text-stone/90"
            >
              {{ vehicle.specs.find((s) => s.label === label)?.value ?? '—' }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <p v-else-if="selected.length === 1" class="mt-6 text-sm text-grey">
      Select at least one more vehicle to compare.
    </p>
  </div>
</template>

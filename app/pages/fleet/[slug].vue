<script setup lang="ts">
import { getVehicle, vehicleCategoryLabelLong } from '~/data/fleet'

const route = useRoute()
const slug = route.params.slug as string
const vehicle = getVehicle(slug)

if (!vehicle) {
  throw createError({ statusCode: 404, statusMessage: 'Vehicle not found' })
}

usePageSeo({
  title: `${vehicle.marque} ${vehicle.name}`,
  description: vehicle.description,
  image: vehicle.image,
})
</script>

<template>
  <div v-if="vehicle">
    <section class="relative min-h-[70vh] overflow-hidden bg-onyx pt-24">
      <FeatureFadeMedia
        :src="vehicle.heroImage"
        :alt="`${vehicle.marque} ${vehicle.name}`"
        variant="hero"
      />
      <div class="relative flex min-h-[calc(70vh-6rem)] flex-col justify-end">
        <div class="content-wrap content-pad-x pb-12 md:pb-14">
          <p class="label-caps text-gold">
            {{ vehicleCategoryLabelLong(vehicle.category) }}
          </p>
          <h1 class="heading-display mt-3">{{ vehicle.marque }} {{ vehicle.name }}</h1>
          <p class="mt-4 max-w-xl text-lg font-normal text-stone/90">
            {{ vehicle.tagline }}
          </p>
          <NuxtLink
            :to="{ path: '/contact', query: { vehicle: `${vehicle.marque} ${vehicle.name}` } }"
            class="btn-primary-solid mt-6"
          >
            Request quote
          </NuxtLink>
        </div>
      </div>
    </section>

    <section class="bg-onyx">
      <div class="section-pad">
        <div class="content-wrap">
          <div class="grid gap-12 lg:grid-cols-12 lg:gap-20">
            <div class="lg:col-span-4">
              <p class="label-caps">The vehicle</p>
              <h2 class="heading-section mt-3">Overview</h2>
            </div>
            <div class="space-y-6 lg:col-span-8 lg:pt-2">
              <p class="text-lg font-normal leading-relaxed text-stone md:text-xl md:leading-relaxed">
                {{ vehicle.description }}
              </p>
              <p class="font-normal leading-relaxed text-grey md:text-lg md:leading-relaxed">
                {{ vehicle.intro }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <VehicleEditorialGallery
      :sections="vehicle.editorial"
      :marque="vehicle.marque"
      :name="vehicle.name"
    />

    <section class="section-pad bg-onyx">
      <div class="content-wrap">
        <p class="label-caps">At a glance</p>
        <h2 class="heading-section mt-3">Performance & presence</h2>
        <div class="mt-10">
          <VehicleHighlights :highlights="vehicle.highlights" />
        </div>
        <dl class="mt-10 grid gap-6 border-t border-gold/20 pt-10 sm:grid-cols-3">
          <div v-for="spec in vehicle.specs" :key="spec.label">
            <dt class="label-caps">{{ spec.label }}</dt>
            <dd class="mt-2 text-sm text-stone">{{ spec.value }}</dd>
          </div>
        </dl>
      </div>
    </section>

    <CtaBand
      :vehicle="`${vehicle.marque} ${vehicle.name}`"
      title="Reserve this vehicle"
      description="Share your dates, location, and vision — we will respond with availability and a tailored Novaire proposal."
    />
  </div>
</template>

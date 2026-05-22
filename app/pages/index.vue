<script setup lang="ts">
import { getFeaturedFleet } from '~/data/fleet'
import { services } from '~/data/services'
import { images } from '~/data/images'

usePageSeo({
  title: 'Chauffeured & Self-Drive Supercars',
  description:
    'Novaire — luxury chauffeured travel, self-drive supercars, weddings, galas, airport transfers, and film hire.',
})

const featured = getFeaturedFleet()
const featuredServices = services.slice(0, 3)
</script>

<template>
  <div>
    <section class="relative flex min-h-[90vh] items-end">
      <AppImage
        :src="images.hero"
        alt="Luxury chauffeured vehicle at night"
        class="absolute inset-0 h-full w-full object-cover"
        width="1920"
        height="1080"
        fetchpriority="high"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-onyx via-onyx/60 to-onyx/30" />
      <div class="relative content-wrap w-full section-pad pb-24 pt-32">
        <p class="label-caps text-gold">Quiet wealth · Modern luxury</p>
        <h1 class="heading-display mt-4 max-w-3xl xl:max-w-4xl 2xl:max-w-5xl">
          Not car hire.<br />An experience.
        </h1>
        <p class="mt-6 max-w-xl text-lg font-normal leading-relaxed text-stone/90 xl:max-w-2xl 2xl:text-xl">
          Chauffeured Rolls-Royce including Cullinan. Self-drive Ferrari, Lamborghini, and more.
          Weddings, galas, airport transfers, and film productions.
        </p>
        <div class="mt-10 flex flex-wrap gap-4">
          <NuxtLink to="/fleet" class="btn-primary-solid">Explore fleet</NuxtLink>
          <NuxtLink to="/contact" class="btn-primary">Request quote</NuxtLink>
        </div>
      </div>
    </section>

    <section class="section-pad bg-onyx">
      <div class="content-wrap">
        <SectionHeading
          label="The fleet"
          title="Curated for presence"
          description="Every vehicle is selected for occasion, not volume — chauffeur-driven elegance or self-drive theatre."
        />
        <div class="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 2xl:gap-10 3xl:grid-cols-3 4xl:gap-12">
          <VehicleCard v-for="vehicle in featured" :key="vehicle.slug" :vehicle="vehicle" />
        </div>
        <div class="mt-12 text-center">
          <NuxtLink to="/fleet" class="btn-primary">View full fleet</NuxtLink>
        </div>
      </div>
    </section>

    <section class="section-pad bg-charcoal">
      <div class="content-wrap">
        <SectionHeading
          label="Services"
          title="Beyond the journey"
          description="We orchestrate arrivals, productions, and celebrations — precision in every detail."
        />
        <div class="mt-14 grid gap-8 md:grid-cols-3 2xl:gap-10 4xl:gap-12">
          <ServiceCard v-for="service in featuredServices" :key="service.slug" :service="service" />
        </div>
        <div class="mt-12">
          <NuxtLink to="/services" class="link-gold text-xs uppercase tracking-widest">
            All services →
          </NuxtLink>
        </div>
      </div>
    </section>

    <section class="section-pad bg-stone text-onyx">
      <div class="content-wrap grid gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <p class="label-caps text-charcoal/70">The Novaire difference</p>
          <h2 class="mt-4 text-3xl font-bold uppercase tracking-wider md:text-4xl">
            Opulence without announcement
          </h2>
          <p class="mt-6 font-normal leading-relaxed text-charcoal/80">
            From bridal arrivals to music-video units, Novaire is built for clients who measure luxury in
            discretion, timing, and finish — not fleet size.
          </p>
          <NuxtLink to="/experience" class="btn-on-stone mt-8">Our experience</NuxtLink>
        </div>
        <blockquote class="border-l-2 border-gold pl-8">
          <p class="text-xl font-normal italic leading-relaxed text-charcoal">
            “The arrival was flawless — the car, the chauffeur, the timing. Exactly what our gala required.”
          </p>
          <footer class="mt-4 text-xs uppercase tracking-widest text-charcoal/60">— Private client, London</footer>
        </blockquote>
      </div>
    </section>

    <CtaBand />
  </div>
</template>

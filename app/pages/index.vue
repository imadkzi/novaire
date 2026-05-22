<script setup lang="ts">
import { getFeaturedFleet } from '~/data/fleet'
import { services } from '~/data/services'
import { images } from '~/data/images'

usePageSeo({
  title: 'Chauffeured & Self-Drive Supercars',
  description:
    'Novaire, Rolls-Royce Phantom, Dawn and Cullinan chauffeur hire, Ferrari SF90 and Lamborghini Huracán self-drive, for weddings, galas, airport transfers and film.',
})

const featured = getFeaturedFleet()
const featuredServices = services.slice(0, 3)
</script>

<template>
  <div>
    <section class="relative flex min-h-[90vh] items-end overflow-hidden">
      <div class="absolute inset-0 overflow-hidden">
        <AppImage
          :src="images.hero"
          alt="Luxury chauffeured vehicle at night"
          class="hero-ken-burns h-full w-full object-cover"
          width="1920"
          height="1080"
          fetchpriority="high"
        />
      </div>
      <div
        class="absolute inset-0 bg-gradient-to-t from-onyx from-25% via-onyx/75 via-45% to-onyx/15"
      />
      <div class="relative content-wrap w-full section-pad pb-28 pt-32 md:pb-32">
        <p class="label-caps text-gold">Chauffeured & self-drive</p>
        <h1 class="heading-display mt-4 max-w-3xl xl:max-w-4xl 2xl:max-w-5xl">
          Arrive with<br />intention.
        </h1>
        <p class="mt-6 max-w-lg text-lg font-normal leading-relaxed text-stone/90 md:text-xl">
          Chauffeured luxury and self-drive supercars for weddings, galas, airport transfers and
          productions across the UK.
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
          description="A hand-picked fleet for chauffeur and self-drive hire. Right car. Right moment."
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
          title="Every occasion, considered"
          description="Six services from bridal mornings to music-video units, explore the full range or start with our most requested below."
        />
        <div class="mt-14 grid gap-8 md:grid-cols-3 2xl:gap-10 4xl:gap-12">
          <ServiceCard v-for="service in featuredServices" :key="service.slug" :service="service" />
        </div>
        <div class="mt-12">
          <NuxtLink to="/services" class="link-gold text-sm">
            All six services →
          </NuxtLink>
        </div>
      </div>
    </section>

    <section class="section-pad bg-stone text-onyx">
      <div class="content-wrap grid gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <p class="label-caps text-charcoal/70">Why Novaire</p>
          <h2 class="heading-section mt-4 text-onyx">
            The details guests notice
          </h2>
          <p class="mt-6 font-normal leading-relaxed text-charcoal/80">
            Immaculate presentation, routes agreed in advance, and vehicles that photograph as well as they
            drive. Whether you are hosting a wedding party or closing a gala, we treat arrival as part of the
            event, not an afterthought.
          </p>
          <NuxtLink to="/experience" class="btn-on-stone mt-8">Our experience</NuxtLink>
        </div>
        <blockquote class="border-l-2 border-gold pl-8">
          <p class="text-xl font-normal italic leading-relaxed text-charcoal">
            “Our wedding morning ran to time because the chauffeur already knew the venue, the photos, and
            when we needed five more minutes. That level of calm is rare.”
          </p>
          <footer class="mt-4 text-xs tracking-wide text-charcoal/60">
            Bride, Cotswolds estate
          </footer>
        </blockquote>
      </div>
    </section>

    <CtaBand />
  </div>
</template>

<script setup lang="ts">
import { getFeaturedFleet } from '~/data/fleet'
import { getHomeFeaturedServices } from '~/data/services'
import { getHomeTestimonials } from '~/data/testimonials'
import { images } from '~/data/images'

usePageSeo({
  title: 'Chauffeured & Self-Drive Supercars',
  description:
    'Novaire, Rolls-Royce and Ferrari chauffeur hire, Lamborghini Huracán and supercar self-drive, for weddings, galas, airport transfers and film across the UK.',
  image: images.hero,
})

useHead({
  link: [{ rel: 'preload', as: 'image', href: images.hero }],
})

const featured = getFeaturedFleet()
const featuredServices = getHomeFeaturedServices()
const homeTestimonials = getHomeTestimonials()
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
          description="From bridal mornings to music-video units, explore the full range or start with our most requested below."
        />
        <HomeServicesShowcase :services="featuredServices" />
        <div class="mt-12">
          <NuxtLink to="/services" class="link-gold text-sm">
            All services →
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
        <div class="space-y-6 md:space-y-8">
          <TestimonialQuote
            v-for="(item, index) in homeTestimonials"
            :key="item.id"
            :testimonial="item"
            :emphasized="index === 0"
            compact
          />
          <p class="text-sm">
            <NuxtLink to="/experience" class="link-gold-on-stone">More notes from recent hires →</NuxtLink>
          </p>
        </div>
      </div>
    </section>

    <TrustStrip class="hidden md:block" />

    <CtaBand />
  </div>
</template>

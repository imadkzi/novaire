<script setup lang="ts">
import { images } from '~/data/images'

usePageSeo({
  title: 'The Experience',
  description:
    'Novaire is not typical car hire — quiet wealth, chauffeured precision, and self-drive supercars for discerning clients.',
})
</script>

<template>
  <div>
    <section class="relative flex min-h-[70vh] items-end pt-24">
      <AppImage
        :src="images.experience"
        alt="Elegant evening event"
        class="absolute inset-0 h-full w-full object-cover"
        width="1600"
        height="900"
      />
      <div class="absolute inset-0 bg-onyx/70" />
      <div class="relative content-wrap section-pad">
        <p class="label-caps text-gold">The Novaire experience</p>
        <h1 class="heading-display mt-4 max-w-2xl">Quiet wealth in motion</h1>
      </div>
    </section>

    <section class="section-pad bg-onyx">
      <div class="content-wrap max-w-3xl space-y-8 text-lg font-normal leading-relaxed text-grey xl:max-w-4xl 2xl:max-w-5xl 2xl:text-xl">
        <p>
          Novaire was founded on a simple premise: luxury transport is not about getting from A to B. It is
          about how you arrive, how you feel, and how your story is told — whether that story is a wedding,
          a gala, a board meeting, or a music video.
        </p>
        <p>
          We are not a volume hire desk. Our fleet is curated. Our chauffeurs are trained to anticipate. Our
          self-drive supercars are prepared for clients who understand that the vehicle is part of the
          production, the celebration, or the weekend.
        </p>
        <p>
          Editorial in aesthetic, geometric in precision — Novaire reflects modern opulence: restrained,
          intentional, and unmistakably premium.
        </p>
      </div>
    </section>

    <section class="section-pad bg-stone text-onyx">
      <div class="content-wrap">
        <h2 class="heading-section text-onyx">What we stand for</h2>
        <ul class="mt-12 grid gap-10 md:grid-cols-3">
          <li>
            <p class="label-caps text-charcoal/70">Precision</p>
            <p class="mt-3 font-normal text-charcoal/80">Timing, presentation, and route planning executed without drama.</p>
          </li>
          <li>
            <p class="label-caps text-charcoal/70">Discretion</p>
            <p class="mt-3 font-normal text-charcoal/80">Your privacy and your occasion treated with equal respect.</p>
          </li>
          <li>
            <p class="label-caps text-charcoal/70">Presence</p>
            <p class="mt-3 font-normal text-charcoal/80">Vehicles and service that speak softly — and carry weight.</p>
          </li>
        </ul>
      </div>
    </section>

    <CtaBand />
  </div>
</template>

<script setup lang="ts">
import { images } from '~/data/images'

usePageSeo({
  title: 'The Experience',
  description:
    'How Novaire works, curated fleet, trained chauffeurs, self-drive briefings, and editorial attention for weddings, galas, airports and productions.',
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
      <div
        class="absolute inset-0 bg-gradient-to-t from-onyx from-20% via-onyx/80 via-50% to-onyx/25"
      />
      <div class="relative content-wrap section-pad pb-20">
        <p class="label-caps text-gold">The Novaire experience</p>
        <h1 class="heading-display mt-4 max-w-2xl">Quiet wealth in motion</h1>
        <p class="mt-6 max-w-xl text-lg font-normal leading-relaxed text-stone/90">
          Luxury transport shaped around how you arrive, not how many cars we own.
        </p>
      </div>
    </section>

    <section class="section-pad bg-onyx">
      <div class="content-wrap max-w-3xl space-y-8 text-lg font-normal leading-relaxed text-grey xl:max-w-4xl 2xl:max-w-5xl 2xl:text-xl">
        <p>
          Novaire began with a simple observation: the right vehicle at the right moment changes how an
          entire day feels. A wedding entrance, a charity gala, a transatlantic landing, a night shoot on
          closed roads, each asks for different pace, presentation, and discretion.
        </p>
        <p>
          We keep the fleet intentionally small. Every Rolls-Royce and every supercar is maintained and
          presented to editorial standard. Chauffeurs are briefed on your schedule before they collect you;
          self-drive clients receive the same rigour, modes, routes, and recovery, before keys change hands.
        </p>
        <p>
          The aesthetic is modern and restrained: geometry in layout, warmth in service, confidence without
          noise. Novaire is for hosts, artists, and executives who care how the story looks when the door opens.
        </p>
      </div>
    </section>

    <section class="section-pad bg-stone text-onyx">
      <div class="content-wrap">
        <h2 class="heading-section text-onyx">What we stand for</h2>
        <ul class="mt-12 grid gap-10 md:grid-cols-3">
          <li>
            <p class="label-caps text-charcoal/70">Precision</p>
            <p class="mt-3 font-normal text-charcoal/80">
              Multi-stop days mapped in advance, venue access, photo holds, and flight delays absorbed without
              you managing the diary from the back seat.
            </p>
          </li>
          <li>
            <p class="label-caps text-charcoal/70">Discretion</p>
            <p class="mt-3 font-normal text-charcoal/80">
              Chauffeurs who understand when to converse and when to vanish. Your guest list, your venue, and
              your privacy handled with the same care as the vehicle.
            </p>
          </li>
          <li>
            <p class="label-caps text-charcoal/70">Presence</p>
            <p class="mt-3 font-normal text-charcoal/80">
              Phantom, Dawn, Cullinan, SF90, Huracán, chosen because they carry weight in a frame and on a
              kerb, not because they fill a spreadsheet.
            </p>
          </li>
        </ul>
      </div>
    </section>

    <CtaBand />
  </div>
</template>

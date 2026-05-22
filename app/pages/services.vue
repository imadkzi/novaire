<script setup lang="ts">
import { services } from '~/data/services'

usePageSeo({
  title: 'Services',
  description:
    'Weddings, galas, luxury airport transfers, film and music video hire, chauffeured Rolls-Royce and self-drive Ferrari and Lamborghini, Novaire, UK-wide.',
})

function isDarkBand(index: number) {
  return index % 2 === 0
}
</script>

<template>
  <div>
    <section class="section-pad bg-charcoal pt-32 pb-12 md:pb-16">
      <div class="content-wrap">
        <SectionHeading
          label="Services"
          title="Your occasion, orchestrated"
          description="We are an experience partner, not a booking line. Tell us the moment; we align vehicle, chauffeur or briefing, and timing."
        />
      </div>
    </section>

    <section
      v-for="(service, index) in services"
      :key="service.slug"
      class="section-pad"
      :class="isDarkBand(index) ? 'bg-charcoal' : 'bg-stone text-onyx'"
    >
      <article
        class="content-wrap grid gap-10 md:grid-cols-2 md:items-center md:gap-16"
        :class="index % 2 === 1 ? 'md:[&>div:first-child]:order-2' : ''"
      >
        <div>
          <h2 class="heading-section" :class="isDarkBand(index) ? '' : 'text-onyx'">
            {{ service.title }}
          </h2>
          <p
            class="mt-5 max-w-lg font-normal leading-relaxed"
            :class="isDarkBand(index) ? 'text-grey' : 'text-charcoal/80'"
          >
            {{ service.description }}
          </p>
          <NuxtLink
            :to="{ path: '/contact', query: { service: service.title } }"
            class="mt-8"
            :class="isDarkBand(index) ? 'btn-primary' : 'btn-on-stone'"
          >
            Enquire
          </NuxtLink>
        </div>
        <AppImage
          :src="service.image"
          :alt="service.title"
          class="aspect-[16/10] w-full object-cover"
          width="700"
          height="440"
          loading="lazy"
        />
      </article>
    </section>

    <CtaBand />
  </div>
</template>

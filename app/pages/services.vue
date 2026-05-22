<script setup lang="ts">
import { services } from '~/data/services'

usePageSeo({
  title: 'Services',
  description:
    'Weddings, galas, luxury airport transfers, film and music video hire, chauffeured and self-drive supercars.',
})
</script>

<template>
  <div>
    <section class="section-pad bg-charcoal pt-32">
      <div class="content-wrap">
        <SectionHeading
          label="Services"
          title="Crafted for the occasion"
          description="Novaire is an experience partner — not a booking line. Each service is delivered with editorial attention to detail."
        />
        <div class="mt-14 grid gap-10">
          <article
            v-for="(service, index) in services"
            :key="service.slug"
            class="grid gap-8 border border-gold/20 bg-onyx p-8 md:grid-cols-2 md:items-center md:p-12"
            :class="index % 2 === 1 ? 'md:[&>div:first-child]:order-2' : ''"
          >
            <div>
              <p class="label-caps">{{ service.slug.replace('-', ' ') }}</p>
              <h2 class="heading-section mt-2">{{ service.title }}</h2>
              <p class="mt-4 font-normal leading-relaxed text-grey">{{ service.description }}</p>
              <NuxtLink
                :to="{ path: '/contact', query: { service: service.title } }"
                class="btn-primary mt-8"
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
        </div>
      </div>
    </section>
    <CtaBand />
  </div>
</template>

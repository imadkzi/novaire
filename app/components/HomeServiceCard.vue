<script setup lang="ts">
import type { Service } from '~/types'

defineProps<{
  service: Service
}>()

function contactLink(slug: string) {
  return { path: '/contact', query: { service: slug } }
}
</script>

<template>
  <NuxtLink
    :to="contactLink(service.slug)"
    class="group relative block overflow-hidden border border-gold/10 transition-[border-color,box-shadow] duration-300 hover:border-gold/50 hover:shadow-[0_12px_40px_-20px_rgba(184,149,106,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-charcoal"
    :aria-label="`Enquire about ${service.title}`"
  >
    <AppImage
      :src="service.image"
      :alt="service.title"
      class="aspect-[4/5] w-full object-cover transition-[transform,filter] duration-500 ease-out group-hover:scale-[1.03] group-hover:brightness-105"
      width="500"
      height="625"
      sizes="(max-width: 768px) 100vw, 33vw"
      loading="lazy"
    />
    <div
      class="pointer-events-none absolute inset-0 bg-gradient-to-t from-charcoal/75 from-0% via-charcoal/25 via-[14%] to-transparent transition-opacity duration-300 group-hover:from-charcoal/85 group-hover:via-charcoal/35"
      aria-hidden="true"
    />
    <div
      class="pointer-events-none absolute inset-0 bg-gold/0 transition-colors duration-300 group-hover:bg-gold/[0.06]"
      aria-hidden="true"
    />
    <div class="absolute inset-x-0 bottom-0 p-5 md:p-6">
      <p class="label-caps text-stone/70 transition-colors duration-300 group-hover:text-gold/80">
        {{ service.label }}
      </p>
      <h3
        class="mt-2 text-lg font-semibold tracking-wide text-stone transition-colors duration-300 group-hover:text-gold"
      >
        {{ service.title }}
      </h3>
      <p class="mt-2 text-sm leading-relaxed text-stone/80 transition-colors duration-300 group-hover:text-stone">
        {{ service.summary }}
      </p>
      <p
        class="mt-3 text-sm text-gold opacity-90 transition-[opacity,transform] duration-300 md:translate-y-1 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100 md:group-focus-visible:translate-y-0 md:group-focus-visible:opacity-100"
      >
        Enquire →
      </p>
    </div>
  </NuxtLink>
</template>

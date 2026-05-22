<script setup lang="ts">
import type { Service } from '~/types'

defineProps<{
  service: Service
}>()
</script>

<template>
  <article class="group bg-charcoal/80 transition-colors hover:bg-charcoal">
    <div class="overflow-hidden border-b border-gold/10">
      <AppImage
        :src="service.image"
        :alt="service.title"
        class="aspect-[16/10] w-full object-cover transition-opacity duration-700 group-hover:opacity-95"
        width="500"
        height="312"
        loading="lazy"
      />
    </div>
    <div class="p-6 md:p-7">
      <h3 class="text-lg font-semibold tracking-wide text-stone">{{ service.title }}</h3>
      <p class="mt-2 text-sm font-normal leading-relaxed text-grey">{{ service.summary }}</p>
    </div>
  </article>
</template>

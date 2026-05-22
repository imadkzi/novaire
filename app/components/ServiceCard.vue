<script setup lang="ts">
import type { Service } from '~/types'

defineProps<{
  service: Service
}>()
</script>

<template>
  <article class="group border border-gold/20 bg-charcoal">
    <div class="overflow-hidden">
      <AppImage
        :src="service.image"
        :alt="service.title"
        class="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-105"
        width="500"
        height="312"
        loading="lazy"
      />
    </div>
    <div class="p-6">
      <h3 class="text-lg font-bold uppercase tracking-wider text-stone">{{ service.title }}</h3>
      <p class="mt-2 text-sm font-normal text-grey">{{ service.summary }}</p>
    </div>
  </article>
</template>

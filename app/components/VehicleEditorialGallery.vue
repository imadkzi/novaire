<script setup lang="ts">
import type { VehicleEditorialSection } from '~/types'

defineProps<{
  sections: VehicleEditorialSection[]
  marque: string
  name: string
}>()


function editorialImageClass(section: VehicleEditorialSection) {
  return section.aspect === 'landscape'
    ? 'aspect-[3/2] w-full object-cover lg:aspect-[2/1]'
    : 'aspect-[4/5] w-full object-cover lg:aspect-[3/4]'
}
</script>

<template>
  <div>
    <section
      v-for="section in sections"
      :key="section.image"
      :class="
        section.layout === 'editorial'
          ? 'section-pad bg-stone text-onyx'
          : section.layout === 'detail'
            ? 'section-pad bg-charcoal'
            : 'bg-onyx'
      "
    >
      <template v-if="section.layout === 'feature'">
        <FeatureFadeMedia
          :src="section.image"
          :alt="`${marque} ${name}, ${section.title}`"
          :aspect="section.aspect === 'landscape' ? 'landscape' : 'default'"
          variant="feature"
        >
          <div class="content-wrap content-pad-x pb-12 pt-8 lg:pb-14 lg:pt-32 xl:pt-40">
            <p class="label-caps text-gold">{{ section.eyebrow }}</p>
            <h3 class="heading-editorial mt-3 text-stone">
              {{ section.title }}
            </h3>
            <p v-if="section.pullQuote" class="mt-4 text-base italic text-gold md:text-lg">
              {{ section.pullQuote }}
            </p>
            <p class="mt-4 max-w-3xl font-normal leading-relaxed text-grey">
              {{ section.body }}
            </p>
          </div>
        </FeatureFadeMedia>
      </template>

      <div
        v-else-if="section.layout === 'editorial'"
        class="content-wrap grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
      >
        <div :class="section.imageRight ? 'lg:order-2' : 'lg:order-1'">
          <p class="label-caps text-charcoal/60">{{ section.eyebrow }}</p>
          <h3 class="heading-editorial mt-3">
            {{ section.title }}
          </h3>
          <p v-if="section.pullQuote" class="mt-4 text-sm italic text-gold md:text-base">
            {{ section.pullQuote }}
          </p>
          <p class="mt-4 font-normal leading-relaxed text-charcoal/80 md:text-base">
            {{ section.body }}
          </p>
        </div>
        <div :class="section.imageRight ? 'lg:order-1' : 'lg:order-2'">
          <AppImage
            :src="section.image"
            :alt="`${marque} ${name}, ${section.title}`"
            :class="editorialImageClass(section)"
            width="800"
            height="1000"
            loading="lazy"
          />
        </div>
      </div>

      <div v-else class="content-wrap">
        <div class="grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-12">
          <div class="lg:col-span-8">
            <AppImage
              :src="section.image"
              :alt="`${marque} ${name}, ${section.title}`"
              class="image-fade-charcoal aspect-[3/2] w-full object-cover lg:image-fade-none"
              width="1200"
              height="800"
              loading="lazy"
            />
          </div>
          <div class="lg:col-span-4 lg:pt-2">
            <p class="label-caps text-gold">{{ section.eyebrow }}</p>
            <h3 class="heading-editorial mt-3 text-stone">
              {{ section.title }}
            </h3>
            <p v-if="section.pullQuote" class="mt-3 text-sm italic text-gold">
              {{ section.pullQuote }}
            </p>
            <p class="mt-4 font-normal leading-relaxed text-grey">
              {{ section.body }}
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

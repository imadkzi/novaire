<script setup lang="ts">
const props = defineProps<{
  src: string
  alt: string
  aspect?: 'landscape' | 'default'
  variant?: 'feature' | 'hero'
}>()

const img = useImage()

const stackedAspectClass = computed(() =>
  props.aspect === 'landscape' ? 'aspect-[3/2] w-full' : 'aspect-[16/9] w-full',
)

const overlayAspectClass = computed(() =>
  props.aspect === 'landscape'
    ? 'aspect-[5/2] w-full'
    : 'aspect-[2/1] w-full',
)

const mediaStyle = computed(() => {
  const size =
    props.variant === 'hero'
      ? { width: 1920, height: 1080 }
      : { width: 1600, height: 800 }
  const url = img(props.src, size)

  return {
    backgroundImage: `url('${url}')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }
})
</script>

<template>
  <div v-if="variant === 'hero'" class="absolute inset-0 bg-onyx">
    <div
      class="absolute inset-0 bg-cover bg-center bg-no-repeat feature-fade-mask-hero"
      :style="mediaStyle"
      aria-hidden="true"
    />
  </div>

  <div v-else :class="['w-full bg-onyx lg:relative lg:flex lg:flex-col', overlayAspectClass]">
    <!-- Mobile: full image, no overlay -->
    <div
      :class="stackedAspectClass"
      class="bg-cover bg-center bg-no-repeat lg:hidden"
      :style="mediaStyle"
      role="img"
      :aria-label="alt"
    />

    <!-- Desktop: background with fade into copy -->
    <div
      class="absolute inset-0 hidden bg-cover bg-center bg-no-repeat feature-fade-mask lg:block"
      :style="mediaStyle"
      aria-hidden="true"
    />

    <p class="sr-only">{{ alt }}</p>
    <div class="relative z-10 w-full lg:mt-auto">
      <slot />
    </div>
  </div>
</template>

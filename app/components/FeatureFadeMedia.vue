<script setup lang="ts">
const props = defineProps<{
  src: string
  alt: string
  aspect?: 'landscape' | 'default'
  variant?: 'feature' | 'hero'
}>()

const img = useImage()

const aspectClass = computed(() => {
  if (props.variant === 'hero') {
    return 'absolute inset-0'
  }
  return props.aspect === 'landscape'
    ? 'aspect-[2/1] w-full lg:aspect-[5/2]'
    : 'aspect-[16/9] w-full lg:aspect-[2/1]'
})

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
  <div
    :class="[
      aspectClass,
      variant === 'feature' ? 'relative flex w-full flex-col bg-onyx' : 'bg-onyx',
    ]"
  >
    <div
      class="absolute inset-0 bg-cover bg-center bg-no-repeat feature-fade-mask"
      :class="variant === 'hero' ? 'feature-fade-mask-hero' : ''"
      :style="mediaStyle"
      aria-hidden="true"
    />
    <template v-if="variant === 'feature'">
      <p class="sr-only">{{ alt }}</p>
      <div class="relative z-10 mt-auto w-full">
        <slot />
      </div>
    </template>
  </div>
</template>

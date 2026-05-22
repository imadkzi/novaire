<script setup lang="ts">
/**
 * Remote URLs load directly in the browser (avoids IPX server fetch, which
 * often fails behind corporate TLS proxies). Local /public assets use NuxtImg.
 */
const props = defineProps<{
  src: string
  alt?: string
  width?: number | string
  height?: number | string
}>()

const isRemote = computed(() => /^https?:\/\//i.test(props.src))
</script>

<template>
  <img
    v-if="isRemote"
    :src="src"
    :alt="alt"
    :width="width"
    :height="height"
    v-bind="$attrs"
  />
  <NuxtImg
    v-else
    :src="src"
    :alt="alt"
    :width="width"
    :height="height"
    v-bind="$attrs"
  />
</template>

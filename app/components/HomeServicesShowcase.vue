<script setup lang="ts">
import type { Service } from '~/types'

const props = defineProps<{
  services: Service[]
}>()

const activeIndex = ref(0)
const reducedMotion = ref(false)
const paused = ref(false)

const count = computed(() => props.services.length)

function goTo(index: number) {
  if (count.value === 0) return
  activeIndex.value = ((index % count.value) + count.value) % count.value
}

function next() {
  goTo(activeIndex.value + 1)
}

let timer: ReturnType<typeof setInterval> | null = null

function startTimer() {
  stopTimer()
  if (count.value <= 1 || reducedMotion.value) return
  timer = setInterval(() => {
    if (!paused.value) next()
  }, 8000)
}

function stopTimer() {
  if (timer) {
    clearInterval(timer)
    timer = null
  }
}

onMounted(() => {
  reducedMotion.value = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  startTimer()
})

onUnmounted(stopTimer)

watch(
  () => props.services.length,
  () => {
    if (activeIndex.value >= props.services.length) activeIndex.value = 0
    startTimer()
  },
)
</script>

<template>
  <div class="mt-14">
    <!-- Mobile: auto-advancing slides -->
    <div
      class="md:hidden"
      role="region"
      aria-roledescription="carousel"
      aria-label="Featured services"
      @mouseenter="paused = true"
      @mouseleave="paused = false"
      @focusin="paused = true"
      @focusout="paused = false"
    >
      <div class="overflow-hidden">
        <ul
          class="flex"
          :class="reducedMotion ? '' : 'transition-transform duration-500 ease-out'"
          :style="{ transform: `translateX(-${activeIndex * 100}%)` }"
          role="list"
        >
          <li
            v-for="service in services"
            :key="service.slug"
            class="w-full shrink-0"
            role="listitem"
          >
            <HomeServiceCard :service="service" />
          </li>
        </ul>
      </div>
    </div>

    <!-- Desktop: grid -->
    <ul class="hidden gap-2 md:grid md:grid-cols-3" role="list">
      <li v-for="service in services" :key="service.slug">
        <HomeServiceCard :service="service" />
      </li>
    </ul>
  </div>
</template>

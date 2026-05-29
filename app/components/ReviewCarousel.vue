<script setup lang="ts">
import type { Testimonial } from '~/data/testimonials'

const props = defineProps<{
  testimonials: Testimonial[]
}>()

const active = ref(0)
const paused = ref(false)
const reducedMotion = ref(false)

const current = computed(() => props.testimonials[active.value])

let timer: ReturnType<typeof setInterval> | null = null

function goTo(index: number) {
  const count = props.testimonials.length
  if (count === 0) return
  active.value = ((index % count) + count) % count
}

function next() {
  goTo(active.value + 1)
}

function prev() {
  goTo(active.value - 1)
}

function startTimer() {
  stopTimer()
  if (props.testimonials.length <= 1 || reducedMotion.value) return
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
  () => props.testimonials.length,
  () => {
    if (active.value >= props.testimonials.length) active.value = 0
    startTimer()
  },
)
</script>

<template>
  <div
    class="relative"
    @mouseenter="paused = true"
    @mouseleave="paused = false"
    @focusin="paused = true"
    @focusout="paused = false"
  >
    <div class="overflow-hidden">
      <Transition
        mode="out-in"
        enter-active-class="motion-safe-transition transition duration-500 ease-out"
        enter-from-class="opacity-0 translate-y-2"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="motion-safe-transition transition duration-300 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-2"
      >
        <TestimonialQuote
          v-if="current"
          :key="current.id"
          :testimonial="current"
          variant="carousel"
        />
      </Transition>
    </div>

    <div
      v-if="testimonials.length > 1"
      class="mt-10 flex flex-wrap items-center justify-between gap-4"
    >
      <div class="flex gap-2" role="tablist" aria-label="Review slides">
        <button
          v-for="(_, index) in testimonials"
          :key="index"
          type="button"
          role="tab"
          :aria-selected="active === index"
          :aria-label="`Show review ${index + 1} of ${testimonials.length}`"
          class="h-2 w-2 rounded-full transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-stone"
          :class="active === index ? 'bg-gold' : 'bg-charcoal/25 hover:bg-charcoal/40'"
          @click="goTo(index)"
        />
      </div>
      <div class="flex gap-2">
        <button
          type="button"
          class="inline-flex h-10 w-10 items-center justify-center border border-onyx/20 text-onyx transition-colors duration-300 hover:border-onyx hover:bg-onyx hover:text-stone focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-stone"
          aria-label="Previous review"
          @click="prev"
        >
          ←
        </button>
        <button
          type="button"
          class="inline-flex h-10 w-10 items-center justify-center border border-onyx/20 text-onyx transition-colors duration-300 hover:border-onyx hover:bg-onyx hover:text-stone focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-stone"
          aria-label="Next review"
          @click="next"
        >
          →
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { faqItems } from '~/data/faq'

usePageSeo({
  title: 'FAQ',
  description:
    'Frequently asked questions about Novaire chauffeured Rolls-Royce and self-drive supercar hire, bookings, coverage, and insurance.',
})

useFaqJsonLd()

const openIndex = ref<number | null>(0)

function toggle(index: number) {
  openIndex.value = openIndex.value === index ? null : index
}
</script>

<template>
  <div>
    <section class="section-pad bg-charcoal pt-32 pb-12">
      <div class="content-wrap max-w-3xl">
        <SectionHeading
          label="FAQ"
          title="Questions, answered"
          description="Practical detail on how Novaire works. For a tailored quote, use the form and we will respond within one business day."
        />
      </div>
    </section>

    <section class="section-pad bg-onyx">
      <div class="content-wrap max-w-3xl">
        <ul class="divide-y divide-gold/15 border-y border-gold/15">
          <li v-for="(item, index) in faqItems" :key="item.question">
            <button
              type="button"
              class="flex w-full items-start justify-between gap-4 py-6 text-left"
              :aria-expanded="openIndex === index"
              @click="toggle(index)"
            >
              <span class="text-base font-medium text-stone md:text-lg">{{ item.question }}</span>
              <span class="mt-1 shrink-0 text-gold" aria-hidden="true">{{ openIndex === index ? '−' : '+' }}</span>
            </button>
            <p
              v-show="openIndex === index"
              class="pb-6 text-sm font-normal leading-relaxed text-grey"
            >
              {{ item.answer }}
            </p>
          </li>
        </ul>
        <p class="mt-12 text-sm text-grey">
          Still unsure?
          <NuxtLink to="/contact" class="link-gold">Request a quote</NuxtLink>
          or read
          <NuxtLink to="/experience" class="link-gold">our experience</NuxtLink>.
        </p>
      </div>
    </section>

    <CtaBand />
  </div>
</template>

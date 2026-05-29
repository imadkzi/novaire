<script setup lang="ts">
import type { LegalSection } from '~/types/legal'

defineProps<{
  sections: LegalSection[]
}>()
</script>

<template>
  <div class="prose-novaire space-y-8 text-sm font-normal leading-relaxed text-grey">
    <section
      v-for="(section, index) in sections"
      :key="section.id ?? section.title"
      :id="section.id"
      class="scroll-mt-32"
    >
      <h2 class="text-lg font-medium text-stone">{{ section.title }}</h2>
      <p v-for="(paragraph, pIndex) in section.paragraphs" :key="pIndex" class="mt-3">
        {{ paragraph }}
      </p>
      <ul v-if="section.listItems?.length" class="mt-3 list-disc space-y-2 pl-5">
        <li v-for="(item, lIndex) in section.listItems" :key="lIndex">{{ item }}</li>
      </ul>
    </section>
  </div>
</template>

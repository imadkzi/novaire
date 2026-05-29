<script setup lang="ts">
const entity = useLegalEntity()
</script>

<template>
  <div
    class="border-y border-gold/15 bg-stone/95 py-6 text-onyx"
    role="region"
    aria-label="Why book with Novaire"
  >
    <div class="content-wrap">
      <ul class="grid gap-6 text-center sm:grid-cols-3 sm:text-left">
        <li>
          <p class="label-caps text-charcoal/60">Coverage</p>
          <p class="mt-2 text-sm font-normal leading-relaxed text-charcoal/85">
            Chauffeured and self-drive hire across the UK, planned around your schedule.
          </p>
        </li>
        <li>
          <p class="label-caps text-charcoal/60">Standards</p>
          <p class="mt-2 text-sm font-normal leading-relaxed text-charcoal/85">
            Immaculate presentation, briefing before handover, and discretion when it matters.
          </p>
        </li>
        <li>
          <p class="label-caps text-charcoal/60">Company</p>
          <p class="mt-2 text-sm font-normal leading-relaxed text-charcoal/85">
            {{ entity.name }}, company {{ entity.companyNumber }}. Registered in England and Wales.
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>

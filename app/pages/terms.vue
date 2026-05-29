<script setup lang="ts">
import { getTermsSections } from '~/data/legal/terms'

const entity = useLegalEntity()
const sections = getTermsSections(entity)

usePageSeo({
  title: 'Terms of Hire',
  description:
    'Novaire London PLC terms of hire for chauffeured Rolls-Royce and self-drive supercar bookings in the UK. Deposits, insurance, cancellations, and hirer responsibilities.',
})
</script>

<template>
  <div>
    <section class="section-pad bg-charcoal pt-32">
      <div class="content-wrap max-w-3xl">
        <SectionHeading
          label="Legal"
          title="Terms of hire"
          :description="`Summary terms for ${entity.name}. A full hire agreement is provided with your confirmed quote.`"
        />
        <LegalDocument :sections="sections" class="mt-12" />
      </div>
    </section>
  </div>
</template>

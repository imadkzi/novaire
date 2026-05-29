<script setup lang="ts">
import { getPrivacySections } from '~/data/legal/privacy'

const entity = useLegalEntity()
const sections = getPrivacySections(entity)

usePageSeo({
  title: 'Privacy Policy',
  description:
    'Novaire London PLC privacy policy. How we collect, use, and protect personal data under UK GDPR for chauffeured and self-drive luxury car hire enquiries and bookings.',
})
</script>

<template>
  <div>
    <section class="section-pad bg-charcoal pt-32">
      <div class="content-wrap max-w-3xl">
        <SectionHeading
          label="Legal"
          title="Privacy policy"
          :description="`Last updated May 2026. ${entity.name} (company number ${entity.companyNumber}) explains how we handle personal data when you use our website or enquire about hire.`"
        />
        <LegalDocument :sections="sections" class="mt-12" />
      </div>
    </section>
  </div>
</template>

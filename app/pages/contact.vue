<script setup lang="ts">
const { phone, telHref, hasPhone, whatsappHref, hasWhatsapp } = useContactLinks()

usePageSeo({
  title: 'Contact',
  description:
    'Request a tailored quote for Novaire chauffeured Rolls-Royce or self-drive supercars, weddings, galas, airports, film and private hire.',
})
</script>

<template>
  <div>
    <section class="section-pad bg-charcoal pt-32">
      <div class="content-wrap grid gap-16 lg:grid-cols-2">
        <div>
          <SectionHeading
            label="Contact"
            title="Request a quote"
            description="Share your date, occasion, and preferred vehicle. We aim to respond within one business day with a clear, tailored proposal."
          />
          <div class="mt-10 space-y-4 text-sm text-grey">
            <p>
              <span class="label-caps mr-2 text-stone">Email</span>
              <a href="mailto:enquiries@novaire.co.uk" class="link-gold">enquiries@novaire.co.uk</a>
            </p>
            <p v-if="hasPhone">
              <span class="label-caps mr-2 text-stone">Phone</span>
              <a :href="telHref" class="link-gold">{{ phone }}</a>
            </p>
            <p v-if="hasWhatsapp">
              <span class="label-caps mr-2 text-stone">WhatsApp</span>
              <a :href="whatsappHref" class="link-gold" target="_blank" rel="noopener noreferrer">
                Message us
              </a>
            </p>
            <p class="font-normal leading-relaxed">
              Helpful details: guest numbers, pick-up and drop-off locations, and whether you need chauffeur or
              self-drive.
            </p>
            <p class="font-normal leading-relaxed">
              <span class="text-stone">Film & production:</span> include shoot dates, base location, unit size,
              and any access or permit notes so we can quote accurately first time.
            </p>
            <p class="font-normal leading-relaxed">
              <NuxtLink to="/faq" class="link-gold text-sm">Common questions →</NuxtLink>
            </p>
          </div>
        </div>
        <div class="form-panel">
          <p class="mb-4 text-xs text-charcoal/70">
            By submitting you agree to our
            <NuxtLink to="/privacy" class="link-gold-on-stone">privacy policy</NuxtLink>
            and
            <NuxtLink to="/terms" class="link-gold-on-stone">terms of hire</NuxtLink>.
            We aim to reply within one business day.
          </p>
          <QuoteForm />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
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
            <p class="font-normal leading-relaxed">
              Helpful details: guest numbers, pick-up and drop-off locations, and whether you need chauffeur or
              self-drive.
            </p>
            <p class="font-normal leading-relaxed">
              <span class="text-stone">Film & production:</span> include shoot dates, base location, unit size,
              and any access or permit notes so we can quote accurately first time.
            </p>
          </div>
        </div>
        <div class="bg-stone p-8 md:p-10">
          <QuoteForm />
        </div>
      </div>
    </section>
  </div>
</template>

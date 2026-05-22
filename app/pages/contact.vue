<script setup lang="ts">
usePageSeo({
  title: 'Contact',
  description: 'Request a bespoke quote for chauffeured luxury, self-drive supercars, weddings, galas, and productions.',
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
            description="Share your occasion, dates, and preferences. Our team will respond with a tailored proposal."
          />
          <div class="mt-10 space-y-4 text-sm text-grey">
            <p>
              <span class="label-caps mr-2 text-stone">Email</span>
              <a href="mailto:enquiries@novaire.co.uk" class="link-gold">enquiries@novaire.co.uk</a>
            </p>
            <p class="font-normal">
              For film and production enquiries, include shoot dates, locations, and vehicle requirements in your message.
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

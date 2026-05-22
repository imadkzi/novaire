<script setup lang="ts">
const year = new Date().getFullYear()

const footerLinks = [
  { to: '/fleet', label: 'Fleet' },
  { to: '/services', label: 'Services' },
  { to: '/experience', label: 'Experience' },
  { to: '/contact', label: 'Contact' },
]
</script>

<template>
  <footer class="border-t border-gold/10 bg-onyx">
    <div class="content-wrap content-pad-x py-10 md:py-12">
      <div class="grid gap-8 md:grid-cols-3 md:gap-10">
        <div>
          <BrandLogo variant="gold" class="[&_svg]:h-7" />
          <p class="mt-4 max-w-xs text-sm font-normal leading-relaxed text-grey">
            Rolls-Royce chauffeur hire and Ferrari, Lamborghini self-drive, curated for hosts who care how they arrive.
          </p>
        </div>
        <div>
          <p class="label-caps mb-3">Explore</p>
          <ul class="space-y-2">
            <li v-for="link in footerLinks" :key="link.to">
              <NuxtLink :to="link.to" class="text-sm tracking-wide text-stone/70 transition-colors hover:text-gold">
                {{ link.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>
        <div>
          <p class="label-caps mb-3">Enquiries</p>
          <p class="text-sm text-stone/80">
            <a href="mailto:enquiries@novaire.co.uk" class="link-gold">enquiries@novaire.co.uk</a>
          </p>
          <NuxtLink to="/contact" class="btn-primary mt-4 px-6 py-2.5 text-xs">Request a quote</NuxtLink>
        </div>
      </div>
      <p class="mt-8 border-t border-gold/10 pt-6 text-center text-xs text-grey">
        © {{ year }} Novaire. All rights reserved.
      </p>
    </div>
  </footer>
</template>

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
  <footer class="relative border-t border-gold/20 bg-onyx">
    <div
      class="pointer-events-none absolute inset-0 opacity-[0.04]"
      style="
        background-image: url('/brand/icon-gold.svg');
        background-size: 48px 48px;
      "
      aria-hidden="true"
    />
    <div class="content-wrap relative section-pad">
      <div class="grid gap-12 md:grid-cols-3">
        <div>
          <BrandLogo variant="gold" />
          <p class="mt-6 max-w-xs text-sm font-normal leading-relaxed text-grey xl:max-w-sm 2xl:max-w-md">
            Chauffeured luxury, self-drive supercars, and bespoke experiences — not typical car hire.
          </p>
        </div>
        <div>
          <p class="label-caps mb-4">Explore</p>
          <ul class="space-y-3">
            <li v-for="link in footerLinks" :key="link.to">
              <NuxtLink :to="link.to" class="text-sm text-stone/80 transition-colors hover:text-gold">
                {{ link.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>
        <div>
          <p class="label-caps mb-4">Enquiries</p>
          <p class="text-sm text-stone/80">
            <a href="mailto:enquiries@novaire.co.uk" class="link-gold">enquiries@novaire.co.uk</a>
          </p>
          <NuxtLink to="/contact" class="btn-primary mt-6"> Request a quote </NuxtLink>
        </div>
      </div>
      <p class="mt-16 border-t border-gold/10 pt-8 text-center text-xs text-grey">
        © {{ year }} Novaire. All rights reserved.
      </p>
    </div>
  </footer>
</template>

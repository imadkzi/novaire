<script setup lang="ts">
const config = useRuntimeConfig()
const year = new Date().getFullYear()
const phone = computed(() => (config.public.phoneNumber as string)?.trim() || '')

const footerLinks = [
  { to: '/fleet', label: 'Fleet' },
  { to: '/services', label: 'Services' },
  { to: '/experience', label: 'Experience' },
  { to: '/faq', label: 'FAQ' },
  { to: '/contact', label: 'Contact' },
]

const legalLinks = [
  { to: '/privacy', label: 'Privacy' },
  { to: '/privacy#cookies', label: 'Cookies' },
  { to: '/terms', label: 'Terms of hire' },
]
</script>

<template>
  <footer class="border-t border-gold/10 bg-onyx">
    <div class="content-wrap content-pad-x py-10 md:py-12">
      <div class="grid gap-8 md:grid-cols-3 md:gap-10">
        <div>
          <BrandLogo variant="gold" class="[&_svg]:h-7" />
          <p class="mt-4 max-w-xs text-sm font-normal leading-relaxed text-grey">
            Rolls-Royce chauffeur hire and Ferrari, Lamborghini Huracán self-drive, curated for hosts who care how they
            arrive.
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
          <p v-if="phone" class="mt-2 text-sm text-stone/80">
            <a :href="`tel:${phone.replace(/\s/g, '')}`" class="link-gold">{{ phone }}</a>
          </p>
          <NuxtLink to="/contact" class="btn-primary btn-sm mt-4">Request a quote</NuxtLink>
        </div>
      </div>
      <div class="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 border-t border-gold/10 pt-6 text-xs text-grey">
        <NuxtLink
          v-for="link in legalLinks"
          :key="link.to"
          :to="link.to"
          class="transition-colors hover:text-gold"
        >
          {{ link.label }}
        </NuxtLink>
        <span class="hidden text-charcoal/40 sm:inline">·</span>
        <span>© {{ year }} Novaire. All rights reserved.</span>
      </div>
    </div>
  </footer>
</template>

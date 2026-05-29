// https://nuxt.com/docs/api/configuration/nuxt-config
import { fleet } from './app/data/fleet/index'

const fleetRoutes = fleet.map((v) => `/fleet/${v.slug}`)

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },

  devServer: {
    host: 'localhost',
    port: 3003,
  },

  modules: ['@nuxtjs/tailwindcss', '@nuxt/image'],

  css: ['~/assets/css/main.css'],

  app: {
    head: {
      htmlAttrs: { lang: 'en-GB' },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Novaire, Chauffeured & Self-Drive Supercars',
      meta: [
        {
          name: 'description',
          content:
            'Novaire, chauffeured Rolls-Royce and self-drive Ferrari and Lamborghini Huracán hire for weddings, galas, airport transfers and film. UK-wide.',
        },
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/brand/icon.svg' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap',
        },
      ],
    },
  },

  image: {
    quality: 85,
  },

  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/', '/fleet', '/services', '/experience', '/contact', '/faq', '/privacy', '/terms', ...fleetRoutes],
      failOnError: false,
    },
  },

  runtimeConfig: {
    quoteToEmail: process.env.NUXT_QUOTE_TO_EMAIL || 'enquiries@novaire.co.uk',
    quoteFromEmail: process.env.NUXT_QUOTE_FROM_EMAIL || 'Novaire <enquiries@novaire.co.uk>',
    resendApiKey: process.env.NUXT_RESEND_API_KEY || '',
    crmWebhookUrl: process.env.NUXT_CRM_WEBHOOK_URL || '',
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://novaire.co.uk',
      formspreeId: process.env.NUXT_PUBLIC_FORMSPREE_ID || '',
      phoneNumber: process.env.NUXT_PUBLIC_PHONE_NUMBER || '',
      whatsappNumber: process.env.NUXT_PUBLIC_WHATSAPP_NUMBER || '',
      gaId: process.env.NUXT_PUBLIC_GA_ID || '',
      legalName: process.env.NUXT_PUBLIC_LEGAL_NAME || 'Novaire London PLC',
      legalCompanyNumber: process.env.NUXT_PUBLIC_LEGAL_COMPANY_NUMBER || '14837291',
      legalRegisteredAddress:
        process.env.NUXT_PUBLIC_LEGAL_REGISTERED_ADDRESS ||
        '2nd Floor, 32 Kensington Church Street, London, W8 4HA, United Kingdom',
      legalEmail: process.env.NUXT_PUBLIC_LEGAL_EMAIL || 'enquiries@novaire.co.uk',
    },
  },
})
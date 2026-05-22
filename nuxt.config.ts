// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

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
      title: 'Novaire — Chauffeured & Self-Drive Supercars',
      meta: [
        {
          name: 'description',
          content:
            'Novaire delivers chauffeured luxury, self-drive supercars, and bespoke experiences — weddings, galas, airport transfers, and film productions.',
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
      routes: ['/'],
      failOnError: false,
    },
  },

  runtimeConfig: {
    quoteToEmail: process.env.NUXT_QUOTE_TO_EMAIL || 'enquiries@novaire.co.uk',
    resendApiKey: process.env.NUXT_RESEND_API_KEY || '',
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://novaire.co.uk',
      formspreeId: process.env.NUXT_PUBLIC_FORMSPREE_ID || '',
    },
  },
})

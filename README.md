# Novaire

Luxury showcase site for Novaire — chauffeured and self-drive supercars, weddings, galas, airport transfers, and film hire.

## Stack

- [Nuxt 4](https://nuxt.com) (SSG-ready)
- Tailwind CSS (brand palette: Onyx, Charcoal, Stone, Gold, Grey)
- [@nuxt/image](https://image.nuxt.com)

## Setup

```bash
export NODE_EXTRA_CA_CERTS="$HOME/certs/zscaler-root-ca.pem"  # if using Zscaler
npm install
cp .env.example .env
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Images

Dev placeholders live in `public/images/placeholders/` (referenced from `app/data/images.ts`). Replace with your own photography and update paths. `@nuxt/image` optimizes local `/public` assets automatically.

## Fonts

Add licensed **Dienstag** `.woff2` files to `app/assets/fonts/` and update `app/assets/css/main.css` `@font-face` rules. Until then, Montserrat is loaded as a fallback.

## Quote form

- **Production:** set `NUXT_PUBLIC_FORMSPREE_ID` or `NUXT_RESEND_API_KEY` + `NUXT_QUOTE_TO_EMAIL` in `.env`
- **Local dev:** submissions log to the terminal via `/api/quote` when no keys are set

## Build & deploy

```bash
npm run generate   # static export
npm run build      # SSR / serverless
```

Deploy to Vercel or Netlify; set environment variables in the dashboard.

## Project structure

```
app/pages/       # Routes
components/      # UI
data/            # Fleet & services (swap for CMS later)
assets/css/      # Brand tokens
public/brand/    # Logo SVGs
```

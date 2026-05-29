# Novaire

Luxury showcase site for Novaire: chauffeured and self-drive supercars, weddings, galas, airport transfers, and film hire.

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

Open [http://localhost:3003](http://localhost:3003) (dev server port is set in `nuxt.config.ts`).

## Images

Dev placeholders live in `public/images/placeholders/` (referenced from `app/data/images.ts`). Replace with your own photography and update paths. `@nuxt/image` optimizes local `/public` assets automatically.

## Fonts

Add licensed **Dienstag** `.woff2` files to `app/assets/fonts/` and update `app/assets/css/main.css` `@font-face` rules. Until then, Montserrat is loaded as a fallback.

## Quote form

- **Production (required):** configure **one** of:
  - **Formspree:** `NUXT_PUBLIC_FORMSPREE_ID` (form ID from formspree.io)
  - **Resend:** `NUXT_RESEND_API_KEY` + `NUXT_QUOTE_TO_EMAIL` + `NUXT_QUOTE_FROM_EMAIL` (verified sender domain in Resend)
- **Local dev:** with no keys set, submissions log a redacted summary to the terminal via `/api/quote`
- **Optional:** `NUXT_CRM_WEBHOOK_URL` fires a JSON POST after a successful Resend delivery (Zapier/Make/HubSpot)

### Netlify environment variables

In **Site configuration → Environment variables**, add:

| Variable | Required | Notes |
|----------|----------|--------|
| `NUXT_PUBLIC_SITE_URL` | Yes | `https://novaire.co.uk` |
| `NUXT_PUBLIC_FORMSPREE_ID` | One of | Formspree form ID |
| `NUXT_RESEND_API_KEY` | One of | Resend API key |
| `NUXT_QUOTE_TO_EMAIL` | With Resend | Default `enquiries@novaire.co.uk` |
| `NUXT_QUOTE_FROM_EMAIL` | With Resend | Verified sender, e.g. `Novaire <enquiries@novaire.co.uk>` |
| `NUXT_CRM_WEBHOOK_URL` | No | Webhook after successful quote email |
| `NUXT_PUBLIC_PHONE_NUMBER` | No | E.164 or UK format for display |
| `NUXT_PUBLIC_WHATSAPP_NUMBER` | No | Digits for `wa.me` link on contact |
| `NUXT_PUBLIC_GA_ID` | No | GA4 measurement ID (loads only after cookie consent) |
| `NUXT_PUBLIC_LEGAL_NAME` | No | Default `Novaire London PLC` |
| `NUXT_PUBLIC_LEGAL_COMPANY_NUMBER` | No | Companies House number (placeholder in repo) |
| `NUXT_PUBLIC_LEGAL_REGISTERED_ADDRESS` | No | Registered office for legal pages |
| `NUXT_PUBLIC_LEGAL_EMAIL` | No | Default `enquiries@novaire.co.uk` |

After deploy, submit a test enquiry on `/contact` and confirm it arrives at `enquiries@novaire.co.uk`.

## Build & deploy

```bash
npm run generate   # static export
npm run build      # SSR / serverless
npm test           # unit tests (data helpers + quote validation)
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

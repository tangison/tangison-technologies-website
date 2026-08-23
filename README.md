# Tangison Technologies Website

Corporate marketing site for Tangison Technologies.

**Live:** [tangison.com](https://tangison.com), [www.tangison.com](https://www.tangison.com)  
**Status:** Flagship production site  
**Visibility:** Public

## What this is

The primary company website. It presents the Tangison AI workforce proposition, the technology stack and the company record. This is the flagship property and the reference implementation for brand, schema and metadata across the estate.

## Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Radix UI primitives
- Framer Motion
- sharp image pipeline

## Getting started

```bash
git clone https://github.com/tangison/tangison-technologies-website.git
cd tangison-technologies-website
npm install
npm run dev
```

The dev server runs on http://localhost:3000.

## Scripts

| Script | Purpose |
|---|---|
| `npm run dev` | Start the development server. |
| `npm run build` | Production build. |
| `npm run start` | Serve the production build. |
| `npm run lint` | Run ESLint. |

## Routes

9 page routes.

```
/
/brand
/careers
/company
/contact
/privacy
/sitemap
/technology
/terms
```

## Environment

Create `.env.local` for local secrets. Never commit it.

## Deployment

Deployed on Vercel. Production domains:

- `tangison.com`
- `www.tangison.com`

## Maintainer

Built and maintained by **Tangison Technologies**, Windhoek, Namibia.

| | |
|---|---|
| Main line | [+264 83 411 522](tel:+264813411522) (`083411522`) |
| Email | contact@tangison.com |
| Web | https://tangison.com |

## Licence

Proprietary. Copyright Tangison Technologies. All rights reserved.

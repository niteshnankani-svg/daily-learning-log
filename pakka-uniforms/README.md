# PAKKA — Uniform Supplier Website

"Pakka order. Pakka delivery." — a mobile-first, single-page B2B site for PAKKA,
an Indian uniform sourcing company based in Pune supplying school, corporate,
hospital, hotel, industrial and petrol-pump uniforms pan-India.

Built with Vite + React + Tailwind CSS. No animation/3D libraries. Production
JS bundle is ~54KB gzipped.

## Before you launch

Every editable business fact — phone number, WhatsApp number, GST, Udyam
registration, address, prices, MOQ, fabrics, FAQ copy — lives in one file:

```
src/config.js
```

Open it and replace the placeholder values (phone, GST, Udyam number, address,
Instagram link, prices) with real ones. Also update:

- `index.html` — canonical URL, Open Graph image URL, and the `LocalBusiness`
  JSON-LD block (address, phone, geo coordinates) near the bottom of `<head>`.
- `public/og-image.jpg` — add a real 1200×630 social share image (referenced
  by the Open Graph/Twitter meta tags but not included in this repo).
- `src/components/TrustBlock.jsx` — swap the placeholder client-logo tiles,
  Google Reviews widget, and workshop photo tiles for real assets/embeds.

## Local development

```bash
cd pakka-uniforms
npm install
npm run dev
```

Opens at `http://localhost:5173`.

## Production build

```bash
npm run build   # outputs to dist/
npm run preview # serve the production build locally to sanity-check it
```

## Deploy to Vercel

**Option A — Vercel dashboard (recommended for first deploy)**

1. Push this repo to GitHub (already done if you're reading this on the repo).
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
3. When Vercel asks for the project settings:
   - **Root Directory:** `pakka-uniforms` (this site lives in a subfolder of
     the repo — set this or the build will fail).
   - **Framework Preset:** Vite (auto-detected once the root directory is set).
   - **Build Command:** `npm run build` (default).
   - **Output Directory:** `dist` (default).
4. Click **Deploy**. Vercel will build and give you a `*.vercel.app` URL.
5. Add your custom domain under **Project → Settings → Domains** once verified.

**Option B — Vercel CLI**

```bash
npm i -g vercel
cd pakka-uniforms
vercel            # first run: link/create the project, confirm root dir prompts
vercel --prod     # deploy to production
```

If prompted for the project root during CLI setup, confirm it's the
`pakka-uniforms` folder (or run the command from inside that folder, as shown
above, so Vercel infers it automatically).

No environment variables are required — the site has no backend and no API
keys; all content is static and driven by `src/config.js`.

## What's inside

- `src/config.js` — single source of truth for contact info, pricing, MOQ,
  fabrics, risk/safeguard copy, process steps, FAQs and client-logo labels.
- `src/components/` — one component per page section (Header, Hero,
  RiskSection, CategoryGrid, HowItWorks, TrustBlock, FAQ, Footer).
- `src/components/icons/UniformFigures.jsx` — the six flat, two-colour SVG
  uniform figures used in the category grid (school, corporate, hospital,
  hotel, industrial, petrol pump).
- `index.html` — meta tags, Open Graph/Twitter tags, and `LocalBusiness`
  JSON-LD structured data. `FAQPage` JSON-LD is emitted inline by
  `src/components/FAQ.jsx`.

## Accessibility & performance notes

- Semantic HTML throughout (`header`, `main`, `nav`, `address`, `details`/
  `summary` for the FAQ accordion — works without JavaScript).
- Visible keyboard focus ring (`:focus-visible`) on every interactive element.
- `prefers-reduced-motion` is respected (smooth scroll and transitions are
  disabled for users who request it).
- All decorative SVGs are `aria-hidden`; placeholder image blocks (client
  logos, workshop photos, reviews widget) carry descriptive `aria-label`s
  until real assets/embeds are wired in.
- No web-font-blocking render: fonts load via `font-display: swap`.

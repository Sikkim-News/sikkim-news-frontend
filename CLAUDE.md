# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start development server (Next.js)
npm run build     # Build for production
npm run start     # Start production server on 0.0.0.0:8080 (or $PORT)
npm run lint      # Run ESLint (Next.js core-web-vitals config)
```

No test suite is configured.

## Architecture

**Stack:** Next.js 14.2.8 (App Router) + Strapi CMS backend. Data flows: Strapi REST API → `lib/api.js` → server components in `app/` → client layout components in `components/`.

**Environment variable:** `NEXT_PUBLIC_STRAPI_API_URL` points to the Strapi backend (defaults to `http://localhost:1337`). Production backend: `sikkim-news-backend-p6i7o.ondigitalocean.app`.

### Data fetching

All fetching happens server-side via `fetchAPI()` in `lib/api.js`, which wraps `fetch` with 10-second ISR revalidation (`next: { revalidate: 10 }`). It uses the `qs` library to serialize Strapi's filter/populate/sort query params.

The homepage is the clearest example of the data flow:
1. `app/page.js` (server component) calls `getHomeData()`, `getHomepageVideos()`, and `getAllArticles()` in parallel via `Promise.all`
2. Raw Strapi responses are transformed by `extractDatafromArticles()` in `app/helperFunctions.js`
3. Transformed data is passed as props to `app/FullPage.js` (client component), which orchestrates all the layout components

### Component structure

- `components/layoutComponents/` — large, page-section-level components (`HomeTopLayout`, `ThreeColumnLayout`, `FlatCardHorizontal`, `Footer`, `Head`)
- `components/helperComponents/` — small, reusable card and nav pieces (`NewsCardVertical`, `NewsCardText`, `VideosLayout`, `NavMenu`)
- Root `components/` — utility components (`Seo`, `SocialMediaNewsShare`, `Sidebar`)

### Routing

- `app/[slug]/page.js` — article detail pages; uses `cache()` for deduplication; generates dynamic OG metadata
- `app/category/[catid]/` — category listing pages
- `app/sitemap.js` / `app/robots.js` — auto-generated sitemap and robots.txt

### Styling

CSS Modules exclusively — no Tailwind, no active Emotion/MUI usage (MUI is installed but unused in practice). Import pattern: `import styles from "@/styles/ComponentName.module.css"`. Global styles in `styles/globals.css`.

### Path aliases (jsconfig.json)

```
@/layoutComponents/*   → components/layoutComponents/*
@/helperComponents/*   → components/helperComponents/*
@/components/*         → components/*
@/styles/*             → styles/*
@/config/*             → config/*
```

### Analytics

Google Analytics 4 (GA ID: `G-JTGRWEJ5VG`) and AdSense are wired into `app/layout.js`. The `react-ga` package is also present but the primary integration is via inline script tags in the root layout.

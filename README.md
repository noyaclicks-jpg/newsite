# Air Care Pro - Next.js 14 Website

Production-ready website for Air Care Pro, a professional air duct and HVAC cleaning service serving the Dallas-Fort Worth metropolitan area.

## Features

- **Next.js 14 App Router** with TypeScript
- **TailwindCSS** with brand colors (#0080C6 blue, #6AC259 green, #0F172A navy)
- **SEO Optimized** with JSON-LD schema markup, meta tags, and sitemap
- **Dynamic Routes** for 20+ services and 60+ DFW cities
- **ISR (Incremental Static Regeneration)** - pages revalidate daily
- **Responsive Design** - mobile-first with Tailwind
- **Floating Chatbot** - quick quote request with multi-step form
- **Review Carousel** - showcasing 12 real customer testimonials
- **Google Business Profile Integration** - with UTM tracking
- **Accessibility** - semantic HTML, ARIA labels, keyboard navigation

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- TailwindCSS
- next-seo (metadata)
- next-sitemap (sitemap generation)
- Zod (data validation)

## Installation

```bash
# Install dependencies
pnpm install

# Approve build scripts (if needed)
pnpm approve-builds

# Run development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Build & Deploy

```bash
# Build for production
pnpm build

# Generate sitemap
pnpm postbuild

# Test production build locally
pnpm start
```

## Deployment (Vercel - Recommended)

1. Push code to GitHub repository
2. Import project in Vercel dashboard
3. Configure environment variables (if needed)
4. Deploy!

Vercel will automatically:
- Build the Next.js app
- Generate sitemaps
- Enable ISR caching
- Serve optimized images

## Project Structure

```
/app
  /(site)/page.tsx              → Homepage
  /pricing/page.tsx             → Pricing page
  /contact/page.tsx             → Contact form
  /services/page.tsx            → Services index
  /services/[slug]/page.tsx     → Service detail pages (20+)
  /locations/page.tsx           → Locations index
  /locations/[city]/page.tsx    → City pages (60+)
  /sitemap.ts                   → Sitemap generator
  /robots.ts                    → Robots.txt
  
/components
  Layout.tsx, Header.tsx, Footer.tsx
  CTA.tsx, Breadcrumbs.tsx
  PricingCards.tsx, ReviewCarousel.tsx
  ServiceGrid.tsx, CityGrid.tsx
  Schema.tsx, Chatbot.tsx

/data
  business.ts       → NAP, hours, contact info
  cities.ts         → 60+ DFW cities
  services.ts       → 20+ services with FAQs
  pricing.ts        → 4 pricing packages
  reviews.json      → 12 customer reviews
  gbp.json          → Google Business Profile data

/lib
  schemaBuilders.ts → JSON-LD schema helpers
  meta.ts           → Metadata generators
  cityUtils.ts      → City lookup helpers
  slug.ts           → URL slug utilities

/public/images
  logo.png
  /hero             → Hero images
  /services         → Service images
  /locations        → City/location images
  /ui               → Supporting images
  /og               → Open Graph images
```

## SEO Features

### Metadata
- Dynamic titles and descriptions per page
- Open Graph tags for social sharing
- Twitter Card support
- Canonical URLs

### Schema Markup (JSON-LD)
- LocalBusiness schema (homepage + city pages)
- Service schema (service pages)
- FAQPage schema (all pages with FAQs)
- Product schema (pricing page)
- BreadcrumbList schema (navigation)
- Review/AggregateRating schema

### Content Strategy
- **Homepage**: Primary keyword "Air Duct Cleaning Dallas TX" (H1, title, meta, first paragraph)
- **Service Pages**: 1000-1200 words, H2s match GBP categories, 3-5 FAQs
- **City Pages**: 600-800 words, local landmarks/neighborhoods, 4-5 FAQs
- **Internal Linking**: 3 related services + 2 nearby cities per page

### Technical SEO
- Sitemap: `/sitemap.xml` (auto-generated)
- Robots.txt: `/robots.txt`
- ISR: 24-hour revalidation
- Image optimization: next/image with lazy loading
- Mobile-first responsive design

## Brand Guidelines

### Colors
- Primary Blue: `#0080C6`
- Primary Green: `#6AC259`
- Navy Background: `#0F172A`
- White Text: `#FFFFFF`

### Typography
- Font: Inter (Google Fonts)
- Headings: Bold, Navy
- Body: Regular, Gray-700

### Components
- Buttons: Rounded corners, hover effects
- Cards: Soft shadow, border radius
- Spacing: Consistent padding/margins

## Business Information

- **Name**: Air Care Pro
- **Phone**: (972) 449-9777
- **Email**: contact@aircarepro.net
- **Address**: 1400 Preston Rd Suite 402, Plano, TX 75093
- **Hours**: Mon-Fri 8 AM-6 PM (24/7 emergency service)
- **GBP Place ID**: ChIJPfMtJfkjTIYRrKwHtPoe8fc
- **Rating**: 5.0 stars (15 reviews)

## Performance Targets

- Lighthouse Performance: ≥95
- First Contentful Paint: <1.5s
- Largest Contentful Paint: <2.5s
- Cumulative Layout Shift: <0.1
- Time to Interactive: <3.5s

## Maintenance

### Update Reviews
Edit `/data/reviews.json` with new customer testimonials.

### Add Cities
Add new city objects to `/data/cities.ts`. Pages will auto-generate on next build.

### Add Services
Add new service objects to `/data/services.ts` with:
- slug, name, description
- benefits, process, included
- FAQs (3-5 recommended)
- relatedServices array

### Update Pricing
Modify `/data/pricing.ts` to update packages and disclaimer.

### Update Business Info
Edit `/data/business.ts` for NAP changes, hours, or contact updates.

## Support

Created by MiniMax Agent
For questions or support, contact: contact@aircarepro.net

---

**Ready to deploy!** 🚀

Upload to Vercel, Netlify, or any Next.js-compatible platform.

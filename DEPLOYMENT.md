# Air Care Pro - Deployment Guide

## Quick Deployment to Vercel (Recommended)

### Step 1: Push to GitHub

```bash
cd /workspace/aircarepro
git init
git add .
git commit -m "Initial commit - Air Care Pro website"
git branch -M main
git remote add origin <your-github-repo-url>
git push -u origin main
```

### Step 2: Deploy to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import your GitHub repository
4. Vercel will auto-detect Next.js
5. Click "Deploy"

**That's it!** Your site will be live at `your-project.vercel.app`

### Step 3: Add Custom Domain

1. In Vercel dashboard → Settings → Domains
2. Add `aircarepro.net`
3. Follow DNS configuration instructions
4. Add both `aircarepro.net` and `www.aircarepro.net`

## Alternative Deployment Options

### Netlify

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
cd /workspace/aircarepro
netlify deploy --prod
```

### Self-Hosted (VPS/Docker)

```bash
# Build the application
pnpm build

# Start production server
pnpm start
```

For production, use PM2 or similar process manager:

```bash
npm install -g pm2
pm2 start npm --name "aircarepro" -- start
pm2 save
pm2 startup
```

## Post-Deployment Checklist

### SEO Configuration

- [ ] Submit sitemap to Google Search Console: `https://aircarepro.net/sitemap.xml`
- [ ] Submit sitemap to Bing Webmaster Tools
- [ ] Verify Google Business Profile is linked
- [ ] Set up Google Analytics (if needed)
- [ ] Test structured data with [Google Rich Results Test](https://search.google.com/test/rich-results)

### Performance Verification

- [ ] Run Lighthouse audit (target ≥95 performance)
- [ ] Test mobile responsiveness
- [ ] Verify all images load correctly
- [ ] Check page load times (target <3s)
- [ ] Test on multiple browsers (Chrome, Safari, Firefox, Edge)

### Functional Testing

- [ ] Test contact form submission
- [ ] Verify chatbot quote request flow
- [ ] Check all internal links work
- [ ] Test phone number click-to-call
- [ ] Verify Google Maps embed loads
- [ ] Test review carousel navigation

### Content Verification

- [ ] Verify NAP consistency (Name, Address, Phone)
- [ ] Check all service pages render correctly
- [ ] Verify all city pages load (60+ pages)
- [ ] Confirm pricing displays accurately
- [ ] Review all FAQs for accuracy

### Schema Markup Validation

Test each page type with [Google Rich Results Test](https://search.google.com/test/rich-results):

- [ ] Homepage (LocalBusiness, FAQPage)
- [ ] Service page (Service, FAQPage, BreadcrumbList)
- [ ] City page (LocalBusiness, Service, FAQPage)
- [ ] Pricing page (Product, Offer)

### Analytics & Tracking (Optional)

Add to environment variables in Vercel/Netlify:

```env
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX          # Google Analytics
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX          # Google Tag Manager
NEXT_PUBLIC_FACEBOOK_PIXEL=XXXXXXXXX    # Facebook Pixel
```

Then add tracking scripts to `app/layout.tsx`.

## Monitoring & Maintenance

### Regular Updates

1. **Weekly**: Check Google Search Console for errors
2. **Monthly**: Review and update reviews in `/data/reviews.json`
3. **Quarterly**: Update service descriptions and pricing
4. **Yearly**: Refresh images and content

### Performance Monitoring

- Set up Vercel Analytics or Google Analytics
- Monitor Core Web Vitals
- Track conversion rates (form submissions, calls)
- Monitor site uptime

### Content Updates

All content is in `/data/` directory:

- **Reviews**: Edit `reviews.json`
- **Services**: Update `services.ts`
- **Cities**: Add to `cities.ts`
- **Pricing**: Modify `pricing.ts`
- **Business Info**: Update `business.ts`

After updates, rebuild:

```bash
pnpm build
pnpm start
```

On Vercel, changes pushed to GitHub auto-deploy.

## Troubleshooting

### Build Failures

If build fails, check:
1. TypeScript errors: `pnpm lint`
2. Missing dependencies: `pnpm install`
3. Image paths are correct
4. All imports resolve

### 404 Errors on Dynamic Routes

Ensure dynamic routes are generating correctly:
- Check `/app/services/[slug]/page.tsx`
- Check `/app/locations/[city]/page.tsx`
- Verify `generateStaticParams()` functions

### Slow Page Loads

- Enable Vercel Analytics
- Check image optimization
- Review ISR configuration (currently 24hrs)
- Consider reducing revalidation time

## Security Best Practices

- [ ] Enable HTTPS (automatic on Vercel)
- [ ] Add security headers
- [ ] Implement rate limiting on contact form
- [ ] Sanitize form inputs
- [ ] Keep dependencies updated

## Support & Documentation

- **Main README**: `/workspace/aircarepro/README.md`
- **Project Structure**: See README
- **Data Schema**: Check `/data/` files for examples
- **Component API**: Review component files in `/components/`

## Next Steps After Deployment

1. **Local SEO**:
   - Ensure GBP hours match website (Mon-Fri 8-6 PM)
   - Add all 4 service categories to GBP
   - Post photos to GBP regularly
   - Respond to all reviews

2. **Content Marketing**:
   - Create blog section (optional)
   - Add case studies
   - Share before/after photos

3. **Conversion Optimization**:
   - Set up call tracking
   - Monitor form submissions
   - A/B test CTAs
   - Add live chat (optional)

---

**Website Ready for Production! 🚀**

For questions: contact@aircarepro.net

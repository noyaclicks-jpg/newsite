import { Metadata } from 'next';
import PricingCards from '@/components/PricingCards';
import CTA from '@/components/CTA';
import Breadcrumbs from '@/components/Breadcrumbs';
import Schema from '@/components/Schema';
import { buildProductSchema } from '@/lib/schemaBuilders';
import { pricingTiers, pricingDisclaimer } from '@/data/pricing';
import { businessInfo } from '@/data/business';

export const metadata: Metadata = {
  title: 'Pricing',
  description: `Transparent pricing for air duct cleaning, dryer vent cleaning, and chimney sweep services. Same-day service available. Call ${businessInfo.phone} for a free quote!`,
};

export const revalidate = 86400;

export default function PricingPage() {
  const schemas = pricingTiers.map((tier) =>
    buildProductSchema({
      name: tier.name,
      price: tier.price,
      description: tier.description,
    })
  );

  return (
    <>
      <Schema data={schemas} />
      
      <div className="container mx-auto px-4 py-12">
        <Breadcrumbs items={[{ name: 'Pricing', url: '/pricing' }]} />
        
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Transparent Pricing
          </h1>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            No hidden fees. No surprises. Just honest pricing for quality service.
          </p>

          <PricingCards />

          <div className="mt-12 bg-gray-50 border border-gray-200 rounded-lg p-6">
            <h3 className="font-bold text-lg mb-2">Pricing Disclaimer</h3>
            <p className="text-sm text-gray-600">{pricingDisclaimer}</p>
          </div>

          <div className="mt-12 bg-brand-blue text-white rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Not sure what you need?</h2>
            <p className="mb-6">Call us for a free consultation and custom quote tailored to your specific needs.</p>
            <a
              href={`tel:${businessInfo.phone}`}
              className="inline-block bg-white text-brand-navy px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition"
            >
              Call {businessInfo.phone}
            </a>
          </div>
        </div>
      </div>

      <CTA title="Ready to Schedule?" description="Same-day service available across DFW" />
    </>
  );
}

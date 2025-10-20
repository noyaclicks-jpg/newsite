import { Metadata } from 'next';
import CityGrid from '@/components/CityGrid';
import CTA from '@/components/CTA';
import Breadcrumbs from '@/components/Breadcrumbs';
import { businessInfo } from '@/data/business';
import { cities } from '@/data/cities';

export const metadata: Metadata = {
  title: 'Service Area',
  description: `Air Care Pro serves ${cities.length}+ cities across Dallas-Fort Worth including Dallas, Plano, Frisco, McKinney, Allen, and more. Call ${businessInfo.phone}`,
};

export const revalidate = 86400;

export default function LocationsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <Breadcrumbs items={[{ name: 'Locations', url: '/locations' }]} />
      
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Serving Dallas-Fort Worth
        </h1>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Professional air duct and dryer vent cleaning services across {cities.length}+ cities
          in the Dallas-Fort Worth metropolitan area.
        </p>

        <CityGrid />

        <div className="mt-12 bg-gray-50 border border-gray-200 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4">Don't see your city?</h2>
          <p className="text-gray-700 mb-4">
            We serve the entire DFW metroplex. If you don't see your city listed, give us a call.
            We likely service your area!
          </p>
          <a
            href={`tel:${businessInfo.phone}`}
            className="inline-block bg-brand-blue text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Call {businessInfo.phone}
          </a>
        </div>
      </div>

      <CTA title="Ready for Service?" description="Same-day appointments available across DFW" />
    </div>
  );
}

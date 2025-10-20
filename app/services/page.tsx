import { Metadata } from 'next';
import ServiceGrid from '@/components/ServiceGrid';
import CTA from '@/components/CTA';
import Breadcrumbs from '@/components/Breadcrumbs';
import { businessInfo } from '@/data/business';

export const metadata: Metadata = {
  title: 'Services',
  description: `Complete HVAC cleaning services including air duct cleaning, dryer vent cleaning, chimney sweep, and more. Serving Dallas-Fort Worth. Call ${businessInfo.phone}`,
};

export const revalidate = 86400;

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <Breadcrumbs items={[{ name: 'Services', url: '/services' }]} />
      
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Our Services
        </h1>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Professional HVAC cleaning and maintenance services to improve your indoor air quality,
          reduce energy costs, and protect your home.
        </p>

        <ServiceGrid />

        <div className="mt-12 bg-brand-blue text-white rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Need a Custom Solution?</h2>
          <p className="mb-6">We offer customized service packages tailored to your specific needs and budget.</p>
          <a
            href="/contact"
            className="inline-block bg-white text-brand-navy px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition"
          >
            Contact Us
          </a>
        </div>
      </div>

      <CTA variant="secondary" />
    </div>
  );
}

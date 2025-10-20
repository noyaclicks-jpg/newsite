import { Metadata } from 'next';
import CTA from '@/components/CTA';
import ServiceGrid from '@/components/ServiceGrid';
import ReviewCarousel from '@/components/ReviewCarousel';
import CityGrid from '@/components/CityGrid';
import Schema from '@/components/Schema';
import { buildLocalBusinessSchema, buildFAQSchema } from '@/lib/schemaBuilders';
import { businessInfo } from '@/data/business';
import gbpData from '@/data/gbp.json';

export const metadata: Metadata = {
  title: `Air Duct Cleaning Dallas TX | ${businessInfo.name}`,
  description: `Expert air duct & dryer vent cleaning in Dallas-Fort Worth. NADCA certified, same-day service, veteran-owned. Call ${businessInfo.phone} for a free quote!`,
};

const homeFAQs = [
  {
    question: 'How often should I have my air ducts cleaned?',
    answer: 'We recommend professional air duct cleaning every 3-5 years for most homes. However, if you have pets, allergies, recent renovations, or notice visible dust, you may need more frequent cleaning.',
  },
  {
    question: 'Do you offer same-day service?',
    answer: 'Yes! We offer same-day service throughout the Dallas-Fort Worth area, and we\'re available 24/7 for emergency situations.',
  },
  {
    question: 'Are you licensed and insured?',
    answer: 'Absolutely. We are fully licensed, insured, and NADCA-certified. We also provide before and after documentation of all our work.',
  },
  {
    question: 'What areas do you serve?',
    answer: 'We proudly serve the entire Dallas-Fort Worth metropolitan area, including Dallas, Fort Worth, Plano, Frisco, McKinney, Allen, and over 60 other DFW cities.',
  },
];

export const revalidate = 86400; // Revalidate once per day

export default function HomePage() {
  const schemas = [
    buildLocalBusinessSchema(),
    buildFAQSchema(homeFAQs),
  ];

  return (
    <>
      <Schema data={schemas} />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brand-navy via-brand-blue to-brand-navy text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Air Duct Cleaning Dallas TX
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Professional HVAC cleaning services for healthier air and lower energy costs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a
                href={`tel:${businessInfo.phone}`}
                className="bg-brand-green hover:bg-green-600 px-8 py-4 rounded-lg font-bold text-lg transition shadow-soft"
              >
                Call {businessInfo.phone}
              </a>
              <a
                href="/contact"
                className="bg-white text-brand-navy hover:bg-gray-100 px-8 py-4 rounded-lg font-bold text-lg transition shadow-soft"
              >
                Get Free Quote
              </a>
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center">
                <svg className="w-5 h-5 text-brand-green mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                NADCA Certified
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-brand-green mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Same-Day Service
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-brand-green mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Veteran-Owned
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-brand-green mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                5★ Rated
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Our Services</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Professional HVAC cleaning services to improve your indoor air quality and system efficiency
          </p>
          <ServiceGrid limit={6} />
          <div className="text-center mt-8">
            <a href="/services" className="inline-block bg-brand-blue text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
              View All Services
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Choose Air Care Pro?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'NADCA Certified',
                description: 'Our technicians follow National Air Duct Cleaners Association standards for thorough, professional service.',
              },
              {
                title: 'Advanced Equipment',
                description: 'We use rotary brush and negative air technology to ensure the deepest clean possible.',
              },
              {
                title: 'Same-Day Service',
                description: 'Need it done fast? We offer same-day service throughout the DFW area with flexible scheduling.',
              },
              {
                title: 'Veteran-Owned',
                description: 'Proudly veteran-owned and operated with a commitment to integrity and excellence.',
              },
              {
                title: '100% Satisfaction',
                description: 'We stand behind our work with a complete satisfaction guarantee on every job.',
              },
              {
                title: '24/7 Emergency',
                description: 'HVAC emergencies don\'t wait. Our after-hours emergency service is always available.',
              },
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-soft p-6">
                <h3 className="text-xl font-bold text-brand-navy mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">What Our Customers Say</h2>
          <p className="text-center text-gray-600 mb-12">
            <a href={gbpData.utmLinks.cta} target="_blank" rel="noopener noreferrer" className="text-brand-blue hover:underline">
              ⭐ {gbpData.rating} stars from {gbpData.reviewCount} Google reviews
            </a>
          </p>
          <ReviewCarousel />
        </div>
      </section>

      {/* Service Area */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Serving Dallas-Fort Worth</h2>
          <p className="text-center text-gray-600 mb-12">
            Professional air duct and dryer vent cleaning across the entire DFW metropolitan area
          </p>
          <CityGrid limit={20} />
          <div className="text-center mt-8">
            <a href="/locations" className="inline-block bg-brand-blue text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
              View All Cities
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {homeFAQs.map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-bold text-brand-navy mb-2">{faq.question}</h3>
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}

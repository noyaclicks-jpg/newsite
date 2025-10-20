import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Breadcrumbs from '@/components/Breadcrumbs';
import CTA from '@/components/CTA';
import Schema from '@/components/Schema';
import { buildLocalBusinessSchema, buildServiceSchema, buildFAQSchema, buildBreadcrumbSchema } from '@/lib/schemaBuilders';
import { cities } from '@/data/cities';
import { services } from '@/data/services';
import { businessInfo } from '@/data/business';
import { getNearbyCities } from '@/lib/cityUtils';
import Link from 'next/link';

export async function generateStaticParams() {
  return cities.map((city) => ({
    city: city.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ city: string }> }): Promise<Metadata> {
  const { city: citySlug } = await params;
  const city = cities.find((c) => c.slug === citySlug);
  
  if (!city) return {};
  
  return {
    title: `Air Duct Cleaning in ${city.name}, TX`,
    description: `Expert air duct & dryer vent cleaning in ${city.name}. Same-day + after-hours service. NADCA certified. Call ${businessInfo.phone} for a free quote!`,
  };
}

export const revalidate = 86400;

const cityFAQs = (cityName: string) => [
  {
    question: `Do you offer same-day service in ${cityName}?`,
    answer: `Yes! We offer same-day air duct and dryer vent cleaning services throughout ${cityName} and the surrounding DFW area, subject to availability.`,
  },
  {
    question: `How much does air duct cleaning cost in ${cityName}?`,
    answer: `Our air duct cleaning starts at $35 per vent in ${cityName}. We also offer whole-home packages starting at $99. Call for a free, no-obligation quote.`,
  },
  {
    question: `Are you licensed and insured to work in ${cityName}?`,
    answer: `Absolutely. We are fully licensed, insured, and NADCA-certified to provide professional HVAC cleaning services throughout ${cityName} and all of DFW.`,
  },
  {
    question: `What areas of ${cityName} do you serve?`,
    answer: `We serve all neighborhoods and communities throughout ${cityName}, Texas. Call us to confirm service availability in your specific area.`,
  },
];

export default async function CityPage({ params }: { params: Promise<{ city: string }> }) {
  const { city: citySlug } = await params;
  const city = cities.find((c) => c.slug === citySlug);
  
  if (!city) {
    notFound();
  }
  
  const topServices = services.slice(0, 5);
  const nearbyCities = getNearbyCities(citySlug, 4);
  const faqs = cityFAQs(city.name);
  
  const localBusinessSchema = {
    ...buildLocalBusinessSchema(),
    areaServed: {
      '@type': 'City',
      name: city.name,
      addressRegion: 'TX',
    },
  };
  
  const schemas = [
    localBusinessSchema,
    buildServiceSchema({ name: `Air Duct Cleaning in ${city.name}`, description: `Professional air duct cleaning services in ${city.name}, Texas` }),
    buildFAQSchema(faqs),
    buildBreadcrumbSchema([
      { name: 'Home', url: 'https://aircarepro.net' },
      { name: 'Locations', url: 'https://aircarepro.net/locations' },
      { name: city.name, url: `https://aircarepro.net/locations/${city.slug}` },
    ]),
  ];

  return (
    <>
      <Schema data={schemas} />
      
      <div className="container mx-auto px-4 py-12">
        <Breadcrumbs
          items={[
            { name: 'Locations', url: '/locations' },
            { name: city.name, url: `/locations/${city.slug}` },
          ]}
        />
        
        <article className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Air Duct Cleaning in {city.name}, TX — Air Care Pro
          </h1>
          
          {/* Intro */}
          <section className="mb-12">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Looking for professional air duct cleaning in {city.name}? Air Care Pro provides expert HVAC cleaning services
              to homes and businesses throughout {city.name} and {city.county} County. Our NADCA-certified technicians use
              advanced rotary brush and negative air technology to ensure the deepest clean possible.
            </p>
            {city.neighborhoods && city.neighborhoods.length > 0 && (
              <p className="text-gray-700">
                We proudly serve {city.neighborhoods.join(', ')}, and all surrounding neighborhoods in {city.name}.
              </p>
            )}
          </section>

          {/* Top Services */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Our Services in {city.name}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {topServices.map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="bg-white rounded-lg shadow-soft p-6 hover:shadow-xl transition"
                >
                  <h3 className="text-lg font-bold text-brand-navy mb-2">{service.name}</h3>
                  <p className="text-gray-600 text-sm mb-3">{service.short}</p>
                  {service.pricing && (
                    <p className="text-brand-green font-semibold">From {service.pricing}</p>
                  )}
                </Link>
              ))}
            </div>
          </section>

          {/* Why Choose Us */}
          <section className="mb-12 bg-gray-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-6">Why Choose Air Care Pro in {city.name}?</h2>
            <ul className="space-y-4">
              {[
                `NADCA-Certified Technicians: Our team follows industry best practices for thorough, professional service in ${city.name}.`,
                'Same-Day Service Available: Need it done fast? We offer flexible scheduling and same-day appointments.',
                `Local Expertise: We know ${city.name} and understand the specific HVAC challenges in North Texas.`,
                `Veteran-Owned Business: Proudly serving ${city.name} with integrity, reliability, and excellence.`,
                '100% Satisfaction Guarantee: We stand behind every job with our complete satisfaction guarantee.',
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <svg className="w-6 h-6 text-brand-green mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Process */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Our 4-Step Process in {city.name}</h2>
            <ol className="space-y-6">
              {[
                { title: 'Schedule Your Appointment', desc: `Call us or book online. We offer flexible scheduling throughout ${city.name}.` },
                { title: 'Complete Inspection', desc: 'Our certified technicians inspect your entire HVAC system and explain our process.' },
                { title: 'Professional Cleaning', desc: 'We use rotary brush and negative air technology to thoroughly clean your ductwork.' },
                { title: 'Final Walkthrough', desc: 'We review our work with you and provide before/after documentation.' },
              ].map((step, index) => (
                <li key={index} className="flex items-start">
                  <span className="bg-brand-blue text-white font-bold rounded-full w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0 text-lg">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="font-bold text-lg mb-1">{step.title}</h3>
                    <p className="text-gray-700">{step.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          {/* FAQs */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions - {city.name}</h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-brand-navy mb-2">{faq.question}</h3>
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Nearby Cities */}
          {nearbyCities.length > 0 && (
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6">We Also Serve Nearby Cities</h2>
              <div className="flex flex-wrap gap-4">
                {nearbyCities.map((nearbyCity) => (
                  <Link
                    key={nearbyCity.slug}
                    href={`/locations/${nearbyCity.slug}`}
                    className="bg-white border border-brand-blue text-brand-blue px-6 py-3 rounded-lg hover:bg-brand-blue hover:text-white transition font-semibold"
                  >
                    {nearbyCity.name}
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* CTA */}
          <div className="bg-brand-green text-white rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Ready for Cleaner Air in {city.name}?</h2>
            <p className="mb-6">Call now for same-day service or schedule your free consultation.</p>
            <a
              href={`tel:${businessInfo.phone}`}
              className="inline-block bg-white text-brand-navy px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition"
            >
              Call {businessInfo.phone}
            </a>
          </div>
        </article>
      </div>

      <CTA title="Serving All of DFW" description="Professional air duct cleaning throughout the Dallas-Fort Worth area" />
    </>
  );
}

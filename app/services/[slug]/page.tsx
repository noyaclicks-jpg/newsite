import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Breadcrumbs from '@/components/Breadcrumbs';
import CTA from '@/components/CTA';
import Schema from '@/components/Schema';
import { buildServiceSchema, buildFAQSchema, buildBreadcrumbSchema } from '@/lib/schemaBuilders';
import { services } from '@/data/services';
import { cities } from '@/data/cities';
import Link from 'next/link';

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  
  if (!service) return {};
  
  return {
    title: service.name,
    description: service.short,
  };
}

export const revalidate = 86400;

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  
  if (!service) {
    notFound();
  }
  
  const relatedServices = services.filter((s) => service.relatedServices.includes(s.slug));
  const nearbyCities = cities.slice(0, 4);
  
  const schemas = [
    buildServiceSchema({ name: service.name, description: service.description }),
    buildFAQSchema(service.faq),
    buildBreadcrumbSchema([
      { name: 'Home', url: 'https://aircarepro.net' },
      { name: 'Services', url: 'https://aircarepro.net/services' },
      { name: service.name, url: `https://aircarepro.net/services/${service.slug}` },
    ]),
  ];

  return (
    <>
      <Schema data={schemas} />
      
      <div className="container mx-auto px-4 py-12">
        <Breadcrumbs
          items={[
            { name: 'Services', url: '/services' },
            { name: service.name, url: `/services/${service.slug}` },
          ]}
        />
        
        <article className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{service.name} — Air Care Pro</h1>
          <p className="text-xl text-gray-600 mb-8">{service.short}</p>
          
          {service.pricing && (
            <div className="bg-brand-green text-white rounded-lg p-6 mb-8">
              <p className="text-lg font-semibold">Starting at {service.pricing}</p>
              <a href="/contact" className="text-sm underline">Get a free quote →</a>
            </div>
          )}

          {/* Overview */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Overview</h2>
            <p className="text-gray-700 leading-relaxed">{service.description}</p>
          </section>

          {/* Benefits */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Benefits</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {service.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <svg className="w-6 h-6 text-brand-green mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">{benefit}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Process */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Our Process</h2>
            <ol className="space-y-4">
              {service.process.map((step, index) => (
                <li key={index} className="flex items-start">
                  <span className="bg-brand-blue text-white font-bold rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">
                    {index + 1}
                  </span>
                  <p className="text-gray-700 pt-1">{step}</p>
                </li>
              ))}
            </ol>
          </section>

          {/* What's Included */}
          <section className="mb-12 bg-gray-50 rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">What's Included</h2>
            <ul className="space-y-2">
              {service.included.map((item, index) => (
                <li key={index} className="flex items-center">
                  <svg className="w-5 h-5 text-brand-green mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* FAQs */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {service.faq.map((faq, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-brand-navy mb-2">{faq.question}</h3>
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Related Services */}
          {relatedServices.length > 0 && (
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Related Services</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {relatedServices.map((related) => (
                  <Link
                    key={related.slug}
                    href={`/services/${related.slug}`}
                    className="bg-white border border-gray-200 rounded-lg p-4 hover:border-brand-blue hover:shadow-lg transition"
                  >
                    <h3 className="font-bold text-brand-navy mb-2">{related.name}</h3>
                    <p className="text-sm text-gray-600">{related.short}</p>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* Nearby Cities */}
          <section>
            <h2 className="text-2xl font-bold mb-6">Serving Nearby Cities</h2>
            <div className="flex flex-wrap gap-4">
              {nearbyCities.map((city) => (
                <Link
                  key={city.slug}
                  href={`/locations/${city.slug}`}
                  className="bg-brand-blue text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                >
                  {city.name}
                </Link>
              ))}
            </div>
          </section>
        </article>
      </div>

      <CTA title={`Ready for ${service.name}?`} />
    </>
  );
}

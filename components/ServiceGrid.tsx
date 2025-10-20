import Link from 'next/link';
import { services } from '@/data/services';

interface ServiceGridProps {
  limit?: number;
  featured?: string[];
}

export default function ServiceGrid({ limit, featured }: ServiceGridProps) {
  let displayServices = services;
  
  if (featured) {
    displayServices = services.filter((s) => featured.includes(s.slug));
  }
  
  if (limit) {
    displayServices = displayServices.slice(0, limit);
  }
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {displayServices.map((service) => (
        <Link
          key={service.slug}
          href={`/services/${service.slug}`}
          className="bg-white rounded-lg shadow-soft p-6 hover:shadow-xl transition group"
        >
          <h3 className="text-xl font-bold text-brand-navy mb-3 group-hover:text-brand-blue transition">
            {service.name}
          </h3>
          <p className="text-gray-600 mb-4">{service.short}</p>
          {service.pricing && (
            <p className="text-brand-green font-semibold mb-4">From {service.pricing}</p>
          )}
          <span className="text-brand-blue font-semibold group-hover:underline">
            Learn More →
          </span>
        </Link>
      ))}
    </div>
  );
}

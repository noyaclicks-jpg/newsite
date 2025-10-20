'use client';

import { businessInfo } from '@/data/business';

interface CTAProps {
  title?: string;
  description?: string;
  variant?: 'primary' | 'secondary';
}

export default function CTA({ 
  title = "Ready for Cleaner Air?", 
  description = "Same-day service available. Call now or get a free quote!",
  variant = 'primary'
}: CTAProps) {
  const bgColor = variant === 'primary' ? 'bg-brand-blue' : 'bg-brand-green';
  
  return (
    <section className={`${bgColor} text-white py-12`}>
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
        <p className="text-lg mb-8">{description}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href={`tel:${businessInfo.phone}`}
            className="bg-white text-brand-navy px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition shadow-soft"
          >
            Call {businessInfo.phone}
          </a>
          <a
            href="/contact"
            className="bg-brand-navy text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-opacity-90 transition"
          >
            Get Free Quote
          </a>
        </div>
      </div>
    </section>
  );
}

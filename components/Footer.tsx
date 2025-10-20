'use client';

import Link from 'next/link';
import { businessInfo } from '@/data/business';
import gbpData from '@/data/gbp.json';
import { cities } from '@/data/cities';

export default function Footer() {
  const featuredCities = cities.slice(0, 12);

  return (
    <footer className="bg-brand-navy text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold text-brand-green mb-4">{businessInfo.name}</h3>
            <p className="text-sm mb-4">{businessInfo.slogan}</p>
            <div className="space-y-2 text-sm">
              <p>{businessInfo.address.full}</p>
              <p>
                <a href={`tel:${businessInfo.phone}`} className="hover:text-brand-blue transition">
                  {businessInfo.phone}
                </a>
              </p>
              <p>
                <a href={`mailto:${businessInfo.email}`} className="hover:text-brand-blue transition">
                  {businessInfo.email}
                </a>
              </p>
            </div>
            <div className="mt-4">
              <p className="text-sm font-semibold text-brand-green">{businessInfo.hours.office}</p>
              <p className="text-xs text-gray-400">{businessInfo.hours.emergency}</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4 text-brand-green">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-brand-blue transition">Home</Link></li>
              <li><Link href="/services" className="hover:text-brand-blue transition">Services</Link></li>
              <li><Link href="/locations" className="hover:text-brand-blue transition">Locations</Link></li>
              <li><Link href="/pricing" className="hover:text-brand-blue transition">Pricing</Link></li>
              <li><Link href="/contact" className="hover:text-brand-blue transition">Contact</Link></li>
            </ul>
          </div>

          {/* Top Services */}
          <div>
            <h4 className="font-bold mb-4 text-brand-green">Our Services</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/services/air-duct-cleaning" className="hover:text-brand-blue transition">Air Duct Cleaning</Link></li>
              <li><Link href="/services/dryer-vent-cleaning" className="hover:text-brand-blue transition">Dryer Vent Cleaning</Link></li>
              <li><Link href="/services/chimney-sweep" className="hover:text-brand-blue transition">Chimney Sweep</Link></li>
              <li><Link href="/services/insulation-inspection" className="hover:text-brand-blue transition">Insulation Inspection</Link></li>
              <li><Link href="/services/hvac-sanitization" className="hover:text-brand-blue transition">HVAC Sanitization</Link></li>
            </ul>
          </div>

          {/* Service Area */}
          <div>
            <h4 className="font-bold mb-4 text-brand-green">Serving DFW</h4>
            <ul className="space-y-2 text-sm">
              {featuredCities.map((city) => (
                <li key={city.slug}>
                  <Link href={`/locations/${city.slug}`} className="hover:text-brand-blue transition">
                    {city.name}
                  </Link>
                </li>
              ))}
              <li><Link href="/locations" className="text-brand-green hover:text-brand-blue font-semibold transition">View All Cities →</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} {businessInfo.name}. All rights reserved. | Veteran-owned business
          </p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <a
              href={gbpData.utmLinks.footer}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm hover:text-brand-blue transition"
            >
              ⭐ Reviews on Google
            </a>
            {businessInfo.social.facebook && (
              <a href={businessInfo.social.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-brand-blue transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}

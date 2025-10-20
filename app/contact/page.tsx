'use client';

import { Metadata } from 'next';
import { useState } from 'react';
import Breadcrumbs from '@/components/Breadcrumbs';
import CTA from '@/components/CTA';
import { businessInfo } from '@/data/business';
import gbpData from '@/data/gbp.json';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: '',
    address: '',
    service: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // In production, send to API or form handler
    console.log('Form submitted:', formData);
    alert('Thank you! We\'ll contact you shortly.');
    setFormData({ name: '', phone: '', email: '', city: '', address: '', service: '', message: '' });
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <Breadcrumbs items={[{ name: 'Contact', url: '/contact' }]} />
      
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Contact Us
        </h1>
        <p className="text-center text-gray-600 mb-12">
          Ready to improve your indoor air quality? Get in touch today!
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-soft p-8">
            <h2 className="text-2xl font-bold mb-6">Get a Free Quote</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold mb-2">Name *</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-brand-blue"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Phone *</label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-brand-blue"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Email *</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-brand-blue"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">City *</label>
                <input
                  type="text"
                  required
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-brand-blue"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Address</label>
                <input
                  type="text"
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-brand-blue"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Service Needed</label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-brand-blue"
                >
                  <option value="">Select a service</option>
                  <option value="air-duct">Air Duct Cleaning</option>
                  <option value="dryer-vent">Dryer Vent Cleaning</option>
                  <option value="chimney">Chimney Sweep</option>
                  <option value="insulation">Insulation Inspection</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Message</label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-brand-blue"
                  placeholder="Tell us about your needs..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-brand-green text-white py-3 rounded-lg font-bold hover:bg-green-600 transition"
              >
                Submit Request
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-soft p-8">
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-brand-blue mr-4 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div>
                    <p className="font-semibold">Phone</p>
                    <a href={`tel:${businessInfo.phone}`} className="text-brand-blue hover:underline">
                      {businessInfo.phone}
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-brand-blue mr-4 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <p className="font-semibold">Email</p>
                    <a href={`mailto:${businessInfo.email}`} className="text-brand-blue hover:underline">
                      {businessInfo.email}
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-brand-blue mr-4 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <p className="font-semibold">Address</p>
                    <p className="text-gray-700">{businessInfo.address.full}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-brand-blue mr-4 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <p className="font-semibold">Office Hours</p>
                    <p className="text-gray-700">{businessInfo.hours.office}</p>
                    <p className="text-brand-green text-sm font-semibold mt-1">{businessInfo.hours.emergency}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="bg-white rounded-lg shadow-soft overflow-hidden">
              <iframe
                src={gbpData.mapEmbedUrl}
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Air Care Pro Location"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

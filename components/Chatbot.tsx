'use client';

import { useState } from 'react';
import { businessInfo } from '@/data/business';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: '',
    address: '',
    issue: '',
    time: '',
    notes: '',
  });

  const handleSubmit = async () => {
    // In production, this would send to an API or form handler
    console.log('Quote request:', formData);
    alert('Thank you! We\'ll contact you shortly to schedule your service.');
    setIsOpen(false);
    setStep(0);
    setFormData({
      name: '',
      phone: '',
      email: '',
      city: '',
      address: '',
      issue: '',
      time: '',
      notes: '',
    });
  };

  const currentHour = new Date().getHours();
  const isAfterHours = currentHour < 8 || currentHour >= 18;

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 bg-brand-green hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition z-50"
        aria-label="Get quick quote"
      >
        {isOpen ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        )}
      </button>

      {/* Chat Widget */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 bg-white rounded-lg shadow-2xl w-96 max-w-[calc(100vw-3rem)] z-50">
          <div className="bg-brand-blue text-white p-4 rounded-t-lg">
            <h3 className="font-bold">Get Quick Quote</h3>
            <p className="text-sm">Same-day & after-hours service available!</p>
          </div>

          <div className="p-4 max-h-96 overflow-y-auto">
            {step === 0 && (
              <div className="space-y-4">
                <p className="text-gray-700">
                  Hey there! Trouble with air ducts or dryer vent? Same-day and after-hours service across DFW. Want a fast quote?
                </p>
                {isAfterHours && (
                  <div className="bg-yellow-50 border border-yellow-200 rounded p-3 text-sm">
                    <p className="font-semibold text-yellow-800">After-Hours Service</p>
                    <p className="text-yellow-700">We're available 24/7 for emergencies!</p>
                  </div>
                )}
                <button
                  onClick={() => setStep(1)}
                  className="w-full bg-brand-green text-white py-2 rounded hover:bg-green-600 transition"
                >
                  Yes, Get Quote
                </button>
              </div>
            )}

            {step === 1 && (
              <div className="space-y-3">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full p-2 border rounded"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full p-2 border rounded"
                />
                <input
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full p-2 border rounded"
                />
                <button
                  onClick={() => setStep(2)}
                  disabled={!formData.name || !formData.phone}
                  className="w-full bg-brand-blue text-white py-2 rounded hover:bg-blue-700 transition disabled:bg-gray-400"
                >
                  Continue
                </button>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-3">
                <input
                  type="text"
                  placeholder="City"
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  className="w-full p-2 border rounded"
                />
                <input
                  type="text"
                  placeholder="Address"
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  className="w-full p-2 border rounded"
                />
                <textarea
                  placeholder="What's going on today?"
                  value={formData.issue}
                  onChange={(e) => setFormData({ ...formData, issue: e.target.value })}
                  className="w-full p-2 border rounded"
                  rows={3}
                />
                <input
                  type="text"
                  placeholder="Preferred time?"
                  value={formData.time}
                  onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                  className="w-full p-2 border rounded"
                />
                <textarea
                  placeholder="Any pets or special instructions?"
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full p-2 border rounded"
                  rows={2}
                />
                <button
                  onClick={handleSubmit}
                  className="w-full bg-brand-green text-white py-2 rounded hover:bg-green-600 transition"
                >
                  Submit Quote Request
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

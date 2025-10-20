'use client';

import { useState } from 'react';
import reviews from '@/data/reviews.json';

export default function ReviewCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };
  
  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };
  
  const review = reviews[currentIndex];
  
  return (
    <div className="bg-white rounded-lg shadow-soft p-8 max-w-3xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={prev}
          className="text-brand-blue hover:text-brand-green transition"
          aria-label="Previous review"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <div className="flex-1 text-center">
          <div className="flex justify-center mb-2">
            {[...Array(review.rating)].map((_, i) => (
              <svg key={i} className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <p className="text-gray-700 italic mb-4">"{review.text}"</p>
          <p className="font-semibold text-brand-navy">{review.name}</p>
          <p className="text-sm text-gray-600">{review.city}, TX • {review.service}</p>
          <p className="text-xs text-gray-400 mt-1">{new Date(review.date).toLocaleDateString()}</p>
        </div>
        
        <button
          onClick={next}
          className="text-brand-blue hover:text-brand-green transition"
          aria-label="Next review"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
      
      <div className="flex justify-center space-x-2">
        {reviews.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition ${
              index === currentIndex ? 'bg-brand-blue' : 'bg-gray-300'
            }`}
            aria-label={`Go to review ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

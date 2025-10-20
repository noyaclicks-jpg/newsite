import { pricingTiers } from '@/data/pricing';

export default function PricingCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {pricingTiers.map((tier, index) => (
        <div
          key={index}
          className={`bg-white rounded-lg shadow-soft p-6 border-2 ${
            tier.popular ? 'border-brand-green scale-105' : 'border-gray-200'
          } hover:shadow-xl transition relative`}
        >
          {tier.popular && (
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-brand-green text-white px-4 py-1 rounded-full text-sm font-semibold">
              Most Popular
            </div>
          )}
          <h3 className="text-xl font-bold text-brand-navy mb-2">{tier.name}</h3>
          <div className="mb-4">
            <span className="text-4xl font-bold text-brand-blue">{tier.price}</span>
            {tier.unit && <span className="text-gray-600 text-sm ml-2">{tier.unit}</span>}
          </div>
          <p className="text-gray-600 mb-6">{tier.description}</p>
          <ul className="space-y-3 mb-6">
            {tier.features.map((feature, i) => (
              <li key={i} className="flex items-start">
                <svg className="w-5 h-5 text-brand-green mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-sm">{feature}</span>
              </li>
            ))}
          </ul>
          <a
            href="/contact"
            className={`block text-center py-3 px-6 rounded-lg font-semibold transition ${
              tier.popular
                ? 'bg-brand-green text-white hover:bg-green-600'
                : 'bg-brand-blue text-white hover:bg-blue-700'
            }`}
          >
            {tier.cta}
          </a>
        </div>
      ))}
    </div>
  );
}

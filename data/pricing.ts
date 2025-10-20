export interface PricingTier {
  name: string;
  price: string;
  unit?: string;
  description: string;
  features: string[];
  popular?: boolean;
  cta: string;
}

export const pricingTiers: PricingTier[] = [
  {
    name: 'Whole-Home Maintenance',
    price: '$99',
    description: 'Complete annual maintenance package',
    features: [
      'Air duct inspection',
      'Dryer vent cleaning',
      'Filter replacement',
      'Insulation check',
      'Priority scheduling',
      'Annual reminder service',
    ],
    cta: 'Get Started',
  },
  {
    name: 'Rotary Brush + Negative Air',
    price: '$35',
    unit: 'per vent',
    description: 'Professional air duct cleaning with advanced technology',
    features: [
      'Rotary brush cleaning',
      'Negative air pressure',
      'All supply & return vents',
      'Before & after photos',
      'NADCA-certified process',
      'Satisfaction guarantee',
    ],
    popular: true,
    cta: 'Most Popular',
  },
  {
    name: 'Dryer Vent Fire-Risk Reduction',
    price: '$79',
    description: 'Prevent fires and improve dryer efficiency',
    features: [
      'Complete vent cleaning',
      'Lint trap cleaning',
      'Airflow testing',
      'Safety inspection',
      'Fire prevention tips',
      'Same-day service',
    ],
    cta: 'Book Now',
  },
  {
    name: 'Chimney Sweep Level-1',
    price: '$99',
    description: 'Sweep & inspection for safe fireplace operation',
    features: [
      'Complete chimney sweep',
      'Level 1 inspection',
      'Creosote removal',
      'Firebox cleaning',
      'Written report',
      'Safety certification',
    ],
    cta: 'Schedule Service',
  },
];

export const pricingDisclaimer = 'Prices shown are base rates for standard residential services. Final pricing may vary based on home size, accessibility, and specific service requirements. Emergency and after-hours services subject to additional fees. All services backed by our 100% satisfaction guarantee.';

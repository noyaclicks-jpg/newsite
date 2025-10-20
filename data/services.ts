export interface FAQ {
  question: string;
  answer: string;
}

export interface Service {
  slug: string;
  name: string;
  short: string;
  description: string;
  benefits: string[];
  process: string[];
  included: string[];
  faq: FAQ[];
  relatedServices: string[];
  pricing?: string;
}

export const services: Service[] = [
  {
    slug: 'air-duct-cleaning',
    name: 'Air Duct Cleaning',
    short: 'Professional air duct cleaning to improve indoor air quality and HVAC efficiency',
    description: 'Our comprehensive air duct cleaning service removes dust, debris, allergens, and contaminants from your HVAC system. Using state-of-the-art rotary brush and negative air technology, we ensure your air ducts are thoroughly cleaned, improving air quality and system performance.',
    benefits: [
      'Improved indoor air quality',
      'Reduced allergens and dust',
      'Enhanced HVAC efficiency',
      'Lower energy bills',
      'Extended system lifespan',
    ],
    process: [
      'Complete system inspection',
      'Preparation and protection of your home',
      'Rotary brush cleaning with negative air pressure',
      'Sanitization and deodorization',
      'Final inspection and testing',
    ],
    included: [
      'All supply and return vents',
      'Main trunk lines',
      'Negative air machine setup',
      'Before and after photos',
      'NADCA-certified cleaning',
    ],
    faq: [
      {
        question: 'How often should air ducts be cleaned?',
        answer: 'We recommend professional air duct cleaning every 3-5 years, or sooner if you have pets, allergies, recent renovations, or notice visible dust buildup.',
      },
      {
        question: 'How long does air duct cleaning take?',
        answer: 'Most residential air duct cleaning projects take 3-5 hours, depending on the size of your home and the complexity of your HVAC system.',
      },
      {
        question: 'Will air duct cleaning reduce my energy bills?',
        answer: 'Yes, clean air ducts allow your HVAC system to operate more efficiently, which can reduce energy consumption by up to 20%.',
      },
      {
        question: 'Do you guarantee your work?',
        answer: 'Absolutely. We stand behind our work with a 100% satisfaction guarantee. If you\'re not happy with the results, we\'ll make it right.',
      },
    ],
    relatedServices: ['dryer-vent-cleaning', 'hvac-sanitization', 'insulation-inspection'],
    pricing: '$35 per vent',
  },
  {
    slug: 'dryer-vent-cleaning',
    name: 'Dryer Vent Cleaning',
    short: 'Fire prevention and efficiency improvement through professional dryer vent cleaning',
    description: 'Lint buildup in dryer vents is a leading cause of house fires. Our dryer vent cleaning service removes dangerous lint accumulation, improves dryer efficiency, and protects your home from fire hazards.',
    benefits: [
      'Fire risk reduction',
      'Faster drying times',
      'Lower energy costs',
      'Extended dryer lifespan',
      'Reduced carbon monoxide risk',
    ],
    process: [
      'Inspection of dryer and vent system',
      'Disconnect dryer and access vent',
      'Rotary brush and vacuum cleaning',
      'Check for damage or obstructions',
      'Reconnect and test dryer operation',
    ],
    included: [
      'Complete vent cleaning from dryer to exterior',
      'Lint trap cleaning',
      'Vent inspection',
      'Airflow testing',
      'Safety recommendations',
    ],
    faq: [
      {
        question: 'How often should I clean my dryer vent?',
        answer: 'Dryer vents should be professionally cleaned at least once a year. If you do large amounts of laundry or notice longer drying times, consider more frequent cleaning.',
      },
      {
        question: 'What are signs my dryer vent needs cleaning?',
        answer: 'Common signs include longer drying times, clothes being hotter than usual, burning smell, excessive lint around the dryer, and the outside vent flap not opening properly.',
      },
      {
        question: 'Can a clogged dryer vent really cause a fire?',
        answer: 'Yes. According to the U.S. Fire Administration, dryer vent fires account for over 2,900 home fires annually, causing millions in property damage.',
      },
    ],
    relatedServices: ['air-duct-cleaning', 'chimney-sweep', 'exhaust-fan-cleaning'],
    pricing: '$79',
  },
  {
    slug: 'chimney-sweep',
    name: 'Chimney Sweep & Inspection',
    short: 'Level 1 chimney sweep and inspection for safe fireplace operation',
    description: 'Our certified chimney sweep service includes a thorough cleaning and Level 1 inspection to ensure your chimney is safe for use. We remove creosote, soot, and debris that can cause chimney fires.',
    benefits: [
      'Fire and carbon monoxide prevention',
      'Improved draft and efficiency',
      'Early detection of damage',
      'Compliance with insurance requirements',
      'Peace of mind for safe operation',
    ],
    process: [
      'Pre-inspection and setup',
      'Brush and vacuum chimney flue',
      'Remove creosote and soot',
      'Clean firebox and damper',
      'Level 1 safety inspection',
    ],
    included: [
      'Complete chimney sweep',
      'Level 1 visual inspection',
      'Firebox cleaning',
      'Damper inspection',
      'Written inspection report',
    ],
    faq: [
      {
        question: 'How often should a chimney be swept?',
        answer: 'The National Fire Protection Association recommends annual chimney inspections and cleaning as needed, typically once a year for regular users.',
      },
      {
        question: 'What is creosote and why is it dangerous?',
        answer: 'Creosote is a tar-like substance that builds up in chimneys from burning wood. It\'s highly flammable and the leading cause of chimney fires.',
      },
      {
        question: 'Do you clean gas fireplace chimneys?',
        answer: 'Yes, gas fireplaces still produce byproducts that can build up in the chimney. Regular inspection and cleaning are important for safety.',
      },
    ],
    relatedServices: ['dryer-vent-cleaning', 'air-duct-cleaning', 'fireplace-maintenance'],
    pricing: '$99',
  },
  {
    slug: 'insulation-inspection',
    name: 'Insulation Inspection',
    short: 'Professional attic and wall insulation assessment for energy efficiency',
    description: 'Our insulation inspection service identifies areas where your home is losing energy through inadequate or damaged insulation. We provide detailed recommendations for improving comfort and reducing energy costs.',
    benefits: [
      'Identify energy loss areas',
      'Lower heating and cooling costs',
      'Improved home comfort',
      'Moisture and mold detection',
      'ROI analysis for upgrades',
    ],
    process: [
      'Visual attic inspection',
      'R-value assessment',
      'Thermal imaging (if needed)',
      'Moisture and ventilation check',
      'Detailed report with recommendations',
    ],
    included: [
      'Complete attic assessment',
      'R-value measurement',
      'Ventilation evaluation',
      'Moisture inspection',
      'Written report',
    ],
    faq: [
      {
        question: 'How much insulation does my home need?',
        answer: 'Texas homes typically need R-30 to R-49 in attics. We\'ll assess your current levels and recommend upgrades if needed.',
      },
      {
        question: 'Can poor insulation affect air quality?',
        answer: 'Yes, inadequate insulation can lead to moisture problems, which can cause mold growth and affect indoor air quality.',
      },
      {
        question: 'How long does an inspection take?',
        answer: 'Most insulation inspections take 45-90 minutes, depending on the size of your home and attic accessibility.',
      },
    ],
    relatedServices: ['air-duct-cleaning', 'attic-ventilation', 'insulation-installation'],
  },
  {
    slug: 'hvac-sanitization',
    name: 'HVAC Sanitization',
    short: 'Antimicrobial treatment to eliminate bacteria, mold, and odors from your HVAC system',
    description: 'After cleaning your air ducts, we can apply EPA-approved antimicrobial treatments to prevent mold, bacteria, and odor-causing agents from growing in your HVAC system.',
    benefits: [
      'Eliminates mold and bacteria',
      'Removes persistent odors',
      'Healthier indoor air',
      'Long-lasting protection',
      'Safe for family and pets',
    ],
    process: [
      'Complete duct cleaning first',
      'Apply EPA-approved sanitizer',
      'Treat all accessible surfaces',
      'Allow proper drying time',
      'Final air quality check',
    ],
    included: [
      'EPA-approved sanitizer',
      'Complete system application',
      'Odor elimination',
      'Safety documentation',
      'Post-treatment inspection',
    ],
    faq: [
      {
        question: 'Is HVAC sanitization safe?',
        answer: 'Yes, we use only EPA-approved antimicrobial products that are safe for residential use and pets.',
      },
      {
        question: 'How long does sanitization protection last?',
        answer: 'With proper HVAC maintenance, sanitization can provide protection for 1-2 years.',
      },
      {
        question: 'Can sanitization remove smoke odor?',
        answer: 'Yes, our sanitization process is effective at eliminating smoke, pet, and other persistent odors from HVAC systems.',
      },
    ],
    relatedServices: ['air-duct-cleaning', 'mold-remediation', 'odor-removal'],
  },
  {
    slug: 'commercial-duct-cleaning',
    name: 'Commercial Air Duct Cleaning',
    short: 'Professional air duct cleaning for offices, retail, and commercial buildings',
    description: 'We provide comprehensive commercial HVAC cleaning services for businesses of all sizes. Our services minimize downtime and ensure a healthy environment for employees and customers.',
    benefits: [
      'Improved workplace air quality',
      'Compliance with health codes',
      'Reduced sick days',
      'Lower energy costs',
      'Enhanced customer experience',
    ],
    process: [
      'After-hours scheduling available',
      'Complete system assessment',
      'Negative air cleaning',
      'Minimal business disruption',
      'Documentation for compliance',
    ],
    included: [
      'All accessible ductwork',
      'Supply and return vents',
      'RTU connections',
      'Before/after documentation',
      'Compliance certificates',
    ],
    faq: [
      {
        question: 'Can you work after business hours?',
        answer: 'Yes, we offer flexible scheduling including evenings and weekends to minimize disruption to your business.',
      },
      {
        question: 'How often should commercial ducts be cleaned?',
        answer: 'Commercial HVAC systems should be cleaned every 2-3 years, or more frequently for restaurants, medical facilities, or high-traffic businesses.',
      },
    ],
    relatedServices: ['air-duct-cleaning', 'hvac-sanitization', 'exhaust-cleaning'],
  },
  {
    slug: 'residential-maintenance',
    name: 'Whole-Home Maintenance Plan',
    short: 'Comprehensive annual maintenance package for complete home air quality',
    description: 'Our whole-home maintenance plan includes air duct cleaning, dryer vent cleaning, and insulation inspection to keep your home comfortable and energy-efficient year-round.',
    benefits: [
      'Complete home protection',
      'Priority scheduling',
      'Discounted pricing',
      'Annual reminders',
      'Peace of mind',
    ],
    process: [
      'Schedule annual visit',
      'Complete air duct cleaning',
      'Dryer vent service',
      'Insulation check',
      'Comprehensive report',
    ],
    included: [
      'Air duct cleaning',
      'Dryer vent cleaning',
      'Filter replacement',
      'Insulation inspection',
      'Annual report card',
    ],
    faq: [
      {
        question: 'How much can I save with a maintenance plan?',
        answer: 'Our maintenance plan saves you up to 30% compared to booking services individually.',
      },
      {
        question: 'Can I add services to my plan?',
        answer: 'Yes, you can customize your plan and add services like chimney sweep or HVAC sanitization.',
      },
    ],
    relatedServices: ['air-duct-cleaning', 'dryer-vent-cleaning', 'insulation-inspection'],
    pricing: '$99',
  },
  {
    slug: 'new-home-construction',
    name: 'New Construction Cleaning',
    short: 'Remove construction debris from HVAC systems in newly built homes',
    description: 'New homes often have significant construction debris in ductwork. Our post-construction cleaning removes sawdust, drywall dust, and other materials before you move in.',
    benefits: [
      'Remove construction debris',
      'Start with clean air',
      'Protect new HVAC investment',
      'Better system efficiency',
      'Healthier move-in',
    ],
    process: [
      'Pre-occupancy inspection',
      'Remove construction materials',
      'Complete duct cleaning',
      'System testing',
      'Builder documentation',
    ],
    included: [
      'Complete duct cleaning',
      'Debris removal',
      'Filter replacement',
      'System testing',
      'Documentation for builder',
    ],
    faq: [
      {
        question: 'When should new home ducts be cleaned?',
        answer: 'Ideally, air ducts should be cleaned after construction is complete but before move-in to ensure the cleanest possible start.',
      },
      {
        question: 'Is this covered by my builder?',
        answer: 'Some builders include duct cleaning; we can work directly with your builder and provide necessary documentation.',
      },
    ],
    relatedServices: ['air-duct-cleaning', 'hvac-sanitization', 'insulation-inspection'],
  },
  {
    slug: 'mold-remediation',
    name: 'HVAC Mold Remediation',
    short: 'Professional mold removal from HVAC systems and ductwork',
    description: 'If mold is discovered in your HVAC system, our remediation service safely removes contamination and prevents future growth.',
    benefits: [
      'Health hazard elimination',
      'Prevent mold spread',
      'Improved air quality',
      'Professional assessment',
      'Long-term prevention',
    ],
    process: [
      'Mold testing and assessment',
      'Containment procedures',
      'HEPA vacuum removal',
      'Antimicrobial treatment',
      'Prevention recommendations',
    ],
    included: [
      'Mold assessment',
      'Safe removal procedures',
      'HEPA filtration',
      'Antimicrobial treatment',
      'Prevention plan',
    ],
    faq: [
      {
        question: 'What causes mold in HVAC systems?',
        answer: 'Mold grows when moisture is present. Common causes include condensation, leaks, poor drainage, or high humidity.',
      },
      {
        question: 'Is HVAC mold dangerous?',
        answer: 'Yes, mold can cause respiratory issues, allergies, and other health problems, especially for sensitive individuals.',
      },
      {
        question: 'How do you prevent mold from returning?',
        answer: 'We identify and address moisture sources, apply antimicrobial treatment, and provide recommendations for humidity control.',
      },
    ],
    relatedServices: ['hvac-sanitization', 'air-duct-cleaning', 'humidity-control'],
  },
  {
    slug: 'attic-ventilation',
    name: 'Attic Ventilation Assessment',
    short: 'Evaluate and improve attic airflow for temperature control and moisture prevention',
    description: 'Proper attic ventilation is crucial for energy efficiency and preventing moisture damage. We assess your current ventilation and recommend improvements.',
    benefits: [
      'Lower cooling costs',
      'Prevent moisture damage',
      'Extend roof lifespan',
      'Reduce ice damming',
      'Better indoor comfort',
    ],
    process: [
      'Calculate ventilation requirements',
      'Inspect existing vents',
      'Identify blockages',
      'Recommend improvements',
      'Installation available',
    ],
    included: [
      'Ventilation calculation',
      'Visual inspection',
      'Airflow assessment',
      'Detailed recommendations',
      'ROI analysis',
    ],
    faq: [
      {
        question: 'How much ventilation does my attic need?',
        answer: 'The standard is 1 square foot of ventilation per 300 square feet of attic space, balanced between intake and exhaust.',
      },
      {
        question: 'Can poor ventilation damage my roof?',
        answer: 'Yes, inadequate ventilation can lead to moisture buildup, mold, rot, and premature shingle failure.',
      },
    ],
    relatedServices: ['insulation-inspection', 'air-duct-cleaning', 'energy-audit'],
  },
  {
    slug: 'filter-replacement',
    name: 'HVAC Filter Replacement Service',
    short: 'Regular filter replacement to maintain air quality and system efficiency',
    description: 'We offer convenient filter replacement services with reminders to ensure your HVAC system always has clean filters.',
    benefits: [
      'Better air quality',
      'Lower energy bills',
      'Extended system life',
      'Automatic reminders',
      'Hassle-free service',
    ],
    process: [
      'Measure current filters',
      'Provide high-quality replacements',
      'Install new filters',
      'Set reminder schedule',
      'Dispose of old filters',
    ],
    included: [
      'Quality filters',
      'Professional installation',
      'Reminder service',
      'Proper disposal',
      'System check',
    ],
    faq: [
      {
        question: 'How often should filters be changed?',
        answer: 'Standard filters should be changed every 30-90 days depending on usage, pets, and air quality needs.',
      },
      {
        question: 'What type of filters do you recommend?',
        answer: 'We recommend MERV 8-13 filters for most homes, balancing air quality and system efficiency.',
      },
    ],
    relatedServices: ['air-duct-cleaning', 'residential-maintenance', 'air-quality-testing'],
  },
  {
    slug: 'exhaust-fan-cleaning',
    name: 'Bathroom & Kitchen Exhaust Cleaning',
    short: 'Clean exhaust fans and vents for better air circulation and odor removal',
    description: 'Kitchen and bathroom exhaust systems accumulate grease, dust, and debris. Our cleaning service restores proper function and prevents fire hazards.',
    benefits: [
      'Improved air circulation',
      'Fire risk reduction',
      'Odor elimination',
      'Quieter operation',
      'Extended fan life',
    ],
    process: [
      'Remove fan covers',
      'Clean fan blades and housing',
      'Vacuum duct lines',
      'Test operation',
      'Reinstall covers',
    ],
    included: [
      'All accessible exhaust fans',
      'Grease removal',
      'Duct cleaning',
      'Operational testing',
      'Recommendations',
    ],
    faq: [
      {
        question: 'How often should exhaust fans be cleaned?',
        answer: 'Kitchen exhaust fans should be cleaned every 6-12 months; bathroom fans annually or when performance decreases.',
      },
      {
        question: 'Why is my exhaust fan so loud?',
        answer: 'Noise is usually caused by dust buildup on fan blades. Cleaning often resolves the issue.',
      },
    ],
    relatedServices: ['dryer-vent-cleaning', 'air-duct-cleaning', 'kitchen-hood-cleaning'],
  },
  {
    slug: 'air-quality-testing',
    name: 'Indoor Air Quality Testing',
    short: 'Professional testing to identify allergens, pollutants, and contaminants',
    description: 'Our comprehensive air quality testing identifies specific pollutants, allergens, and contaminants affecting your indoor environment.',
    benefits: [
      'Identify specific pollutants',
      'Targeted solutions',
      'Health protection',
      'Peace of mind',
      'Baseline for improvements',
    ],
    process: [
      'Place air quality monitors',
      'Collect samples',
      'Laboratory analysis',
      'Detailed report',
      'Remediation recommendations',
    ],
    included: [
      'Air quality monitoring',
      'Lab analysis',
      'Detailed report',
      'Recommendations',
      'Follow-up consultation',
    ],
    faq: [
      {
        question: 'What does air quality testing detect?',
        answer: 'We test for particulates, VOCs, mold spores, carbon monoxide, humidity levels, and other common indoor pollutants.',
      },
      {
        question: 'How long does testing take?',
        answer: 'Sample collection takes about an hour; lab results are typically available within 5-7 business days.',
      },
    ],
    relatedServices: ['mold-remediation', 'hvac-sanitization', 'air-duct-cleaning'],
  },
  {
    slug: 'uv-light-installation',
    name: 'UV Light Air Purification',
    short: 'Install UV-C lights in HVAC systems to kill bacteria, viruses, and mold',
    description: 'UV-C light technology installed in your HVAC system continuously kills airborne pathogens, bacteria, viruses, and prevents mold growth.',
    benefits: [
      'Kill bacteria and viruses',
      'Prevent mold growth',
      'Reduce odors',
      'Continuous protection',
      'Low maintenance',
    ],
    process: [
      'System assessment',
      'Select appropriate UV system',
      'Professional installation',
      'Test operation',
      'Maintenance instructions',
    ],
    included: [
      'UV-C light system',
      'Professional installation',
      'System testing',
      'Warranty registration',
      'Annual replacement reminder',
    ],
    faq: [
      {
        question: 'Are UV lights safe?',
        answer: 'Yes, UV-C lights are safely contained within the HVAC system and don\'t expose occupants to UV radiation.',
      },
      {
        question: 'How long do UV lights last?',
        answer: 'UV-C bulbs typically last 9-14 months and should be replaced annually for optimal effectiveness.',
      },
      {
        question: 'Do UV lights really kill viruses?',
        answer: 'Yes, UV-C light is proven to inactivate bacteria, viruses, and mold spores that pass through your HVAC system.',
      },
    ],
    relatedServices: ['hvac-sanitization', 'air-quality-testing', 'air-duct-cleaning'],
  },
  {
    slug: 'vent-repair',
    name: 'Air Vent Repair & Replacement',
    short: 'Repair or replace damaged air vents and registers for proper airflow',
    description: 'Damaged or poorly sealed vents reduce HVAC efficiency and comfort. We repair or replace vents to restore proper airflow.',
    benefits: [
      'Improved airflow',
      'Better temperature control',
      'Energy savings',
      'Eliminate air leaks',
      'Enhanced appearance',
    ],
    process: [
      'Inspect all vents',
      'Identify damage or leaks',
      'Repair or replace as needed',
      'Seal connections',
      'Test airflow',
    ],
    included: [
      'Vent inspection',
      'Repair or replacement',
      'Proper sealing',
      'Airflow testing',
      'Color matching',
    ],
    faq: [
      {
        question: 'How do I know if my vents need repair?',
        answer: 'Signs include visible damage, poor airflow, whistling sounds, or temperature inconsistencies between rooms.',
      },
      {
        question: 'Can you match my existing vents?',
        answer: 'Yes, we carry a wide variety of vent styles and can match most existing installations.',
      },
    ],
    relatedServices: ['air-duct-cleaning', 'hvac-repair', 'energy-audit'],
  },
  {
    slug: 'energy-audit',
    name: 'Home Energy Audit',
    short: 'Comprehensive assessment to identify energy loss and improvement opportunities',
    description: 'Our energy audit identifies where your home is losing energy and provides prioritized recommendations for improvements.',
    benefits: [
      'Lower energy bills',
      'Improved comfort',
      'Identify problem areas',
      'ROI analysis',
      'Rebate assistance',
    ],
    process: [
      'Thermal imaging scan',
      'Insulation assessment',
      'HVAC efficiency check',
      'Air leak detection',
      'Detailed report with priorities',
    ],
    included: [
      'Thermal imaging',
      'Insulation inspection',
      'Ductwork assessment',
      'Leak detection',
      'Written report with ROI',
    ],
    faq: [
      {
        question: 'How much can I save with an energy audit?',
        answer: 'Most homeowners can reduce energy costs by 20-30% by implementing recommended improvements.',
      },
      {
        question: 'Are there rebates available?',
        answer: 'Many utility companies offer rebates for energy-efficiency upgrades. We can help identify available programs.',
      },
    ],
    relatedServices: ['insulation-inspection', 'attic-ventilation', 'duct-sealing'],
  },
  {
    slug: 'duct-sealing',
    name: 'Duct Sealing & Repair',
    short: 'Seal leaks in ductwork to improve efficiency and reduce energy waste',
    description: 'Leaky ducts can waste 20-30% of your HVAC energy. Our sealing service identifies and repairs leaks for maximum efficiency.',
    benefits: [
      'Up to 30% energy savings',
      'Better temperature control',
      'Improved air quality',
      'Reduced dust',
      'Lower utility bills',
    ],
    process: [
      'Pressure test to locate leaks',
      'Access problem areas',
      'Seal with mastic or aerosol',
      'Retest system',
      'Document improvements',
    ],
    included: [
      'Leak detection testing',
      'Professional sealing',
      'Accessible duct repairs',
      'Before/after testing',
      'Energy savings estimate',
    ],
    faq: [
      {
        question: 'How do you find duct leaks?',
        answer: 'We use pressure testing and thermal imaging to identify leaks throughout your duct system.',
      },
      {
        question: 'Is duct sealing worth the cost?',
        answer: 'Yes, most homeowners see ROI within 2-3 years through energy savings, plus improved comfort immediately.',
      },
    ],
    relatedServices: ['air-duct-cleaning', 'energy-audit', 'insulation-inspection'],
  },
  {
    slug: 'pet-odor-removal',
    name: 'Pet Odor Elimination',
    short: 'Specialized treatment to remove pet odors from HVAC systems',
    description: 'Pet dander and odors circulate through your HVAC system. Our specialized treatment eliminates these odors at the source.',
    benefits: [
      'Eliminate pet odors',
      'Reduce allergens',
      'Fresher air',
      'Safe for pets',
      'Long-lasting results',
    ],
    process: [
      'Complete duct cleaning',
      'Pet-safe sanitization',
      'Odor neutralization',
      'Filter replacement',
      'Prevention recommendations',
    ],
    included: [
      'Duct cleaning',
      'Pet-safe sanitizer',
      'Odor neutralization',
      'High-efficiency filter',
      'Maintenance tips',
    ],
    faq: [
      {
        question: 'Is the treatment safe for my pets?',
        answer: 'Yes, we use only pet-safe, EPA-approved products that are completely safe for animals.',
      },
      {
        question: 'How long do results last?',
        answer: 'With regular filter changes and maintenance, odor elimination can last 1-2 years.',
      },
    ],
    relatedServices: ['hvac-sanitization', 'air-duct-cleaning', 'air-quality-testing'],
  },
  {
    slug: 'smoke-odor-removal',
    name: 'Smoke & Fire Odor Removal',
    short: 'Restore air quality after smoke or fire damage',
    description: 'After smoke or fire damage, odors can persist in your HVAC system. Our restoration service eliminates these odors completely.',
    benefits: [
      'Complete odor removal',
      'Restored air quality',
      'Insurance documentation',
      'Health protection',
      'Peace of mind',
    ],
    process: [
      'Damage assessment',
      'Complete duct cleaning',
      'Ozone or hydroxyl treatment',
      'Seal if necessary',
      'Final air quality testing',
    ],
    included: [
      'Assessment',
      'Complete cleaning',
      'Odor elimination treatment',
      'Testing',
      'Insurance documentation',
    ],
    faq: [
      {
        question: 'Will insurance cover this service?',
        answer: 'Most homeowners insurance policies cover smoke and fire restoration. We provide detailed documentation for claims.',
      },
      {
        question: 'How long does the process take?',
        answer: 'Most smoke odor removal takes 1-2 days depending on the severity of the damage.',
      },
    ],
    relatedServices: ['hvac-sanitization', 'mold-remediation', 'air-duct-cleaning'],
  },
  {
    slug: 'emergency-service',
    name: '24/7 Emergency HVAC Service',
    short: 'After-hours emergency air duct and dryer vent services',
    description: 'HVAC emergencies don\'t wait for business hours. We offer 24/7 emergency service for urgent situations including dryer vent fires, air quality emergencies, and more.',
    benefits: [
      '24/7 availability',
      'Rapid response',
      'Experienced technicians',
      'Fire prevention',
      'Safety first',
    ],
    process: [
      'Call our emergency line',
      'Rapid dispatch',
      'On-site assessment',
      'Emergency service',
      'Follow-up recommendations',
    ],
    included: [
      '24/7 availability',
      'Emergency response',
      'Same-day service',
      'Safety assessment',
      'Documentation',
    ],
    faq: [
      {
        question: 'What qualifies as an emergency?',
        answer: 'Emergencies include dryer fires, smoke in vents, gas odors, carbon monoxide concerns, or severe air quality issues.',
      },
      {
        question: 'Is there an emergency fee?',
        answer: 'After-hours service includes an emergency dispatch fee. We\'ll provide pricing when you call.',
      },
    ],
    relatedServices: ['dryer-vent-cleaning', 'air-duct-cleaning', 'chimney-sweep'],
  },
];

import Link from 'next/link';
import { cities, City } from '@/data/cities';

interface CityGridProps {
  limit?: number;
  exclude?: string;
}

export default function CityGrid({ limit, exclude }: CityGridProps) {
  let displayCities = cities;
  
  if (exclude) {
    displayCities = displayCities.filter((c) => c.slug !== exclude);
  }
  
  if (limit) {
    displayCities = displayCities.slice(0, limit);
  }
  
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {displayCities.map((city) => (
        <Link
          key={city.slug}
          href={`/locations/${city.slug}`}
          className="bg-white rounded-lg shadow p-4 hover:shadow-lg hover:bg-brand-blue hover:text-white transition text-center"
        >
          <h3 className="font-semibold">{city.name}</h3>
          <p className="text-sm opacity-80">{city.county} County</p>
        </Link>
      ))}
    </div>
  );
}

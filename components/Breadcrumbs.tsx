import Link from 'next/link';

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav className="text-sm text-gray-600 mb-4" aria-label="Breadcrumb">
      <ol className="flex items-center space-x-2">
        <li>
          <Link href="/" className="hover:text-brand-blue transition">Home</Link>
        </li>
        {items.map((item, index) => (
          <li key={index} className="flex items-center space-x-2">
            <span>/</span>
            {index === items.length - 1 ? (
              <span className="text-gray-900 font-semibold">{item.name}</span>
            ) : (
              <Link href={item.url} className="hover:text-brand-blue transition">{item.name}</Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

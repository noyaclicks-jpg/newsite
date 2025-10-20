'use client';

interface SchemaProps {
  data: Record<string, any> | Record<string, any>[];
}

export default function Schema({ data }: SchemaProps) {
  const schemas = Array.isArray(data) ? data : [data];
  
  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}

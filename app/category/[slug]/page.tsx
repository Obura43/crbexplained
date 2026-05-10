import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { categories, getCategoryBySlug } from '@/data/categories';
import { getGuidesByCategory } from '@/data/guides';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import { ArrowRight } from 'lucide-react';

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return categories.map((cat) => ({ slug: cat.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const category = getCategoryBySlug(params.slug);
  if (!category) return {};
  return {
    title: category.name,
    description: category.description,
    openGraph: {
      title: category.name,
      description: category.description,
    },
  };
}

export default function CategoryPage({ params }: Props) {
  const category = getCategoryBySlug(params.slug);
  if (!category) notFound();

  const guides = getGuidesByCategory(params.slug);

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://crbexplained.co.ke' },
      { '@type': 'ListItem', position: 2, name: category.name, item: `https://crbexplained.co.ke/category/${category.slug}` },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-16 lg:px-8">
        <Breadcrumbs items={[{ label: category.name }]} />

        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex rounded-full bg-blue-50 px-4 py-1.5 text-sm font-medium text-blue-700">
            {category.name}
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            {category.name}
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-lg text-slate-500">
            {category.description}
          </p>
        </div>

        {guides.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {guides.map((guide) => (
              <Link
                key={guide.slug}
                href={`/guides/${guide.slug}`}
                className="group rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:border-blue-200 hover:shadow-md"
              >
                <div className="mb-3 inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
                  {guide.category}
                </div>
                <h2 className="text-lg font-semibold text-slate-900 transition-colors group-hover:text-blue-600">
                  {guide.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">
                  {guide.intro.slice(0, 120)}...
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600">
                  Read guide <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            ))}
          </div>
        ) : (
          <p className="text-center text-slate-500">
            No guides available in this category yet.
          </p>
        )}
      </div>
    </>
  );
}

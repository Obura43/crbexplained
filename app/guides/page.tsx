import type { Metadata } from 'next';
import Link from 'next/link';
import { guides } from '@/data/guides';
import { categories } from '@/data/categories';
import { ArrowRight } from 'lucide-react';
import Breadcrumbs from '@/components/layout/Breadcrumbs';

export const metadata: Metadata = {
  title: 'CRB Guides',
  description: 'Browse all educational guides about CRB, credit reports, loan listings, and financial reputation in Kenya.',
};

export default function GuidesPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-16 lg:px-8">
      <Breadcrumbs items={[{ label: 'CRB Guides' }]} />

      <div className="mb-12 text-center">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          CRB Guides
        </h1>
        <p className="mt-3 text-lg text-slate-500">
          Browse all educational guides about CRB, credit reports, loan listings, and financial reputation in Kenya.
        </p>
      </div>

      {categories.map((cat) => {
        const catGuides = guides.filter((g) => g.categorySlug === cat.slug);
        if (catGuides.length === 0) return null;
        return (
          <section key={cat.slug} className="mb-12">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-xl font-semibold text-slate-900">{cat.name}</h2>
              <Link
                href={`/category/${cat.slug}`}
                className="text-sm font-medium text-blue-600 hover:text-blue-700"
              >
                View all <ArrowRight className="inline h-3.5 w-3.5" />
              </Link>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {catGuides.map((guide) => (
                <Link
                  key={guide.slug}
                  href={`/guides/${guide.slug}`}
                  className="group rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:border-blue-200 hover:shadow-md"
                >
                  <div className="mb-3 inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
                    {guide.category}
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 transition-colors group-hover:text-blue-600">
                    {guide.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500">
                    {guide.intro.slice(0, 120)}...
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600">
                    Read guide <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Link>
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}

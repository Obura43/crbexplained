import type { Metadata } from 'next';
import Link from 'next/link';
import { getCategoryBySlug } from '@/data/categories';
import { getGuidesByCategory } from '@/data/guides';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Credit Education',
  description: 'Explore educational guides about loan repayment, financial literacy, and building a healthier credit profile in Kenya.',
};

const educationCategories = [
  { slug: 'loan-repayment', name: 'Loan Repayment' },
  { slug: 'financial-education', name: 'Financial Education' },
];

export default function EducationPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-16 lg:px-8">
      <Breadcrumbs items={[{ label: 'Credit Education' }]} />

      <div className="mb-12 text-center">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Credit Education
        </h1>
        <p className="mx-auto mt-3 max-w-2xl text-lg text-slate-500">
          Explore educational guides about loan repayment, financial literacy, and building a healthier credit profile in Kenya.
        </p>
      </div>

      {/* Category Cards */}
      <section className="mb-12">
        <h2 className="mb-6 text-xl font-semibold text-slate-900">Categories</h2>
        <div className="grid gap-6 sm:grid-cols-2">
          {educationCategories.map((eduCat) => {
            const category = getCategoryBySlug(eduCat.slug);
            if (!category) return null;
            return (
              <Link
                key={category.slug}
                href={`/category/${category.slug}`}
                className="group rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:border-blue-200 hover:shadow-md"
              >
                <h3 className="text-lg font-semibold text-slate-900 transition-colors group-hover:text-blue-600">
                  {category.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">
                  {category.description}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600">
                  View guides <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Guides from each category */}
      {educationCategories.map((eduCat) => {
        const category = getCategoryBySlug(eduCat.slug);
        const catGuides = getGuidesByCategory(eduCat.slug);
        if (!category || catGuides.length === 0) return null;
        return (
          <section key={eduCat.slug} className="mb-12">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-xl font-semibold text-slate-900">{category.name}</h2>
              <Link
                href={`/category/${category.slug}`}
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

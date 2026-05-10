import type { Metadata } from 'next';
import Link from 'next/link';
import { updates } from '@/data/updates';
import { ArrowRight } from 'lucide-react';
import Breadcrumbs from '@/components/layout/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Latest Updates',
  description: 'Stay informed with the latest educational content about CRB, credit reports, and financial reputation in Kenya.',
};

export default function UpdatesPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-16 lg:px-8">
      <Breadcrumbs items={[{ label: 'Latest Updates' }]} />

      <div className="mb-12 text-center">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Latest Updates
        </h1>
        <p className="mx-auto mt-3 max-w-2xl text-lg text-slate-500">
          Stay informed with our latest educational content about CRB, credit, and financial reputation in Kenya.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {updates.map((post) => (
          <Link
            key={post.slug}
            href={`/updates/${post.slug}`}
            className="group rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:border-blue-200 hover:shadow-md"
          >
            <time className="text-xs font-medium text-slate-400">
              {new Date(post.date).toLocaleDateString('en-KE', { year: 'numeric', month: 'long', day: 'numeric' })}
            </time>
            <h3 className="mt-2 text-lg font-semibold text-slate-900 transition-colors group-hover:text-blue-600">
              {post.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-500">
              {post.excerpt}
            </p>
            <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600">
              Read more <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}

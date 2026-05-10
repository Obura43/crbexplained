'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Search, ArrowRight, BookOpen, Calculator, FileText } from 'lucide-react';
import { guides } from '@/data/guides';
import { categories } from '@/data/categories';
import { tools } from '@/data/tools';
import { updates } from '@/data/updates';
import Breadcrumbs from '@/components/layout/Breadcrumbs';

interface SearchResult {
  type: 'guide' | 'category' | 'tool' | 'update';
  title: string;
  description: string;
  href: string;
}

export default function SearchPage() {
  const [query, setQuery] = useState('');
  const router = useRouter();

  const results = useMemo<SearchResult[]>(() => {
    if (!query.trim() || query.length < 2) return [];

    const q = query.toLowerCase();
    const found: SearchResult[] = [];

    guides.forEach((g) => {
      if (
        g.title.toLowerCase().includes(q) ||
        g.intro.toLowerCase().includes(q) ||
        g.metaDescription.toLowerCase().includes(q) ||
        g.category.toLowerCase().includes(q)
      ) {
        found.push({
          type: 'guide',
          title: g.title,
          description: g.intro.slice(0, 150),
          href: `/guides/${g.slug}`,
        });
      }
    });

    categories.forEach((c) => {
      if (
        c.name.toLowerCase().includes(q) ||
        c.description.toLowerCase().includes(q)
      ) {
        found.push({
          type: 'category',
          title: c.name,
          description: c.description,
          href: `/category/${c.slug}`,
        });
      }
    });

    tools.forEach((t) => {
      if (
        t.name.toLowerCase().includes(q) ||
        t.description.toLowerCase().includes(q)
      ) {
        found.push({
          type: 'tool',
          title: t.name,
          description: t.description,
          href: `/tools/${t.slug}`,
        });
      }
    });

    updates.forEach((u) => {
      if (
        u.title.toLowerCase().includes(q) ||
        u.excerpt.toLowerCase().includes(q)
      ) {
        found.push({
          type: 'update',
          title: u.title,
          description: u.excerpt,
          href: `/updates/${u.slug}`,
        });
      }
    });

    return found;
  }, [query]);

  const typeIcon = {
    guide: BookOpen,
    category: FileText,
    tool: Calculator,
    update: FileText,
  };

  const typeLabel = {
    guide: 'Guide',
    category: 'Category',
    tool: 'Tool',
    update: 'Update',
  };

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-16 lg:px-8">
      <Breadcrumbs items={[{ label: 'Search' }]} />

      <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
        Search
      </h1>
      <p className="mt-2 text-slate-500">
        Search guides, tools, categories, and updates.
      </p>

      <div className="mt-8">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search CRB, loan listing, clearance certificate, credit score..."
            className="w-full rounded-xl border border-slate-300 bg-white py-3.5 pl-12 pr-4 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
            autoFocus
          />
        </div>
      </div>

      {query.length >= 2 && (
        <div className="mt-6">
          <p className="mb-4 text-sm text-slate-500">
            {results.length} result{results.length !== 1 ? 's' : ''} found
          </p>
          {results.length === 0 ? (
            <div className="rounded-xl border border-slate-200 bg-white p-8 text-center">
              <p className="text-slate-500">No results found for &ldquo;{query}&rdquo;</p>
              <p className="mt-2 text-sm text-slate-400">
                Try different keywords or browse our guides.
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              {results.map((result, i) => {
                const Icon = typeIcon[result.type];
                return (
                  <Link
                    key={i}
                    href={result.href}
                    className="group flex items-start gap-4 rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:border-blue-200 hover:shadow-md"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="mb-1 inline-flex rounded-full bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-600">
                        {typeLabel[result.type]}
                      </div>
                      <h3 className="font-semibold text-slate-900 transition-colors group-hover:text-blue-600">
                        {result.title}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-slate-500 line-clamp-2">
                        {result.description}
                      </p>
                    </div>
                    <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-slate-300 transition-colors group-hover:text-blue-600" />
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

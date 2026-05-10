import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { guides, getGuideBySlug } from '@/data/guides';
import { getCategoryBySlug } from '@/data/categories';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import Disclaimer from '@/components/layout/Disclaimer';
import { ArrowRight, CheckCircle, AlertTriangle, Lightbulb, HelpCircle, Calendar } from 'lucide-react';
import ShareButton from '@/components/layout/ShareButton';

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return guides.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const guide = getGuideBySlug(params.slug);
  if (!guide) return {};
  return {
    title: guide.metaTitle,
    description: guide.metaDescription,
    openGraph: {
      title: guide.metaTitle,
      description: guide.metaDescription,
      type: 'article',
    },
  };
}

export default function GuidePage({ params }: Props) {
  const guide = getGuideBySlug(params.slug);
  if (!guide) notFound();

  const category = getCategoryBySlug(guide.categorySlug);

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: guide.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: guide.title,
    description: guide.metaDescription,
    dateModified: '2026-05-01',
    author: {
      '@type': 'Organization',
      name: 'CRB Explained Kenya',
    },
    publisher: {
      '@type': 'Organization',
      name: 'CRB Explained Kenya',
      url: 'https://crbexplained.co.ke',
    },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://crbexplained.co.ke' },
      { '@type': 'ListItem', position: 2, name: guide.category, item: `https://crbexplained.co.ke/category/${guide.categorySlug}` },
      { '@type': 'ListItem', position: 3, name: guide.title, item: `https://crbexplained.co.ke/guides/${guide.slug}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <article className="mx-auto max-w-4xl px-4 py-10 sm:px-6 sm:py-16 lg:px-8">
        <Breadcrumbs
          items={[
            { label: guide.category, href: `/category/${guide.categorySlug}` },
            { label: guide.title },
          ]}
        />

        <div className="mb-2 inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
          {guide.category}
        </div>

        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          {guide.title}
        </h1>

        <div className="mt-4 flex items-center gap-4 text-sm text-slate-400">
          <span className="flex items-center gap-1.5">
            <Calendar className="h-4 w-4" />
            Last updated: {guide.lastUpdated}
          </span>
          <ShareButton title={guide.title} />
        </div>

        {/* Intro */}
        <div className="mt-8 text-lg leading-relaxed text-slate-600">
          {guide.intro}
        </div>

        {/* Quick Summary */}
        <div className="mt-8 rounded-xl border border-blue-200 bg-blue-50 p-6">
          <h2 className="flex items-center gap-2 text-lg font-semibold text-blue-900">
            <CheckCircle className="h-5 w-5" />
            Quick Summary
          </h2>
          <ul className="mt-4 space-y-2">
            {guide.quickSummary.map((point, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-blue-800">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" />
                {point}
              </li>
            ))}
          </ul>
        </div>

        {/* Key Points */}
        <section className="mt-10">
          <h2 className="flex items-center gap-2 text-xl font-semibold text-slate-900">
            <Lightbulb className="h-5 w-5 text-amber-500" />
            Key Points
          </h2>
          <ul className="mt-4 space-y-3">
            {guide.keyPoints.map((point, i) => (
              <li key={i} className="flex items-start gap-3 text-slate-600">
                <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-green-500" />
                <span className="leading-relaxed">{point}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Practical Tips */}
        {guide.practicalTips && guide.practicalTips.length > 0 && (
          <section className="mt-10">
            <h2 className="flex items-center gap-2 text-xl font-semibold text-slate-900">
              <Lightbulb className="h-5 w-5 text-emerald-500" />
              Practical Tips
            </h2>
            <ul className="mt-4 space-y-3">
              {guide.practicalTips.map((tip, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-600">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-xs font-bold text-emerald-600">
                    {i + 1}
                  </span>
                  <span className="leading-relaxed">{tip}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Common Myths */}
        {guide.commonMyths && guide.commonMyths.length > 0 && (
          <section className="mt-10">
            <h2 className="flex items-center gap-2 text-xl font-semibold text-slate-900">
              <AlertTriangle className="h-5 w-5 text-amber-500" />
              Common Myths
            </h2>
            <div className="mt-4 space-y-4">
              {guide.commonMyths.map((item, i) => (
                <div key={i} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
                  <div className="flex items-start gap-2">
                    <span className="mt-0.5 rounded bg-red-100 px-1.5 py-0.5 text-xs font-semibold text-red-600">
                      Myth
                    </span>
                    <p className="text-sm font-medium text-slate-700">{item.myth}</p>
                  </div>
                  <div className="mt-3 flex items-start gap-2">
                    <span className="mt-0.5 rounded bg-green-100 px-1.5 py-0.5 text-xs font-semibold text-green-600">
                      Reality
                    </span>
                    <p className="text-sm text-slate-600">{item.reality}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Common Mistakes */}
        {guide.commonMistakes && guide.commonMistakes.length > 0 && (
          <section className="mt-10">
            <h2 className="flex items-center gap-2 text-xl font-semibold text-slate-900">
              <AlertTriangle className="h-5 w-5 text-red-500" />
              Common Mistakes
            </h2>
            <ul className="mt-4 space-y-3">
              {guide.commonMistakes.map((mistake, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-600">
                  <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-red-400" />
                  <span className="leading-relaxed">{mistake}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* FAQs */}
        <section className="mt-10">
          <h2 className="flex items-center gap-2 text-xl font-semibold text-slate-900">
            <HelpCircle className="h-5 w-5 text-blue-500" />
            Frequently Asked Questions
          </h2>
          <div className="mt-4 space-y-4">
            {guide.faqs.map((faq, i) => (
              <details
                key={i}
                className="group rounded-lg border border-slate-200 bg-white shadow-sm"
              >
                <summary className="flex cursor-pointer items-center justify-between p-4 text-left font-medium text-slate-900 transition-colors hover:text-blue-600">
                  {faq.question}
                  <span className="ml-4 shrink-0 text-slate-400 transition-transform group-open:rotate-45">+</span>
                </summary>
                <div className="border-t border-slate-100 px-4 pb-4 pt-3">
                  <p className="text-sm leading-relaxed text-slate-600">{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* Related Guides */}
        <section className="mt-10">
          <h2 className="text-xl font-semibold text-slate-900">Related Guides</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {guide.relatedGuides.map((related) => (
              <Link
                key={related.slug}
                href={`/guides/${related.slug}`}
                className="group flex items-center gap-3 rounded-lg border border-slate-200 bg-white p-4 shadow-sm transition-all hover:border-blue-200 hover:shadow-md"
              >
                <ArrowRight className="h-4 w-4 shrink-0 text-blue-400 transition-transform group-hover:translate-x-0.5" />
                <span className="text-sm font-medium text-slate-700 transition-colors group-hover:text-blue-600">
                  {related.title}
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* Disclaimer */}
        <div className="mt-10">
          <Disclaimer />
        </div>
      </article>
    </>
  );
}

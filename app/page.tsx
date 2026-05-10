import Link from 'next/link';
import { guides } from '@/data/guides';
import { categories } from '@/data/categories';
import { commonFAQs } from '@/data/faqs';
import { financialTips } from '@/data/tips';
import { updates } from '@/data/updates';
import { tools } from '@/data/tools';
import NewsletterForm from '@/components/layout/NewsletterForm';
import {
  BookOpen, Clock, TrendingUp, FileCheck, Smartphone, GraduationCap,
  Calculator, CalendarClock, PiggyBank, ClipboardCheck,
  ArrowRight, Search, CheckCircle, Shield, RefreshCw, Eye,
  Wallet, AlertTriangle, FileText, MessageCircle
} from 'lucide-react';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  BookOpen, Clock, TrendingUp, FileCheck, Smartphone, GraduationCap,
  Calculator, CalendarClock, PiggyBank, ClipboardCheck,
  Wallet, AlertTriangle, FileText, MessageCircle,
};

const whyCards = [
  {
    icon: CheckCircle,
    title: 'Simple Explanations',
    description: 'We explain CRB and credit concepts using simple language instead of technical financial jargon.',
  },
  {
    icon: BookOpen,
    title: 'Practical Guides',
    description: 'Each guide focuses on real-life questions Kenyans commonly ask about loans and CRB.',
  },
  {
    icon: Eye,
    title: 'Financial Awareness',
    description: 'Understanding credit helps people make more informed financial decisions.',
  },
  {
    icon: RefreshCw,
    title: 'Updated Information',
    description: 'We regularly review and update guides to improve accuracy and usefulness.',
  },
];

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'CRB Explained Kenya',
    url: 'https://crbexplained.co.ke',
    description: 'The simple guide to CRB and credit in Kenya.',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://crbexplained.co.ke/search?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-50 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-16 sm:px-6 sm:pb-28 sm:pt-24 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-sm font-medium text-blue-700">
              <Shield className="h-4 w-4" />
              Independent Educational Platform
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Understand CRB and Credit in Kenya —{' '}
              <span className="text-blue-600">Simply</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
              CRB Explained Kenya helps you understand credit reports, loan listings, credit scores, debt management, and financial reputation in plain language.
            </p>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <Link
                href="/guides"
                className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm shadow-blue-600/20 transition-colors hover:bg-blue-700"
              >
                Browse Guides
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/tools"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 shadow-sm transition-colors hover:border-slate-400 hover:bg-slate-50"
              >
                Check Loan Tools
              </Link>
            </div>
          </div>

          {/* Search */}
          <div className="mx-auto mt-12 max-w-xl">
            <Link
              href="/search"
              className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-sm transition-shadow hover:shadow-md"
            >
              <Search className="h-5 w-5 text-slate-400" />
              <span className="text-sm text-slate-400">
                Search CRB, loan listing, clearance certificate, credit score...
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Popular Guides */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Popular Guides
          </h2>
          <p className="mt-3 text-lg text-slate-500">
            Start with the most-read guides about CRB and credit in Kenya.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {guides.map((guide) => (
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

      {/* Credit Education Categories */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Credit Education
            </h2>
            <p className="mt-3 text-lg text-slate-500">
              Explore guides organized by topic to find exactly what you need.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((cat) => {
              const Icon = iconMap[cat.icon] || BookOpen;
              return (
                <Link
                  key={cat.slug}
                  href={`/category/${cat.slug}`}
                  className="group flex items-start gap-4 rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:border-blue-200 hover:shadow-md"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 transition-colors group-hover:text-blue-600">
                      {cat.name}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-slate-500">
                      {cat.description}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Loan & CRB Tools */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Loan & CRB Tools
          </h2>
          <p className="mt-3 text-lg text-slate-500">
            Educational tools to help you understand your finances better.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {tools.map((tool) => {
            const Icon = iconMap[tool.icon] || Calculator;
            return (
              <Link
                key={tool.slug}
                href={`/tools/${tool.slug}`}
                className="group rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:border-green-200 hover:shadow-md"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-green-50 text-green-600 transition-colors group-hover:bg-green-600 group-hover:text-white">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="font-semibold text-slate-900 transition-colors group-hover:text-green-600">
                  {tool.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">
                  {tool.description}
                </p>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Common CRB Questions */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Common CRB Questions
            </h2>
            <p className="mt-3 text-lg text-slate-500">
              Quick answers to questions Kenyans frequently ask about CRB.
            </p>
          </div>
          <div className="mx-auto mt-12 max-w-3xl space-y-4">
            {commonFAQs.map((faq, i) => (
              <details
                key={i}
                className="group rounded-xl border border-slate-200 bg-white shadow-sm"
              >
                <summary className="flex cursor-pointer items-center justify-between p-5 text-left font-medium text-slate-900 transition-colors hover:text-blue-600">
                  {faq.question}
                  <span className="ml-4 shrink-0 text-slate-400 transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <div className="border-t border-slate-100 px-5 pb-5 pt-3">
                  <p className="text-sm leading-relaxed text-slate-600">{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Financial Tips */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Financial Tips
          </h2>
          <p className="mt-3 text-lg text-slate-500">
            Simple habits that may help you build a healthier financial profile.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {financialTips.map((tip, i) => {
            const Icon = iconMap[tip.icon] || CheckCircle;
            return (
              <div
                key={i}
                className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-semibold text-slate-900">{tip.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">
                  {tip.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Why This Site Exists */}
      <section className="bg-blue-600">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Financial information should be easier to understand
            </h2>
            <p className="mt-3 text-lg text-blue-100">
              We believe every Kenyan deserves clear, simple explanations about credit and financial reputation.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyCards.map((card, i) => {
              const Icon = card.icon;
              return (
                <div
                  key={i}
                  className="rounded-xl bg-white/10 p-6 backdrop-blur-sm"
                >
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-white/20 text-white">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-semibold text-white">{card.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-blue-100">
                    {card.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Latest Updates */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Latest Updates
          </h2>
          <p className="mt-3 text-lg text-slate-500">
            Stay informed with our latest educational content.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
      </section>

      {/* Newsletter */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Stay Informed
            </h2>
            <p className="mt-3 text-lg text-slate-500">
              Get educational updates about CRB, credit, and financial literacy delivered to your inbox.
            </p>
            <NewsletterForm />
            <p className="mt-3 text-xs text-slate-400">
              We respect your privacy. Unsubscribe anytime. No spam.
            </p>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="rounded-xl border border-amber-200 bg-amber-50 p-5">
          <div className="flex gap-3">
            <Shield className="mt-0.5 h-5 w-5 shrink-0 text-amber-600" />
            <p className="text-sm leading-relaxed text-amber-700">
              <span className="font-semibold text-amber-800">Disclaimer:</span>{' '}
              CRB Explained Kenya is an independent informational platform. We are not affiliated with any Credit Reference Bureau, bank, SACCO, mobile lender, financial institution, CBK, or government agency. Information provided is educational only and should not be considered financial, legal, or credit advice.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

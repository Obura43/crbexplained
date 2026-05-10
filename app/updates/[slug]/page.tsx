import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { updates, getUpdateBySlug } from '@/data/updates';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import Disclaimer from '@/components/layout/Disclaimer';
import { Calendar, Tag } from 'lucide-react';

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return updates.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getUpdateBySlug(params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
    },
  };
}

export default function UpdatePage({ params }: Props) {
  const post = getUpdateBySlug(params.slug);
  if (!post) notFound();

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
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
      { '@type': 'ListItem', position: 2, name: 'Updates', item: 'https://crbexplained.co.ke/updates' },
      { '@type': 'ListItem', position: 3, name: post.title, item: `https://crbexplained.co.ke/updates/${post.slug}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <article className="mx-auto max-w-4xl px-4 py-10 sm:px-6 sm:py-16 lg:px-8">
        <Breadcrumbs
          items={[
            { label: 'Updates', href: '/updates' },
            { label: post.title },
          ]}
        />

        <div className="mb-4 inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
          <Tag className="mr-1 h-3 w-3" />
          {post.category}
        </div>

        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          {post.title}
        </h1>

        <div className="mt-4 flex items-center gap-1.5 text-sm text-slate-400">
          <Calendar className="h-4 w-4" />
          <time>
            {new Date(post.date).toLocaleDateString('en-KE', { year: 'numeric', month: 'long', day: 'numeric' })}
          </time>
        </div>

        <div className="mt-8 text-lg leading-relaxed text-slate-600 whitespace-pre-line">
          {post.content}
        </div>

        <div className="mt-10">
          <Disclaimer />
        </div>
      </article>
    </>
  );
}

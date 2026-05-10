import type { Metadata } from 'next';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import Disclaimer from '@/components/layout/Disclaimer';
import { Heart, BookOpen, Shield, Users } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About CRB Explained Kenya',
  description: 'Learn about CRB Explained Kenya — an independent educational platform helping Kenyans understand credit reports, CRB listings, and financial reputation.',
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 sm:py-16 lg:px-8">
      <Breadcrumbs items={[{ label: 'About' }]} />

      <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
        About CRB Explained Kenya
      </h1>

      <div className="mt-8 space-y-6 text-lg leading-relaxed text-slate-600">
        <p>
          CRB Explained Kenya was created to help ordinary Kenyans better understand CRB, credit reports, debt management, and financial reputation. Many people fear or misunderstand CRB because financial information is often explained using complicated language. Our goal is to simplify these concepts through practical educational guides and plain-language explanations.
        </p>
        <p>
          We are not a lender, debt collector, or financial institution. We do not provide loans or financial advice.
        </p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
            <BookOpen className="h-5 w-5" />
          </div>
          <h3 className="font-semibold text-slate-900">Plain Language Guides</h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-500">
            We break down complex financial concepts into simple, easy-to-understand explanations that anyone can follow.
          </p>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
            <Heart className="h-5 w-5" />
          </div>
          <h3 className="font-semibold text-slate-900">Independently Run</h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-500">
            We are not affiliated with any Credit Reference Bureau, bank, SACCO, or government agency. Our content is purely educational.
          </p>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
            <Shield className="h-5 w-5" />
          </div>
          <h3 className="font-semibold text-slate-900">No Financial Advice</h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-500">
            We do not provide loans, financial advice, or debt collection services. All information is for educational purposes only.
          </p>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
            <Users className="h-5 w-5" />
          </div>
          <h3 className="font-semibold text-slate-900">Built for Kenyans</h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-500">
            Our content is tailored to the Kenyan financial landscape, addressing the questions and concerns that matter most to Kenyans.
          </p>
        </div>
      </div>

      <div className="mt-10">
        <Disclaimer />
      </div>
    </div>
  );
}

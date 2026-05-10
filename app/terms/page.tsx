import type { Metadata } from 'next';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import { GraduationCap, Ban, AlertCircle, Scale, Building2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Terms of Use',
  description: 'Read the terms of use for CRB Explained Kenya. Understand the scope and limitations of our educational content.',
};

const sections = [
  {
    icon: GraduationCap,
    title: 'Educational Content Only',
    content: 'All content on CRB Explained Kenya is provided for informational and educational purposes only. Our guides, articles, tools, and updates are designed to help you better understand CRB, credit reports, loan listings, and financial reputation in Kenya. Nothing on this website should be interpreted as financial, legal, or credit advice.',
  },
  {
    icon: Ban,
    title: 'Not Financial Advice',
    content: 'The information on this website does not constitute financial advice, credit counselling, or recommendations to take any specific financial action. You should always consult a qualified financial advisor or the relevant financial institution before making decisions about loans, credit, or debt management. CRB Explained Kenya is not responsible for any financial decisions you make based on information found on this site.',
  },
  {
    icon: AlertCircle,
    title: 'No Guarantee of Loan Approval',
    content: 'Nothing on this website guarantees or implies that you will be approved for a loan, credit facility, or any financial product. Loan approvals depend on individual circumstances and are determined solely by the lending institution. Our content helps you understand the process, but it does not influence lending decisions.',
  },
  {
    icon: Scale,
    title: 'Users Responsible for Financial Decisions',
    content: 'You are solely responsible for your own financial decisions. While we strive to provide accurate and helpful information, we cannot guarantee that all information is complete, current, or error-free. You should independently verify any information that may affect your financial decisions and consult appropriate professionals when needed.',
  },
  {
    icon: Building2,
    title: 'Official Institutions Remain Authoritative',
    content: 'For definitive information about CRB listings, credit reports, or credit status, you should contact the relevant Credit Reference Bureau, bank, SACCO, or the Central Bank of Kenya directly. CRB Explained Kenya is an independent educational platform and is not affiliated with any official institution. Official institutions are the authoritative source for all credit-related data and decisions.',
  },
];

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 sm:py-16 lg:px-8">
      <Breadcrumbs items={[{ label: 'Terms of Use' }]} />

      <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
        Terms of Use
      </h1>
      <p className="mt-3 text-lg text-slate-500">
        By using CRB Explained Kenya, you agree to the following terms. Please read them carefully.
      </p>

      <div className="mt-10 space-y-8">
        {sections.map((section, i) => {
          const Icon = section.icon;
          return (
            <div key={i} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="flex items-center gap-2 text-lg font-semibold text-slate-900">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                  <Icon className="h-4 w-4" />
                </div>
                {section.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                {section.content}
              </p>
            </div>
          );
        })}
      </div>

      <div className="mt-10 rounded-xl border border-slate-200 bg-slate-50 p-6">
        <h2 className="text-lg font-semibold text-slate-900">Acceptance of Terms</h2>
        <p className="mt-3 text-sm leading-relaxed text-slate-600">
          By accessing and using this website, you acknowledge that you have read, understood, and agree to be bound by these terms of use. If you do not agree with any part of these terms, you should not use this website.
        </p>
      </div>

      <p className="mt-8 text-sm text-slate-400">
        Last updated: May 2026
      </p>
    </div>
  );
}

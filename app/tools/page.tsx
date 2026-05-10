import type { Metadata } from 'next';
import Link from 'next/link';
import { tools } from '@/data/tools';
import { Calculator, CalendarClock, PiggyBank, ClipboardCheck } from 'lucide-react';
import Breadcrumbs from '@/components/layout/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Loan & CRB Tools',
  description:
    'Free educational calculators and checklists to help you understand loan affordability, plan debt repayment, build emergency savings, and assess your financial health.',
};

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Calculator,
  CalendarClock,
  PiggyBank,
  ClipboardCheck,
};

export default function ToolsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-16 lg:px-8">
      <Breadcrumbs items={[{ label: 'Loan & CRB Tools' }]} />

      <div className="mb-12 text-center">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Loan &amp; CRB Tools
        </h1>
        <p className="mt-3 text-lg text-slate-500">
          Free educational calculators and checklists to help you make informed financial decisions.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {tools.map((tool) => {
          const Icon = iconMap[tool.icon];
          return (
            <Link
              key={tool.slug}
              href={`/tools/${tool.slug}`}
              className="group rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:border-green-200 hover:shadow-md"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-green-50 text-green-600 transition-colors group-hover:bg-green-100">
                {Icon && <Icon className="h-6 w-6" />}
              </div>
              <h2 className="text-lg font-semibold text-slate-900 transition-colors group-hover:text-green-700">
                {tool.name}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-500">
                {tool.description}
              </p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-green-600">
                Open tool
                <span className="transition-transform group-hover:translate-x-0.5">&rarr;</span>
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

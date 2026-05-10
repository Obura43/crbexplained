import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { tools } from '@/data/tools';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import LoanAffordabilityEstimator from './LoanAffordabilityEstimator';
import DebtRepaymentPlanner from './DebtRepaymentPlanner';
import EmergencyFundCalculator from './EmergencyFundCalculator';
import FinancialHealthChecklist from './FinancialHealthChecklist';

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return tools.map((tool) => ({ slug: tool.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const tool = tools.find((t) => t.slug === params.slug);
  if (!tool) return {};
  return {
    title: tool.name,
    description: tool.description,
  };
}

const toolComponents: Record<string, React.ComponentType> = {
  'loan-affordability-estimator': LoanAffordabilityEstimator,
  'debt-repayment-planner': DebtRepaymentPlanner,
  'emergency-fund-calculator': EmergencyFundCalculator,
  'financial-health-checklist': FinancialHealthChecklist,
};

export default function ToolPage({ params }: Props) {
  const tool = tools.find((t) => t.slug === params.slug);
  if (!tool) notFound();

  const ToolComponent = toolComponents[params.slug];

  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 sm:py-16 lg:px-8">
      <Breadcrumbs
        items={[
          { label: 'Loan & CRB Tools', href: '/tools' },
          { label: tool.name },
        ]}
      />

      <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
        {tool.name}
      </h1>
      <p className="mt-3 text-lg text-slate-500">{tool.description}</p>

      <div className="mt-8">
        {ToolComponent ? <ToolComponent /> : null}
      </div>
    </div>
  );
}

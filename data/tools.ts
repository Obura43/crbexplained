export interface Tool {
  slug: string;
  name: string;
  description: string;
  icon: string;
}

export const tools: Tool[] = [
  {
    slug: "loan-affordability-estimator",
    name: "Loan Affordability Estimator",
    description: "Estimate how much you may comfortably afford to borrow based on your income and existing debts.",
    icon: "Calculator"
  },
  {
    slug: "debt-repayment-planner",
    name: "Debt Repayment Planner",
    description: "Plan your debt repayment timeline and get an approximate estimate of total repayment.",
    icon: "CalendarClock"
  },
  {
    slug: "emergency-fund-calculator",
    name: "Emergency Fund Calculator",
    description: "Calculate how much you may need in emergency savings based on your monthly expenses.",
    icon: "PiggyBank"
  },
  {
    slug: "financial-health-checklist",
    name: "Financial Health Checklist",
    description: "Answer a few questions to get a simple financial wellness score with educational tips.",
    icon: "ClipboardCheck"
  }
];

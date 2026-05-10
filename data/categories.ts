export interface Category {
  slug: string;
  name: string;
  description: string;
  icon: string;
}

export const categories: Category[] = [
  {
    slug: "crb-basics",
    name: "CRB Basics",
    description: "Simple explanations about CRB, credit reports, listing, and credit information.",
    icon: "BookOpen"
  },
  {
    slug: "loan-repayment",
    name: "Loan Repayment",
    description: "Educational guides about repayment habits, overdue loans, and borrowing behavior.",
    icon: "Clock"
  },
  {
    slug: "credit-scores",
    name: "Credit Scores",
    description: "Understand how credit scores work and what may influence financial reputation.",
    icon: "TrendingUp"
  },
  {
    slug: "clearance-disputes",
    name: "Clearance & Disputes",
    description: "Guides about CRB clearance certificates, disputes, and correcting information.",
    icon: "FileCheck"
  },
  {
    slug: "mobile-loans",
    name: "Mobile Loans",
    description: "Understand how digital loans and BNPL services may affect credit information.",
    icon: "Smartphone"
  },
  {
    slug: "financial-education",
    name: "Financial Education",
    description: "General financial literacy guides for ordinary Kenyan borrowers.",
    icon: "GraduationCap"
  }
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find(c => c.slug === slug);
}

export interface UpdatePost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category: string;
}

export const updates: UpdatePost[] = [
  {
    slug: "why-small-loans-still-matter",
    title: "Why Small Loans Still Matter",
    excerpt: "Even small unpaid digital loans may affect financial reputation over time.",
    content: "Many borrowers assume that small digital loans are insignificant when it comes to credit information. However, licensed lenders may share repayment information for loans of all sizes.\n\nEven a small unpaid loan of a few hundred shillings may appear on your credit report if the lender participates in credit information sharing. Over time, multiple small unpaid loans can paint a picture of inconsistent repayment behavior.\n\nThe key takeaway is simple: treat every loan obligation seriously, regardless of size. Responsible repayment of all loans — large and small — helps maintain a healthier financial profile.\n\nAlways read loan terms, understand repayment schedules, and communicate with lenders early if you face difficulties.",
    date: "2026-05-01",
    category: "Financial Education"
  },
  {
    slug: "how-to-avoid-loan-app-debt-cycles",
    title: "How to Avoid Loan App Debt Cycles",
    excerpt: "Responsible borrowing habits may help avoid repeated debt stress.",
    content: "Loan apps make borrowing quick and convenient, but this ease of access can sometimes lead to repeated borrowing cycles. Borrowers may find themselves taking new loans to repay existing ones, creating a pattern that becomes difficult to break.\n\nHere are some practical steps that may help avoid debt cycles:\n\n1. Budget carefully before borrowing — understand exactly what you need and whether you can repay comfortably.\n2. Avoid borrowing from multiple apps simultaneously — this increases total repayment burden.\n3. Create a repayment plan before accepting any loan.\n4. Build an emergency savings buffer to reduce reliance on loans for unexpected expenses.\n5. If you are already in a cycle, consider speaking with a financial counselor or contacting lenders to discuss repayment options.\n\nRemember, borrowing should support your financial goals — not create ongoing stress.",
    date: "2026-04-25",
    category: "Loan Repayment"
  },
  {
    slug: "understanding-financial-reputation-in-kenya",
    title: "Understanding Financial Reputation in Kenya",
    excerpt: "Credit information is becoming increasingly important in modern financial systems.",
    content: "Financial reputation refers to the way lenders and financial institutions perceive your borrowing and repayment behavior. In Kenya, credit information sharing has become an important part of how the financial system works.\n\nWhen you borrow from a bank, SACCO, microfinance institution, or licensed digital lender, your repayment behavior may be recorded and shared with credit reference bureaus. This information helps other lenders assess risk when you apply for future loans.\n\nA strong financial reputation — built through consistent, on-time repayments — may open doors to better loan terms, higher limits, and more financial opportunities. Conversely, a pattern of missed or late payments may limit access to credit.\n\nUnderstanding how financial reputation works empowers you to make informed borrowing decisions and take control of your financial future.",
    date: "2026-04-15",
    category: "Financial Education"
  }
];

export function getUpdateBySlug(slug: string): UpdatePost | undefined {
  return updates.find(u => u.slug === slug);
}

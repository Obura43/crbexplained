export interface FinancialTip {
  title: string;
  description: string;
  icon: string;
}

export const financialTips: FinancialTip[] = [
  {
    title: "Pay Loans On Time",
    description: "Consistent repayment is one of the most important factors in building a healthy financial profile.",
    icon: "Clock"
  },
  {
    title: "Budget Before Borrowing",
    description: "Understand your income and expenses before taking on any new loan obligations.",
    icon: "Wallet"
  },
  {
    title: "Avoid Multiple Loans",
    description: "Borrowing from several sources at once can make repayment difficult and may affect your credit profile.",
    icon: "AlertTriangle"
  },
  {
    title: "Build Emergency Savings",
    description: "Having a financial buffer reduces the need to borrow for unexpected expenses.",
    icon: "PiggyBank"
  },
  {
    title: "Read Loan Terms",
    description: "Always understand interest rates, penalties, and repayment schedules before accepting a loan.",
    icon: "FileText"
  },
  {
    title: "Communicate With Lenders",
    description: "If you are struggling to repay, contact your lender early to discuss possible options.",
    icon: "MessageCircle"
  }
];

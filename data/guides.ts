export interface Guide {
  slug: string;
  title: string;
  category: string;
  categorySlug: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  quickSummary: string[];
  keyPoints: string[];
  practicalTips?: string[];
  commonMyths?: { myth: string; reality: string }[];
  commonMistakes?: string[];
  faqs: { question: string; answer: string }[];
  relatedGuides: { title: string; slug: string }[];
  lastUpdated: string;
}

export const guides: Guide[] = [
  {
    slug: "what-is-crb-in-kenya",
    title: "What Is CRB in Kenya?",
    category: "CRB Basics",
    categorySlug: "crb-basics",
    metaTitle: "What Is CRB in Kenya? | CRB Explained Kenya",
    metaDescription: "Learn what CRB means in Kenya, how credit reference bureaus work, and why credit information matters.",
    intro: "CRB stands for Credit Reference Bureau. Credit reference bureaus collect and maintain credit information shared by lenders such as banks, SACCOs, microfinance institutions, and licensed digital lenders. This information may include repayment history, outstanding loans, defaults, and borrowing behavior.",
    quickSummary: [
      "CRB means Credit Reference Bureau.",
      "CRBs collect credit information from lenders.",
      "Repayment behavior may affect your credit profile.",
      "Credit reports help lenders assess borrowing risk.",
      "CRB is not the same as blacklisting."
    ],
    keyPoints: [
      "CRBs are licensed institutions.",
      "Lenders may share both positive and negative repayment information.",
      "Paying loans consistently is important.",
      "Borrowers can request credit reports.",
      "Incorrect information can sometimes be disputed."
    ],
    commonMyths: [
      { myth: "CRB means you can never get a loan again.", reality: "Some lenders still evaluate borrowers individually depending on circumstances and repayment history." },
      { myth: "Only banks use CRB.", reality: "Digital lenders, SACCOs, and other lenders may also use credit information." },
      { myth: "CRB is a government punishment system.", reality: "CRBs are part of the financial credit information ecosystem." }
    ],
    faqs: [
      { question: "What does CRB stand for?", answer: "CRB stands for Credit Reference Bureau." },
      { question: "Can paying loans improve my profile?", answer: "Consistent repayment behavior may support a healthier credit profile." },
      { question: "Can wrong information be corrected?", answer: "Disputes may be raised through official channels." },
      { question: "Is CRB the same as blacklisting?", answer: "Many people use the term blacklisting informally, but CRBs maintain broader credit information records." },
      { question: "Can I request my credit report?", answer: "Licensed CRBs generally provide ways for users to request reports." }
    ],
    relatedGuides: [
      { title: "How to Check Your CRB Status", slug: "how-to-check-your-crb-status-kenya" },
      { title: "What Is a Credit Score?", slug: "what-is-credit-score-kenya" },
      { title: "Can Mobile Loans Affect CRB?", slug: "can-mobile-loans-affect-crb-status" }
    ],
    lastUpdated: "May 2026"
  },
  {
    slug: "how-to-check-your-crb-status-kenya",
    title: "How to Check Your CRB Status in Kenya",
    category: "CRB Basics",
    categorySlug: "crb-basics",
    metaTitle: "How to Check Your CRB Status in Kenya | CRB Explained Kenya",
    metaDescription: "Simple guide explaining how Kenyans can access and understand CRB information and credit reports.",
    intro: "Checking your CRB status helps you understand your borrowing history and whether lenders have submitted information about your loans or repayment behavior.",
    quickSummary: [
      "CRB reports contain credit information.",
      "Borrowers may request reports through licensed CRBs.",
      "Reports may contain active, settled, or overdue credit facilities.",
      "Incorrect details should be disputed officially."
    ],
    keyPoints: [
      "Keep your ID and phone details secure.",
      "Always use licensed CRB channels.",
      "Review all entries carefully.",
      "Save copies of reports where needed.",
      "Verify information before applying for major loans."
    ],
    commonMistakes: [
      "Paying unofficial agents.",
      "Ignoring small unpaid digital loans.",
      "Assuming all loan rejection is caused by CRB.",
      "Not checking reports regularly."
    ],
    faqs: [
      { question: "Can I check CRB online?", answer: "Licensed CRBs may provide digital access options." },
      { question: "Is CRB checking free?", answer: "Access terms depend on the CRB provider and applicable regulations." },
      { question: "What if information is wrong?", answer: "You may raise a dispute through official procedures." },
      { question: "Can old loans still appear?", answer: "Reporting periods depend on applicable policies and lender submissions." },
      { question: "Does checking CRB reduce my score?", answer: "Simply checking your report does not automatically damage your profile." }
    ],
    relatedGuides: [
      { title: "What Is CRB in Kenya?", slug: "what-is-crb-in-kenya" },
      { title: "How to Improve Your Credit Profile", slug: "how-to-improve-credit-profile-kenya" },
      { title: "What Is a CRB Clearance Certificate?", slug: "what-is-crb-clearance-certificate" }
    ],
    lastUpdated: "May 2026"
  },
  {
    slug: "what-is-crb-clearance-certificate",
    title: "What Is a CRB Clearance Certificate?",
    category: "Clearance & Disputes",
    categorySlug: "clearance-disputes",
    metaTitle: "What Is a CRB Clearance Certificate? | CRB Explained Kenya",
    metaDescription: "Understand what a CRB clearance certificate is and why some employers or lenders may request it.",
    intro: "A CRB clearance certificate is generally used to indicate that a borrower does not currently have negative credit listing information according to the issuing bureau's records at the time of issuance.",
    quickSummary: [
      "Clearance certificates relate to credit information.",
      "Some employers or lenders may request them.",
      "Certificates are usually time-sensitive.",
      "Users should verify official requirements before applying."
    ],
    keyPoints: [
      "Different CRBs may issue their own certificates.",
      "Clearance does not guarantee loan approval.",
      "Reports and certificates are not always the same thing.",
      "Keep repayment records safely."
    ],
    faqs: [
      { question: "Is a clearance certificate permanent?", answer: "No, credit information may change over time." },
      { question: "Does clearance guarantee a loan?", answer: "Loan approval depends on many factors beyond CRB." },
      { question: "Can employers request clearance?", answer: "Some employers may request CRB-related documents." },
      { question: "Is clearance the same across all CRBs?", answer: "Requirements and processes may vary." },
      { question: "Should I use unofficial agents?", answer: "No, use licensed and official channels." }
    ],
    relatedGuides: [
      { title: "How to Check Your CRB Status", slug: "how-to-check-your-crb-status-kenya" },
      { title: "What Is CRB in Kenya?", slug: "what-is-crb-in-kenya" },
      { title: "How to Improve Credit Reputation", slug: "how-to-improve-credit-profile-kenya" }
    ],
    lastUpdated: "May 2026"
  },
  {
    slug: "can-mobile-loans-affect-crb-status",
    title: "Can Mobile Loans Affect CRB Status?",
    category: "Mobile Loans",
    categorySlug: "mobile-loans",
    metaTitle: "Can Mobile Loans Affect CRB Status? | CRB Explained Kenya",
    metaDescription: "Understand how digital loans and missed repayments may affect your credit information in Kenya.",
    intro: "Mobile loans are widely used in Kenya because they are fast and convenient. However, missed or overdue repayments may affect the credit information shared by participating lenders.",
    quickSummary: [
      "Some digital lenders share credit information.",
      "Late repayment may affect financial reputation.",
      "Small loans still matter.",
      "Users should borrow responsibly."
    ],
    keyPoints: [
      "Read loan terms carefully.",
      "Avoid borrowing repeatedly without repayment plans.",
      "Understand interest and penalties.",
      "Keep repayment records."
    ],
    commonMyths: [
      { myth: "Small loans do not matter.", reality: "Even small unpaid loans may affect your financial profile." },
      { myth: "Deleting a loan app removes the debt.", reality: "Loan obligations may still exist." }
    ],
    faqs: [
      { question: "Can overdue digital loans affect CRB?", answer: "Participating lenders may share repayment information." },
      { question: "Are all apps licensed?", answer: "Users should verify lenders through official regulatory information." },
      { question: "Should I borrow from multiple apps?", answer: "Borrow carefully and understand repayment obligations." },
      { question: "Can penalties grow quickly?", answer: "Loan terms and penalties vary by lender." },
      { question: "How can I avoid problems?", answer: "Borrow only what you can realistically repay." }
    ],
    relatedGuides: [
      { title: "What Is CRB?", slug: "what-is-crb-in-kenya" },
      { title: "How to Improve Credit Reputation", slug: "how-to-improve-credit-profile-kenya" },
      { title: "Financial Habits That Matter", slug: "how-to-improve-credit-profile-kenya" }
    ],
    lastUpdated: "May 2026"
  },
  {
    slug: "how-to-improve-credit-profile-kenya",
    title: "How to Improve Your Credit Profile in Kenya",
    category: "Credit Scores",
    categorySlug: "credit-scores",
    metaTitle: "How to Improve Your Credit Profile in Kenya | CRB Explained Kenya",
    metaDescription: "Simple financial habits and repayment practices that may help improve your borrowing reputation.",
    intro: "Improving your credit profile usually takes time and consistent financial behavior. Responsible borrowing and repayment habits may help strengthen financial reputation.",
    quickSummary: [
      "Pay loans on time.",
      "Avoid unnecessary borrowing.",
      "Monitor your reports.",
      "Communicate with lenders early if struggling."
    ],
    keyPoints: [
      "Create repayment reminders.",
      "Avoid multiple unpaid loans.",
      "Keep records of repayments.",
      "Review loan agreements carefully.",
      "Build healthy borrowing habits gradually."
    ],
    practicalTips: [
      "Budget before borrowing.",
      "Avoid emotional borrowing.",
      "Use smaller manageable loans responsibly.",
      "Reduce unnecessary debt cycles."
    ],
    faqs: [
      { question: "Can credit reputation improve over time?", answer: "Financial behavior over time may influence future lending decisions." },
      { question: "Should I ignore overdue loans?", answer: "Communication and resolution are generally better than ignoring debts." },
      { question: "Can repayment records help?", answer: "Maintaining proof of payments is important." },
      { question: "Is borrowing always bad?", answer: "Responsible borrowing may support financial growth when managed carefully." },
      { question: "How long does improvement take?", answer: "Financial reputation improvement varies depending on individual circumstances." }
    ],
    relatedGuides: [
      { title: "What Is CRB?", slug: "what-is-crb-in-kenya" },
      { title: "Mobile Loans and CRB", slug: "can-mobile-loans-affect-crb-status" },
      { title: "Understanding Credit Reports", slug: "how-to-check-your-crb-status-kenya" }
    ],
    lastUpdated: "May 2026"
  },
  {
    slug: "what-is-credit-score-kenya",
    title: "What Is a Credit Score?",
    category: "Credit Scores",
    categorySlug: "credit-scores",
    metaTitle: "What Is a Credit Score in Kenya? | CRB Explained Kenya",
    metaDescription: "Learn what credit scores are and how lenders may use financial information when assessing borrowing risk.",
    intro: "A credit score is generally a numerical representation linked to credit information and repayment behavior. Different lenders and CRBs may use different scoring models or internal risk assessment systems.",
    quickSummary: [
      "Credit scores relate to repayment behavior.",
      "Scores are not the only factor lenders consider.",
      "Different institutions may assess risk differently.",
      "Responsible repayment matters."
    ],
    keyPoints: [
      "Scores may change over time.",
      "Repayment consistency matters.",
      "Outstanding debt may affect assessments.",
      "Income and affordability also matter."
    ],
    faqs: [
      { question: "Is there one universal score?", answer: "Different institutions may use different scoring approaches." },
      { question: "Can scores improve?", answer: "Financial behavior over time may influence scores." },
      { question: "Does checking my report reduce my score?", answer: "Accessing your own report does not automatically damage your profile." },
      { question: "Are scores permanent?", answer: "No, financial information changes over time." },
      { question: "Is score the same as CRB listing?", answer: "No, they are related but not identical concepts." }
    ],
    relatedGuides: [
      { title: "What Is CRB?", slug: "what-is-crb-in-kenya" },
      { title: "How to Improve Credit Profile", slug: "how-to-improve-credit-profile-kenya" },
      { title: "Understanding Loan Repayment", slug: "how-to-improve-credit-profile-kenya" }
    ],
    lastUpdated: "May 2026"
  }
];

export function getGuideBySlug(slug: string): Guide | undefined {
  return guides.find(g => g.slug === slug);
}

export function getGuidesByCategory(categorySlug: string): Guide[] {
  return guides.filter(g => g.categorySlug === categorySlug);
}

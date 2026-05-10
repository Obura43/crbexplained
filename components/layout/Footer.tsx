import Link from 'next/link';

const footerLinks = {
  platform: [
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
    { href: '/privacy', label: 'Privacy Policy' },
    { href: '/terms', label: 'Terms' },
  ],
  guides: [
    { href: '/guides/what-is-crb-in-kenya', label: 'What Is CRB?' },
    { href: '/guides/what-is-crb-clearance-certificate', label: 'CRB Clearance' },
    { href: '/guides/what-is-credit-score-kenya', label: 'Credit Scores' },
    { href: '/guides/can-mobile-loans-affect-crb-status', label: 'Mobile Loans' },
    { href: '/guides/how-to-improve-credit-profile-kenya', label: 'Improve Credit Profile' },
  ],
  categories: [
    { href: '/category/crb-basics', label: 'CRB Basics' },
    { href: '/category/credit-scores', label: 'Credit Scores' },
    { href: '/category/financial-education', label: 'Financial Education' },
    { href: '/category/loan-repayment', label: 'Loan Repayment' },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600">
                <span className="text-sm font-bold text-white">CR</span>
              </div>
              <span className="text-lg font-semibold text-slate-900">
                CRB Explained <span className="text-blue-600">Kenya</span>
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-slate-500">
              The simple guide to CRB and credit in Kenya. Educational content to help you understand financial reputation.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-slate-900">CRB Explained Kenya</h3>
            <ul className="mt-4 space-y-2.5">
              {footerLinks.platform.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-slate-500 transition-colors hover:text-blue-600">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-slate-900">Popular Guides</h3>
            <ul className="mt-4 space-y-2.5">
              {footerLinks.guides.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-slate-500 transition-colors hover:text-blue-600">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-slate-900">Categories</h3>
            <ul className="mt-4 space-y-2.5">
              {footerLinks.categories.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-slate-500 transition-colors hover:text-blue-600">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-200 pt-6">
          <p className="text-xs leading-relaxed text-slate-400">
            CRB Explained Kenya is an independent informational platform and is not affiliated with any CRB, lender, SACCO, bank, or government agency. Information provided is educational only and should not be considered financial, legal, or credit advice.
          </p>
          <p className="mt-3 text-xs text-slate-400">
            &copy; {new Date().getFullYear()} CRB Explained Kenya. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

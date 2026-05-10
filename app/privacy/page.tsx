import type { Metadata } from 'next';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import { Shield, BarChart3, Mail, AlertTriangle, Lock, UserCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Read the privacy policy for CRB Explained Kenya. Learn how we handle your data and protect your privacy.',
};

const sections = [
  {
    icon: BarChart3,
    title: 'Analytics Collection',
    content: 'We may collect anonymous analytics data to understand how visitors use our website. This includes information such as pages visited, time spent on pages, and general geographic regions. This data is aggregated and does not identify you personally. We use this information solely to improve the quality and relevance of our educational content.',
  },
  {
    icon: Mail,
    title: 'Newsletter Subscriptions',
    content: 'If you subscribe to our newsletter, we collect your email address to send you educational updates. We will never send you spam, and you can unsubscribe at any time. Your email address is stored securely and is used only for communicating educational content related to CRB, credit, and financial literacy.',
  },
  {
    icon: UserCheck,
    title: 'Contact Form Data',
    content: 'When you use our contact form, we collect the information you provide — such as your name, email address, and message content. This information is used solely to respond to your inquiry. We do not share your contact form data with third parties.',
  },
  {
    icon: Shield,
    title: 'No Sale of Personal Data',
    content: 'We do not sell, rent, trade, or otherwise share your personal data with third parties for marketing or commercial purposes. Your information is used exclusively to operate and improve this educational platform.',
  },
  {
    icon: Lock,
    title: 'User Safety',
    content: 'We take reasonable measures to protect the information you share with us. However, no method of transmission over the internet is completely secure. We encourage you to be mindful of the information you share online and to avoid submitting any sensitive personal or financial data through our website.',
  },
  {
    icon: AlertTriangle,
    title: 'No Sensitive Financial Information',
    content: 'Please do not submit passwords, ID scans, bank account details, PINs, or any other sensitive financial information through our website, contact form, or newsletter subscription. CRB Explained Kenya is an educational platform and has no need for such information. If you accidentally share sensitive data, please contact us immediately so we can take appropriate action.',
  },
];

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 sm:py-16 lg:px-8">
      <Breadcrumbs items={[{ label: 'Privacy Policy' }]} />

      <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
        Privacy Policy
      </h1>
      <p className="mt-3 text-lg text-slate-500">
        Your privacy matters to us. This policy explains how CRB Explained Kenya handles your information.
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
        <h2 className="text-lg font-semibold text-slate-900">Changes to This Policy</h2>
        <p className="mt-3 text-sm leading-relaxed text-slate-600">
          We may update this privacy policy from time to time to reflect changes in our practices or for legal, operational, or regulatory reasons. Any changes will be posted on this page with an updated revision date. We encourage you to review this policy periodically.
        </p>
      </div>

      <p className="mt-8 text-sm text-slate-400">
        Last updated: May 2026
      </p>
    </div>
  );
}

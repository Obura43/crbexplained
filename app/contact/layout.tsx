import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact CRB Explained Kenya',
  description: 'Get in touch with CRB Explained Kenya. Ask questions, share feedback, or suggest topics for our educational content.',
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}

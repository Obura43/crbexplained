import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'CRB Explained Kenya — The Simple Guide to CRB and Credit in Kenya',
    template: '%s | CRB Explained Kenya',
  },
  description: 'CRB Explained Kenya helps you understand credit reports, loan listings, credit scores, debt management, and financial reputation in plain language.',
  metadataBase: new URL('https://crbexplained.co.ke'),
  openGraph: {
    type: 'website',
    locale: 'en_KE',
    siteName: 'CRB Explained Kenya',
    title: 'CRB Explained Kenya — The Simple Guide to CRB and Credit in Kenya',
    description: 'Understand CRB, credit reports, loan listings, credit scores, and financial reputation in plain language.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CRB Explained Kenya',
    description: 'The simple guide to CRB and credit in Kenya.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

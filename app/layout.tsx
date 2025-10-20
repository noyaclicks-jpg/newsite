import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Layout from '@/components/Layout';
import { businessInfo } from '@/data/business';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: `${businessInfo.name} | ${businessInfo.slogan}`,
    template: `%s | ${businessInfo.name}`,
  },
  description: `Professional air duct cleaning, dryer vent cleaning, and chimney sweep services in Dallas-Fort Worth. ${businessInfo.specialties.join(', ')}.`,
  keywords: ['air duct cleaning', 'dryer vent cleaning', 'chimney sweep', 'Dallas', 'Fort Worth', 'DFW', 'HVAC cleaning'],
  authors: [{ name: 'MiniMax Agent' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://aircarepro.net',
    siteName: businessInfo.name,
    title: businessInfo.name,
    description: businessInfo.slogan,
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
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}

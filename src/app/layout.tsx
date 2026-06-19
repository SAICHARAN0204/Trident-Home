import type { Metadata } from 'next';
import './globals.css';
import AnnouncementTicker from '@/components/layout/AnnouncementTicker';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import WhatsAppFAB from '@/components/ui/WhatsAppFAB';

export const metadata: Metadata = {
  title: {
    default: 'Trident Home — Premium Cotton Textiles, Mill Direct',
    template: '%s | Trident Home',
  },
  description:
    "Shop premium OEKO-TEX certified bath towels, bedsheets, and pillow covers direct from Trident's mills. Free delivery over ₹999. 30-day returns.",
  keywords: [
    'cotton towels india',
    'premium bedsheets',
    'pillow covers',
    'oeko-tex certified',
    'bci cotton',
    'mill direct textiles',
    'trident home',
  ],
  openGraph: {
    siteName: 'Trident Home',
    type: 'website',
    locale: 'en_IN',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <AnnouncementTicker />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFAB />
      </body>
    </html>
  );
}

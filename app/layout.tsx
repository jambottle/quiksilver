import '@/globals.css';

import { Analytics } from '@vercel/analytics/react';

import Footer from '@/_components/Footer';
import Header from '@/_components/Header';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <Header />
        <main className="quiksilver-layout">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}

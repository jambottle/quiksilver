import '@/globals.css';

import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Analytics } from '@vercel/analytics/react';

import Footer from '@/_components/Footer';
import Header from '@/_components/Header';
import { pretendard } from '@/fonts';
import ReactQueryProvider from '@/provider';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ReactQueryProvider>
      <html lang="ko" className={pretendard.variable}>
        <body>
          <Header />
          <main className="quiksilver-layout">{children}</main>
          <Footer />
          <Analytics />
          <ReactQueryDevtools initialIsOpen={false} />
        </body>
      </html>
    </ReactQueryProvider>
  );
}

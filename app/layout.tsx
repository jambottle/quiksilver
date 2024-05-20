import '@/app/globals.css';

import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Analytics } from '@vercel/analytics/react';

import { pretendard } from '@/app/fonts';
import ReactQueryProvider from '@/app/provider';
import Footer from '@/components/Footer';
import GlobalHydrationBoundary from '@/components/GlobalHydrationBoundary';
import Header from '@/components/Header';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ReactQueryProvider>
      <html lang="ko" className={pretendard.variable}>
        <body>
          <GlobalHydrationBoundary>
            <Header />
            <main className="quiksilver-layout">{children}</main>
            <Footer />
          </GlobalHydrationBoundary>
          <Analytics />
          <ReactQueryDevtools initialIsOpen={false} />
        </body>
      </html>
    </ReactQueryProvider>
  );
}

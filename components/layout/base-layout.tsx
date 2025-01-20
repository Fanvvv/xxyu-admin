import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { ThemeProvider } from '@/components/theme/theme-provider';
import ThemeWrapper from '@/components/theme/theme-wrapper';
import { Toaster } from '@/components/ui/toaster';

import { SidebarProvider, SidebarInset } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/layout/sidebar';
import Header from '@/components/layout/header';

const geistSans = localFont({
  src: '../../app/fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900'
});
const geistMono = localFont({
  src: '../../app/fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900'
});

type Props = {
  children: React.ReactNode;
  params: { locale: string };
};

export async function generateMetadata({
  params: { locale }
}: Omit<Props, 'children'>): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'HomePage' });

  return {
    title: t('title'),
    description: t('description')
  };
}

export default async function BaseLayout({
  children,
  locale
}: {
  children: React.ReactNode;
  locale: string;
}) {
  const messages = await getMessages();
  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider attribute="class" defaultTheme="light">
            <ThemeWrapper>
              <SidebarProvider className="bg-background text-foreground">
                <AppSidebar />
                <SidebarInset>
                  <Header />
                  {children}
                </SidebarInset>
              </SidebarProvider>
            </ThemeWrapper>
          </ThemeProvider>
        </NextIntlClientProvider>
        <Toaster />
      </body>
    </html>
  );
}

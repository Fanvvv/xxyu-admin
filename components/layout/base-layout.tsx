import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import localFont from 'next/font/local';
import { ThemeProvider } from '@/components/theme/theme-provider';
import ThemeWrapper from '@/components/theme/theme-wrapper';
import { Toaster } from '@/components/ui/toaster';
import SidebarLayout from '@/components/layout/sidebar-layout';

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
  locale: string;
  sidebar?: boolean;
};

export default async function BaseLayout({
  children,
  locale,
  sidebar = true
}: Props) {
  const messages = await getMessages();
  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider attribute="class" defaultTheme="light">
            <ThemeWrapper>
              {sidebar ? <SidebarLayout>{children}</SidebarLayout> : children}
            </ThemeWrapper>
          </ThemeProvider>
        </NextIntlClientProvider>
        <Toaster />
      </body>
    </html>
  );
}

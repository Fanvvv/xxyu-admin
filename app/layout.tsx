import { ReactNode } from 'react';
import './globals.css';
import '../public/themes.css';

type Props = {
  children: ReactNode;
};

// Since we have a `not-found.tsx` page on the root, a layout file
// is required, even if it's just passing children through.
export default function RootLayout({ children }: Props) {
  return children;
}

// import { NextIntlClientProvider } from 'next-intl';
// import { getMessages, getTranslations, setRequestLocale } from 'next-intl/server';
// import type { Metadata } from 'next';
// import localFont from 'next/font/local';
// import './globals.css';
// import '../public/themes.css';
// import { ThemeProvider } from '@/components/theme/theme-provider';
// import ThemeWrapper from '@/components/theme/theme-wrapper';
// import { Toaster } from '@/components/ui/toaster';
// import { routing } from '@/i18n/navigation';
// import { notFound } from 'next/navigation';

// const geistSans = localFont({
//   src: './fonts/GeistVF.woff',
//   variable: '--font-geist-sans',
//   weight: '100 900'
// });
// const geistMono = localFont({
//   src: './fonts/GeistMonoVF.woff',
//   variable: '--font-geist-mono',
//   weight: '100 900'
// });

// type Props = {
//   children: React.ReactNode;
//   params: { locale: string };
// };

// export async function generateMetadata({
//   params: { locale }
// }: Omit<Props, 'children'>): Promise<Metadata> {
//   const t = await getTranslations({ locale, namespace: 'HomePage' });

//   return {
//     title: t('title'),
//     description: t('about')
//   };
// }

// export default async function RootLayout({
//   children,
//   params: { locale }
// }: {
//   children: React.ReactNode,
//   params: { locale: string }
// }) {
//   // Providing all messages to the client
//   // side is the easiest way to get started
//   if (!routing.locales.includes(locale as any)) {
//     notFound();
//   }

//   // Enable static rendering
//   setRequestLocale(locale);
//   const messages = await getMessages();
//   return (
//     <html lang={locale} suppressHydrationWarning>
//       <body
//         className={`${geistSans.variable} ${geistMono.variable} antialiased`}
//       >
//         <NextIntlClientProvider messages={messages}>
//           <ThemeProvider attribute="class" defaultTheme="light">
//             <ThemeWrapper>{children}</ThemeWrapper>
//           </ThemeProvider>
//         </NextIntlClientProvider>
//         <Toaster />
//       </body>
//     </html>
//   );
// }

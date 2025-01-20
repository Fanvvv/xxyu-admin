import { getTranslations, setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import { routing } from '@/i18n/navigation';
import { notFound } from 'next/navigation';
import BaseLayout from '@/components/layout/base-layout';

type Props = {
  children: React.ReactNode;
  params: { locale: string };
};

export async function generateMetadata({
  params: { locale }
}: Omit<Props, 'children'>): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'MetaData' });
  return {
    title: t(`Default.title`),
    description: t(`Default.description`)
  };
}

export default async function LocaleLayout({
  children,
  params: { locale }
}: Props) {
  // Providing all messages to the client
  // side is the easiest way to get started
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);
  return <BaseLayout locale={locale}>{children}</BaseLayout>;
}

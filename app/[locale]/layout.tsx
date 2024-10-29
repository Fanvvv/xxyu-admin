import { Metadata } from 'next';
import { Sidebar } from '@/components/layout/sidebar';
import Header from '@/components/layout/header';

export const metadata: Metadata = {
  title: 'next页面',
  description: 'Next.js and Shadcn'
};

export default async function LocaleLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      <Sidebar />
      <main className="w-full flex-1 overflow-hidden">
        <Header />
        {children}
      </main>
    </div>
  );
}

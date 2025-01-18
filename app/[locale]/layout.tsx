import { Metadata } from 'next';
import { SidebarProvider, SidebarInset } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/layout/sidebar';
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
    <SidebarProvider className="bg-background text-foreground">
      <AppSidebar />
      <SidebarInset>
        <Header />
        {children}
      </SidebarInset>
    </SidebarProvider>
  );
}

import { SidebarProvider, SidebarInset } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/layout/sidebar';
import Header from '@/components/layout/header';
import { Separator } from '@/components/ui/separator';

export default function SidebarLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider className="bg-background text-foreground">
      <AppSidebar />
      <SidebarInset>
        <Header />
        <Separator orientation="horizontal" />
        {children}
      </SidebarInset>
    </SidebarProvider>
  );
}

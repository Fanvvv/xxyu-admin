'use client';

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader
} from '@/components/ui/sidebar';
import { NavHeader } from '@/components/nav/nav-header';
import { NavMain } from '@/components/nav/nav-main';
import { NavFooter } from '@/components/nav/nav-footer';
import { navItems } from '@/constants/sidebar-nav';

export function AppSidebar() {
  const user = {
    name: 'shadcn',
    email: 'm@example.com',
    avatar: ''
  };
  return (
    <Sidebar collapsible="icon" className="bg-background">
      <SidebarHeader>
        <NavHeader />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={navItems} />
      </SidebarContent>
      <SidebarFooter>
        <NavFooter user={user} />
      </SidebarFooter>
    </Sidebar>
  );
}

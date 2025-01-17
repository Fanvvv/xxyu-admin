import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader
} from '@/components/ui/sidebar';
import { NavItem } from '@/types';
import { LayoutDashboardIcon, Music } from 'lucide-react';
import { NavMain } from '@/components/nav/nav-main';
import { NavHeader } from '@/components/nav/nav-header';

export const navItems: NavItem[] = [
  {
    title: 'Dashboard',
    url: '/dashboard',
    icon: LayoutDashboardIcon,
    label: 'Dashboard',
    items: [
      {
        title: 'Music',
        url: '/music'
      },
      {
        title: 'Music',
        url: '/music'
      }
    ]
  },
  {
    title: 'Music',
    url: '/music',
    icon: Music,
    label: 'music',
    items: [
      {
        title: 'Music',
        url: '/music'
      }
    ]
  }
];

export function AppSidebar() {
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <NavHeader />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={navItems} />
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}

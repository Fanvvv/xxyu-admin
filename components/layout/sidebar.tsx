'use client';

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader
} from '@/components/ui/sidebar';
import { NavHeader } from '@/components/nav/nav-header';
import { NavMain } from '@/components/nav/nav-main';
import type { NavItem } from '@/types';

export const navItems: NavItem[] = [
  {
    title: 'Dashboard',
    url: '/dashboard',
    icon: 'dashboard',
    label: 'Dashboard',
    items: []
  },
  {
    title: 'Media',
    url: '/media',
    icon: 'media',
    label: 'Media',
    items: [
      {
        title: 'Music',
        icon: 'music',
        url: '/media/music'
      },
      {
        title: 'Movies',
        icon: 'movie',
        url: '/media/movie'
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

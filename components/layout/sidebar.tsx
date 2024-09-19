'use client';
import * as React from 'react';
import { ChevronLeft } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useSidebar } from '@/hooks/useSidebar';
import DashboardNav from '@/components/dashboard-nav';
import { NavItem } from '@/types';

type Props = {
  className?: string;
};

export const navItems: NavItem[] = [
  {
    title: 'Dashboard',
    href: '/dashboard',
    icon: 'dashboard',
    label: 'Dashboard'
  },
  {
    title: 'User',
    href: '/dashboard/user',
    icon: 'user',
    label: 'user'
  },
  {
    title: 'Profile',
    href: '/dashboard/profile',
    icon: 'profile',
    label: 'profile'
  },
  {
    title: 'Login',
    href: '/',
    icon: 'login',
    label: 'login',
    hidden: true
  }
];
export const Sidebar = ({ className }: Props) => {
  const { isMinimized, toggle } = useSidebar();

  function handleClick() {
    toggle();
  }

  return (
    <aside
      className={cn(
        `relative hidden h-screen border-r bg-card transition-[width] duration-500 md:block`,
        isMinimized ? 'w-72' : 'w-[72px]',
        className
      )}
    >
      <div className="p5 p10 hidden lg:block">logo</div>
      <ChevronLeft
        className={cn(
          `absolute -right-3 top-10 z-10 cursor-pointer rounded-full border bg-background text-3xl text-foreground`,
          isMinimized && 'rotate-180'
        )}
        onClick={handleClick}
      />
      <div className={'py-4'}>
        <div className={'px-3 py-4'}>
          <div className={'mt-3'}>
            <DashboardNav items={navItems} />
          </div>
        </div>
      </div>
    </aside>
  );
};

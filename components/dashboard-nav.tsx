'use client';

import React from 'react';
import { NavItem } from '@/types';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/ui/tooltip';
import Link from 'next/link';
import { useSidebar } from '@/hooks/useSidebar';
import { Icons } from '@/components/icons';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

interface DashboardNavProps {
  items: NavItem[];
}

const DashboardNav = ({ items }: DashboardNavProps) => {
  const { isMinimized } = useSidebar();
  const path = usePathname();
  return (
    <nav className={'grid items-start gap-2'}>
      <TooltipProvider>
        {items?.map((item, index) => {
          const Icon = Icons[item.icon || 'user'];
          return (
            item.href && (
              <Tooltip key={index}>
                <TooltipTrigger asChild>
                  <Link
                    href={item.disabled ? '/' : item.href}
                    className={cn(
                      'flex items-center gap-2 overflow-hidden rounded-md py-2 text-sm font-medium',
                      path === item.href ? 'bg-accent' : 'transparent',
                      item.disabled && 'cursor-not-allowed opacity-60',
                      item.hidden && 'hidden'
                    )}
                  >
                    <Icon className={`ml-3 size-5`} />
                    {isMinimized ? (
                      <span className={'mr-2 truncate'}>{item.title}</span>
                    ) : (
                      ''
                    )}
                  </Link>
                </TooltipTrigger>
                <TooltipContent
                  align="center"
                  side="right"
                  sideOffset={8}
                  className={isMinimized ? 'hidden' : 'inline-block'}
                >
                  <p>{item.title}</p>
                </TooltipContent>
              </Tooltip>
            )
          );
        })}
      </TooltipProvider>
    </nav>
  );
};

export default DashboardNav;

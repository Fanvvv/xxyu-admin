'use client';

import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  useSidebar
} from '@/components/ui/sidebar';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger
} from '@/components/ui/collapsible';
import { ChevronRight } from 'lucide-react';
import type { NavItem } from '@/types';
import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';
import { usePathname } from '@/i18n/navigation';
import { Icons } from '@/components/icons';

export function NavMain({ items }: { items: NavItem[] }) {
  const t = useTranslations('Sidebar');
  const pathname = usePathname();
  const { state, isMobile } = useSidebar();

  return (
    <SidebarGroup>
      <SidebarGroupLabel>{t('Group')}</SidebarGroupLabel>
      <SidebarMenu>
        {items.map((item) => {
          const Icon = item.icon ? Icons[item.icon] : Icons.logo;
          return item?.items && item?.items.length > 0 ? (
            <Collapsible
              key={t(item.title)}
              asChild
              defaultOpen={item.isActive}
              className="group/collapsible"
            >
              <SidebarMenuItem>
                <CollapsibleTrigger asChild>
                  <SidebarMenuButton
                    tooltip={t(item.title)}
                    isActive={pathname == item.url}
                  >
                    {item.icon && <Icon />}
                    <span>{t(item.title)}</span>
                    <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                  </SidebarMenuButton>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <SidebarMenuSub>
                    {item.items?.map((subItem) => {
                      const SubIcon = subItem.icon
                        ? Icons[subItem.icon]
                        : Icons.logo;
                      return (
                        <SidebarMenuSubItem key={subItem.title}>
                          <SidebarMenuSubButton
                            asChild
                            isActive={pathname == subItem.url}
                          >
                            <Link href={subItem.url}>
                              {subItem.icon && <SubIcon />}
                              <span>{t(subItem.title)}</span>
                            </Link>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      );
                    })}
                  </SidebarMenuSub>
                </CollapsibleContent>
              </SidebarMenuItem>
            </Collapsible>
          ) : (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton
                asChild
                tooltip={t(item.title)}
                isActive={pathname == item.url}
              >
                <Link href={item.url}>
                  {item.icon && <Icon />}
                  <span>{t(item.title)}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          );
        })}
      </SidebarMenu>
    </SidebarGroup>
  );
}

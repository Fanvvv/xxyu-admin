import { Clover } from 'lucide-react';

export const company = {
  name: 'next页面',
  plan: 'app',
  logo: Clover
};

export function NavHeader() {
  return (
    <div className="text-sidebar-accent-foreground flex gap-2 py-2">
      <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
        <company.logo className="size-4" />
      </div>
      <div className="grid flex-1 text-left text-sm leading-tight">
        <span className="truncate font-semibold">{company.name}</span>
        <span className="truncate text-xs">{company.plan}</span>
      </div>
    </div>
  );
}

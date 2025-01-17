import React from 'react';
import ThemeCustomize from '@/components/theme/theme-customize';
import { SidebarTrigger } from '@/components/ui/sidebar';

const Header = () => {
  return (
    <header className="flex h-16 items-center justify-between">
      <div className="flex items-center">
        <SidebarTrigger className="-ml-1" />
      </div>
      <div>
        <ThemeCustomize />
      </div>
    </header>
  );
};

export default Header;

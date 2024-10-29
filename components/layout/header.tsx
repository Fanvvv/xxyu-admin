import React from 'react';
import ThemeCustomize from '@/components/theme/theme-customize';

const Header = () => {
  return (
    <header>
      <nav className={`flex items-center justify-between px-4 py-2`}>
        <div className={'text-primary'}>1</div>
        <div>
          <ThemeCustomize />
        </div>
      </nav>
    </header>
  );
};

export default Header;

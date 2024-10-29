'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { useThemeConfig } from '@/hooks/useThemeConfig';

interface ThemeWrapperProps extends React.ComponentProps<'div'> {
  defaultTheme?: string;
}

const ThemeWrapper = ({
  defaultTheme,
  children,
  className
}: ThemeWrapperProps) => {
  const config = useThemeConfig();
  return (
    <div
      className={cn(
        ` theme-${defaultTheme || config.theme} `,
        'w-full',
        className
      )}
      style={
        {
          '--radius': `${defaultTheme ? 0.5 : config.radius}rem`
        } as React.CSSProperties
      }
    >
      {children}
    </div>
  );
};

export default ThemeWrapper;

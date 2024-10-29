'use client';

import React from 'react';

import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@/components/ui/popover';

import { Drawer, DrawerContent, DrawerTrigger } from '@/components/ui/drawer';

import { Button } from '@/components/ui/button';
import { Check, Moon, Palette, Sun } from 'lucide-react';
import ThemeWrapper from '@/components/theme/theme-wrapper';
import { Label } from '@/components/ui/label';
import { baseColors } from '@/constants/base-colors';
import { useThemeConfig } from '@/hooks/useThemeConfig';
import { Skeleton } from '@/components/ui/skeleton';
import { cn } from '@/lib/utils';
import { useTheme } from 'next-themes';

const ThemeCustomize = () => {
  return (
    <div>
      <Drawer>
        <DrawerTrigger asChild>
          <Button size="sm" className="md:hidden">
            <Palette />
          </Button>
        </DrawerTrigger>
        <DrawerContent className="p-6 pt-0">
          <Customizer />
        </DrawerContent>
      </Drawer>
      <div className="hidden items-center md:flex">
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="ghost" size="sm">
              <Palette />
            </Button>
          </PopoverTrigger>
          <PopoverContent
            align="start"
            className="z-40 w-[340px] rounded-[12px] bg-white p-6 dark:bg-zinc-950"
          >
            <Customizer />
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
};

function Customizer() {
  const [mounted, setMounted] = React.useState(false);
  const config = useThemeConfig();

  const { setTheme: setMode, resolvedTheme: mode } = useTheme();
  React.useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <ThemeWrapper
      defaultTheme="zinc"
      className="flex flex-col space-y-4 md:space-y-6"
    >
      <div className="flex flex-1 flex-col space-y-4 md:space-y-6">
        <div className="space-y-1.5">
          <Label className="text-xs">Color</Label>
          <div className={'grid grid-cols-3 gap-2'}>
            {baseColors.map((theme) => {
              const isActive = config.theme === theme.name;
              return mounted ? (
                <Button
                  variant={'outline'}
                  size={'sm'}
                  key={theme.name}
                  className={cn(
                    isActive && 'border-2 border-primary',
                    'justify-start'
                  )}
                  style={
                    {
                      '--theme-primary': `hsl(${
                        theme?.activeColor[mode === 'dark' ? 'dark' : 'light']
                      })`
                    } as React.CSSProperties
                  }
                  onClick={() => {
                    config.setTheme(theme.name);
                  }}
                >
                  <span
                    className={cn(
                      'mr-1 flex h-5 w-5 shrink-0 -translate-x-1 items-center justify-center rounded-full bg-[--theme-primary]'
                    )}
                  >
                    {isActive && <Check className={'h-4 w-4 text-white'} />}
                  </span>
                  {theme.label}
                </Button>
              ) : (
                <Skeleton key={theme.name} className={'h-8 w-full'} />
              );
            })}
          </div>
        </div>
        <div className="space-y-1.5">
          <Label className="text-xs">Radius</Label>
          <div className="grid grid-cols-5 gap-2">
            {['0', '0.3', '0.5', '0.75', '1.0'].map((value) => {
              return (
                <Button
                  variant={'outline'}
                  size="sm"
                  key={value}
                  onClick={() => {
                    config.setRadius(parseFloat(value));
                  }}
                  className={cn(
                    config.radius === parseFloat(value) &&
                      'border-2 border-primary'
                  )}
                >
                  {value}
                </Button>
              );
            })}
          </div>
        </div>
        <div className="space-y-1.5">
          <Label className="text-xs">Mode</Label>
          <div className="grid grid-cols-3 gap-2">
            {mounted ? (
              <>
                <Button
                  variant={'outline'}
                  size="sm"
                  onClick={() => setMode('light')}
                  className={cn(mode === 'light' && 'border-2 border-primary')}
                >
                  <Sun className="mr-1 -translate-x-1" />
                  Light
                </Button>
                <Button
                  variant={'outline'}
                  size="sm"
                  onClick={() => setMode('dark')}
                  className={cn(mode === 'dark' && 'border-2 border-primary')}
                >
                  <Moon className="mr-1 -translate-x-1" />
                  Dark
                </Button>
              </>
            ) : (
              <>
                <Skeleton className="h-8 w-full" />
                <Skeleton className="h-8 w-full" />
              </>
            )}
          </div>
        </div>
      </div>
    </ThemeWrapper>
  );
}

export default ThemeCustomize;

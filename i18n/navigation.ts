import { createSharedPathnamesNavigation } from 'next-intl/navigation';

export const defaultLocale = 'en';

export const locales = ['en', 'zh'] as const;

// export const localePrefix = 'never';
export const localePrefix = 'as-needed';

export const pathnames = {
  '/': '/'
};

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation({
    locales,
    localePrefix,
    defaultLocale,
    pathnames
  });

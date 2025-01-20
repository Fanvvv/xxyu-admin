import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';

export const defaultLocale = 'en';

export const locales = ['en', 'zh'] as const;

// 完全禁用前缀，locale 不会出现在路径中，需要通过 cookie 来判断语言
// export const localePrefix = 'never';
// 默认语言情况下，locale 不会出现在路径中
// export const localePrefix = 'as-needed';
// 总是显示 locale 前缀
// export const localePrefix = 'always';

export const routing = defineRouting({
  // A list of all locales that are supported
  locales,

  // Used when no locale matches
  defaultLocale
});

export const { Link, getPathname, redirect, usePathname, useRouter } =
  createNavigation(routing);

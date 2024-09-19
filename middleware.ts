import createMiddleware from 'next-intl/middleware';
import { defaultLocale, localePrefix, locales } from '@/i18n/navigation';

export default createMiddleware({
  defaultLocale,
  localePrefix,
  locales
});

export const config = {
  // matcher: ['/', '/(zh|en)/:path*']
  // 匹配所有不包含 _next 或文件扩展名的路径，相当于排除静态资源
  matcher: ['/((?!_next|.*\\..*).*)']
};

import createMiddleware from 'next-intl/middleware';
import { routing } from '@/i18n/navigation';

export default createMiddleware(routing);

export const config = {
  matcher: ['/', '/(zh|en)/:path*', '/((?!login|_next|.*\\..*).*)']
  // 匹配所有不包含 _next 或文件扩展名的路径，相当于排除静态资源
  // matcher: ['/((?!_next|.*\\..*).*)']
};

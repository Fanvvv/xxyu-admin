import { useLocale } from 'next-intl';
import { zhCN, enUS } from 'date-fns/locale';

export function useCurrentLocale() {
  const locale = useLocale();
  const localeMap = {
    zh: zhCN,
    en: enUS
  };
  return localeMap[locale as keyof typeof localeMap] ?? zhCN;
}

'use client';

import { useEffect } from 'react';
import { useTranslations } from 'next-intl';

/**
 * 根据 i18n 的语言设置页面标题和描述
 * locales/[language].json 中需要有对应的 MetaData 配置
 * @param pageName 页面名称
 */
const useSeoMeta = (pageName = 'Default', showSystemTitle = true) => {
  const t = useTranslations('MetaData');
  const title =
    t(`${pageName}.title`) + ` | ${showSystemTitle && t('Default.title')}`;
  const description = t(`${pageName}.description`);

  useEffect(() => {
    if (title) {
      document.title = title;
    }
    // 更新 meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description || '');
    }
  }, [title, description]);
};

export default useSeoMeta;

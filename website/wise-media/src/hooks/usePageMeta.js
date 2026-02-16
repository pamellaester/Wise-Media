import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export default function usePageMeta(titleKey, descriptionKey) {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    // Update document title
    const title = t(titleKey);
    document.title = title;

    // Update meta description
    const description = t(descriptionKey);
    let metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }

    // Update Open Graph tags
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', title);
    }

    let ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', description);
    }

    // Update html lang attribute
    document.documentElement.lang = i18n.language === 'en' ? 'en' : 'pt-BR';

  }, [titleKey, descriptionKey, t, i18n.language]);
}

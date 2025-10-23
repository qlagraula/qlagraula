import { defaultLang, languages, ui, type Language } from './ui';

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as Language;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof (typeof ui)[typeof defaultLang], params?: any) {
    if (typeof ui[lang][key] === 'function') return ui[lang][key](params);

    if (typeof ui[defaultLang][key] === 'function')
      return ui[defaultLang][key](params);

    return ui[lang][key] || ui[defaultLang][key];
  };
}

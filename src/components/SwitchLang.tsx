import { languages } from '#i18n/ui';
import { getLangFromUrl, useTranslations } from '#i18n/utils';
import { getRelativeLocaleUrl } from 'astro:i18n';

export default function SwitchTheme() {
  const lang = getLangFromUrl(new URL(window.location.href));
  const pageUrl = window.location.pathname.replace(`/${lang}`, '');

  const t = useTranslations(lang);

  return (
    <select
      className="select select-ghost w-auto uppercase"
      value={lang}
      onChange={(e) => {
        location.assign(getRelativeLocaleUrl(e.target.value, pageUrl));
      }}
      aria-label={t('lang.switch')}
    >
      {languages.map((language) => (
        <option key={language} value={language}>
          {language.toUpperCase()}
        </option>
      ))}
    </select>
  );
}

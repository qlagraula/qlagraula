export const languages = ['fr', 'en'] as const;

export type Language = (typeof languages)[number];

export const defaultLang = 'fr';

export const ui = {
  en: {
    headline: 'Fullstack Developer in',
    location: 'Bordeaux',
    about: 'About',
    contact: 'Contact',
    'experience.title': 'Work Experience',
    '404.back': 'Back Home',
    'theme.switch': ({ theme }: { theme: string | null }) =>
      `Switch to ${
        !theme ? 'dark' : theme === 'dark' ? 'light' : 'system'
      } theme`,
    'lang.switch': 'Change language',
    'articles.latest': 'Latest posts',
  },
  fr: {
    headline: 'Développeur Fullstack à',
    location: 'Bordeaux',
    about: 'À propos',
    contact: 'Contact',
    'experience.title': 'Expérience',
    '404.back': "Retour à l'accueil",
    'theme.switch': ({ theme }: { theme: string | null }) =>
      `Basculer sur le thème ${
        !theme ? 'sombre' : theme === 'dark' ? 'clair' : 'système'
      }`,
    'lang.switch': 'Changer de langue',
    'articles.latest': 'Derniers articles',
  },
} as const satisfies Record<
  Language,
  Record<string, string | null | ((params: any) => string)>
>;

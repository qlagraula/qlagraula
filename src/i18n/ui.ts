export const languages = ['fr', 'en'] as const;

export type Language = (typeof languages)[number];

export const defaultLang = 'fr';

export const ui = {
  en: {
    'experience.title': 'Work Experience',
    '404.back': 'Back Home',
  },
  fr: {
    'experience.title': 'Expérience',
    '404.back': "Retour à l'acceuil",
  },
} as const satisfies Record<Language, Record<string, string>>;

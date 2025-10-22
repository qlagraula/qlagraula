import type { z } from 'astro/zod';
import MetaDefaultImage from '#assets/images/meta-default.jpeg';
import avatar from '#assets/images/avatar.png';
import type { seoSchemaWithoutImage } from '#content.config';
import astroConfig from 'astro.config.mjs';

export type AuthorInfo = {
  name: string;
  avatar: any;
  headline: string;
  username?: string;
  location?: string;
};

export type Seo = z.infer<typeof seoSchemaWithoutImage> & {
  image?: any;
};

type DefaultConfigurationType = {
  baseUrl: string;
  author: AuthorInfo;
  seo: Seo;
};

export const DEFAULT_CONFIGURATION: DefaultConfigurationType = {
  baseUrl: astroConfig.site || 'https://quentin.com',
  author: {
    avatar,
    name: 'Quentin Lagraula',
    headline: 'Fullstack Developer',
    username: 'qlagraula',
    location: 'Bordeaux',
  },
  seo: {
    title: 'Quentin Lagraula - Fullstack Developer',
    description:
      'Clean and aesthetic portfolio website for developers and designers',
    type: 'website',
    image: MetaDefaultImage,
    robots: 'noindex, nofollow',
  },
};

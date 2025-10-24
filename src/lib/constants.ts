import type { z } from 'astro/zod';
import MetaDefaultImage from '#assets/images/meta-default.jpeg';
import avatar from '#assets/images/avatar.png';
import type { seoSchemaWithoutImage } from '#content.config';
import astroConfig from 'astro.config.mjs';

export type AuthorInfo = {
  name: string;
  headline: string;
  avatar: any;
};

export type Seo = z.infer<typeof seoSchemaWithoutImage> & {
  image?: ImageMetadata;
};

type DefaultConfigurationType = {
  baseUrl: string;
  author: AuthorInfo;
  seo: Seo;
};

export const DEFAULT_CONFIGURATION = {
  baseUrl: astroConfig.site || 'https://qlagraula.github.io',
  author: {
    avatar,
    name: 'Quentin Lagraula',
    headline: 'Fullstack Developer in Bordeaux',
  },
  seo: {
    title: 'Quentin Lagraula - Fullstack Developer',
    description:
      'Software developer with product vision, passionate about solving problems and creating the best user experiences',
    type: 'website',
    image: MetaDefaultImage,
    keywords: 'blog, react, node, tanstack, typescript',
  },
} as const satisfies DefaultConfigurationType;

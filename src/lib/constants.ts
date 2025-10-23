import type { z } from 'astro/zod';
import MetaDefaultImage from '#assets/images/meta-default.jpeg';
import avatar from '#assets/images/avatar.png';
import type { seoSchemaWithoutImage } from '#content.config';
import astroConfig from 'astro.config.mjs';

export type AuthorInfo = {
  name: string;
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
  },
  seo: {
    title: 'Quentin Lagraula - Fullstack Developer',
    description:
      'Clean and aesthetic portfolio website for developers and designers',
    type: 'website',
    image: MetaDefaultImage,
    robots: 'noindex, nofollow',
    keywords: 'blog, react, node, tanstack, typescript',
  },
} as const satisfies DefaultConfigurationType;

import { site } from '@/data/site';

type PageMetaOptions = {
  title?: string;
  description?: string;
  image?: string;
};

export function usePageMeta(options: PageMetaOptions = {}) {
  const config = useRuntimeConfig();
  const title = options.title ? `${options.title} — ${site.name}` : site.title;
  const description = options.description ?? site.description;
  const image = options.image ?? site.ogImage;
  const url = config.public.siteUrl || site.url;

  useSeoMeta({
    title,
    description,
    ogTitle: title,
    ogDescription: description,
    ogImage: `${url}${image}`,
    ogUrl: url,
    twitterCard: 'summary_large_image',
    twitterTitle: title,
    twitterDescription: description,
    twitterImage: `${url}${image}`,
  });

  useHead({
    link: [{ rel: 'canonical', href: url }],
  });

  return { title, description };
}

export function usePersonJsonLd() {
  useHead({
    script: [
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Person',
          name: site.name,
          url: site.url,
          jobTitle: site.jobTitle,
          sameAs: [site.github, site.linkedin, site.medium, site.stackoverflow],
          email: site.email,
        }),
      },
    ],
  });
}

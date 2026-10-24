import { site } from '@/data/site';

type PageMeta = {
  title?: string;
  description?: string;
  image?: string;
  index?: boolean;
};

type ListedItem = {
  name: string;
  url: string;
};

function siteOrigin() {
  const config = useRuntimeConfig();
  return String(config.public.siteUrl || site.url).replace(/\/$/, '');
}

export function usePageMeta(options: PageMeta = {}) {
  const route = useRoute();
  const origin = siteOrigin();
  const title = options.title ? `${options.title} — ${site.name}` : site.title;
  const description = options.description ?? site.description;
  const imageUrl = `${origin}${options.image ?? site.ogImage}`;
  const pageUrl = route.path === '/' ? origin : `${origin}${route.path}`;
  const indexable = options.index !== false;

  useSeoMeta({
    title,
    description,
    robots: indexable ? 'index, follow' : 'noindex, nofollow',
    ogTitle: title,
    ogDescription: description,
    ogImage: imageUrl,
    ogImageWidth: 1200,
    ogImageHeight: 630,
    ogImageAlt: title,
    ogType: 'website',
    ogSiteName: site.name,
    twitterCard: 'summary_large_image',
    twitterTitle: title,
    twitterDescription: description,
    twitterImage: imageUrl,
    ...(indexable ? { ogUrl: pageUrl } : {}),
  });

  useHead({
    link: indexable ? [{ rel: 'canonical', href: pageUrl }] : [],
    script:
      indexable && options.title
        ? [
            {
              key: 'breadcrumb-jsonld',
              type: 'application/ld+json',
              innerHTML: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'BreadcrumbList',
                itemListElement: [
                  {
                    '@type': 'ListItem',
                    position: 1,
                    name: 'Home',
                    item: origin,
                  },
                  {
                    '@type': 'ListItem',
                    position: 2,
                    name: options.title,
                    item: pageUrl,
                  },
                ],
              }),
            },
          ]
        : [],
  });
}

export function usePersonJsonLd() {
  const origin = siteOrigin();
  const personId = `${origin}/#person`;
  const websiteId = `${origin}/#website`;

  useHead({
    script: [
      {
        key: 'person-jsonld',
        type: 'application/ld+json',
        innerHTML: JSON.stringify({
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'Person',
              '@id': personId,
              name: site.name,
              url: origin,
              jobTitle: site.jobTitle,
              description: site.description,
              image: `${origin}${site.ogImage}`,
              email: site.email,
              sameAs: [
                site.github,
                site.linkedin,
                site.medium,
                site.stackoverflow,
                site.mentorcruise.split('?')[0],
                site.telegram,
              ],
            },
            {
              '@type': 'WebSite',
              '@id': websiteId,
              url: origin,
              name: site.name,
              description: site.description,
              inLanguage: 'en',
              publisher: { '@id': personId },
            },
            {
              '@type': 'ProfilePage',
              '@id': `${origin}/#profile`,
              url: origin,
              name: site.title,
              inLanguage: 'en',
              isPartOf: { '@id': websiteId },
              mainEntity: { '@id': personId },
            },
          ],
        }),
      },
    ],
  });
}

export function useItemListJsonLd(name: string, items: ListedItem[]) {
  useHead({
    script: [
      {
        key: 'item-list-jsonld',
        type: 'application/ld+json',
        innerHTML: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'ItemList',
          name,
          itemListElement: items.map((item, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: item.name,
            url: item.url,
          })),
        }),
      },
    ],
  });
}

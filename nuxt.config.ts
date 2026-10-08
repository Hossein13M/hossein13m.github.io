// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config';
import path from 'path';
import tailwindcss from '@tailwindcss/vite';

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: process.env.NODE_ENV === 'development' },
  ssr: true,
  experimental: {
    appManifest: false,
  },
  srcDir: 'src/',
  nitro: {
    preset: 'netlify-static',
    prerender: {
      routes: ['/', '/blog', '/experiences'],
      crawlLinks: true,
    },
  },
  router: {
    options: {
      strict: false,
    },
  },
  // With srcDir, public assets must be pointed at the repo-root public/ folder
  dir: {
    public: path.resolve(__dirname, 'public'),
  },
  css: ['~/assets/css/main.css'],
  modules: ['@vueuse/nuxt'],
  app: {
    head: {
      htmlAttrs: { lang: 'en', class: 'dark' },
      // Static SEO tags so crawlers that skip SPA JS still get a preview image.
      title: 'Hossein Mousavi — Senior DevOps Engineer',
      meta: [
        {
          name: 'description',
          content:
            'Senior DevOps Engineer with 10+ years of experience in tech. Background in infrastructure, software engineering, and platform delivery with Docker, Kubernetes, AWS, and CI/CD.',
        },
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'Hossein Mousavi' },
        {
          property: 'og:title',
          content: 'Hossein Mousavi — Senior DevOps Engineer',
        },
        {
          property: 'og:description',
          content:
            'Senior DevOps Engineer with 10+ years of experience in tech. Background in infrastructure, software engineering, and platform delivery with Docker, Kubernetes, AWS, and CI/CD.',
        },
        {
          property: 'og:url',
          content: 'https://hossein.dev',
        },
        {
          property: 'og:image',
          content: 'https://hossein.dev/images/social/og-preview.png',
        },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        {
          property: 'og:image:alt',
          content: 'Hossein Mousavi portfolio homepage',
        },
        { name: 'twitter:card', content: 'summary_large_image' },
        {
          name: 'twitter:title',
          content: 'Hossein Mousavi — Senior DevOps Engineer',
        },
        {
          name: 'twitter:description',
          content:
            'Senior DevOps Engineer with 10+ years of experience in tech. Background in infrastructure, software engineering, and platform delivery with Docker, Kubernetes, AWS, and CI/CD.',
        },
        {
          name: 'twitter:image',
          content: 'https://hossein.dev/images/social/og-preview.png',
        },
        { name: 'theme-color', content: '#0c1014' },
        { name: 'msapplication-TileColor', content: '#0c1014' },
        {
          name: 'msapplication-TileImage',
          content: '/mstile-150x150.png',
        },
        { name: 'apple-mobile-web-app-title', content: 'Hossein Mousavi' },
        { name: 'application-name', content: 'Hossein Mousavi' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '16x16',
          href: '/favicon-16x16.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '32x32',
          href: '/favicon-32x32.png',
        },
        {
          rel: 'apple-touch-icon',
          sizes: '180x180',
          href: '/apple-touch-icon.png',
        },
        { rel: 'manifest', href: '/site.webmanifest' },
      ],
    },
  },
  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://hossein.dev',
    },
  },
  alias: {
    '@': path.resolve(__dirname, 'src'),
    '@components': path.resolve(__dirname, 'src/components'),
    '@types': path.resolve(__dirname, 'src/types'),
  },
  vite: {
    plugins: [tailwindcss()],
    vue: {
      template: {
        transformAssetUrls: false,
      },
    },
  },
});

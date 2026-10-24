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
  components: [{ path: '~/components', pathPrefix: false }],
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
  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      meta: [
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
        { rel: 'alternate', href: '/llms.txt', type: 'text/markdown' },
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

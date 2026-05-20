// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config';
import path from 'path';
import tailwindcss from '@tailwindcss/vite';

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: process.env.NODE_ENV === 'development' },
  ssr: false,
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
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'shortcut icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: '',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=DM+Mono&family=Inter:wght@400;500;600;700&display=swap',
        },
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

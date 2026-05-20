import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginVue from 'eslint-plugin-vue';
import vueParser from 'vue-eslint-parser';

/** @type {import('eslint').Linter.Config[]} */
export default [
  { ignores: ['node_modules/', 'dist/', '.nuxt/', '.output/'] },
  { files: ['**/*.{js,mjs,cjs,ts}'] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    rules: {
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { argsIgnorePattern: '^_' },
      ],
    },
  },
  ...pluginVue.configs['flat/essential'],
  {
    files: ['**/*.vue'],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: tseslint.parser,
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
      globals: {
        ...globals.browser,
        computed: 'readonly',
        ref: 'readonly',
        onMounted: 'readonly',
        onUnmounted: 'readonly',
        nextTick: 'readonly',
        defineProps: 'readonly',
        definePageMeta: 'readonly',
        useRoute: 'readonly',
        useRouter: 'readonly',
        useHead: 'readonly',
        useSeoMeta: 'readonly',
        useRuntimeConfig: 'readonly',
        useWindowScroll: 'readonly',
        useColorMode: 'readonly',
        usePageMeta: 'readonly',
        usePersonJsonLd: 'readonly',
        useWindowSize: 'readonly',
        useRafFn: 'readonly',
        usePreferredReducedMotion: 'readonly',
        reactive: 'readonly',
        watch: 'readonly',
      },
    },
    rules: {
      'vue/multi-word-component-names': 'off',
    },
  },
];

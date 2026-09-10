export default defineNuxtPlugin(() => {
  const mode = useColorMode();
  if (mode.value === 'auto' || !mode.value) {
    mode.value = 'dark';
  }

  // Keep Unhead's html class in sync with the persisted preference so route
  // changes (useHead/useSeoMeta) cannot reset the theme back to dark.
  useHead({
    htmlAttrs: {
      class: computed(() => (mode.value === 'dark' ? 'dark' : '')),
    },
  });
});

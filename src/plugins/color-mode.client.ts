export default defineNuxtPlugin(() => {
  const mode = useColorMode();
  if (mode.value === 'auto' || !mode.value) {
    mode.value = 'dark';
  }
});

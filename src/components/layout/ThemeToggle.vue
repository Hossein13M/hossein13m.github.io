<script setup lang="ts">
import { colorMode, toggleTheme } from '@/composables/useTheme';
</script>

<template>
  <button
    type="button"
    class="theme-toggle"
    :aria-label="
      colorMode === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'
    "
    title="Toggle theme"
    @click="toggleTheme"
  >
    <img
      :src="
        colorMode === 'dark'
          ? '/assets/images/pictures/sun.png'
          : '/assets/images/pictures/moon.png'
      "
      :alt="
        colorMode === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'
      "
      :class="{ 'is-dark-mode': colorMode === 'dark' }"
      width="24"
      height="24"
      class="theme-toggle-icon"
    />
  </button>
</template>

<style scoped>
.theme-toggle {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.35rem;
  border: none;
  background: transparent;
  opacity: 0.55;
  cursor: pointer;
  transition: opacity 0.2s ease;
}

.theme-toggle:hover {
  opacity: 1;
}

.theme-toggle-icon {
  width: 1.125rem;
  height: 1.125rem;
}

.theme-toggle-icon.is-dark-mode {
  filter: brightness(0) invert(1);
}
</style>

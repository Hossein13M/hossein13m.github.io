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
    <svg
      v-if="colorMode === 'dark'"
      class="theme-toggle-icon"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        d="M12 18a6 6 0 1 1 0-12 6 6 0 0 1 0 12zm0-2a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM11 1h2v3h-2V1zm0 19h2v3h-2v-3zM3.515 4.929l1.414-1.414L7.05 5.636 5.636 7.05 3.515 4.93zM16.95 18.364l1.414-1.414 2.121 2.121-1.414 1.414-2.121-2.121zm2.121-14.85 1.414 1.415-2.121 2.121-1.414-1.414 2.121-2.121zM7.05 16.95l1.414 1.414-2.121 2.121-1.414-1.414 2.121-2.121zM23 11v2h-3v-2h3zM4 11v2H1v-2h3z"
      />
    </svg>
    <svg
      v-else
      class="theme-toggle-icon"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        d="M10 7a7 7 0 0 0 12 4.9v.1c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2h.1A6.979 6.979 0 0 0 10 7zm-5.5 9.5a8.5 8.5 0 0 1 7.5-4.9v-.1c0-4.694 3.806-8.5 8.5-8.5 2.711 0 5.135 1.27 6.696 3.244A8.507 8.507 0 0 0 12 21.5 8.5 8.5 0 0 1 4.5 16.5z"
      />
    </svg>
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
  color: inherit;
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
</style>

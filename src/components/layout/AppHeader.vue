<script setup lang="ts"></script>

<template>
  <header class="app-header print:hidden">
    <div class="app-header-inner">
      <LayoutAppLogo />
      <LayoutAppNav />
    </div>
  </header>
</template>

<style scoped>
.app-header {
  position: sticky;
  top: 0;
  z-index: 40;
  width: 100%;
  border-bottom: 1px solid var(--color-border);
  background: color-mix(in srgb, var(--color-bg) 88%, transparent);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
}

.app-header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem 1rem;
  width: 100%;
  max-width: var(--content-max-width);
  margin-inline: auto;
  padding: 0.75rem 1.25rem;
  box-sizing: border-box;
}

@media (min-width: 640px) {
  .app-header-inner {
    padding: 0.875rem 1.5rem;
  }
}

.scroll-top-btn {
  position: fixed;
  right: 0.75rem;
  bottom: 0.75rem;
  z-index: 50;
  display: flex;
  height: 2.5rem;
  width: 2.5rem;
  align-items: center;
  justify-content: center;
  border-radius: 9999px;
  border: 1px solid var(--color-border);
  background: var(--color-card);
  color: inherit;
  opacity: 0;
  pointer-events: none;
  transition:
    opacity 0.3s ease,
    background-color 0.2s ease;
}

.scroll-top-btn.is-visible {
  opacity: 0.35;
  pointer-events: auto;
}

.scroll-top-btn.is-visible:hover {
  opacity: 1;
}
</style>

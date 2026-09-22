<script setup lang="ts"></script>

<template>
  <header class="app-header print:hidden">
    <div class="site-container app-header-inner">
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
  padding-block: 0.75rem;
}

@media (min-width: 640px) {
  .app-header-inner {
    padding-block: 0.875rem;
  }
}
</style>

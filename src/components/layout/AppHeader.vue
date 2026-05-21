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

@media (max-width: 639px) {
  .app-header-inner {
    padding-inline: 1rem;
  }
}
</style>

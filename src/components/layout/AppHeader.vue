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
  position: relative;
  z-index: 40;
  flex-shrink: 0;
  width: 100%;
  padding-top: env(safe-area-inset-top);
  border-bottom: 1px solid var(--color-border);
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

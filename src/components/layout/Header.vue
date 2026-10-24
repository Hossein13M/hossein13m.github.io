<template>
  <header class="app-header print:hidden">
    <a class="skip-link" href="#main-content">Skip to content</a>
    <div class="site-container app-header-inner">
      <Logo />
      <Nav />
    </div>
  </header>
</template>

<style scoped>
@reference '../../assets/css/main.css';

.app-header {
  position: relative;
  z-index: 40;
  flex-shrink: 0;
  width: 100%;
  padding-top: env(safe-area-inset-top);
}

.skip-link {
  position: absolute;
  left: 1.5rem;
  top: 0.75rem;
  z-index: 50;
  padding: 0.35rem 0.7rem;
  color: var(--color-fg-deeper);
  background: var(--color-bg);
  border: 1px solid var(--color-border);
  transform: translateY(-150%);
}

.skip-link:focus {
  transform: translateY(0);
}

.app-header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem 1rem;
  padding-block: 0.75rem;

  @variant sm {
    padding-block: 0.875rem;
  }
}
</style>

<template>
  <div class="app-shell">
    <LayoutAppHeader />
    <div class="app-scroll">
      <main
        class="page-content prose-site site-container relative flex-1 py-10"
      >
        <slot />
      </main>
      <LayoutAppFooter />
    </div>
  </div>
</template>

<style scoped>
.app-shell {
  display: grid;
  grid-template-rows: auto minmax(0, 1fr);
  height: 100dvh;
  overflow: hidden;
}

.app-scroll {
  min-height: 0;
  overflow-x: hidden;
  overflow-y: auto;
  overscroll-behavior: contain;
}

@media print {
  .app-shell {
    display: block;
    height: auto;
    overflow: visible;
  }

  .app-scroll {
    overflow: visible;
  }
}
</style>

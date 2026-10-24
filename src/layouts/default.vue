<template>
  <div class="app-shell">
    <Header />
    <div class="app-scroll">
      <main
        id="main-content"
        class="prose-site site-container flex-1 py-10"
        tabindex="-1"
      >
        <slot />
      </main>
      <Footer />
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
  display: flex;
  flex-direction: column;
  min-height: 0;
  overflow-x: hidden;
  overflow-y: auto;
  overscroll-behavior: contain;
  scrollbar-gutter: stable;
}

#main-content:focus {
  outline: none;
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

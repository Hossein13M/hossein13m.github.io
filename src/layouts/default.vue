<template>
  <div class="relative flex min-h-dvh flex-col">
    <LayoutAppHeader />
    <main
      class="page-content prose-site site-container relative z-10 flex-1 py-10"
    >
      <slot />
    </main>
    <LayoutAppFooter />
  </div>
</template>

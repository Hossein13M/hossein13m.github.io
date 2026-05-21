<template>
  <div class="relative flex min-h-dvh flex-col">
    <LayoutAppHeader />
    <main
      class="page-content prose-site relative z-10 flex-1 px-6 py-10 sm:px-8 sm:py-10"
    >
      <slot />
    </main>
    <LayoutAppFooter />
  </div>
</template>

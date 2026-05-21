<template>
  <div class="relative flex h-dvh flex-col overflow-hidden">
    <LayoutAppHeader />
    <main
      class="page-content prose-antfu relative z-10 flex min-h-0 flex-1 flex-col overflow-y-auto overscroll-contain px-6 py-10 sm:px-8"
    >
      <div class="flex-1">
        <slot />
      </div>
      <LayoutAppFooter />
    </main>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  error: {
    statusCode: number;
    message: string;
  };
}>();

usePageMeta({ title: 'Not Found' });
</script>

<template>
  <div class="flex min-h-dvh flex-col">
    <LayoutAppHeader />
    <main
      class="mx-auto flex max-w-5xl flex-1 flex-col items-center justify-center px-5 py-20 text-center"
    >
      <h1 class="text-6xl font-bold opacity-30">{{ error.statusCode }}</h1>
      <p class="mt-4 text-xl font-medium">You have been lost!</p>
      <p class="mt-2 opacity-60">{{ error.message }}</p>
      <NuxtLink
        to="/"
        class="mt-8 rounded-lg px-6 py-2.5 font-medium text-white"
        style="background: var(--color-accent)"
      >
        Go Home
      </NuxtLink>
    </main>
    <LayoutAppFooter />
  </div>
</template>

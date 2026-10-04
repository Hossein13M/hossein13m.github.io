<template>
  <div
    class="rounded-xl border p-5 backdrop-blur-sm"
    style="
      border-color: var(--color-border);
      background: var(--card-surface, var(--color-card));
    "
  >
    <slot />
  </div>
</template>

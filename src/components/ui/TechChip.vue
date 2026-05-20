<script setup lang="ts">
import { techIconPath } from '@/utils/techIcon';

const props = defineProps<{
  label: string;
  href?: string;
  iconUrl?: string;
}>();

const resolvedIcon = computed(() => props.iconUrl || techIconPath(props.label));
const iconFailed = ref(false);

const showIcon = computed(() => resolvedIcon.value && !iconFailed.value);

watch(
  () => [props.label, props.iconUrl],
  () => {
    iconFailed.value = false;
  }
);
</script>

<template>
  <component
    :is="href ? 'a' : 'span'"
    :href="href"
    :target="href ? '_blank' : undefined"
    :rel="href ? 'noopener noreferrer' : undefined"
    class="tech-chip"
  >
    <img
      v-if="showIcon"
      :src="resolvedIcon"
      alt=""
      width="16"
      height="16"
      class="tech-chip-icon"
      loading="lazy"
      decoding="async"
      @error="iconFailed = true"
    />
    <span class="tech-chip-label">{{ label }}</span>
  </component>
</template>

<style scoped>
.tech-chip {
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.2rem 0.45rem;
  font-size: 0.875rem;
  line-height: 1.1;
  border-radius: 0.25rem;
  border: none;
  background: color-mix(in srgb, var(--color-fg) 13%, transparent);
  color: var(--color-fg-light);
  text-decoration: none;
  cursor: pointer;
  transform: translateY(2px);
  transition:
    background-color 0.2s ease,
    color 0.2s ease;
}

.tech-chip:hover {
  background: color-mix(in srgb, var(--color-fg) 20%, transparent);
  color: var(--color-fg);
}

.tech-chip-icon {
  width: 1.1em;
  height: 1.1em;
  flex-shrink: 0;
  object-fit: contain;
  opacity: 0.85;
}

.tech-chip-label {
  white-space: nowrap;
}
</style>

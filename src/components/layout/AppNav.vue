<script setup lang="ts">
import { navigation, externalNav } from '@/data/navigation';
import { socialIconPath } from '@/utils/socialIcon';

const route = useRoute();
</script>

<template>
  <nav class="app-nav" aria-label="Main">
    <div class="nav-links">
      <NuxtLink
        v-for="item in navigation"
        :key="item.path"
        :to="item.path"
        prefetch-on="interaction"
        class="nav-link"
        :class="{ 'is-active': route.path === item.path }"
        :title="item.title"
        :aria-label="item.title"
      >
        <span>{{ item.title }}</span>
      </NuxtLink>

      <a
        v-for="item in externalNav"
        :key="item.url"
        :href="item.url"
        target="_blank"
        rel="noopener noreferrer"
        class="nav-link nav-link-icon-only"
        :title="item.title"
        :aria-label="item.title"
      >
        <img
          :src="socialIconPath(item.icon)"
          alt=""
          width="18"
          height="18"
          class="nav-icon"
          aria-hidden="true"
        />
      </a>
    </div>
  </nav>
</template>

<style scoped>
.app-nav {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  min-width: 0;
  flex: 1;
}

.nav-links {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-end;
  gap: 0.5rem 0.75rem;
}

.nav-link {
  display: inline-flex;
  align-items: center;
  font-size: 0.875rem;
  color: var(--color-fg);
  opacity: 0.6;
  cursor: pointer;
  transition: opacity 0.2s ease;
  outline: none;
}

.nav-link:hover,
.nav-link.is-active {
  opacity: 1;
}

.nav-link:hover .nav-icon,
.nav-link.is-active .nav-icon {
  opacity: 1;
}

.nav-link.is-active {
  font-weight: 500;
}

.nav-link-icon-only {
  padding: 0.15rem;
}

.nav-icon {
  display: block;
  width: 1.125rem;
  height: 1.125rem;
  flex-shrink: 0;
  opacity: 0.6;
  transition: opacity 0.2s ease;
}
</style>

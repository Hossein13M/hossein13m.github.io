<script setup lang="ts">
import type { Fn } from '@vueuse/core';

const r180 = Math.PI;
const r90 = Math.PI / 2;
const r15 = Math.PI / 12;
const canvasRef = ref<HTMLCanvasElement | null>(null);
const rootRef = ref<HTMLElement | null>(null);
const { random } = Math;

const start = ref<Fn>(() => {});
const branchLen = ref(6);
const stopped = ref(true);
const prefersReducedMotion = usePreferredReducedMotion();

const showTree = computed(() => prefersReducedMotion.value !== 'reduce');

let controls: ReturnType<typeof useRafFn> | undefined;
let lastSetupWidth = 0;
let lastSetupHeight = 0;
let bounds = { w: 0, h: 0 };
let drawCtx: CanvasRenderingContext2D | null = null;
let seedFromBottom: Fn | null = null;
let resizeObserver: ResizeObserver | null = null;
const MIN_CYCLE_MS = 30_000;
const SLOW_AFTER_MS = 45_000;
const HEIGHT_JITTER_PX = 64;

function viewportSize() {
  const visual = window.visualViewport;
  const w = Math.max(
    window.innerWidth,
    document.documentElement.clientWidth,
    Math.round(visual?.width ?? 0)
  );
  const h = Math.max(
    window.innerHeight,
    document.documentElement.clientHeight,
    Math.round(visual?.height ?? 0)
  );
  return { w, h };
}

function backingStore(
  canvas: HTMLCanvasElement,
  width: number,
  height: number,
  preserve?: HTMLCanvasElement
) {
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  canvas.width = Math.max(1, Math.round(dpr * width));
  canvas.height = Math.max(1, Math.round(dpr * height));
  const ctx = canvas.getContext('2d')!;
  if (preserve) {
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.drawImage(preserve, 0, 0);
  }
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  return ctx;
}

function polar2cart(x: number, y: number, r: number, theta: number) {
  return [x + r * Math.cos(theta), y + r * Math.sin(theta)] as const;
}

function strokeColor() {
  return (
    getComputedStyle(document.documentElement)
      .getPropertyValue('--color-tree-stroke')
      .trim() || '#88888825'
  );
}

function setup() {
  const canvas = canvasRef.value;
  if (!canvas || !showTree.value) return;

  const { w, h } = viewportSize();
  if (w <= 0 || h <= 0) return;
  lastSetupWidth = w;
  lastSetupHeight = h;
  bounds = { w, h };

  const ctx = backingStore(canvas, w, h);
  drawCtx = ctx;
  ctx.lineWidth = 1;
  ctx.strokeStyle = strokeColor();

  let steps: Fn[] = [];
  let prevSteps: Fn[] = [];
  let cycleStarted = performance.now();
  let slowed = false;

  const step = (x: number, y: number, rad: number, counter = { value: 0 }) => {
    const ctx = drawCtx;
    if (!ctx) return;
    const length = random() * branchLen.value;
    counter.value += 1;
    const [nx, ny] = polar2cart(x, y, length, rad);

    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(nx, ny);
    ctx.stroke();

    const rad1 = rad + random() * r15;
    const rad2 = rad - random() * r15;

    if (nx < -100 || nx > bounds.w + 100 || ny < -100 || ny > bounds.h + 100)
      return;

    const rate = slowed
      ? counter.value <= 30
        ? 0.45
        : 0.28
      : counter.value <= 30
        ? 0.8
        : 0.5;
    if (random() < rate) steps.push(() => step(nx, ny, rad1, counter));
    if (random() < rate) steps.push(() => step(nx, ny, rad2, counter));
  };

  const randomMiddle = () => random() * 0.6 + 0.2;

  const seedGrowth = () => {
    const seeds = [
      () => step(randomMiddle() * bounds.w, -5, r90),
      () => step(randomMiddle() * bounds.w, bounds.h + 5, -r90),
      () => step(-5, randomMiddle() * bounds.h, 0),
      () => step(bounds.w + 5, randomMiddle() * bounds.h, r180),
    ];
    steps.push(...(bounds.w < 500 ? seeds.slice(0, 2) : seeds));
  };

  seedFromBottom = () => {
    steps.push(() => step(randomMiddle() * bounds.w, bounds.h + 5, -r90));
  };

  const fadeSoftly = () => {
    const ctx = drawCtx;
    if (!ctx) return;
    ctx.save();
    ctx.globalAlpha = 0.16;
    ctx.fillStyle =
      getComputedStyle(document.documentElement)
        .getPropertyValue('--color-bg')
        .trim() || '#000';
    ctx.fillRect(0, 0, bounds.w, bounds.h);
    ctx.restore();
  };

  const fastInterval = 1000 / 40;
  const slowInterval = 1000 / 12;
  let lastTime = performance.now();

  const frame = () => {
    const now = performance.now();
    const elapsed = now - cycleStarted;
    slowed = elapsed >= SLOW_AFTER_MS;
    const interval = slowed ? slowInterval : fastInterval;
    if (now - lastTime < interval) return;
    prevSteps = steps;
    steps = [];
    lastTime = now;

    if (elapsed >= MIN_CYCLE_MS) {
      fadeSoftly();
      cycleStarted = now;
    }

    if (!prevSteps.length) {
      seedGrowth();
      stopped.value = false;
      return;
    }

    const continueChance = slowed ? 0.22 : 0.5;
    prevSteps.forEach((fn) => {
      if (random() < continueChance) steps.push(fn);
      else fn();
    });
  };

  controls?.pause();
  controls = useRafFn(frame, { immediate: false });

  start.value = () => {
    const ctx = drawCtx;
    if (!ctx) return;
    controls?.pause();
    ctx.clearRect(0, 0, bounds.w, bounds.h);
    ctx.lineWidth = 1;
    ctx.strokeStyle = strokeColor();
    prevSteps = [];
    steps = [];
    cycleStarted = performance.now();
    seedGrowth();
    controls?.resume();
    stopped.value = false;
  };

  start.value();
}

function expandHeight(nextH: number) {
  const canvas = canvasRef.value;
  const ctx = drawCtx;
  if (!canvas || !ctx || nextH <= bounds.h) return;

  const copy = document.createElement('canvas');
  copy.width = canvas.width;
  copy.height = canvas.height;
  copy.getContext('2d')!.drawImage(canvas, 0, 0);

  bounds.h = nextH;
  lastSetupHeight = nextH;
  drawCtx = backingStore(canvas, bounds.w, bounds.h, copy);
  drawCtx.lineWidth = 1;
  drawCtx.strokeStyle = strokeColor();
  seedFromBottom?.();
}

const onViewportChange = useDebounceFn(() => {
  if (!showTree.value) {
    teardown();
    return;
  }
  const { w, h } = viewportSize();
  if (Math.abs(w - lastSetupWidth) >= 12) {
    nextTick(() => setup());
    return;
  }
  if (h - lastSetupHeight >= HEIGHT_JITTER_PX) {
    expandHeight(h);
  }
}, 150);

function teardown() {
  controls?.pause();
  resizeObserver?.disconnect();
  resizeObserver = null;
  window.visualViewport?.removeEventListener('resize', onViewportChange);
}

onMounted(() => {
  if (showTree.value) nextTick(() => setup());

  resizeObserver = new ResizeObserver(() => onViewportChange());
  if (rootRef.value) resizeObserver.observe(rootRef.value);
  window.visualViewport?.addEventListener('resize', onViewportChange);
  window.addEventListener('resize', onViewportChange);
});

onUnmounted(() => {
  window.removeEventListener('resize', onViewportChange);
  teardown();
});

watch(showTree, (visible) => {
  if (!visible) {
    teardown();
    return;
  }
  nextTick(() => setup());
});

const maskStyle = 'radial-gradient(circle, transparent, black)';
</script>

<template>
  <div
    v-show="showTree"
    ref="rootRef"
    class="tree-background pointer-events-none fixed inset-0 overflow-hidden print:hidden"
    aria-hidden="true"
    :style="{
      zIndex: 0,
      maskImage: maskStyle,
      WebkitMaskImage: maskStyle,
    }"
  >
    <canvas ref="canvasRef" class="block h-full w-full" />
  </div>
</template>

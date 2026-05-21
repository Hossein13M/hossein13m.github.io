<script setup lang="ts">
import type { Fn } from '@vueuse/core';

const r180 = Math.PI;
const r90 = Math.PI / 2;
const r15 = Math.PI / 12;
const canvasRef = ref<HTMLCanvasElement | null>(null);
const size = reactive(useWindowSize());
const { random } = Math;

const start = ref<Fn>(() => {});
const branchLen = ref(6);
const stopped = ref(true);
const prefersReducedMotion = usePreferredReducedMotion();

const showTree = computed(() => prefersReducedMotion.value !== 'reduce');

let controls: ReturnType<typeof useRafFn> | undefined;
let restartTimer: ReturnType<typeof setTimeout> | undefined;

function initCanvas(canvas: HTMLCanvasElement, width: number, height: number) {
  const ctx = canvas.getContext('2d')!;
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  canvas.style.width = `${width}px`;
  canvas.style.height = `${height}px`;
  canvas.width = dpr * width;
  canvas.height = dpr * height;
  ctx.scale(dpr, dpr);
  return { ctx, width, height };
}

function polar2cart(x: number, y: number, r: number, theta: number) {
  return [x + r * Math.cos(theta), y + r * Math.sin(theta)] as const;
}

function setup() {
  const canvas = canvasRef.value;
  if (!canvas || !showTree.value) return;

  const w = size.width;
  const h = size.height;
  if (w <= 0 || h <= 0) return;

  const { ctx, width, height } = initCanvas(canvas, w, h);

  let steps: Fn[] = [];
  let prevSteps: Fn[] = [];

  const step = (x: number, y: number, rad: number, counter = { value: 0 }) => {
    const length = random() * branchLen.value;
    counter.value += 1;
    const [nx, ny] = polar2cart(x, y, length, rad);

    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(nx, ny);
    ctx.stroke();

    const rad1 = rad + random() * r15;
    const rad2 = rad - random() * r15;

    if (nx < -100 || nx > w + 100 || ny < -100 || ny > h + 100) return;

    const rate = counter.value <= 30 ? 0.8 : 0.5;
    if (random() < rate) steps.push(() => step(nx, ny, rad1, counter));
    if (random() < rate) steps.push(() => step(nx, ny, rad2, counter));
  };

  const interval = 1000 / 40;
  let lastTime = performance.now();

  const frame = () => {
    if (performance.now() - lastTime < interval) return;
    prevSteps = steps;
    steps = [];
    lastTime = performance.now();

    if (!prevSteps.length) {
      controls?.pause();
      stopped.value = true;
      scheduleRestart();
      return;
    }

    prevSteps.forEach((fn) => {
      if (random() < 0.5) steps.push(fn);
      else fn();
    });
  };

  controls?.pause();
  controls = useRafFn(frame, { immediate: false });

  const randomMiddle = () => random() * 0.6 + 0.2;

  start.value = () => {
    if (restartTimer) {
      clearTimeout(restartTimer);
      restartTimer = undefined;
    }
    controls?.pause();
    ctx.clearRect(0, 0, width, height);
    ctx.lineWidth = 1;
    ctx.strokeStyle =
      getComputedStyle(document.documentElement)
        .getPropertyValue('--color-tree-stroke')
        .trim() || '#88888825';
    prevSteps = [];
    steps = [
      () => step(randomMiddle() * w, -5, r90),
      () => step(randomMiddle() * w, h + 5, -r90),
      () => step(-5, randomMiddle() * h, 0),
      () => step(w + 5, randomMiddle() * h, r180),
    ];
    if (w < 500) steps = steps.slice(0, 2);
    controls?.resume();
    stopped.value = false;
  };

  start.value();
}

function scheduleRestart() {
  if (restartTimer) clearTimeout(restartTimer);
  restartTimer = setTimeout(() => {
    if (showTree.value && canvasRef.value) start.value();
  }, 1200);
}

function teardown() {
  if (restartTimer) {
    clearTimeout(restartTimer);
    restartTimer = undefined;
  }
  controls?.pause();
}

onMounted(() => {
  if (showTree.value) nextTick(() => setup());
});

watch(
  () => [size.width, size.height, showTree.value],
  () => {
    if (!showTree.value) {
      teardown();
      return;
    }
    nextTick(() => setup());
  }
);

onUnmounted(() => teardown());

const maskStyle = 'radial-gradient(circle, transparent, black)';
</script>

<template>
  <div
    v-show="showTree"
    class="tree-background pointer-events-none fixed inset-0 print:hidden"
    aria-hidden="true"
    :style="{
      zIndex: -1,
      maskImage: maskStyle,
      WebkitMaskImage: maskStyle,
    }"
  >
    <canvas ref="canvasRef" class="h-full w-full" />
  </div>
</template>

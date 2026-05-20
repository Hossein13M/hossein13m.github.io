export const colorMode = useColorMode();

export const isDark = computed(() => colorMode.value === 'dark');

export function toggleTheme(event?: MouseEvent) {
  const next = colorMode.value === 'dark' ? 'light' : 'dark';
  const prefersReduced = window.matchMedia(
    '(prefers-reduced-motion: reduce)'
  ).matches;
  const doc = document as Document & {
    startViewTransition?: (cb: () => void | Promise<void>) => {
      ready: Promise<void>;
    };
  };
  const canTransition = doc.startViewTransition && !prefersReduced;

  if (!canTransition || !event) {
    colorMode.value = next;
    return;
  }

  const x = event.clientX;
  const y = event.clientY;
  const endRadius = Math.hypot(
    Math.max(x, innerWidth - x),
    Math.max(y, innerHeight - y)
  );

  const transition = doc.startViewTransition!(async () => {
    colorMode.value = next;
    await nextTick();
  });

  transition.ready.then(() => {
    const clipPath = [
      `circle(0px at ${x}px ${y}px)`,
      `circle(${endRadius}px at ${x}px ${y}px)`,
    ];
    const isGoingDark = next === 'dark';
    document.documentElement.animate(
      { clipPath: isGoingDark ? clipPath : [...clipPath].reverse() },
      {
        duration: 400,
        easing: 'ease-out',
        fill: 'forwards',
        pseudoElement: isGoingDark
          ? '::view-transition-new(root)'
          : '::view-transition-old(root)',
      }
    );
  });
}

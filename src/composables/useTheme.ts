export const colorMode = useColorMode();

export const isDark = computed(() => colorMode.value === 'dark');

const THEME_TRANSITION_DURATION = 26;
const THEME_TRANSITION_EASING = 'cubic-bezier(0.2, 1, 0.2, 1)';
const THEME_TRANSITION_RADIUS_MULTIPLIER = 1.35;

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
  const endRadius =
    Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y)) *
    THEME_TRANSITION_RADIUS_MULTIPLIER;

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
        duration: THEME_TRANSITION_DURATION,
        easing: THEME_TRANSITION_EASING,
        fill: 'forwards',
        pseudoElement: isGoingDark
          ? '::view-transition-new(root)'
          : '::view-transition-old(root)',
      }
    );
  });
}

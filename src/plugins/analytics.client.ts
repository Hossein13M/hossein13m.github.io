const MEASUREMENT_ID = 'G-1QNEEEHF99';

export default defineNuxtPlugin(() => {
  let loaded = false;

  const loadAnalytics = () => {
    if (loaded) return;
    loaded = true;

    const dataLayer = (window.dataLayer ||= []);
    const gtag = (...args: unknown[]) => dataLayer.push(args);

    gtag('js', new Date());
    gtag('config', MEASUREMENT_ID);

    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`;
    document.head.appendChild(script);

    interactionEvents.forEach((event) =>
      window.removeEventListener(event, loadAnalytics)
    );
  };

  const interactionEvents = ['pointerdown', 'keydown', 'scroll'] as const;
  interactionEvents.forEach((event) =>
    window.addEventListener(event, loadAnalytics, {
      once: true,
      passive: true,
    })
  );
});

declare global {
  interface Window {
    dataLayer?: unknown[][];
  }
}

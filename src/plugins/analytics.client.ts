declare global {
  interface Window {
    dataLayer?: unknown[];
  }
}

const MEASUREMENT_ID = 'G-1QNEEEHF99';

export default defineNuxtPlugin(() => {
  let loaded = false;

  const loadAnalytics = () => {
    if (loaded) return;
    loaded = true;

    const dataLayer = (window.dataLayer ||= []);

    function gtag(..._args: unknown[]) {
      // gtag.js ignores a real array. The command has to be an Arguments object.
      // eslint-disable-next-line prefer-rest-params
      dataLayer.push(arguments);
    }

    gtag('js', new Date());
    gtag('config', MEASUREMENT_ID);

    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`;
    document.head.appendChild(script);

    window.removeEventListener('pointerdown', loadAnalytics);
    window.removeEventListener('keydown', loadAnalytics);
    document.removeEventListener('scroll', loadAnalytics, true);
  };

  window.addEventListener('pointerdown', loadAnalytics, {
    once: true,
    passive: true,
  });
  window.addEventListener('keydown', loadAnalytics, {
    once: true,
    passive: true,
  });
  // Scrolling happens inside .app-scroll, so a window scroll listener never runs.
  document.addEventListener('scroll', loadAnalytics, {
    capture: true,
    once: true,
    passive: true,
  });
});

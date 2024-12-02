importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js');

const { precacheAndRoute, cleanupOutdatedCaches } = workbox.precaching;

precacheAndRoute([
  { url: 'index.html', revision: null },
  { url: 'syles/index.css', revision: null },
  { url: 'scripts/index.js', revision: null },
  { url: 'icons/icon-192x192.png', revision: null },
  { url: 'icons/icon-512x512.png', revision: null },
], { cleanUrls: false });

cleanupOutdatedCaches();

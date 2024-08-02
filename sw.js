const cacheName = 'markdown-pwa-cache-v1';
const resourcesToCache = [
  '/',
  '/README.md',
  '/script.js',
  '/assets/icons/final-imag.jpg'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(cacheName)
      .then(cache => cache.addAll(resourcesToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});

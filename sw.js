const cacheName = 'ishmeet-codes-cache-v1';
const resourcesToCache = [
  '/',
  '/index.html',
  '/path/to/your/styles.css',
  '/path/to/your/script.js',
  '/path/to/icon-192x192.png',
  '/path/to/icon-512x512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(cacheName)
      .then(cache => {
        return cache.addAll(resourcesToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});

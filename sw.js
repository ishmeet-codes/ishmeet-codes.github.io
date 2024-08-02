const cacheName = 'ishmeet-codes-cache-v1';
const resourcesToCache = [
  '/',
  'ishmeet-codes.github.io/index.html',
  'ishmeet-codes.github.io/script.js',
  'ishmeet-codes.github.io/Dex/final-image (1).jpg'
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

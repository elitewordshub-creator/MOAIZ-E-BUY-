const CACHE_NAME = 'moaiz-ebuy-v1';
const urlsToCache = [
  '/MOAIZ-E-BUY-/',
  '/MOAIZ-E-BUY-/index.html',
  '/MOAIZ-E-BUY-/manifest.json'
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});

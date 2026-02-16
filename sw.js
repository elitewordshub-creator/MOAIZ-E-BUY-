const CACHE_NAME = 'moaiz-ebuy-v1';
const urlsToCache = [
  '/MOAIZ-E-BUY-/',
  '/MOAIZ-E-BUY-/index.html',
  '/MOAIZ-E-BUY-/manifest.json'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});

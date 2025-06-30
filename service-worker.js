
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('fixol-cache').then((cache) => {
      return cache.addAll([
        './index.html',
        './styles.css',
        './step2.html',
        './step3.html',
        './step4.html'
      ]);
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    clients.claim()
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});

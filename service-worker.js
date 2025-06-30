
self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('fixol-store').then(function(cache) {
      return cache.addAll([
        'index.html',
        'styles.css',
        'step2.html',
        'step3.html',
        'step4.html'
      ]);
    })
  );
});

self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});

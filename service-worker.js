const CACHE_NAME = 'math-kangaroo-v3';

// Static assets that rarely change — cache first, fast load
const STATIC_ASSETS = [
  '/icons/icon-192.svg',
  '/icons/icon-512.svg',
  'https://fonts.googleapis.com/css2?family=Fredoka+One&family=Nunito:wght@400;600;700;800&display=swap'
];

// App files — network first so updates are picked up immediately
const NETWORK_FIRST = [
  '/',
  '/index.html',
  '/style.css',
  '/app.js',
  '/questions.js',
  '/manifest.json'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll([...STATIC_ASSETS, ...NETWORK_FIRST]))
  );
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);
  const isNetworkFirst = NETWORK_FIRST.some(path => url.pathname === path || url.pathname.endsWith(path));

  if (isNetworkFirst) {
    // Network first: try to fetch fresh, fall back to cache if offline
    event.respondWith(
      fetch(event.request).then(response => {
        if (response && response.status === 200) {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
        }
        return response;
      }).catch(() => caches.match(event.request))
    );
  } else {
    // Cache first: static assets like icons and fonts
    event.respondWith(
      caches.match(event.request).then(cached => {
        if (cached) return cached;
        return fetch(event.request).then(response => {
          if (response && response.status === 200 && response.type !== 'opaque') {
            const clone = response.clone();
            caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
          }
          return response;
        });
      })
    );
  }
});

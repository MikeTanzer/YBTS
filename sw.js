/* Yako by the Sea — service worker (offline + installable PWA) */
const CACHE = 'yako-v3';
const CORE = [
  './',
  './keyboard-fun.html',
  './manifest.webmanifest',
  './ui/favicon.png',
  './ui/icon-192.png',
  './ui/icon-512.png',
  './ui/icon-maskable-512.png'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE).then((c) => c.addAll(CORE)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  // Never intercept media or ranged requests — let the range-capable server stream them
  // directly so video seeking / the ping-pong background loop keeps working.
  if (req.headers.has('range')) return;
  if (req.destination === 'video' || req.destination === 'audio') return;

  // Network-first for everything else: always show the latest when online,
  // fall back to cache only when offline.
  e.respondWith(
    fetch(req).then((res) => {
      if (res && res.status === 200 && (res.type === 'basic' || res.type === 'cors')) {
        const copy = res.clone();
        caches.open(CACHE).then((c) => c.put(req, copy));
      }
      return res;
    }).catch(() => caches.match(req).then((h) =>
      h || (req.mode === 'navigate' ? caches.match('./keyboard-fun.html') : undefined)
    ))
  );
});

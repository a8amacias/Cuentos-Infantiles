const CACHE = 'cuentos-v1';
const IMAGENES = [
  'caperucita1.jpg',
  'caperucitan2.jpg',
  'cochinitos1.jpg',
  'cochinitos2.jpg',
  'Pinocho1.jpg',
  'Pinocho2.jpg',
  'portada-192.jpg',
  'portada-512.jpg',
   'niños1.jpg',
   'niños2.jpg',
  'saltarin.jpg',
  'saltarin1.jpg',
  'ratita1.jpg',
  'ratita2.jpg',
  'cucarachin1.jpg',
  'cucarachin2.jpg',
];

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE).then((cache) => cache.addAll(IMAGENES)));
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => Promise.all(
      keys.filter((key) => key !== CACHE).map((key) => caches.delete(key))
    ))
  );
});

self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);

  if (url.pathname.endsWith('.html') || url.pathname.endsWith('/')) {
    event.respondWith(fetch(event.request));
    return;
  }

  event.respondWith(
    caches.match(event.request).then((resp) => resp || fetch(event.request))
  );
});

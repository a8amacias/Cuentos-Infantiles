const CACHE = 'cuentos-v1';
const ARCHIVOS = [
  'index.html',
  'Caperucita.html',
  'Cochinitos.html',
  'Pinocho.html',
  'niños.html',
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
];

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE).then((cache) => cache.addAll(ARCHIVOS)));
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((resp) => resp || fetch(event.request))
  );
});

const CACHE = 'cuentos-v1';
const ARCHIVOS = [
  'index.html',
  'Caperucita.html',
  'Cochinitos.html',
  'Pinocho.html',
  'Imagenes/caperucita1.jpg',
  'Imagenes/caperucitan2.jpg',
  'Imagenes/cochinitos1.jpg',
  'Imagenes/cochinitos2.jpg',
  'Imagenes/Pinocho1.jpg',
  'Imagenes/Pinocho2.jpg',
  'Imagenes/portada-192.jpg',
  'Imagenes/portada-512.jpg',
   'Imagenes/niños1.jpg',
   'Imagenes/niños2.jpg',
];

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE).then((cache) => cache.addAll(ARCHIVOS)));
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((resp) => resp || fetch(event.request))
  );
});

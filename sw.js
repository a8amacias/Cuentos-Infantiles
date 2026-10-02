const CACHE = 'cuentos-v2';
const RECURSOS = [
  'index.html',
  'Jack.html',
  'Caperucita.html',
  'Cochinitos.html',
  'Jack.html',
  'Pinocho.html',
  'avestruz.html',
  'burbujas.html',
  'carrera.html',
  'cucarachin.html',
  'gato.html',
  'gravedad.html',
  'luna.html',
  'montaña.html',
  'niños.html',
  'pastorcito.html',
  'ratita.html',
  'ricitos.html',
  'saltarin.html',
  'caperucita1.jpg',
  'caperucitan2.jpg',
  'cochinitos1.jpg',
  'cochinitos2.jpg',
  'Pinocho1.jpg',
  'Pinocho2.jpg',
  'portada-192.png',
  'portada-512.png',
   'niños1.jpg',
   'niños2.jpg',
  'saltarin.jpg',
  'saltarin1.jpg',
  'ratita1.jpg',
  'ratita2.jpg',
  'cucarachin1.jpg',
  'cucarachin2.jpg',
  'ricitos.jpg',
  'ricitos2.jpg',
  'gato1.png',
  'gato2.jpg',
  'montaña11.png',
  'montaña2.png',
  'avestruz1.jpg',
  'avestruz2.jpg',
  'gravedad1.jpg',
  'gravedad2.jpg',
  'carreras1.jpg',
  'carreras2.jpg',
  'burbujita1.jpg',
  'burbujita2.jpg',
];
self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE).then((cache) => cache.addAll(RECURSOS)));
  self.skipWaiting();
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((resp) => resp || fetch(event.request).then((res) => {
      const copy = res.clone();
      caches.open(CACHE).then((cache) => cache.put(event.request, copy));
      return res;
    }))
  );
});




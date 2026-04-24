const CACHE = 'frankel-phonics-v2';
const ASSETS = [
  './',
  './index.html',
  './dashboard.html',
  './planner.html',
  './curriculum.js',
  './worksheets.js',
  './jp-data.js',
  './manifest.json',
  './icons/icon.svg',
  './icons/icon-180.png',
  './worksheets/01-intro.jpg',
  './worksheets/02-y-holly.jpg',
  './worksheets/03-ae.jpg',
  './worksheets/04-ee.jpg',
  './worksheets/05-ie.jpg',
  './worksheets/06-oe.jpg',
  './worksheets/07-ue.jpg',
  './worksheets/08-ay.jpg',
  './worksheets/09-ea.jpg',
  './worksheets/10-y-fly.jpg',
  './worksheets/11-igh.jpg',
  './worksheets/12-ow-snow.jpg',
  './worksheets/13-ow-owl.jpg',
  './worksheets/14-ir.jpg',
  './worksheets/15-ur.jpg',
  './worksheets/16-strips-1.jpg',
  './worksheets/17-strips-2.jpg',
  './worksheets/18-strips-3.jpg',
  './worksheets/19-chart.jpg'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE).then(cache => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(cached => cached || fetch(event.request))
  );
});

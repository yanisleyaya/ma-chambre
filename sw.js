// Garde une copie de la page, des meubles et de la 3D : l'appli s'ouvre même sans Internet.
// Chaque ouverture affiche la copie gardée, puis la met à jour en arrière-plan.
const CACHE = 'ma-chambre-v3';

self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys()
    .then(cles => Promise.all(cles.filter(c => c !== CACHE).map(c => caches.delete(c))))
    .then(() => self.clients.claim()));
});

// La page envoie la liste de ce qu'elle a chargé avant que ce fichier ne soit actif.
self.addEventListener('message', e => {
  const urls = (e.data && e.data.garder) || [];
  e.waitUntil(caches.open(CACHE).then(c => Promise.all(urls.map(u =>
    c.match(u).then(deja => deja || c.add(u).catch(() => {}))))));
});

self.addEventListener('fetch', e => {
  const r = e.request;
  if (r.method !== 'GET' || !/^https?:/.test(r.url)) return;
  e.respondWith(caches.open(CACHE).then(async c => {
    const garde = await c.match(r, { ignoreSearch: true });
    const reseau = fetch(r).then(rep => {
      if (rep.ok || rep.type === 'opaque') c.put(r, rep.clone());
      return rep;
    });
    if (garde) { e.waitUntil(reseau.catch(() => {})); return garde; }
    return reseau;
  }));
});

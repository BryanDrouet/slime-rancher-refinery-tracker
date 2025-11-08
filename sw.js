
const CACHE_NAME = 'slime-rancher-images-v1';
const CACHE_ASSETS = [
    '/assets/icon.png',
    '/assets/fr.png',
    '/assets/gb.png',
    '/assets/es.png'
];


self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            console.log('Cache ouvert');
            return cache.addAll(CACHE_ASSETS);
        })
    );
    self.skipWaiting();
});


self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (cacheName !== CACHE_NAME) {
                        console.log('Suppression ancien cache:', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
    self.clients.claim();
});


self.addEventListener('fetch', (event) => {
    const url = new URL(event.request.url);
    
    
    if (url.pathname.endsWith('.png') || url.pathname.includes('/assets/resources/')) {
        event.respondWith(
            caches.match(event.request).then((response) => {
                if (response) {
                    
                    return response;
                }
                
                
                return fetch(event.request).then((response) => {
                    
                    if (!response || response.status !== 200 || response.type !== 'basic') {
                        return response;
                    }
                    
                    const responseToCache = response.clone();
                    caches.open(CACHE_NAME).then((cache) => {
                        cache.put(event.request, responseToCache);
                    });
                    
                    return response;
                });
            })
        );
    } else {
        
        event.respondWith(fetch(event.request));
    }
});

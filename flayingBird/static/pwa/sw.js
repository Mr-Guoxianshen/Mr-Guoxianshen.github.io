// importScripts("workbox-sw.js");
var cacheStorageKey = 'pwa-demo-3'
var cacheList=[
  '../../index.html',
  '../css/reset.css',
  '../css/main.css',
  '../images/logo.png',
  '../images/logo_2.png',
  '../images/timg.jpg',
  '../images/back.png',
]
self.addEventListener('install',e =>{
  e.waitUntil(
    caches.open(cacheStorageKey)
    .then(cache => cache.addAll(cacheList))
    .then(() => self.skipWaiting())
  )
})
self.addEventListener('fetch',function(e){
  e.respondWith(
    caches.match(e.request).then(function(response){
      if(response != null){
        return response
      }
      let requestToCache = e.request.clone();
      return fetch(requestToCache).then(response => {
        // 出错
        if(!response || response.status !==200){
          return response;
        }
        // response ok
        let responseToCache = response.clone();
        caches.open(cacheStorageKey).then(cache => {
          // 添加到缓存列表
          cache.put(requestToCache,responseToCache);
        });
        return response;
      });
    })
  )
})
self.addEventListener('activate',function(e){
  e.waitUntil(
    //获取所有cache名称
    caches.keys().then(cacheNames => {
      return Promise.all(
        // 获取所有不同于当前版本名称cache下的内容
        cacheNames.filter(cacheNames => {
          return cacheNames !== cacheStorageKey
        }).map(cacheNames => {
          return caches.delete(cacheNames)
        })
      )
    }).then(() => {
      return self.clients.claim()
    })
  )
})

!function(){"use strict";const e=1650599838991,t=`cache${e}`,n=["/client/client.5f4f6faa.js","/client/inject_styles.5607aec6.js","/client/index.925f259c.js","/client/index.8c495e3a.js","/client/Board.8ed97a34.js","/client/displaced.d4cedfee.js","/client/Post.d496c5f6.js","/client/index.0ca5b776.js","/client/emotional-ups-and-downs.0b28a882.js","/client/software-engineering.25986f53.js","/client/unconscious-judgment.25397c41.js","/client/act-engineering.9aa45a3a.js","/client/deux-message.387a2a30.js","/client/act-agile.7d1538bb.js","/client/index.82e742a8.js","/client/press-the-shutter-of-the-writing.0cb02fe1.js","/client/responsibility-and-authority.c3e39891.js","/client/walking-through-the-past.17afe526.js","/client/energy-flow-direction.1fa76f15.js","/client/incomplete-writing.957a6b2c.js","/client/urge-to-do-quickly.aac88e36.js","/client/grass-planting.fa53dc8c.js","/client/even-too-busy.0c08505f.js","/client/promise.3f5aa301.js"].concat(["/service-worker-index.html","/favicon.png","/global.css","/google64eadc65d464d244.html","/logo-192.png","/logo-512.png","/manifest.json","/navera8174f25d63d590f89d7a1fc30dda9f2.html","/robots.txt","/rss.xml","/sitemap.xml"]),s=new Set(n);self.addEventListener("install",(e=>{e.waitUntil(caches.open(t).then((e=>e.addAll(n))).then((()=>{self.skipWaiting()})))})),self.addEventListener("activate",(e=>{e.waitUntil(caches.keys().then((async e=>{for(const n of e)n!==t&&await caches.delete(n);self.clients.claim()})))})),self.addEventListener("fetch",(t=>{if("GET"!==t.request.method||t.request.headers.has("range"))return;const n=new URL(t.request.url),c=n.protocol.startsWith("http"),a=n.hostname===self.location.hostname&&n.port!==self.location.port,i=n.host===self.location.host&&s.has(n.pathname),l="only-if-cached"===t.request.cache&&!i;!c||a||l||t.respondWith((async()=>i&&await caches.match(t.request)||async function(t){const n=await caches.open(`offline${e}`);try{const e=await fetch(t);return n.put(t,e.clone()),e}catch(e){const s=await n.match(t);if(s)return s;throw e}}(t.request))())}))}();

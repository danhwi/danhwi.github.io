!function(){"use strict";const e=1638410304479,t=`cache${e}`,n=["/client/client.0ccdf8ac.js","/client/inject_styles.5607aec6.js","/client/index.d4f8bf87.js","/client/index.64605320.js","/client/Board.50913dbd.js","/client/index.c9beb182.js","/client/emotional-ups-and-downs.faadeaca.js","/client/Post.fe456f6b.js","/client/software-engineering.f778839c.js","/client/unconscious-judgment.96258da3.js","/client/act-engineering.fb90b43b.js","/client/deux-message.966afff7.js","/client/act-agile.3321e05c.js","/client/index.e4032415.js","/client/press-the-shutter-of-the-writing.926f4eaf.js","/client/walking-through-the-past.f063da43.js","/client/urge-to-do-quickly.38c70a4e.js","/client/grass-planting.93a9b7e5.js","/client/even-too-busy.412869d8.js"].concat(["/service-worker-index.html","/favicon.png","/global.css","/google64eadc65d464d244.html","/logo-192.png","/logo-512.png","/manifest.json","/navera8174f25d63d590f89d7a1fc30dda9f2.html","/robots.txt","/rss.xml","/sitemap.xml"]),s=new Set(n);self.addEventListener("install",(e=>{e.waitUntil(caches.open(t).then((e=>e.addAll(n))).then((()=>{self.skipWaiting()})))})),self.addEventListener("activate",(e=>{e.waitUntil(caches.keys().then((async e=>{for(const n of e)n!==t&&await caches.delete(n);self.clients.claim()})))})),self.addEventListener("fetch",(t=>{if("GET"!==t.request.method||t.request.headers.has("range"))return;const n=new URL(t.request.url),c=n.protocol.startsWith("http"),a=n.hostname===self.location.hostname&&n.port!==self.location.port,i=n.host===self.location.host&&s.has(n.pathname),l="only-if-cached"===t.request.cache&&!i;!c||a||l||t.respondWith((async()=>i&&await caches.match(t.request)||async function(t){const n=await caches.open(`offline${e}`);try{const e=await fetch(t);return n.put(t,e.clone()),e}catch(e){const s=await n.match(t);if(s)return s;throw e}}(t.request))())}))}();

!function(){"use strict";const e=1637461512079,t=`cache${e}`,n=["/client/client.13e98ca1.js","/client/inject_styles.5607aec6.js","/client/index.e7cb7010.js","/client/index.2b6c4dc3.js","/client/Board.6ef5367a.js","/client/index.6da63033.js","/client/emotional-ups-and-downs.134cbbdc.js","/client/Post.dac91b51.js","/client/software-engineering.74f0b88e.js","/client/unconscious-judgment.7782f679.js","/client/act-engineering.7f23c68e.js","/client/deux-message.466dc2dd.js","/client/act-agile.8a95423e.js","/client/index.6e458bf2.js","/client/press-the-shutter-of-the-writing.e2d82cc1.js","/client/walking-through-the-past.c4eeb104.js","/client/grass-planting.9d19d1f0.js","/client/even-too-busy.6fed28ed.js"].concat(["/service-worker-index.html","/favicon.png","/global.css","/google64eadc65d464d244.html","/logo-192.png","/logo-512.png","/manifest.json","/navera8174f25d63d590f89d7a1fc30dda9f2.html","/robots.txt","/rss.xml","/sitemap.xml"]),s=new Set(n);self.addEventListener("install",(e=>{e.waitUntil(caches.open(t).then((e=>e.addAll(n))).then((()=>{self.skipWaiting()})))})),self.addEventListener("activate",(e=>{e.waitUntil(caches.keys().then((async e=>{for(const n of e)n!==t&&await caches.delete(n);self.clients.claim()})))})),self.addEventListener("fetch",(t=>{if("GET"!==t.request.method||t.request.headers.has("range"))return;const n=new URL(t.request.url),c=n.protocol.startsWith("http"),a=n.hostname===self.location.hostname&&n.port!==self.location.port,i=n.host===self.location.host&&s.has(n.pathname),l="only-if-cached"===t.request.cache&&!i;!c||a||l||t.respondWith((async()=>i&&await caches.match(t.request)||async function(t){const n=await caches.open(`offline${e}`);try{const e=await fetch(t);return n.put(t,e.clone()),e}catch(e){const s=await n.match(t);if(s)return s;throw e}}(t.request))())}))}();

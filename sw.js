// Offline support: app files cached on install; audio cached as you hear it.
const V="pw-v9",SHELL=["/","/index.html","/style.css","/app.js","/data.js","/audio.js","/config.js","/feat.js","/icon.svg","/manifest.webmanifest","/ios/Text%20Substitutions.plist","/ios/patwa-wave-text-replacements.txt","/ios/README.md"];
self.addEventListener("install",e=>{e.waitUntil(caches.open(V).then(c=>c.addAll(SHELL)));self.skipWaiting()});
self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!=V&&x!="pw-audio").map(x=>caches.delete(x)))));self.clients.claim()});
self.addEventListener("fetch",e=>{const r=e.request;if(r.method!="GET")return;const u=new URL(r.url);
if(u.pathname.endsWith(".mp3")){e.respondWith(caches.open("pw-audio").then(c=>c.match(r.url).then(m=>m||fetch(r.url,{mode:"cors"}).then(res=>{if(res.ok)c.put(r.url,res.clone());return res}))).catch(()=>fetch(r)));return}
if(u.origin!=location.origin)return;
e.respondWith(fetch(r).then(res=>{if(res.ok){const cl=res.clone();caches.open(V).then(c=>c.put(r,cl))}return res}).catch(()=>caches.match(r).then(m=>m||caches.match("/"))))});

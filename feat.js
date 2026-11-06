/* Patwa Wave extra features: pictures, read-along, smart review (SM-2), goals & badges, report, tutor. Free, offline, no keys. */
/* ---------- 1. picture cards ---------- */
const EMO=[[/hungry|eat everything/i,"😋"],[/happy|glad|feel good|great|well done|laugh/i,"😊"],[/angry|upset|fed up|annoyed|ugh/i,"😠"],[/tired|sleep/i,"😴"],[/scared|ghost/i,"👻"],[/sick|feel well|headache/i,"🤒"],[/sorry|embarrass/i,"😳"],[/stress|worri|nervous/i,"😟"],[/don't worry|calm|relax|peace/i,"😌"],[/love/i,"❤️"],[/don't like/i,"👎"],[/lonely/i,"🥺"],[/excit/i,"🤩"],[/proud/i,"🏅"],[/jealous|envious/i,"😒"],
[/grandma/i,"👵"],[/mom/i,"👩"],[/dad/i,"👨"],[/children|kids/i,"🧒"],[/child|young/i,"🧒"],[/boy/i,"👦"],[/girl/i,"👧"],[/friend|brother|sister|cousin/i,"🤝"],[/nobody/i,"🚫"],[/somebody|who/i,"🧑"],
[/head\b/i,"🗣️"],[/eye/i,"👁️"],[/mouth/i,"👄"],[/teeth/i,"🦷"],[/tongue/i,"👅"],[/finger/i,"☝️"],[/hand|arm|hold/i,"✋"],[/foot|leg|knee/i,"🦵"],[/stomach|belly|full/i,"🤰"],[/nose/i,"👃"],[/hair/i,"💇"],[/heart/i,"❤️"],[/back|shoulder|chest|skin/i,"🧍"],
[/t-shirt|shirt|vest|jersey/i,"👕"],[/dress/i,"👗"],[/trouser/i,"👖"],[/sandal|flip/i,"🩴"],[/shoe/i,"👟"],[/hat|cap/i,"🧢"],[/underwear/i,"🩲"],[/sharp|nicely/i,"😎"],[/clothes/i,"👚"],
[/chicken/i,"🍗"],[/goat soup|soup|stew/i,"🍲"],[/goat/i,"🐐"],[/fish|cod/i,"🐟"],[/rice/i,"🍚"],[/pastry|bread|cake|tart|dumpling|flatbread/i,"🍞"],[/greens|spinach/i,"🥬"],[/plantain|banana/i,"🍌"],[/avocado/i,"🥑"],[/mango/i,"🥭"],[/coconut/i,"🥥"],[/drink|sorrel/i,"🥤"],[/water is cut/i,"🚱"],[/water/i,"💧"],[/main dish|food|tastes/i,"🍽️"],[/fruit/i,"🍈"],
[/kitchen|cook|pot/i,"🍳"],[/porch|house|home|room/i,"🏠"],[/bed/i,"🛏️"],[/fridge/i,"🧊"],[/roof/i,"🏚️"],[/gate/i,"🚪"],[/power|light/i,"💡"],[/sweep/i,"🧹"],[/bucket/i,"🪣"],
[/wind/i,"🌬️"],[/cold/i,"🥶"],[/hot/i,"🥵"],[/rain/i,"🌧️"],[/sun/i,"☀️"],[/thunder|lightning/i,"⛈️"],[/hurricane/i,"🌀"],[/river/i,"🏞️"],[/sea/i,"🌊"],[/plant|countryside/i,"🌿"],[/moon|night/i,"🌙"],[/weather/i,"🌤️"],[/dust/i,"💨"],
[/cow/i,"🐄"],[/pig/i,"🐖"],[/rat|mongoose/i,"🐀"],[/lizard|gecko/i,"🦎"],[/owl/i,"🦉"],[/vulture/i,"🦅"],[/hummingbird/i,"🐦"],[/firefly/i,"✨"],[/cockroach/i,"🪳"],[/mosquito/i,"🦟"],[/dog/i,"🐕"],[/cat\b/i,"🐈"],[/spider/i,"🕷️"],
[/run/i,"🏃"],[/jump/i,"🤸"],[/sit/i,"🪑"],[/stop|wait|hold on/i,"✋"],[/listen|hear/i,"👂"],[/say|speak|chant/i,"🗣️"],[/give|bring|take/i,"🤲"],[/throw/i,"🤾"],[/hit|push|break|broke/i,"💥"],[/play/i,"🎮"],[/find|see|watch|look/i,"👀"],[/learn|remember|understand|know/i,"🧠"],[/cry/i,"😢"],[/go away|leave|going|go\b|arrive|coming|let's go/i,"🚶"],[/visit|meet|contact/i,"👋"],
[/how much|money|payday|lunch money/i,"💰"],[/time|morning|today|tomorrow|yesterday|week|now|quick|long|every day|once/i,"🕒"],[/\?/,"❓"],
[/teacher/i,"🧑‍🏫"],[/school|lesson|class/i,"🏫"],[/book/i,"📘"],[/exam|passed/i,"📝"],[/work|job|boss|hustle/i,"💼"],[/late/i,"⏰"],[/rude|cheeky|silly/i,"😜"],
[/left/i,"⬅️"],[/right\b|straight/i,"➡️"],[/up there/i,"⬆️"],[/down there/i,"⬇️"],[/here/i,"📍"],[/far|near/i,"📏"],[/town|store|shop/i,"🏪"],[/lost/i,"🧭"],[/taxi|car/i,"🚕"],
[/music|song|beat|rhythm|reggae|dancehall|ska|mento|dub|dj|speaker/i,"🎵"],[/dance/i,"💃"],[/god/i,"🙏"],[/police|system/i,"🚓"],[/party/i,"🎉"],[/gossip/i,"💬"],[/strong|mighty/i,"💪"],
[/hi\b|hello|hey|good morning|good evening|bye|later|take care|safe/i,"👋"],[/thanks|no problem/i,"🙏"],[/okay|alright|all good|yes|fine/i,"👍"],[/no\b|don't|didn't|not|can't|never/i,"🚫"]];
const NUMS={one:"1️⃣",two:"2️⃣",three:"3️⃣",four:"4️⃣",five:"5️⃣",six:"6️⃣",seven:"7️⃣",eight:"8️⃣",nine:"9️⃣",ten:"🔟",half:"½"};
const CATE={"Greetings":"👋","Feelings":"😊","Family & People":"👪","Body":"🧍","Clothes":"👕","Food":"🍽️","Home":"🏠","Weather & Nature":"🌤️","Animals":"🐾","Common Verbs":"🏃","Questions":"❓","Daily Life":"🗓️","School & Work":"🏫","Directions":"🧭","Time & Numbers":"🔢","Grammar Basics":"🧩","Common Sentences":"💬","Conversations":"💬","Music & Culture":"🎵","Slang & Expressions":"😎","Proverbs":"📜"};
function emo(w){const e=w.e.toLowerCase();if(NUMS[e])return NUMS[e];if(w.c=="Time & Numbers"&&/teen|twenty|thirty|hundred|thousand|eleven|twelve/.test(e))return"🔢";if(w.c=="Grammar Basics")return"🧩";if(w.c=="Proverbs")return"📜";for(const[r,m]of EMO)if(r.test(w.e))return m;return CATE[w.c]||"🌊"}
function pic(w){const m=S.pics||"big";if(m=="off")return"";return `<div class="pic ${m}" aria-hidden="true">${emo(w)}</div>`}
/* ---------- 4. read-along ---------- */
function ra(t){return `<span class="ra" data-ra="${esc(t)}">${String(t).split(/(\s+)/).map(p=>/\s/.test(p)?p:`<span>${esc(p)}</span>`).join("")}</span>`}
function readAlong(t){document.querySelectorAll(".ra span.hl").forEach(s=>s.classList.remove("hl"));const els=[...document.querySelectorAll(".ra")].filter(e=>e.dataset.ra==t);if(!els.length)return;
const step=()=>{const d=player.duration;if(!d||!isFinite(d))return;const f=Math.min(player.currentTime/d,.999);els.forEach(e=>{const sp=e.querySelectorAll("span"),i=Math.floor(f*sp.length);sp.forEach((s,k)=>s.classList.toggle("hl",k==i))})};
player.ontimeupdate=step;player.onended=()=>els.forEach(e=>e.querySelectorAll("span").forEach(s=>s.classList.remove("hl")))}
/* ---------- 3. smart review: SM-2 ---------- */
function srs(w,q){S.srs=S.srs||{};const r=S.srs[w.id]||{ef:2.5,n:0,iv:0,due:0};
if(q<3){r.n=0;r.iv=1}else{r.n++;r.iv=r.n==1?1:r.n==2?6:Math.round(r.iv*r.ef)}
r.ef=Math.max(1.3,r.ef+(.1-(5-q)*(.08+(5-q)*.02)));r.due=Date.now()+(q<3?10*60e3:r.iv*864e5);S.srs[w.id]=r;
S.hard=S.hard||[];const i=S.hard.indexOf(w.id);if(q<3&&i<0)S.hard.push(w.id);if(q>=4&&i>=0&&r.n>=2)S.hard.splice(i,1)}
const dueList=()=>W.filter(w=>S.srs&&S.srs[w.id]&&S.srs[w.id].due<=Date.now());
const hardList=()=>(S.hard||[]).map(id=>byId[id]).filter(Boolean);
function review(L,title){let i=0,flip=false;if(!L.length){app.innerHTML=`<div class="card ok"><p class="pt small">Nothing to review right now 🌊</p><p>Come back later. New words show up after you learn them.</p></div>`;return}
const show=()=>{if(i>=L.length)return finish("Review done 🧠",()=>go("practice"));const w=L[i];
app.innerHTML=`<div class="card note">${title} · ${i+1} of ${L.length}</div>${flip?card(w):`<div class="card">${pic(w)}<p class="pt">${esc(w.p)}</p><div class="row"><button data-say="${esc(w.p)}">🔊 Hear</button><button class="pri" id="fl">Show</button></div></div>`}${flip?`<p>How was it?</p><div class="row grade"><button data-q="1">😕 Again</button><button data-q="3">🤔 Hard</button><button data-q="4">🙂 Good</button><button class="pri" data-q="5">😄 Easy</button></div>`:""}`;
if(!flip)$("#fl").onclick=()=>{flip=true;show()};else app.querySelectorAll("[data-q]").forEach(b=>b.onclick=()=>{const q=+b.dataset.q;q<3?(miss(w,1),S.box[w.id]=1):hit(w,q);save();prog();i++;flip=false;show()})};show()}
function smartReview(){const d=dueList().sort((a,b)=>S.srs[a.id].due-S.srs[b.id].due);const fresh=W.filter(w=>!(S.srs&&S.srs[w.id]));review([...d.slice(0,15),...fresh.slice(0,Math.max(0,10-d.length))],"Smart review")}
/* ---------- 5. daily goal, badges, report ---------- */
const goalN=()=>+(S.goal||10),doneToday=()=>S.days[today()]||0;
function goalCard(){const n=doneToday(),g=goalN(),p=Math.min(1,n/g);return `<div class="card goal"><p class="pt small">Today's goal: ${g} steps</p><div class="bar big"><span style="width:${p*100}%"></span></div><p>${n>=g?"Goal met. Nice and steady 🌊":`${n} of ${g} done. Any amount is fine.`}</p></div>`}
const BADGES=[["first","🌱","First word",()=>Object.keys(S.box).length>=1],["ten","⭐","10 words learned",()=>learned()>=10],["fifty","🌟","50 words learned",()=>learned()>=50],["hund","🏆","100 words learned",()=>learned()>=100],["s3","🔥","3 day streak",()=>streak()>=3],["s7","🌊","7 day streak",()=>streak()>=7],["goal","🎯","Met a daily goal",()=>doneToday()>=goalN()],["unit","📘","Finished a unit",()=>Object.keys(S.done).length>=1],["rev","🧠","Did a smart review",()=>Object.keys(S.srs||{}).length>=5],["chat","💬","Finished a tutor chat",()=>(S.chats||0)>=1]];
const learned=()=>W.filter(w=>(S.box[w.id]||0)>=3).length;
function checkBadges(){S.badges=S.badges||{};for(const[k,ic,n,f]of BADGES)if(!S.badges[k]&&f()){S.badges[k]=today();toast(`New badge: ${ic} ${n}`);localStorage.setItem("patois",JSON.stringify(S))}}
function badgeCard(){S.badges=S.badges||{};return `<div class="card"><p class="pt small">Badges</p><div class="badges">${BADGES.map(([k,ic,n])=>`<span class="badge ${S.badges[k]?"on":""}" title="${n}">${ic}<small>${n}</small></span>`).join("")}</div><small>Badges are just for fun. No pressure.</small></div>`}
function report(){const nm=prompt("Student name for the report (optional):","jr")||"";const w=open("","_blank");const days=[...Array(28)].map((_,i)=>{const d=new Date();d.setDate(d.getDate()-27+i);return d.toISOString().slice(0,10)});const active=days.filter(d=>S.days[d]);
const rows=UNITS.map(u=>{const L=W.filter(x=>x.c==u);return `<tr><td>${esc(u)}</td><td>${L.filter(x=>S.box[x.id]).length}/${L.length}</td><td>${L.filter(x=>(S.box[x.id]||0)>=3).length}</td><td>${S.done[u]?"Yes":""}</td></tr>`}).join("");
w.document.write(`<title>${SITE_NAME} progress report</title><style>body{font:14px system-ui;margin:24px;color:#111}h1{font-size:20px}td,th{padding:4px 8px;border-bottom:1px solid #ccc;text-align:left}table{border-collapse:collapse;margin:8px 0}.cal span{display:inline-block;width:14px;height:14px;margin:1px;border:1px solid #999}.cal .on{background:#333}</style>
<h1>${SITE_NAME} — Jamaican Patois progress report</h1><p><b>Student:</b> ${esc(nm)} &nbsp; <b>Date:</b> ${new Date().toLocaleDateString()}</p>
<h2>Summary</h2><ul><li>Words learned (answered right 3+ times): <b>${learned()}</b> of ${W.length}</li><li>Words seen: ${Object.keys(S.box).length}</li><li>Current streak: ${streak()} days</li><li>Days practiced in last 4 weeks: ${active.length} of 28</li><li>Daily goal: ${goalN()} steps · Steps today: ${doneToday()}</li><li>Words in smart review: ${Object.keys(S.srs||{}).length} · Hard words: ${hardList().length}</li><li>Tutor chats finished: ${S.chats||0}</li></ul>
<h2>Last 4 weeks</h2><div class="cal">${days.map(d=>`<span class="${S.days[d]?"on":""}" title="${d}"></span>`).join("")}</div>
<h2>By unit</h2><table><tr><th>Unit</th><th>Seen</th><th>Learned</th><th>Finished</th></tr>${rows}</table>
<h2>Words to practice</h2><p>${hardList().map(x=>esc(x.p)+" ("+esc(x.e)+")").join(", ")||"None right now."}</p>
<h2>Badges</h2><p>${BADGES.filter(b=>(S.badges||{})[b[0]]).map(b=>b[1]+" "+b[2]).join(" · ")||"None yet."}</p>
<h2>Notes for the team</h2><p style="border:1px solid #ccc;min-height:80px"></p>`);w.document.close();w.focus();w.print()}
/* ---------- 6. offline tutor chat ---------- */
const CHATS=[{t:"Say hello",s:[["Wah gwaan?","What's up?",["Mi deh yah","Mi good","Mi alright"]],["Yuh good?","Are you good?",["Yes","Yeah man","Mi good"]],["Lata, yuh hear?","See you later, okay?",["Lata","Walk good","Likkle more"]]]},
{t:"At the shop",s:[["Wah yuh want?","What do you want?",["Mi want a patty","Mi want water","Mi want bread"]],["Anyting else?","Anything else?",["No man","Dat's all","Nuttn else"]],["Tanks, come again!","Thanks, come again!",["Tanks","Walk good","Respect"]]]},
{t:"How you feel",s:[["How yuh feel today?","How do you feel today?",["Mi feel good","Mi tired","Mi happy"]],["Wah mek?","Why?",["Mi sleep good","Mi did work hard","Mi nuh know"]],["Nuh worry, everyting irie.","Don't worry, everything's fine.",["Tanks","Yeah man","Respect"]]]},
{t:"Directions",s:[["Weh yuh a go?","Where are you going?",["Mi a go a town","Mi a go home","Mi a go a school"]],["Yuh know di way?","Do you know the way?",["Yes","No","Mi lost"]],["Go straight, den tun lef.","Go straight, then turn left.",["Tanks","Mi understand","Seh it again"]]]}];
const norm=t=>t.toLowerCase().replace(/[^a-z' ]/g,"").replace(/\s+/g," ").trim();
function lev(a,b){const d=[...Array(b.length+1).keys()];for(let i=1;i<=a.length;i++){let p=d[0];d[0]=i;for(let j=1;j<=b.length;j++){const t=d[j];d[j]=Math.min(d[j]+1,d[j-1]+1,p+(a[i-1]==b[j-1]?0:1));p=t}}return d[b.length]}
function tutor(){app.innerHTML=`<div class="card note">Practice chat. A friendly helper talks Patois. Type or tap an answer. No timer, no wrong-answer buzzers.</div>`+CHATS.map((c,i)=>`<button class="unit" data-c="${i}"><span>💬 ${c.t}</span></button>`).join("");app.querySelectorAll("[data-c]").forEach(b=>b.onclick=()=>chat(CHATS[b.dataset.c]))}
function chat(c){let i=0,hints=0;app.innerHTML=`<div class="card note keep">💬 ${c.t} · <button id="ch">Hint</button></div><div id="log" class="chat"></div><form id="cf" class="row"><input id="ci" autocomplete="off" placeholder="Type your answer…" aria-label="Your answer"><button class="pri">Send</button></form><div id="chips" class="row"></div>`;
const log=$("#log"),add=(who,h)=>{log.insertAdjacentHTML("beforeend",`<div class="bub ${who}">${h}</div>`);log.lastChild.scrollIntoView({block:"nearest"})};
const ask=()=>{if(i>=c.s.length){S.chats=(S.chats||0)+1;mark();save();checkBadges();add("bot","Yuh do good! 🌊 <small>(You did great!)</small>");$("#cf").hidden=true;$("#chips").innerHTML=`<button onclick="tutor()">More chats</button>`;return}const[p,e]=c.s[i];hints=0;add("bot",`${ra(p)} <button data-say="${esc(p)}" aria-label="Hear">🔊</button><br><small>${esc(e)}</small>`);say(p);$("#chips").innerHTML=""};
$("#ch").onclick=()=>{const opts=c.s[i]&&c.s[i][2];if(!opts)return;hints++;$("#chips").innerHTML=(hints==1?`<small>Try something like: “${esc(opts[0].split(" ")[0])} …”</small>`:"")+(hints>1?opts.map(o=>`<button class="chip">${esc(o)}</button>`).join(""):"");$("#chips").querySelectorAll(".chip").forEach(b=>b.onclick=()=>{$("#ci").value=b.textContent;$("#cf").requestSubmit()})};
$("#cf").onsubmit=e=>{e.preventDefault();const v=$("#ci").value.trim();if(!v)return;$("#ci").value="";add("me",esc(v));const opts=c.s[i][2],n=norm(v);let best=opts[0],bd=99;for(const o of opts){const d=lev(n,norm(o));if(d<bd){bd=d;best=o}}
if(bd==0)add("bot","Yes! 👍");else if(bd<=Math.max(2,norm(best).length/4))add("bot",`Close! We say: <b>${esc(best)}</b> 🙂`);else add("bot",`Good try. One way to say it: <b>${esc(best)}</b>. <small>(Other ways: ${opts.filter(o=>o!=best).map(esc).join(", ")})</small>`);i++;setTimeout(ask,700)};ask()}

/* ---------- English → Jamaican Creole translation guide (offline, dictionary + phrases) ---------- */
function tNorm(s){return String(s).toLowerCase().replace(/[’']/g,"'").replace(/[^a-z0-9'\s]/g," ").replace(/\s+/g," ").trim()}
function buildTr(){if(buildTr._)return buildTr._;
const phrases=[],words=new Map();
const addP=(en,patois,src)=>{const k=tNorm(en);if(!k||k.length<2)return;phrases.push({k,en:en.trim(),p:patois.trim(),src,n:k.split(" ").length})};
const addW=(en,patois)=>{const parts=tNorm(en).split(" / ");for(const part of parts){const k=part.trim();if(!k||k.includes(" ")||k.length<2)continue;if(!words.has(k)||patois.length<words.get(k).p.length)words.set(k,{p:patois,en:k})}};
const syn=[["hello","hi"],["hi there","hi"],["hey","hey!"],["goodbye","bye / take care"],["good bye","bye / take care"],["thanks","thanks"],["thank you","thanks"],["thank you very much","thanks"],["i'm fine","i'm okay"],["i am fine","i'm okay"],["i am ok","i'm okay"],["i am okay","i'm okay"],["im okay","i'm okay"],["im good","i'm good"],["i am good","i'm good"],["whats up","hi / what's up?"],["what's up","hi / what's up?"],["how are you doing","how are you?"],["see you","see you later"],["bye","later / bye"],["yes","yes"],["no","no"],["i do not know","i don't know"],["i do not understand","i don't understand"],["say again","say it again"],["repeat that","say it again"],["slow down","speak slowly"],["i am hungry","i'm hungry"],["i am tired","i'm tired"],["i am happy","i'm happy"],["i am sorry","i'm sorry"],["i am learning patois","i'm learning patois"],["i am coming","i'm coming"],["im coming","i'm coming"],["lets go","let's go"],["let us go","let's go"],["i want to go home","i want to go home"],["how much is this","how much is this?"],["good night","at night"],["i am at home","i'm at home"],["im at home","i'm at home"],["i have no money","i have no money"],["wait for me","wait for me"],["be careful","be careful / slow down"],["calm down","calm down"],["i love jamaica","i love jamaica"]];
const extra=[["where are you going","Weh yuh a go?"],["where you going","Weh yuh a go?"],["where are you","Weh yuh deh?"],["i am going home","Mi a go a yaad"],["im going home","Mi a go a yaad"],["i am going to work","Mi a go a work"],["i am going to school","Mi a go a skool"],["what is your name","Wah yu name?"],["whats your name","Wah yu name?"],["what's your name","Wah yu name?"],["nice to meet you","Wah gwaan"],["good afternoon","Good evening"],["how much","How much?"],["i understand","Mi understand"],["i do not want","Mi nuh want"],["i dont want","Mi nuh want"],["i don't want","Mi nuh want"]];
for(const w of W){
  addP(w.e,w.p,"word");
  if(w.e.includes(" — ")){const [enA,enB]=w.e.split(" — ");const [pA,pB]=w.p.split(" — ");if(enA&&pA)addP(enA,pA,"dialog");if(enB&&pB)addP(enB,pB,"dialog")}
  if(w.x&&w.x!="—"&&w.xe&&w.xe!="—"&&tNorm(w.xe).split(" ").length<=12)addP(w.xe,w.x,"example");
  addW(w.e,w.p)
}
for(const[a,b]of syn){const hit=W.find(w=>tNorm(w.e)==tNorm(b)||tNorm(w.e).split(" / ").includes(tNorm(b)));if(hit)addP(a,hit.p,"syn")}
for(const[a,b]of extra)addP(a,b,"extra")
phrases.sort((a,b)=>b.n-a.n||b.k.length-a.k.length);
const tiny={i:"mi",me:"mi",my:"mi",you:"yuh",your:"yuh",he:"him",she:"shi",we:"wi",they:"dem",the:"di",a:"a",an:"a",to:"go",and:"an",is:"a",are:"a",am:"a",not:"nuh",dont:"nuh","don't":"nuh",no:"nuh",yes:"yes",this:"dis",that:"dat",what:"wah",where:"weh",who:"a who",when:"wen",why:"meh",how:"ow",for:"fi",of:"a",in:"inna",on:"pon",with:"wid",it:"it",ok:"alright",okay:"alright",please:"",hello:"wah gwaan",hi:"wah gwaan",bye:"lata",thanks:"tanks",thank:"tanks"};
return buildTr._={phrases,words,tiny}}
function translateEn(text){const {phrases,words,tiny}=buildTr();const raw=String(text||"").trim();if(!raw)return{out:"",parts:[],miss:[],hits:0};
let s=" "+tNorm(raw)+" ",used=[],miss=[];
for(const ph of phrases){const needle=" "+ph.k+" ";if(!s.includes(needle))continue;const tok="«"+used.length+"»";s=s.split(needle).join(" "+tok+" ");used.push({type:"phrase",en:ph.en,p:ph.p,src:ph.src})}
const out=[],missSet=new Set();
for(const tok of s.trim().split(/\s+/).filter(Boolean)){if(/^«\d+»$/.test(tok)){out.push(used[+tok.slice(1,-1)]);continue}
if(words.has(tok)){out.push({type:"word",en:tok,p:words.get(tok).p});continue}
if(tiny[tok]!=null){if(tiny[tok]==="")continue;out.push({type:"tiny",en:tok,p:tiny[tok]});continue}
out.push({type:"miss",en:tok,p:tok});missSet.add(tok)}
const joined=out.map(x=>x.p).join(" ").replace(/\s+/g," ").trim().replace(/^./,c=>c.toUpperCase());
return{out:joined,parts:out,miss:[...missSet],hits:out.filter(x=>x.type!="miss").length}}
function hearIfPossible(patois){const t=patois.trim();if(!t)return;if(typeof AUDIO!="undefined"&&AUDIO[t]){say(t);return}const soft=Object.keys(AUDIO||{}).find(k=>tNorm(k)==tNorm(t));if(soft){say(soft);return}toast("No saved sound for that whole line yet. You can still copy it.")}
const TR_API = "https://patois-translate.newsatlas.workers.dev";
async function translateAI(text){
  const ctrl = new AbortController();
  const t = setTimeout(()=>ctrl.abort(), 20000);
  try{
    const res = await fetch(TR_API,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({text}),signal:ctrl.signal});
    clearTimeout(t);
    if(!res.ok)throw new Error("bad status "+res.status);
    const j = await res.json();
    if(!j.patois)throw new Error(j.error||"empty");
    return j;
  }catch(e){clearTimeout(t);throw e}
}
function trView(){
  app.innerHTML=`<div class="card note keep"><p class="pt small">Translate to Patois</p><p>Type any English. Online, a free AI helper turns it into Jamaican Patois. If you are offline, a local phrase guide is used instead.</p><div class="row"><a class="btnlike" href="/ios/Text%20Substitutions.plist" download="Text Substitutions.plist">⬇ iPhone Patois keyboard shortcuts</a></div><small>Apple Text Replacement file (not a third-party keyboard). See Me → Settings for install steps.</small></div>
<div class="card"><label class="stack">English<textarea id="trin" rows="5" placeholder="Type any English sentence…"></textarea></label>
<div class="row"><button class="pri" id="trgo">Translate →</button><button id="trclr">Clear</button>
<label class="inline">Mode <select id="trmode"><option value="auto">Auto (AI when online)</option><option value="ai">AI only</option><option value="local">Offline guide only</option></select></label></div>
<p class="noteish" id="trstatus"></p></div>
<div class="card" id="troutbox" hidden><p class="softlab" id="trlab">Jamaican Patois</p><p class="pt" id="trout" lang="jam"></p>
<p class="noteish" id="trnote"></p>
<div class="row"><button class="pri" id="trcopy">📋 Copy</button><button data-slow id="trslow" hidden>🐢 Slow</button><button data-say id="trhear" hidden>🔊 Hear</button><button data-rep id="trrep" hidden>🔁 Repeat</button><button id="tragain">Try again</button></div>
<details id="trdetails" hidden><summary>Show offline matches</summary><div id="trparts"></div></details></div>`;
  const setAudio=(out)=>{const can=typeof AUDIO!="undefined"&&(AUDIO[out]||Object.keys(AUDIO).some(k=>tNorm(k)==tNorm(out)));
    ["trhear","trslow","trrep"].forEach(id=>{const b=$("#"+id);b.hidden=!can;if(can){if(id=="trhear")b.dataset.say=out;if(id=="trslow")b.dataset.slow=out}});if(can)say.last=out};
  const showLocal=(r)=>{const box=$("#troutbox");box.hidden=false;$("#trlab").textContent="Jamaican Patois (offline guide)";$("#trout").textContent=r.out;
    const known=r.parts.filter(p=>p.type!="miss").length,tot=r.parts.length;
    let note=tot?`Offline guide matched ${known} of ${tot} bits from lessons + grammar rules.`:"Nothing matched offline.";
    if(r.miss.length)note+=` Left in English: ${r.miss.map(m=>`“${m}”`).join(", ")}.`;
    note+=" For fuller wording, go online and use Auto/AI mode.";
    $("#trnote").textContent=note;$("#trdetails").hidden=false;
    $("#trparts").innerHTML=r.parts.map(p=>`<div class="trline"><span class="pill ${p.type}">${esc(p.type)}</span> <b>${esc(p.en)}</b> → ${esc(p.p)}</div>`).join("")||"<p>No parts.</p>";
    setAudio(r.out)};
  const showAI=(patois,meta)=>{const box=$("#troutbox");box.hidden=false;$("#trlab").textContent="Jamaican Patois (AI)";$("#trout").textContent=patois;
    $("#trnote").textContent=(meta||"Translated with a free AI model.")+" This can make mistakes. Offline guide is still available.";
    $("#trdetails").hidden=true;setAudio(patois)};
  const run=async()=>{const text=$("#trin").value.trim();if(!text){toast("Type some English first.");return}
    const mode=$("#trmode").value;const st=$("#trstatus");const btn=$("#trgo");btn.disabled=true;st.textContent="Working…";
    try{
      if(mode==="local"){showLocal(translateEn(text));st.textContent="Used offline guide.";return}
      if(!navigator.onLine && mode!=="ai"){showLocal(translateEn(text));st.textContent="Offline — used local guide.";return}
      try{
        const j=await translateAI(text);showAI(j.patois,`AI model: ${j.model||"llama"}.`);st.textContent="AI translation ready.";
        mark();checkBadges();save();
      }catch(e){
        if(mode==="ai"){st.textContent="AI is not available right now.";toast("AI translation failed. Try again or switch to Offline guide.");$("#troutbox").hidden=true;return}
        showLocal(translateEn(text));st.textContent="AI busy/unavailable — used offline guide.";
      }
    }finally{btn.disabled=false;mark();checkBadges();save()}};
  $("#trgo").onclick=run;$("#tragain").onclick=run;
  $("#trin").addEventListener("keydown",e=>{if(e.key=="Enter"&&(e.metaKey||e.ctrlKey)){e.preventDefault();run()}});
  $("#trclr").onclick=()=>{$("#trin").value="";$("#troutbox").hidden=true;$("#trstatus").textContent=""};
  $("#trcopy").onclick=async()=>{try{await navigator.clipboard.writeText($("#trout").textContent);toast("Copied.")}catch(e){toast("Copy didn't work. Select the text and copy.")}}
}

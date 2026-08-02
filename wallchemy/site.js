/* ============================================================
   WALLCHEMY — shared behaviour (runs on every page)
   ============================================================ */

const $  = (s,r=document)=>r.querySelector(s);
const $$ = (s,r=document)=>[...r.querySelectorAll(s)];
const taka = n => "৳" + n.toLocaleString("en-US");
const store = {
  get(k){ try{ return localStorage.getItem(k); }catch(e){ return null; } },
  set(k,v){ try{ localStorage.setItem(k,v); }catch(e){} }
};

/* ---------- theme (set as early as possible to avoid a flash) ---------- */
(function(){
  const saved = store.get("wc-theme");
  const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
  document.documentElement.dataset.theme = saved || (prefersLight ? "light" : "dark");
})();

function initShared(){
  const themeBtn = $("#themeBtn");
  if(themeBtn) themeBtn.addEventListener("click", ()=>{
    const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    store.set("wc-theme", next);
    const meta = $('meta[name="theme-color"]');
    if(meta) meta.setAttribute("content", next === "dark" ? "#100E0C" : "#F0EAE0");
  });

  /* loader */
  addEventListener("load", ()=> requestAnimationFrame(()=> document.body.classList.add("ready")));
  setTimeout(()=> document.body.classList.add("ready"), 2200);

  /* nav */
  const nav = $("#nav");
  if(nav){
    addEventListener("scroll", ()=> nav.classList.toggle("stuck", scrollY > 40), {passive:true});
    const burger = $("#burger");
    if(burger) burger.addEventListener("click", ()=>{
      const open = nav.classList.toggle("open");
      burger.setAttribute("aria-expanded", open);
    });
    $$("#navLinks a").forEach(a => a.addEventListener("click", ()=> nav.classList.remove("open")));
  }

  /* floating contact */
  const fab = $("#fab");
  if(fab) addEventListener("scroll", ()=> fab.classList.toggle("on", scrollY > innerHeight * .5), {passive:true});

  const yr = $("#yr");
  if(yr) yr.textContent = new Date().getFullYear();

  watchReveals();
}

/* ---------- scroll reveals ---------- */
const io = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if(!e.isIntersecting) return;
    const sibs = [...e.target.parentElement.children].filter(c=>c.classList.contains("rv"));
    e.target.style.transitionDelay = (Math.min(sibs.indexOf(e.target), 5) * 90) + "ms";
    e.target.classList.add("in");
    io.unobserve(e.target);
  });
}, {threshold:.12, rootMargin:"0px 0px -6% 0px"});
const watchReveals = ()=> $$(".rv:not(.in)").forEach(el=>io.observe(el));

/* ---------- product card markup (shared by home + related rail) ---------- */
function cardHTML(p){
  return `
  <a class="card glass sweep rv" href="product.html?id=${p.id}" data-cat="${p.cat}">
    <span class="card-media">
      <img src="assets/${p.images[0]}" alt="${p.name}" loading="lazy">
      ${p.images[1] ? `<img class="alt" src="assets/${p.images[1]}" alt="" loading="lazy" aria-hidden="true">` : ``}
      ${p.images.length > 1 ? `<span class="card-count">${p.images.length} photos</span>` : ``}
    </span>
    <span class="card-body">
      <span class="card-tag">${p.tag}</span>
      <h3>${p.name}</h3>
      <span class="card-desc">${p.lead.split(".")[0]}.</span>
      <span class="card-foot">
        <span class="price">${p.was?`<s>${taka(p.was)}</s>`:""}${taka(p.price)}</span>
        <span class="card-open">View <i></i></span>
      </span>
    </span>
  </a>`;
}

/* ---------- order → Messenger ---------- */
function copySync(text){
  const ta = document.createElement("textarea");
  ta.value = text;
  ta.setAttribute("readonly","");
  ta.style.cssText = "position:fixed;top:-1000px;opacity:0";
  document.body.appendChild(ta);
  ta.select(); ta.setSelectionRange(0, text.length);
  let ok = false;
  try{ ok = document.execCommand("copy"); }catch(e){}
  ta.remove();
  if(navigator.clipboard) navigator.clipboard.writeText(text).catch(()=>{});
  return ok;
}

function sendOrder(p, size, finish){
  const text = [
    "Hi Wallchemy 👋  I'd like to order:",
    "",
    "• Piece:  " + p.name,
    "• Size:   " + size,
    "• Finish: " + finish,
    "• Price:  " + taka(p.price),
    "",
    "Name:",
    "Delivery address:",
    "Phone:",
    "",
    "(sent from the Wallchemy website)"
  ].join("\n");
  const copied = copySync(text);
  window.open(FB_MESSENGER, "_blank", "noopener");
  toast(copied
    ? "Order details copied — paste them in the Messenger chat."
    : "Messenger is opening. Tell us which piece and size you'd like.");
}

/* ---------- toast ---------- */
let toastTimer;
function toast(msg){
  const t = $("#toast");
  if(!t) return;
  $("#toastMsg").textContent = msg;
  t.classList.add("on");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(()=> t.classList.remove("on"), 5200);
}

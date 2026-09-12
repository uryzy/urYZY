(function(){
  "use strict";

  var STORAGE_KEY = "urYZYTheme";
  var savedTheme = "light";

  try {
    savedTheme = localStorage.getItem(STORAGE_KEY) || "light";
  } catch (error) {}

  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    document.body.setAttribute("data-theme", theme);
    try { localStorage.setItem(STORAGE_KEY, theme); } catch (error) {}

    var toggle = document.querySelector(".theme-toggle");
    if (toggle) {
      var isDark = theme === "dark";
      toggle.setAttribute("aria-label", isDark ? "Switch to light mode" : "Switch to dark mode");
      toggle.setAttribute("title", isDark ? "Light mode" : "Dark mode");
      toggle.setAttribute("aria-pressed", String(isDark));
    }
  }

  function mountToggle() {
    if (!document.body || document.querySelector(".theme-toggle")) return;

    var toggle = document.createElement("button");
    toggle.className = "theme-toggle";
    toggle.type = "button";
    toggle.innerHTML = '<img src="/assets/logo.png" alt="">';
    toggle.addEventListener("click", function(){
      applyTheme(document.body.getAttribute("data-theme") === "dark" ? "light" : "dark");
    });
    document.body.appendChild(toggle);
    applyTheme(savedTheme);
  }

  var style = document.createElement("style");
  style.textContent =
    ".theme-toggle{position:fixed;top:18px;right:22px;z-index:1000;width:42px;height:42px;padding:8px;border:1px solid rgba(17,17,17,.14);border-radius:50%;background:rgba(255,255,255,.5);box-shadow:0 8px 24px rgba(0,0,0,.1);cursor:pointer;transition:transform .2s ease,background .2s ease,border-color .2s ease}.theme-toggle:hover{transform:rotate(12deg) scale(1.08)}.theme-toggle img{display:block;width:100%;height:100%;object-fit:contain}.theme-toggle:focus-visible{outline:2px solid currentColor;outline-offset:4px}body[data-theme=dark]{background:#08090b!important;color:#f5f5f6!important;color-scheme:dark}body[data-theme=light]{background:#efefef!important;color:#111!important;color-scheme:light}body[data-theme=dark] .theme-toggle{border-color:rgba(255,255,255,.2);background:rgba(8,8,8,.72);box-shadow:0 8px 24px rgba(0,0,0,.35)}body[data-theme=light] .theme-toggle{border-color:rgba(17,17,17,.14);background:rgba(255,255,255,.6)}body[data-theme=dark] .theme-toggle img{filter:none}body[data-theme=light] .theme-toggle img{filter:invert(1)}body[data-theme=dark] .nav a,body[data-theme=dark] .nav a.active,body[data-theme=dark] .nav a:hover{color:#f5f5f6!important}body[data-theme=dark] .container h1,body[data-theme=dark] .container h2,body[data-theme=dark] .heading h1,body[data-theme=dark] .page-title,body[data-theme=dark] .gallery-title,body[data-theme=dark] .release-title{color:#f5f5f6!important;text-shadow:none!important}body[data-theme=dark] .hero .subtitle,body[data-theme=dark] .stat-label,body[data-theme=dark] .recent-tag{color:#a4a4a4!important}body[data-theme=dark] .hero .actions .btn:not(.primary){color:#f5f5f5!important;border-color:rgba(255,255,255,.25)!important}body[data-theme=dark] .stats,body[data-theme=dark] .recent-head{border-color:rgba(255,255,255,.16)}body[data-theme=dark] .download-section-heading{border-color:rgba(255,255,255,.16)}body[data-theme=dark] .download-section-title,body[data-theme=dark] .release-description-text{color:#d4d4d4!important}body[data-theme=dark] .release-visual{background:transparent!important}body[data-theme=dark] .site-footer{color:#999}body[data-theme=dark] .site-footer a{color:#ddd}body[data-theme=dark] .theme-toggle:hover{background:rgba(255,255,255,.12)}@media(max-width:560px){.theme-toggle{top:14px;right:14px;width:36px;height:36px;padding:7px}}";
  document.head.appendChild(style);

  var polishStyle = document.createElement("style");
  polishStyle.textContent =
    "body[data-theme=light] .nav{border:1px solid rgba(17,17,17,.12);border-radius:0;background:rgba(255,255,255,.72);box-shadow:0 12px 28px rgba(0,0,0,.08)}body[data-theme=light] .nav a,body[data-theme=light] .nav a.active,body[data-theme=light] .nav a:hover{color:#444!important}body[data-theme=light] .nav a.active{color:#111!important}body[data-theme=light] .nav-slider{background:#111;box-shadow:none}body[data-theme=light] .container h1,body[data-theme=light] .container h2,body[data-theme=light] .heading h1,body[data-theme=light] .page-title,body[data-theme=light] .gallery-title,body[data-theme=light] .release-title,body[data-theme=light] .recent-title,body[data-theme=light] .stat-value{color:#111!important;text-shadow:none!important}body[data-theme=light] .gallery-head,body[data-theme=light] .page-head{border-color:rgba(17,17,17,.16)}body[data-theme=light] .gallery-title,body[data-theme=light] .page-title{color:#111!important;text-shadow:none!important}body[data-theme=light] .gallery-copy,body[data-theme=light] .page-subtitle{color:#666!important}body[data-theme=light] .gallery-mark,body[data-theme=light] .logo-area img{filter:none;opacity:.95}body[data-theme=light] .gallery-filter{border-color:rgba(17,17,17,.16);background:rgba(255,255,255,.56);color:#666}body[data-theme=light] .gallery-filter.active,body[data-theme=light] .gallery-filter:hover{border-color:#111;background:#111;color:#fff}body[data-theme=light] .gallery-item,body[data-theme=light] .update{border:1px solid rgba(17,17,17,.1);border-radius:0;background:rgba(255,255,255,.6);box-shadow:0 12px 30px rgba(0,0,0,.04)}body[data-theme=light] .gallery-item:hover,body[data-theme=light] .gallery-item:focus-visible,body[data-theme=light] .update:hover{border-color:rgba(17,17,17,.28);background:#fff;box-shadow:0 18px 36px rgba(0,0,0,.1)}body[data-theme=light] .gallery-art{border-radius:0;background:#ddd;filter:saturate(1)}body[data-theme=light] .gallery-name,body[data-theme=light] .update-title{color:#111}body[data-theme=light] .gallery-kind,body[data-theme=light] .gallery-count,body[data-theme=light] .update-date,body[data-theme=light] .update-description,body[data-theme=light] .update-list li{color:#666}body[data-theme=light] .timeline:before{background:linear-gradient(to bottom,rgba(17,17,17,.22),rgba(17,17,17,.04))}body[data-theme=light] .update:before{border-color:#efefef;background:#999;box-shadow:0 0 0 1px rgba(17,17,17,.12)}body[data-theme=light] .update:first-child:before{background:#111;box-shadow:0 0 0 1px rgba(17,17,17,.15),0 0 14px rgba(17,17,17,.12)}body[data-theme=light] .update-tag{border-color:rgba(17,17,17,.14);background:rgba(17,17,17,.04);color:#555}body[data-theme=light] .update:first-child .update-tag{border-color:rgba(17,17,17,.18);background:rgba(17,17,17,.08);color:#111}body[data-theme=light] .li-tag.added{color:#111;background:rgba(17,17,17,.09)}body[data-theme=light] .li-tag.bug{color:#a44;background:rgba(190,60,60,.08)}body[data-theme=dark] .gallery-item,body[data-theme=dark] .update{border-color:rgba(255,255,255,.1)}";
  document.head.appendChild(polishStyle);

  var rootStyle = document.createElement("style");
  rootStyle.textContent =
    "html[data-theme=light],html[data-theme=light] body{background:#efefef!important;color:#111!important;color-scheme:light}html[data-theme=dark],html[data-theme=dark] body{background:#08090b!important;color:#f5f5f6!important;color-scheme:dark}html[data-theme=light] body:before,html[data-theme=light] body:after,html[data-theme=dark] body:before,html[data-theme=dark] body:after{background:none!important}html[data-theme=light] .site-footer,html[data-theme=light] .footer{color:#666!important}html[data-theme=dark] .site-footer,html[data-theme=dark] .footer{color:#999!important}html[data-theme=light] .release-visual:before,html[data-theme=dark] .release-visual:before{content:\"\";position:absolute;left:50%;bottom:22px;width:174px;height:174px;border-radius:50%;transform:translateX(-50%);z-index:0;pointer-events:none;filter:blur(22px);opacity:.65;transition:opacity .35s ease,transform .7s cubic-bezier(.16,1,.3,1)}html[data-theme=light] .release-visual:before{background:rgba(10,10,10,.3)}html[data-theme=dark] .release-visual:before{background:rgba(255,255,255,.3)}html[data-theme=light] .release-visual:hover:before{opacity:.9;transform:translateX(24px) scale(1.08)}html[data-theme=dark] .release-visual:hover:before{opacity:1;transform:translateX(24px) scale(1.08)}html[data-theme=light] .vinyl{box-shadow:inset 12px 0 20px rgba(255,255,255,.08),0 16px 28px rgba(0,0,0,.2),0 0 26px rgba(0,0,0,.2)!important}html[data-theme=dark] .vinyl{box-shadow:inset 12px 0 20px rgba(255,255,255,.12),0 16px 28px rgba(0,0,0,.5),0 0 34px rgba(255,255,255,.2)!important}";
  document.head.appendChild(rootStyle);

  var artworkGlowStyle = document.createElement("style");
  artworkGlowStyle.textContent =
    "html[data-theme=light] .release-visual:before,html[data-theme=dark] .release-visual:before{opacity:0!important}html[data-theme=light] .release-cover{box-shadow:0 14px 26px rgba(0,0,0,.16),0 0 38px rgba(0,0,0,.2)!important;transition:box-shadow .35s ease,transform .35s ease}html[data-theme=dark] .release-cover{box-shadow:0 14px 30px rgba(0,0,0,.55),0 0 42px rgba(255,255,255,.2)!important;transition:box-shadow .35s ease,transform .35s ease}html[data-theme=light] .release-card:hover .release-cover{box-shadow:0 18px 34px rgba(0,0,0,.22),0 0 54px rgba(0,0,0,.28)!important}html[data-theme=dark] .release-card:hover .release-cover{box-shadow:0 18px 38px rgba(0,0,0,.68),0 0 58px rgba(255,255,255,.3)!important}";
  document.head.appendChild(artworkGlowStyle);

  var interfaceStyle = document.createElement("style");
  interfaceStyle.textContent =
    ".nav{top:18px!important;gap:4px!important;padding:5px!important;border:1px solid rgba(17,17,17,.12)!important;border-radius:999px!important;background:rgba(255,255,255,.7)!important;box-shadow:0 12px 30px rgba(0,0,0,.08)!important;backdrop-filter:blur(16px);-webkit-backdrop-filter:blur(16px)}.nav a{min-height:28px;padding:0 12px;border-radius:999px;font-size:9px!important;letter-spacing:.18em!important;transition:background .2s ease,color .2s ease,transform .2s ease!important}.nav a:hover{transform:translateY(-1px)}body[data-theme=light] .nav a.active,body[data-theme=light] .nav a:hover{background:#111!important;color:#fff!important}body[data-theme=dark] .nav{border-color:rgba(255,255,255,.14)!important;background:rgba(8,8,8,.72)!important;box-shadow:0 12px 30px rgba(0,0,0,.36)!important}body[data-theme=dark] .nav a{color:#aaa!important}body[data-theme=dark] .nav a.active,body[data-theme=dark] .nav a:hover{background:#f5f5f5;color:#080808!important}.container{width:min(1240px,calc(100% - 48px))!important;padding-top:112px!important;padding-bottom:96px!important}.site-footer{width:min(1240px,calc(100% - 48px));margin:0 auto;padding:24px 0 34px!important;border-top:1px solid rgba(17,17,17,.12);color:#666!important}.site-footer .foot-links{gap:18px}.site-footer .foot-links a{color:#555!important}.site-footer .foot-disclaimer{color:#888!important}body[data-theme=dark] .site-footer{border-color:rgba(255,255,255,.12);color:#999!important}body[data-theme=dark] .site-footer .foot-links a{color:#ccc!important}body[data-theme=dark] .site-footer .foot-disclaimer{color:#777!important}.gallery-head,.page-head{padding-bottom:34px!important}.gallery-title,.page-title{font-size:clamp(58px,8vw,104px)!important;letter-spacing:-.075em!important}.gallery-toolbar{margin:26px 0 22px!important}.gallery-grid{gap:20px!important}.gallery-item{border-radius:0!important;padding:0!important;background:transparent!important;box-shadow:none!important}.gallery-item:hover,.gallery-item:focus-visible{transform:translateY(-5px);background:transparent!important;box-shadow:none!important}.gallery-art{border-radius:0!important;box-shadow:0 14px 30px rgba(0,0,0,.08)}.gallery-meta{padding:12px 0 3px!important}.update{border-radius:0!important;padding:26px 24px!important}.update-title{font-size:17px!important}.update-description{line-height:1.7!important}.release-card{transition:transform .25s ease}.release-card:hover{transform:translateY(-3px)}@media(max-width:760px){.nav{top:12px!important}.nav a{padding:0 8px;font-size:8px!important}.container{width:calc(100% - 28px)!important;padding-top:90px!important}.site-footer{width:calc(100% - 28px)}.gallery-title,.page-title{font-size:58px!important}.update{padding:20px 16px!important}}";
  document.head.appendChild(interfaceStyle);

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", mountToggle);
  } else {
    mountToggle();
  }
})();

(function(){
  "use strict";

  var STORAGE_KEY="urYZYTheme";
  var themes={
    light:{label:"Light",art:"",bg:"#f1f0ec",surface:"rgba(255,255,255,.78)",text:"#171717",muted:"#66625c",accent:"#171717",ink:"#fff"},
    dark:{label:"Dark",art:"/assets/BULLYLP.png",bg:"#08090b",surface:"rgba(18,18,18,.82)",text:"#f5f5f2",muted:"#a4a4a0",accent:"#f5f5f2",ink:"#08090b"},
    king:{label:"King",art:"/assets/JIK.png",bg:"#071a52",surface:"rgba(12,34,94,.82)",text:"#fff1a8",muted:"#c9bd79",accent:"#f2c94c",ink:"#071a52",fixedPalette:true},
    pablo:{label:"Pablo",art:"/assets/TLOP.jpg",bg:"#5b160d",surface:"rgba(116,32,18,.82)",text:"#ffe2b2",muted:"#e8a06e",accent:"#ff9c38",ink:"#5b160d"},
    yzy:{label:"YZY",art:"",bg:"#080808",surface:"rgba(20,20,20,.74)",text:"#f4f1e8",muted:"#a9a49a",accent:"#ffffff",ink:"#080808"}
  };
  var albumThemes=[
    ["BULLY Early","BULLYEARLY.png"],["BULLY First","BULLY1.png"],["BULLY Second","BULLY2.png"],["BULLY Third","BULLY3.png"],
    ["BULLY IRKO","NO_CIERTO_BESAME_MAMA.png"],["BULLY Digital","BULLYDG.png"],["BULLY Listening Party","BULLYLP.png"],["BULLY Physical","BULLYPV.png"],
    ["WW3","WW3.png"],["CUCK","CUCK.png"],["In A Perfect World","IAPW.png"],["In A Perfect World Early","IAPWE.png"],
    ["WAR","WAR.jpg"],["Bad Bitch Playbook","BADBITCHPLAYBOOK.png"],["Bad Bitch Playbook Vol. 2","BADBITCHPLAYBOOK2.png"],
    ["Bad Bitch Playbook Pre Vultures","BADBITCHPLAYBOOKPREVULTURES1.png"],["The Graduate","TheGraduate.png"],["Cruel Summer","CS.png"],["Cruel Winter First","CWfv.png"],["Cruel Winter Second","CWsv.png"],["The Death Of Pablo","TDOP.png"]
  ];
  var current="dark";
  var globeHost;

  albumThemes.forEach(function(album,index){
    var themeId="ALBUM-"+index;
    if(album[1]==="TheGraduate.png")themeId="GRADUATE";
    if(album[1]==="TDOP.png")themeId="PABLO";
    if(album[1]==="CS.png")themeId="CRUEL";
    if(album[1]==="CWfv.png")themeId="CRUEL-WINTER-FIRST";
    if(album[1]==="CWsv.png")themeId="CRUEL-WINTER-SECOND";
    themes[themeId]={label:album[0],art:"/assets/"+album[1],bg:"#111111",surface:"rgba(18,18,18,.82)",text:"#f5f5f2",muted:"#b7b7b2",accent:"#f5f5f2",ink:"#111111"};
  });

  try{current=localStorage.getItem(STORAGE_KEY)||"dark";}catch(error){}
  if(!themes[current])current="dark";

  var style=document.createElement("style");
  style.textContent=
    ".theme-toggle{display:none!important}"+
    ".settings-trigger{position:fixed;top:18px;right:22px;z-index:1000;width:38px;height:38px;padding:0;border:1px solid var(--line-strong);border-radius:50%;background:var(--surface);color:var(--text);font:0/0 Yeezy,Arial,sans-serif;cursor:pointer;box-shadow:0 12px 30px rgba(0,0,0,.18);backdrop-filter:blur(14px);transition:transform .2s ease,background .2s ease,border-color .2s ease}"+
    ".settings-trigger:before{content:'\\2699';display:block;font:16px/36px Arial,sans-serif}"+
    ".settings-trigger:hover{transform:translateY(-2px);border-color:var(--accent)}"+
    ".settings-backdrop{position:fixed;inset:0;z-index:1100;display:grid;place-items:start end;padding:68px 22px 22px;background:rgba(0,0,0,.28);opacity:0;pointer-events:none;transition:opacity .22s ease}"+
    ".settings-backdrop.is-open{opacity:1;pointer-events:auto}"+
    ".settings-panel{width:min(330px,calc(100vw - 28px));max-height:calc(100vh - 88px);overflow:auto;padding:20px;border:1px solid var(--line-strong);border-radius:16px;background:color-mix(in srgb,var(--surface) 92%,#000 8%);color:var(--text);box-shadow:0 24px 70px rgba(0,0,0,.35);transform:translateY(-8px) scale(.98);transition:transform .25s cubic-bezier(.16,1,.3,1)}"+
    ".settings-backdrop.is-open .settings-panel{transform:none}"+
    ".settings-head{display:flex;justify-content:space-between;align-items:start;gap:16px;margin-bottom:18px}"+
    ".settings-title{margin:0;font:700 18px Yeezy,Arial,sans-serif;letter-spacing:.02em}"+
    ".settings-caption{margin:5px 0 0;color:var(--muted);font-size:10px;line-height:1.5}"+
    ".settings-close{border:0;background:transparent;color:var(--muted);font:400 22px Arial,sans-serif;cursor:pointer}"+
    ".theme-options{display:grid;grid-template-columns:1fr 1fr;gap:8px}"+
    ".theme-option{position:relative;display:flex;align-items:center;gap:9px;min-height:48px;padding:8px;border:1px solid var(--line);border-radius:10px;background:transparent;color:var(--text);font:700 10px Yeezy,Arial,sans-serif;letter-spacing:.1em;text-transform:uppercase;text-align:left;cursor:pointer}"+
    ".theme-option:hover,.theme-option.is-selected{border-color:var(--accent);background:color-mix(in srgb,var(--accent) 10%,transparent)}"+
    ".theme-swatch{width:28px;height:28px;flex:0 0 28px;border-radius:7px;background:var(--swatch);box-shadow:inset 0 0 0 1px rgba(255,255,255,.25)}"+
    ".theme-option img{width:28px;height:28px;object-fit:cover;border-radius:7px}"+
    ".theme-art{position:fixed;inset:-5%;z-index:0;pointer-events:none;background-position:center;background-size:cover;filter:blur(28px) saturate(1.2);opacity:.24;transform:scale(1.08);transition:opacity .5s ease,background-image .5s ease}"+
    "body[data-theme=light] .theme-art{opacity:.08}"+
    ".yzy-globe{position:fixed;inset:0;z-index:-1;display:none;pointer-events:none;opacity:.82;mix-blend-mode:screen}"+
    "body[data-theme=yzy] .yzy-globe{display:block}"+
    "body[data-theme=yzy],body[data-theme=yzy] *{font-family:Yeezy,Arial,sans-serif!important}"+
    "body[data-theme] .nav{border-color:color-mix(in srgb,var(--accent) 34%,transparent)!important;background:color-mix(in srgb,var(--surface) 88%,transparent)!important}"+
    "body[data-theme] .nav a,body[data-theme] .nav a:hover,body[data-theme] .nav a.active{color:var(--text)!important}"+
    "body[data-theme] .nav a.active,body[data-theme] .nav a:hover{background:color-mix(in srgb,var(--accent) 16%,transparent)!important}"+
    "body[data-theme] .page-title,body[data-theme] .gallery-title,body[data-theme] .container h1,body[data-theme] .container h2,body[data-theme] .heading h1,body[data-theme] .release-title,body[data-theme] .update-title,body[data-theme] .recent-title,body[data-theme] .stat-value{color:var(--text)!important}"+
    "body[data-theme] .page-subtitle,body[data-theme] .gallery-copy,body[data-theme] .update-description,body[data-theme] .release-description-text,body[data-theme] .subtitle,body[data-theme] .description,body[data-theme] .stat-label,body[data-theme] .recent-tag,body[data-theme] .download-section-count,body[data-theme] .update-date,body[data-theme] .update-list li{color:var(--muted)!important}"+
    "body[data-theme] .update,body[data-theme] .surface-card,body[data-theme] .gallery-item{border-color:color-mix(in srgb,var(--accent) 22%,transparent)!important;background:color-mix(in srgb,var(--surface) 90%,transparent)!important}"+
    "body[data-theme] .btn,body[data-theme] .gallery-filter,body[data-theme] .showmore,body[data-theme] .update-tag,body[data-theme] .li-tag{border-color:color-mix(in srgb,var(--accent) 32%,transparent)!important;color:var(--text)!important;background:color-mix(in srgb,var(--surface) 84%,transparent)!important}"+
    "body[data-theme] .btn.primary,body[data-theme] .gallery-filter.active{background:var(--accent)!important;color:var(--accent-ink)!important;border-color:var(--accent)!important}"+
    "body[data-theme] .site-footer,body[data-theme] .site-footer a{color:var(--muted)!important;border-color:color-mix(in srgb,var(--accent) 22%,transparent)!important}"+
    "html{scrollbar-color:color-mix(in srgb,var(--accent) 70%,transparent) color-mix(in srgb,var(--bg) 88%,#000)}::-webkit-scrollbar{width:10px;height:10px}::-webkit-scrollbar-track{background:color-mix(in srgb,var(--bg) 88%,#000)}::-webkit-scrollbar-thumb{border:3px solid color-mix(in srgb,var(--bg) 88%,#000);border-radius:999px;background:color-mix(in srgb,var(--accent) 70%,transparent)}::-webkit-scrollbar-thumb:hover{background:var(--accent)}"+
    "@media(max-width:560px){.settings-trigger{top:12px;right:14px;height:34px}.settings-backdrop{padding:60px 14px 14px}.settings-panel{width:100%}}";
  document.head.appendChild(style);

  function makeUI(){
    var art=document.createElement("div");
    art.className="theme-art";
    art.setAttribute("aria-hidden","true");
    document.body.appendChild(art);

    globeHost=document.createElement("div");
    globeHost.className="yzy-globe";
    globeHost.setAttribute("aria-hidden","true");
    document.body.appendChild(globeHost);

    var trigger=document.createElement("button");
    trigger.className="settings-trigger";
    trigger.type="button";
    trigger.textContent="";
    trigger.setAttribute("aria-label","Open theme settings");
    trigger.title="Themes";
    document.body.appendChild(trigger);

    var backdrop=document.createElement("div");
    backdrop.className="settings-backdrop";
    backdrop.innerHTML='<section class="settings-panel" role="dialog" aria-modal="true" aria-labelledby="settingsTitle">'+
      '<div class="settings-head"><div><h2 class="settings-title" id="settingsTitle">Themes</h2><p class="settings-caption">Choose the atmosphere for the archive.</p></div><button class="settings-close" type="button" aria-label="Close themes">&times;</button></div>'+
      '<div class="theme-options" role="listbox" aria-label="Themes"></div></section>';
    document.body.appendChild(backdrop);
    var options=backdrop.querySelector(".theme-options");
    Object.keys(themes).forEach(function(key){
      var item=themes[key];
      var button=document.createElement("button");
      button.className="theme-option";
      button.type="button";
      button.dataset.theme=key;
      button.setAttribute("role","option");
      if(item.art)button.innerHTML='<img src="'+item.art+'" alt="">'+item.label;
      else button.innerHTML='<span class="theme-swatch" style="--swatch:'+item.bg+'"></span>'+item.label;
      button.addEventListener("click",function(){apply(key);});
      options.appendChild(button);
    });
    trigger.addEventListener("click",function(){backdrop.classList.add("is-open");});
    backdrop.querySelector(".settings-close").addEventListener("click",function(){backdrop.classList.remove("is-open");});
    backdrop.addEventListener("click",function(event){if(event.target===backdrop)backdrop.classList.remove("is-open");});
    document.addEventListener("keydown",function(event){if(event.key==="Escape")backdrop.classList.remove("is-open");});
    return {art:art};
  }

  function loadGlobe(){
    if(current!=="yzy"||!globeHost||globeHost.dataset.loaded)return;
    globeHost.dataset.loaded="loading";
    import("https://cdn.jsdelivr.net/npm/globe.gl@2.34.0/+esm").then(function(module){
      var Globe=module.default;
      var globe=Globe()(globeHost)
        .globeImageUrl("/assets/earthspec4k.jpg")
        .bumpImageUrl("/assets/earthbump4k.jpg")
        .backgroundColor("rgba(0,0,0,0)")
        .showAtmosphere(true)
        .atmosphereColor("#ffffff")
        .atmosphereAltitude(.16)
        .width(window.innerWidth)
        .height(window.innerHeight)
        .polygonAltitude(.012)
        .polygonCapColor(function(){return "rgba(224,229,236,.94)";})
        .polygonSideColor(function(){return "rgba(139,148,160,.82)";})
        .polygonStrokeColor(function(){return "rgba(255,255,255,.92)";})
        .polygonLabel(function(feature){return feature.properties && feature.properties.name || "";})
        .enablePointerInteraction(false);
      globe.controls().autoRotate=true;
      globe.controls().autoRotateSpeed=.28;
      globe.renderer().setPixelRatio(Math.min(window.devicePixelRatio||1,1.25));
      var material=globe.globeMaterial();
      material.color.set("#030303");
      material.specular.set("#aeb7c4");
      material.shininess=180;
      material.needsUpdate=true;
      window.addEventListener("resize",function(){
        globe.width(window.innerWidth).height(window.innerHeight);
        globe.renderer().setPixelRatio(Math.min(window.devicePixelRatio||1,1.25));
      });
      globeHost.dataset.loaded="ready";
    }).catch(function(){globeHost.dataset.loaded="failed";});
  }

  function sampleArtwork(item){
    if(!item.art||item.paletteLoaded||item.fixedPalette)return;
    item.paletteLoaded=true;
    var image=new Image();
    image.onload=function(){
      var canvas=document.createElement("canvas");
      canvas.width=32;canvas.height=32;
      var context=canvas.getContext("2d");
      if(!context)return;
      context.drawImage(image,0,0,32,32);
      var pixels=context.getImageData(0,0,32,32).data;
      var red=0,green=0,blue=0,count=0;
      for(var index=0;index<pixels.length;index+=4){
        if(pixels[index+3]<100)continue;
        red+=pixels[index];green+=pixels[index+1];blue+=pixels[index+2];count++;
      }
      if(!count)return;
      red=Math.round(red/count);green=Math.round(green/count);blue=Math.round(blue/count);
      var average=(red*299+green*587+blue*114)/1000;
      var textTarget=average>145?[18,18,18]:[248,248,248];
      var textMix=average>145?.34:.48;
      function tint(channel,target){return Math.round(channel+(target-channel)*textMix);}
      item.bg="rgb("+Math.max(8,Math.round(red*.35))+","+Math.max(8,Math.round(green*.35))+","+Math.max(8,Math.round(blue*.35))+")";
      item.accent="rgb("+red+","+green+","+blue+")";
      item.ink=average>145?"#111111":"#ffffff";
      item.text="rgb("+tint(red,textTarget[0])+","+tint(green,textTarget[1])+","+tint(blue,textTarget[2])+")";
      item.muted="rgba("+tint(red,textTarget[0])+","+tint(green,textTarget[1])+","+tint(blue,textTarget[2])+",.72)";
      if(current===item.key)apply(current);
    };
    image.src=item.art;
  }

  function apply(key){
    var item=themes[key];
    if(!item)return;
    current=key;
    item.key=key;
    document.documentElement.dataset.theme=key;
    document.body.dataset.theme=key;
    document.documentElement.style.setProperty("--bg",item.bg);
    document.documentElement.style.setProperty("--surface",item.surface);
    document.documentElement.style.setProperty("--text",item.text);
    document.documentElement.style.setProperty("--muted",item.muted);
    document.documentElement.style.setProperty("--accent",item.accent);
    document.documentElement.style.setProperty("--accent-ink",item.ink);
    document.documentElement.style.setProperty("background",item.bg,"important");
    document.body.style.setProperty("background",item.bg,"important");
    document.body.style.setProperty("color",item.text,"important");
    art.style.backgroundImage=item.art?"url('"+item.art+"')":"none";
    document.querySelectorAll(".theme-option").forEach(function(option){
      var selected=option.dataset.theme===key;
      option.classList.toggle("is-selected",selected);
      option.setAttribute("aria-selected",String(selected));
    });
    try{localStorage.setItem(STORAGE_KEY,key);}catch(error){}
    loadGlobe();
    sampleArtwork(item);
  }

  var art;
  function start(){art=makeUI().art;apply(current);}
  if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",start);else start();
})();

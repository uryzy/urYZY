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

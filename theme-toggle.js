(function(){
  "use strict";

  var STORAGE_KEY="urYZYTheme";
  var PERFORMANCE_KEY="urYZYPerformance";
  var CLASSIC_THEME="classic2009";
  var SECRET="classic2009theme";
  var body=document.body;
  if(!body)return;

  function getTheme(){
    try{return localStorage.getItem(STORAGE_KEY)||"bully";}catch(error){return "bully";}
  }

  function getPerformance(){
    try{return localStorage.getItem(PERFORMANCE_KEY)==="lite";}catch(error){return false;}
  }

  function setTheme(theme,save){
    var isClassic=theme===CLASSIC_THEME;
    body.setAttribute("data-theme",isClassic?CLASSIC_THEME:"bully");
    document.documentElement.style.colorScheme=isClassic?"light":"dark";

    var themeColor=document.querySelector('meta[name="theme-color"]');
    if(themeColor)themeColor.setAttribute("content",isClassic?"#d8d0bc":"#08090b");

    document.querySelectorAll("[data-theme-choice]").forEach(function(choice){
      var selected=choice.getAttribute("data-theme-choice")===theme;
      choice.setAttribute("aria-pressed",selected?"true":"false");
      choice.classList.toggle("is-selected",selected);
    });

    if(save){
      try{localStorage.setItem(STORAGE_KEY,isClassic?CLASSIC_THEME:"bully");}catch(error){}
    }
  }

  function setPerformance(enabled,save){
    body.setAttribute("data-performance",enabled?"lite":"full");

    var choice=document.querySelector("[data-performance-choice]");
    if(choice){
      choice.setAttribute("aria-pressed",enabled?"true":"false");
      choice.classList.toggle("is-selected",enabled);
      choice.textContent=enabled?"Performance mode: On":"Performance mode: Off";
    }

    if(save){
      try{localStorage.setItem(PERFORMANCE_KEY,enabled?"lite":"full");}catch(error){}
    }
  }

  function buildSettings(){
    var wrap=document.createElement("div");
    wrap.className="theme-settings";
    wrap.innerHTML=
      '<button class="theme-settings-trigger" type="button" aria-expanded="false" aria-controls="themeSettingsPanel">Settings</button>'+
      '<div class="theme-settings-panel" id="themeSettingsPanel" hidden>'+
        '<div class="theme-settings-title">Appearance</div>'+
        '<button type="button" data-theme-choice="bully" aria-pressed="false">BULLY</button>'+
        '<button type="button" data-theme-choice="classic2009" aria-pressed="false">wtf test lol</button>'+ 
        '<div class="theme-settings-title theme-settings-performance-title">Speed</div>'+ 
        '<button type="button" data-performance-choice aria-pressed="false">Performance mode: Off</button>'+ 
      '</div>';

    var trigger=wrap.querySelector(".theme-settings-trigger");
    var panel=wrap.querySelector(".theme-settings-panel");

    trigger.addEventListener("click",function(){
      var isOpen=!panel.hidden;
      panel.hidden=isOpen;
      trigger.setAttribute("aria-expanded",isOpen?"false":"true");
    });

    wrap.querySelectorAll("[data-theme-choice]").forEach(function(choice){
      choice.addEventListener("click",function(){
        setTheme(choice.getAttribute("data-theme-choice"),true);
      });
    });

    wrap.querySelector("[data-performance-choice]").addEventListener("click",function(){
      setPerformance(body.getAttribute("data-performance")!=="lite",true);
    });

    document.addEventListener("click",function(event){
      if(!wrap.contains(event.target)){
        panel.hidden=true;
        trigger.setAttribute("aria-expanded","false");
      }
    });

    body.appendChild(wrap);
  }

  var typed="";
  document.addEventListener("keydown",function(event){
    if(event.ctrlKey||event.metaKey||event.altKey)return;
    if(event.key.length!==1)return;

    typed=(typed+event.key.toLowerCase()).slice(-SECRET.length);
    if(typed===SECRET){
      setTheme(CLASSIC_THEME,true);
      typed="";
    }
  });

  buildSettings();
  setTheme(getTheme(),false);
  setPerformance(getPerformance(),false);
})();

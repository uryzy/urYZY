(function(){
  "use strict";

  var artwork=[
    "/assets/WAR.jpg",
    "/assets/BADBITCHPLAYBOOK.png",
    "/assets/BADBITCHPLAYBOOK2.png",
    "/assets/BADBITCHPLAYBOOKPREVULTURES1.png",
    "/assets/BULLYLP.png",
    "/assets/BULLYPV.png",
    "/assets/BULLYDG.png",
    "/assets/WW3.png",
    "/assets/CUCK.png",
    "/assets/IAPW.png"
  ];
  var layers=[];
  var currentIndex=-1;
  var changeTimer;

  function nextIndex(){
    var index=Math.floor(Math.random()*artwork.length);
    if(artwork.length>1&&index===currentIndex)index=(index+1)%artwork.length;
    currentIndex=index;
    return index;
  }

  function averageColor(image,callback){
    var canvas=document.createElement("canvas");
    canvas.width=16;
    canvas.height=16;
    var context=canvas.getContext("2d");
    if(!context){callback("255,255,255");return;}
    try{
      context.drawImage(image,0,0,16,16);
      var pixels=context.getImageData(0,0,16,16).data;
      var red=0,green=0,blue=0,count=0;
      for(var index=0;index<pixels.length;index+=16){
        var brightness=(pixels[index]+pixels[index+1]+pixels[index+2])/3;
        if(brightness<12||brightness>245)continue;
        red+=pixels[index];
        green+=pixels[index+1];
        blue+=pixels[index+2];
        count++;
      }
      count=count||1;
      callback([Math.round(red/count),Math.round(green/count),Math.round(blue/count)].join(","));
    }catch(error){
      callback("255,255,255");
    }
  }

  function setLayer(layer,index){
    var image=new Image();
    image.onload=function(){
      averageColor(image,function(color){
        layer.style.backgroundImage=
          "linear-gradient(110deg,rgba(8,9,11,.98) 8%,rgba(8,9,11,.86) 45%,rgba("+color+",.16)),url(\""+artwork[index]+"\")";
        layer.classList.add("is-ready");
        window.requestAnimationFrame(function(){
          layers.forEach(function(item){item.classList.remove("is-current");});
          layer.classList.add("is-current");
        });
      });
    };
    image.src=artwork[index];
  }

  function cycle(){
    var layer=layers.filter(function(item){return !item.classList.contains("is-current");})[0]||layers[0];
    setLayer(layer,nextIndex());
  }

  function start(){
    if(!document.body||document.querySelector(".ambient-art"))return;
    var first=document.createElement("div");
    var second=document.createElement("div");
    first.className="ambient-art";
    second.className="ambient-art";
    document.body.insertBefore(first,document.body.firstChild);
    document.body.insertBefore(second,document.body.firstChild);
    layers=[first,second];
    var begin=function(){
      cycle();
      changeTimer=window.setInterval(cycle,20000);
    };
    if("requestIdleCallback" in window){
      window.requestIdleCallback(begin,{timeout:1200});
    }else{
      window.setTimeout(begin,120);
    }
    if(window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches){
      window.clearInterval(changeTimer);
    }
  }

  if(document.readyState==="loading"){
    document.addEventListener("DOMContentLoaded",start,{once:true});
  }else{
    start();
  }
})();

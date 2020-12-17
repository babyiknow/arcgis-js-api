/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../../core/has","../../core/Logger","../../core/ArrayPool","../../chunks/index2"],(function(e,t,n,i,r){"use strict";var s,o,a=function(e){s||function(e){if("WebkitTransition"in e.style)s="webkitTransitionEnd",o="webkitAnimationEnd";else{if(!("transition"in e.style))throw new Error("Your browser is not supported!");s="transitionend",o="animationend"}}(e)},c=function(e,t){return void 0===t&&(t=e+"-active"),function(n){a(n);var i=!1,r=function(a){i||(i=!0,n.removeEventListener(s,r),n.removeEventListener(o,r),n.classList.remove(e),n.classList.remove(t))};n.classList.add(e),n.addEventListener(s,r),n.addEventListener(o,r),requestAnimationFrame((function(){n.classList.add(t)}))}},l=function(e,t){return void 0===t&&(t=e+"-active"),function(n,i){a(n);var r=!1,c=function(e){r||(r=!0,n.removeEventListener(s,c),n.removeEventListener(o,c),i())};n.classList.add(e),n.addEventListener(s,c),n.addEventListener(o,c),requestAnimationFrame((function(){n.classList.add(t)}))}};n.getLogger("esri.widgets.support.widgetUtils");const d=["h1","h2","h3","h4","h5","h6","sub","sup","animate","animatetransform","circle","clippath","defs","ellipse","g","image","line","lineargradient","marker","mask","path","pattern","polygon","polyline","radialgradient","rect","stop","svg","switch","symbol","text","textpath","tspan","use"],u=d.reduce(((e,t)=>(e[t]=[],e)),{}),p=["align","alink","alt","bgcolor","border","cellpadding","cellspacing","class","color","cols","colspan","coords","dir","face","height","hspace","ismap","lang","marginheight","marginwidth","multiple","nohref","noresize","noshade","nowrap","ref","rel","rev","rows","rowspan","scrolling","shape","span","summary","tabindex","title","usemap","valign","value","vlink","vspace","width"],g=new r.Sanitizer({whiteList:u,onTagAttr:(e,t,n)=>{const i=`${t}="${n}"`;if(p.includes(t))return i},stripIgnoreTag:!0,stripIgnoreTagBody:["script","style"]},!0);function f(){return getComputedStyle(document.body).getPropertyValue("--esri-calcite-theme-name")}e.additionalAllowedTags=d,e.classes=function(e){const t=i.acquire();for(let e=0;e<arguments.length;e++){const n=arguments[e],i=typeof n;if("string"===i)t.push(n);else if(Array.isArray(n))t.push.apply(t,n);else if("object"===i)for(const e in n)n[e]&&t.push(e)}const n=t.join(" ");return i.release(t),n},e.cssTransition=function(e,t){return("enter"===e?c:l)(t)},e.discardNode=function(e){this[e.getAttribute("data-node-ref")]=null},e.getThemeName=f,e.isDarkTheme=function(){var e;return-1!==(null==(e=f())?void 0:e.indexOf("dark"))},e.isRTL=function(){return"rtl"===document.dir},e.keepMenuItemWithinView=function(e,t){const n=e.getBoundingClientRect(),i=t.getBoundingClientRect(),r=n.top+n.height,s=i.top+i.height,o=n.top,a=i.top;(r>s||o<a)&&e.scrollIntoView({block:"end"})},e.renderingSanitizer=g,e.safeAttrs=p,e.storeNode=function(e){this[e.getAttribute("data-node-ref")]=e},Object.defineProperty(e,"__esModule",{value:!0})}));

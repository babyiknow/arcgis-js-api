/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","./dom"],(function(e,r){"use strict";const t=(e,r)=>{const t=[];for(;e!==r;)t.push(e),e=e.parentNode;return t};let n;n=Array.prototype.find?(e,r)=>e.find(r):(e,r)=>e.filter(r)[0];const o=(e,r)=>{let t=e;return r.forEach((e=>{t=t&&t.children?n(t.children,(r=>r.domNode===e)):void 0})),t},d=(e,r,n)=>{const d=function(d){n("domEvent",d);const c=r(),s=t(d.currentTarget,c.domNode);s.reverse();const i=o(c.getLastRender(),s);let p;return e.scheduleRender(),i&&(p=i.properties[`on${d.type}`].apply(i.properties.bind||this,arguments)),n("domEventProcessed",d),p};return()=>d};e.createProjector=e=>{let t;const n=r.applyDefaultProjectionOptions(e),o=n.performanceLogger;let c,s=!0,i=!1;const p=[],l=[],a=(e,r,c)=>{let s;n.eventHandlerInterceptor=d(t,(()=>s),o),s=e(r,c(),n),p.push(s),l.push(c)},u=()=>{if(c=void 0,s){s=!1,o("renderStart",void 0);for(let e=0;e<p.length;e++){const r=l[e]();o("rendered",void 0),p[e].update(r),o("patched",void 0)}o("renderDone",void 0),s=!0}};return t={renderNow:u,scheduleRender:()=>{c||i||(c=requestAnimationFrame(u))},stop:()=>{c&&(cancelAnimationFrame(c),c=void 0),i=!0},resume:()=>{i=!1,s=!0,t.scheduleRender()},append:(e,t)=>{a(r.dom.append,e,t)},insertBefore:(e,t)=>{a(r.dom.insertBefore,e,t)},merge:(e,t)=>{a(r.dom.merge,e,t)},replace:(e,t)=>{a(r.dom.replace,e,t)},detach:e=>{for(let r=0;r<l.length;r++)if(l[r]===e)return l.splice(r,1),p.splice(r,1)[0];throw new Error("renderFunction was not found")}},t},Object.defineProperty(e,"__esModule",{value:!0})}));

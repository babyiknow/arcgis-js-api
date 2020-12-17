/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../../widgets/support/widgetUtils"],(function(e,t){"use strict";const r="http://www.w3.org/",o=`${r}2000/svg`,n=`${r}1999/xlink`,s=[];let i=(e,t)=>{const r={};return Object.keys(e).forEach((t=>{r[t]=e[t]})),t&&Object.keys(t).forEach((e=>{r[e]=t[e]})),r};const p=(e,t)=>e.vnodeSelector===t.vnodeSelector&&(e.properties&&t.properties?e.properties.key===t.properties.key&&e.properties.bind===t.properties.bind:!e.properties&&!t.properties),d=e=>{if("string"!=typeof e)throw new Error("Style values must be strings")},l=(e,t,r)=>{if(""!==t.vnodeSelector)for(let o=r;o<e.length;o++)if(p(e[o],t))return o;return-1},c=(e,t,r,o)=>{const n=e[t];if(""===n.vnodeSelector)return;const s=n.properties;if(!(s?void 0===s.key?s.bind:s.key:void 0))for(let s=0;s<e.length;s++)if(s!==t){const t=e[s];if(p(t,n))throw new Error(`${r.vnodeSelector} had a ${n.vnodeSelector} child ${"added"===o?o:"removed"}, but there is now more than one. You must add unique key properties to make them distinguishable.`)}},a=e=>{if(e.properties){const t=e.properties.enterAnimation;t&&t(e.domNode,e.properties)}},f=[];let u=!1;const h=e=>{(e.children||[]).forEach(h),e.properties&&e.properties.afterRemoved&&e.properties.afterRemoved.apply(e.properties.bind||e.properties,[e.domNode])},v=()=>{u=!1,f.forEach(h),f.length=0},m=e=>{f.push(e),u||(u=!0,"undefined"!=typeof window&&"requestIdleCallback"in window?window.requestIdleCallback(v,{timeout:16}):setTimeout(v,16))},y=e=>{const t=e.domNode;if(e.properties){const r=e.properties.exitAnimation;if(r){t.style.pointerEvents="none";const o=()=>{t.parentNode&&(t.parentNode.removeChild(t),m(e))};return void r(t,o,e.properties)}}t.parentNode&&(t.parentNode.removeChild(t),m(e))},g=(e,r,s)=>{if(!r)return;const i=s.eventHandlerInterceptor,p=Object.keys(r),l=p.length;for(let c=0;c<l;c++){const l=p[c];let a=r[l];if("className"===l)throw new Error('Property "className" is not supported, use "class".');if("class"===l)x(e,a,!0);else if("classes"===l){const t=Object.keys(a),r=t.length;for(let o=0;o<r;o++){const r=t[o];a[r]&&e.classList.add(r)}}else if("styles"===l){const t=Object.keys(a),r=t.length;for(let o=0;o<r;o++){const r=t[o],n=a[r];n&&(d(n),s.styleApplyer(e,r,n))}}else if("key"!==l&&null!=a){const p=typeof a;"function"===p?0===l.lastIndexOf("on",0)&&(i&&(a=i(l,a,e,r)),"oninput"===l&&function(){const e=a;a=function(t){e.apply(this,[t]),t.target["oninput-value"]=t.target.value}}(),e[l]=a):s.namespace===o?"href"===l?e.setAttributeNS(n,l,a):e.setAttribute(l,a):"string"===p&&"value"!==l?"innerHTML"===l?e[l]=t.renderingSanitizer.sanitize(a):e.setAttribute(l,a):e[l]=a}}};let b,N=(e,t,r)=>{((e,t,r)=>{if(t)for(const o of t)w(o,e,void 0,r)})(e,t.children,r),t.text&&(e.textContent=t.text),g(e,t.properties,r),t.properties&&t.properties.afterCreate&&t.properties.afterCreate.apply(t.properties.bind||t.properties,[e,r,t.vnodeSelector,t.properties,t.children])},w=(e,t,r,n)=>{let s,p=0;const d=e.vnodeSelector,l=t.ownerDocument;if(""===d)s=e.domNode=l.createTextNode(e.text),void 0!==r?t.insertBefore(s,r):t.appendChild(s);else{for(let c=0;c<=d.length;++c){const a=d.charAt(c);if(c===d.length||"."===a||"#"===a){const a=d.charAt(p-1),f=d.slice(p,c);"."===a?s.classList.add(f):"#"===a?s.id=f:("svg"===f&&(n=i(n,{namespace:o})),void 0!==n.namespace?s=e.domNode=l.createElementNS(n.namespace,f):(s=e.domNode=e.domNode||l.createElement(f),"input"===f&&e.properties&&void 0!==e.properties.type&&s.setAttribute("type",e.properties.type)),void 0!==r?t.insertBefore(s,r):s.parentNode!==t&&t.appendChild(s)),p=c+1}}N(s,e,n)}};const x=(e,t,r)=>{t&&t.split(" ").forEach((t=>{t&&e.classList.toggle(t,r)}))};b=(e,r,f)=>{const u=e.domNode;let h=!1;if(e===r)return!1;let v=!1;if(""===r.vnodeSelector){if(r.text!==e.text){const e=u.ownerDocument.createTextNode(r.text);return u.parentNode.replaceChild(e,u),r.domNode=e,h=!0,h}r.domNode=u}else 0===r.vnodeSelector.lastIndexOf("svg",0)&&(f=i(f,{namespace:o})),e.text!==r.text&&(v=!0,void 0===r.text?u.removeChild(u.firstChild):u.textContent=r.text),r.domNode=u,v=((e,t,r,o,n)=>{if(r===o)return!1;o=o||s;const i=(r=r||s).length,d=o.length;let f,u=0,h=0,v=!1;for(;h<d;){const s=u<i?r[u]:void 0,d=o[h];if(void 0!==s&&p(s,d))v=b(s,d,n)||v,u++;else{const s=l(r,d,u+1);if(s>=0){for(f=u;f<s;f++)y(r[f]),c(r,f,e,"removed");v=b(r[s],d,n)||v,u=s+1}else w(d,t,u<i?r[u].domNode:void 0,n),a(d),c(o,h,e,"added")}h++}if(i>u)for(f=u;f<i;f++)y(r[f]),c(r,f,e,"removed");return v})(r,u,e.children,r.children,f)||v,v=((e,r,s,i)=>{if(!s)return;let p=!1;const l=Object.keys(s),c=l.length;for(let a=0;a<c;a++){const c=l[a];let f=s[c];const u=r[c];if("class"===c)u!==f&&(x(e,u,!1),x(e,f,!0));else if("classes"===c){const t=e.classList,r=Object.keys(f),o=r.length;for(let e=0;e<o;e++){const o=r[e],n=!!f[o];n!==!!u[o]&&(p=!0,n?t.add(o):t.remove(o))}}else if("styles"===c){const t=Object.keys(f),r=t.length;for(let o=0;o<r;o++){const r=t[o],n=f[r];n!==u[r]&&(p=!0,n?(d(n),i.styleApplyer(e,r,n)):i.styleApplyer(e,r,""))}}else if(f||"string"!=typeof u||(f=""),"value"===c){const t=e[c];t!==f&&(e["oninput-value"]?t===e["oninput-value"]:f!==u)&&(e[c]=f,e["oninput-value"]=void 0),f!==u&&(p=!0)}else if(f!==u){const r=typeof f;"function"===r&&i.eventHandlerInterceptor||(i.namespace===o?"href"===c?e.setAttributeNS(n,c,f):e.setAttribute(c,f):"string"===r?"innerHTML"===c?e[c]=t.renderingSanitizer.sanitize(f):"role"===c&&""===f?e.removeAttribute(c):e.setAttribute(c,f):e[c]!==f&&(e[c]=f),p=!0)}}return p})(u,e.properties,r.properties,f)||v,r.properties&&r.properties.afterUpdate&&r.properties.afterUpdate.apply(r.properties.bind||r.properties,[u,f,r.vnodeSelector,r.properties,r.children]);return v&&r.properties&&r.properties.updateAnimation&&r.properties.updateAnimation(u,r.properties,e.properties),h};e.createDom=w,e.createProjection=(e,t)=>({getLastRender:()=>e,update:r=>{if(e.vnodeSelector!==r.vnodeSelector)throw new Error("The selector for the root VNode may not be changed. (consider using dom.merge and add one extra level to the virtual DOM)");const o=e;e=r,b(o,r,t)},domNode:e.domNode}),e.extend=i,e.initPropertiesAndChildren=N,Object.defineProperty(e,"__esModule",{value:!0})}));

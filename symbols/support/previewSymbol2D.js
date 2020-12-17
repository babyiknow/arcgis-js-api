/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../../core/Error","../../core/promiseUtils","../../core/screenUtils","./gfxUtils","./previewUtils","./renderUtils"],(function(e,t,a,l,n,s,o){"use strict";const i="picture-fill",r=120,c=document.createElement("canvas");e.previewSymbol2D=function(e,u){const p=null!=(null==u?void 0:u.size)?l.pt2px(u.size):null,m=null!=(null==u?void 0:u.maxSize)?l.pt2px(u.maxSize):null,h=null!=(null==u?void 0:u.opacity)?u.opacity:null,d=null!=(null==u?void 0:u.rotation)?u.rotation:null,f=n.getStroke(e),v={shape:null,fill:null,stroke:f,offset:[0,0]};null!=f&&f.width&&(f.width=Math.min(f.width,80));const y=(null==f?void 0:f.width)||0;let g=null!=p&&(null==(null==u?void 0:u.scale)||(null==u?void 0:u.scale)),x=0,M=0;switch(e.type){case"simple-marker":{const t=e.style,a=Math.min(null!=p?p:l.pt2px(e.size),m||r);switch(x=a,M=a,t){case"circle":v.shape={type:"circle",cx:0,cy:0,r:.5*a},g||(x+=y,M+=y);break;case"cross":v.shape={type:"path",path:[{command:"M",values:[0,.5*M]},{command:"L",values:[x,.5*M]},{command:"M",values:[.5*x,0]},{command:"L",values:[.5*x,M]}]};break;case"diamond":v.shape={type:"path",path:[{command:"M",values:[0,.5*M]},{command:"L",values:[.5*x,0]},{command:"L",values:[x,.5*M]},{command:"L",values:[.5*x,M]},{command:"Z",values:[]}]},g||(x+=y,M+=y);break;case"square":v.shape={type:"path",path:[{command:"M",values:[0,0]},{command:"L",values:[x,0]},{command:"L",values:[x,M]},{command:"L",values:[0,M]},{command:"Z",values:[]}]},g||(x+=y,M+=y);break;case"triangle":v.shape={type:"path",path:[{command:"M",values:[.5*x,0]},{command:"L",values:[x,M]},{command:"L",values:[0,M]},{command:"Z",values:[]}]},g||(x+=y,M+=y);break;case"x":v.shape={type:"path",path:[{command:"M",values:[0,0]},{command:"L",values:[x,M]},{command:"M",values:[x,0]},{command:"L",values:[0,M]}]};break;case"path":v.shape={type:"path",path:e.path||""},g||(x+=y,M+=y),g=!0}break}case"simple-line":{const e=Math.min(null!=p?p:y,m||80),t=e>22?2*e:40;f.width=e,x=t,M=e,v.shape={type:"path",path:[{command:"M",values:[0,M]},{command:"L",values:[x,M]}]};break}case i:case"simple-fill":x=Math.min(null!=p?p:22,m||r)+y,M=x,g=!0,v.shape="object"==typeof(null==u?void 0:u.symbolConfig)&&null!=u&&u.symbolConfig.isSquareFill?s.shapes.squareFill[0]:s.shapes.fill[0];break;case"picture-marker":{let t=l.pt2px(e.width),a=l.pt2px(e.height);const n=Math.max(t,a),s=t/a;t=s<=1?Math.ceil(n*s):n,a=s<=1?n:Math.ceil(n/s),x=Math.min(null!=p?p:t,m||r),M=Math.min(null!=p?p:a,m||r),v.shape={type:"image",x:-Math.round(x/2),y:-Math.round(M/2),width:x,height:M,src:e.url||""};break}case"text":{const t=e,a=t.text||"Aa",n=t.font,s=Math.min(null!=p?p:l.pt2px(n.size),m||r),o=function(e,t){const a=c.getContext("2d"),l=[];return t&&(t.weight&&l.push(t.weight),t.size&&l.push(t.size+"px"),t.family&&l.push(t.family)),a.font=l.join(" "),a.measureText(e).width}(a,{weight:n.weight,size:s,family:n.family}),i=/[\uE600-\uE6FF]/.test(a);x=i?s:o,M=s;let u=.25*function(e){if(0===e.length)return 0;if(e.length>2){const t=l.px2pt(1),a=parseFloat(e);switch(e.slice(-2)){case"px":return a;case"pt":return a*t;case"in":return 72*a*t;case"pc":return 12*a*t;case"mm":return 2.8346456692913384*a*t;case"cm":return 28.346456692913385*a*t}}return parseFloat(e)}((n?s:0).toString());i&&(u+=5),v.shape={type:"text",text:a,x:0,y:u,align:"middle",decoration:n&&n.decoration,rotated:t.rotated,kerning:t.kerning},v.font=n&&{size:s,style:n.style,decoration:n.decoration,weight:n.weight,family:n.family};break}}if(!v.shape)return a.reject(new t("symbolPreview: renderPreviewHTML2D","symbol not supported."));const b=n.getFill(e),w=b,k=e.color;let L=null;return w&&"pattern"===w.type&&k&&e.type!==i?L=n.getPatternUrlWithColor(w.src,k.toCss(!0)).then((e=>(w.src=e,v.fill=w,v))):(v.fill=b,L=a.resolve(v)),L.then((e=>{const t=[[e]];if("object"==typeof(null==u?void 0:u.symbolConfig)&&null!=u&&u.symbolConfig.applyColorModulation){const a=.6*x;t.unshift([{...e,offset:[-a,0],fill:s.adjustColorBrightness(b,-.3)}]),t.push([{...e,offset:[a,0],fill:s.adjustColorBrightness(b,.3)}]),x+=2*a}return o.renderSymbol(t,[x,M],{node:u&&u.node,scale:g,opacity:h,rotation:d})}))},Object.defineProperty(e,"__esModule",{value:!0})}));

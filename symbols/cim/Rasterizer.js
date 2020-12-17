/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["./utils","./Rect","./CIMSymbolHelper","./SDFHelper"],(function(e,r,t,a){"use strict";return function(){function n(){}var i=n.prototype;return i.dispose=function(){this._rasterizationCanvas=null},i.rasterizeJSONResource=function(e,n,i){if(this._rasterizationCanvas||(this._rasterizationCanvas=document.createElement("canvas")),"simple-fill"===e.type||"esriSFS"===e.type){const[r,a,i]=t.SymbolHelper.rasterizeSimpleFill(this._rasterizationCanvas,e.style,n);return{size:[a,i],image:new Uint32Array(r.buffer),sdf:!1,simplePattern:!0,anchorX:0,anchorY:0}}if("simple-line"===e.type||"esriSLS"===e.type){const[r,a,n]=t.SymbolHelper.rasterizeSimpleLine(e.style,e.cap);return{size:[a,n],image:new Uint32Array(r.buffer),sdf:!0,simplePattern:!0,anchorX:0,anchorY:0}}let o,s,l;if("simple-marker"===e.type||"esriSMS"===e.type||"line-marker"===e.type?(o=t.CIMSymbolHelper.fromSimpleMarker(e),l=a.getSDFInfo(o)):"CIMHatchFill"===e.type?(o=t.CIMSymbolHelper.fromCIMHatchFill(e),s=new r(o.frame.xmin,-o.frame.ymax,o.frame.xmax-o.frame.xmin,o.frame.ymax-o.frame.ymin)):e.markerPlacement&&"CIMMarkerPlacementInsidePolygon"===e.markerPlacement.type?(o=t.CIMSymbolHelper.fromCIMInsidePolygon(e),s=new r(o.frame.xmin,-o.frame.ymax,o.frame.xmax-o.frame.xmin,o.frame.ymax-o.frame.ymin)):(o=e,l=a.getSDFInfo(o)),l&&!i){const[e,r,t]=a.buildSDF(l);return e?{size:[r,t],image:new Uint32Array(e.buffer),sdf:!0,simplePattern:!0,anchorX:0,anchorY:0}:null}const[m,f,c,p,u]=t.CIMSymbolHelper.rasterize(this._rasterizationCanvas,o,s,!i);return m?{size:[f,c],image:new Uint32Array(m.buffer),sdf:!1,simplePattern:!1,anchorX:p,anchorY:u}:null},i.rasterizeImageResource=function(r,t,a,n){this._rasterizationCanvas||(this._rasterizationCanvas=document.createElement("canvas")),this._rasterizationCanvas.width=r,this._rasterizationCanvas.height=t;const i=this._rasterizationCanvas.getContext("2d");a instanceof ImageData?i.putImageData(a,0,0):(a.setAttribute("width",`${r}px`),a.setAttribute("height",`${t}px`),i.drawImage(a,0,0,r,t));const o=i.getImageData(0,0,r,t),s=new Uint8Array(o.data);if(n)for(const e of n)if(e&&e.oldColor&&4===e.oldColor.length&&e.newColor&&4===e.newColor.length){const[r,t,a,n]=e.oldColor,[i,o,l,m]=e.newColor;if(r===i&&t===o&&a===l&&n===m)continue;for(let e=0;e<s.length;e+=4)r===s[e]&&t===s[e+1]&&a===s[e+2]&&n===s[e+3]&&(s[e]=i,s[e+1]=o,s[e+2]=l,s[e+3]=m)}let l;for(let e=0;e<s.length;e+=4)l=s[e+3]/255,s[e]=s[e]*l,s[e+1]=s[e+1]*l,s[e+2]=s[e+2]*l;let m=s,f=r,c=t;const p=512;if(f>=p||c>=p){const a=f/c;a>1?(f=p,c=Math.round(p/a)):(c=p,f=Math.round(p*a)),m=new Uint8Array(4*f*c);const n=new Uint8ClampedArray(m.buffer);e.resampleHermite(s,r,t,n,f,c,!1)}return{size:[r,t],image:new Uint32Array(m.buffer),sdf:!1,simplePattern:!1,anchorX:0,anchorY:0}},n}()}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../PixelBlock"],(function(e,t){"use strict";const i=180/Math.PI,r=function(e){return e&&"esri.layers.support.PixelBlock"===e.declaredClass&&e.pixels&&e.pixels.length>0},n=new Map;function o(e){return(450-e)%360}function s(e,t="geographic"){const[r,n]=e,s=Math.sqrt(r*r+n*n);let l=Math.atan2(n,r)*i;return l=(360+l)%360,"geographic"===t&&(l=o(l)),[s,l]}function l(e,t="geographic"){let r=e[1];"geographic"===t&&(r=o(r)),r%=360;const n=e[0];return[n*Math.cos(r/i),n*Math.sin(r/i)]}n.set("meter-per-second",1),n.set("kilometer-per-hour",.277778),n.set("knots",.514444),n.set("feet-per-second",.3048),n.set("mile-per-hour",.44704),e.convertVectorFieldData=function(e,i,n="geographic",o=1){if(!r(e))return e;const{pixels:c,width:a,height:p}=e,u=a*p,h=c[0],d=c[1],g=t.createEmptyBand(e.pixelType,u),f=t.createEmptyBand(e.pixelType,u);let x=0;for(let e=0;e<p;e++)for(let e=0;e<a;e++)"vector-uv"===i?([g[x],f[x]]=s([h[x],d[x]],n),g[x]*=o):([g[x],f[x]]=l([h[x],d[x]],n),g[x]*=o,f[x]*=o),x++;const v=new t({pixelType:e.pixelType,width:e.width,height:e.height,mask:e.mask,validPixelCount:e.validPixelCount,maskIsAlpha:e.maskIsAlpha,pixels:[g,f]});return v.updateStatistics(),v},e.convertVectorFieldUnit=function(e,t,i=1){if(1===i||!r(e))return e;const n=e.clone(),{pixels:o,width:s,height:l}=n,c=o[0],a=o[1];let p=0;for(let e=0;e<l;e++)for(let e=0;e<s;e++)"vector-uv"===t?(c[p]*=i,a[p]*=i):c[p]*=i,p++;return n.updateStatistics(),n},e.getUnitConversionFactor=function(e,t){return n.get(t)/n.get(e)||1},e.isValidPixelBlock=r,Object.defineProperty(e,"__esModule",{value:!0})}));

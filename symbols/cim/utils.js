/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports"],(function(e){"use strict";function t(e,t){switch("string"!=typeof e&&(e=String(e)),t){case"LowerCase":return e.toLowerCase();case"Allcaps":return e.toUpperCase();default:return e}}e._adjustTextCase=t,e.colorToArray=function(e){return[e.r,e.g,e.b,e.a]},e.createLabelOverrideFunction=function(e,r,n){const a=e=>{let t=e.length;for(;t--;)if(-1===" /-,\n".indexOf(e.charAt(t)))return!1;return!0},o=[];let i=0,l=-1;do{if(l=r.indexOf("[",i),l>=i){if(l>i){const e=r.substr(i,l-i);o.push([e,null,a(e)])}if(i=l+1,l=r.indexOf("]",i),l>=i){if(l>i){const t=e[r.substr(i,l-i)];t&&o.push([null,t,!1])}i=l+1}}}while(-1!==l);if(i<r.length-1){const e=r.substr(i);o.push([e,null,a(e)])}return e=>{let r="",a=null;for(const t of o){const[n,o,i]=t;if(n)i?a=n:(a&&(r+=a,a=null),r+=n);else{const t=e.attributes[o];t&&(a&&(r+=a,a=null),r+=t)}}return t(r,n)}},e.evaluateValueOrFunction=function(e,t,r,n){return function(e){return"function"==typeof e}(e)?e(t,r,n):e},e.fromCIMColor=function(e){return e?{r:e[0],g:e[1],b:e[2],a:e[3]/255}:{r:0,g:0,b:0,a:0}},e.isCIMFill=function(e){return"CIMGradientFill"===e.type||"CIMHatchFill"===e.type||"CIMPictureFill"===e.type||"CIMSolidFill"===e.type||"CIMWaterFill"===e.type},e.isCIMMarker=function(e){return"CIMVectorMarker"===e.type||"CIMPictureMarker"===e.type||"CIMBarChartMarker"===e.type||"CIMCharacterMarker"===e.type||"CIMPieChartMarker"===e.type||"CIMStackedBarChartMarker"===e.type},e.isCIMMarkerStrokePlacement=function(e){return"CIMMarkerPlacementAlongLineRandomSize"===e.type||"CIMMarkerPlacementAlongLineSameSize"===e.type||"CIMMarkerPlacementAlongLineVariableSize"===e.type||"CIMMarkerPlacementAtExtremities"===e.type||"CIMMarkerPlacementAtMeasuredUnits"===e.type||"CIMMarkerPlacementAtRatioPositions"===e.type||"CIMMarkerPlacementOnLine"===e.type||"CIMMarkerPlacementOnVertices"===e.type},e.isCIMStroke=function(e){return"CIMGradientStroke"===e.type||"CIMPictureStroke"===e.type||"CIMSolidStroke"===e.type},e.resampleHermite=function(e,t,r,n,a,o,i=!0){const l=t/a,u=r/o,c=Math.ceil(l/2),M=Math.ceil(u/2);for(let r=0;r<o;r++)for(let s=0;s<a;s++){const f=4*(s+(i?o-r-1:r)*a);let C=0,p=0,y=0,I=0,k=0,h=0,d=0;const m=(r+.5)*u;for(let n=Math.floor(r*u);n<(r+1)*u;n++){const r=Math.abs(m-(n+.5))/M,a=(s+.5)*l,o=r*r;for(let r=Math.floor(s*l);r<(s+1)*l;r++){let i=Math.abs(a-(r+.5))/c;const l=Math.sqrt(o+i*i);l>=-1&&l<=1&&(C=2*l*l*l-3*l*l+1,C>0&&(i=4*(r+n*t),d+=C*e[i+3],y+=C,e[i+3]<255&&(C=C*e[i+3]/250),I+=C*e[i],k+=C*e[i+1],h+=C*e[i+2],p+=C))}}n[f]=I/p,n[f+1]=k/p,n[f+2]=h/p,n[f+3]=d/y}},e.toCIMSymbolJSON=function(e){var t;return null==(t=e.data)?void 0:t.symbol},Object.defineProperty(e,"__esModule",{value:!0})}));

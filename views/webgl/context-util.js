/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports"],(function(e){"use strict";function t(e,t={},r){let o;switch(r){case"webgl":o=["webgl","experimental-webgl","webkit-3d","moz-webgl"];break;case"webgl2":o=["webgl2"];break;default:o=["webgl","experimental-webgl","webkit-3d","moz-webgl"]}let l=null;for(const r of o){try{l=e.getContext(r,t)}catch(e){}if(l)break}return l}function r(e,t){const r=e.parentNode;r&&(r.innerHTML='<table style="background-color: #8CE; width: 100%; height: 100%;"><tr><td align="center"><div style="display: table-cell; vertical-align: middle;"><div style="">'+t+"</div></div></td></tr></table>")}const o='This page requires a browser that supports WebGL.<br/><a href="http://get.webgl.org">Click here to upgrade your browser.</a>',l='It doesn\'t appear your computer can support WebGL.<br/><a href="http://get.webgl.org/troubleshooting/">Click here for more information.</a>';e.createContext=t,e.createContextOrErrorHTML=function(e,n={},i){if(!window.WebGLRenderingContext)return r(e,o),null;const a=t(e,n,i);return a||(r(e,l),null)},Object.defineProperty(e,"__esModule",{value:!0})}));

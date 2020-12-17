/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../../../chunks/_rollupPluginBabelHelpers","../../../chunks/mat4f32","./colorMatrixFunctions"],(function(t,o,i,r){"use strict";let e=function(){function t(t,o,i){this.strength=t,this.radius=o,this.threshold=i,this.type="bloom"}var o=t.prototype;return o.interpolate=function(t,o,i){this.strength=c(t.strength,o.strength,i),this.radius=c(t.radius,o.radius,i),this.threshold=c(t.threshold,o.threshold,i)},o.clone=function(){return new t(this.strength,this.radius,this.threshold)},t}(),n=function(){function t(t){this.radius=t,this.type="blur"}var o=t.prototype;return o.interpolate=function(t,o,i){this.radius=Math.round(c(t.radius,o.radius,i))},o.clone=function(){return new t(this.radius)},t}(),s=function(){function t(t,o){this.type=t,this.amount=o,"invert"!==this.type&&"grayscale"!==this.type&&"sepia"!==this.type||(this.amount=Math.min(this.amount,1))}var e=t.prototype;return e.interpolate=function(t,o,i){this.amount=c(t.amount,o.amount,i),this._updateMatrix()},e.clone=function(){return new t(this.type,this.amount)},e._updateMatrix=function(){const t=this._colorMatrix||i.create();switch(this.type){case"brightness":this._colorMatrix=r.brightness(t,this.amount);break;case"contrast":this._colorMatrix=r.contrast(t,this.amount);break;case"grayscale":this._colorMatrix=r.grayscale(t,this.amount);break;case"invert":this._colorMatrix=r.invert(t,this.amount);break;case"saturate":this._colorMatrix=r.saturate(t,this.amount);break;case"sepia":this._colorMatrix=r.sepia(t,this.amount)}},o._createClass(t,[{key:"colorMatrix",get:function(){return this._colorMatrix||this._updateMatrix(),this._colorMatrix}}]),t}(),a=function(){function t(t,o,i,r){this.offsetX=t,this.offsetY=o,this.blurRadius=i,this.color=r,this.type="drop-shadow"}var o=t.prototype;return o.interpolate=function(t,o,i){this.offsetX=c(t.offsetX,o.offsetX,i),this.offsetY=c(t.offsetY,o.offsetY,i),this.blurRadius=c(t.blurRadius,o.blurRadius,i),this.color[0]=Math.round(c(t.color[0],o.color[0],i)),this.color[1]=Math.round(c(t.color[1],o.color[1],i)),this.color[2]=Math.round(c(t.color[2],o.color[2],i)),this.color[3]=c(t.color[3],o.color[3],i)},o.clone=function(){return new t(this.offsetX,this.offsetY,this.blurRadius,[...this.color])},t}(),u=function(){function t(t){this.angle=t,this.type="hue-rotate"}var e=t.prototype;return e.interpolate=function(t,o,i){this.angle=c(t.angle,o.angle,i),this._updateMatrix()},e.clone=function(){return new t(this.angle)},e._updateMatrix=function(){const t=this._colorMatrix||i.create();this._colorMatrix=r.rotateHue(t,this.angle)},o._createClass(t,[{key:"colorMatrix",get:function(){return this._colorMatrix||this._updateMatrix(),this._colorMatrix}}]),t}(),h=function(){function t(t){this.amount=t,this.type="opacity",this.amount=Math.min(this.amount,1)}var o=t.prototype;return o.interpolate=function(t,o,i){this.amount=c(t.amount,o.amount,i)},o.clone=function(){return new t(this.amount)},t}();function c(t,o,i){return t+(o-t)*i}t.BloomEffect=e,t.BlurEffect=n,t.ColorMatrixEffect=s,t.DropShadowEffect=a,t.HueRotateEffect=u,t.OpacityEffect=h,t.isColorMatrixEffect=function(t){return"colorMatrix"in t},Object.defineProperty(t,"__esModule",{value:!0})}));

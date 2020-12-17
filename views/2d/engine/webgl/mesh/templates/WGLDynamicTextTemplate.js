/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["../../../../../../chunks/_rollupPluginBabelHelpers","../../../../../../core/screenUtils","../../alignmentUtils","../../materialKey/MaterialKey","../../color","./util","./WGLBaseTextTemplate","./WGLDynamicMeshTemplate","../../../../layers/features/textUtils"],(function(t,e,i,n,o,a,s,r,l){"use strict";return function(s){function r(t){var i;(i=s.call(this,t)||this)._horizontalAlignment="center",i._verticalAlignment="middle",i._textToGlyphs=new Map;const r=t.scaleFactor||1;if(i._cimTextLayer=t,a.isFunction(t.color)){const e=(e,i,n)=>o.premultiplyAlphaRGBA(t.color(e,i,n));i._dynamicPropertyMap.set("_color",e)}else i._color=o.premultiplyAlphaRGBA(t.color);if(a.isFunction(t.color)){const e=(e,i,n)=>o.premultiplyAlphaRGBA(t.outlineColor(e,i,n));i._dynamicPropertyMap.set("_haloColor",e)}else i._haloColor=o.premultiplyAlphaRGBA(t.outlineColor);let l;a.isFunction(t.size)||(l=Math.min(Math.round(e.pt2px(t.size*t.sizeRatio)),127));if(i._dynamicPropertyMap.set("_size",((i,n,o)=>a.isFunction(t.size)?Math.min(Math.round(e.pt2px(t.size(i,n,o)*t.sizeRatio)),127):l)),a.isFunction(t.outlineSize)){const n=(i,n,o)=>Math.min(Math.floor(5*e.pt2px(t.outlineSize(i,n,o)*t.sizeRatio)),127);i._dynamicPropertyMap.set("_haloSize",n)}else i._haloSize=Math.min(Math.floor(5*e.pt2px(t.outlineSize*t.sizeRatio)),127);let c;a.isFunction(t.offsetX)||(c=Math.round(e.pt2px(t.offsetX*t.sizeRatio)));let h;i._dynamicPropertyMap.set("_xOffset",((i,n,o)=>a.isFunction(t.offsetX)?Math.round(e.pt2px(t.offsetX(i,n,o)*t.sizeRatio)):c)),a.isFunction(t.offsetY)||(h=Math.round(e.pt2px(t.offsetY*t.sizeRatio)));i._dynamicPropertyMap.set("_yOffset",((i,n,o)=>a.isFunction(t.offsetY)?Math.round(e.pt2px(t.offsetY(i,n,o)*t.sizeRatio)):h)),a.isFunction(t.angle)?i._dynamicPropertyMap.set("_angle",t.angle):i._angle=t.angle,a.isFunction(t.horizontalAlignment)?i._dynamicPropertyMap.set("_horizontalAlignment",t.horizontalAlignment):i._horizontalAlignment=t.horizontalAlignment,a.isFunction(t.verticalAlignment)?i._dynamicPropertyMap.set("_verticalAlignment",t.verticalAlignment):i._verticalAlignment=t.verticalAlignment,i._scaleFactor=r,a.isFunction(t.text)?i._dynamicPropertyMap.set("_text",t.text):i._text=t.text;const p=Math.min(Math.round(e.pt2px(t.referenceSize*t.sizeRatio)),127);i._referenceSize=Math.round(Math.sqrt(256*p)),i._materialKey=t.materialKey;const _=n.TextMaterialKey.load(i._materialKey);return _.sdf=!0,i._bitset=(1===t.alignment?1:0)|(t.colorLocked?1:0)<<1,i._materialKey=_.data,i._decoration="none",i._lineHeight=1,i._lineWidth=512,i._textPlacement=t.markerPlacement,i.effects=t.effects,i._isCIM=!0,i}t._inheritsLoose(r,s),r.fromCIMText=function(t){return new r(t)};var c=r.prototype;return c.analyze=async function(t,e,i,n){const o=e.readLegacyFeature(),a=function(t,e,i,n){return"string"==typeof t.text?t.text:"function"==typeof t.text?t.text(e,i,n):""}(this._cimTextLayer,o,i,n),s=await t.getMosaicItem(this._cimTextLayer.cim,l.codepoints(a));return this._textToGlyphs.set(a,s.glyphMosaicItems),s},c.bindFeature=function(t,e,n){const o=t.readLegacyFeature();if(this._dynamicPropertyMap.forEach(((t,i)=>{this[i]=t(o,e,n)})),!this._text||0===this._text.length)return void(this._shapingInfo=null);this._size*=this._scaleFactor,this._scale=this._size/24,this._xOffset*=this._scaleFactor,this._yOffset*=this._scaleFactor,this._xAlignD=i.getXAnchorDirection(this._horizontalAlignment||"center"),this._yAlignD=i.getYAnchorDirection(this._verticalAlignment||"baseline");const a=this._textToGlyphs.get(this._text);this.bindTextInfo(a,!1)},r}(s(r))}));

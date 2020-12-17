/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["../../../../chunks/_rollupPluginBabelHelpers","./BaseBucket"],(function(e,t){"use strict";return function(t){function r(e,r,i,a){var c;return(c=t.call(this,e,r)||this).type=4,c._circleVertexBuffer=i,c._circleIndexBuffer=a,c}e._inheritsLoose(r,t);var i=r.prototype;return i.processFeatures=function(e){const t=this._circleVertexBuffer,r=this._circleIndexBuffer;this._circleIndexStart=3*r.index,this._circleIndexCount=0;const i=this.layer,a=this.zoom;e&&e.setExtent(this.layerExtent);let c=1,n=[1,1,1,1],l=1,s=0,o=1,u=[1,1,1,1],f=1;for(const h of this._features){const d=h.getGeometry(e);if(d){i.hasDataDrivenRadius&&(c=i.getPaintValue("circle-radius",a,h)),i.hasDataDrivenColor&&(n=i.getPaintValue("circle-color",a,h)),i.hasDataDrivenOpacity&&(l=i.getPaintValue("circle-opacity",a,h)),i.hasDataDrivenStrokeWidth&&(o=i.getPaintValue("circle-stroke-width",a,h)),i.hasDataDrivenStrokeColor&&(u=i.getPaintValue("circle-stroke-color",a,h)),i.hasDataDrivenStrokeOpacity&&(f=i.getPaintValue("circle-stroke-opacity",a,h)),i.hasDataDrivenBlur&&(s=i.getPaintValue("circle-blur",a,h));for(const e of d)if(e)for(const i of e){const e=t.index;t.add(i.x,i.y,0,0,c,n,l,s,o,u,f),t.add(i.x,i.y,0,1,c,n,l,s,o,u,f),t.add(i.x,i.y,1,0,c,n,l,s,o,u,f),t.add(i.x,i.y,1,1,c,n,l,s,o,u,f),r.add(e+0,e+1,e+2),r.add(e+1,e+2,e+3),this._circleIndexCount+=6}}}},i.serialize=function(){let e=6;e+=this.layerUIDs.length,e+=this._circleVertexBuffer.array.length,e+=this._circleIndexBuffer.array.length;let t=0;const r=new Uint32Array(e),i=new Int32Array(r.buffer);r[t++]=this.type,r[t++]=this.layerUIDs.length;for(let e=0;e<this.layerUIDs.length;e++)r[t++]=this.layerUIDs[e];r[t++]=this._circleIndexStart,r[t++]=this._circleIndexCount,r[t++]=this._circleVertexBuffer.array.length;for(let e=0;e<this._circleVertexBuffer.array.length;e++)i[t++]=this._circleVertexBuffer.array[e];r[t++]=this._circleIndexBuffer.array.length;for(let e=0;e<this._circleIndexBuffer.array.length;e++)r[t++]=this._circleIndexBuffer.array[e];return r.buffer},e._createClass(r,[{key:"circleIndexStart",get:function(){return this._circleIndexStart}},{key:"circleIndexCount",get:function(){return this._circleIndexCount}}]),r}(t)}));

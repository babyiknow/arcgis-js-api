/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../../../../../chunks/_rollupPluginBabelHelpers","../../../../../chunks/vec4"],(function(e,t,f){"use strict";let r=function(){function e(e,t,f=0,r,i){this.TypedArrayConstructor=e,this.elementCount=4;const u=this.TypedArrayConstructor;void 0===r&&(r=4*u.BYTES_PER_ELEMENT);const d=0===t.byteLength?0:f;this.typedBuffer=null==i?new u(t,d):new u(t,d,(i-f)/u.BYTES_PER_ELEMENT),this.typedBufferStride=r/u.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}var r=e.prototype;return r.getVec=function(e,t){return f.set(t,this.typedBuffer[e*this.typedBufferStride],this.typedBuffer[e*this.typedBufferStride+1],this.typedBuffer[e*this.typedBufferStride+2],this.typedBuffer[e*this.typedBufferStride+3])},r.setVec=function(e,t){this.typedBuffer[e*this.typedBufferStride]=t[0],this.typedBuffer[e*this.typedBufferStride+1]=t[1],this.typedBuffer[e*this.typedBufferStride+2]=t[2],this.typedBuffer[e*this.typedBufferStride+3]=t[3]},r.get=function(e,t){return this.typedBuffer[e*this.typedBufferStride+t]},r.set=function(e,t,f){this.typedBuffer[e*this.typedBufferStride+t]=f},r.setValues=function(e,t,f,r,i){this.typedBuffer[e*this.typedBufferStride]=t,this.typedBuffer[e*this.typedBufferStride+1]=f,this.typedBuffer[e*this.typedBufferStride+2]=r,this.typedBuffer[e*this.typedBufferStride+3]=i},r.copyFrom=function(e,t,f){const r=this.typedBuffer,i=t.typedBuffer,u=e*this.typedBufferStride,d=f*t.typedBufferStride;r[u]=i[d],r[u+1]=i[d+1],r[u+2]=i[d+2],r[u+3]=i[d+3]},t._createClass(e,[{key:"buffer",get:function(){return this.typedBuffer.buffer}}]),e}();r.ElementCount=4,e.BufferViewVec4Impl=r,Object.defineProperty(e,"__esModule",{value:!0})}));

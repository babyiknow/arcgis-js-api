/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../../../../../chunks/_rollupPluginBabelHelpers","../../../../../core/maybe","../definitions","./Effect"],(function(t,e,i,n,o){"use strict";let s=function(t){function o(){var e;return(e=t.apply(this,arguments)||this).name=e.constructor.name,e.defines=["id"],e._lastSize=0,e}e._inheritsLoose(o,t);var s=o.prototype;return s.dispose=function(){i.isSome(this._fbo)&&this._fbo.dispose()},s.bind=function({context:t,painter:e}){const{width:i,height:n}=t.getViewport(),o=e.getFbos(i,n).effect0;t.bindFramebuffer(o),t.setClearColor(0,0,0,0),t.clear(t.gl.COLOR_BUFFER_BIT)},s.unbind=function(){},s.draw=function({context:t,state:e,pixelRatio:i},o,s=n.HITTEST_SEARCH_SIZE){const r=t.getBoundFramebufferObject(),f=e.size[1]*i,u=Math.round(s*i),a=u/2,c=u/2;this._ensureBuffer(u),o.forEach(((t,e)=>{const n=new Map,s=Math.floor(e[0]*i-u/2),h=Math.floor(f-e[1]*i-u/2);r.readPixels(s,h,u,u,6408,5121,this._buf);for(let t=0;t<this._buf32.length;t++){const e=this._buf32[t];if(4294967295!==e&&0!==e){const i=t%u,o=u-Math.floor(t/u),s=(a-i)*(a-i)+(c-o)*(c-o),r=n.has(e)?n.get(e):4294967295;n.set(e,Math.min(s,r))}}const l=Array.from(n).sort(((t,e)=>t[1]-e[1])).map((t=>t[0]));t.resolve(l),o.delete(e)}))},s._ensureBuffer=function(t){this._lastSize!==t&&(this._lastSize=t,this._buf=new Uint8Array(4*t*t),this._buf32=new Uint32Array(this._buf.buffer))},o}(o.Effect);t.HittestEffect=s,Object.defineProperty(t,"__esModule",{value:!0})}));

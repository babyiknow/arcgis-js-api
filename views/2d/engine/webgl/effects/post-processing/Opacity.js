/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../../../../../../core/has","../../../../../../chunks/builtins","../../../../../webgl/Texture","../../../../../webgl/FramebufferObject","../../../../../webgl/RenderingContext"],(function(e,t,i,r,s,n){"use strict";let a=function(){function e(){this._size=[0,0]}var t=e.prototype;return t.dispose=function(){this._layerFBOTexture&&(this._layerFBOTexture.dispose(),this._layerFBOTexture=null)},t.draw=function(e,t,i){const{width:r,height:s}=t;this._createOrResizeResources(e,r,s);const{context:n,painter:a}=e,{amount:l}=i,o=n.gl,u=this._layerFBOTexture;n.bindFramebuffer(t),t.copyToTexture(0,0,r,s,0,0,u),n.setBlendingEnabled(!0),n.setStencilTestEnabled(!1),n.setDepthTestEnabled(!1),n.setClearColor(0,0,0,0),n.clear(o.COLOR_BUFFER_BIT),a.blitTexture(n,u,9728,l)},t._createOrResizeResources=function(e,t,i){const{context:s}=e;this._layerFBOTexture&&this._size[0]===t&&this._size[1]===i||(this._size[0]=t,this._size[1]=i,this._layerFBOTexture?this._layerFBOTexture.resize(t,i):this._layerFBOTexture=new r(s,{target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,wrapMode:33071,samplingMode:9728,flipped:!1,width:t,height:i}))},e}();e.Opacity=a,Object.defineProperty(e,"__esModule",{value:!0})}));

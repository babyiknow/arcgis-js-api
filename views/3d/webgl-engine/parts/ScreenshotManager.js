// COPYRIGHT © 2019 Esri
//
// All rights reserved under the copyright laws of the United States
// and applicable international laws, treaties, and conventions.
//
// This material is licensed for use under the Esri Master License
// Agreement (MLA), and is bound by the terms of that agreement.
// You may redistribute and use this code without modification,
// provided you adhere to the terms of the MLA and include this
// copyright notice.
//
// See use restrictions at http://www.esri.com/legal/pdfs/mla_e204_e300/english
//
// For additional information, contact:
// Environmental Systems Research Institute, Inc.
// Attn: Contracts and Legal Services Department
// 380 New York Street
// Redlands, California, USA 92373
// USA
//
// email: contracts@esri.com
//
// See http://js.arcgis.com/4.14/esri/copyright.txt for details.

define(["require","exports","../../../../core/tsSupport/assignHelper","../../../../core/tsSupport/declareExtendsHelper","../../../../core/tsSupport/decorateHelper","../../../../core/maybe","../../../../core/promiseUtils","../../../../core/accessorSupport/decorators","../../../../core/libs/gl-matrix-2/vec4f64","../lib/AutoDisposable","../../../support/screenshotUtils","../../../webgl/FramebufferObject"],function(e,r,t,i,n,a,o,s,c,h,l,d){Object.defineProperty(r,"__esModule",{value:!0});var u=function(e){function r(r,t,i,n,a){void 0===n&&(n=null),void 0===a&&(a=!0);var o=e.call(this)||this;return o._rctx=r,o._renderScene=t,o._requestRenderScene=i,o._renderOverlay=n,o.supersample=a,o._screenshotQueue=[],o}return i(r,e),r.prototype.dispose=function(){this._rctx=null},r.prototype.takeScreenshot=function(e){var r=this;this._requestRenderScene();var t=o.createResolver(function(){r._screenshotQueue=r._screenshotQueue.filter(function(e){return e.resolver!==t})});return this._screenshotQueue.push({settings:e,resolver:t}),t.promise},r.prototype.update=function(e){if(0!==this._screenshotQueue.length){for(var r=0,i=this._screenshotQueue;r<i.length;r++){var n=i[r];if(this.isDisposed)n.resolver.reject();else{var a=t({},n.settings,{pixelRatio:n.settings.pixelRatio*e.viewCamera.pixelRatio}),o=this._ensureScreenshotEncodeCanvas(),s=this._renderScreenshot(e,a),c=l.encodeResult(s,a,o,{flipY:!0,premultipliedAlpha:!0});n.resolver(c)}}this._screenshotQueue=[]}},r.prototype._renderScreenshotOverlay=function(e,r,t){if(!a.isNone(this._renderOverlay)){e.width=r.width,e.height=r.height;var i=e.getContext("2d"),n=t.pixelRatio;i.save(),i.translate(0,r.height),i.scale(1,-1),t.region&&i.translate(-t.region.x,-t.region.y),i.scale(n,n),this._renderOverlay(e,r),i.restore()}},r.prototype._readbackScreenshot=function(e){return e.resample?this._readbackScreenshotResampled(e):this._readbackScreenshotImmediate(e)},r.prototype._readbackScreenshotResampled=function(e){var r=e.framebufferWidth,i=e.framebufferHeight,n=e.region,a=e.resample,o=this._ensureScreenshotEncodeCanvas(),s=l.createEmptyImageData(r,i,o);this._rctx.gl.readPixels(0,0,r,i,6408,5121,new Uint8Array(s.data.buffer)),this._renderScreenshotOverlay(o,s,t({},e,{region:null}));var c=l.createEmptyImageData(n.width,n.height,o);return l.resampleHermite(s,c,!0,a.region.x,i-(a.region.y+a.region.height),a.region.width,a.region.height)},r.prototype._readbackScreenshotImmediate=function(e){var r=e.framebufferHeight,t=e.region,i=this._ensureScreenshotEncodeCanvas(),n=l.createEmptyImageData(t.width,t.height,i);return this._rctx.gl.readPixels(t.x,r-(t.y+t.height),t.width,t.height,6408,5121,new Uint8Array(n.data.buffer)),this._renderScreenshotOverlay(i,n,e),n},r.prototype._renderScreenshot=function(e,r){var t=null,i=e.viewCamera,n=r.framebufferWidth,a=r.framebufferHeight,o=!1,s=e.frameHasSlicePlane&&r.disableSlice,h=n!==i.fullWidth||a!==i.fullHeight,l=r.ignorePadding&&i.pixelRatio!==r.pixelRatio,u=h||s||l;if(u){var p=i.clone();if(r.ignorePadding){for(var f=c.vec4f64.clone(p.padding),g=0;g<4;g++)f[g]=Math.round(f[g]/p.pixelRatio*r.pixelRatio);p.padding=f}p.fullWidth=n,p.fullHeight=a,p.pixelRatio=r.pixelRatio;var v=i.fovX-p.fovX,_=i.fovY-p.fovY;v<0&&v<_?p.fovX=i.fovX:_<0&&_<v&&(p.fovY=i.fovY),e.drapedRenderer.forceUpdate&&e.drapedRenderer.forceUpdate(p),o=!0,t=new d(this._rctx,{width:p.fullWidth,height:p.fullHeight,colorTarget:0,depthStencilTarget:3}),this._renderScene(t,p,r.disableSlice)}var m=this._readbackScreenshot(r);if(u&&!this._rctx.contextAttributes.alpha)for(var g=3;g<m.data.length;g+=4)m.data[g]=255;return t&&t.dispose(),this._rctx.bindFramebuffer(null),o&&e.drapedRenderer.forceUpdate&&e.drapedRenderer.forceUpdate(i),m},r.prototype._ensureScreenshotEncodeCanvas=function(){return this._screenshotEncodeCanvas||(this._screenshotEncodeCanvas=document.createElement("canvas")),this._screenshotEncodeCanvas},r=n([s.subclass("esri.views.3d.webgl-engine.parts.ScreenshotManager")],r)}(s.declared(h.AutoDisposable));r.ScreenshotManager=u});
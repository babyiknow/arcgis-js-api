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

define(["require","exports","../../../../core/tsSupport/assignHelper","../../../../core/tsSupport/declareExtendsHelper","../../../../core/tsSupport/decorateHelper","../../../../core/tsSupport/awaiterHelper","../../../../core/tsSupport/generatorHelper","../../../../core/Accessor","../../../../core/has","../../../../core/Logger","../../../../core/maybe","../../../../core/now","../../../../core/scheduling","../../../../core/accessorSupport/decorators","../../../../core/libs/gl-matrix-2/vec3f64","../../../../layers/support/timeUtils","../../support/animationUtils","../collections/Component/interface","../core/renderPasses/RenderPassManager","../core/shaderTechnique/CommonUniformStore","../core/shaderTechnique/ShaderTechniqueRepository","../lib/AutoDisposable","../lib/Camera","../lib/DrapedRenderer","../lib/GLMaterialRep","../lib/ProgramRepository","../lib/Renderer","../lib/TextureRepository","../lib/tracer","../materials/lineStippleUtils","./ScreenshotManager","../shaders/globalOptions","../../../webgl/context-util","../../../webgl/RenderingContext"],function(e,t,r,n,o,i,s,a,d,p,c,u,l,h,_,g,m,y,f,b,R,x,v,T,w,C,M,S,O,U,P,L,D,j){var G=p.getLogger("esri.views.3d.webgl-engine.parts.View"),V=d("dojo-debug-messages");return function(e){function t(t,r,n,o){var i=e.call(this)||this;i._stage=r,i._camera=new v.default(_.vec3f64.fromValues(0,100,-100)),i._componentObjectCollection=null,i._needsUpdate=!0,i._needsRender=!0,i._idleSuspend=!0,i._logicUpdateLast=0,i._stats={renderGeometriesTotal:0,renderGeometriesVisible:0,renderTimeTotal:0,renderTimeLast:0,frameCount:0},i._container=t,i._initializeContext(o);var s=L.glslifyGlobalOptions({viewingMode:o.viewingMode});return i._programRepository=new C(i._rctx,s),i._stippleTextureRepository=new U.StippleTextureRepository,i._commonUniformStore=new b.CommonUniformStore,i._shaderTechniqueRepository=new R.ShaderTechniqueRepository({rctx:i._rctx,viewingMode:"local"===o.viewingMode?1:0,commonUniformStore:i._commonUniformStore,stippleTextureRepository:i._stippleTextureRepository}),i._textureRepository=new S(i._stage.getAll(4),i._shaderTechniqueRepository,function(){return i._camera.viewport},i._rctx,function(){i._textureRepositoryHasNewLoadedTextures=!0}),i._materialRepository=new w(i._textureRepository,i._programRepository,i._shaderTechniqueRepository),i._initializeViewportCamera(),i._drapedRenderer=new T(i._rctx,i._canvas,i._programRepository,i._materialRepository,i._textureRepository,i._shaderTechniqueRepository,n),i._renderer=new M(i._programRepository,i._materialRepository,i._textureRepository,i._shaderTechniqueRepository,i._rctx,"scene",function(e){return void 0===e&&(e=1),i.setNeedsRender(e)},i._stage),i._screenshotManager=new P.ScreenshotManager(i._rctx,function(e,t,r){return i._render(e,t,r)},function(){return i.setNeedsRender()},o.screenshot.renderOverlay),i._renderPassManager=new f.RenderPassManager(i,i._rctx,i._shaderTechniqueRepository),i.renderPlugins.add(i._renderPassManager.slots(),i._renderPassManager),i._registerFrameTask(),i}return n(t,e),t.prototype.dispose=function(){this._container.contains(this._canvas)&&this._container.removeChild(this._canvas),this._frameTask&&(this._frameTask.remove(),this._frameTask=null),this.inherited(arguments)},t.prototype.getCombinedStats=function(){var e=this._rctx.gl,t={},r=this._renderer.getCombinedStats();for(var n in r)t[n]=r[n];if(t.renderGeometriesTotal=this._stats.renderGeometriesTotal,t.renderGeometriesVisible=this._stats.renderGeometriesVisible,V&&(t.totalRenderTime=this._stats.renderTimeTotal,t.currentRenderTime=this._stats.renderTimeLast,t.totalNumFramesRendered=this._stats.frameCount),void 0!==e.getUsedTextureMemory&&(t.textureMemory=e.getUsedTextureMemory()),void 0!==e.getUsedRenderbufferMemory&&(t.renderbufferMemory=e.getUsedRenderbufferMemory()),void 0!==e.getUsedVBOMemory&&(t.VBOMemory=e.getUsedVBOMemory()),void 0!==e.getUsedTextureMemoryStats){var o=e.getUsedTextureMemoryStats();for(var i in o)t["texMem type: "+i]=o[i]}return t},t.prototype.setNeedsRender=function(e){void 0===e&&(e=1),1===e?(this._needsUpdate=!0,this.notifyChange("updating")):this._needsRender=!0},Object.defineProperty(t.prototype,"canRender",{get:function(){var e=this._camera;return e.fullWidth>0&&e.fullHeight>0&&this._renderer.canRender},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"needsUpdate",{get:function(){return this._needsUpdate||!this._idleSuspend||this._textureRepositoryHasNewLoadedTextures},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"updating",{get:function(){return this.needsUpdate||this._renderer.updating||this._textureRepository.getLoadingCount()>0||this._drapedRenderer.updating||this._stage.dirty},enumerable:!0,configurable:!0}),t.prototype.ensureEdgeView=function(){return this._renderer.ensureEdgeView()},Object.defineProperty(t.prototype,"edgeView",{get:function(){return this._renderer.edgeView},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"textureRepository",{get:function(){return this._textureRepository},enumerable:!0,configurable:!0}),t.prototype.setRenderParameters=function(e){this.setNeedsRender(),void 0!==e.idleSuspend&&(this._idleSuspend=!!e.idleSuspend),void 0!==e.shadowMap&&(this._renderPassManager.shadowCastingEnabled=e.shadowMap),this._renderer.setRenderParams(e)},t.prototype.getRenderParameters=function(){var e=this._renderer.getRenderParams();return e.anisotropicFiltering=this._textureRepository.getMaxAnisotropy(),e.idleSuspend=this._idleSuspend,e},Object.defineProperty(t.prototype,"renderingContext",{get:function(){return this._rctx},enumerable:!0,configurable:!0}),t.prototype.has=function(e){return"s3tc"===e?!!this._rctx.capabilities.compressedTextureS3TC:"shaderTextureLOD"===e&&!!this._rctx.capabilities.shaderTextureLOD},t.prototype.modify=function(e,t,r,n){this._renderer.modify(e,e.length,t,t.length,r,r.length,n)},t.prototype.setCamera=function(e){this._camera.copyFrom(e),this.setNeedsRender()},t.prototype.getCamera=function(){return this._camera},t.prototype.getCanvas=function(){return this._canvas},t.prototype.getDrapedRenderer=function(){return this._drapedRenderer},t.prototype.takeScreenshot=function(e){return this._screenshotManager.takeScreenshot(e)},Object.defineProperty(t.prototype,"renderPlugins",{get:function(){return this._renderer.renderPlugins},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"test",{get:function(){return{renderer:this._renderer}},enumerable:!0,configurable:!0}),t.prototype.getGpuMemoryUsage=function(){return r({},this._renderer.getGpuMemoryUsage(),{draped:this._drapedRenderer?this._drapedRenderer.getGpuMemoryUsage():0})},t.prototype.hotReloadShaders=function(){return i(this,void 0,void 0,function(){return s(this,function(e){switch(e.label){case 0:return[4,this._shaderTechniqueRepository.hotReload()];case 1:return e.sent(),this.setNeedsRender(),[2]}})})},t.prototype._registerFrameTask=function(){var e=this,t={viewCamera:this._camera,frameHasSlicePlane:!1,drapedRenderer:this._drapedRenderer},r={preRender:function(t){O.begin();var r=!1;e._stage.processDirty(),e._drapedRenderer.commitChanges();var n=g.Milliseconds(t.time-e._logicUpdateLast);n>m.DESIRED_ANIMATION_MS&&(r=e._renderer.updateLogic({dt:n,camera:e._stage.getCamera()})||r,e._logicUpdateLast=t.time),r&&e.setNeedsRender(0)},render:function(){(e.needsUpdate||e._needsRender)&&e.canRender&&(e._needsRender=!1,e._needsUpdate=!1,e._textureRepositoryHasNewLoadedTextures=!1,e._render(null,e._camera,!1))},postRender:function(){e.notifyChange("updating"),O.end()},update:function(){t.viewCamera=e._camera,t.frameHasSlicePlane=e._renderer.hasSlicePlane,t.drapedRenderer=e._drapedRenderer,e._screenshotManager.update(t)}};this._frameTask=l.addFrameTask(r)},t.prototype._initializeViewportCamera=function(){var e=this._container.getBoundingClientRect(),t=this.getCamera();t.viewport[2]=e.width,t.viewport[3]=e.height,this.setCamera(t)},t.prototype._initializeContext=function(e){this._canvas=e.canvas,this._canvas||(this._canvas=document.createElement("canvas")),this._canvas.setAttribute("style","width: 100%; height:100%; display:block;");var t={alpha:e.alpha||!1,premultipliedAlpha:!0,antialias:!1,depth:!0,stencil:null==e.stencil||e.stencil},r=O.instrumentContext(D.createContextOrErrorHTML(this._canvas,t,e.renderContext)),n={disabledExtensions:e.deactivatedWebGLExtensions||{},debugWebGLExtensions:e.debugWebGLExtensions||{}};this._rctx=new j(r,n),this._loadShaderOnlyExtensions(this._rctx),!e.alpha&&this._rctx.contextAttributes.alpha&&G.error("WebGL context has alpha channel even though no alpha channel was requested"),!this._rctx.contextAttributes.alpha&&d("safari")>=11&&(this._container.style.backgroundColor="black"),this._container.appendChild(this._canvas)},t.prototype._render=function(e,t,r){var n;V&&(n=u()),this._renderer.setLighting(this._stage.lighting),this._rctx.bindFramebuffer(e),t.setGLViewport(this._rctx),this._renderer.render({fbo:e,camera:t,disableSlice:r,lightDirection:this._stage.mainLightDirection}),V&&(this._stats.renderTimeLast=u()-n,this._stats.renderTimeTotal+=this._stats.renderTimeLast,this._stats.frameCount++)},t.prototype._loadShaderOnlyExtensions=function(e){var t=e.capabilities;t.standardDerivatives,t.shaderTextureLOD},Object.defineProperty(t.prototype,"componentObjectCollection",{get:function(){return c.isNone(this._componentObjectCollection)&&(this._componentObjectCollection=y.createComponentObjectCollection(this._renderPassManager)),this._componentObjectCollection},enumerable:!0,configurable:!0}),o([h.property({type:Boolean,readOnly:!0})],t.prototype,"updating",null),o([x.autoDispose()],t.prototype,"_rctx",void 0),o([x.autoDispose()],t.prototype,"_container",void 0),o([x.autoDispose()],t.prototype,"_canvas",void 0),o([x.autoDispose()],t.prototype,"_programRepository",void 0),o([x.autoDispose()],t.prototype,"_stippleTextureRepository",void 0),o([x.autoDispose()],t.prototype,"_renderer",void 0),o([x.autoDispose()],t.prototype,"_drapedRenderer",void 0),o([x.autoDispose()],t.prototype,"_screenshotManager",void 0),o([x.autoDispose()],t.prototype,"componentObjectCollection",null),o([x.autoDispose()],t.prototype,"_componentObjectCollection",void 0),t=o([h.subclass("esri.views.3d.webgl-engine.parts.RenderView")],t)}(h.declared(x.AutoDisposableMixin(a)))});
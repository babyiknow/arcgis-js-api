/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["require","exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../chunks/tslib.es6","../core/shaderTechnique/ReloadableShaderModule","../core/shaderTechnique/ShaderTechnique","../core/shaderTechnique/ShaderTechniqueConfiguration","../lib/DefaultVertexAttributeLocations","../../../webgl/Program","../../../webgl/renderState","../core/shaderLibrary/util/View.glsl","../lib/DefaultTextureUnits","../core/shaderLibrary/Slice.glsl","../core/shaderLibrary/output/OutputHighlight.glsl","../lib/OrderIndependentTransparency","../core/shaderLibrary/shading/ReadShadowMap.glsl","../core/shaderLibrary/shading/ScreenSpaceReflections.glsl","../core/shaderLibrary/shading/WaterDistortion.glsl","../../../../chunks/WaterSurface.glsl"],(function(e,t,r,i,o,a,n,s,u,p,c,l,h,d,g,f,b,y,m){"use strict";let S=function(e){function t(t,r){var i;return(i=e.call(this,t,r)||this).waterTextureRepository=t.waterTextureRepository,i}r._inheritsLoose(t,e);var i=t.prototype;return i.initializeProgram=function(e){const r=t.shader.get(),i=this.configuration,o=r.build({OITEnabled:0===i.transparencyPassType,output:i.output,viewingMode:e.viewingMode,slicePlaneEnabled:i.slicePlaneEnabled,sliceHighlightDisabled:!1,sliceEnabledForVertexPrograms:!1,receiveShadows:i.receiveShadows,pbrMode:3,useCustomDTRExponentForWater:!0,ssrEnabled:i.useSSR,highStepCount:!0});return new u(e.rctx,o.generateSource("vertex"),o.generateSource("fragment"),s.Default3D)},i.ensureResource=function(e){return this.waterTextureRepository.ready||this.waterTextureRepository.updating||this.waterTextureRepository.loadTextures(e),this.waterTextureRepository.ready?2:1},i.bindPass=function(e,t,r){c.View.bindProjectionMatrix(this.program,r.camera.projectionMatrix),0===this.configuration.output&&(r.lighting.setUniforms(this.program,!1),b.ScreenSpaceReflections.bindUniforms(this.program,e,r)),0!==this.configuration.output&&2!==this.configuration.output||(y.WaterDistortion.bindUniforms(this.program,t),this.waterTextureRepository.bindRepo(e)),this.program.setUniform4fv("waterColor",t.color),4===this.configuration.output&&d.OutputHighlight.bindOutputHighlight(e,this.program,r)},i.bindDraw=function(e){c.View.bindView(this.program,e),0!==this.configuration.output&&7!==this.configuration.output||c.View.bindCamPosition(this.program,e.origin,e.camera.viewInverseTransposeMatrix),0===this.configuration.output&&f.ReadShadowMap.bindUniforms(this.program,e,l.DefaultTextureUnits.SHADOW_MAP),0!==this.configuration.output&&7!==this.configuration.output&&4!==this.configuration.output||h.Slice.bindUniformsWithOrigin(this.program,this.configuration,e)},i.setPipelineState=function(e){const t=this.configuration,r=3===e,i=2===e;return p.makePipelineState({blending:2!==t.output&&4!==t.output&&t.transparent?r?g.blendingDefault:g.OITBlending(e):null,depthTest:{func:g.OITDepthTest(e)},depthWrite:r?t.writeDepth&&p.defaultDepthWriteParams:g.OITDepthWrite(e),colorWrite:p.defaultColorWriteParams,polygonOffset:r||i?null:g.getOITPolygonOffset(t.enableOffset)})},i.initializePipeline=function(){return this.setPipelineState(this.configuration.transparencyPassType)},t}(a.ShaderTechnique);S.shader=new o.ReloadableShaderModule(m.WaterSurface,(()=>new Promise((function(t,r){e(["../shaders/WaterSurface.glsl"],t,r)}))));let T=function(e){function t(){var t;return(t=e.apply(this,arguments)||this).output=0,t.receiveShadows=!1,t.slicePlaneEnabled=!1,t.transparent=!1,t.enableOffset=!0,t.writeDepth=!1,t.useSSR=!1,t.isDraped=!1,t.transparencyPassType=3,t}return r._inheritsLoose(t,e),t}(n.ShaderTechniqueConfiguration);i.__decorate([n.parameter({count:8})],T.prototype,"output",void 0),i.__decorate([n.parameter()],T.prototype,"receiveShadows",void 0),i.__decorate([n.parameter()],T.prototype,"slicePlaneEnabled",void 0),i.__decorate([n.parameter()],T.prototype,"transparent",void 0),i.__decorate([n.parameter()],T.prototype,"enableOffset",void 0),i.__decorate([n.parameter()],T.prototype,"writeDepth",void 0),i.__decorate([n.parameter()],T.prototype,"useSSR",void 0),i.__decorate([n.parameter()],T.prototype,"isDraped",void 0),i.__decorate([n.parameter({count:4})],T.prototype,"transparencyPassType",void 0),t.WaterTechnique=S,t.WaterTechniqueConfiguration=T,Object.defineProperty(t,"__esModule",{value:!0})}));

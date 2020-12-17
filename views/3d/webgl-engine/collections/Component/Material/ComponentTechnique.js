/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["require","exports","../../../../../../chunks/_rollupPluginBabelHelpers","../../../../../../chunks/tslib.es6","../../../../../../core/maybe","../../../../../../chunks/mat3f64","../../../../../../chunks/vec4f64","../../../core/shaderTechnique/ReloadableShaderModule","../../../core/shaderTechnique/ShaderTechnique","../../../core/shaderTechnique/ShaderTechniqueConfiguration","../../../../../webgl/Program","../../../../../webgl/renderState","../../../core/shaderLibrary/Slice.glsl","../../../core/shaderLibrary/output/OutputHighlight.glsl","../../../lib/OrderIndependentTransparency","../../../lib/StencilUtils","../../../core/shaderLibrary/shading/ScreenSpaceReflections.glsl","../../../core/shaderLibrary/util/DoublePrecision.glsl","../../../core/shaderLibrary/shading/PhysicallyBasedRenderingParameters.glsl","../../../core/shaderLibrary/attributes/VertexPosition.glsl","../../../../../../chunks/ComponentShader.glsl"],(function(e,r,o,t,a,i,n,s,l,d,u,c,p,m,h,O,f,b,T,x,g){"use strict";const _={DIFFUSE:0,COMPONENT_COLOR:1,NORMAL:2,EMISSION:3,OCCLUSION:4,METALLIC_ROUGHNESS:5,OVERLAY0_COLOR:2,OVERLAY1_COLOR:3,OVERLAY0_NORMAL:4,OVERLAY1_NORMAL:5,SSAO:6,SHADOW_MAP:7,PREPASS_LINEAR_DEPTH:8,LAST_FRAME_COLOR:9};let M=function(e){function r(){return e.apply(this,arguments)||this}o._inheritsLoose(r,e);var t=r.prototype;return t.bindPass=function(e,r){const o=this.program;x.VertexPosition.bindViewProjTransform(o,r.viewTransform),p.Slice.bindUniforms(this.program,this.configuration,r.slicePlane),0===r.identifier&&void 0!==r.ssrParams&&(r.ssrParams.lastFrameColorTextureID=_.LAST_FRAME_COLOR,r.ssrParams.linearDepthTextureID=_.PREPASS_LINEAR_DEPTH,f.ScreenSpaceReflections.bindUniforms(this.program,e,r.ssrParams)),0===r.identifier&&(o.setUniformMatrix3fv("uTransformNormal_ViewFromGlobal",r.transformNormal_ViewFromGlobal),2===r.subPass&&o.setUniform2fv("uCameraNearFar",r.cameraNearFar),0===r.subPass&&(r.ambientOcclusionEnabled&&r.ambientOcclusion.bind(o,_.SSAO),r.shadowsEnabled&&r.shadowMap.bind(o,_.SHADOW_MAP),r.lighting.setUniforms(this.program,r.integratedMesh))),1===r.identifier&&this.program.setUniform2fv("uCameraNearFar",r.cameraNearFar),2===r.identifier&&m.OutputHighlight.bindOutputHighlight(e,this.program,r)},t.bindDraw=function(e,r){if(x.VertexPosition.bindModelTransform(this.program,e),this.program.setUniformMatrix3fv("uTransformNormal_GlobalFromModel",e.transformNormal_GlobalFromModel),r.isIntegratedMesh){const o=r.overlayTexScale,t=r.overlayTexOffset;this.program.setUniform4fv("overlayTexOffset",[e.toMapSpace[0]*o[0]+t[0],e.toMapSpace[1]*o[1]+t[1],e.toMapSpace[0]*o[2]+t[2],e.toMapSpace[1]*o[3]+t[3]]),this.program.setUniform4fv("overlayTexScale",[e.toMapSpace[2]*o[0],e.toMapSpace[3]*o[1],e.toMapSpace[2]*o[2],e.toMapSpace[3]*o[3]])}},t.bindMaterial=function(e,r,o){const t=this.program;t.setUniform4fv("uBaseColor",r.baseColor),t.setUniform1f("uObjectOpacity",r.objectOpacity),t.setUniform1f("textureAlphaCutoff",r.alphaCutoff),1===r.componentParameters.type?r.componentParameters.texture.bind(t,{texName:"uComponentColorTex",invDimName:"uComponentColorTexInvDim",unit:_.COMPONENT_COLOR}):(t.setUniform4fv("uExternalColor",r.componentParameters.externalColor),t.setUniform1i("uExternalColorMixMode",r.componentParameters.externalColorMixMode)),a.isSome(r.baseColorTexture)&&r.baseColorTexture.bind(e,t,"uBaseColorTexture",_.DIFFUSE,"uBaseColorTextureSize"),0!==this.configuration.output&&7!==this.configuration.output||(T.PhysicallyBasedRenderingParameters.bindUniforms(this.program,r),a.isSome(r.metallicRoughnessTexture)&&r.metallicRoughnessTexture.bind(e,t,"texMetallicRoughness",_.METALLIC_ROUGHNESS,"texMetallicRoughnessSize"),a.isSome(r.emissionTexture)&&r.emissionTexture.bind(e,t,"texEmission",_.EMISSION,"texEmissionSize"),a.isSome(r.occlusionTexture)&&r.occlusionTexture.bind(e,t,"texOcclusion",_.OCCLUSION,"texOcclusionSize"),a.isSome(r.normalTexture)&&r.normalTexture.bind(e,t,"normalTexture",_.NORMAL,"normalTextureSize")),r.isIntegratedMesh&&(0===o.identifier&&0===o.subPass?(e.bindTexture(a.unwrap(r.overlayColorInner),_.OVERLAY0_COLOR),e.bindTexture(a.unwrap(r.overlayColorOuter),_.OVERLAY1_COLOR),e.bindTexture(a.unwrap(r.overlayNormalInner),_.OVERLAY0_NORMAL),e.bindTexture(a.unwrap(r.overlayNormalOuter),_.OVERLAY1_NORMAL),t.setUniform1i("ovInnerNormalTex",_.OVERLAY0_NORMAL),t.setUniform1i("ovOuterNormalTex",_.OVERLAY1_NORMAL)):2===o.identifier&&(e.bindTexture(a.unwrap(r.overlayHighlightInner),_.OVERLAY0_COLOR),e.bindTexture(a.unwrap(r.overlayHighlightOuter),_.OVERLAY1_COLOR)),t.setUniform1i("ovInnerColorTex",_.OVERLAY0_COLOR),t.setUniform1i("ovOuterColorTex",_.OVERLAY1_COLOR),t.setUniform1f("overlayOpacity",1))},t.initializeProgram=function(e){const o=r.shader.get(),t=this.configuration,a=o.build({OITEnabled:0===t.transparencyPassType,output:t.output,normalType:0===t.integratedMeshMode?t.hasNormals?1:3:2,attributeColor:t.hasVertexColors,attributeTextureCoordinates:t.vertexTextureCoordinates,componentData:t.componentData,alphaDiscardMode:t.alphaDiscardMode,baseColorTexture:t.baseColorTexture,doubleSidedMode:t.doubleSidedMode,receiveAmbientOcclusion:t.receiveAmbientOcclusion,receiveShadows:t.receiveShadows,slicePlaneEnabled:t.slicePlaneEnabled,sliceHighlightDisabled:!1,sliceEnabledForVertexPrograms:!1,viewingMode:e.viewingMode,vertexDiscardMode:t.vertexDiscardMode,pbrMode:3===t.integratedMeshMode?4:t.usePBR?1:0,hasMetalnessAndRoughnessTexture:t.hasMetalnessAndRoughnessTexture,hasEmissionTexture:t.hasEmissionTexture,hasOcclusionTexture:t.hasOcclusionTexture,hasNormalTexture:t.hasNormalTexture,vertexTangets:!1,useOldSceneLightInterface:!1,supportsTextureAtlas:!0,doublePrecisionRequiresObfuscation:b.doublePrecisionRequiresObfuscation(e.rctx),overlayEnabled:2===t.integratedMeshMode||3===t.integratedMeshMode,ssrEnabled:t.ssrEnabled,highStepCount:!1,ellipsoidMode:t.ellipsoidMode});return new u(e.rctx,a.generateSource("vertex"),a.generateSource("fragment"),o.attributeLocations)},t.setPipelineState=function(e){const r=this.configuration,o=0!==r.integratedMeshMode,t=3===e,a=2===e;return c.makePipelineState({blending:0!==r.output&&7!==r.output||!r.blendingEnabled?null:t?h.blendingDefault:h.OITBlending(e),culling:v[r.cullFace],depthTest:{func:h.OITDepthTest(e)},depthWrite:t||a?c.defaultDepthWriteParams:null,colorWrite:c.defaultColorWriteParams,stencilWrite:o||r.sceneHasOcludees?O.stencilWriteMaskOn:null,stencilTest:o?O.replaceBitWhenDepthTestPasses(1):r.sceneHasOcludees?O.stencilBaseAllZerosParams:null,polygonOffset:t||a?r.polygonOffsetEnabled?{factor:2,units:2}:null:h.OITPolygonOffset})},t.initializePipeline=function(){return this.setPipelineState(this.configuration.transparencyPassType)},r}(l.ShaderTechnique);M.shader=new s.ReloadableShaderModule(g.ComponentShader,(()=>new Promise((function(r,o){e(["./shader/ComponentShader.glsl"],r,o)}))));const v=[];v[0]=null,v[2]={face:1029,mode:2305},v[1]={face:1028,mode:2305};let S=function(e){function r(){var r;return(r=e.apply(this,arguments)||this).transformNormal_GlobalFromModel=i.create(),r.toMapSpace=n.create(),r}return o._inheritsLoose(r,e),r}(x.VertexPosition.ModelTransform),y=function(e){function r(){var r;return(r=e.apply(this,arguments)||this).output=0,r.hasVertexColors=!1,r.hasNormals=!1,r.vertexTextureCoordinates=0,r.componentData=0,r.slicePlaneEnabled=!1,r.cullFace=2,r.baseColorTexture=!1,r.receiveAmbientOcclusion=!0,r.receiveShadows=!0,r.vertexDiscardMode=0,r.doubleSidedMode=2,r.blendingEnabled=!0,r.alphaDiscardMode=1,r.integratedMeshMode=0,r.ssrEnabled=!1,r.polygonOffsetEnabled=!1,r.usePBR=!1,r.hasMetalnessAndRoughnessTexture=!1,r.hasEmissionTexture=!1,r.hasOcclusionTexture=!1,r.hasNormalTexture=!1,r.sceneHasOcludees=!1,r.transparencyPassType=3,r.ellipsoidMode=1,r}return o._inheritsLoose(r,e),r}(d.ShaderTechniqueConfiguration);t.__decorate([d.parameter({count:8})],y.prototype,"output",void 0),t.__decorate([d.parameter()],y.prototype,"hasVertexColors",void 0),t.__decorate([d.parameter()],y.prototype,"hasNormals",void 0),t.__decorate([d.parameter({count:3})],y.prototype,"vertexTextureCoordinates",void 0),t.__decorate([d.parameter({count:2})],y.prototype,"componentData",void 0),t.__decorate([d.parameter()],y.prototype,"slicePlaneEnabled",void 0),t.__decorate([d.parameter({count:3})],y.prototype,"cullFace",void 0),t.__decorate([d.parameter()],y.prototype,"baseColorTexture",void 0),t.__decorate([d.parameter()],y.prototype,"receiveAmbientOcclusion",void 0),t.__decorate([d.parameter()],y.prototype,"receiveShadows",void 0),t.__decorate([d.parameter({count:3})],y.prototype,"vertexDiscardMode",void 0),t.__decorate([d.parameter({count:3})],y.prototype,"doubleSidedMode",void 0),t.__decorate([d.parameter()],y.prototype,"blendingEnabled",void 0),t.__decorate([d.parameter({count:4})],y.prototype,"alphaDiscardMode",void 0),t.__decorate([d.parameter({count:4})],y.prototype,"integratedMeshMode",void 0),t.__decorate([d.parameter()],y.prototype,"ssrEnabled",void 0),t.__decorate([d.parameter()],y.prototype,"polygonOffsetEnabled",void 0),t.__decorate([d.parameter()],y.prototype,"usePBR",void 0),t.__decorate([d.parameter()],y.prototype,"hasMetalnessAndRoughnessTexture",void 0),t.__decorate([d.parameter()],y.prototype,"hasEmissionTexture",void 0),t.__decorate([d.parameter()],y.prototype,"hasOcclusionTexture",void 0),t.__decorate([d.parameter()],y.prototype,"hasNormalTexture",void 0),t.__decorate([d.parameter()],y.prototype,"sceneHasOcludees",void 0),t.__decorate([d.parameter({count:4})],y.prototype,"transparencyPassType",void 0),t.__decorate([d.parameter({count:4})],y.prototype,"ellipsoidMode",void 0),r.ComponentDrawParameters=S,r.ComponentTechnique=M,r.ComponentTechniqueConfiguration=y,r.TextureUnits=_,Object.defineProperty(r,"__esModule",{value:!0})}));

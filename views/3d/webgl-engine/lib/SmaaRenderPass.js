/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["require","../../../../chunks/_rollupPluginBabelHelpers","../../../../core/promiseUtils","../../../../support/requestImageUtils","../../../webgl/Program","../../../webgl/renderState","../../../webgl/BufferObject","../../../webgl/Texture","../../../webgl/VertexArrayObject","../../../webgl/FramebufferObject"],(function(e,t,r,i,s,a,o,h,n,d){"use strict";return function(){function u(e){this.resourceLoadingPromise=null,this.isEnabled=!1,this.vertexAttributeLocations={vPosition:0},this.vertexBufferLayout=[{name:"vPosition",count:2,type:5126,offset:0,stride:8,normalized:!1}],this.rctx=e}var l=u.prototype;return l.loadResources=function(e){if(!this.data||!this.textureArea||!this.textureSearch){const t=this.resourceLoadingPromise||this.loadDataModule().then((()=>this.loadTextures()));return e&&t.then(e),this.resourceLoadingPromise||(this.resourceLoadingPromise=t,t.then((()=>this.resourceLoadingPromise=null))),!1}return!0},l.loadDataModule=function(){return this.data?r.resolve():new Promise((function(t,r){e(["./SmaaRenderPassData"],t,r)})).then((e=>{this.data=e}))},l.loadTextures=function(){return r.all([this.loadTextureFromBase64(this.data.areaTexture,9729,6407),this.loadTextureFromBase64(this.data.searchTexure,9728,6409)]).then((([e,t])=>{this.textureArea=e,this.textureSearch=t}))},l.enable=function(){if(this.isEnabled)return!0;if(!this.loadResources())return!1;const e=this.rctx;this.programEdgeDetect=new s(e,this.data.edgeDetectShader.vertex,this.data.edgeDetectShader.fragment,this.vertexAttributeLocations),this.programBlendWeights=new s(e,this.data.blendWeightShader.vertex,this.data.blendWeightShader.fragment,this.vertexAttributeLocations),this.programBlur=new s(e,this.data.blurShader.vertex,this.data.blurShader.fragment,this.vertexAttributeLocations),this.pipelineState=a.makePipelineState({colorWrite:a.defaultColorWriteParams});const t=new Float32Array([-1,-1,3,-1,-1,3]);return this.vao=new n(e,this.vertexAttributeLocations,{geometry:this.vertexBufferLayout},{geometry:new o(e,34962,35044,t)}),this.tmpFramebufferEdges=new d(this.rctx,{colorTarget:0,depthStencilTarget:0},{target:3553,pixelFormat:6407,dataType:5121,samplingMode:9729,wrapMode:33071,width:4,height:4}),this.tmpFramebufferBlend=new d(this.rctx,{colorTarget:0,depthStencilTarget:0},{target:3553,pixelFormat:6408,dataType:5121,samplingMode:9729,wrapMode:33071,width:4,height:4}),this.isEnabled=!0,!0},l.disable=function(){this.isEnabled&&(this.programEdgeDetect.dispose(),this.programEdgeDetect=null,this.programBlendWeights.dispose(),this.programBlendWeights=null,this.programBlur.dispose(),this.programBlur=null,this.vao.dispose(),this.vao=null,this.textureArea.dispose(),this.textureArea=null,this.textureSearch.dispose(),this.textureSearch=null,this.tmpFramebufferBlend.dispose(),this.tmpFramebufferBlend=null,this.tmpFramebufferEdges.dispose(),this.tmpFramebufferEdges=null,this.isEnabled=!1)},l.render=function(e){this.enable();const t=this.rctx,r=t.getBoundFramebufferObject(),i={x:0,y:0,width:e.colorTexture.descriptor.width,height:e.colorTexture.descriptor.height};t.bindVAO(this.vao),t.setPipelineState(this.pipelineState),t.setViewport(i.x,i.y,i.width,i.height),this.tmpFramebufferEdges.resize(i.width,i.height),t.bindFramebuffer(this.tmpFramebufferEdges),t.setClearColor(0,0,0,1),t.clear(16384),t.bindProgram(this.programEdgeDetect),t.bindTexture(e.colorTexture,0),this.programEdgeDetect.setUniform1i("tColor",0),this.programEdgeDetect.setUniform4f("uResolution",1/i.width,1/i.height,i.width,i.height),t.drawArrays(4,0,3),this.tmpFramebufferBlend.resize(i.width,i.height),t.bindFramebuffer(this.tmpFramebufferBlend),t.setClearColor(0,0,1,1),t.clear(16384),t.bindProgram(this.programBlendWeights),this.programBlendWeights.setUniform4f("uResolution",1/i.width,1/i.height,i.width,i.height),t.bindTexture(this.textureSearch,1),this.programBlendWeights.setUniform1i("tSearch",1),t.bindTexture(this.textureArea,2),this.programBlendWeights.setUniform1i("tArea",2),t.bindTexture(this.tmpFramebufferEdges.colorTexture,3),this.programBlendWeights.setUniform1i("tEdges",3),t.drawArrays(4,0,3),t.bindFramebuffer(r),t.setClearColor(0,1,0,1),t.clear(16384),t.bindProgram(this.programBlur),this.programBlur.setUniform4f("uResolution",1/i.width,1/i.height,i.width,i.height),t.bindTexture(e.colorTexture,0),this.programBlur.setUniform1i("tColor",0),t.bindTexture(this.tmpFramebufferBlend.colorTexture,1),this.programBlur.setUniform1i("tBlendWeights",1),t.drawArrays(4,0,3)},l.loadTextureFromBase64=function(e,t,r){const s=new h(this.rctx,{pixelFormat:r,dataType:5121,wrapMode:33071,samplingMode:t},null);return i.requestImage(e).then((e=>(s.resize(e.width,e.height),s.setData(e),s)))},t._createClass(u,[{key:"isLoadingResources",get:function(){return null!=this.resourceLoadingPromise}}]),u}()}));

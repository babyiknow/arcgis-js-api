/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["require","exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../chunks/tslib.es6","../../../../chunks/mat4","../../../../chunks/mat4f64","../core/shaderTechnique/ReloadableShaderModule","../core/shaderTechnique/ShaderTechnique","../core/shaderTechnique/ShaderTechniqueConfiguration","../../../webgl/Program","../../../webgl/renderState","../../../../chunks/LaserlinePath.glsl"],(function(e,t,r,i,o,n,a,l,s,h,u,c){"use strict";let f=function(e){function t(){return e.apply(this,arguments)||this}r._inheritsLoose(t,e);var i=t.prototype;return i.initializeProgram=function(e){const r=t.shader.get(),i=this.configuration,o=r.build(i);return new h(e.rctx,o.generateSource("vertex"),o.generateSource("fragment"),t.attributeLocations)},i.bind=function(e,t,r){this.program.setUniform3fv("innerColor",e.innerColor),this.program.setUniform1f("innerWidth",e.innerWidth*r.pixelRatio),this.program.setUniform3fv("glowColor",e.glowColor),this.program.setUniform1f("glowWidth",e.glowWidth*r.pixelRatio),this.program.setUniform1f("glowFalloff",e.glowFalloff),this.program.setUniform1f("globalAlpha",e.globalAlpha),this.program.setUniform1f("perScreenPixelRatio",r.perScreenPixelRatio),this.program.setUniform2f("pixelToNDC",2/r.fullWidth,2/r.fullHeight),this.program.setUniformMatrix4fv("uProjectionMatrix",r.projectionMatrix),o.translate(g,r.viewMatrix,t),this.program.setUniformMatrix4fv("uModelViewMatrix",g),this.configuration.contrastControlEnabled&&this.program.setUniform1f("globalAlphaContrastBoost",null!=e.globalAlphaContrastBoost?e.globalAlphaContrastBoost:1)},i.initializePipeline=function(){return u.makePipelineState({blending:u.simpleBlendingParams(1,771),colorWrite:u.defaultColorWriteParams})},i.bindPipelineState=function(e){e.setPipelineState(this.pipeline)},t}(l.ShaderTechnique);f.shader=new a.ReloadableShaderModule(c.LaserlinePathShader,(()=>new Promise((function(t,r){e(["./LaserlinePath.glsl"],t,r)})))),f.attributeLocations={start:0,end:1,up:2,extrude:3};let p=function(e){function t(){var t;return(t=e.apply(this,arguments)||this).contrastControlEnabled=!1,t}return r._inheritsLoose(t,e),t}(s.ShaderTechniqueConfiguration);i.__decorate([s.parameter()],p.prototype,"contrastControlEnabled",void 0);const g=n.create();t.LaserlinePathTechnique=f,t.LaserlinePathTechniqueConfiguration=p,Object.defineProperty(t,"__esModule",{value:!0})}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../lib/GLMaterial","./internal/MaterialUtil","../lib/Material","../lib/OrderIndependentTransparency","./internal/DefaultBufferWriter","../shaders/ColorMaterialTechnique"],(function(e,t,i,n,r,a,s,u){"use strict";let o=function(e){function i(t,i){var n;return(n=e.call(this,i,t,l)||this).supportsEdges=!0,n.techniqueConfig=new u.ColorMaterialTechniqueConfiguration,n}t._inheritsLoose(i,e);var r=i.prototype;return r.getTechniqueConfig=function(e,t){return this.techniqueConfig.output=e,this.techniqueConfig.cullFace=this.params.cullFace,this.techniqueConfig.vertexColors=this.params.vertexColors,this.techniqueConfig.slicePlaneEnabled=this.params.slicePlaneEnabled,this.techniqueConfig.transparent=this.params.transparent,this.techniqueConfig.polygonOffset=this.params.polygonOffset,this.techniqueConfig.writeDepth=this.params.writeDepth,this.techniqueConfig.sceneHasOcludees=this.params.sceneHasOcludees,this.techniqueConfig.transparencyPassType=t?t.transparencyPassType:3,this.techniqueConfig.enableOffset=!t||t.camera.relativeElevation<a.OITPolygonOffsetLimit,this.techniqueConfig},r.getPassParameters=function(){return this.params},r.intersect=function(e,t,i,r,a,s,u){n.intersectTriangleGeometry(e,t,r,a,s,void 0,u)},r.getGLMaterial=function(e){return 0===e.output||7===e.output||4===e.output||1===e.output&&this.params.writeLinearDepth?new c(e):void 0},r.createBufferWriter=function(){return new s.DefaultBufferWriter(s.PositionColorLayout)},i}(r.Material),c=function(e){function i(t){var i;return(i=e.call(this,t)||this).updateParameters(),i}t._inheritsLoose(i,e);var n=i.prototype;return n.updateParameters=function(e){this.technique=this.techniqueRep.acquireAndReleaseExisting(u.ColorMaterialTechnique,this.material.getTechniqueConfig(this.output,e),this.technique)},n.beginSlot=function(e){if(4===this.output)return 3===e;return e===(this.technique.configuration.transparent?this.technique.configuration.writeDepth?5:8:3)},n._updateOccludeeState=function(e){e.hasOccludees!==this.material.params.sceneHasOcludees&&this.material.setParameterValues({sceneHasOcludees:e.hasOccludees})},n.ensureParameters=function(e){0!==this.output&&7!==this.output||this._updateOccludeeState(e),this.updateParameters(e)},n.bind=function(e,t){e.bindProgram(this.technique.program),this.technique.bindPass(e,this.material.getPassParameters(),t)},n.getPipelineState=function(e,t){return this.technique.getPipelineState(t)},i}(i);const l={color:[1,1,1,1],transparent:!1,writeDepth:!0,writeLinearDepth:!1,vertexColors:!1,polygonOffset:!1,slicePlaneEnabled:!1,cullFace:0,sceneHasOcludees:!1,...r.materialParametersDefaults};e.ColorMaterial=o,Object.defineProperty(e,"__esModule",{value:!0})}));

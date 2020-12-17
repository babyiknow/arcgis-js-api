/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../core/mathUtils","../../support/buffer/BufferView","../../../../geometry/support/aaBoundingBox","../../support/buffer/InterleavedLayout","../lib/geometryDataUtils","../lib/Util","../lib/GLMaterial","./internal/MaterialUtil","../lib/Material","./internal/bufferWriterUtils","./VisualVariableMaterialParameters","./PathTechnique"],(function(t,e,a,i,n,r,s,o,u,c,h,l,f,d){"use strict";const p=o.assert;let b=function(t){function i(e,a){var n;return(n=t.call(this,a,e,v)||this).supportsEdges=!0,n._vertexAttributeLocations=d.pathVertexAttributeLocations,n.techniqueConfig=new d.PathTechniqueConfiguration,n.vertexBufferLayout=i.getVertexBufferLayout(n.params),n}e._inheritsLoose(i,t);var o=i.prototype;return o.getTechniqueConfig=function(t,e){return this.techniqueConfig.output=t,this.techniqueConfig.vvSize=this.params.vvSizeEnabled,this.techniqueConfig.vvColor=this.params.vvColorEnabled,this.techniqueConfig.vvOpacity=this.params.vvOpacityEnabled,this.techniqueConfig.slicePlaneEnabled=this.params.slicePlaneEnabled,this.techniqueConfig.transparent=this.params.transparent,this.techniqueConfig.sceneHasOcludees=this.params.sceneHasOcludees,0!==t&&7!==t||(this.techniqueConfig.doubleSidedMode=this.params.doubleSided&&"normal"===this.params.doubleSidedType?1:this.params.doubleSided&&"winding-order"===this.params.doubleSidedType?2:0,this.techniqueConfig.receiveShadows=this.params.receiveShadows,this.techniqueConfig.receiveSSAO=this.params.receiveSSAO),this.techniqueConfig.transparencyPassType=e?e.transparencyPassType:3,this.techniqueConfig},o.getPassParameters=function(){return this.params},o.isVisibleInPass=function(t){return 4!==t||this.params.castShadows},o.isVisible=function(){const e=this.params;return!!t.prototype.isVisible.call(this)&&e.opacity>0},o.intersect=function(t,e,i,r,s,o,u){const h=t;if(!h.metadata)return;const l=h.metadata.pathGeometry,f=[this.params.size[0],this.params.size[1]];if(this.params.vvSizeEnabled){const t=this.params.vvSizeOffset,e=this.params.vvSizeFactor,i=this.params.vvSizeMinSize,n=this.params.vvSizeMaxSize,r=l.sizeAttributeValue;f[0]*=a.clamp(t[0]+r*e[0],i[0],n[0]),f[1]*=a.clamp(t[2]+r*e[2],i[2],n[2])}const d=Math.max(f[0],f[1]),p=n.fromValues(t.boundingInfo.bbMin[0]-d,t.boundingInfo.bbMin[1]-d,t.boundingInfo.bbMin[2]-d,t.boundingInfo.bbMax[0]+d,t.boundingInfo.bbMax[1]+d,t.boundingInfo.bbMax[2]+d),b=[o[0]-s[0],o[1]-s[1],o[2]-s[2]],m=Math.sqrt(b[0]*b[0]+b[1]*b[1]+b[2]*b[2]),v=[m/b[0],m/b[1],m/b[2]];c.intersectAabbInvDir(p,s,v,r.tolerance)&&(l.baked.size&&l.baked.size[0]===f[0]&&l.baked.size[1]===f[1]||l.baked.bake(f),l.baked.intersect(s,o,u))},o.computeAttachmentOrigin=function(t,e){const a=t.data,i="getVertexAttr"in a?a.getVertexAttr():"vertexAttr"in a?a.vertexAttr:null;if(!i)return null;const n=i[d.PathVertexAttrConstants.POSITION];return s.computeAttachmentOriginLines(n,null,!1,e)},o.createBufferWriter=function(){return new g(this.vertexBufferLayout)},o.getGLMaterial=function(t){if(0===t.output||7===t.output||1===t.output||2===t.output||4===t.output||3===t.output&&this.params.castShadows)return new m(t)},i.getVertexBufferLayout=function(t){let e=r.newLayout().vec3f(d.PathVertexAttrConstants.POSITION).vec4f(d.PathVertexAttrConstants.PROFILERIGHT).vec4f(d.PathVertexAttrConstants.PROFILEUP).vec4f(d.PathVertexAttrConstants.PROFILEVERTEXANDNORMAL);return(t.vvColorEnabled||t.vvSizeEnabled||t.vvOpacityEnabled)&&(e=e.vec4f(d.PathVertexAttrConstants.FEATUREVALUE)),e},i}(h.Material),m=function(t){function a(e){var a;return(a=t.call(this,e)||this).updateParameters(),a}e._inheritsLoose(a,t);var i=a.prototype;return i.updateParameters=function(t){this.technique=this.techniqueRep.acquireAndReleaseExisting(d.PathTechnique,this.material.getTechniqueConfig(this.output,t),this.technique)},i.beginSlot=function(t){return t===(this.technique.configuration.transparent?5:3)},i._updateOccludeeState=function(t){t.hasOccludees!==this.material.params.sceneHasOcludees&&this.material.setParameterValues({sceneHasOcludees:t.hasOccludees})},i._updateShadowState=function(t){t.shadowMappingEnabled!==this.technique.configuration.receiveShadows&&this.material.setParameterValues({receiveShadows:t.shadowMappingEnabled})},i.ensureParameters=function(t){0!==this.output&&7!==this.output||(this._updateShadowState(t),this._updateOccludeeState(t)),this.updateParameters(t)},i.bind=function(t,e){t.bindProgram(this.technique.program),this.technique.bindPass(t,this.material.getPassParameters(),e)},a}(u);const v={size:[1,1,1],ambient:[.2,.2,.2],diffuse:[.8,.8,.8],specular:[0,0,0],opacity:1,doubleSided:!1,doubleSidedType:"normal",receiveSSAO:!0,receiveShadows:!1,castShadows:!0,slicePlaneEnabled:!1,transparent:!1,sceneHasOcludees:!1,...f.Default,...h.materialParametersDefaults};let g=function(){function t(t){this.vertexBufferLayout=t}var e=t.prototype;return e.allocate=function(t){return this.vertexBufferLayout.createBuffer(t)},e.elementCount=function(t){return t.indices[d.PathVertexAttrConstants.POSITION].length},e.write=function(t,e,a,n){const r=t=>{if(t in e.vertexAttr){const r=e.vertexAttr[t],s=e.indices[t];p(4===r.size);const o=a.getField(t,i.BufferViewVec4f);if(!o)throw new Error("unable to acquire view for "+t);l.writeBufferVec4(s,r.data,o,n)}};r(d.PathVertexAttrConstants.PROFILERIGHT),r(d.PathVertexAttrConstants.PROFILEUP),r(d.PathVertexAttrConstants.PROFILEVERTEXANDNORMAL),this.vertexBufferLayout.hasField(d.PathVertexAttrConstants.FEATUREVALUE)&&r(d.PathVertexAttrConstants.FEATUREVALUE),l.writeDefaultAttributes(e,this.vertexBufferLayout,t.transformation,t.invTranspTransformation,a,n)},t}();t.PathMaterial=b,Object.defineProperty(t,"__esModule",{value:!0})}));

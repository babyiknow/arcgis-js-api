/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["../../../../chunks/_rollupPluginBabelHelpers","../../../../core/maybe","../../../../chunks/vec3f64","../../../../chunks/vec3","../../../../geometry/support/aaBoundingBox","./graphicUtils","./featureExpressionInfoUtils"],(function(e,t,i,s,n,a,r){"use strict";let o=function(){function o(e,t,i,s,n,a,r,o=null){this.uniqueGeometries=i,this.uniqueMaterials=s,this.uniqueTextures=n,this.elevationAligner=a,this.elevationContext=r,this._edgeState=o,this.type="object3d",this.stageLayer=null,this.stage=null,this._visible=!1,this._addedToStage=!1,this.alignedSampledElevation=0,this.needsElevationUpdates=!1,this.graphics3DSymbolLayer=e,this.stageObject=t}var g=o.prototype;return g.initialize=function(e,t){if(this.stageLayer=t,this.stage=e,this.uniqueMaterials)for(let t=0;t<this.uniqueMaterials.length;t++)e.add(3,this.uniqueMaterials[t]);if(this.uniqueGeometries)for(let t=0;t<this.uniqueGeometries.length;t++)e.add(2,this.uniqueGeometries[t]);if(this.uniqueTextures)for(let t=0;t<this.uniqueTextures.length;t++)e.add(4,this.uniqueTextures[t]);e.add(1,this.stageObject)},g.layerOpacityChanged=function(e,i){if(t.isNone(this._edgeState))return;const s=c(this._edgeState.baseMaterial);let n=!1;for(const e of this._edgeState.edgeMaterials)e.objectTransparency!==s&&(e.objectTransparency=s,n=!0);n&&this.resetEdgeObject(i);this.stage.renderView.ensureEdgeView().updateAllComponentOpacities(this.stageObject,[e])},g.slicePlaneEnabledChanged=function(e,i){if(t.isNone(this._edgeState))return;this.stage.renderView.ensureEdgeView().updateAllComponentMaterials(this.stageObject,this._edgeState.edgeMaterials,{slicePlaneEnabled:e},!i),this._edgeState.properties.slicePlaneEnabled=e},g.setVisibility=function(e){if(null!=this.stage&&this._visible!==e&&(this._visible=e,this._visible?this._addedToStage?this.stageObject.setVisible(!0):(this.stageLayer.addObject(this.stageObject),this._addedToStage=!0):this.stageObject.setVisible(!1),t.isSome(this._edgeState))){const t=this.stage.renderView.ensureEdgeView();t.hasObject(this.stageObject)?t.updateObjectVisibility(this.stageObject,e):e&&this.addOrUpdateEdgeObject(t,!1)}},g.destroy=function(){const e=this.stage;if(this.stageLayer){if(this.uniqueMaterials)for(let t=0;t<this.uniqueMaterials.length;t++)e.remove(3,this.uniqueMaterials[t].id);if(this.uniqueGeometries)for(let t=0;t<this.uniqueGeometries.length;t++)e.remove(2,this.uniqueGeometries[t].id);if(this.uniqueTextures)for(let t=0;t<this.uniqueTextures.length;t++)e.remove(4,this.uniqueTextures[t].id)}e.remove(1,this.stageObject.id),this._addedToStage&&(this.stageLayer.removeObject(this.stageObject),this._addedToStage=!1);const t=this.stage.renderView.ensureEdgeView();t.hasObject(this.stageObject)&&t.removeObject(this.stageObject),this.stageObject.dispose(),this._visible=!1,this.stageLayer=null,this.stage=null},g.alignWithElevation=function(e,i,s,n){if(null==this.elevationAligner)return;t.isSome(s)&&r.setContextFeature(this.elevationContext.featureExpressionInfoContext,s);const a=this.elevationAligner(this,this.elevationContext,e,i);null!=a&&(this.alignedSampledElevation=a),this.resetEdgeObject(n)},g.getBSRadius=function(){return this.stageObject.getBSRadius()},g.getCenterObjectSpace=function(e=i.create()){return s.copy(e,this.stageObject.getCenter(!0))},g.getBoundingBoxObjectSpace=function(e=n.create()){return function(e,t,i){i||(i=n.create());return n.setMin(i,e.getBBMin(t)),n.setMax(i,e.getBBMax(t)),i}(this.stageObject,!0,e)},g.computeAttachmentOrigin=function(e){for(const t of this.stageObject.geometryRecords)t.computeAttachmentOrigin(l)&&(s.transformMat4(l,l,this.stageObject.objectTransformation),s.add(e.render.origin,e.render.origin,l),e.render.num++)},g.getProjectedBoundingBox=async function(e,t,i,r,o){const c=this.getBoundingBoxObjectSpace(o),g=d,b=n.isPoint(c)?1:g.length;for(let e=0;e<b;e++){const t=g[e];h[0]=c[t[0]],h[1]=c[t[1]],h[2]=c[t[2]],s.transformMat4(h,h,this.stageObject.objectTransformation),u[3*e+0]=h[0],u[3*e+1]=h[1],u[3*e+2]=h[2]}if(!e(u,0,b))return null;n.empty(c);let f=null;this.calculateRelativeScreenBounds&&(f=this.calculateRelativeScreenBounds());for(let e=0;e<3*b;e+=3){for(let t=0;t<3;t++)c[t]=Math.min(c[t],u[e+t]),c[t+3]=Math.max(c[t+3],u[e+t]);f&&i.push({location:u.slice(e,e+3),screenSpaceBoundingRect:f})}if(t&&t.service&&"absolute-height"!==this.elevationContext.mode){n.center(c,l);const e="relative-to-scene"===this.elevationContext.mode?"scene":"ground";let i;if(t.useViewElevation)i=t.service.getElevation(l[0],l[1],e);else try{const s=a.demResolutionForBoundingBox(c,t);i=await t.service.queryElevation(l[0],l[1],r,s,e)}catch(e){i=null}n.offset(c,0,0,-this.alignedSampledElevation+i)}return c},g.addObjectState=function(e,t){0===e&&t.addObject(this.stageObject,this.stageObject.highlight()),1===e&&t.addObject(this.stageObject,this.stageObject.maskOccludee())},g.removeObjectState=function(e){e.removeObject(this.stageObject)},g.resetEdgeObject=function(e){if(t.isNone(this._edgeState))return;const i=this.stage.renderView.ensureEdgeView();this._visible?this.addOrUpdateEdgeObject(i,e):i.removeObject(this.stageObject)},g.addOrUpdateEdgeObject=function(e,i){const s=this._edgeState;if(t.isNone(s))return;const n=c(s.baseMaterial);for(const e of s.edgeMaterials)e.objectTransparency=n;e.addOrUpdateObject3D(this.stageObject,s.edgeMaterials,s.properties,!i)},e._createClass(o,[{key:"isElevationSource",get:function(){return!(!this.stageObject.metadata||!this.stageObject.metadata.isElevationSource)}},{key:"visible",get:function(){return this._visible}}]),o}();function c(e){return e.isVisible?e.params.transparent?1:2:0}!function(e){let t;!function(e){e[e.REMOVE_OBJECT=0]="REMOVE_OBJECT",e[e.HIDE_FACERANGE=1]="HIDE_FACERANGE"}(t=e.VisibilityModes||(e.VisibilityModes={}))}(o||(o={}));const u=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],h=i.create(),l=i.create(),d=[[0,1,2],[3,1,2],[0,4,2],[3,4,2],[0,1,5],[3,1,5],[0,4,5],[3,4,5]];return o}));

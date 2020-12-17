/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["../../../../chunks/_rollupPluginBabelHelpers","../../../../core/maybe","../../../../chunks/vec3f64","../../../../chunks/vec3","../../support/mathUtils","../../../../chunks/mat4","../../../../chunks/mat4f64","./Util","./IdGen","./GeometryRecord","./Object3DStateSet","../materials/renderers/utils"],(function(t,e,i,r,n,s,o,a,c,h,u,l){"use strict";let m=function(){function c(t={}){this._objectTransformation=o.create(),this._bvObjectSpace=new d,this._bvWorldSpace=new d,this._bvDirty=!0,this._hasVolatileTransformation=!1,this._visible=!0,this.id=c._idGen.gen(t.idHint),this.castShadow=null==t.castShadow||t.castShadow,this.metadata=t.metadata,this.metadata&&this.metadata.isElevationSource&&(this.metadata.lastValidElevationBB=new b),this.objectTransformation=o.create(),this._initializeGeometryRecords(t.geometries,t.materials,t.transformations,t.origins)}var m=c.prototype;return m.dispose=function(){for(const t of this._geometryRecords)h.pool.release(t);this._geometryRecords=null,this._geometries=null},m._initializeGeometryRecords=function(t,e,i,r){if(!Array.isArray(t))return this._geometryRecords=[],void(this._geometries=[]);a.assert(e.length===t.length,"Object3D: materials don't match geometries"),a.assert(i.length===t.length,"Object3D: transformations don't match geometries"),this._geometryRecords=new Array(t.length),this._geometries=t.slice();for(let n=0;n<t.length;n++){const s={highlights:null,occludees:null,visible:!0};this._geometryRecords[n]=h.pool.acquire(t[n],e[n],o.clone(i[n]),s,r&&r[n])}this._hasVolatileTransformation=!1},m.getNumGeometryRecords=function(){return this._geometryRecords.length},m.getGeometryRecord=function(t){return a.assert(t>=0&&t<this._geometryRecords.length,"Object3d.getGeometryDataByIndex: index out of range"),this._geometryRecords[t]},m.addGeometry=function(t,e,i,r,n,s){i=i||o.IDENTITY,this._geometries.push(t);const a=h.pool.acquire(t,e,i,r||{highlights:null,occludees:null,visible:!0},n,s);return this._geometryRecords.push(a),this._hasVolatileTransformation=this._geometryRecords.some((t=>!!t.shaderTransformation)),this._notifyDirty("objGeometryAdded",a),this._invalidateBoundingVolume(),a},m.removeGeometry=function(t){const e=this._geometryRecords.splice(t,1)[0];return h.pool.release(e),this._hasVolatileTransformation=this._geometryRecords.some((t=>!!t.shaderTransformation)),this._geometries.splice(t,1),this._notifyDirty("objGeometryRemoved",e),this._invalidateBoundingVolume(),e},m.removeAllGeometries=function(){for(;this.getNumGeometryRecords()>0;)this.removeGeometry(0)},m.geometryVertexAttrsUpdated=function(t){this._notifyDirty("vertexAttrsUpdated",this._geometryRecords[t]),this._invalidateBoundingVolume()},m.setVisible=function(t){this._visible=t;for(const t of this._geometryRecords)t.instanceParameters.visible=this._visible;this._notifyDirty("visibilityChanged")},m.maskOccludee=function(){const t=u.generateObject3DStateId(1);for(const e of this._geometryRecords)e.instanceParameters.occludees=l.addObject3DStateID(e.instanceParameters.occludees,t);return this._notifyDirty("occlusionChanged"),t},m.removeOcclude=function(t){for(const e of this._geometryRecords)e.instanceParameters.occludees=l.removeObject3DStateID(e.instanceParameters.occludees,t);this._notifyDirty("occlusionChanged")},m.highlight=function(){const t=u.generateObject3DStateId(0);for(const e of this._geometryRecords)e.instanceParameters.highlights=l.addObject3DStateID(e.instanceParameters.highlights,t);return this._notifyDirty("highlightChanged"),t},m.removeHighlight=function(t){for(const e of this._geometryRecords)e.instanceParameters.highlights=l.removeObject3DStateID(e.instanceParameters.highlights,t);this._notifyDirty("highlightChanged")},m.getCombinedStaticTransformation=function(t,i){return s.multiply(e.unwrapOr(i,o.create()),this.objectTransformation,t.getStaticTransformation())},m.getCombinedShaderTransformation=function(t,e){return e=e||o.create(),s.multiply(e,this.objectTransformation,t.getShaderTransformation()),e},m.hasVolativeTransformation=function(){return this._hasVolatileTransformation},m.getBBMin=function(t){return this._validateBoundingVolume(),t?this._bvObjectSpace.bbMin:this._bvWorldSpace.bbMin},m.getBBMax=function(t){return this._validateBoundingVolume(),t?this._bvObjectSpace.bbMax:this._bvWorldSpace.bbMax},m.getCenter=function(t){return this._validateBoundingVolume(),t?this._bvObjectSpace.center:this._bvWorldSpace.center},m.getBSRadius=function(t){return this._validateBoundingVolume(),t?this._bvObjectSpace.bsRadius:this._bvWorldSpace.bsRadius},m._validateBoundingVolume=function(){if(!this._bvDirty&&!this._hasVolatileTransformation)return;this._bvObjectSpace.init(),this._bvWorldSpace.init();for(let t=0;t<this._geometryRecords.length;++t){const e=this._geometries[t],i=this._geometryRecords[t],r=e.boundingInfo;this._calculateTransformedBoundingVolume(r,this._bvObjectSpace,i.getShaderTransformation()),this._calculateTransformedBoundingVolume(r,this._bvWorldSpace,this.getCombinedShaderTransformation(i))}r.lerp(this._bvObjectSpace.center,this._bvObjectSpace.bbMin,this._bvObjectSpace.bbMax,.5),r.lerp(this._bvWorldSpace.center,this._bvWorldSpace.bbMin,this._bvWorldSpace.bbMax,.5);const t=i.create(),e=i.create(),s=n.maxScale(this.objectTransformation);for(let i=0;i<this._geometryRecords.length;++i){const o=this._geometries[i],a=this._geometryRecords[i].getShaderTransformation(),c=n.maxScale(a),h=o.boundingInfo;r.transformMat4(t,h.getCenter(),a);const u=r.distance(t,this._bvObjectSpace.center),l=h.getBSRadius()*c;this._bvObjectSpace.bsRadius=Math.max(this._bvObjectSpace.bsRadius,u+l),r.transformMat4(e,t,this.objectTransformation);const m=r.distance(e,this._bvWorldSpace.center),b=l*s;this._bvWorldSpace.bsRadius=Math.max(this._bvWorldSpace.bsRadius,m+b)}this._bvDirty=!1},m._calculateTransformedBoundingVolume=function(t,e,n){const s=t.getBBMin(),o=t.getBBMax(),a=i.clone(s),c=i.clone(o);r.transformMat4(a,a,n),r.transformMat4(c,c,n);for(let t=0;t<3;++t)e.bbMin[t]=Math.min(e.bbMin[t],a[t],c[t]),e.bbMax[t]=Math.max(e.bbMax[t],a[t],c[t]);for(let t=0;t<3;++t){r.copy(a,s),r.copy(c,o),a[t]=o[t],c[t]=s[t],r.transformMat4(a,a,n),r.transformMat4(c,c,n);for(let t=0;t<3;++t)e.bbMin[t]=Math.min(e.bbMin[t],a[t],c[t]),e.bbMax[t]=Math.max(e.bbMax[t],a[t],c[t])}},m._invalidateBoundingVolume=function(){this._bvDirty=!0,this._parentLayer&&this._parentLayer.notifyObjectBBChanged(this,{center:this._bvWorldSpace.center,radius:this._bvWorldSpace.bsRadius})},m._notifyDirty=function(t,e,i,r){if(this._parentLayer){i=i||1;const n=r||this;this._parentLayer.notifyDirty(t,e,i,n)}},t._createClass(c,[{key:"geometryRecords",get:function(){return this._geometryRecords}},{key:"geometries",get:function(){return this._geometries}},{key:"objectTransformation",get:function(){return this._objectTransformation},set:function(t){s.copy(this._objectTransformation,t),this._invalidateBoundingVolume(),this._notifyDirty("objTransformation")}},{key:"parentLayer",get:function(){return this._parentLayer},set:function(t){a.assert(null==this._parentLayer||null==t,"Object3D can only be added to a single Layer"),this._parentLayer=t}},{key:"isVisible",get:function(){return this._visible}},{key:"test",get:function(){const t=this;return{hasGeometry:e=>t._geometries.indexOf(e)>-1,getGeometryIndex:e=>t._geometries.indexOf(e)}}}]),c}();m._idGen=new c.IdGen;let b=function(){function t(){this.bbMin=i.fromValues(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),this.bbMax=i.fromValues(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE)}return t.prototype.isEmpty=function(){return this.bbMax[0]<this.bbMin[0]&&this.bbMax[1]<this.bbMin[1]&&this.bbMax[2]<this.bbMin[2]},t}(),d=function(e){function n(){var t;return(t=e.call(this)||this).center=i.create(),t.bsRadius=0,t}t._inheritsLoose(n,e);var s=n.prototype;return s.init=function(){r.set(this.bbMin,Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),r.set(this.bbMax,-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE),r.set(this.center,0,0,0),this.bsRadius=0},s.getCenter=function(){return this.center},s.getBSRadius=function(){return this.bsRadius},n}(b);return m}));

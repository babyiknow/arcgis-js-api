/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../chunks/tslib.es6","../../../../core/has","../../../../core/maybe","../../../../core/Logger","../../../../core/accessorSupport/ensureType","../../../../core/accessorSupport/decorators/property","../../../../core/accessorSupport/decorators/subclass","../../../../core/urlUtils","../../../../core/uuid","../../../../portal/support/resourceExtension","../../../../core/PooledArray","../../../../core/Accessor","../../../../core/MapUtils","./Material","./rendererUtils","../materials/renderers/MergedRenderer"],(function(e,t,r,s,i,a,n,d,o,h,l,p,u,c,m,_,g,R){"use strict";let f=function(){};e.SortedRenderGeometryRenderer=function(e){function r(){var t;return(t=e.apply(this,arguments)||this)._pendingAddsRemoves=new Map,t._adds=new u,t._removes=new u,t._updates=new u({allocator:e=>e||new f,deallocator:e=>(e.renderGeometry=null,e)}),t._materialRenderers=new Map,t._sortedMaterialRenderers=new u,t._hasHighlights=!1,t._hasWater=!1,t}t._inheritsLoose(r,e);var s=r.prototype;return s.dispose=function(){this._adds.prune(),this._removes.prune(),this._updates.prune(),this._materialRenderers&&(this._materialRenderers.forEach((e=>e.dispose())),this._materialRenderers.clear(),this._sortedMaterialRenderers.clear())},s.stopAnimationsAtTime=function(e){this._sortedMaterialRenderers.forAll((t=>i.applySome(t.material.animation,(t=>t.stopAtTime(e)))))},s.commitChanges=function(){let e=!1;if(!this.updating)return!1;this.updateAddsRemoves();const t={numToAdd:this._adds.length,toAdd:this._adds.data,numToRemove:this._removes.length,toRemove:this._removes.data,numToUpdate:this._updates.length,toUpdate:this._updates.data},r=g.splitRenderGeometryChangeSetByMaterial(t);let s=!1,i=!1;return r.forEach(((t,r)=>{let a=this._materialRenderers.get(r);if(!a&&t.toAdd.length>0&&(a=new R(this.rctx,this.materialRepository,r),this._materialRenderers.set(r,a),e=!0,s=!0,i=!0),!a)return;const n=s||a.hasHighlights,d=i||a.hasWater;a.modify(t),s=s||n!==a.hasHighlights,i=i||d!==a.hasWater,a.isEmpty&&(this._materialRenderers.delete(r),a.dispose(),e=!0)})),this._adds.clear(),this._removes.clear(),this._updates.clear(),this._pendingAddsRemoves.clear(),e&&this.updateSortedMaterialRenderers(),s&&(this._hasHighlights=m.someMap(this._materialRenderers,(e=>e.hasHighlights))),i&&(this._hasWater=m.someMap(this._materialRenderers,(e=>e.hasWater))),this.notifyChange("updating"),!0},s.add=function(e){if(0===e.length)return;const t=0===this._pendingAddsRemoves.size;for(const t of e)this._pendingAddsRemoves.set(t,0);t&&this.notifyChange("updating")},s.remove=function(e){const t=0===this._pendingAddsRemoves.size;for(const t of e){const e=this._pendingAddsRemoves.get(t);0===e?this._pendingAddsRemoves.set(t,2):2!==e&&this._pendingAddsRemoves.set(t,1)}t&&this._pendingAddsRemoves.size>0&&this.notifyChange("updating")},s.modify=function(e,t){const r=0===this._updates.length;for(const r of e){const e=this._updates.pushNew();e.renderGeometry=r,e.updateType=t}r&&this._updates.length>0&&this.notifyChange("updating")},s.updateLogic=function(e){let t=!1;return this._sortedMaterialRenderers.forAll((({materialRenderer:r})=>{r.updateLogic&&r.updateLogic(e)&&(t=!0)})),t},s.draw=function(e,t){for(let r=0;r<this._sortedMaterialRenderers.length;r++){const s=this._sortedMaterialRenderers.data[r];_.materialPredicate(s.material,e)&&s.materialRenderer.render(null,e,t,null)}},s.updateSortedMaterialRenderers=function(){this._sortedMaterialRenderers.clear();let e=0;this._materialRenderers.forEach(((t,r)=>{r.insertOrder=e++,this._sortedMaterialRenderers.push({material:r,materialRenderer:t})})),this._sortedMaterialRenderers.sort(((e,t)=>{const r=t.material.renderPriority-e.material.renderPriority;return 0!==r?r:e.material.insertOrder-t.material.insertOrder}))},s.updateAddsRemoves=function(){this._adds.clear(),this._removes.clear(),this._pendingAddsRemoves.forEach(((e,t)=>{switch(e){case 0:this._adds.push(t);break;case 1:this._removes.push(t)}}));let e=0;for(;e<this._updates.length;){const t=this._updates.data[e].renderGeometry;this._pendingAddsRemoves.has(t)?this._updates.removeUnorderedIndex(e):e++}},t._createClass(r,[{key:"updating",get:function(){return this._pendingAddsRemoves.size>0||this._updates.length>0}},{key:"hasHighlights",get:function(){return this._hasHighlights}},{key:"hasWater",get:function(){return this._hasWater}},{key:"rendersOccluded",get:function(){return m.someMap(this._materialRenderers,(e=>e.rendersOccluded))}},{key:"isEmpty",get:function(){return!this.updating&&0===this._materialRenderers.size}},{key:"test",get:function(){return{sortedMaterialRenderers:this._sortedMaterialRenderers}}}]),r}(c),r.__decorate([d.property()],e.SortedRenderGeometryRenderer.prototype,"rctx",void 0),r.__decorate([d.property()],e.SortedRenderGeometryRenderer.prototype,"materialRepository",void 0),r.__decorate([d.property()],e.SortedRenderGeometryRenderer.prototype,"updating",null),e.SortedRenderGeometryRenderer=r.__decorate([o.subclass("esri.views.3d.webgl-engine.lib.SortedRenderGeometryRenderer")],e.SortedRenderGeometryRenderer),Object.defineProperty(e,"__esModule",{value:!0})}));

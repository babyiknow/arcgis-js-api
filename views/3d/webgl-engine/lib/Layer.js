/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["../../../../chunks/_rollupPluginBabelHelpers","../../../../core/Evented","../../../../chunks/vec3f64","./IdGen","./Octree"],(function(t,e,i,n,r){"use strict";let s=function(e){function n(t,r,s){var o;return(o=e.call(this)||this)._parentStages=new Map,o._objects=new Set,o.id=n._idGen.gen(t),o.apiLayerUid=s,o.name=t,r=r||{},o.group=r.group||"",o.isVisible=null==r.isVisible||r.isVisible,o.isPickable=null==r.isPickable||r.isPickable,o.isSliceable=!1,o.translation=r.translation?i.clone(r.translation):i.create(),o}t._inheritsLoose(n,e);var s=n.prototype;return s.addParentStage=function(t){if(!this._parentStages.has(t)){const e=this.on("dirty",(e=>{t.notifyDirty(e.origin,e.dirtyType,e.subObject)}));this._parentStages.set(t,e)}},s.removeParentStage=function(t){const e=this._parentStages.get(t);e&&(e.remove(),this._parentStages.delete(t)),this.invalidateSpatialQueryAccelerator()},s.getName=function(){return this.name},s.getGroup=function(){return this.group},s.getTranslation=function(){return this.translation},s.getObjectIds=function(){return Array.from(this._objects,(t=>t.id))},s.getObjects=function(){return[...this._objects]},s.addObject=function(t){this._objects.add(t),t.parentLayer=this,this.notifyDirty("layerObjectAdded",t),this._octree&&this._octree.add(t)},s.hasObject=function(t){return this._objects.has(t)},s.removeObject=function(t){return!!this._objects.delete(t)&&(t.parentLayer=null,this.notifyDirty("layerObjectRemoved",t),this._octree&&this._octree.remove(t),!0)},s.notifyObjectBBChanged=function(t,e){this._octree&&this._octree.update(t,e)},s.getSpatialQueryAccelerator=function(){return!this._octree&&this._objects.size>50&&this._createOctree(),this._octree},s.shaderTransformationChanged=function(){this.notifyDirty("shaderTransformationChanged",null)},s.invalidateSpatialQueryAccelerator=function(){this._octree&&(this._octree.destroy(),this._octree=null)},s.notifyDirty=function(t,e,i,n){const r={origin:n||this,dirtyType:t,subObject:e};this.emit("dirty",r)},s._createOctree=function(){this._octree=new r({getRadius:t=>t.getBSRadius(),getCenter:t=>t.getCenter()}),this._octree.add([...this._objects])},n}(e);return s._idGen=new n.IdGen,s}));

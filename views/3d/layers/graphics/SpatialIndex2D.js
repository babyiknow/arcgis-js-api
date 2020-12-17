/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../chunks/tslib.es6","../../../../core/has","../../../../core/Logger","../../../../core/accessorSupport/ensureType","../../../../core/accessorSupport/decorators/property","../../../../core/accessorSupport/decorators/subclass","../../../../core/urlUtils","../../../../core/uuid","../../../../portal/support/resourceExtension","../../../../core/Accessor","../../../../geometry/support/aaBoundingBox","../../../../layers/graphics/dehydratedFeatures","../../../../core/libs/rbush/PooledRBush"],(function(e,t,n,r,o,s,i,a,c,u,d,l,p,h,x){"use strict";e.SpatialIndex2D=function(e){function n(t){var n;return(n=e.call(this,t)||this).index=new x.PooledRBush(9,r("csp-restrictions")?e=>({minX:e.extent[0],minY:e.extent[1],maxX:e.extent[2],maxY:e.extent[3]}):[".extent[0]",".extent[1]",".extent[2]",".extent[3]"]),n.boundsByFeature=new Map,n.spatialReference=null,n.hasZ=null,n.hasM=null,n.objectIdField=null,n}t._inheritsLoose(n,e);var o=n.prototype;return o.destroy=function(){this.index.destroy(),this.index=null,this.boundsByFeature.clear(),this.boundsByFeature=null},o.queryGraphicUIDsInExtent=function(e,t,n){t.equals(this.spatialReference)&&(y.minX=e[0],y.minY=e[1],y.maxX=e[2],y.maxY=e[3],this.index.search(y,(e=>n(e.graphic.uid))))},o.add=function(e){e.computeExtent(this.spatialReference),this.index.insert(e);const t=h.getObjectId(e.graphic,this._get("objectIdField"));null!=t&&this.boundsByFeature.set(t,e.extent)},o.addMany=function(e,t=e.length){const n=this._get("objectIdField");for(let r=0;r<t;r++){const t=e[r];t.computeExtent(this.spatialReference);const o=h.getObjectId(t.graphic,n);null!=o&&this.boundsByFeature.set(o,t.extent)}this.index.load(e,t)},o.remove=function(e){this.index.remove(e);const t=h.getObjectId(e.graphic,this._get("objectIdField"));null!=t&&this.boundsByFeature.delete(t)},o.clear=function(){this.index.clear(),this.boundsByFeature.clear()},o.forEachInBounds=function(e,t){y.minX=e[0],y.minY=e[1],y.maxX=e[2],y.maxY=e[3],this.index.search(y,(e=>{t(e)}))},o.getBounds=function(e,t){const n=this.boundsByFeature.get(e);return n?p.fromRect(t,n):null},n}(l),n.__decorate([i.property({constructOnly:!0})],e.SpatialIndex2D.prototype,"spatialReference",void 0),n.__decorate([i.property({constructOnly:!0})],e.SpatialIndex2D.prototype,"hasZ",void 0),n.__decorate([i.property({constructOnly:!0})],e.SpatialIndex2D.prototype,"hasM",void 0),n.__decorate([i.property({constructOnly:!0})],e.SpatialIndex2D.prototype,"objectIdField",void 0),e.SpatialIndex2D=n.__decorate([a.subclass("esri.views.3d.layers.graphics.SpatialIndex2D")],e.SpatialIndex2D);const y={minX:0,minY:0,maxX:0,maxY:0};var b=e.SpatialIndex2D;e.default=b,Object.defineProperty(e,"__esModule",{value:!0})}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/has","../../core/Logger","../../core/accessorSupport/ensureType","../../core/accessorSupport/decorators/property","../../core/accessorSupport/decorators/subclass","../../core/urlUtils","../../core/uuid","../../portal/support/resourceExtension","../../geometry/Extent","../../geometry/Polygon","../../geometry","../../core/Evented","../../layers/support/LOD","./constraints/GeometryConstraint","./constraints/RotationConstraint","./constraints/ZoomConstraint"],(function(e,o,t,r,n,a,i,s,p,c,l,m,y,u,_,d,f,v){"use strict";const h={base:null,key:"type",typeMap:{extent:l,polygon:m}};let S=function(o){function t(){var e;return(e=o.apply(this,arguments)||this).lods=null,e.minScale=0,e.maxScale=0,e.minZoom=-1,e.maxZoom=-1,e.rotationEnabled=!0,e.snapToZoom=!0,e}e._inheritsLoose(t,o);var r=t.prototype;return r.initialize=function(){this.watch(["_zoom","_rotation"],this.emit.bind(this,"update"),!0)},r.destroy=function(){this.view=null,this._set("_zoom",null),this._set("_rotation",null)},r.canZoomInTo=function(e){const o=this.effectiveMaxScale;return 0===o||e>=o},r.canZoomOutTo=function(e){const o=this.effectiveMinScale;return 0===o||e<=o},r.constrain=function(e,o){return this._zoom.constrain(e,o),this._rotation.constrain(e,o),this._geometry.constrain(e,o),e},r.constrainByGeometry=function(e){return this._geometry.constrain(e)},r.fit=function(e){return this._zoom.fit(e)},r.zoomToScale=function(e){return this._zoom.zoomToScale(e)},r.scaleToZoom=function(e){return this._zoom.scaleToZoom(e)},r.snapScale=function(e){return this._zoom.snapToClosestScale(e)},r.snapToNextScale=function(e){return this._zoom.snapToNextScale(e)},r.snapToPreviousScale=function(e){return this._zoom.snapToPreviousScale(e)},e._createClass(t,[{key:"geometry",set:function(e){e?this._set("geometry",e):this._set("geometry",null)}},{key:"_defaultLODs",get:function(){const e=this.get("view.defaultsFromMap.tileInfo"),o=this.get("view.spatialReference");return e&&o&&e.spatialReference.equals(o)?e.lods:null}},{key:"_geometry",get:function(){return new d.GeometryConstraint({geometry:this.geometry,spatialReference:this.view.spatialReference})}},{key:"_rotation",get:function(){return new f({rotationEnabled:this.rotationEnabled})}},{key:"_zoom",get:function(){return new v({lods:this.lods||this._defaultLODs,minZoom:this.minZoom,maxZoom:this.maxZoom,minScale:this.minScale,maxScale:this.maxScale,snapToZoom:this.snapToZoom})}}]),t}(u.EventedAccessor);return o.__decorate([a.property({readOnly:!0,aliasOf:"_zoom.effectiveLODs"})],S.prototype,"effectiveLODs",void 0),o.__decorate([a.property({readOnly:!0,aliasOf:"_zoom.effectiveMinScale"})],S.prototype,"effectiveMinScale",void 0),o.__decorate([a.property({readOnly:!0,aliasOf:"_zoom.effectiveMaxScale"})],S.prototype,"effectiveMaxScale",void 0),o.__decorate([a.property({readOnly:!0,aliasOf:"_zoom.effectiveMinZoom"})],S.prototype,"effectiveMinZoom",void 0),o.__decorate([a.property({readOnly:!0,aliasOf:"_zoom.effectiveMaxZoom"})],S.prototype,"effectiveMaxZoom",void 0),o.__decorate([a.property({types:h,value:null})],S.prototype,"geometry",null),o.__decorate([a.property({type:[_]})],S.prototype,"lods",void 0),o.__decorate([a.property()],S.prototype,"minScale",void 0),o.__decorate([a.property()],S.prototype,"maxScale",void 0),o.__decorate([a.property()],S.prototype,"minZoom",void 0),o.__decorate([a.property()],S.prototype,"maxZoom",void 0),o.__decorate([a.property()],S.prototype,"rotationEnabled",void 0),o.__decorate([a.property()],S.prototype,"snapToZoom",void 0),o.__decorate([a.property()],S.prototype,"view",void 0),o.__decorate([a.property({dependsOn:["view.spatialReference","view.defaultsFromMap.tileInfo"]})],S.prototype,"_defaultLODs",null),o.__decorate([a.property({type:d.GeometryConstraint,dependsOn:["geometry","view.spatialReference"]})],S.prototype,"_geometry",null),o.__decorate([a.property({type:f,dependsOn:["rotationEnabled"]})],S.prototype,"_rotation",null),o.__decorate([a.property({readOnly:!0,type:v,dependsOn:["lods","minZoom","maxZoom","minScale","maxScale","snapToZoom","_defaultLODs"]})],S.prototype,"_zoom",null),S=o.__decorate([i.subclass("esri.views.2d.MapViewConstraints")],S),S}));

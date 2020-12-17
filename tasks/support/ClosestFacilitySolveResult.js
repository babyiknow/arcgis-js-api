/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/has","../../core/maybe","../../core/Logger","../../core/accessorSupport/ensureType","../../core/accessorSupport/decorators/property","../../core/accessorSupport/decorators/reader","../../core/accessorSupport/decorators/subclass","../../core/urlUtils","../../core/uuid","../../portal/support/resourceExtension","../../core/JSONSupport","../../geometry/SpatialReference","../../geometry/Point","../../geometry/Polygon","../../geometry/Polyline","../../geometry","../../Graphic","./FeatureSet","./DirectionsFeatureSet","./NAMessage"],(function(e,r,o,t,i,n,p,a,s,c,l,u,y,d,_,f,g,m,B,S,v,P){"use strict";function b(e){return S.fromJSON(e).features.map((e=>e.geometry))}let h=function(r){function o(e){var o;return(o=r.call(this,e)||this).directions=null,o.facilities=null,o.incidents=null,o.messages=null,o.pointBarriers=null,o.polylineBarriers=null,o.polygonBarriers=null,o.routes=null,o}e._inheritsLoose(o,r);var i=o.prototype;return i.readFacilities=function(e){return b(e)},i.readIncidents=function(e){return b(e)},i.readPointBarriers=function(e,r){return b(r.barriers)},i.readPolylineBarriers=function(e){return b(e)},i.readPolygonBarriers=function(e){return b(e)},i.readRoutes=function(e){return function(e){return e.features.map((r=>{const o=d.fromJSON(e.spatialReference),i=B.fromJSON(r);return t.isSome(i.geometry)&&(i.geometry.spatialReference=o),i}))}(e)},o}(y.JSONSupport);return r.__decorate([p.property({type:[v]})],h.prototype,"directions",void 0),r.__decorate([p.property({type:[_]})],h.prototype,"facilities",void 0),r.__decorate([a.reader("facilities")],h.prototype,"readFacilities",null),r.__decorate([p.property({type:[_]})],h.prototype,"incidents",void 0),r.__decorate([a.reader("incidents")],h.prototype,"readIncidents",null),r.__decorate([p.property({type:[P]})],h.prototype,"messages",void 0),r.__decorate([p.property({type:[_]})],h.prototype,"pointBarriers",void 0),r.__decorate([a.reader("pointBarriers",["barriers"])],h.prototype,"readPointBarriers",null),r.__decorate([p.property({type:[g]})],h.prototype,"polylineBarriers",void 0),r.__decorate([a.reader("polylineBarriers")],h.prototype,"readPolylineBarriers",null),r.__decorate([p.property({type:[f]})],h.prototype,"polygonBarriers",void 0),r.__decorate([a.reader("polygonBarriers")],h.prototype,"readPolygonBarriers",null),r.__decorate([p.property({type:[B]})],h.prototype,"routes",void 0),r.__decorate([a.reader("routes")],h.prototype,"readRoutes",null),h=r.__decorate([s.subclass("esri.tasks.support.ClosestFacilitySolveResult")],h),h}));

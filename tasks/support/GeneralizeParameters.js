/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/has","../../core/Logger","../../core/accessorSupport/ensureType","../../core/accessorSupport/decorators/property","../../core/accessorSupport/decorators/subclass","../../core/urlUtils","../../core/uuid","../../portal/support/resourceExtension","../../core/JSONSupport","../../geometry/support/jsonUtils"],(function(e,r,o,t,s,p,i,n,u,a,c,l){"use strict";let d=function(r){function o(e){var o;return(o=r.call(this,e)||this).deviationUnit=null,o.geometries=null,o.maxDeviation=null,o}return e._inheritsLoose(o,r),o}(c.JSONSupport);return r.__decorate([p.property({type:String,json:{write:!0}})],d.prototype,"deviationUnit",void 0),r.__decorate([p.property({json:{read:{reader:e=>e?e.map((e=>l.fromJSON(e))):null},write:{writer:(e,r)=>{r.geometries=e.map((e=>e.toJSON()))}}}})],d.prototype,"geometries",void 0),r.__decorate([p.property({type:Number,json:{write:!0}})],d.prototype,"maxDeviation",void 0),d=r.__decorate([i.subclass("esri.tasks.support.GeneralizeParameters")],d),d.from=s.ensureType(d),d}));

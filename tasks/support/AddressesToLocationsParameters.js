/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/has","../../core/Logger","../../core/accessorSupport/ensureType","../../core/accessorSupport/decorators/property","../../core/accessorSupport/decorators/subclass","../../core/urlUtils","../../core/uuid","../../portal/support/resourceExtension","../../core/JSONSupport","../../geometry/SpatialReference","../../geometry"],(function(e,r,o,t,s,c,p,a,u,n,i,l,d){"use strict";let y=function(r){function o(e){var o;return(o=r.call(this,e)||this).addresses=null,o.categories=null,o.countryCode=null,o.locationType=null,o.outSpatialReference=null,o}return e._inheritsLoose(o,r),o}(i.JSONSupport);return r.__decorate([c.property({type:[Object],json:{read:{reader:e=>e&&e.records?e.records.map((e=>e.attributes)):null},write:{writer:(e,r)=>{const o=[];Array.isArray(e)&&e.forEach((e=>{o.push({attributes:e})})),r.addresses={records:o}}}}})],y.prototype,"addresses",void 0),r.__decorate([c.property({type:[String],json:{read:{source:"category",reader:e=>e?e.split(","):null},write:{target:"category",writer:(e,r)=>{r.category=e?e.join(","):null}}}})],y.prototype,"categories",void 0),r.__decorate([c.property({type:String,json:{read:{source:"sourceCountry"},write:{target:"sourceCountry"}}})],y.prototype,"countryCode",void 0),r.__decorate([c.property({type:String,json:{write:!0}})],y.prototype,"locationType",void 0),r.__decorate([c.property({type:l,json:{read:{source:"outSR"},write:{target:"outSR"}}})],y.prototype,"outSpatialReference",void 0),y=r.__decorate([p.subclass("esri.tasks.support.AddressesToLocationsParameters")],y),y.from=s.ensureType(y),y}));

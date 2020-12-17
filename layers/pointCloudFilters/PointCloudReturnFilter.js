/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/has","../../core/lang","../../core/Logger","../../core/accessorSupport/ensureType","../../core/accessorSupport/decorators/property","../../core/accessorSupport/decorators/enumeration","../../core/accessorSupport/decorators/subclass","../../core/urlUtils","../../core/uuid","../../portal/support/resourceExtension","./PointCloudFilter"],(function(e,r,t,o,n,s,u,i,c,l,p,a,d){"use strict";var y;let f=y=function(r){function t(e){var t;return(t=r.call(this,e)||this).includedReturns=[],t.type="return",t}return e._inheritsLoose(t,r),t.prototype.clone=function(){return new y({field:this.field,includedReturns:o.clone(this.includedReturns)})},t}(d);return r.__decorate([u.property({type:[["firstOfMany","last","lastOfMany","single"]],json:{write:{enabled:!0,isRequired:!0}}})],f.prototype,"includedReturns",void 0),r.__decorate([i.enumeration({pointCloudReturnFilter:"return"})],f.prototype,"type",void 0),f=y=r.__decorate([c.subclass("esri.layers.pointCloudFilters.PointCloudReturnFilter")],f),f}));

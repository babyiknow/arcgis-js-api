/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["../chunks/_rollupPluginBabelHelpers","../chunks/tslib.es6","../core/has","../core/lang","../core/Logger","../core/accessorSupport/ensureType","../core/accessorSupport/decorators/property","../core/accessorSupport/decorators/enumeration","../core/accessorSupport/decorators/subclass","../core/urlUtils","../core/uuid","../portal/support/resourceExtension","./PointCloudRenderer"],(function(e,r,o,t,n,s,c,i,u,p,l,d,a){"use strict";var f;let y=f=function(r){function o(e){var o;return(o=r.call(this,e)||this).type="point-cloud-rgb",o.field=null,o}return e._inheritsLoose(o,r),o.prototype.clone=function(){return new f({...this.cloneProperties(),field:t.clone(this.field)})},o}(a);return r.__decorate([i.enumeration({pointCloudRGBRenderer:"point-cloud-rgb"})],y.prototype,"type",void 0),r.__decorate([c.property({type:String,json:{write:!0}})],y.prototype,"field",void 0),y=f=r.__decorate([u.subclass("esri.renderers.PointCloudRGBRenderer")],y),y}));

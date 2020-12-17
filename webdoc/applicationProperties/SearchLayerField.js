/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/has","../../core/Logger","../../core/accessorSupport/ensureType","../../core/accessorSupport/decorators/property","../../core/accessorSupport/decorators/enumeration","../../core/accessorSupport/decorators/subclass","../../core/urlUtils","../../core/uuid","../../portal/support/resourceExtension","../../core/JSONSupport","../../layers/support/fieldType"],(function(e,r,t,o,c,p,s,a,n,i,u,l,y){"use strict";var d;let h=d=function(r){function t(e){var t;return(t=r.call(this,e)||this).exactMatch=!1,t.name=null,t.type=null,t}return e._inheritsLoose(t,r),t.prototype.clone=function(){return new d({exactMatch:this.exactMatch,type:this.type,name:this.name})},t}(l.JSONSupport);return r.__decorate([p.property({type:Boolean,json:{write:!0}})],h.prototype,"exactMatch",void 0),r.__decorate([p.property({type:String,json:{write:!0}})],h.prototype,"name",void 0),r.__decorate([s.enumeration(y.kebabDict)],h.prototype,"type",void 0),h=d=r.__decorate([a.subclass("esri.webdoc.applicationProperties.SearchLayerField")],h),h}));

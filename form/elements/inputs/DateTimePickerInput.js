/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../core/has","../../../core/Logger","../../../core/accessorSupport/ensureType","../../../core/accessorSupport/decorators/property","../../../core/accessorSupport/decorators/reader","../../../core/accessorSupport/decorators/subclass","../../../core/accessorSupport/decorators/writer","../../../core/urlUtils","../../../core/uuid","../../../portal/support/resourceExtension","./Input"],(function(e,r,t,o,n,i,p,c,a,u,s,l,d){"use strict";var m;function y(e){return null!=e?new Date(e):null}function _(e){return e?e.getTime():null}let f=m=function(r){function t(e){var t;return(t=r.call(this,e)||this).includeTime=!1,t.max=null,t.min=null,t.type="datetime-picker",t}e._inheritsLoose(t,r);var o=t.prototype;return o.readMax=function(e,r){return y(r.max)},o.writeMax=function(e,r){r.max=_(e)},o.readMin=function(e,r){return y(r.min)},o.writeMin=function(e,r){r.min=_(e)},o.clone=function(){return new m({includeTime:this.includeTime,max:this.max,min:this.min,type:this.type})},t}(d);return r.__decorate([i.property({type:Boolean,json:{write:!0,default:!1}})],f.prototype,"includeTime",void 0),r.__decorate([i.property({type:Date,json:{type:Number,write:!0}})],f.prototype,"max",void 0),r.__decorate([p.reader("max")],f.prototype,"readMax",null),r.__decorate([a.writer("max")],f.prototype,"writeMax",null),r.__decorate([i.property({type:Date,json:{type:Number,write:!0}})],f.prototype,"min",void 0),r.__decorate([p.reader("min")],f.prototype,"readMin",null),r.__decorate([a.writer("min")],f.prototype,"writeMin",null),r.__decorate([i.property({type:["datetime-picker"],json:{read:!1,write:!0}})],f.prototype,"type",void 0),f=m=r.__decorate([c.subclass("esri.form.elements.inputs.DateTimePickerInput")],f),f}));

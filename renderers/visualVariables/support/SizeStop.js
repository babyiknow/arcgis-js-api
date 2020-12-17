/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../core/has","../../../core/Logger","../../../core/accessorSupport/ensureType","../../../core/accessorSupport/decorators/property","../../../core/accessorSupport/decorators/subclass","../../../core/urlUtils","../../../core/uuid","../../../portal/support/resourceExtension","../../../core/JSONSupport","../../../core/screenUtils"],(function(e,r,o,t,s,p,u,l,c,i,n,a){"use strict";var d;let y=d=function(r){function o(e){var o;return(o=r.call(this,e)||this).label=null,o.size=null,o.value=null,o}return e._inheritsLoose(o,r),o.prototype.clone=function(){return new d({label:this.label,size:this.size,value:this.value})},o}(n.JSONSupport);return r.__decorate([p.property({type:String,json:{write:!0}})],y.prototype,"label",void 0),r.__decorate([p.property({type:Number,cast:a.toPt,json:{write:!0}})],y.prototype,"size",void 0),r.__decorate([p.property({type:Number,json:{write:!0}})],y.prototype,"value",void 0),y=d=r.__decorate([u.subclass("esri.renderers.visualVariables.support.SizeStop")],y),y}));

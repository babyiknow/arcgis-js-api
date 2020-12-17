/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/has","../../core/Logger","../../core/accessorSupport/ensureType","../../core/accessorSupport/decorators/property","../../core/accessorSupport/decorators/subclass","../../core/urlUtils","../../core/uuid","../../portal/support/resourceExtension","../../core/JSONSupport"],(function(e,r,o,t,s,l,p,u,c,i,n){"use strict";var a;let y=a=function(r){function o(e){var o;return(o=r.call(this,e)||this).level=0,o.levelValue=null,o.resolution=0,o.scale=0,o}return e._inheritsLoose(o,r),o.prototype.clone=function(){return new a({level:this.level,levelValue:this.levelValue,resolution:this.resolution,scale:this.scale})},o}(n.JSONSupport);return r.__decorate([l.property({type:s.Integer,json:{write:!0}})],y.prototype,"level",void 0),r.__decorate([l.property({type:String,json:{write:!0}})],y.prototype,"levelValue",void 0),r.__decorate([l.property({type:Number,json:{write:!0}})],y.prototype,"resolution",void 0),r.__decorate([l.property({type:Number,json:{write:!0}})],y.prototype,"scale",void 0),y=a=r.__decorate([p.subclass("esri.layers.support.LOD")],y),y}));

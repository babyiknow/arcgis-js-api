/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/has","../../core/Logger","../../core/accessorSupport/ensureType","../../core/accessorSupport/decorators/property","../../core/accessorSupport/decorators/subclass","../../core/urlUtils","../../core/uuid","../../portal/support/resourceExtension","../../core/Accessor"],(function(e,r,o,t,s,n,c,p,u,i,a){"use strict";let d=function(r){function o(){return r.apply(this,arguments)||this}return e._inheritsLoose(o,r),e._createClass(o,[{key:"canZoomIn",get:function(){return!!this.get("view.ready")}},{key:"canZoomOut",get:function(){return!!this.get("view.ready")}}]),o}(a);return r.__decorate([n.property({dependsOn:["view.ready"],readOnly:!0})],d.prototype,"canZoomIn",null),r.__decorate([n.property({dependsOn:["view.ready"],readOnly:!0})],d.prototype,"canZoomOut",null),r.__decorate([n.property()],d.prototype,"view",void 0),d=r.__decorate([c.subclass("esri.widgets.Zoom.ZoomConditions3D")],d),d}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/has","../../core/Logger","../../core/accessorSupport/ensureType","../../core/accessorSupport/decorators/property","../../core/accessorSupport/decorators/subclass","../../core/urlUtils","../../core/uuid","../../portal/support/resourceExtension","../../core/JSONSupport","../../Graphic","./DirectionsFeatureSet"],(function(e,r,o,t,s,p,u,c,i,n,l,a,d){"use strict";let y=function(r){function o(e){var o;return(o=r.call(this,e)||this).directions=null,o.route=null,o.routeName=null,o.stops=null,o}return e._inheritsLoose(o,r),o}(l.JSONSupport);return r.__decorate([p.property({type:d,json:{write:!0}})],y.prototype,"directions",void 0),r.__decorate([p.property({type:a,json:{write:!0}})],y.prototype,"route",void 0),r.__decorate([p.property({type:String,json:{write:!0}})],y.prototype,"routeName",void 0),r.__decorate([p.property({type:[a],json:{write:!0}})],y.prototype,"stops",void 0),y=r.__decorate([u.subclass("esri.tasks.support.RouteResult")],y),y}));

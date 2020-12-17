/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["../chunks/_rollupPluginBabelHelpers","../chunks/tslib.es6","../core/has","../core/Logger","../core/accessorSupport/ensureType","../core/accessorSupport/decorators/property","../core/accessorSupport/decorators/enumeration","../core/accessorSupport/decorators/subclass","../core/urlUtils","../core/uuid","../portal/support/resourceExtension","./Symbol","../core/screenUtils"],(function(e,r,o,t,s,c,i,n,p,u,l,a,d){"use strict";let y=function(r){function o(e){var o;return(o=r.call(this,e)||this).type="simple-line",o.width=.75,o}return e._inheritsLoose(o,r),o.prototype.hash=function(){return`${this.type}.${this.width}`},o}(a);return r.__decorate([i.enumeration({esriSLS:"simple-line"},{readOnly:!0})],y.prototype,"type",void 0),r.__decorate([c.property({type:Number,cast:d.toPt,json:{write:!0}})],y.prototype,"width",void 0),y=r.__decorate([n.subclass("esri.symbols.LineSymbol")],y),y}));

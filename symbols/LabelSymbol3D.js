/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["../chunks/_rollupPluginBabelHelpers","../chunks/tslib.es6","../core/has","../core/lang","../core/Logger","../core/accessorSupport/ensureType","../core/accessorSupport/decorators/property","../core/accessorSupport/decorators/enumeration","../core/accessorSupport/decorators/subclass","../core/urlUtils","../core/uuid","../portal/support/resourceExtension","../core/Collection","./TextSymbol3DLayer","./Symbol3D","./callouts/calloutUtils","./support/Symbol3DVerticalOffset"],(function(e,t,o,r,l,s,c,a,i,n,u,p,y,b,f,d,h){"use strict";var m;const _=y.ofType({base:null,key:"type",typeMap:{text:b}});let v=m=function(t){function o(e){var o;return(o=t.call(this,e)||this).verticalOffset=null,o.callout=null,o.styleOrigin=null,o.symbolLayers=new _,o.type="label-3d",o}e._inheritsLoose(o,t);var l=o.prototype;return l.supportsCallout=function(){return!0},l.hasVisibleCallout=function(){return d.hasVisibleCallout(this)},l.hasVisibleVerticalOffset=function(){return d.hasVisibleVerticalOffset(this)},l.clone=function(){return new m({styleOrigin:r.clone(this.styleOrigin),symbolLayers:r.clone(this.symbolLayers),thumbnail:r.clone(this.thumbnail),callout:r.clone(this.callout),verticalOffset:r.clone(this.verticalOffset)})},o.fromTextSymbol=function(e){return new m({symbolLayers:[b.fromTextSymbol(e)]})},o}(f);return t.__decorate([c.property({type:h.default,json:{write:!0}})],v.prototype,"verticalOffset",void 0),t.__decorate([c.property(d.calloutProperty)],v.prototype,"callout",void 0),t.__decorate([c.property({json:{read:!1,write:!1}})],v.prototype,"styleOrigin",void 0),t.__decorate([c.property({type:_})],v.prototype,"symbolLayers",void 0),t.__decorate([a.enumeration({LabelSymbol3D:"label-3d"},{readOnly:!0})],v.prototype,"type",void 0),v=m=t.__decorate([i.subclass("esri.symbols.LabelSymbol3D")],v),v}));

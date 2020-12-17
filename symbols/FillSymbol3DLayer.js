/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["../chunks/_rollupPluginBabelHelpers","../chunks/tslib.es6","../core/has","../core/maybe","../core/Logger","../core/accessorSupport/ensureType","../core/accessorSupport/decorators/property","../core/accessorSupport/decorators/enumeration","../core/accessorSupport/decorators/subclass","../core/urlUtils","../core/uuid","../portal/support/resourceExtension","./Symbol3DLayer","./edges/utils","./patterns/StylePattern3D","./patterns/utils","./support/colors","./support/Symbol3DFillMaterial","./support/Symbol3DOutline"],(function(e,t,o,r,l,s,n,i,a,p,u,c,d,y,h,m,S,b,_){"use strict";var f;let w=f=function(t){function o(e){var o;return(o=t.call(this,e)||this).type="fill",o.material=null,o.pattern=null,o.castShadows=!0,o.outline=null,o.edges=null,o}return e._inheritsLoose(o,t),o.prototype.clone=function(){return new f({edges:r.isSome(this.edges)?this.edges.clone():null,enabled:this.enabled,material:r.isSome(this.material)?this.material.clone():null,pattern:r.isSome(this.pattern)?this.pattern.clone():null,castShadows:this.castShadows,outline:r.isSome(this.outline)?this.outline.clone():null})},o.fromSimpleFillSymbol=function(e){return new f({material:{color:(e.color||S.transparentWhite).clone()},pattern:e.style&&"solid"!==e.style?new h({style:e.style}):null,outline:e.outline?new _.default({size:e.outline.width||0,color:(e.outline.color||S.white).clone()}):null})},o}(d);return t.__decorate([i.enumeration({Fill:"fill"},{readOnly:!0})],w.prototype,"type",void 0),t.__decorate([n.property({type:b.default,json:{write:!0}})],w.prototype,"material",void 0),t.__decorate([n.property(m.symbol3dPatternProperty)],w.prototype,"pattern",void 0),t.__decorate([n.property({type:Boolean,nonNullable:!0,json:{write:!0,default:!0}})],w.prototype,"castShadows",void 0),t.__decorate([n.property({type:_.default,json:{write:!0}})],w.prototype,"outline",void 0),t.__decorate([n.property(y.symbol3dEdgesProperty)],w.prototype,"edges",void 0),w=f=t.__decorate([a.subclass("esri.symbols.FillSymbol3DLayer")],w),w}));

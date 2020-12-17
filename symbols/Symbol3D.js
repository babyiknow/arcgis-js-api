/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["../chunks/_rollupPluginBabelHelpers","../chunks/tslib.es6","../core/has","../core/Logger","../core/accessorSupport/decorators/property","../core/accessorSupport/decorators/cast","../core/accessorSupport/decorators/reader","../core/Warning","../core/accessorSupport/decorators/subclass","../core/accessorSupport/decorators/writer","../core/urlUtils","../core/uuid","../portal/support/resourceExtension","../chunks/persistableUrlUtils","../core/Collection","./Symbol","./Symbol3DLayer","./ExtrudeSymbol3DLayer","./FillSymbol3DLayer","./IconSymbol3DLayer","../core/collectionUtils","../portal/Portal","./LineSymbol3DLayer","./ObjectSymbol3DLayer","./PathSymbol3DLayer","./TextSymbol3DLayer","./WaterSymbol3DLayer","./support/StyleOrigin","./support/Thumbnail"],(function(e,r,t,o,s,l,a,n,y,i,c,p,m,u,b,d,g,_,S,f,h,L,O,U,D,w,N,v,x){"use strict";const k={icon:f,object:U,line:O,path:D,fill:S,extrude:_,text:w,water:N},j=b.ofType({base:g,key:"type",typeMap:k,errorContext:"symbol-layer"}),C=o.getLogger("esri.symbols.Symbol3D");let A=function(r){function t(e){var t;(t=r.call(this,e)||this).styleOrigin=null,t.thumbnail=null,t.type=null;const o=t.__accessor__&&t.__accessor__.metadatas&&t.__accessor__.metadatas.symbolLayers,s=o&&o.type||b;return t._set("symbolLayers",new s),t}e._inheritsLoose(t,r);var o=t.prototype;return o.readStyleOrigin=function(e,r,t){if(e.styleUrl&&e.name){const r=u.fromJSON(e.styleUrl,t);return new v({styleUrl:r,name:e.name})}if(e.styleName&&e.name)return new v({portal:t&&t.portal||L.getDefault(),styleName:e.styleName,name:e.name});t&&t.messages&&t.messages.push(new n("symbol3d:incomplete-style-origin","Style origin requires either a 'styleUrl' or 'styleName' and a 'name' property",{context:t,definition:e}))},o.writeStyleOrigin=function(e,r,t,o){if(e.styleUrl&&e.name){let t=u.toJSON(e.styleUrl,o);c.isAbsolute(t)&&(t=c.normalize(t)),r.styleOrigin={styleUrl:t,name:e.name}}else e.styleName&&e.name&&(e.portal&&o&&o.portal&&!c.hasSamePortal(e.portal.restUrl,o.portal.restUrl)?o&&o.messages&&o.messages.push(new n("symbol:cross-portal","The symbol style origin cannot be persisted because it refers to an item on a different portal than the one being saved to.",{symbol:this})):r.styleOrigin={styleName:e.styleName,name:e.name})},o.normalizeCtorArgs=function(e){return e instanceof g||e&&k[e.type]?{symbolLayers:[e]}:Array.isArray(e)?{symbolLayers:e}:e},e._createClass(t,[{key:"color",get:function(){return null},set:function(e){C.error("Symbol3D does not support colors on the symbol level. Colors may be set on individual symbol layer materials instead.")}},{key:"symbolLayers",set:function(e){h.referenceSetter(e,this._get("symbolLayers"))}}]),t}(d);return r.__decorate([s.property({json:{read:!1,write:!1}})],A.prototype,"color",null),r.__decorate([s.property({type:j,nonNullable:!0,json:{write:!0}}),l.cast(h.castForReferenceSetter)],A.prototype,"symbolLayers",null),r.__decorate([s.property({type:v})],A.prototype,"styleOrigin",void 0),r.__decorate([a.reader("styleOrigin")],A.prototype,"readStyleOrigin",null),r.__decorate([i.writer("styleOrigin",{"styleOrigin.styleUrl":{type:String},"styleOrigin.styleName":{type:String},"styleOrigin.name":{type:String}})],A.prototype,"writeStyleOrigin",null),r.__decorate([s.property({type:x.default,json:{read:!1}})],A.prototype,"thumbnail",void 0),r.__decorate([s.property({type:["point-3d","line-3d","polygon-3d","mesh-3d","label-3d"],readOnly:!0})],A.prototype,"type",void 0),A=r.__decorate([y.subclass("esri.symbols.Symbol3D")],A),A}));

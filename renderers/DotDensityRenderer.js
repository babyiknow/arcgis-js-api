/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["../chunks/_rollupPluginBabelHelpers","../chunks/tslib.es6","../core/has","../core/lang","../core/Logger","../core/accessorSupport/ensureType","../core/accessorSupport/decorators/property","../core/accessorSupport/decorators/aliasOf","../core/accessorSupport/decorators/enumeration","../core/accessorSupport/decorators/subclass","../core/urlUtils","../core/uuid","../portal/support/resourceExtension","../layers/support/fieldUtils","../Color","../symbols/SimpleLineSymbol","../symbols/SimpleFillSymbol","./Renderer","./mixins/VisualVariablesMixin","./support/AttributeColorInfo","./support/DotDensityLegendOptions"],(function(e,t,o,r,n,i,s,l,a,u,p,c,d,y,h,b,f,g,S,_,m){"use strict";var v;let V=v=function(t){function o(e){var o;return(o=t.call(this,e)||this).attributes=null,o.backgroundColor=new h([0,0,0,0]),o.blendDots=!0,o.dotBlendingEnabled=!0,o.dotShape="square",o.dotSize=1,o.legendOptions=null,o.outline=new b,o.dotValue=null,o.referenceDotValue=null,o.referenceScale=null,o.seed=1,o.type="dot-density",o}e._inheritsLoose(o,t);var n=o.prototype;return n.calculateDotValue=function(e){if(null==this.referenceScale)return this.dotValue;const t=e/this.referenceScale*this.dotValue;return t<1?1:t},n.getSymbol=function(){return new f({outline:this.outline})},n.getSymbolAsync=async function(){return this.getSymbol()},n.getSymbols=function(){return[this.getSymbol()]},n.getAttributeHash=function(){return this.attributes&&this.attributes.reduce(((e,t)=>e+t.getAttributeHash()),"")},n.getMeshHash=function(){return JSON.stringify(this.outline)},n.clone=function(){return new v({attributes:r.clone(this.attributes),backgroundColor:r.clone(this.backgroundColor),dotBlendingEnabled:r.clone(this.dotBlendingEnabled),dotShape:r.clone(this.dotShape),dotSize:r.clone(this.dotSize),dotValue:r.clone(this.dotValue),legendOptions:r.clone(this.legendOptions),outline:r.clone(this.outline),referenceScale:r.clone(this.referenceScale),visualVariables:r.clone(this.visualVariables),authoringInfo:this.authoringInfo&&this.authoringInfo.clone()})},n.getControllerHash=function(){return`${this.attributes.map((e=>e.field||e.valueExpression||""))}-${this.outline&&JSON.stringify(this.outline.toJSON())||""}`},n.collectRequiredFields=async function(e,t){await this.collectVVRequiredFields(e,t);for(const o of this.attributes)o.valueExpression&&await y.collectArcadeFieldNames(e,t,o.valueExpression),o.field&&e.add(o.field)},o}(S.VisualVariablesMixin(g));return t.__decorate([s.property({type:[_],json:{write:!0}})],V.prototype,"attributes",void 0),t.__decorate([s.property({type:h,json:{write:!0}})],V.prototype,"backgroundColor",void 0),t.__decorate([s.property({type:Boolean}),l.aliasOf("dotBlendingEnabled")],V.prototype,"blendDots",void 0),t.__decorate([s.property({type:Boolean,json:{write:!0}})],V.prototype,"dotBlendingEnabled",void 0),t.__decorate([s.property({type:String,json:{write:!1}})],V.prototype,"dotShape",void 0),t.__decorate([s.property({type:Number,json:{write:!1}})],V.prototype,"dotSize",void 0),t.__decorate([s.property({type:m,json:{write:!0}})],V.prototype,"legendOptions",void 0),t.__decorate([s.property({type:b,json:{default:null,write:!0}})],V.prototype,"outline",void 0),t.__decorate([s.property({type:Number,json:{write:!0}})],V.prototype,"dotValue",void 0),t.__decorate([s.property({type:Number}),l.aliasOf("dotValue")],V.prototype,"referenceDotValue",void 0),t.__decorate([s.property({type:Number,json:{write:!0}})],V.prototype,"referenceScale",void 0),t.__decorate([s.property({type:Number,json:{write:!0}})],V.prototype,"seed",void 0),t.__decorate([a.enumeration({dotDensity:"dot-density"})],V.prototype,"type",void 0),V=v=t.__decorate([u.subclass("esri.renderers.DotDensityRenderer")],V),V}));

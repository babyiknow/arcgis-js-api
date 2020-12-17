/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/has","../../core/Logger","../../core/accessorSupport/ensureType","../../core/accessorSupport/decorators/property","../../core/accessorSupport/decorators/subclass","../../core/urlUtils","../../core/uuid","../../portal/support/resourceExtension","./VisualVariable","./support/OpacityStop"],(function(e,t,r,o,s,i,n,p,a,l,c,u){"use strict";var y;let d=y=function(t){function r(e){var r;return(r=t.call(this,e)||this).type="opacity",r.normalizationField=null,r}e._inheritsLoose(r,t);var o=r.prototype;return o.clone=function(){return new y({field:this.field,normalizationField:this.normalizationField,valueExpression:this.valueExpression,valueExpressionTitle:this.valueExpressionTitle,stops:this.stops&&this.stops.map((e=>e.clone())),legendOptions:this.legendOptions&&this.legendOptions.clone()})},o.getAttributeHash=function(){return`${t.prototype.getAttributeHash.call(this)}-${this.normalizationField}`},o._interpolateData=function(){return this.stops&&this.stops.map((e=>e.value||0))},e._createClass(r,[{key:"cache",get:function(){return{ipData:this._interpolateData(),hasExpression:!!this.valueExpression,compiledFunc:null}}},{key:"stops",set:function(e){e&&Array.isArray(e)&&(e=e.filter((e=>!!e))).sort(((e,t)=>e.value-t.value)),this._set("stops",e)}}]),r}(c);return t.__decorate([i.property({readOnly:!0,dependsOn:["valueExpression","stops"]})],d.prototype,"cache",null),t.__decorate([i.property({type:["opacity"],json:{type:["transparencyInfo"]}})],d.prototype,"type",void 0),t.__decorate([i.property({type:String,json:{write:!0}})],d.prototype,"normalizationField",void 0),t.__decorate([i.property({type:[u],json:{write:!0}})],d.prototype,"stops",null),d=y=t.__decorate([n.subclass("esri.renderers.visualVariables.OpacityVariable")],d),d}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/has","../../core/Logger","../../core/accessorSupport/ensureType","../../core/accessorSupport/decorators/property","../../core/accessorSupport/decorators/subclass","../../core/urlUtils","../../core/uuid","../../portal/support/resourceExtension","../../core/JSONSupport","../../layers/support/fieldUtils"],(function(e,r,t,o,s,p,i,c,n,u,l,a){"use strict";var d;let y=d=function(r){function t(){return r.apply(this,arguments)||this}e._inheritsLoose(t,r);var o=t.prototype;return o.collectRequiredFields=async function(e,r){return a.collectArcadeFieldNames(e,r,this.expression)},o.clone=function(){return new d({expression:this.expression,title:this.title})},t}(l.JSONSupport);return r.__decorate([p.property({type:String,json:{write:!0}})],y.prototype,"expression",void 0),r.__decorate([p.property({type:String,json:{write:!0}})],y.prototype,"title",void 0),y=d=r.__decorate([i.subclass("esri.layers.support.FeatureExpressionInfo")],y),y}));

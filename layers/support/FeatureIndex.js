/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/has","../../core/Logger","../../core/accessorSupport/ensureType","../../core/accessorSupport/decorators/property","../../core/accessorSupport/decorators/subclass","../../core/urlUtils","../../core/uuid","../../portal/support/resourceExtension","../../core/JSONSupport"],(function(e,r,t,o,n,s,c,p,u,i,d,a){"use strict";var l;e.FeatureIndex=l=function(e){function t(r){return e.call(this,r)||this}return r._inheritsLoose(t,e),t.prototype.clone=function(){const{name:e,fields:r,isAscending:t,isUnique:o,description:n}=this;return new l({name:e,fields:r,isAscending:t,isUnique:o,description:n})},t}(a.JSONSupport),t.__decorate([c.property({constructOnly:!0})],e.FeatureIndex.prototype,"name",void 0),t.__decorate([c.property({constructOnly:!0})],e.FeatureIndex.prototype,"fields",void 0),t.__decorate([c.property({constructOnly:!0})],e.FeatureIndex.prototype,"isAscending",void 0),t.__decorate([c.property({constructOnly:!0})],e.FeatureIndex.prototype,"isUnique",void 0),t.__decorate([c.property({constructOnly:!0})],e.FeatureIndex.prototype,"description",void 0),e.FeatureIndex=l=t.__decorate([p.subclass("esri.layers.support.FeatureIndex")],e.FeatureIndex);var y=e.FeatureIndex;e.default=y,Object.defineProperty(e,"__esModule",{value:!0})}));

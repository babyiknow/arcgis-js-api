/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/has","../../core/Logger","../../core/accessorSupport/ensureType","../../core/accessorSupport/decorators/property","../../core/accessorSupport/decorators/subclass","../../core/urlUtils","../../core/uuid","../../portal/support/resourceExtension","../../core/JSONSupport","../Lighting"],(function(e,r,o,t,n,i,s,c,p,u,l,a,d){"use strict";var g;e.SlideEnvironment=g=function(e){function o(){var r;return(r=e.apply(this,arguments)||this).lighting=new d,r}return r._inheritsLoose(o,e),o.prototype.clone=function(){return new g({lighting:d.prototype.clone.call(this.lighting)})},o}(a.JSONSupport),o.__decorate([s.property({type:d,json:{write:!0}})],e.SlideEnvironment.prototype,"lighting",void 0),e.SlideEnvironment=g=o.__decorate([c.subclass("esri.webscene.Environment")],e.SlideEnvironment),Object.defineProperty(e,"__esModule",{value:!0})}));

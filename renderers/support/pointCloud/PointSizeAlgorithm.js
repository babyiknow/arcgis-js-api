/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../core/has","../../../core/Logger","../../../core/accessorSupport/ensureType","../../../core/accessorSupport/decorators/property","../../../core/jsonMap","../../../core/accessorSupport/decorators/subclass","../../../core/urlUtils","../../../core/uuid","../../../portal/support/resourceExtension","../../../core/JSONSupport"],(function(e,o,r,t,i,s,p,n,l,u,c,a,d){"use strict";const S=new n.JSONMap({pointCloudFixedSizeAlgorithm:"fixed-size",pointCloudSplatAlgorithm:"splat"});e.PointSizeAlgorithm=function(e){function r(){return e.apply(this,arguments)||this}return o._inheritsLoose(r,e),r}(d.JSONSupport),r.__decorate([p.property({type:S.apiValues,readOnly:!0,nonNullable:!0,json:{type:S.jsonValues,read:!1,write:S.write}})],e.PointSizeAlgorithm.prototype,"type",void 0),e.PointSizeAlgorithm=r.__decorate([l.subclass("esri.renderers.support.pointCloud.PointSizeAlgorithm")],e.PointSizeAlgorithm);var h=e.PointSizeAlgorithm;e.default=h,e.typeKebabDictionary=S,Object.defineProperty(e,"__esModule",{value:!0})}));

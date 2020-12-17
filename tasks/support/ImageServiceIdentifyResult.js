/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/has","../../core/Logger","../../core/accessorSupport/ensureType","../../core/accessorSupport/decorators/property","../../core/deprecate","../../core/accessorSupport/decorators/subclass","../../core/urlUtils","../../core/uuid","../../portal/support/resourceExtension","../../core/JSONSupport","../../geometry/Point","./FeatureSet"],(function(e,t,o,r,s,p,i,c,a,l,u,n,d,y){"use strict";const _=r.getLogger("esri.tasks.support.ImageServiceIdentifyResult");i.deprecatedModule(_,"esri/tasks/support/ImageServiceIdentifyResult",{replacement:"esri/tasks/support/ImageIdentifyResult"});let g=function(t){function o(){var e;return(e=t.apply(this,arguments)||this).catalogItemVisibilities=null,e.catalogItems=null,e.location=null,e.name=null,e.objectId=null,e.processedValues=null,e.properties=null,e.value=null,e}return e._inheritsLoose(o,t),o}(n.JSONSupport);return t.__decorate([p.property({json:{write:!0}})],g.prototype,"catalogItemVisibilities",void 0),t.__decorate([p.property({type:y,json:{write:!0}})],g.prototype,"catalogItems",void 0),t.__decorate([p.property({type:d,json:{write:!0}})],g.prototype,"location",void 0),t.__decorate([p.property({json:{write:!0}})],g.prototype,"name",void 0),t.__decorate([p.property({json:{write:!0}})],g.prototype,"objectId",void 0),t.__decorate([p.property({json:{write:!0}})],g.prototype,"processedValues",void 0),t.__decorate([p.property({json:{write:!0}})],g.prototype,"properties",void 0),t.__decorate([p.property({json:{write:!0}})],g.prototype,"value",void 0),g=t.__decorate([c.subclass("esri.tasks.support.ImageServiceIdentifyResult")],g),g}));

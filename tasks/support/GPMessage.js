/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/has","../../core/Logger","../../core/accessorSupport/ensureType","../../core/accessorSupport/decorators/property","../../core/jsonMap","../../core/accessorSupport/decorators/subclass","../../core/urlUtils","../../core/uuid","../../portal/support/resourceExtension","../../core/JSONSupport"],(function(e,r,s,o,t,p,i,c,n,a,u,y){"use strict";const l=new i.JSONMap({esriJobMessageTypeInformative:"informative",esriJobMessageTypeProcessDefinition:"process-definition",esriJobMessageTypeProcessStart:"process-start",esriJobMessageTypeProcessStop:"process-stop",esriJobMessageTypeWarning:"warning",esriJobMessageTypeError:"error",esriJobMessageTypeEmpty:"empty",esriJobMessageTypeAbort:"abort"});let g=function(r){function s(e){var s;return(s=r.call(this,e)||this).description=null,s.type=null,s}return e._inheritsLoose(s,r),s}(y.JSONSupport);return r.__decorate([p.property({type:String,json:{write:!0}})],g.prototype,"description",void 0),r.__decorate([p.property({type:String,json:{read:l.read,write:l.write}})],g.prototype,"type",void 0),g=r.__decorate([c.subclass("esri.tasks.support.GPMessage")],g),g}));

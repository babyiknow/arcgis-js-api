/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/has","../../core/lang","../../core/Logger","../../core/accessorSupport/ensureType","../../core/accessorSupport/decorators/property","../../core/accessorSupport/decorators/subclass","../../core/urlUtils","../../core/uuid","../../portal/support/resourceExtension","../../core/JSONSupport","./BuildingFilterMode","./BuildingFilterModeSolid","./BuildingFilterModeWireFrame","./BuildingFilterModeXRay"],(function(e,r,t,o,i,s,l,n,p,u,c,a,d,y,f,S){"use strict";var g;const h={nonNullable:!0,types:{key:"type",base:d,typeMap:{solid:y,"wire-frame":f,"x-ray":S}},json:{read:e=>{switch(e&&e.type){case"solid":return y.fromJSON(e);case"wireFrame":return f.fromJSON(e);case"x-ray":return S.fromJSON(e);default:return}},write:{enabled:!0,isRequired:!0}}};let _=g=function(r){function t(){var e;return(e=r.apply(this,arguments)||this).filterExpression=null,e.filterMode=new y,e.title="",e}return e._inheritsLoose(t,r),t.prototype.clone=function(){return new g({filterExpression:this.filterExpression,filterMode:o.clone(this.filterMode),title:this.title})},t}(a.JSONSupport);return r.__decorate([l.property({type:String,json:{write:{enabled:!0,isRequired:!0}}})],_.prototype,"filterExpression",void 0),r.__decorate([l.property(h)],_.prototype,"filterMode",void 0),r.__decorate([l.property({type:String,json:{write:{enabled:!0,isRequired:!0}}})],_.prototype,"title",void 0),_=g=r.__decorate([n.subclass("esri.layers.support.BuildingFilterBlock")],_),_}));

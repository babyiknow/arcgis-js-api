/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/accessorSupport/decorators/property","../../core/accessorSupport/decorators/subclass","../../core/JSONSupport"],(function(e,t,r,o,i,n){"use strict";const s=e=>{let n=function(e){function r(){var t;return(t=e.apply(this,arguments)||this).description=null,t.label=null,t.visibilityExpression=null,t}return t._inheritsLoose(r,e),r}(e);return r.__decorate([o.property({type:String,json:{write:!0}})],n.prototype,"description",void 0),r.__decorate([o.property({type:String,json:{write:!0}})],n.prototype,"label",void 0),r.__decorate([o.property({type:String,json:{write:!0}})],n.prototype,"visibilityExpression",void 0),n=r.__decorate([i.subclass("esri.form.elements.ElementMixin")],n),n};e.Element=function(e){function r(t){var r;return(r=e.call(this,t)||this).type=null,r}return t._inheritsLoose(r,e),r}(s(n.JSONSupport)),r.__decorate([o.property()],e.Element.prototype,"type",void 0),e.Element=r.__decorate([i.subclass("esri.form.elements.Element")],e.Element),e.ElementMixin=s,Object.defineProperty(e,"__esModule",{value:!0})}));

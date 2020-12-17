/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/has","../../core/lang","../../core/Logger","../../core/accessorSupport/ensureType","../../core/accessorSupport/decorators/property","../../core/accessorSupport/decorators/enumeration","../../core/accessorSupport/decorators/subclass","../../core/urlUtils","../../core/uuid","../../portal/support/resourceExtension","./CodedValue","./Domain"],(function(e,o,r,t,s,c,u,n,a,l,d,i,p,h){"use strict";var y;let m=y=function(o){function r(e){var r;return(r=o.call(this,e)||this).codedValues=null,r.type="coded-value",r}e._inheritsLoose(r,o);var s=r.prototype;return s.getName=function(e){let o=null;if(this.codedValues){const r=String(e);this.codedValues.some((e=>(String(e.code)===r&&(o=e.name),!!o)))}return o},s.clone=function(){return new y({codedValues:t.clone(this.codedValues),name:this.name})},r}(h);return o.__decorate([u.property({type:[p.default],json:{write:!0}})],m.prototype,"codedValues",void 0),o.__decorate([n.enumeration({codedValue:"coded-value"})],m.prototype,"type",void 0),m=y=o.__decorate([a.subclass("esri.layers.support.CodedValueDomain")],m),m}));

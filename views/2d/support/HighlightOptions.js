/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../core/has","../../../core/Logger","../../../core/accessorSupport/ensureType","../../../core/accessorSupport/decorators/property","../../../core/accessorSupport/decorators/subclass","../../../core/urlUtils","../../../core/uuid","../../../portal/support/resourceExtension","../../../core/Accessor","../../../Color"],(function(o,r,e,t,p,c,s,i,l,a,n,u){"use strict";let y=0,d=function(r){function e(){var o;return(o=r.apply(this,arguments)||this).color=new u([0,255,255]),o.haloOpacity=1,o.fillOpacity=.25,o}return o._inheritsLoose(e,r),o._createClass(e,[{key:"version",get:function(){return y++}}]),e}(n);return r.__decorate([c.property({readOnly:!0,dependsOn:["color","haloColor","haloOpacity","fillOpacity"]})],d.prototype,"version",null),r.__decorate([c.property({type:u})],d.prototype,"color",void 0),r.__decorate([c.property({type:u})],d.prototype,"haloColor",void 0),r.__decorate([c.property()],d.prototype,"haloOpacity",void 0),r.__decorate([c.property()],d.prototype,"fillOpacity",void 0),d=r.__decorate([s.subclass("esri.views.2d.support.HighlightOptions")],d),d}));

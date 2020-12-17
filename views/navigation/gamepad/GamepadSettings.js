/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../core/has","../../../core/Logger","../../../core/accessorSupport/ensureType","../../../core/accessorSupport/decorators/property","../../../core/accessorSupport/decorators/subclass","../../../core/urlUtils","../../../core/uuid","../../../portal/support/resourceExtension","../../../core/Accessor","../../input/gamepad/GamepadInputDevice"],(function(e,o,r,t,p,c,a,n,i,s,l,u){"use strict";let d=function(o){function r(e){var r;return(r=o.call(this,e)||this).enabled=!0,r.device=null,r.mode="pan",r.tiltDirection="forward-down",r.velocityFactor=1,r}return e._inheritsLoose(r,o),r}(l);return o.__decorate([c.property({type:Boolean,nonNullable:!0})],d.prototype,"enabled",void 0),o.__decorate([c.property({type:u})],d.prototype,"device",void 0),o.__decorate([c.property({type:["pan","zoom"],nonNullable:!0})],d.prototype,"mode",void 0),o.__decorate([c.property({type:["forward-down","forward-up"],nonNullable:!0})],d.prototype,"tiltDirection",void 0),o.__decorate([c.property({type:Number,nonNullable:!0})],d.prototype,"velocityFactor",void 0),d=o.__decorate([a.subclass("esri.views.navigation.gamepad.GamepadSettings")],d),d}));

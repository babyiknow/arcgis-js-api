/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/has","../../core/Logger","../../core/accessorSupport/ensureType","../../core/accessorSupport/decorators/property","../../core/accessorSupport/decorators/subclass","../../core/urlUtils","../../core/uuid","../../portal/support/resourceExtension","../../core/Accessor"],(function(e,t,r,n,s,o,l,i,c,u,a){"use strict";const d="esri.widgets.Fullscreen.FullscreenViewModel",h=n.getLogger(d);let m=function(t){function r(r){var n;return(n=t.call(this,r)||this)._vendorInfo=null,n._fullscreenStyle="width: 100%; height: 100%;",n.view=null,n._errorHandler=n._errorHandler.bind(e._assertThisInitialized(n)),n._stateHandler=n._stateHandler.bind(e._assertThisInitialized(n)),n}e._inheritsLoose(r,t);var n=r.prototype;return n.destroy=function(){this._removeFullscreenListeners(),this.view=null},n.enter=function(){this._enterFullscreen()},n.exit=function(){this._exitFullscreen()},n.toggle=function(){this._isActive()?this._exitFullscreen():this._enterFullscreen()},n._isSupported=function(){this._removeFullscreenListeners();const e=this._getVendorInfo(this.element);return this._addFullscreenListeners(e),this._vendorInfo=e,!!e},n._isActive=function(){return!!this._vendorInfo&&!!document[this._vendorInfo.propertyName]},n._stateHandler=function(){this.notifyChange("state"),"active"===this.state?this._addStyle():this._removeStyle()},n._errorHandler=function(e){h.error("fullscreen request failed",e)},n._getVendorInfo=function(e){if(e)return e.requestFullscreen?{enterName:"requestFullscreen",exitName:"exitFullscreen",errorEventName:"fullscreenerror",changeEventName:"fullscreenchange",propertyName:"fullscreen"}:e.webkitRequestFullScreen?{enterName:"webkitRequestFullscreen",exitName:"webkitCancelFullScreen",errorEventName:"webkitfullscreenerror",changeEventName:"webkitfullscreenchange",propertyName:"webkitIsFullScreen"}:e.mozRequestFullScreen?{enterName:"mozRequestFullScreen",exitName:"mozCancelFullScreen",errorEventName:"mozfullscreenerror",changeEventName:"mozfullscreenchange",propertyName:"mozFullScreen"}:e.msRequestFullscreen?{enterName:"msRequestFullscreen",exitName:"msExitFullscreen",errorEventName:"MSFullscreenError",changeEventName:"MSFullscreenChange",propertyName:"msFullscreenElement"}:void 0},n._enterFullscreen=function(){if("feature-unsupported"===this.state)return void h.warn("The fullscreen API is not supported in this browser.");const{element:e}=this;e&&(e[this._vendorInfo.enterName].call(e),this.notifyChange("state"))},n._addStyle=function(){const{element:e}=this;e&&e.setAttribute("style",this._fullscreenStyle)},n._removeStyle=function(){const{element:e}=this;e&&e.removeAttribute("style")},n._exitFullscreen=function(){if("feature-unsupported"===this.state)return;const{element:e}=this;e&&(document[this._vendorInfo.exitName].call(document),this.notifyChange("state"))},n._addFullscreenListeners=function(e){e&&(document.addEventListener(e.changeEventName,this._stateHandler),document.addEventListener(e.errorEventName,this._errorHandler))},n._removeFullscreenListeners=function(){const{_vendorInfo:e}=this;this._vendorInfo&&(document.removeEventListener(e.changeEventName,this._stateHandler),document.removeEventListener(e.errorEventName,this._errorHandler))},e._createClass(r,[{key:"element",get:function(){return this.get("view.container")},set:function(e){void 0!==e?this._override("element",e):this._clearOverride("element")}},{key:"state",get:function(){return this.element?this._isSupported()?this._isActive()?"active":"ready":"feature-unsupported":"disabled"}}]),r}(a);return t.__decorate([o.property({dependsOn:["view.container"]})],m.prototype,"element",null),t.__decorate([o.property({dependsOn:["element"],readOnly:!0})],m.prototype,"state",null),t.__decorate([o.property()],m.prototype,"view",void 0),t.__decorate([o.property()],m.prototype,"enter",null),t.__decorate([o.property()],m.prototype,"exit",null),t.__decorate([o.property()],m.prototype,"toggle",null),m=t.__decorate([l.subclass(d)],m),m}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/has","../../core/Logger","../../core/accessorSupport/ensureType","../../core/accessorSupport/decorators/property","../../core/accessorSupport/decorators/subclass","../../core/urlUtils","../../core/uuid","../../portal/support/resourceExtension","../support/GeolocationPositioning"],(function(t,i,r,o,e,s,n,a,c,h,p){"use strict";let u=function(i){function r(t){var r;return(r=i.call(this,t)||this)._watchId=null,r._trackStartingTimeoutId=null,r._settingPosition=null,r}t._inheritsLoose(r,i);var o=r.prototype;return o.destroy=function(){this._stopTracking()},o.start=function(){"disabled"!==this.state&&"feature-unsupported"!==this.state&&this._startTracking()},o.stop=function(){"disabled"!==this.state&&"feature-unsupported"!==this.state&&this._stopTracking()},o._stopWatchingPosition=function(){null!==this._watchId&&(navigator.geolocation.clearWatch(this._watchId),this._watchId=null)},o._stopTracking=function(){this._clearWaitingTimer(),this._stopWatchingPosition(),this._clear()},o._startTracking=function(){this._stopTracking();const t=navigator.geolocation.watchPosition((i=>{this._watchId=t,this._settingPosition=this._setPosition(i).then((t=>{this._clearWaitingTimer();const{view:i,graphic:r}=this;if(i&&i.graphics.remove(r),r){const t=r.clone();this.graphic=t,i&&i.graphics.push(t)}this.emit("track",{position:t})})).catch((t=>{throw this._emitError(t),this._clearWaitingTimer(),t}))}),this._handleWatchPositionError.bind(this),this.geolocationOptions);this._trackStartingTimeoutId=setTimeout((()=>{this._trackStartingTimeoutId=null}),15e3)},o._handleWatchPositionError=function(t){this._emitError(t),this._stopTracking()},o._clearWaitingTimer=function(){clearTimeout(this._trackStartingTimeoutId),this._trackStartingTimeoutId=null,this._settingPosition=null},o._emitError=function(t){this.emit("track-error",{error:t})},t._createClass(r,[{key:"state",get:function(){return this._geolocationUsable?this.view&&!this.view.ready?"disabled":this._settingPosition||null!==this._trackStartingTimeoutId?"waiting":this.tracking?"tracking":"ready":"feature-unsupported"}},{key:"tracking",get:function(){return null!==this._watchId}}]),r}(p);return i.__decorate([s.property()],u.prototype,"_watchId",void 0),i.__decorate([s.property()],u.prototype,"_trackStartingTimeoutId",void 0),i.__decorate([s.property()],u.prototype,"_settingPosition",void 0),i.__decorate([s.property({dependsOn:["view.ready","tracking","_geolocationUsable","_trackStartingTimeoutId","_settingPosition"],readOnly:!0})],u.prototype,"state",null),i.__decorate([s.property({readOnly:!0,dependsOn:["_watchId"]})],u.prototype,"tracking",null),i.__decorate([s.property()],u.prototype,"start",null),i.__decorate([s.property()],u.prototype,"stop",null),u=i.__decorate([n.subclass("esri.widgets.Track.TrackViewModel")],u),u}));

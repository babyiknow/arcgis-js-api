/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/has","../../core/Logger","../../core/accessorSupport/ensureType","../../core/accessorSupport/decorators/property","../../core/accessorSupport/decorators/subclass","../../core/Error","../../core/urlUtils","../../core/uuid","../../portal/support/resourceExtension","../../core/promiseUtils","../../intl/locale","../../PopupTemplate","../../intl/messages","../../intl","../../core/Handles","../../core/watchUtils","../Popup/actions","../support/geolocationUtils","../support/GeolocationPositioning"],(function(e,t,o,a,r,i,l,s,c,n,p,u,d,h,g,f,_,m,y,w,b){"use strict";let C=function(t){function o(o){var a;return(a=t.call(this,o)||this)._locateController=null,a._handles=new _,a.locate=a.locate.bind(e._assertThisInitialized(a)),a}e._inheritsLoose(o,t);var a=o.prototype;return a.initialize=function(){this._handles.add([m.on(this,"view.popup","trigger-action",(e=>y.triggerAction({event:e,view:this.view}))),d.onLocaleChange((()=>{var e;const{graphic:t,view:o}=this;(null==o||null==(e=o.graphics)?void 0:e.includes(t))&&this._updatePopupTemplate(t)}))])},a.destroy=function(){this.cancelLocate(),this._handles.destroy(),this._handles=null},a.locate=async function(){if(this.cancelLocate(),"disabled"===this.state)throw new s("locate:disabled-state","Cannot locate when disabled.");if("feature-unsupported"===this.state)throw new s("locate:feature-unsupported-state","Cannot locate in unsecure domain.");const e=u.createAbortController();this._locateController=e;try{let t=await w.getCurrentPosition(this.geolocationOptions);return t=await this._setPosition(t,{signal:e.signal}),this._locateController!==e?null:(this.graphic&&(this.graphic=this.graphic.clone(),await this._updatePopupTemplate(this.graphic),this.view.graphics.push(this.graphic)),this.emit("locate",{position:t}),this._locateController=null,t)}catch(e){throw this._locateController=null,this.emit("locate-error",{error:e}),e}},a.cancelLocate=function(){this._clear(),this._locateController&&this._locateController.abort(),this._locateController=null},a._updatePopupTemplate=async function(e){const t=await async function(){const e=await g.fetchMessageBundle("esri/widgets/Locate/t9n/Locate");return new h({title:e.currentLocation,fieldInfos:[{fieldName:"timestamp",label:e.timestamp,format:{dateFormat:"short-date-short-time"}},{fieldName:"latitude",label:e.latitude,format:{places:4,digitSeparator:!0}},{fieldName:"longitude",label:e.longitude,format:{places:4,digitSeparator:!0}},{fieldName:"accuracy",label:e.accuracy,format:{places:0,digitSeparator:!0}},{fieldName:"altitude",label:e.altitude,format:{places:0,digitSeparator:!0}},{fieldName:"altitudeAccuracy",label:e.altitudeAccuracy,format:{places:0,digitSeparator:!0}},{fieldName:"heading",label:e.heading,format:{places:0,digitSeparator:!0}},{fieldName:"speed",label:e.speed,format:{places:0,digitSeparator:!0}}],actions:[y.removeSelectedFeature.clone()],content:[{type:"fields"}]})}(),o=e!==this.graphic;this.destroyed||o||(e.popupTemplate=t)},e._createClass(o,[{key:"state",get:function(){return this._geolocationUsable?this.get("view.ready")?this._locateController?"locating":"ready":"disabled":"feature-unsupported"}}]),o}(b);return t.__decorate([i.property()],C.prototype,"_locateController",void 0),t.__decorate([i.property({dependsOn:["view.ready","_locateController","_geolocationUsable"],readOnly:!0})],C.prototype,"state",null),t.__decorate([i.property()],C.prototype,"locate",null),t.__decorate([i.property()],C.prototype,"cancelLocate",null),C=t.__decorate([l.subclass("esri.widgets.Locate.LocateViewModel")],C),C}));

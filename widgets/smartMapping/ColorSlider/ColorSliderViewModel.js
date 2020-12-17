/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../core/has","../../../core/maybe","../../../core/Logger","../../../core/accessorSupport/ensureType","../../../core/accessorSupport/decorators/property","../../../core/accessorSupport/decorators/subclass","../../../core/urlUtils","../../../core/uuid","../../../portal/support/resourceExtension","../SmartMappingPrimaryHandleSliderViewModel"],(function(e,t,s,o,r,i,n,a,c,l,p,u){"use strict";let h=function(t){function s(e){return t.call(this,e)||this}e._inheritsLoose(s,t);var r=s.prototype;return r.setValue=function(e,t){const{max:s,min:o,values:r}=this;if(r[e]===(t=this.toPrecision(t))||t>s||t<o)return;if(this.primaryHandleEnabled){const s=r[1];(0===e&&t>s||2===e&&t<s)&&(t=s)}const i=this.getStopChanges(e,t);this.updateStops(i),this.notifyChange("values"),this.notifyChange("labels")},r.getStopInfo=function(){const{min:e,max:t,stops:s}=this;return s&&s.length?s.map((s=>({color:s.color,offset:(t-s.value)/(t-e)}))):[]},e._createClass(s,[{key:"stops",set:function(e){if(e&&e.length){const t=e.map((e=>e.value)),{max:s,min:r}=this,i={};o.isSome(r)&&t.some((e=>e<r))&&(i.min=Math.min(...t)),o.isSome(s)&&t.some((e=>e>s))&&(i.max=Math.max(...t)),this.set({...i})}this._set("stops",e)}}]),s}(u);return t.__decorate([n.property()],h.prototype,"stops",null),h=t.__decorate([a.subclass("esri.widgets.smartMapping.ColorSlider.ColorSliderViewModel")],h),h}));

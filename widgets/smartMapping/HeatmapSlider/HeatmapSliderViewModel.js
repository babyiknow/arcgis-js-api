/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../core/has","../../../core/maybe","../../../core/Logger","../../../core/accessorSupport/ensureType","../../../core/accessorSupport/decorators/property","../../../core/accessorSupport/decorators/subclass","../../../core/urlUtils","../../../core/uuid","../../../portal/support/resourceExtension","../../../intl/locale","../../../intl/messages","../../../intl","../../../core/Handles","../support/utils","../SmartMappingSliderViewModel"],(function(e,t,o,s,a,r,n,i,p,l,c,d,u,m,h,g,y){"use strict";let _=function(t){function o(e){var o;return(o=t.call(this,e)||this)._handles=new h,o._initialRatios=[],o.hasTimeData=!1,o.labelFormatFunction=(e,t)=>"min"===t?o.messages.bottomLabel:"max"===t?o.messages.topLabel:e.toString(),o.max=1,o.messages=null,o.min=0,o.zoomingEnabled=!1,o}e._inheritsLoose(o,t);var a=o.prototype;return a.initialize=function(){const e=async()=>this.messages=await u.fetchMessageBundle("esri/widgets/smartMapping/HeatmapSlider/t9n/HeatmapSlider");e(),this._handles.add(d.onLocaleChange(e))},a.setValue=function(e,t){const{max:o,min:s,stops:a}=this;if(t>o||t<s)return;if(t===a[e].ratio)return;const{values:r}=this,n=0===e?0:a.length-1,i=0===e?s:r[e-1],p=e===r.length-1?o:r[e+1],l=Math.max(Math.min(t,p),i),c=0===n?l:a[0].ratio,d=0===n?a[a.length-1].ratio:l,u=g.getStopChanges(c,d,this._initialRatios);this.updateStops(u),this.notifyChange("values"),this.notifyChange("labels")},a.getStopInfo=function(){const{stops:e}=this;return e&&e.length?e.map((e=>({color:e.color,offset:1-e.ratio}))):[]},e._createClass(o,[{key:"state",get:function(){const{messages:e,max:t,min:o}=this;return e&&s.isSome(t)&&s.isSome(o)?"ready":"disabled"}},{key:"stops",set:function(e){this._initialRatios=null==e?void 0:e.map((e=>e.ratio)),this._set("stops",e)}},{key:"values",get:function(){const{stops:e}=this;return!e||!e.length||e.length<2?[]:[e[0].ratio,e[e.length-1].ratio]}}]),o}(y);return t.__decorate([n.property({readOnly:!0})],_.prototype,"hasTimeData",void 0),t.__decorate([n.property({dependsOn:["messages"],readOnly:!0})],_.prototype,"labelFormatFunction",void 0),t.__decorate([n.property({readOnly:!0})],_.prototype,"max",void 0),t.__decorate([n.property()],_.prototype,"messages",void 0),t.__decorate([n.property({readOnly:!0})],_.prototype,"min",void 0),t.__decorate([n.property({dependsOn:["max","messages","min"],readOnly:!0})],_.prototype,"state",null),t.__decorate([n.property()],_.prototype,"stops",null),t.__decorate([n.property({dependsOn:["stops"],readOnly:!0})],_.prototype,"values",null),t.__decorate([n.property({readOnly:!0})],_.prototype,"zoomingEnabled",void 0),_=t.__decorate([i.subclass("esri.widgets.smartMapping.HeatmapSlider.HeatmapSliderViewModel")],_),_}));

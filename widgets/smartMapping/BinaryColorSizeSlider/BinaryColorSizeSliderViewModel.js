/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../core/has","../../../core/Logger","../../../core/accessorSupport/ensureType","../../../core/accessorSupport/decorators/property","../../../core/accessorSupport/decorators/subclass","../../../core/urlUtils","../../../core/uuid","../../../portal/support/resourceExtension","../SizeSlider/SizeSliderViewModel"],(function(e,r,t,o,s,n,l,i,c,a,p){"use strict";let u=function(r){function t(e){var t;return(t=r.call(this,e)||this).primaryHandleEnabled=!0,t}return e._inheritsLoose(t,r),t.prototype.getGradientStopInfo=function(e,r){var t;if(null==(t=this.stops)||!t.length)return[];const{min:o,max:s,stops:n}=this,l=[r,r,r,e,e],i=[],c=s-o;return n.forEach(((e,r)=>{const t=l[r],o=(s-e.value)/c,a=0===r?o:(s-n[r-1].value)/c;i.push({offset:a,color:t},{offset:o,color:t})})),i},e._createClass(t,[{key:"values",get:function(){const{stops:e}=this;if(!e||!e.length)return[];const r=this.getValuesFromStops();return 3===r.length?[r[0],r[1],r[2]]:5===r.length?[r[0],r[2],r[4]]:[]}}]),t}(p);return r.__decorate([n.property({readOnly:!0})],u.prototype,"primaryHandleEnabled",void 0),r.__decorate([n.property({dependsOn:["stops","stops.length"],readOnly:!0})],u.prototype,"values",null),u=r.__decorate([l.subclass("esri.widgets.smartMapping.SizeSlider.BinaryColorSizeSliderViewModel")],u),u}));

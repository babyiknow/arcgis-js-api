/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/has","../../core/Logger","../../core/accessorSupport/ensureType","../../core/accessorSupport/decorators/property","../../core/accessorSupport/decorators/subclass","../../core/urlUtils","../../core/uuid","../../portal/support/resourceExtension","../../core/Accessor","../../geometry/support/WKIDUnitConversion","../../geometry/support/spatialReferenceUtils","../../geometry/support/webMercatorUtils","../../geometry/Point","../../geometry/Polyline","../../geometry","../../core/screenUtils","../../geometry/support/normalizeUtils","../../geometry/support/geodesicUtils"],(function(e,t,r,n,i,o,s,a,c,l,u,p,d,m,g,f,h,w,y,_){"use strict";function S(e,t){return e&&e.indexOf(t)>-1}function v(e,t){const{x:r,y:n}="decimal-degrees"===e?m.webMercatorToGeographic(t,!0):t;return[r,n]}function b({state:{paddedViewState:e},spatialReference:t,width:r}){return t.isWrappable&&e.worldScreenWidth<r}let P=function(t){function r(e){var r;return(r=t.call(this,e)||this).scaleComputedFrom=w.createScreenPoint(),r.view=null,r}e._inheritsLoose(r,t);var n=r.prototype;return n.getScaleBarProperties=function(e,t){if("disabled"===this.state||isNaN(e)||!t)return null;const r=this._getDistanceInKm(this.view,this.scaleComputedFrom);if("metric"===t)return this._getScaleBarProps(e,r,"metric");const n=r/1.609;return this._getScaleBarProps(e,n,"non-metric")},n._getLocationUnit=function(){const e=this.get("view.spatialReference"),{isWebMercator:t,wkid:r,wkt:n}=e;return t||S(n,"WGS_1984_Web_Mercator")?"decimal-degrees":null!=p[r]||S(n,"PROJCS")?"linear-unit":"unknown"},n._getDistanceInKm=function(e,t){const{state:r,spatialReference:n}=e,i=this._getLocationUnit();if("linear-unit"===i){const e=1e3;return r.extent.width*function(e){const{wkid:t}=e;if(null!=p[t])return p.values[p[t]];const{wkt:r}=e,n=r.lastIndexOf(",")+1,i=r.lastIndexOf("]]");return parseFloat(r.substring(n,i))}(n)/e}const[o,s]=this._getScaleMeasuringPoints(e,t),a=new f({paths:[[v(i,o),v(i,s)]],spatialReference:4326}),c=y.straightLineDensify(a,10),[l]=_.geodesicLengths([c],"kilometers");return l},n._getScaleMeasuringPoints=function(e,t){const{width:r,height:n,position:i,spatialReference:o}=e;if(b(e)){const{valid:e}=d.getInfo(o);return[new g(e[0],0,o),new g(e[1],0,o)]}let s=t.y-i[1];s>n?s=n:s<0&&(s=0);const a=w.createScreenPoint(0,s),c=w.createScreenPoint(r,s);return[e.toMap(a),e.toMap(c)]},n._getScaleBarProps=function(e,t,r){const{view:n}=this;let i=e*t/(b(n)?n.state.paddedViewState.worldScreenWidth:n.width),o="metric"===r?"km":"mi";if(i<.1)if("mi"===o){i*=5280,o="ft"}else if("km"===o){i*=1e3,o="m"}let s=0;for(;i>=1;)i/=10,s++;const a=this._getConstraints(i);if(!a)return null;const{min:c,max:l}=a,u=l/i>=i/c?c:l;return{length:e*(u/i),value:Math.pow(10,s)*u,unit:o}},n._getConstraints=function(e){return e>.5?{min:.5,max:1}:e>.3?{min:.3,max:.5}:e>.2?{min:.2,max:.3}:e>.15?{min:.15,max:.2}:e>=.1?{min:.15,max:.1}:void 0},e._createClass(r,[{key:"state",get:function(){return this.get("view.ready")&&"2d"===this.get("view.type")?"ready":"disabled"}}]),r}(u);return t.__decorate([o.property()],P.prototype,"scaleComputedFrom",void 0),t.__decorate([o.property({readOnly:!0,dependsOn:["scaleComputedFrom","view.ready","view.scale"]})],P.prototype,"state",null),t.__decorate([o.property()],P.prototype,"view",void 0),P=t.__decorate([s.subclass("esri.widgets.Scalebar.ScaleBarViewModel")],P),P}));

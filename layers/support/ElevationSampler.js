/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","../../core/has","../../core/Logger","../../geometry/support/webMercatorUtils","../../geometry/Point","../../geometry/support/contains","../../geometry","../../core/unitUtils","../../geometry/support/aaBoundingRect"],(function(e,t,n,o,i,r,a,s,l,c){"use strict";const u=o.getLogger("esri.layers.support.ElevationSampler");let p=function(){function e(){}var t=e.prototype;return t.queryElevation=function(e){return h(e.clone(),this)},t.on=function(){return d},t.projectIfRequired=function(e,t){return x(e,t)},e}(),f=function(e){function n(t,n,o){var i;(i=e.call(this)||this).tile=t,i.noDataValue=o,i.extent=c.toExtent(t.tile.extent,n.spatialReference);const r=l.getMetersPerUnitForSR(n.spatialReference),a=n.lodAt(t.tile.level).resolution*r;return i.demResolution={min:a,max:a},i}t._inheritsLoose(n,e);var o=n.prototype;return o.contains=function(e){const t=this.projectIfRequired(e,this.spatialReference);return a.extentContainsPoint(this.extent,t)},o.elevationAt=function(e){const t=this.projectIfRequired(e,this.spatialReference);if(!t)return null;if(!this.contains(e)){const t=this.extent,n=`${t.xmin}, ${t.ymin}, ${t.xmax}, ${t.ymax}`;u.warn("#elevationAt()",`Point used to sample elevation (${e.x}, ${e.y}) is outside of the sampler extent (${n})`)}return this.tile.sample(t.x,t.y)},t._createClass(n,[{key:"spatialReference",get:function(){return this.extent.spatialReference}}]),n}(p),m=function(e){function n(t,n,o){var i;let r;i=e.call(this)||this,"number"==typeof n?(i.noDataValue=n,r=null):(r=n,i.noDataValue=o),i.samplers=r?t.map((e=>new f(e,r,i.noDataValue))):t;const a=i.samplers[0];if(a){i.extent=a.extent.clone();const{min:e,max:t}=a.demResolution;i.demResolution={min:e,max:t};for(let e=1;e<i.samplers.length;e++){const t=i.samplers[e];i.extent.union(t.extent),i.demResolution.min=Math.min(i.demResolution.min,t.demResolution.min),i.demResolution.max=Math.max(i.demResolution.max,t.demResolution.max)}}else i.extent=c.toExtent(c.create(),r.spatialReference),i.demResolution={min:0,max:0};return i}return t._inheritsLoose(n,e),n.prototype.elevationAt=function(e){const t=this.projectIfRequired(e,this.spatialReference);if(!t)return null;for(const e of this.samplers)if(e.contains(t))return e.elevationAt(t);return u.warn("#elevationAt()",`Point used to sample elevation (${e.x}, ${e.y}) is outside of the sampler`),null},t._createClass(n,[{key:"spatialReference",get:function(){return this.extent.spatialReference}}]),n}(p);function h(e,t){const n=x(e,t.spatialReference);if(!n)return null;switch(e.type){case"point":!function(e,t,n){e.z=n.elevationAt(t)||0}(e,n,t);break;case"polyline":!function(e,t,n){R.spatialReference=t.spatialReference;const o=e.hasM&&!e.hasZ;for(let i=0;i<e.paths.length;i++){const r=e.paths[i],a=t.paths[i];for(let e=0;e<r.length;e++){const t=r[e],i=a[e];R.x=i[0],R.y=i[1];const s=n.elevationAt(R)||0;o&&(t[3]=t[2]),t[2]=s}}e.hasZ=!0}(e,n,t);break;case"multipoint":!function(e,t,n){R.spatialReference=t.spatialReference;const o=e.hasM&&!e.hasZ;for(let i=0;i<e.points.length;i++){const r=e.points[i],a=t.points[i];R.x=a[0],R.y=a[1];const s=n.elevationAt(R)||0;o&&(r[3]=r[2]),r[2]=s}e.hasZ=!0}(e,n,t)}return e}function x(e,t){const n=e.spatialReference;return n.equals(t)?e:i.canProject(n,t)?i.project(e,t):(u.error(`Cannot project geometry spatial reference (wkid:${n.wkid}) to elevation sampler spatial reference (wkid:${t.wkid})`),null)}const R=new r,d={remove(){}};e.ElevationSamplerBase=p,e.MultiTileElevationSampler=m,e.TileElevationSampler=f,e.updateGeometryElevation=h,Object.defineProperty(e,"__esModule",{value:!0})}));

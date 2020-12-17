/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../../core/maybe","../../geometry/support/spatialReferenceUtils","../../core/unitUtils"],(function(e,t,n,r){"use strict";function o(e,t,n){if(null==e.hasM||e.hasZ)for(const e of t)for(const t of e)t.length>2&&(t[2]*=n)}function i(e,t,n){if(e)for(const r of e)s(r.geometry,t,n)}function s(e,t,i){if(!e||!e.spatialReference||n.equals(e.spatialReference,t))return;const s=r.getMetersPerVerticalUnitForSR(e.spatialReference)/i;if(1!==s)if("x"in e)null!=e.z&&(e.z*=s);else if("rings"in e)o(e,e.rings,s);else if("paths"in e)o(e,e.paths,s);else if("points"in e&&(null==e.hasM||e.hasZ))for(const t of e.points)t.length>2&&(t[2]*=s)}e.getGeometryZScaler=function(e,o,i){if(t.isNone(o)||t.isNone(i)||i.vcsWkid||n.equals(o,i))return null;const s=r.getMetersPerVerticalUnitForSR(o)/r.getMetersPerVerticalUnitForSR(i);if(1===s)return null;switch(e){case"point":case"esriGeometryPoint":return e=>{return n=s,void((t=e)&&null!=t.z&&(t.z*=n));var t,n};case"polyline":case"esriGeometryPolyline":return e=>function(e,t){if(!e)return;for(const n of e.paths)for(const e of n)e.length>2&&(e[2]*=t)}(e,s);case"polygon":case"esriGeometryPolygon":return e=>function(e,t){if(!e)return;for(const n of e.rings)for(const e of n)e.length>2&&(e[2]*=t)}(e,s);case"multipoint":case"esriGeometryMultipoint":return e=>function(e,t){if(!e)return;for(const n of e.points)n.length>2&&(n[2]*=t)}(e,s);default:return null}},e.unapplyEditsZUnitScaling=function(e,t,n){if(!e&&!t||!n)return;const o=r.getMetersPerVerticalUnitForSR(n);i(e,n,o),i(t,n,o)},Object.defineProperty(e,"__esModule",{value:!0})}));

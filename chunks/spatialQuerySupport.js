/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["require","exports","../core/maybe","../core/jsonMap","../core/Error","../core/promiseUtils","../geometry/support/spatialReferenceUtils","../geometry/support/contains","../geometry/support/intersects","../geometry/support/extentUtils","../geometry/support/jsonUtils","../core/unitUtils","../geometry/support/normalizeUtils","../layers/graphics/OptimizedGeometry","../layers/graphics/featureConversionUtils","../layers/graphics/centroid","../layers/graphics/data/projectionSupport","../layers/graphics/contains"],(function(e,t,r,i,n,o,s,l,a,c,u,p,y,m,f,g,S,R){"use strict";const h=new i.JSONMap({esriSRUnit_Meter:"meters",esriSRUnit_Kilometer:"kilometers",esriSRUnit_Foot:"feet",esriSRUnit_StatuteMile:"miles",esriSRUnit_NauticalMile:"nautical-miles",esriSRUnit_USNauticalMile:"us-nautical-miles"}),d=Object.freeze({}),G=new m,P=new m,w=new m,v={esriGeometryPoint:f.convertToPoint,esriGeometryPolyline:f.convertToPolyline,esriGeometryPolygon:f.convertToPolygon,esriGeometryMultipoint:f.convertToMultipoint};function M(e,t,r,i=e.hasZ,n=e.hasM){const o=e.hasZ&&i,s=e.hasM&&n;if(r){const l=f.quantizeOptimizedGeometry(w,t,e.hasZ,e.hasM,"esriGeometryPoint",r,i,n);return f.convertToPoint(l,o,s)}return f.convertToPoint(t,o,s)}function E(e,t,r,i,n,o,s=t,l=r){const a=t&&s,c=r&&l,u=i?"coords"in i?i:i.geometry:null;if(!u)return null;if(n){let i=f.generalizeOptimizedGeometry(P,u,t,r,e,n,s,l);return o&&(i=f.quantizeOptimizedGeometry(w,i,a,c,e,o)),v[e](i,a,c)}if(o){const i=f.quantizeOptimizedGeometry(w,u,t,r,e,o,s,l);return v[e](i,a,c)}return f.removeZMValues(G,u,t,r,s,l),v[e](G,a,c)}async function U(e,t,i){if(!e)return null;let{where:n}=e;if(e.where=n=n&&n.trim(),(!n||/^1 *= *1$/.test(n)||t&&t===n)&&(e.where=null),!e.geometry)return e;let o=await async function(e){const{geometry:t,distance:r,units:i}=e;if(null==r||"vertexAttributes"in t)return t;const n=t.spatialReference,o=i?h.fromJSON(i):p.getUnitString(n),l=n&&(s.isGeographic(n)||s.isWebMercator(n))?t:await S.checkProjectionSupport(n,s.WGS84).then((()=>S.project(t,s.WGS84)));return(await T())(l.spatialReference,l,r,o)}(e);if(e.distance=0,e.units=null,"esriSpatialRelEnvelopeIntersects"===e.spatialRel){const{spatialReference:t}=e.geometry;o=c.getGeometryExtent(o),o.spatialReference=t}e.geometry=o,await S.checkProjectionSupport(o.spatialReference,i);const l=(await y.normalizeCentralMeridian(u.fromJSON(o)))[0];if(r.isNone(l))throw d;const a=l.toJSON(),m=await S.project(a,a.spatialReference,i);if(!m)throw d;return m.spatialReference=i,e.geometry=m,e}const O="_geVersion",C=(e,t)=>e!==O?t:void 0,z="feature-store:unsupported-query",I={esriSpatialRelIntersects:"intersects",esriSpatialRelContains:"contains",esriSpatialRelCrosses:"crosses",esriSpatialRelDisjoint:"disjoint",esriSpatialRelEnvelopeIntersects:"intersects",esriSpatialRelIndexIntersects:null,esriSpatialRelOverlaps:"overlaps",esriSpatialRelTouches:"touches",esriSpatialRelWithin:"within",esriSpatialRelRelation:null},x={esriSpatialRelIntersects:!0,esriSpatialRelContains:!0,esriSpatialRelWithin:!0,esriSpatialRelCrosses:!0,esriSpatialRelDisjoint:!0,esriSpatialRelTouches:!0,esriSpatialRelOverlaps:!0,esriSpatialRelEnvelopeIntersects:!0,esriSpatialRelIndexIntersects:!1,esriSpatialRelRelation:!1},j={esriGeometryPoint:!0,esriGeometryMultipoint:!0,esriGeometryPolyline:!0,esriGeometryPolygon:!0,esriGeometryEnvelope:!0},F={esriGeometryPoint:!0,esriGeometryMultipoint:!0,esriGeometryPolyline:!0,esriGeometryPolygon:!0,esriGeometryEnvelope:!1};function N(){return new Promise((function(t,r){e(["../geometry/geometryEngineJSON"],t,r)}))}function T(){return N().then((e=>e.geodesicBuffer))}t.QUERY_ENGINE_EMPTY_RESULT=d,t.canQueryWithRBush=function(e){if(u.isExtent(e))return!0;if(u.isPolygon(e)){for(const t of e.rings){if(5!==t.length)return!1;if(t[0][0]!==t[1][0]||t[0][0]!==t[4][0]||t[2][0]!==t[3][0]||t[0][1]!==t[3][1]||t[0][1]!==t[4][1]||t[1][1]!==t[2][1])return!1}return!0}return!1},t.checkSpatialQuerySupport=async function(e,t,r){const{spatialRel:i,geometry:o}=e;if(o){if(!0!==x[i])throw new n(z,"Unsupported query spatial relationship",{query:e});if(s.isValid(o.spatialReference)&&s.isValid(r)){if(!function(e){return!0===j[u.getJsonType(e)]}(o))throw new n(z,"Unsupported query geometry type",{query:e});if(!function(e){return!0===F[e]}(t))throw new n(z,"Unsupported layer geometry type",{query:e});if(e.outSR)return S.checkProjectionSupport(e.geometry&&e.geometry.spatialReference,e.outSR)}}},t.cleanFromGeometryEngine=function(e){return e&&O in e?JSON.parse(JSON.stringify(e,C)):e},t.getCentroid=function(e,t,r){return"esriGeometryPolygon"===e.geometryType&&t&&(t.centroid||t.geometry)?(t.centroid||(t.centroid=g.getCentroidOptimizedGeometry(new m,t.geometry,e.hasZ,e.hasM)),M(e,t.centroid,r)):null},t.getGeodesicBufferOperator=T,t.getGeometry=E,t.getSpatialQueryOperator=function(e,t,r,i,n){if(u.isPolygon(t)&&"esriGeometryPoint"===r&&("esriSpatialRelIntersects"===e||"esriSpatialRelContains"===e)){const e=f.convertFromPolygon(new m,t,!1,!1);return o.resolve((t=>R.polygonContainsPoint(e,!1,!1,t)))}if(u.isPolygon(t)&&"esriGeometryMultipoint"===r){const r=f.convertFromPolygon(new m,t,!1,!1);if("esriSpatialRelContains"===e)return o.resolve((e=>R.polygonContainsMultipoint(r,!1,!1,e,i,n)))}if(u.isExtent(t)&&"esriGeometryPoint"===r&&("esriSpatialRelIntersects"===e||"esriSpatialRelContains"===e))return o.resolve((e=>l.extentContainsPoint(t,E(r,i,n,e))));if(u.isExtent(t)&&"esriGeometryMultipoint"===r&&"esriSpatialRelContains"===e)return o.resolve((e=>l.extentContainsMultipoint(t,E(r,i,n,e))));if(u.isExtent(t)&&"esriSpatialRelIntersects"===e){const e=a.getExtentIntersector(r);return o.resolve((o=>e(t,E(r,i,n,o))))}return N().then((o=>{const s=o[I[e]].bind(null,t.spatialReference,t);return e=>s(E(r,i,n,e))}))},t.importGeometryEngine=N,t.normalizeFilter=async function(e,t,r){return U(e,t,r)},t.normalizeQuery=async function(e,t,r){const{outFields:i,orderByFields:n,groupByFieldsForStatistics:o,outStatistics:s}=e;if(i)for(let e=0;e<i.length;e++)i[e]=i[e].trim();if(n)for(let e=0;e<n.length;e++)n[e]=n[e].trim();if(o)for(let e=0;e<o.length;e++)o[e]=o[e].trim();if(s)for(let e=0;e<s.length;e++)s[e].onStatisticField&&(s[e].onStatisticField=s[e].onStatisticField.trim());return e.geometry&&!e.outSR&&(e.outSR=e.geometry.spatialReference),U(e,t,r)},t.normalizeQueryLike=U,t.transformCentroid=M}));

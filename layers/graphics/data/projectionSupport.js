/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../../../core/promiseUtils","../../../geometry/support/spatialReferenceUtils","../../../geometry/support/webMercatorUtils","../../../geometry/projection","../../../geometry/geometryAdapters/json"],(function(e,t,n,s,i,r){"use strict";const o=[0,0];function a(e,t){if(!t)return null;if("x"in t){const n={x:0,y:0};return[n.x,n.y]=e(t.x,t.y,o),null!=t.z&&(n.z=t.z),null!=t.m&&(n.m=t.m),n}if("xmin"in t){const n={xmin:0,ymin:0,xmax:0,ymax:0};return[n.xmin,n.ymin]=e(t.xmin,t.ymin,o),[n.xmax,n.ymax]=e(t.xmax,t.ymax,o),t.hasZ&&(n.zmin=t.zmin,n.zmax=t.zmax,n.hasZ=!0),t.hasM&&(n.mmin=t.mmin,n.mmax=t.mmax,n.hasM=!0),n}return"rings"in t?{rings:c(t.rings,e),hasM:t.hasM,hasZ:t.hasZ}:"paths"in t?{paths:c(t.paths,e),hasM:t.hasM,hasZ:t.hasZ}:"points"in t?{points:u(t.points,e),hasM:t.hasM,hasZ:t.hasZ}:void 0}function c(e,t){const n=[];for(const s of e)n.push(u(s,t));return n}function u(e,t){const n=[];for(const s of e){const e=t(s[0],s[1],[0,0]);n.push(e),s.length>2&&e.push(s[2]),s.length>3&&e.push(s[3])}return n}const l=a.bind(null,s.lngLatToXY),m=a.bind(null,s.xyToLngLat);const p=new(function(){function e(){this._jobs=[],this._timer=null,this._process=this._process.bind(this)}var o=e.prototype;return o.push=async function(e,s,i){!e||!e.length||!s||!i||n.equals(s,i);const r={geometries:e,inSpatialReference:s,outSpatialReference:i,resolve:null};return this._jobs.push(r),t.create((e=>{r.resolve=e,null===this._timer&&(this._timer=setTimeout(this._process,10))}))},o._process=function(){this._timer=null;const e=this._jobs.shift();if(!e)return;const{geometries:t,inSpatialReference:o,outSpatialReference:a,resolve:c}=e;s.canProject(o,a)?n.isWebMercator(a)?c(t.map(l)):c(t.map(m)):c(i.projectMany(r.jsonAdapter,t,o,a,null)),this._jobs.length>0&&(this._timer=setTimeout(this._process,10))},e}());e.checkProjectionSupport=async function(e,t){if(!t)return;const n=Array.isArray(e)?e.map((e=>{var t;return null==(t=e.geometry)?void 0:t.spatialReference})):[e];await i.initializeProjection(n.map((e=>({source:e,dest:t}))))},e.project=function(e,t,o){return e?(o||(o=t,t=e.spatialReference),n.isValid(t)&&n.isValid(o)&&!n.equals(t,o)?s.canProject(t,o)?n.isWebMercator(o)?l(e):m(e):i.projectMany(r.jsonAdapter,[e],t,o,null)[0]:e):e},e.projectMany=async function(e,t,n){return p.push(e,t,n)},Object.defineProperty(e,"__esModule",{value:!0})}));

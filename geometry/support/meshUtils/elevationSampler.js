/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../../../chunks/_rollupPluginBabelHelpers","../../../core/maybe","../../../chunks/vec3f64","../../../core/workers/workers","../../../layers/support/ElevationSampler","../../../chunks/triangle","../../../views/3d/support/geometryUtils","./ElevationSamplerWorker"],(function(e,t,n,r,a,o,i,l,s){"use strict";let u=function(e){function r(t,r,a){var o;return(o=e.call(this)||this).rindex=r,o.demResolution={min:0,max:0},o.spatialReference=t.spatialReference.clone(),o.extent=t.extent.clone(),o.noDataValue=n.isSome(a)&&a.noDataValue||0,o}return t._inheritsLoose(r,e),r.prototype.elevationAt=function(e){const t=this.projectIfRequired(e,this.spatialReference);let n=Number.NEGATIVE_INFINITY;return l.ray.fromValues([t.x,t.y,0],[0,0,-1],x),this.rindex.search({minX:t.x,maxX:t.x,minY:t.y,maxY:t.y},(e=>{i.intersectRay(e,x,y)&&y[2]>n&&(n=y[2])})),n===Number.NEGATIVE_INFINITY?this.noDataValue:n},r}(o.ElevationSamplerBase);const c=new s.ElevationSamplerWorker;let m=0,p=null,f=0;const h=1e4,x=l.ray.fromValues([0,0,0],[0,0,-1]),y=r.create();e.create=async function(e,t){const r=await function(){if(++m,function(){f&&(clearTimeout(f),f=0)}(),p)return p;return p=a.open("ElevationSamplerWorker").catch((()=>null)),p}(),o=await c.createIndex(e,r);return function(e){--m,n.isSome(e)&&0===m&&(f=setTimeout((()=>{e.close(),p=null,f=0}),h))}(r),new u(e,o,t)},Object.defineProperty(e,"__esModule",{value:!0})}));

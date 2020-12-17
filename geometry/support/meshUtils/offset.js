/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../../../chunks/vec3f64","../../../chunks/vec3","../../projectionEllipsoid","../../projection","../../../chunks/mat3f64","../../../chunks/mat4f64","../../../chunks/mat3","./projection"],(function(e,t,r,o,n,c,a,i,s){"use strict";function f(e,t){if(e)for(let r=0;r<e.length;r+=3)for(let o=0;o<3;o++)e[r+o]+=t[o]}const l=t.create(),u=a.create(),p=c.create();e.offset=function(e,t,c){if(!e.vertexAttributes||!e.vertexAttributes.position)return;const a=e.spatialReference;a.isWGS84||a.isWebMercator&&(!c||!1!==c.geographic)?function(e,t){const c=e.spatialReference,a=e.vertexAttributes.position,h=e.vertexAttributes.normal,m=e.vertexAttributes.tangent,E=new Float64Array(a.length),F=new Float32Array(h?h.length:0),g=new Float32Array(m?m.length:0),j=e.extent.center,v=l;n.computeLinearTransformation(c,[j.x,j.y,j.z],u,o.getSphericalPCPF(c)),i.fromMat4(p,u),r.transformMat3(v,t,p),s.projectToECEF(a,c,E),h&&s.projectNormalToECEF(h,a,E,c,F);m&&s.projectTangentToECEF(m,a,E,c,g);f(E,v),s.projectFromECEF(E,a,c),h&&s.projectNormalFromECEF(F,a,E,c,h);m&&s.projectTangentFromECEF(g,a,E,c,m);e.clearCache()}(e,t):function(e,t){f(e.vertexAttributes.position,t),e.clearCache()}(e,t)},Object.defineProperty(e,"__esModule",{value:!0})}));

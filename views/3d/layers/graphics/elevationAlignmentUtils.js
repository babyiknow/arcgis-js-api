/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../../../../core/compilerUtils","../../../../chunks/vec3f64","../../../../chunks/mat4","../../../../geometry/projection","../../../../chunks/mat4f64","../../../../layers/graphics/dehydratedFeatures","../../support/ElevationProvider","./graphicUtils"],(function(e,t,n,o,r,a,i,l,s){"use strict";function u(e,n,o,r,a){const s=(i.isDehydratedPoint(e)?e.z:l.isSamplePosition(e)?e.array[e.offset+2]:e[2])||0;switch(o.mode){case"on-the-ground":{const t=l.getElevationAtPoint(n,e,"ground")||0;return a&&(a.verticalDistanceToGround=0,a.sampledElevation=t),t}case"relative-to-ground":{const t=l.getElevationAtPoint(n,e,"ground")||0,i=o.geometryZWithOffset(s,r);return a&&(a.verticalDistanceToGround=i,a.sampledElevation=t),i+t}case"relative-to-scene":{const t=l.getElevationAtPoint(n,e,"scene")||0,i=o.geometryZWithOffset(s,r);return a&&(a.verticalDistanceToGround=i,a.sampledElevation=t),i+t}case"absolute-height":{const t=o.geometryZWithOffset(s,r);if(a){const o=l.getElevationAtPoint(n,e,"ground")||0;a.verticalDistanceToGround=t-o,a.sampledElevation=o}return t}default:return t.neverReached(o.mode),0}}var c;(c=e.SymbolUpdateType||(e.SymbolUpdateType={}))[c.NONE=0]="NONE",c[c.UPDATE=1]="UPDATE",c[c.RECREATE=2]="RECREATE";const f={"absolute-height":{applyElevationAlignmentBuffer:function(e,t,n,o,r,a,i,l){const s=l.calculateOffsetRenderUnits(i),u=l.featureExpressionInfoContext;t*=3,o*=3;for(let a=0;a<r;++a){const r=e[t+0],a=e[t+1],i=e[t+2];n[o+0]=r,n[o+1]=a,n[o+2]=null==u?i+s:s,t+=3,o+=3}return 0},requiresAlignment:function(e){const t=e.meterUnitOffset,n=e.featureExpressionInfoContext;return 0!==t||null!=n}},"on-the-ground":{applyElevationAlignmentBuffer:function(e,t,n,o,r,a){let i=0;const l=a.spatialReference;t*=3,o*=3;for(let s=0;s<r;++s){const r=e[t+0],s=e[t+1],u=e[t+2],c=a.getElevation(r,s,u,l,"ground")||0;i+=c,n[o+0]=r,n[o+1]=s,n[o+2]=c,t+=3,o+=3}return i/r},requiresAlignment:()=>!0},"relative-to-ground":{applyElevationAlignmentBuffer:function(e,t,n,o,r,a,i,l){let s=0;const u=l.calculateOffsetRenderUnits(i),c=l.featureExpressionInfoContext,f=a.spatialReference;t*=3,o*=3;for(let i=0;i<r;++i){const r=e[t+0],i=e[t+1],l=e[t+2],d=a.getElevation(r,i,l,f,"ground")||0;s+=d,n[o+0]=r,n[o+1]=i,n[o+2]=null==c?l+d+u:d+u,t+=3,o+=3}return s/r},requiresAlignment:()=>!0},"relative-to-scene":{applyElevationAlignmentBuffer:function(e,t,n,o,r,a,i,l){let s=0;const u=l.calculateOffsetRenderUnits(i),c=l.featureExpressionInfoContext,f=a.spatialReference;t*=3,o*=3;for(let i=0;i<r;++i){const r=e[t+0],i=e[t+1],l=e[t+2],d=a.getElevation(r,i,l,f,"scene")||0;s+=d,n[o+0]=r,n[o+1]=i,n[o+2]=null==c?l+d+u:d+u,t+=3,o+=3}return s/r},requiresAlignment:()=>!0}},d=a.create(),p={verticalDistanceToGround:0,sampledElevation:0},g=n.create();e.applyElevationAlignmentForHUD=function(e,t,n,a,i){const l=u(t,n,i,a,p);s.updateVertexAttributeAuxpos1w(e,p.verticalDistanceToGround);const c=p.sampledElevation,f=o.copy(d,e.objectTransformation);return g[0]=t.x,g[1]=t.y,g[2]=l,r.computeLinearTransformation(t.spatialReference,g,f,a.spatialReference)?e.objectTransformation=f:console.warn("Could not locate symbol object properly, it might be misplaced"),c},e.applyPerVertexElevationAlignment=function(e,t,n,o,a,i,l,s,u,c,d){const p=f[d.mode];let g,v,m=0;if(r.projectBuffer(e,t,n,o,u.spatialReference,a,s))return p.requiresAlignment(d)?(m=p.applyElevationAlignmentBuffer(o,a,i,l,s,u,c,d),g=i,v=l):(g=o,v=a),r.projectBuffer(g,u.spatialReference,v,i,c.spatialReference,l,s)?m:void 0},e.elevationModeChangeUpdateType=function(t,n,o){return null==n||null==o?t.definedChanged:"on-the-ground"===n&&"on-the-ground"===o?t.staysOnTheGround:n===o||"on-the-ground"!==n&&"on-the-ground"!==o?e.SymbolUpdateType.UPDATE:t.onTheGroundChanged},e.evaluateElevationAlignmentAtPoint=u,e.needsElevationUpdates2D=function(e){return"relative-to-ground"===e||"relative-to-scene"===e},e.needsElevationUpdates3D=function(e){return"absolute-height"!==e},Object.defineProperty(e,"__esModule",{value:!0})}));

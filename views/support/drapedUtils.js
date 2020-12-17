/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../../core/maybe","../../geometry/Extent","../../geometry","../../core/unitUtils","../../renderers/support/clickToleranceUtils"],(function(e,t,n,r,a,i){"use strict";function s(e,r,i,s=new n){let o;if("2d"===i.type)o=r*i.resolution;else if("3d"===i.type){const n=i.overlayPixelSizeInMapUnits(e),s=i.basemapSpatialReference;o=t.isSome(s)&&!s.equals(i.spatialReference)?a.getMetersPerUnitForSR(s)/a.getMetersPerUnitForSR(i.spatialReference):r*n}const c=e.x-o,l=e.y-o,m=e.x+o,p=e.y+o,{spatialReference:u}=i;return s.xmin=Math.min(c,m),s.ymin=Math.min(l,p),s.xmax=Math.max(c,m),s.ymax=Math.max(l,p),s.spatialReference=u,s}const o=new n;e.createQueryGeometry=s,e.intersectsDrapedGeometry=function(e,n,r){const a=r.toMap(e);return!t.isNone(a)&&s(a,i.calculateTolerance(),r,o).intersects(n)},Object.defineProperty(e,"__esModule",{value:!0})}));

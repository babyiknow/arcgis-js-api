/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../../../chunks/_rollupPluginBabelHelpers","../../../core/maybe","../../../core/mathUtils","../../../chunks/vec2f64","../../../chunks/vec2","./Settings","./snappingUtils","./SnappingAlgorithm","./SnappingConstraint","./RightAngleSnappingCandidate"],(function(e,t,n,i,r,o,s,a,p,h,l){"use strict";let c=function(e){function p({enabled:t=s.defaults.lineSnapper.enabled,proximityThreshold:n=s.defaults.lineProximityThreshold,shortLineThreshold:i=s.defaults.shortLineThreshold}={}){var o;return(o=e.call(this,{enabled:t,proximityThreshold:n,shortLineThreshold:i})||this)._tmp=r.create(),o}t._inheritsLoose(p,e);var c=p.prototype;return c.snapNewVertex=function(e,t){const n=t.geometry.data.components[0],i=n.vertices.length,r=[];if(i<2)return r;const o=t.geometry.data.coordinateHelper,s=o.fromPoint(e),p=a.anyMapPointToScreenPoint(s,t.geometry.data.coordinateHelper,t.elevationInfo,t.view),h=n.vertices[i-1];this._checkForSnappingCandidate(r,h.left,h.pos,o.fromPoint(e),h.left.left.pos,h.pos,t,e,p);const l=n.vertices[0];return this._checkForSnappingCandidate(r,l.right,l.pos,o.fromPoint(e),l.right.right.pos,l.pos,t,e,p),r},c.snapExistingVertex=function(e,t){const i=[],r=n.unwrap(t.vertexHandle),o=r.component,s=o.vertices.length;if(s<3)return i;const p=t.geometry.data.coordinateHelper.fromPoint(e),h=a.anyMapPointToScreenPoint(p,t.geometry.data.coordinateHelper,t.elevationInfo,t.view),l=r.left,c=r.right,d=o.vertices[0],g=o.vertices[s-1];if(!l)return this._checkForSnappingCandidate(i,d.right.right.right,d.right.right.pos,p,d.right.right.right.right.pos,d.right.right.pos,t,e,h),i;if(!c)return this._checkForSnappingCandidate(i,g.left.left.left,g.left.left.pos,p,g.left.left.left.left.pos,g.left.left.pos,t,e,h),i;if(l&&l.left.left){const n=l.left.left;this._checkForSnappingCandidate(i,n,l.left.pos,p,n.left.pos,l.left.pos,t,e,h)}if(c&&c.right.right){const n=c.right.right;this._checkForSnappingCandidate(i,n,c.right.pos,p,n.right.pos,c.right.pos,t,e,h)}return i},c._checkForSnappingCandidate=function(e,t,n,s,p,c,d,g,f){if(!this.edgeExceedsShortLineThreshold(t,d))return;o.subtract(this._tmp,t.right.pos,t.left.pos);const u=r.fromValues(this._tmp[1],-this._tmp[0]),m=o.dot(u,o.subtract(this._tmp,s,n))/o.squaredLength(u),v=d.geometry.data.coordinateHelper,S=v.fromXYZ(o.scaleAndAdd(r.create(),c,u,m),g.hasZ?g.z:0);a.squareDistance(f,a.anyMapPointToScreenPoint(S,v,d.elevationInfo,d.view))<this.squaredProximityTreshold(d.pointer)&&e.push(new l.RightAngleSnappingCandidate({coordinateHelper:v,targetPoint:S,constraint:new h.RayConstraint(c,o.scaleAndAdd(v.createNew(),c,u,i.sign(m))),previousVertex:p,centerVertex:c}))},p}(p.SnappingAlgorithm);e.RightAngleSnapper=c,Object.defineProperty(e,"__esModule",{value:!0})}));

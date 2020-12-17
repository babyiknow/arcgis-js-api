/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../../../chunks/_rollupPluginBabelHelpers","../../../core/mathUtils","../../../geometry/support/aaBoundingBox","../support/geometryUtils","./PatchGeometryFactory","./Tile"],(function(t,e,i,n,s,r,h){"use strict";let a=function(t){function h(e,i,n){var s;return s=t.call(this,h.NumSubdivisionsAtLevel)||this,void 0!==e&&s.init(e,i,n),s}e._inheritsLoose(h,t);var a=h.prototype;return a.init=function(e,n,s){t.prototype.init.call(this,e,n,s),this._edgeLen=this.extent[2]-this.extent[0],this._edgeLen2=this._edgeLen*this._edgeLen,this.centerAtSeaLevel[0]=i.lerp(this.extent[0],this.extent[2],.5),this.centerAtSeaLevel[1]=i.lerp(this.extent[1],this.extent[3],.5),this.centerAtSeaLevel[2]=0,this.updateRadiusAndCenter()},a.updateRadiusAndCenter=function(){this._updateCenter();const t=(this.extent[2]-this.extent[0])*Math.SQRT1_2,e=.5*(this.elevationBounds[0]-this.elevationBounds[1]);this._radius=Math.sqrt(t*t+e*e)},a._isVisible=function(){return this.intersectsClippingArea&&s.frustum.intersectsAABB(this.surface.frustum.planes,n.wrap(this.extent[0],this.extent[1],this.elevationBounds[0],this.extent[2],this.extent[3],this.elevationBounds[1]))},a.createGeometry=function(t,e){r.createPlanarGlobePatch(t,this.extent,e,this.renderData),this.setMemoryDirty()},h}(h.default);a.NumSubdivisionsAtLevel=[2,2,2,2,2,2,2,2],t.PlanarPatch=a,Object.defineProperty(t,"__esModule",{value:!0})}));

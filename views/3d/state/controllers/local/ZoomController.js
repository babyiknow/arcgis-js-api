/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../../../../../chunks/_rollupPluginBabelHelpers","../../../../../chunks/tslib.es6","../../../../../core/has","../../../../../core/Logger","../../../../../core/accessorSupport/ensureType","../../../../../core/accessorSupport/decorators/property","../../../../../core/accessorSupport/decorators/subclass","../../../../../core/urlUtils","../../../../../core/uuid","../../../../../portal/support/resourceExtension","../../../../../core/mathUtils","../../../../../core/screenUtils","../../../../../chunks/vec3f64","../../../../../chunks/vec3","../../../../../chunks/vec2f64","../../../../../chunks/vec2","../../../support/geometryUtils","../../../camera/constraintUtils","../../utils/navigationUtils","../InteractiveController"],(function(t,e,i,r,n,a,s,o,c,h,m,p,l,u,C,g,P,y,d,v,D){"use strict";t.ZoomController=function(t){function i(e){var i;return(i=t.call(this,e)||this).view=null,i.tmpP=u.create(),i.tmpDir=u.create(),i.tmpN=u.create(),i.tmpP0=g.create(),i.tmpPoi=u.create(),i.tmpRayDir=u.create(),i.dragBeginPoint=l.createScreenPointArray(),i.normalizedAnchorPoint=g.create(),i.constraintOptions={selection:15,interactionType:1,interactionFactor:0,interactionStartCamera:null,interactionDirection:u.create(),tiltMode:0},i.plane=y.plane.create(),i}e._inheritsLoose(i,t);var r=i.prototype;return r.begin=function(t){if(!this.active)return;let e;P.copy(this.dragBeginPoint,t),v.normalizeCoordinate(this.beginCamera,t,this.normalizedAnchorPoint),this.intersectionHelper.intersectScreenFreePointFallback(t,this.tmpP),C.subtract(this.tmpDir,this.tmpP,this.beginCamera.eye),C.normalize(this.tmpDir,this.tmpDir),this.view.camera.position.hasZ&&(e=Math.abs(this.view.camera.position.z));let i=30*e;const r=this.view._stage.renderView.getMinimalDepthForArea(t[0],t[1],this.view._stage.getCamera(),70);i=i>r?r:i,C.scale(this.tmpDir,this.tmpDir,i),C.add(this.tmpP,this.beginCamera.eye,this.tmpDir),C.subtract(this.tmpN,this.beginCamera.eye,this.beginCamera.center),C.normalize(this.tmpN,this.tmpN),this.tmpN[1]<0&&C.negate(this.tmpN,this.tmpN),y.plane.fromPositionAndNormal(this.tmpP,this.tmpN,this.plane),this.constraintOptions.interactionStartCamera=this.beginCamera},r.update=function(t){if(!this.active)return;v.intersectPlaneFromScreenPoint(this.plane,this.currentCamera,this.dragBeginPoint,this.tmpPoi)||C.copy(this.tmpPoi,this.currentCamera.center),v.normalizeCoordinate(this.currentCamera,t,this.tmpP0);let e=4*(this.tmpP0[1]-this.normalizedAnchorPoint[1]);P.copy(this.normalizedAnchorPoint,this.tmpP0),C.subtract(this.tmpRayDir,this.tmpPoi,this.currentCamera.eye);const i=C.length(this.tmpRayDir);let r=i*(1-e);C.copy(this.constraintOptions.interactionDirection,this.tmpRayDir),C.scale(this.constraintOptions.interactionDirection,this.constraintOptions.interactionDirection,p.sign(e)/i);const n=this.view.state.constraints.minimumPoiDistance;e>=0&&r<n&&(r=n,e=-(r-i)/i),Math.abs(i-r)<1e-6||(C.scale(this.tmpRayDir,this.tmpRayDir,e),C.add(this.currentCamera.eye,this.currentCamera.eye,this.tmpRayDir),C.lerp(this.currentCamera.center,this.currentCamera.center,this.tmpPoi,e),this.tmpPoi[2]>this.beginCamera.center[2]?this.currentCamera.center[2]=Math.max(this.beginCamera.center[2],this.currentCamera.center[2]):this.currentCamera.center[2]=Math.min(this.beginCamera.center[2],this.currentCamera.center[2]),this.currentCamera.markViewDirty(),this.constraintOptions.interactionFactor=d.pixelDistanceToInteractionFactor(this.dragBeginPoint,t),d.applyAll(this.view,this.currentCamera,this.constraintOptions))},r.end=function(){this.active&&this.finishController()},e._createClass(i,[{key:"intersectionHelper",get:function(){return this.view.sceneIntersectionHelper}}]),i}(D.InteractiveController),i.__decorate([s.property({constructOnly:!0})],t.ZoomController.prototype,"view",void 0),t.ZoomController=i.__decorate([o.subclass("esri.views.3d.state.controllers.local.ZoomController")],t.ZoomController),Object.defineProperty(t,"__esModule",{value:!0})}));

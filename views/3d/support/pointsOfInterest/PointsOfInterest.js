/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../chunks/tslib.es6","../../../../core/has","../../../../core/maybe","../../../../core/Logger","../../../../core/accessorSupport/ensureType","../../../../core/accessorSupport/decorators/property","../../../../core/accessorSupport/decorators/subclass","../../../../core/urlUtils","../../../../core/uuid","../../../../portal/support/resourceExtension","../../../../core/Accessor","../../../../chunks/vec3f64","../../../../chunks/vec3","../../../../core/Handles","../../../support/Scheduler","../../../../chunks/ray","../../webgl-engine/lib/intersectorUtils","../../webgl-engine/lib/Intersector","../PropertiesPool","./disposeMembers","./CameraOnSurface","./CenterOnSurface","./ContentGeometryUpdates","./Focus","./StableSurfaceCenter","./SurfaceGeometryUpdates"],(function(e,t,r,n,s,i,a,o,c,u,d,f,p,h,l,O,y,C,I,A,S,_,m,w,P,g,v,T){"use strict";e.PointsOfInterest=function(e){function r(r){var n;return(n=e.call(this,r)||this).handles=new O,n.surfaceAltitudeAtCenter=0,n.surfaceAltitudeAtCenterDirty=!0,n.surfaceAltitudeAtCenterWithContent=0,n.surfaceAltitudeAtCenterWithContentDirty=!0,n.propertiesPool=new S.PropertiesPool({renderPointOfView:b},t._assertThisInitialized(n)),n.renderPointOfView=h.create(),n}t._inheritsLoose(r,e);var n=r.prototype;return n.initialize=function(){const{state:e,basemapTerrain:t,renderCoordsHelper:r,map:n}=this.view;this.surfaceIntersector=new A.Intersector(e.mode),e.isGlobal?this.surfaceIntersector.options.backfacesTerrain=!1:this.surfaceIntersector.options.backfacesTerrain=!0,this.surfaceIntersector.options.invisibleTerrain=!1,this.contentIntersector=new A.Intersector(e.mode),this.contentIntersectorOptions={exclude:new Set([I.TERRAIN_ID])};const s=()=>this.estimateSurfaceAltitudeAtCenter(),i={state:e,scheduler:this.view.resourceController.scheduler,surface:t,renderCoordsHelper:r};this._set("centerOnSurfaceInfrequent",new w.default({...i,task:y.Task.POINT_OF_INTEREST_INFREQUENT,estimateSurfaceAltitudeAtCenter:s})),this._set("centerOnSurfaceFrequent",new w.default({...i,task:y.Task.POINT_OF_INTEREST_FREQUENT,estimateSurfaceAltitudeAtCenter:s})),this._set("centerOnContent",new w.default({...i,task:y.Task.POINT_OF_INTEREST_FREQUENT,estimateSurfaceAltitudeAtCenter:()=>this.estimateSurfaceAltitudeAtCenterWithContent()})),this._set("cameraOnSurface",new m.default({...i,task:y.Task.POINT_OF_INTEREST_INFREQUENT,map:n})),this._set("surfaceGeometryUpdates",new T.default({...i,centerOnSurfaces:[this.centerOnSurfaceFrequent,this.centerOnContent,this.centerOnSurfaceInfrequent]})),this._set("contentGeometryUpdates",new P.ContentGeometryUpdates({contentLayerViews:this.view.allLayerViews,renderCoordsHelper:r})),this._set("surfaceOrigin",new v.default({view:this.view})),this._set("focus",new g.default({state:e,surface:t,renderCoordsHelper:r,centerOnSurface:this.centerOnSurfaceFrequent})),g.setupFocusDebugGraphic(this.view.graphics),this.handles.add([e.watch("camera",(e=>this.cameraChanged(e)),!0),t.watch("extent",(()=>this.updateCenterPointsOfInterest())),this.surfaceGeometryUpdates.events.on("request-update",(()=>this.updateCenterPointsOfInterest())),this.contentGeometryUpdates.events.on("request-update",(()=>this.updateCenterOnContent()))]),this.cameraChanged(this.view.state.camera),this.centerOnContent.update(),this.centerOnSurfaceFrequent.update(),this.centerOnSurfaceInfrequent.update(),this.cameraOnSurface.update()},n.destroy=function(){_.disposeMembers(this,"handles","centerOnSurfaceInfrequent","centerOnSurfaceFrequent","cameraOnSurface","centerOnContent","surfaceOrigin","focus","propertiesPool")},n.estimateSurfaceAltitudeAtCenterWithContent=function(){if(!this.surfaceAltitudeAtCenterWithContentDirty)return this.surfaceAltitudeAtCenterWithContent;this.surfaceAltitudeAtCenterWithContentDirty=!1;const e=this.view.state.camera,t=this.view.sceneIntersectionHelper.getCenterRayWithSubpixelOffset(e,F);return s.isNone(t)||(this.view.sceneIntersectionHelper.intersectRay(t,this.contentIntersector,q,this.contentIntersectorOptions)?this.surfaceAltitudeAtCenterWithContent=this.view.renderCoordsHelper.getAltitude(q):this.surfaceAltitudeAtCenterWithContent=this.estimateSurfaceAltitudeAtCenter(t)),this.surfaceAltitudeAtCenterWithContent},n.estimateSurfaceAltitudeAtCenter=function(e=null){if(!this.view.basemapTerrain)return 0;if(!this.surfaceAltitudeAtCenterDirty)return this.surfaceAltitudeAtCenter;this.surfaceAltitudeAtCenterDirty=!1;const t=this.view.state.camera;if(s.isNone(e)&&(e=this.view.sceneIntersectionHelper.getCenterRayWithSubpixelOffset(t,F),s.isNone(e)))return this.surfaceAltitudeAtCenter;const r=e.origin,n=l.add(q,e.origin,e.direction);return this.surfaceIntersector.resetWithRay(e),this.surfaceIntersector.intersect(null,null,t),this.view.basemapTerrain.intersect(this.surfaceIntersector,null,r,n),this.surfaceIntersector.results.min.getIntersectionPoint(q)&&(this.surfaceAltitudeAtCenter=this.view.renderCoordsHelper.getAltitude(q)),this.surfaceAltitudeAtCenter},n.cameraChanged=function(e){this.updateCenterPointsOfInterest();const t=e.eye;l.exactEquals(this.renderPointOfView,t)||this._set("renderPointOfView",l.copy(this.propertiesPool.get("renderPointOfView"),t))},n.updateCenterPointsOfInterest=function(){this.surfaceAltitudeAtCenterDirty=!0,this.surfaceAltitudeAtCenterWithContentDirty=!0,this.centerOnSurfaceFrequent.updateRenderLocation(),this.centerOnSurfaceInfrequent.updateRenderLocation(),this.cameraOnSurface.updateRenderLocation(),this.focus.updateRenderLocation(),this.centerOnContent.updateRenderLocation()},n.updateCenterOnContent=function(){this.surfaceAltitudeAtCenterWithContentDirty=!0,this.centerOnContent.updateRenderLocation()},t._createClass(r,[{key:"updating",get:function(){var e,t,r,n,s,i;return!!(null!=(e=this.surfaceGeometryUpdates)&&e.updating||null!=(t=this.centerOnContent)&&t.updating||null!=(r=this.centerOnSurfaceInfrequent)&&r.updating||null!=(n=this.centerOnSurfaceFrequent)&&n.updating||null!=(s=this.cameraOnSurface)&&s.updating||null!=(i=this.focus)&&i.updating)}},{key:"test",get:function(){return{update:()=>{this.surfaceGeometryUpdates.update(),this.centerOnSurfaceFrequent.update(),this.centerOnSurfaceInfrequent.update()},surfaceGeometryUpdates:this.surfaceGeometryUpdates}}}]),r}(p),r.__decorate([o.property({readOnly:!0})],e.PointsOfInterest.prototype,"centerOnContent",void 0),r.__decorate([o.property({readOnly:!0})],e.PointsOfInterest.prototype,"centerOnSurfaceFrequent",void 0),r.__decorate([o.property({readOnly:!0})],e.PointsOfInterest.prototype,"centerOnSurfaceInfrequent",void 0),r.__decorate([o.property({readOnly:!0})],e.PointsOfInterest.prototype,"cameraOnSurface",void 0),r.__decorate([o.property({readOnly:!0})],e.PointsOfInterest.prototype,"focus",void 0),r.__decorate([o.property({readOnly:!0})],e.PointsOfInterest.prototype,"renderPointOfView",void 0),r.__decorate([o.property({readOnly:!0})],e.PointsOfInterest.prototype,"surfaceOrigin",void 0),r.__decorate([o.property({readOnly:!0})],e.PointsOfInterest.prototype,"contentGeometryUpdates",void 0),r.__decorate([o.property({readOnly:!0})],e.PointsOfInterest.prototype,"surfaceGeometryUpdates",void 0),r.__decorate([o.property({constructOnly:!0})],e.PointsOfInterest.prototype,"view",void 0),r.__decorate([o.property({readOnly:!0,dependsOn:["surfaceGeometryUpdates.updating","centerOnContent.updating","centerOnSurfaceInfrequent.updating","centerOnSurfaceFrequent.updating","cameraOnSurface.updating","focus.updating"]})],e.PointsOfInterest.prototype,"updating",null),e.PointsOfInterest=r.__decorate([c.subclass("esri.views.3d.support.PointsOfInterest")],e.PointsOfInterest);const b=Array,q=h.create(),F=C.create();var R=e.PointsOfInterest;e.default=R,Object.defineProperty(e,"__esModule",{value:!0})}));

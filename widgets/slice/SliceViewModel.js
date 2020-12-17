/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/has","../../core/maybe","../../core/Logger","../../core/accessorSupport/ensureType","../../core/accessorSupport/decorators/property","../../core/accessorSupport/decorators/aliasOf","../../core/accessorSupport/decorators/subclass","../../core/urlUtils","../../core/uuid","../../portal/support/resourceExtension","../../core/promiseUtils","../../core/Accessor","../../core/Collection","../../core/collectionUtils","../../core/Handles","../../chunks/boundedPlane","../support/InteractiveToolViewModel","../../views/3d/interactive/analysisTools/slice/sliceToolUtils","../../views/3d/interactive/analysisTools/slice/SliceTool","./SlicePlane"],(function(e,t,o,r,s,i,l,n,a,c,d,u,p,h,y,f,_,S,g,w,v,x){"use strict";const T=s.getLogger("esri.widgets.Slice.SliceViewModel"),b=new Set;let E=function(t){function o(o){var r;return(r=t.call(this,o)||this).supportedViewType="3d",r.handles=new _,b.add(e._assertThisInitialized(r)),r}e._inheritsLoose(o,t);var s=o.prototype;return s.destroy=function(){b.delete(this),this.handles.destroy()},s.start=function(){return b.forEach((e=>{e.view===this.view&&e!==this&&e.clear()})),this.createTool()},s.clear=function(){this.removeTool(),this._set("plane",null),this._set("excludeGroundSurface",!1),this._set("excludedLayers",new y)},s.newSlice=function(){p.ignoreAbortErrors(this.start())},s.clearSlice=function(){this.clear()},s.removeSliceAndStart=function(){return this.removeTool(),this.plane=null,this.start()},s.enterExcludeLayerMode=function(){this.tool&&this.tool.enterExcludeLayerMode()},s.exitExcludeLayerMode=function(){this.tool&&this.tool.exitExcludeLayerMode()},s.createTool=async function(){if(await this.view.whenReady(),this._isOverridden("shape")){const e=this.shape;this._clearOverride("shape"),this.shape=e}await t.prototype.createTool.call(this)},s._updateToolOrRecreate=function(e){this.tool?e(this.tool):this.creatingTool&&p.ignoreAbortErrors(this.createTool())},s.createToolParams=function(){return{toolConstructor:v,constructorArguments:()=>({excludeGroundSurface:this.excludeGroundSurface,plane:this.plane,excludedLayers:this.excludedLayers,tiltEnabled:this.tiltEnabled})}},s.logUnsupportedError=function(){this.logError("Slice widget is not implemented for MapView")},s.logError=function(...e){T.error(...e)},e._createClass(o,[{key:"state",get:function(){return this.isDisabled?"disabled":this.tool?this.tool.state:"ready"}},{key:"plane",get:function(){return this.tool?this.tool.plane:this._get("plane")},set:function(e){this._clearOverride("shape"),this._set("plane",e),r.isSome(e)?this.tool?this.tool.plane=e:e&&p.ignoreAbortErrors(this.createTool()):this.removeTool()}},{key:"shape",get:function(){if(r.isNone(this.plane))return null;const e=this._get("shape"),t=this.view,o=w.planeToShape(this.plane,t.renderCoordsHelper,t.spatialReference,new x);return r.isNone(o)||r.isNone(e)?o:o.heading===e.heading&&o.tilt===e.tilt&&r.isSome(o.position)&&r.isSome(e.position)&&o.position.equals(e.position)&&o.width===e.width&&o.height===e.height?e:o},set:function(e){if(r.isNone(this.view)||!this.view.ready)return void this._override("shape",e);const t=w.shapeToPlane(e,this.view.renderCoordsHelper,S.create());r.isSome(this.plane)&&r.isSome(t)&&S.equals(this.plane,t)||(this.plane=t)}},{key:"tiltEnabled",get:function(){var e,t,o;return null!=(e=null!=(t=null==(o=this.tool)?void 0:o.tiltEnabled)?t:this._get("tiltEnabled"))&&e},set:function(e){this._set("tiltEnabled",e),this._updateToolOrRecreate((t=>t.tiltEnabled=e))}},{key:"excludedLayers",get:function(){return this.tool?this.tool.excludedLayers:this._get("excludedLayers")||new y},set:function(e){this._set("excludedLayers",f.referenceSetter(e,this.excludedLayers)),this._updateToolOrRecreate((t=>t.excludedLayers=e))}},{key:"excludeGroundSurface",get:function(){return this.tool?this.tool.excludeGroundSurface:this._get("excludeGroundSurface")||!1},set:function(e){this._set("excludeGroundSurface",e),this._updateToolOrRecreate((t=>t.excludeGroundSurface=e))}}]),o}(g.InteractiveToolViewModel);return t.__decorate([l.property({dependsOn:["isDisabled","tool.attached","tool.state"],readOnly:!0})],E.prototype,"state",null),t.__decorate([l.property()],E.prototype,"tool",void 0),t.__decorate([l.property({dependsOn:["tool.plane"]})],E.prototype,"plane",null),t.__decorate([l.property({types:{key:"type",base:h,typeMap:{plane:x},defaultKeyValue:"plane"},dependsOn:["plane"]})],E.prototype,"shape",null),t.__decorate([l.property({type:Boolean,dependsOn:["tool.tiltEnabled"]})],E.prototype,"tiltEnabled",null),t.__decorate([n.aliasOf("tool.layersMode")],E.prototype,"layersMode",void 0),t.__decorate([l.property({dependsOn:["tool.excludedLayers"],cast:f.castForReferenceSetter})],E.prototype,"excludedLayers",null),t.__decorate([l.property({dependsOn:["tool.excludeGroundSurface"],nonNullable:!0})],E.prototype,"excludeGroundSurface",null),E=t.__decorate([a.subclass("esri.widgets.slice.SliceViewModel")],E),E}));

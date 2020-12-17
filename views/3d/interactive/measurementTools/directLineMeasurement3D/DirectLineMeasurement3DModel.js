/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["../../../../../chunks/_rollupPluginBabelHelpers","../../../../../chunks/tslib.es6","../../../../../core/has","../../../../../core/maybe","../../../../../core/Logger","../../../../../core/accessorSupport/ensureType","../../../../../core/accessorSupport/decorators/property","../../../../../core/accessorSupport/decorators/aliasOf","../../../../../core/accessorSupport/decorators/subclass","../../../../../core/urlUtils","../../../../../core/uuid","../../../../../portal/support/resourceExtension","../../../../../core/Accessor","../../../../../geometry/Point","../../../../../geometry/Polyline","../../../../../intl/locale","../../../../../core/mathUtils","../../../../../intl/messages","../../../../../intl","../../../../../chunks/vec3f64","../../../../../chunks/vec3","../../../../../core/Handles","../../../../../core/watchUtils","../../../../../geometry/projectionEllipsoid","../../../../../geometry/projection","../../../../../core/Quantity","../../../../../geometry/support/geodesicUtils","../../../../../geometry/geometryEngine","../../../support/PropertiesPool","../support/UnitNormalizer","../../graphics/DirectLineMeasurement3D"],(function(e,t,o,n,s,i,r,a,c,d,l,u,p,h,m,_,f,g,P,y,v,M,S,D,L,b,w,z,k,E,O){"use strict";let G=function(t){function o(){var o;return(o=t.apply(this,arguments)||this)._tempStartPosition=y.create(),o._tempEndPosition=y.create(),o._tempCornerPosition=y.create(),o._unitNormalizer=new E,o._handles=new M,o._propertiesPool=new k.PropertiesPool({startPoint:h,endPoint:h},e._assertThisInitialized(o)),o.model=new O.DirectLineMeasurement3D,o.cursorPoint=null,o.state="initial",o.mode="auto",o.active=!1,o.geodesicMeasurementDistanceThreshold=1e5,o}e._inheritsLoose(o,t);var s=o.prototype;return s.initialize=function(){this._handles.add([this.model.watch("startPoint",(()=>this._updateMeasurement()),!0),this.model.watch("endPoint",(()=>this._updateMeasurement()),!0),this.model.watch("settings",(()=>this._updateMeasurement()),!0)],"model"),g.fetchMessageBundle("esri/core/t9n/Units").then((e=>{this.messages=e})),this._handles.add(_.onLocaleChange((async()=>{this.messages=await g.fetchMessageBundle("esri/core/t9n/Units")}))),this._handles.add(S.init(this.sceneView,"spatialReference",(e=>{const t=D.getSphericalPCPF(e),o=t===D.SphericalECEFSpatialReference?D.WGS84ECEFSpatialReference:t;this._sphericalPCPF=o;const n=L.canProjectWithoutEngine(e,o);this._unitNormalizer.spatialReference=n?o:e})),"scene-view"),this.reset()},s.destroy=function(){this._handles.destroy(),this._handles=null,this._propertiesPool.destroy(),this._propertiesPool=null,this.model.destroy()},s.reset=function(){this.clearMeasurement()},s.clearMeasurement=function(){this.state="initial",this.startPoint=null,this.endPoint=null,this.cursorPoint=null,this._clearOverride("measurementSurfaceLocation"),this._updateMeasurement()},s.finishMeasurement=function(){if(!this._isOverridden("measurementSurfaceLocation")){const e=this.measurementSurfaceLocation,t="camera-dependent"===e?this.sceneView.state.camera.aboveGround?"above-the-surface":"below-the-surface":e;this._override("measurementSurfaceLocation",t)}this.state="measured"},s._fallbackGeodesicAngle=function(e,t){return e/D.getReferenceEllipsoid(t).metersPerDegree},s._fallbackGeodesicDistance=function(e,t,o){if(L.projectPointToWGS84ComparableLonLat(e,C)){L.projectPointToWGS84ComparableLonLat(t,T);const e=f.deg2rad(C[0]),o=f.deg2rad(C[1]),n=f.deg2rad(T[0]),s=f.deg2rad(T[1]),i=Math.abs(n-e),r=f.acosClamped(Math.sin(o)*Math.sin(s)+Math.cos(o)*Math.cos(s)*Math.cos(i)),a=f.rad2deg(r),c={distance:0};return w.inverseGeodeticSolver(c,[C[0],C[1]],[T[0],T[1]]),{distance:c.distance,angle:a}}{const t=e.spatialReference,n=o;return{distance:n,angle:this._fallbackGeodesicAngle(n,t)}}},s._exactGeodesicDistanceAndAngle=function(e,t,o){const n=e.spatialReference,s=new m({paths:[e,t],spatialReference:n}),i=n.isGeographic&&w.isSupported(n)?w.geodesicLengths([s],"meters")[0]:n.isWebMercator?z.geodesicLength(s,"meters"):void 0,{distance:r,angle:a}=i?{distance:i,angle:this._fallbackGeodesicAngle(i,n)}:this._fallbackGeodesicDistance(e,t,o);return{distance:new b(r,"meters"),angle:new b(a,"degrees")}},s._euclideanDistances=function(e,t){e.z>t.z&&(e=[e,e=t][0]);const o=e.clone();o.z=t.z;const n=this._tempStartPosition,s=this._tempEndPosition,i=this._tempCornerPosition,r=this.sceneView.spatialReference,a=this._sphericalPCPF,c=L.canProjectWithoutEngine(r,a)?a:r;L.projectPointToVector(e,n,c),L.projectPointToVector(t,s,c),L.projectPointToVector(o,i,c);const d=v.distance(n,s),l=v.distance(i,s),u=Math.abs(t.z-e.z),p=e=>this._unitNormalizer.normalizeDistance(e),h=p(d),m=p(l),_=p(u);return{direct:new b(h,"meters"),horizontal:new b(m,"meters"),vertical:new b(_,"meters")}},s._updateMeasurement=function(){if(n.isNone(this.startPoint)||n.isNone(this.endPoint))return void(this.model.measurement=null);const e=this._euclideanDistances(this.startPoint,this.endPoint),t=this._exactGeodesicDistanceAndAngle(this.startPoint,this.endPoint,e.horizontal.value);this.model.measurement={directDistance:e.direct,horizontalDistance:e.horizontal,verticalDistance:e.vertical,geodesicDistance:t.distance,geodesicAngle:t.angle}},e._createClass(o,[{key:"startPointSurfaceLocation",set:function(e){this._set("startPointSurfaceLocation",e),this._updateMeasurement()}},{key:"endPointSurfaceLocation",set:function(e){this._set("endPointSurfaceLocation",e),this._updateMeasurement()}},{key:"measurementSurfaceLocation",get:function(){const e=this.startPointSurfaceLocation,t=this.endPointSurfaceLocation;return null==e||null==t||"above-the-surface"===e&&"below-the-surface"===t||"below-the-surface"===e&&"above-the-surface"===t||"on-the-surface"===e&&"on-the-surface"===t?"camera-dependent":"above-the-surface"===e||"above-the-surface"===t?"above-the-surface":"below-the-surface"}},{key:"validMeasurement",get:function(){return n.isSome(this.model.startPoint)&&n.isSome(this.model.endPoint)}},{key:"isMeasuring",get:function(){return!!this.startPoint}},{key:"geodesicDistanceExceeded",get:function(){return n.isSome(this.model.measurement)&&this.model.measurement.horizontalDistance&&this.model.measurement.horizontalDistance.value>this.geodesicMeasurementDistanceThreshold}},{key:"measurementMode",get:function(){let e=this.mode;return"auto"===e&&(e="euclidean","degrees"!==this.unit&&"degrees-minutes-seconds"!==this.unit||(e="geodesic"),this.geodesicDistanceExceeded&&(e="geodesic")),e}}]),o}(p);t.__decorate([r.property()],G.prototype,"messages",void 0),t.__decorate([r.property({constructOnly:!0})],G.prototype,"sceneView",void 0),t.__decorate([r.property()],G.prototype,"model",void 0),t.__decorate([a.aliasOf("model.startPoint")],G.prototype,"startPoint",void 0),t.__decorate([r.property({value:null})],G.prototype,"startPointSurfaceLocation",null),t.__decorate([a.aliasOf("model.endPoint")],G.prototype,"endPoint",void 0),t.__decorate([r.property({value:null})],G.prototype,"endPointSurfaceLocation",null),t.__decorate([r.property({dependsOn:["startPointSurfaceLocation","endPointSurfaceLocation"]})],G.prototype,"measurementSurfaceLocation",null),t.__decorate([r.property()],G.prototype,"cursorPoint",void 0),t.__decorate([r.property()],G.prototype,"state",void 0),t.__decorate([r.property()],G.prototype,"mode",void 0),t.__decorate([a.aliasOf("model.settings.unit")],G.prototype,"unit",void 0),t.__decorate([r.property()],G.prototype,"active",void 0),t.__decorate([r.property({readOnly:!0,dependsOn:["model.startPoint","model.endPoint"]})],G.prototype,"validMeasurement",null),t.__decorate([r.property({readOnly:!0,dependsOn:["startPoint"]})],G.prototype,"isMeasuring",null),t.__decorate([r.property()],G.prototype,"geodesicMeasurementDistanceThreshold",void 0),t.__decorate([r.property({readOnly:!0,dependsOn:["model.measurement","geodesicMeasurementDistanceThreshold"]})],G.prototype,"geodesicDistanceExceeded",null),t.__decorate([r.property({readOnly:!0,dependsOn:["unit","geodesicDistanceExceeded"]})],G.prototype,"measurementMode",null),G=t.__decorate([c.subclass("esri.views.3d.interactive.measurementTools.directLineMeasurement3D.DirectLineMeasurement3DModel")],G);const C=y.create(),T=y.create();return G}));

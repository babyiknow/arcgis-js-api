/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../chunks/tslib.es6","../../../../core/has","../../../../core/maybe","../../../../core/Logger","../../../../core/accessorSupport/ensureType","../../../../core/accessorSupport/decorators/property","../../../../core/accessorSupport/decorators/aliasOf","../../../../core/accessorSupport/decorators/subclass","../../../../core/urlUtils","../../../../core/uuid","../../../../portal/support/resourceExtension","../../../../core/promiseUtils","../../../../core/Accessor","../../../../tasks/operations/query","../../../../layers/graphics/dehydratedFeatures","../../support/PBFDecoder"],(function(e,r,t,o,s,u,a,c,n,i,y,p,l,d,h,f,_,F){"use strict";let b=function(e){function t(){return e.apply(this,arguments)||this}r._inheritsLoose(t,e);var o=t.prototype;return o.queryFeatureCount=function(e,r){return this.layer.queryFeatureCount(e,r)},o.destroy=function(){this._decoder=s.destroyMaybe(this._decoder)},r._createClass(t,[{key:"queryFeaturesDehydrated",get:function(){const e=this.layer.capabilities,r=e&&e.query;if(r&&r.supportsFormatPBF){var t,o;s.isNone(this._decoder)&&(this._decoder=new F.PBFDecoder(this.scheduler));const e={sourceSpatialReference:null!=(t=null==(o=this.layer.spatialReference)?void 0:o.toJSON())?t:null,applyTransform:!0,maxStringAttributeLength:1024};return(r,t)=>f.runQuery(this.layer.parsedUrl,r,"pbf",t).then((r=>(d.throwIfAborted(t),s.isSome(this._decoder)?this._decoder.invoke({buffer:r.data,options:e},t.signal):d.reject(d.createAbortError()))))}return(e,r)=>f.executeQuery(this.layer.parsedUrl,e,this.layer.spatialReference,r).then((e=>_.fromFeatureSetJSON(e.data)))}}]),t}(h);t.__decorate([c.property({constructOnly:!0})],b.prototype,"layer",void 0),t.__decorate([c.property({constructOnly:!0})],b.prototype,"scheduler",void 0),t.__decorate([c.property({readOnly:!0,dependsOn:["layer.capabilities.query.supportsFormatPBF"]})],b.prototype,"queryFeaturesDehydrated",null),b=t.__decorate([i.subclass("esri.views.3d.layers.support.featureTileQuery3D.FeatureTileServiceQuery3D")],b);let v=function(e){function t(){return e.apply(this,arguments)||this}return r._inheritsLoose(t,e),t.prototype.queryFeaturesDehydrated=function(e,r){return this.layer.queryFeatures(e,r)},t}(h);t.__decorate([c.property({constructOnly:!0})],v.prototype,"layer",void 0),v=t.__decorate([i.subclass("esri.views.3d.layers.support.featureTileQuery3D.FeatureTileServiceQuery3D")],v);let q=function(e){function t(){return e.apply(this,arguments)||this}r._inheritsLoose(t,e);var o=t.prototype;return o.destroy=function(){},o.queryFeaturesDehydrated=function(e,r){return this.source.queryFeaturesJSON(e,r).then(_.fromFeatureSetJSON,(t=>{if(t&&"query-features-json:unsupported"===t.name)return this.layer.queryFeatures(e,r);throw t}))},o.queryFeatureCount=function(e,r){return this.layer.queryFeatureCount(e,r)},t}(h);t.__decorate([c.property({constructOnly:!0})],q.prototype,"layer",void 0),t.__decorate([n.aliasOf("layer.source")],q.prototype,"source",void 0),q=t.__decorate([i.subclass("esri.views.3d.layers.support.featureTileQuery3D.FeatureTileClientQuery3D")],q),e.createFeatureTileQuery3D=function(e,r){switch(e.source.type){case"feature-layer":return new b({layer:e,scheduler:r});case"memory":case"csv":case"geojson":return new q({layer:e});case"ogc-feature":return new v({layer:e});case"stream-layer":throw new Error("Tile based queries unsupported for stream sources")}},Object.defineProperty(e,"__esModule",{value:!0})}));

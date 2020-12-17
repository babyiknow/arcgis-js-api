/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../core/has","../../../core/maybe","../../../core/Logger","../../../core/accessorSupport/ensureType","../../../core/accessorSupport/decorators/property","../../../core/accessorSupport/decorators/subclass","../../../core/Error","../../../core/urlUtils","../../../core/uuid","../../../portal/support/resourceExtension","../../../core/promiseUtils","../../../geometry/Extent","../../../geometry/Polygon","../../../geometry/support/typeUtils","../../../geometry","../../../core/Loadable","../../../core/workers/workers","../../../tasks/support/FeatureSet","../../support/TimeInfo","../data/QueryEngineCapabilities"],(function(e,t,o,r,s,n,i,u,a,l,c,p,d,h,y,f,S,m,_,g,O,b,E){"use strict";const N=n.getLogger("esri.layers.graphics.sources.GeoJSONSource");e.GeoJSONSource=function(e){function o(){var t;return(t=e.apply(this,arguments)||this).type="geojson",t.fullExtent=null,t.timeInfo=null,t}t._inheritsLoose(o,e);var n=o.prototype;return n.load=function(e){const t=s.isSome(e)?e.signal:null;return this.addResolvingPromise(this._startWorker(t)),h.resolve(this)},n.destroy=function(){var e;null==(e=this._connection)||e.close(),this._connection=null},n.applyEdits=function(e){return this.load().then((()=>this._applyEdits(e)))},n.openPorts=function(){return this.load().then((()=>this._connection.openPorts()))},n.queryFeatures=function(e,t={}){return this.load(t).then((()=>this._connection.invoke("queryFeatures",e?e.toJSON():null,t))).then((e=>O.fromJSON(e)))},n.queryFeaturesJSON=function(e,t={}){return this.load(t).then((()=>this._connection.invoke("queryFeatures",e?e.toJSON():null,t)))},n.queryFeatureCount=function(e,t={}){return this.load(t).then((()=>this._connection.invoke("queryFeatureCount",e?e.toJSON():null,t)))},n.queryObjectIds=function(e,t={}){return this.load(t).then((()=>this._connection.invoke("queryObjectIds",e?e.toJSON():null,t)))},n.queryExtent=function(e,t={}){return this.load(t).then((()=>this._connection.invoke("queryExtent",e?e.toJSON():null,t))).then((e=>({count:e.count,extent:y.fromJSON(e.extent)})))},n._applyEdits=function(e){if(!this._connection)throw new l("geojson-layer-source:edit-failure","Memory source not loaded");const t=this.layer.objectIdField,o=[],r=[],s=[];if(e.addFeatures)for(const t of e.addFeatures)o.push(this._serializeFeature(t));if(e.deleteFeatures)for(const o of e.deleteFeatures)"objectId"in o&&null!=o.objectId?r.push(o.objectId):"attributes"in o&&null!=o.attributes[t]&&r.push(o.attributes[t]);if(e.updateFeatures)for(const t of e.updateFeatures)s.push(this._serializeFeature(t));return this._connection.invoke("applyEdits",{adds:o,updates:s,deletes:r}).then((({fullExtent:e,timeExtent:t,featureEditResults:o})=>{if(this.fullExtent=e,this.timeInfo){const e=this.timeInfo.clone();e.read({timeExtent:t}),this.timeInfo=e}return this._createEditsResult(o)}))},n._createEditsResult=function(e){return{addFeatureResults:e.addResults?e.addResults.map(this._createFeatureEditResult,this):[],updateFeatureResults:e.updateResults?e.updateResults.map(this._createFeatureEditResult,this):[],deleteFeatureResults:e.deleteResults?e.deleteResults.map(this._createFeatureEditResult,this):[],addAttachmentResults:[],updateAttachmentResults:[],deleteAttachmentResults:[]}},n._createFeatureEditResult=function(e){const t=!0===e.success?null:e.error||{code:void 0,description:void 0};return{objectId:e.objectId,globalId:e.globalId,error:t?new l("geojson-layer-source:edit-failure",t.description,{code:t.code}):null}},n._serializeFeature=function(e){const{attributes:t}=e,o=this._geometryForSerialization(e);return o?{geometry:o.toJSON(),attributes:t}:{attributes:t}},n._geometryForSerialization=function(e){const{geometry:t}=e;return s.isNone(t)?null:"mesh"===t.type||"extent"===t.type?f.fromExtent(t.extent):t},n._startWorker=async function(e){this._connection=await g.open("GeoJSONSourceWorker",{strategy:r("feature-layers-workers")?"dedicated":"local",signal:e});const{fields:t,spatialReference:o,hasZ:s,geometryType:n,objectIdField:i,url:u,timeInfo:a}=this.layer,l="defaults"===this.layer.originOf("spatialReference"),c={url:u,fields:t&&t.map((e=>e.toJSON())),geometryType:S.typeKebabDictionary.toJSON(n),hasZ:s,objectIdField:i,timeInfo:a?a.toJSON():null,spatialReference:l?null:o&&o.toJSON()},p=await this._connection.invoke("load",c,{signal:e});for(const e of p.warnings)N.warn(e.message,{layer:this.layer,warning:e});p.featureErrors.length&&N.warn(`Encountered ${p.featureErrors.length} validation errors while loading features`,p.featureErrors),this.fullExtent=y.fromJSON(p.layerDefinition.extent),this.timeInfo=b.fromJSON(p.layerDefinition.timeInfo),this.sourceJSON=p.layerDefinition,this.capabilities={attachment:null,data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:p.layerDefinition.hasZ},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:!0,supportsDelete:!0,supportsEditing:!0,supportsChangeTracking:!1,supportsQuery:!0,supportsQueryAttachments:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:!0,supportsExceedsLimitStatistics:!0},query:E.queryCapabilities,queryRelated:{supportsCount:!0,supportsOrderBy:!0,supportsPagination:!0},editing:{supportsGeometryUpdate:!0,supportsGlobalId:!1,supportsRollbackOnFailure:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1,supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1}}},o}(_),o.__decorate([u.property()],e.GeoJSONSource.prototype,"capabilities",void 0),o.__decorate([u.property()],e.GeoJSONSource.prototype,"type",void 0),o.__decorate([u.property()],e.GeoJSONSource.prototype,"fullExtent",void 0),o.__decorate([u.property({constructOnly:!0})],e.GeoJSONSource.prototype,"layer",void 0),o.__decorate([u.property()],e.GeoJSONSource.prototype,"sourceJSON",void 0),o.__decorate([u.property()],e.GeoJSONSource.prototype,"timeInfo",void 0),e.GeoJSONSource=o.__decorate([a.subclass("esri.layers.graphics.sources.GeoJSONSource")],e.GeoJSONSource);var F=e.GeoJSONSource;e.default=F,Object.defineProperty(e,"__esModule",{value:!0})}));

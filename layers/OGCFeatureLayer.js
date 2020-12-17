/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["../chunks/_rollupPluginBabelHelpers","../chunks/tslib.es6","../core/has","../core/Logger","../core/accessorSupport/ensureType","../core/accessorSupport/decorators/property","../core/accessorSupport/decorators/subclass","../core/urlUtils","../core/uuid","../portal/support/resourceExtension","../geometry/SpatialReference","../geometry/Extent","../geometry/support/typeUtils","../geometry","./support/fieldUtils","../PopupTemplate","./Layer","../core/ReadOnlyMultiOriginJSONSupport","../symbols/support/ElevationInfo","../renderers/Renderer","../renderers/ClassBreaksRenderer","../renderers/UniqueValueRenderer","../renderers/DictionaryRenderer","../renderers/DotDensityRenderer","../renderers/HeatmapRenderer","../renderers/SimpleRenderer","../renderers/support/types","../renderers/support/jsonUtils","./support/Field","./support/FieldsIndex","./mixins/BlendLayer","./mixins/RefreshableLayer","./mixins/ScaleRangeLayer","./mixins/TemporalLayer","./support/FeatureReduction","./support/LabelClass","./support/FeatureReductionCluster","./support/FeatureReductionSelection","./support/FeatureType","../support/popupUtils","../tasks/support/Query","./graphics/sources/OGCFeatureSource"],(function(e,t,r,o,p,s,n,i,l,u,a,d,y,c,f,_,h,v,g,m,O,R,S,b,F,x,I,T,E,D,L,B,C,k,P,M,U,Q,q,A,G,Z){"use strict";let j=function(t){function r(e){var r;return(r=t.call(this,e)||this).collectionId=null,r.copyright=null,r.definitionExpression=null,r.displayField=null,r.elevationInfo=null,r.featureReduction=null,r.fullExtent=null,r.geometryType=null,r.hasZ=void 0,r.labelingInfo=null,r.labelsVisible=!0,r.legendEnabled=!0,r.objectIdField=null,r.popupEnabled=!0,r.popupTemplate=null,r.screenSizePerspectiveEnabled=!0,r.source=null,r.spatialReference=a.WGS84,r.type="ogc-feature",r.typeIdField=null,r.types=null,r.url=null,r}e._inheritsLoose(r,t);var o=r.prototype;return o.load=function(e){const t=new Z.default({layer:this});return this._set("source",t),this.addResolvingPromise(t.load(e).then((()=>{const{geometryType:e,hasZ:t,objectIdField:r}=this.source.layerDefinition;this.set({geometryType:y.typeKebabDictionary.fromJSON(e),hasZ:t,objectIdField:r}),f.fixRendererFields(this.renderer,this.fields),f.fixTimeInfoFields(this.timeInfo,this.fields)}))),this.when()},o.on=function(e,r){return t.prototype.on.call(this,e,r)},o.createPopupTemplate=function(e){return A.createPopupTemplate(this,e)},o.createQuery=function(){return new G},o.getField=function(e){return this.fieldsIndex.get(e)},o.getFieldDomain=function(e,t){var r;let o,p=!1;const s=null==t||null==(r=t.feature)?void 0:r.attributes,n=this.typeIdField&&(null==s?void 0:s[this.typeIdField]);return null!=n&&this.types&&(p=this.types.some((t=>{var r,p;return t.id==n&&(o=null==(r=t.domains)?void 0:r[e],"inherited"===(null==(p=o)?void 0:p.type)&&(o=this._getLayerDomain(e)),!0)}))),p||o||(o=this._getLayerDomain(e)),o},o.queryFeatures=function(e,t){return this.load().then((()=>this.source.queryFeatures(G.from(e)||this.createQuery(),t))).then((e=>{var t;return null==e||null==(t=e.features)||t.forEach((e=>{e.layer=e.sourceLayer=this})),e}))},o._getLayerDomain=function(e){if(!this.fields)return null;for(const t of this.fields)if(t.name===e&&t.domain)return t.domain;return null},e._createClass(r,[{key:"capabilities",get:function(){return{attachment:null,data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:!!this.hasZ},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:!1,supportsDelete:!1,supportsEditing:!1,supportsChangeTracking:!1,supportsQuery:!0,supportsQueryAttachments:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:!1,supportsExceedsLimitStatistics:!1},query:{maxRecordCount:1e4,maxRecordCountFactor:void 0,standardMaxRecordCount:void 0,supportsCacheHint:!1,supportsCentroid:!1,supportsDisjointSpatialRelationship:!1,supportsDistance:!1,supportsDistinct:!1,supportsExtent:!1,supportsFormatPBF:!1,supportsGeometryProperties:!1,supportsHavingClause:!1,supportsHistoricMoment:!1,supportsMaxRecordCountFactor:!1,supportsOrderBy:!1,supportsPagination:!1,supportsPercentileStatistics:!1,supportsQuantization:!1,supportsQuantizationEditMode:!1,supportsQueryByOthers:!1,supportsQueryGeometry:!1,supportsResultType:!1,supportsStandardizedQueriesOnly:!1,supportsStatistics:!1,supportsSqlExpression:!1,tileMaxRecordCount:void 0},queryRelated:{supportsCount:!1,supportsOrderBy:!1,supportsPagination:!1},editing:{supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsGeometryUpdate:!1,supportsGlobalId:!1,supportsRollbackOnFailure:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1,supportsUploadWithItemId:!1,supportsUpdateWithoutM:!1}}}},{key:"defaultPopupTemplate",get:function(){return this.createPopupTemplate()}},{key:"description",get:function(){var e,t,r;return null!=(e=null==(t=this.source)||null==(r=t.collection)?void 0:r.description)?e:null}},{key:"fields",get:function(){var e,t,r;const o=null==(e=this.source)||null==(t=e.layerDefinition)?void 0:t.fields;return null!=(r=null==o?void 0:o.map((e=>E.fromJSON(e))))?r:null},set:function(e){e?this._override("fields",e):this._clearOverride("fields")}},{key:"fieldsIndex",get:function(){return new D(this.fields)}},{key:"renderer",get:function(){var e,t,r;const o=null==(e=this.source)||null==(t=e.layerDefinition)||null==(r=t.drawingInfo)?void 0:r.renderer;return o?T.read(o,null,{origin:"service"}):null},set:function(e){e?(f.fixRendererFields(e,this.fields),this._override("renderer",e)):this._clearOverride("renderer")}},{key:"spatialReferences",get:function(){var e,t;return null==(e=this.source)||null==(t=e.collection)?void 0:t.crs}},{key:"title",get:function(){var e,t;return null==(e=this.source)||null==(t=e.collection)?void 0:t.title},set:function(e){e?this._override("title",e):this._clearOverride("title")}}]),r}(L.BlendLayer(k.TemporalLayer(C.ScaleRangeLayer(B.RefreshableLayer(v.ReadOnlyMultiOriginJSONMixin(h))))));return t.__decorate([s.property({readOnly:!0,dependsOn:["hasZ"],autoTracked:!1})],j.prototype,"capabilities",null),t.__decorate([s.property({type:String})],j.prototype,"collectionId",void 0),t.__decorate([s.property({type:String})],j.prototype,"copyright",void 0),t.__decorate([s.property({readOnly:!0,dependsOn:["fields","title"]})],j.prototype,"defaultPopupTemplate",null),t.__decorate([s.property({type:String})],j.prototype,"definitionExpression",void 0),t.__decorate([s.property({dependsOn:["source.collection"],readOnly:!0,type:String})],j.prototype,"description",null),t.__decorate([s.property({type:String})],j.prototype,"displayField",void 0),t.__decorate([s.property({type:g})],j.prototype,"elevationInfo",void 0),t.__decorate([s.property({types:{key:"type",base:P.default,typeMap:{selection:Q,cluster:U}}})],j.prototype,"featureReduction",void 0),t.__decorate([s.property({dependsOn:["source.layerDefinition"],type:[E]})],j.prototype,"fields",null),t.__decorate([s.property({readOnly:!0,dependsOn:["fields"]})],j.prototype,"fieldsIndex",null),t.__decorate([s.property({type:d,aliasOf:"source.fullExtent"})],j.prototype,"fullExtent",void 0),t.__decorate([s.property({type:["point","polygon","polyline","multipoint"]})],j.prototype,"geometryType",void 0),t.__decorate([s.property({type:Boolean})],j.prototype,"hasZ",void 0),t.__decorate([s.property({type:String})],j.prototype,"id",void 0),t.__decorate([s.property({type:[M]})],j.prototype,"labelingInfo",void 0),t.__decorate([s.property({type:Boolean})],j.prototype,"labelsVisible",void 0),t.__decorate([s.property({type:Boolean})],j.prototype,"legendEnabled",void 0),t.__decorate([s.property({type:["show","hide"]})],j.prototype,"listMode",void 0),t.__decorate([s.property({type:String})],j.prototype,"objectIdField",void 0),t.__decorate([s.property({type:Boolean})],j.prototype,"popupEnabled",void 0),t.__decorate([s.property({type:_})],j.prototype,"popupTemplate",void 0),t.__decorate([s.property({dependsOn:["source.layerDefinition"],types:I.rendererTypes})],j.prototype,"renderer",null),t.__decorate([s.property({type:Boolean})],j.prototype,"screenSizePerspectiveEnabled",void 0),t.__decorate([s.property({readOnly:!0})],j.prototype,"source",void 0),t.__decorate([s.property({type:a,readOnly:!0})],j.prototype,"spatialReference",void 0),t.__decorate([s.property({dependsOn:["source.collection"],readOnly:!0,type:[String]})],j.prototype,"spatialReferences",null),t.__decorate([s.property({dependsOn:["source.collection"]})],j.prototype,"title",null),t.__decorate([s.property({readOnly:!0})],j.prototype,"type",void 0),t.__decorate([s.property({type:String,readOnly:!0})],j.prototype,"typeIdField",void 0),t.__decorate([s.property({type:[q]})],j.prototype,"types",void 0),t.__decorate([s.property({type:String})],j.prototype,"url",void 0),j=t.__decorate([n.subclass("esri.layers.OGCFeatureLayer")],j),j}));

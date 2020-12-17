/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../../core/maybe","../../core/Logger","../../core/Error","../../geometry/support/spatialReferenceUtils","../../request","../support/fieldType","../graphics/OptimizedFeatureSet","../graphics/featureConversionUtils","../support/FieldsIndex","../../tasks/support/FeatureSet","../graphics/data/projectionSupport","../graphics/sources/geojson/geojson","../graphics/sources/support/clientSideDefaults"],(function(e,t,i,n,r,a,o,l,s,d,c,u,f,m){"use strict";const y=i.getLogger("esri.layers.graphics.sources.ogcfeature"),p="json";async function g(e,t,i){const n=await F(e,t,i);return s.convertToFeatureSet(n)}async function F(e,i,n){var o;const{capabilities:{query:{maxRecordCount:d}},collectionId:c,layerDefinition:m,url:y}=e,g=`${y}/collections/${c}/items`,{geometry:F,num:I,start:b,timeExtent:w,where:T}=i,S=t.isSome(i.outSpatialReference)?i.outSpatialReference:r.WGS84,h=function(e){if(t.isNone(e))return null;const{xmin:i,ymin:n,xmax:r,ymax:a}=e;return`${i},${n},${r},${a}`}(u.project(F,r.WGS84)),j=function(e){if(t.isNone(e))return null;const{start:i,end:n}=e;return`${i?i.toISOString():".."}/${n?n.toISOString():".."}`}(w),v=function(e){if(t.isNone(e)||!e||"1=1"===e)return null;return e}(T),q=null!=I?I:null!=b&&void 0!==b?10:d,{data:$}=await a(g,{...n,query:{bbox:h,datetime:j,query:v,limit:q,startindex:b,f:p}}),k=null==(o=$.links)?void 0:o.filter((e=>"next"===e.rel)),O=0!==(null==k?void 0:k.length),{fields:x,globalIdField:D,hasM:N,hasZ:G,objectIdField:C}=m,Z=m.geometryType,R=f.createOptimizedFeatures($,{geometryType:Z,hasZ:G,objectIdFieldName:C});if(!r.equals(S,r.WGS84))for(const e of R)e.geometry&&(e.geometry=s.convertFromGeometry(u.project(s.convertToGeometry(e.geometry,Z,G,!1),r.WGS84,S)));for(const e of R)e.objectId=e.attributes[C];const W=new l;return W.exceededTransferLimit=O,W.features=R,W.fields=x,W.geometryType=Z,W.globalIdFieldName=D,W.hasM=N,W.hasZ=G,W.objectIdFieldName=C,W.spatialReference=S||r.WGS84,W}e.getCollectionDefinition=async function(e,t,i,l,s=5){try{await u.checkProjectionSupport(r.WGS84,i.spatialReference)}catch{throw new n("ogc-feature-layer:projection-not-supported","Projection not supported")}const c=`${e}/collections/${t}/items`,{data:g}=await a(c,{signal:l,query:{limit:s,f:p}});await f.validateGeoJSON(g);const F=f.inferLayerProperties(g,{geometryType:i.geometryType}),I=i.fields||F.fields||[],b=null!=i.hasZ?i.hasZ:F.hasZ,w=F.geometryType,T=i.objectIdField||F.objectIdFieldName||"OBJECTID";let S=i.timeInfo;const h=I.find((e=>e.name===T));if(!h){if(!F.objectIdFieldType)throw new n("ogc-feature-layer:missing-feature-id","Collection geojson require a feature id as a unique identifier");I.unshift({name:T,alias:T,type:"esriFieldTypeOID",editable:!1,nullable:!1})}else h.type="esriFieldTypeOID",h.editable=!1,h.nullable=!1;if(T!==F.objectIdFieldName){const e=I.find((e=>e.name===F.objectIdFieldName));e&&(e.type="esriFieldTypeInteger")}if(!w)throw new n("ogc-feature-layer:missing-property","geometryType not set and couldn't be inferred from the provided features");I===F.fields&&F.unknownFields.length>0&&y.warn({name:"ogc-feature-layer:unknown-field-types",message:"Some fields types couldn't be inferred from the features and were dropped",details:{unknownFields:F.unknownFields}});for(const e of I){if(null==e.name&&(e.name=e.alias),null==e.alias&&(e.alias=e.name),"esriFieldTypeOID"!==e.type&&"esriFieldTypeGlobalID"!==e.type&&(e.editable=null==e.editable||!!e.editable,e.nullable=null==e.nullable||!!e.nullable),!e.name)throw new n("ogc-feature-layer:invalid-field-name","field name is missing",{field:e});if(-1===o.kebabDict.jsonValues.indexOf(e.type))throw new n("ogc-feature-layer:invalid-field-type",`invalid type for field "${e.name}"`,{field:e})}if(S){const e=new d(I);if(S.startTimeField){const t=e.get(S.startTimeField);t?(S.startTimeField=t.name,t.type="esriFieldTypeDate"):S.startTimeField=null}if(S.endTimeField){const t=e.get(S.endTimeField);t?(S.endTimeField=t.name,t.type="esriFieldTypeDate"):S.endTimeField=null}if(S.trackIdField){const t=e.get(S.trackIdField);t?S.trackIdField=t.name:(S.trackIdField=null,y.warn({name:"ogc-feature-layer:invalid-timeInfo-trackIdField",message:"trackIdField is missing",details:{timeInfo:S}}))}S.startTimeField||S.endTimeField||(y.warn({name:"ogc-feature-layer:invalid-timeInfo",message:"startTimeField and endTimeField are missing",details:{timeInfo:S}}),S=null)}return{drawingInfo:m.createDrawingInfo(w),geometryType:w,fields:I,hasZ:!!b,objectIdField:T,timeInfo:S}},e.getServerCollection=async function(e,t,i){const n=`${e}/collections/${t}`,{data:r}=await a(n,{signal:i,query:{f:p}});return r},e.getServerCollections=async function(e,t){const i=`${e}/collections`,{data:n}=await a(i,{signal:t,query:{f:p}});return n},e.getServerConformance=async function(e,t){const i=`${e}/conformance`,{data:n}=await a(i,{signal:t,query:{f:p}});return n},e.getServerLandingPage=async function(e,t){const{data:i}=await a(e,{signal:t,query:{f:p}});return i},e.queryFeatureSet=async function(e,t,i){const n=await g(e,t,i);return c.fromJSON(n)},e.queryFeatureSetJSON=g,e.queryOptimizedFeatureSet=F,Object.defineProperty(e,"__esModule",{value:!0})}));

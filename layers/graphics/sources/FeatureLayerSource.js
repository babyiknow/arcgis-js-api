/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../core/has","../../../core/lang","../../../core/object","../../../core/maybe","../../../core/Logger","../../../core/accessorSupport/ensureType","../../../core/accessorSupport/decorators/property","../../../core/accessorSupport/decorators/subclass","../../../core/Error","../../../core/urlUtils","../../../core/uuid","../../../portal/support/resourceExtension","../../../core/promiseUtils","../../../geometry/Extent","../../../request","../../../core/Loadable","../../../TimeExtent","../../../tasks/operations/zscale","../../../tasks/operations/queryAttachments","../../../tasks/QueryTask","./support/clientSideDefaults"],(function(e,t,a,r,s,n,u,o,i,l,c,d,h,y,p,m,f,g,b,F,R,_,q){"use strict";const I=new Set(["Feature Layer","Table"]);let w=function(t){function u(){var e;return(e=t.apply(this,arguments)||this).type="feature-layer",e}e._inheritsLoose(u,t);var o=u.prototype;return o.load=function(e){const t=n.isSome(e)?e.signal:null;return this.addResolvingPromise(this._fetchService(t)),p.resolve(this)},o.addAttachment=async function(e,t){await this.load();const a=e.attributes[this.layer.objectIdField],r=this.layer.parsedUrl.path+"/"+a+"/addAttachment",s=this._getLayerRequestOptions(),n=this._getFormDataForAttachment(t,s.query);try{const e=await f(r,{body:n});return this._createFeatureEditResult(e.data.addAttachmentResult)}catch(e){throw this._createAttachmentErrorResult(a,e)}},o.updateAttachment=async function(e,t,a){await this.load();const r=e.attributes[this.layer.objectIdField],s=this.layer.parsedUrl.path+"/"+r+"/updateAttachment",n=this._getLayerRequestOptions({query:{attachmentId:t}}),u=this._getFormDataForAttachment(a,n.query);try{const e=await f(s,{body:u});return this._createFeatureEditResult(e.data.updateAttachmentResult)}catch(e){throw this._createAttachmentErrorResult(r,e)}},o.applyEdits=async function(e,t){await this.load();const a=e.addFeatures.map(this._serializeFeature,this),r=e.updateFeatures.map(this._serializeFeature,this),s=this._getFeatureIds(e.deleteFeatures);F.unapplyEditsZUnitScaling(a,r,this.layer.spatialReference);const n=[],u=[],o=[...e.deleteAttachments];for(const t of e.addAttachments)n.push(await this._serializeAttachment(t));for(const t of e.updateAttachments)u.push(await this._serializeAttachment(t));const i=n.length||u.length||o.length?{adds:n,updates:u,deletes:o}:null,l=this._getLayerRequestOptions({method:"post",query:{adds:a.length?JSON.stringify(a):null,updates:r.length?JSON.stringify(r):null,deletes:s.length?s.join(","):null,gdbVersion:null==t?void 0:t.gdbVersion,rollbackOnFailure:null==t?void 0:t.rollbackOnFailureEnabled,useGlobalIds:null==t?void 0:t.globalIdUsed,attachments:i&&JSON.stringify(i)}}),c=await f(this.layer.parsedUrl.path+"/applyEdits",l);return this._createEditsResult(c)},o.deleteAttachments=async function(e,t){await this.load();const a=e.attributes[this.layer.objectIdField],r=this.layer.parsedUrl.path+"/"+a+"/deleteAttachments";try{return(await f(r,this._getLayerRequestOptions({query:{attachmentIds:t.join(",")},method:"post"}))).data.deleteAttachmentResults.map(this._createFeatureEditResult)}catch(e){throw this._createAttachmentErrorResult(a,e)}},o.fetchRecomputedExtents=function(e={}){const t=e.signal;return this.load({signal:t}).then((async()=>{const t=this._getLayerRequestOptions({...e,query:{returnUpdates:!0}}),{layerId:a,url:r}=this.layer,{data:s}=await f(`${r}/${a}`,t),{id:n,extent:u,fullExtent:o,timeExtent:i}=s,l=u||o;return{id:n,fullExtent:l&&m.fromJSON(l),timeExtent:i&&b.fromJSON({start:i[0],end:i[1]})}}))},o.queryAttachments=async function(e,t={}){const{parsedUrl:a}=this.layer,r=a.path;await this.load();const s=this._getLayerRequestOptions(t);if(!this.layer.get("capabilities.operations.supportsQueryAttachments")){const{objectIds:t}=e,a=[];for(const e of t){const t=r+"/"+e+"/attachments";a.push(f(t,s))}return p.all(a).then((e=>t.map(((t,a)=>({parentObjectId:t,attachmentInfos:e[a].data.attachmentInfos}))))).then((e=>R.processAttachmentQueryResult(e,r)))}return this.queryTask.executeAttachmentQuery(e,s)},o.queryFeatures=async function(e,t){return await this.load(),this.queryTask.execute(e,{...t,query:{...this.layer.customParameters,...null==t?void 0:t.query}})},o.queryFeaturesJSON=async function(e,t){return await this.load(),this.queryTask.executeJSON(e,{...t,query:{...this.layer.customParameters,...null==t?void 0:t.query}})},o.queryObjectIds=async function(e,t){return await this.load(),this.queryTask.executeForIds(e,{...t,query:{...this.layer.customParameters,...null==t?void 0:t.query}})},o.queryFeatureCount=async function(e,t){return await this.load(),this.queryTask.executeForCount(e,{...t,query:{...this.layer.customParameters,...null==t?void 0:t.query}})},o.queryExtent=async function(e,t){return await this.load(),this.queryTask.executeForExtent(e,{...t,query:{...this.layer.customParameters,...null==t?void 0:t.query}})},o.queryRelatedFeatures=async function(e,t){return await this.load(),this.queryTask.executeRelationshipQuery(e,{...t,query:{...this.layer.customParameters,...null==t?void 0:t.query}})},o.queryRelatedFeaturesCount=async function(e,t){return await this.load(),this.queryTask.executeRelationshipQueryForCount(e,{...t,query:{...this.layer.customParameters,...null==t?void 0:t.query}})},o._fetchService=async function(e){let t=this.layer.sourceJSON;if(!t){const{data:r}=await f(this.layer.parsedUrl.path,this._getLayerRequestOptions({query:a("featurelayer-advanced-symbols")?{returnAdvancedSymbols:!0}:{},signal:e}));t=r}this.sourceJSON=this._patchServiceJSON(t);const r=t.type;if(!I.has(r))throw new c("feature-layer-source:unsupported-type",`Source type "${r}" is not supported`)},o._patchServiceJSON=function(e){var t;if("Table"!==e.type&&e.geometryType&&(null==e||null==(t=e.drawingInfo)||!t.renderer)&&!e.defaultSymbol){const t=q.createDrawingInfo(e.geometryType).renderer;s.setDeepValue("drawingInfo.renderer",t,e)}return e},o._serializeFeature=function(e){const{geometry:t,attributes:a}=e;return n.isNone(t)?{attributes:a}:"mesh"===t.type||"extent"===t.type?null:{geometry:t.toJSON(),attributes:a}},o._serializeAttachment=async function(e){const{feature:t,attachment:a}=e,{globalId:r,name:s,contentType:n,data:u,uploadId:o}=a,i={globalId:r,parentGlobalId:null,contentType:null,name:null,uploadId:null,data:null};if(t&&(i.parentGlobalId="attributes"in t?t.attributes&&t.attributes[this.layer.globalIdField]:t.globalId),o)i.uploadId=o;else if(u){const e=await async function(e){if("string"==typeof e){return d.dataComponents(e)||{data:e}}return p.create(((t,a)=>{const r=new FileReader;r.readAsDataURL(e),r.onload=()=>t(d.dataComponents(r.result)),r.onerror=e=>a(e)}))}(u);i.contentType=e.mediaType,i.data=e.data,u instanceof File&&(i.name=u.name)}return s&&(i.name=s),n&&(i.contentType=n),i},o._getFeatureIds=function(e){const t=e[0];return t?"objectId"in t?this._getIdsFromFeatureIdentifier(e):this._getIdsFromFeatures(e):[]},o._getIdsFromFeatures=function(e){const t=this.layer.objectIdField;return e.map((e=>e.attributes&&e.attributes[t]))},o._getIdsFromFeatureIdentifier=function(e){return e.map((e=>e.objectId))},o._createEditsResult=function(e){const t=e.data,a=e.data&&e.data.attachments;return{addFeatureResults:t.addResults?t.addResults.map(this._createFeatureEditResult,this):[],updateFeatureResults:t.updateResults?t.updateResults.map(this._createFeatureEditResult,this):[],deleteFeatureResults:t.deleteResults?t.deleteResults.map(this._createFeatureEditResult,this):[],addAttachmentResults:a&&a.addResults?a.addResults.map(this._createFeatureEditResult,this):[],updateAttachmentResults:a&&a.updateResults?a.updateResults.map(this._createFeatureEditResult,this):[],deleteAttachmentResults:a&&a.deleteResults?a.deleteResults.map(this._createFeatureEditResult,this):[]}},o._createFeatureEditResult=function(e){const t=!0===e.success?null:e.error||{code:void 0,description:void 0};return{objectId:e.objectId,globalId:e.globalId,error:t?new c("feature-layer-source:edit-failure",t.description,{code:t.code}):null}},o._createAttachmentErrorResult=function(e,t){const a=t.details.messages&&t.details.messages[0]||t.message,r=t.details.httpStatus||t.details.messageCode;return{objectId:e,globalId:null,error:new c("feature-layer-source:attachment-failure",a,{code:r})}},o._getFormDataForAttachment=function(e,t){const a=e instanceof FormData?e:e&&e.elements?new FormData(e):null;if(a)for(const e in t){const r=t[e];null!=r&&(a.set?a.set(e,r):a.append(e,r))}return a},o._getLayerRequestOptions=function(e={}){const{parsedUrl:t,gdbVersion:a,dynamicDataSource:s}=this.layer;return{...e,query:r.fixJson({gdbVersion:a,layer:s?JSON.stringify({source:s}):void 0,...t.query,f:"json",...this.layer.customParameters,...null==e?void 0:e.query}),responseType:"json"}},e._createClass(u,[{key:"queryTask",get:function(){const{capabilities:{query:{supportsFormatPBF:e}},parsedUrl:t,dynamicDataSource:r,gdbVersion:s,spatialReference:n,fieldsIndex:u}=this.layer,o=a("featurelayer-pbf")&&e?"pbf":"json";return new _({url:t.path,format:o,fieldsIndex:u,dynamicDataSource:r,gdbVersion:s,sourceSpatialReference:n})}}]),u}(g);return t.__decorate([i.property()],w.prototype,"type",void 0),t.__decorate([i.property({constructOnly:!0})],w.prototype,"layer",void 0),t.__decorate([i.property({readOnly:!0,dependsOn:["layer.parsedUrl","layer.gdbVersion","layer.dynamicDataSource","layer.fieldsIndex"]})],w.prototype,"queryTask",null),w=t.__decorate([l.subclass("esri.layers.graphics.sources.FeatureLayerSource")],w),w}));

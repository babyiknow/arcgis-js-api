/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["../../../chunks/_rollupPluginBabelHelpers","../../../core/promiseUtils","../../../geometry/SpatialReference","../../../Graphic","../../../chunks/languageUtils","../../../layers/support/Field","../support/shared","../support/IdSet","../../../core/sql/WhereClause","../support/sqlUtils","../support/stats","../../../layers/support/FieldsIndex","../support/FeatureSet","./AttributeFilter","./Adapted","../support/OrderbyClause","./OrderBy","../support/StatsField","../../../core/MD5"],(function(e,t,i,n,s,r,a,l,o,d,u,c,f,h,p,g,_,m,y){"use strict";function b(e){if(!e)return"COUNT";switch(e.toLowerCase()){case"max":return"MAX";case"var":case"variance":return"VAR";case"avg":case"average":case"mean":return"AVG";case"min":return"MIN";case"sum":return"SUM";case"stdev":case"stddev":return"STDDEV";case"count":return"COUNT"}return"COUNT"}return function(F){function w(e){var t;return(t=F.call(this,e)||this)._decodedStatsfield=[],t._decodedGroupbyfield=[],t._candosimplegroupby=!0,t.phsyicalgroupbyfields=[],t.objectIdField="ROW__ID",t._internalObjectIdField="ROW__ID",t._adaptedFields=[],t.declaredClass="esri.arcade.featureset.actions.Aggregate",t._uniqueIds=1,t._maxQuery=10,t._maxProcessing=10,t._parent=e.parentfeatureset,t._config=e,t}e._inheritsLoose(w,F);var S=w.prototype;return S.isTable=function(){return!0},S._getSet=function(e){return null===this._wset?this._getFilteredSet("",null,null,null,e).then((e=>(this._wset=e,this._wset))):t.resolve(this._wset)},S._isInFeatureSet=function(){return a.IdState.InFeatureSet},S.nextUniqueName=function(e){for(;1===e["T"+this._uniqueIds.toString()];)this._uniqueIds++;const t="T"+this._uniqueIds.toString();return e[t]=1,t},S.convertToEsriFieldType=function(e){return e},S._initialiseFeatureSet=function(){const e={};let t=!1,n=1;const s=this._parent?this._parent.getFieldsIndex():new c([]);for(this.objectIdField="ROW__ID",this.globalIdField="";!1===t;){let e=!1;for(let t=0;t<this._config.groupbyfields.length;t++)if(this._config.groupbyfields[t].name.toLowerCase()===this.objectIdField.toLowerCase()){e=!0;break}if(!1===e)for(let t=0;t<this._config.statsfields.length;t++)if(this._config.statsfields[t].name.toLowerCase()===this.objectIdField.toLowerCase()){e=!0;break}!1===e?t=!0:(this.objectIdField="ROW__ID"+n.toString(),n++)}for(const e of this._config.statsfields){const t=new m;t.field=e.name,t.tofieldname=e.name,t.workingexpr=e.expression instanceof o.WhereClause?e.expression:o.WhereClause.create(e.expression,s),t.typeofstat=b(e.statistic),this._decodedStatsfield.push(t)}this._decodedGroupbyfield=[];for(const e of this._config.groupbyfields){const t={name:e.name,singlefield:null,tofieldname:e.name,expression:e.expression instanceof o.WhereClause?e.expression:o.WhereClause.create(e.expression,s)};this._decodedGroupbyfield.push(t)}if(null!==this._parent){this.geometryType=this._parent.geometryType,this.spatialReference=this._parent.spatialReference,this.hasM=this._parent.hasM,this.hasZ=this._parent.hasZ,this.typeIdField="";for(const t of this._parent.fields)e[t.name.toUpperCase()]=1;this.types=null}else this.geometryType=a.layerGeometryEsriConstants.point,this.typeIdField="",this.types=null,this.spatialReference=new i({wkid:4326});this.fields=[];const l=new m;l.field=this.nextUniqueName(e),l.tofieldname=this.objectIdField,l.workingexpr=o.WhereClause.create(this._parent.objectIdField,this._parent.getFieldsIndex()),l.typeofstat="MIN",this._decodedStatsfield.push(l);for(const t of this._decodedGroupbyfield){const i=new r;if(t.name=this.nextUniqueName(e),i.name=t.tofieldname,i.alias=i.name,d.isSingleField(t.expression)){const e=this._parent.getField(d.toWhereClause(t.expression,a.FeatureServiceDatabaseType.Standardised));if(!e)throw new Error("Field is not present for Aggregation");t.name=e.name,t.singlefield=e.name,this.phsyicalgroupbyfields.push(e.name),i.type=e.type}else{i.type=this.convertToEsriFieldType(d.predictType(t.expression,this._parent.fields));const e=new r;e.name=t.name,e.alias=e.name,this.phsyicalgroupbyfields.push(t.name),this._adaptedFields.push(new p.SqlExpressionAdapted(e,t.expression)),this._candosimplegroupby=!1}this.fields.push(i)}if(this._adaptedFields.length>0)for(const e of this._parent.fields)this._adaptedFields.push(new p.OriginalField(e));for(let t=0;t<this._decodedStatsfield.length;t++){const i=new r;let n=null;const s=this._decodedStatsfield[t];s.field=this.nextUniqueName(e),s.tofieldname===this.objectIdField&&(this._internalObjectIdField=s.field),i.name=s.tofieldname,i.alias=i.name;const l=null!==s.workingexpr&&d.isSingleField(s.workingexpr)?d.toWhereClause(s.workingexpr,a.FeatureServiceDatabaseType.Standardised):"";switch(this._decodedStatsfield[t].typeofstat){case"SUM":if(""!==l){if(n=this._parent.getField(l),!n)throw new Error("Field is not present for Aggregation");i.type=n.type}else i.type="double";break;case"MIN":case"MAX":if(""!==l){if(n=this._parent.getField(l),!n)throw new Error("Field is not present for Aggregation");i.type=n.type}else i.type="double";break;case"COUNT":i.type="integer";break;case"STDDEV":case"VAR":case"AVG":if(""!==l&&(n=this._parent.getField(l),!n))throw new Error("Field is not present for Aggregation");i.type="double"}this.fields.push(i)}},S._canDoAggregates=function(){return t.resolve(!1)},S._getFeatures=function(e,i,n,s){-1!==i&&this._featureCache[i];const r=this._maxQuery;return!0===this._checkIfNeedToExpandKnownPage(e,r)?this._expandPagedSet(e,r,0,0,s).then((()=>this._getFeatures(e,i,n,s))):t.resolve("success")},S._getFilteredSet=function(e,i,n,s,r){if(""!==e)return t.resolve(new l([],[],!0,null));let a=null;const o={ordered:!1,nowhereclause:!1};return this._ensureLoaded().then((()=>{if(null!==n)for(let e=0;e<this._decodedStatsfield.length;e++)if(!0===d.scanForField(n,this._decodedStatsfield[e].tofieldname)){o.nowhereclause=!0,n=null;break}if(null!==s){o.ordered=!0;for(let e=0;e<this._decodedStatsfield.length;e++)if(!0===s.scanForField(this._decodedStatsfield[e].tofieldname)){s=null,o.ordered=!1;break}if(null!==s)for(const e of this._decodedGroupbyfield)if(null===e.singlefield&&!0===s.scanForField(e.tofieldname)){s=null,o.ordered=!1;break}}return!1===this._candosimplegroupby?t.resolve(!1):this._parent._canDoAggregates(this.phsyicalgroupbyfields,this._decodedStatsfield,"",null,null)})).then((e=>{if(e){let e=null;n&&(e=this._reformulateWhereClauseWithoutGroupByFields(n));let t=null;return s&&(t=this._reformulateOrderClauseWithoutGroupByFields(s)),this._parent._getAggregatePagesDataSourceDefinition(this.phsyicalgroupbyfields,this._decodedStatsfield,"",null,e,t,this._internalObjectIdField).then((e=>(this._checkCancelled(r),a=!0===o.nowhereclause?new l(e._candidates.slice(0).concat(e._known.slice(0)),[],!0===o.ordered&&e._ordered,this._clonePageDefinition(e.pagesDefinition)):new l(e._candidates.slice(0),e._known.slice(0),!0===o.ordered&&e._ordered,this._clonePageDefinition(e.pagesDefinition)),a)))}let t=this._parent;if(this._adaptedFields.length>0&&(t=new p.AdaptedFeatureSet({parentfeatureset:this._parent,adaptedFields:this._adaptedFields,extraFilter:null})),!0===o.nowhereclause)a=new l(["GETPAGES"],[],!1,{aggregatefeaturesetpagedefinition:!0,resultOffset:0,resultRecordCount:this._maxQuery,internal:{fullyResolved:!1,workingItem:null,type:"manual",iterator:null,set:[],subfeatureset:new _({parentfeatureset:t,orderbyclause:new g(this.phsyicalgroupbyfields.join(",")+","+this._parent.objectIdField+" ASC")})}});else{let e=t;if(null!==n){let t=null;n&&(t=this._reformulateWhereClauseWithoutGroupByFields(n)),e=new h({parentfeatureset:e,whereclause:t})}a=new l(["GETPAGES"],[],!1,{aggregatefeaturesetpagedefinition:!0,resultOffset:0,resultRecordCount:this._maxQuery,internal:{fullyResolved:!1,workingItem:null,type:"manual",iterator:null,set:[],subfeatureset:new _({parentfeatureset:e,orderbyclause:new g(this.phsyicalgroupbyfields.join(",")+","+this._parent.objectIdField+" ASC")})}})}return a}))},S._reformulateWhereClauseWithoutStatsFields=function(e){for(const t of this._decodedStatsfield)e=d.reformulateWithoutField(e,t.tofieldname,d.toWhereClause(t.workingexpr,a.FeatureServiceDatabaseType.Standardised),this._parent.getFieldsIndex());return e},S._reformulateWhereClauseWithoutGroupByFields=function(e){for(const t of this._decodedGroupbyfield)t.tofieldname!==t.name&&(e=d.reformulateWithoutField(e,t.tofieldname,d.toWhereClause(t.expression,a.FeatureServiceDatabaseType.Standardised),this._parent.getFieldsIndex()));return e},S._reformulateOrderClauseWithoutGroupByFields=function(e){const t=[];for(const e of this._decodedGroupbyfield)e.tofieldname!==e.name&&t.push({field:e.tofieldname,newfield:e.name});return t.length>0?e.replaceFields(t):e},S._clonePageDefinition=function(e){return null===e?null:!0===e.aggregatefeaturesetpagedefinition?{aggregatefeaturesetpagedefinition:!0,resultRecordCount:e.resultRecordCount,resultOffset:e.resultOffset,internal:e.internal}:this._parent._clonePageDefinition(e)},S._refineSetBlock=function(e,i,n){try{if(!0===this._checkIfNeedToExpandCandidatePage(e,this._maxQuery))return this._expandPagedSet(e,this._maxQuery,0,0,n).then((()=>this._refineSetBlock(e,i,n)));this._checkCancelled(n);const s=e._candidates.length;this._refineKnowns(e,i);e._candidates.length;return e._candidates.length,t.resolve(e)}catch(e){return t.reject(e)}},S._expandPagedSet=function(e,t,i,n,s){return this._expandPagedSetFeatureSet(e,t,i,n,s)},S._getPhysicalPage=function(e,i,s){return!0===e.pagesDefinition.aggregatefeaturesetpagedefinition?t.create(((t,i)=>{this._sequentialGetPhysicalItem(e,e.pagesDefinition.resultRecordCount,s,[]).then((e=>{t(e)}),i)})):this._getAgregagtePhysicalPage(e,i,s).then((e=>{for(const t of e){const e={geometry:t.geometry,attributes:{}};for(const i of this._decodedGroupbyfield)e.attributes[i.tofieldname]=t.attributes[i.name];for(const i of this._decodedStatsfield)e.attributes[i.tofieldname]=t.attributes[i.field];this._featureCache[e.attributes[this.objectIdField]]=new n(e)}return e.length}))},S._sequentialGetPhysicalItem=function(e,i,n,s){return t.create(((t,r)=>{null===e.pagesDefinition.internal.iterator&&(e.pagesDefinition.internal.iterator=e.pagesDefinition.internal.subfeatureset.iterator(n)),!0===e.pagesDefinition.internal.fullyResolved||0===i?t(s.length):this._nextAggregateItem(e,i,n,s,(r=>{null===r?t(s.length):(i-=1,t(this._sequentialGetPhysicalItem(e,i,n,s)))}),r)}))},S._nextAggregateItem=function(e,t,i,n,r,a){try{s.tick(e.pagesDefinition.internal.iterator.next()).then((s=>{if(null===s)if(null!==e.pagesDefinition.internal.workingItem){const t=this._calculateAndAppendAggregateItem(e.pagesDefinition.internal.workingItem);n.push(t),e.pagesDefinition.internal.workingItem=null,e.pagesDefinition.internal.set.push(t.attributes[this.objectIdField]),e.pagesDefinition.internal.fullyResolved=!0,r(null)}else e.pagesDefinition.internal.fullyResolved=!0,r(null);else{const l=this._generateAggregateHash(s);if(null===e.pagesDefinition.internal.workingItem)e.pagesDefinition.internal.workingItem={features:[s],id:l};else{if(l!==e.pagesDefinition.internal.workingItem.id){const i=this._calculateAndAppendAggregateItem(e.pagesDefinition.internal.workingItem);return n.push(i),e.pagesDefinition.internal.workingItem=null,e.pagesDefinition.internal.set.push(i.attributes[this.objectIdField]),t-=1,e.pagesDefinition.internal.workingItem={features:[s],id:l},void r(i)}e.pagesDefinition.internal.workingItem.features.push(s)}this._nextAggregateItem(e,t,i,n,r,a)}}),a)}catch(e){a(e)}},S._calculateFieldStat=function(e,t,i){const n=[];for(let i=0;i<e.features.length;i++)if(null!==t.workingexpr){const s=t.workingexpr.calculateValue(e.features[i]);null!==s&&n.push(s)}else n.push(null);switch(t.typeofstat){case"MIN":i.attributes[t.tofieldname]=u.calculateStat("min",n,-1);break;case"MAX":i.attributes[t.tofieldname]=u.calculateStat("max",n,-1);break;case"SUM":i.attributes[t.tofieldname]=u.calculateStat("sum",n,-1);break;case"COUNT":i.attributes[t.tofieldname]=n.length;break;case"VAR":i.attributes[t.tofieldname]=u.calculateStat("var",n,-1);break;case"STDDEV":i.attributes[t.tofieldname]=u.calculateStat("stddev",n,-1);break;case"AVG":i.attributes[t.tofieldname]=u.calculateStat("avg",n,-1)}return!0},S._calculateAndAppendAggregateItem=function(e){const t={attributes:{},geometry:null};for(const i of this._decodedGroupbyfield){const n=i.singlefield?e.features[0].attributes[i.singlefield]:i.expression.calculateValue(e.features[0]);t.attributes[i.tofieldname]=n}for(const i of this._decodedStatsfield)this._calculateFieldStat(e,i,t);const i=[];for(let n=0;n<this._decodedStatsfield.length;n++)i.push(this._calculateFieldStat(e,this._decodedStatsfield[n],t));return this._featureCache[t.attributes[this.objectIdField]]=new n({attributes:t.attributes,geometry:t.geometry}),t},S._generateAggregateHash=function(e){let t="";for(const i of this._decodedGroupbyfield){const n=i.singlefield?e.attributes[i.singlefield]:i.expression.calculateValue(e);t+=null==n?":":":"+n.toString()}return y.createMD5Hash(t,y.outputTypes.String)},S._stat=function(){return t.resolve({calculated:!1})},S.getFeatureByObjectId=function(){return t.resolve(null)},w.registerAction=function(){f._featuresetFunctions.groupby=function(e,t){return new w({parentfeatureset:this,groupbyfields:e,statsfields:t})}},w}(f)}));

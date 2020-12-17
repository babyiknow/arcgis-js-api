/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["../../../chunks/_rollupPluginBabelHelpers","../../../core/promiseUtils","../../../geometry/SpatialReference","../support/shared","../support/IdSet","../../../core/sql/WhereClause","../support/sqlUtils","../support/FeatureSet"],(function(e,t,n,s,i,r,a,l){"use strict";return function(u){function h(e){var t;return(t=u.call(this,e)||this).declaredClass="esri.arcade.featureset.actions.AttributeFilter",t._maxProcessing=1e3,t._parent=e.parentfeatureset,e.whereclause instanceof r.WhereClause?(t._whereclause=e.whereclause,t._whereClauseFunction=null):(t._whereClauseFunction=e.whereclause,t._whereclause=null),t}e._inheritsLoose(h,u);var c=h.prototype;return c._initialiseFeatureSet=function(){null!==this._parent?(this.fields=this._parent.fields.slice(0),this.geometryType=this._parent.geometryType,this.objectIdField=this._parent.objectIdField,this.globalIdField=this._parent.globalIdField,this.spatialReference=this._parent.spatialReference,this.hasM=this._parent.hasM,this.hasZ=this._parent.hasZ,this.typeIdField=this._parent.typeIdField,this.types=this._parent.types):(this.fields=[],this.typeIdField="",this.objectIdField="",this.globalIdField="",this.spatialReference=new n({wkid:4326}),this.geometryType=s.layerGeometryEsriConstants.point)},c._getSet=function(e){return null===this._wset?this._ensureLoaded().then((()=>this._parent._getFilteredSet("",null,this._whereclause,null,e))).then((t=>(this._checkCancelled(e),null!==this._whereClauseFunction?this._wset=new i(t._candidates.slice(0).concat(t._known.slice(0)),[],t._ordered,this._clonePageDefinition(t.pagesDefinition)):this._wset=new i(t._candidates.slice(0),t._known.slice(0),t._ordered,this._clonePageDefinition(t.pagesDefinition)),this._wset))):t.resolve(this._wset)},c._isInFeatureSet=function(e){let t=this._parent._isInFeatureSet(e);return t===s.IdState.NotInFeatureSet?t:(t=this._idstates[e],void 0===t?s.IdState.Unknown:t)},c._getFeature=function(e,t,n){return this._parent._getFeature(e,t,n)},c._getFeatures=function(e,t,n,s){return this._parent._getFeatures(e,t,n,s)},c._featureFromCache=function(e){return this._parent._featureFromCache(e)},c.executeWhereClause=function(e){return this._whereclause.testFeature(e)},c.executeWhereClauseDeferred=function(e){if(null!==this._whereClauseFunction)try{const n=this._whereClauseFunction(e);return t.isPromiseLike(n)?n:t.resolve(n)}catch(e){return t.reject(e)}return t.resolve(this.executeWhereClause(e))},c._fetchAndRefineFeatures=function(e,n,r){const a=new i([],e,!1,null),l=Math.min(n,e.length);return this._parent._getFeatures(a,-1,l,r).then((()=>{if(this._checkCancelled(r),null==this._whereClauseFunction){for(let t=0;t<l;t++){const n=this._parent._featureFromCache(e[t]);!0===this.executeWhereClause(n)?this._idstates[e[t]]=s.IdState.InFeatureSet:this._idstates[e[t]]=s.IdState.NotInFeatureSet}return"success"}const i=[];for(let t=0;t<l;t++){const n=this._parent._featureFromCache(e[t]);i.push(this.executeWhereClauseDeferred(n))}return t.all(i).then((t=>{for(let i=0;i<n;i++)!0===t[i]?this._idstates[e[i]]=s.IdState.InFeatureSet:this._idstates[e[i]]=s.IdState.NotInFeatureSet;return"success"}))}))},c._getFilteredSet=function(e,t,n,s,r){return null!==this._whereClauseFunction||(null!==n?null!==this._whereclause&&(n=a.combine(this._whereclause,n)):n=this._whereclause),this._ensureLoaded().then((()=>this._parent._getFilteredSet(e,t,n,s,r))).then((e=>{let t;return this._checkCancelled(r),t=null!==this._whereClauseFunction?new i(e._candidates.slice(0).concat(e._known.slice(0)),[],e._ordered,this._clonePageDefinition(e.pagesDefinition)):new i(e._candidates.slice(0),e._known.slice(0),e._ordered,this._clonePageDefinition(e.pagesDefinition)),t}))},c._stat=function(e,n,s,i,r,l,u){if(null!==this._whereClauseFunction)return null===r&&""===s&&null===i?this._manualStat(e,n,l,u):t.resolve({calculated:!1});let h=this._whereclause;return null!==r&&null!==this._whereclause&&(h=a.combine(this._whereclause,r)),this._parent._stat(e,n,s,i,h,l,u).then((t=>!1===t.calculated?null===r&&""===s&&null===i?this._manualStat(e,n,l,u):{calculated:!1}:t))},c._canDoAggregates=function(e,n,s,i,r){return null!==this._whereClauseFunction?t.resolve(!1):(null!==r?null!==this._whereclause&&(r=a.combine(this._whereclause,r)):r=this._whereclause,null===this._parent?t.resolve(!1):this._parent._canDoAggregates(e,n,s,i,r))},c._getAggregatePagesDataSourceDefinition=function(e,n,s,i,r,l,u){return null===this._parent?t.reject(new Error("Should never be called")):(null!==r?null!==this._whereclause&&(r=a.combine(this._whereclause,r)):r=this._whereclause,this._parent._getAggregatePagesDataSourceDefinition(e,n,s,i,r,l,u))},h.registerAction=function(){l._featuresetFunctions.filter=function(e){if("function"==typeof e)return new h({parentfeatureset:this,whereclause:e});let t=null;return e instanceof r.WhereClause&&(t=e),new h({parentfeatureset:this,whereclause:t})}},h}(l)}));

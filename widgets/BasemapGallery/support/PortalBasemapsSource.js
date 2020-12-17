/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../core/has","../../../core/Logger","../../../core/accessorSupport/ensureType","../../../core/accessorSupport/decorators/property","../../../core/accessorSupport/decorators/subclass","../../../core/Error","../../../core/urlUtils","../../../core/uuid","../../../portal/support/resourceExtension","../../../core/promiseUtils","../../../core/Collection","../../../core/Promise","../../../core/Loadable","../../../portal/Portal","../../../Basemap","../../../core/Handles","../../../core/watchUtils","./LocalBasemapsSource"],(function(t,e,r,a,o,s,l,i,n,p,c,u,h,d,y,m,f,_,b,B){"use strict";const g=h.ofType(f),C="esri.widgets.BasemapGallery.support.PortalBasemapsSource",F=a.getLogger(C);let P=function(e){function r(t){var r;return(r=e.call(this,t)||this)._handles=new _,r.basemaps=new g,r.filterFunction=null,r.portal=m.getDefault(),r.query=null,r.updateBasemapsCallback=null,r}t._inheritsLoose(r,e);var a=r.prototype;return a.initialize=function(){this._handles.add([b.init(this,["filterFunction","loadStatus","portal.basemapGalleryGroupQuery","portal.user","query","updateBasemapsCallback"],(()=>this.refresh()))])},a.destroy=function(){this._handles.destroy(),this._handles=null,this.filterFunction=null,this.portal=null},a.load=function(t){return this.addResolvingPromise(this.portal.load(t)),this.notifyChange("state"),u.resolve(this)},a.refresh=async function(){if("ready"!==this.state)return;this._lastPortalBasemapFetchController&&(this._lastPortalBasemapFetchController.abort(),this._lastPortalBasemapFetchController=null);const t=this.portal,e=new AbortController;this._lastPortalBasemapFetchController=e,this.notifyChange("state");try{const r=await t.fetchBasemaps(this._toQueryString(this.query),e);this._updateBasemaps(r)}catch(t){if(u.isAbortError(t))throw t;F.warn(new i("basemap-source:fetch-basemaps-error","Could not fetch basemaps from portal.",{error:t})),this._updateBasemaps()}this._lastPortalBasemapFetchController=null,this.notifyChange("state")},a._toQueryString=function(t){return t&&"string"!=typeof t?Object.keys(t).map((e=>`${e}:${t[e]}`)).join(" AND "):t},a._updateBasemaps=function(t=[]){let e=this.filterFunction?t.filter(this.filterFunction):t;e=this.updateBasemapsCallback?this.updateBasemapsCallback(e):e,this.basemaps.removeAll(),this.basemaps.addMany(e)},t._createClass(r,[{key:"state",get:function(){return"not-loaded"===this.loadStatus?"not-loaded":"loading"===this.loadStatus||this._lastPortalBasemapFetchController?"loading":"ready"}}]),r}(y.LoadableMixin(d.EsriPromiseMixin(B)));return e.__decorate([s.property({readOnly:!0,type:g})],P.prototype,"basemaps",void 0),e.__decorate([s.property()],P.prototype,"filterFunction",void 0),e.__decorate([s.property({type:m})],P.prototype,"portal",void 0),e.__decorate([s.property()],P.prototype,"query",void 0),e.__decorate([s.property({dependsOn:["loadStatus"],readOnly:!0})],P.prototype,"state",null),e.__decorate([s.property()],P.prototype,"updateBasemapsCallback",void 0),P=e.__decorate([l.subclass(C)],P),P}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["../chunks/_rollupPluginBabelHelpers","../chunks/tslib.es6","../core/has","../core/lang","../core/Logger","../core/accessorSupport/ensureType","../core/accessorSupport/decorators/property","../core/jsonMap","../core/accessorSupport/decorators/subclass","../core/urlUtils","../core/uuid","./support/resourceExtension","../core/Accessor","../geometry/SpatialReference","../geometry/support/webMercatorUtils","../geometry/Extent"],(function(t,e,r,o,s,i,n,a,u,c,p,l,d,y,h,m){"use strict";var g;const _=new a.JSONMap({avgRating:"avg-rating",numRatings:"num-ratings",numComments:"num-comments",numViews:"num-views"});let x=g=function(e){function r(t){var r;return(r=e.call(this,t)||this).categories=null,r.disableExtraQuery=!1,r.extent=null,r.num=10,r.query=null,r.sortField=null,r.start=1,r}t._inheritsLoose(r,e);var s=r.prototype;return s.clone=function(){return new g({categories:this.categories?o.clone(this.categories):null,disableExtraQuery:this.disableExtraQuery,extent:this.extent?this.extent.clone():null,num:this.num,query:this.query,sortField:this.sortField,sortOrder:this.sortOrder,start:this.start})},s.toRequestOptions=function(t,e){let r,o;if(this.categories&&(r=this.categories.map((t=>Array.isArray(t)?JSON.stringify(t):t))),this.extent){const t=h.project(this.extent,y.WGS84);t&&(o=`${t.xmin},${t.ymin},${t.xmax},${t.ymax}`)}let s=this.query;!this.disableExtraQuery&&t.extraQuery&&(s="("+s+")"+t.extraQuery);const i={categories:r,bbox:o,q:s,num:this.num,sortField:null,sortOrder:null,start:this.start};return this.sortField&&(i.sortField=this.sortField.split(",").map((t=>_.toJSON(t.trim()))).join(","),i.sortOrder=this.sortOrder),{query:{...e,...i}}},t._createClass(r,[{key:"sortOrder",get:function(){return this._get("sortOrder")||"asc"},set:function(t){"asc"!==t&&"desc"!==t||this._set("sortOrder",t)}}]),r}(d);return e.__decorate([n.property()],x.prototype,"categories",void 0),e.__decorate([n.property()],x.prototype,"disableExtraQuery",void 0),e.__decorate([n.property({type:m})],x.prototype,"extent",void 0),e.__decorate([n.property()],x.prototype,"num",void 0),e.__decorate([n.property()],x.prototype,"query",void 0),e.__decorate([n.property()],x.prototype,"sortField",void 0),e.__decorate([n.property()],x.prototype,"sortOrder",null),e.__decorate([n.property()],x.prototype,"start",void 0),x=g=e.__decorate([u.subclass("esri.portal.PortalQueryParams")],x),x}));

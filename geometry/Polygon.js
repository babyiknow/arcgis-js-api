/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["../chunks/_rollupPluginBabelHelpers","../chunks/tslib.es6","../core/has","../core/lang","../core/Logger","../core/accessorSupport/ensureType","../core/accessorSupport/decorators/property","../core/accessorSupport/decorators/subclass","../core/accessorSupport/decorators/writer","../core/urlUtils","../core/uuid","../portal/support/resourceExtension","./SpatialReference","./Geometry","./support/webMercatorUtils","./Point","./support/contains","./support/intersects","./Extent","./support/zmUtils","./support/coordsUtils","./support/centroid","./support/extentUtils"],(function(e,t,n,r,s,i,o,a,c,l,u,p,h,f,g,d,y,m,R,_,x,v,w){"use strict";var S;function Z(e){return!Array.isArray(e[0])}let A=S=function(t){function n(...e){var n;return(n=t.call(this,...e)||this).rings=[],n.type="polygon",n}e._inheritsLoose(n,t),n.fromExtent=function(e){const t=e.clone().normalize(),n=e.spatialReference;let r=!1,s=!1;t.map((e=>{e.hasZ&&(r=!0),e.hasM&&(s=!0)}));const i={rings:t.map((function(e){const t=[[e.xmin,e.ymin],[e.xmin,e.ymax],[e.xmax,e.ymax],[e.xmax,e.ymin],[e.xmin,e.ymin]];if(r&&e.hasZ){const n=e.zmin+.5*(e.zmax-e.zmin);for(let e=0;e<t.length;e++)t[e].push(n)}if(s&&e.hasM){const n=e.mmin+.5*(e.mmax-e.mmin);for(let e=0;e<t.length;e++)t[e].push(n)}return t})),spatialReference:n};return r&&(i.hasZ=!0),s&&(i.hasM=!0),new S(i)};var s=n.prototype;return s.normalizeCtorArgs=function(e,t){let n,r,s=null,i=null;return e&&!Array.isArray(e)?(s=e.rings?e.rings:null,t||(e.spatialReference?t=e.spatialReference:e.rings||(t=e)),n=e.hasZ,r=e.hasM):s=e,s=s||[],t=t||h.WGS84,s.length&&s[0]&&null!=s[0][0]&&"number"==typeof s[0][0]&&(s=[s]),i=s[0]&&s[0][0],i&&(void 0===n&&void 0===r?(n=i.length>2,r=!1):void 0===n?n=!r&&i.length>3:void 0===r&&(r=!n&&i.length>3)),{rings:s,spatialReference:t,hasZ:n,hasM:r}},s.writeRings=function(e,t){t.rings=r.clone(this.rings)},s.addRing=function(e){if(!e)return;this.clearCache();const t=this.rings,n=t.length;if(Z(e)){const r=[];for(let t=0,n=e.length;t<n;t++)r[t]=e[t].toArray();t[n]=r}else t[n]=e.concat();return this},s.clone=function(){const e=new S;return e.spatialReference=this.spatialReference,e.rings=r.clone(this.rings),e.hasZ=this.hasZ,e.hasM=this.hasM,e},s.contains=function(e){return!!e&&(g.canProject(e,this.spatialReference)&&(e=g.project(e,this.spatialReference)),y.polygonContainsPoint(this,e))},s.isClockwise=function(e){let t;return t=Z(e)?e.map((e=>this.hasZ?this.hasM?[e.x,e.y,e.z,e.m]:[e.x,e.y,e.z]:[e.x,e.y])):e,x.isClockwise(t,this.hasM,this.hasZ)},s.getPoint=function(e,t){if(!this._validateInputs(e,t))return null;const n=this.rings[e][t],r=this.hasZ,s=this.hasM;return r&&!s?new d(n[0],n[1],n[2],void 0,this.spatialReference):s&&!r?new d(n[0],n[1],void 0,n[2],this.spatialReference):r&&s?new d(n[0],n[1],n[2],n[3],this.spatialReference):new d(n[0],n[1],this.spatialReference)},s.insertPoint=function(e,t,n){return this._validateInputs(e,t,!0)?(this.clearCache(),_.updateSupportFromPoint(this,n),Array.isArray(n)||(n=n.toArray()),this.rings[e].splice(t,0,n),this):this},s.removePoint=function(e,t){return this._validateInputs(e,t)?(this.clearCache(),new d(this.rings[e].splice(t,1)[0],this.spatialReference)):null},s.removeRing=function(e){if(!this._validateInputs(e,null))return null;this.clearCache();const t=this.rings.splice(e,1)[0],n=this.spatialReference;return t.map((e=>new d(e,n)))},s.setPoint=function(e,t,n){return this._validateInputs(e,t)?(this.clearCache(),_.updateSupportFromPoint(this,n),Array.isArray(n)||(n=n.toArray()),this.rings[e][t]=n,this):this},s._validateInputs=function(e,t,n=!1){if(null==e||e<0||e>=this.rings.length)return!1;if(null!=t){const r=this.rings[e];if(n&&(t<0||t>r.length))return!1;if(!n&&(t<0||t>=r.length))return!1}return!0},s.toJSON=function(e){return this.write(null,e)},e._createClass(n,[{key:"centroid",get:function(){const e=v.polygonCentroid(this);if(!e||isNaN(e[0])||isNaN(e[1])||this.hasZ&&isNaN(e[2]))return null;const t=new d;return t.x=e[0],t.y=e[1],t.spatialReference=this.spatialReference,this.hasZ&&(t.z=e[2]),t}},{key:"extent",get:function(){const{spatialReference:e}=this,t=w.getPolygonExtent(this);if(!t)return null;const n=new R(t);return n.spatialReference=e,n}},{key:"isSelfIntersecting",get:function(){return m.isSelfIntersecting(this.rings)}}]),n}(f);return t.__decorate([o.property({dependsOn:["hasM","hasZ","rings"],autoTracked:!1})],A.prototype,"cache",void 0),t.__decorate([o.property({readOnly:!0,dependsOn:["cache"],autoTracked:!1})],A.prototype,"centroid",null),t.__decorate([o.property({readOnly:!0,dependsOn:["cache"],autoTracked:!1})],A.prototype,"extent",null),t.__decorate([o.property({readOnly:!0,dependsOn:["cache"],autoTracked:!1})],A.prototype,"isSelfIntersecting",null),t.__decorate([o.property({type:[[[Number]]],json:{write:{isRequired:!0}}})],A.prototype,"rings",void 0),t.__decorate([c.writer("rings")],A.prototype,"writeRings",null),A=S=t.__decorate([a.subclass("esri.geometry.Polygon")],A),A.prototype.toJSON.isDefaultToJSON=!0,A}));

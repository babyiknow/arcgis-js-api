/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/has","../../core/Logger","../../core/accessorSupport/ensureType","../../core/accessorSupport/decorators/property","../../core/jsonMap","../../core/accessorSupport/decorators/reader","../../core/accessorSupport/decorators/subclass","../../core/accessorSupport/decorators/writer","../../core/urlUtils","../../core/uuid","../../portal/support/resourceExtension","../../core/JSONSupport","../../geometry/support/spatialReferenceUtils","../../geometry/SpatialReference","../../geometry/support/webMercatorUtils","../../geometry/Point","../../geometry","../../core/unitUtils","../../geometry/support/aaBoundingRect","./LOD"],(function(e,t,r,o,i,s,n,l,a,c,p,u,f,d,h,y,g,_,v,m,w,S){"use strict";var x;const z=new n.JSONMap({PNG:"png",PNG8:"png8",PNG24:"png24",PNG32:"png32",JPEG:"jpg",JPG:"jpg",DIB:"dib",TIFF:"tiff",EMF:"emf",PS:"ps",PDF:"pdf",GIF:"gif",SVG:"svg",SVGZ:"svgz",Mixed:"mixed",MIXED:"mixed",LERC:"lerc",LERC2D:"lerc2d",RAW:"raw",pbf:"pbf"});let R=x=function(t){function r(e){var r;return(r=t.call(this,e)||this).dpi=96,r.format=null,r.origin=null,r.minScale=0,r.maxScale=0,r.size=null,r.spatialReference=null,r}e._inheritsLoose(r,t),r.create=function(e={size:256,spatialReference:y.WebMercator}){const t=e.resolutionFactor||1,r=e.scales,o=e.size||256,i=e.spatialReference||y.WebMercator;if(!h.isValid(i)){const e=[];if(r)for(let t=0;t<r.length;t++){const o=r[t];e.push({level:t,scale:o,resolution:o})}else{let t=5e-4;for(let r=23;r>=0;r--)e.unshift({level:r,scale:t,resolution:t}),t*=2}return new x({dpi:96,lods:e,origin:new _(0,0,i),size:[o,o],spatialReference:i})}const s=h.getInfo(i),n=e.origin?new _({x:e.origin.x,y:e.origin.y,spatialReference:i}):new _(s?{x:s.origin[0],y:s.origin[1],spatialReference:i}:{x:0,y:0,spatialReference:i}),l=1/(39.37*m.getMetersPerUnitForSR(i)*96),a=[];if(r)for(let e=0;e<r.length;e++){const t=r[e],o=t*l;a.push({level:e,scale:t,resolution:o})}else{let e=h.isGeographic(i)?512/o*591657527.5917094:256/o*591657527.591555;const r=Math.ceil(24/t);a.push({level:0,scale:e,resolution:e*l});for(let o=1;o<r;o++){const r=e/Math.pow(2,t),i=r*l;a.push({level:o,scale:r,resolution:i}),e=r}}return new x({dpi:96,lods:a,origin:n,size:[o,o],spatialReference:i})};var o=r.prototype;return o.readOrigin=function(e,t){return _.fromJSON({spatialReference:t.spatialReference,...e})},o.readSize=function(e,t){return[t.cols,t.rows]},o.writeSize=function(e,t){t.cols=e[0],t.rows=e[0]},o.zoomToScale=function(e){const t=this.scales;if(e<=0)return t[0];if(e>=t.length)return t[t.length-1];{const r=Math.round(e-.5),o=Math.round(e);return t[o]+(o-e)*(t[r]-t[o])}},o.scaleToZoom=function(e){const t=this.scales,r=t.length-1;let o=0;for(;o<r;o++){const r=t[o],i=t[o+1];if(r<=e)return o;if(i===e)return o+1;if(r>e&&i<e)return o+1-(e-i)/(r-i)}return o},o.snapScale=function(e,t=.95){const r=this.scaleToZoom(e);return r%Math.floor(r)>=t?this.zoomToScale(Math.ceil(r)):this.zoomToScale(Math.floor(r))},o.tileAt=function(e,t,r,o){const i=this.lodAt(e);if(!i)return null;let s,n;if("number"==typeof t)s=t,n=r;else if(h.equals(t.spatialReference,this.spatialReference))s=t.x,n=t.y,o=r;else{const e=g.project(t,this.spatialReference);if(!e)return null;s=e.x,n=e.y,o=r}const l=i.resolution*this.size[0],a=i.resolution*this.size[1];return o||(o={id:null,level:0,row:0,col:0,extent:w.create()}),o.level=e,o.row=Math.floor((this.origin.y-n)/a+.001),o.col=Math.floor((s-this.origin.x)/l+.001),this.updateTileInfo(o),o},o.updateTileInfo=function(e){const t=this.lodAt(e.level);if(!t)return;const r=t.resolution*this.size[0],o=t.resolution*this.size[1];e.id=`${e.level}/${e.row}/${e.col}`,e.extent||(e.extent=w.create()),e.extent[0]=this.origin.x+e.col*r,e.extent[1]=this.origin.y-(e.row+1)*o,e.extent[2]=e.extent[0]+r,e.extent[3]=e.extent[1]+o},o.upsampleTile=function(e){const t=this._upsampleLevels[e.level];return!(!t||-1===t.parentLevel)&&(e.level=t.parentLevel,e.row=Math.floor(e.row/t.factor+.001),e.col=Math.floor(e.col/t.factor+.001),this.updateTileInfo(e),!0)},o.getTileBounds=function(e,t){const{resolution:r}=this.lodAt(t.level),o=r*this.size[0],i=r*this.size[1];return e[0]=this.origin.x+t.col*o,e[1]=this.origin.y-(t.row+1)*i,e[2]=e[0]+o,e[3]=e[1]+i,e},o.lodAt=function(e){return this._levelToLOD&&this._levelToLOD[e]||null},o.clone=function(){return x.fromJSON(this.write({}))},o._initializeUpsampleLevels=function(){const e=this.lods;this._upsampleLevels=[];let t=null;for(let r=0;r<e.length;r++){const o=e[r];this._upsampleLevels[o.level]={parentLevel:t?t.level:-1,factor:t?t.resolution/o.resolution:0},t=o}},e._createClass(r,[{key:"isWrappable",get:function(){const{spatialReference:e,origin:t}=this;if(e&&t){const r=h.getInfo(e);return e.isWrappable&&Math.abs(r.origin[0]-t.x)<=r.dx}return!1}},{key:"lods",set:function(e){let t=0,r=0;const o=[];this._levelToLOD={},e&&(t=-1/0,r=1/0,e.forEach((e=>{o.push(e.scale),t=e.scale>t?e.scale:t,r=e.scale<r?e.scale:r,this._levelToLOD[e.level]=e}))),this._set("scales",o),this._set("minScale",t),this._set("maxScale",r),this._set("lods",e),this._initializeUpsampleLevels()}}]),r}(d.JSONSupport);return t.__decorate([s.property({type:Number,json:{write:!0}})],R.prototype,"compressionQuality",void 0),t.__decorate([s.property({type:Number,json:{write:!0}})],R.prototype,"dpi",void 0),t.__decorate([s.property({type:String,json:{read:z.read,write:z.write,origins:{"web-scene":{read:!1,write:!1}}}})],R.prototype,"format",void 0),t.__decorate([s.property({readOnly:!0,dependsOn:["spatialReference","origin"]})],R.prototype,"isWrappable",null),t.__decorate([s.property({type:_,json:{write:!0}})],R.prototype,"origin",void 0),t.__decorate([l.reader("origin")],R.prototype,"readOrigin",null),t.__decorate([s.property({type:[S],value:null,json:{write:!0}})],R.prototype,"lods",null),t.__decorate([s.property({readOnly:!0})],R.prototype,"minScale",void 0),t.__decorate([s.property({readOnly:!0})],R.prototype,"maxScale",void 0),t.__decorate([s.property({readOnly:!0})],R.prototype,"scales",void 0),t.__decorate([s.property({cast:e=>Array.isArray(e)?e:"number"==typeof e?[e,e]:[256,256]})],R.prototype,"size",void 0),t.__decorate([l.reader("size",["rows","cols"])],R.prototype,"readSize",null),t.__decorate([c.writer("size",{cols:{type:i.Integer},rows:{type:i.Integer}})],R.prototype,"writeSize",null),t.__decorate([s.property({type:y,json:{write:!0}})],R.prototype,"spatialReference",void 0),R=x=t.__decorate([a.subclass("esri.layers.support.TileInfo")],R),R}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/has","../../core/maybe","../../core/Logger","../../core/accessorSupport/ensureType","../../core/accessorSupport/decorators/property","../../core/accessorSupport/decorators/aliasOf","../../core/accessorSupport/decorators/subclass","../../core/urlUtils","../../core/uuid","../../portal/support/resourceExtension","../../geometry/support/spatialReferenceUtils","../../geometry/SpatialReference","../../geometry/Extent","../../geometry","../../request","../support/arcgisLayerUrl","../support/commonProperties","../../rasterRenderers","../support/TileInfo","../support/DimensionalDefinition","../support/RasterJobHandler","../../renderers/support/rasterRendererHelper","../../renderers/support/RasterSymbolizer"],(function(e,t,r,i,n,s,o,a,l,d,c,p,u,f,h,m,y,_,b,g,I,J,v,x,D,H){"use strict";const S=s.getLogger("esri.layers.mixins.ImageryTileMixin");e.ImageryTileMixin=e=>{let i=function(e){function r(){var t;return(t=e.apply(this,arguments)||this)._rasterJobHandler={instance:null,refCount:0,connectionPromise:null},t.bandIds=null,t.copyright=null,t.fullExtent=null,t.interpolation="nearest",t.raster=null,t.rasterInfo=null,t.sourceJSON=null,t.spatialReference=null,t.tileInfo=null,t.symbolizer=null,t}t._inheritsLoose(r,e);var i=r.prototype;return i.updateRenderer=async function(){if(!this.loaded)return;if(JSON.stringify(this._cachedRendererJson)===JSON.stringify(this.renderer))return;const e=this._rasterJobHandler.instance;e&&(this.symbolizer.rendererJSON=this.renderer.toJSON(),this.symbolizer.bind(),await e.updateSymbolizer(this.symbolizer),this._cachedRendererJson=this.renderer.toJSON())},i.applyRenderer=async function(e,t){const r=e&&e.pixelBlock;if(!(r&&r.pixels&&r.pixels.length>0))return null;let i;this.updateRenderer();const n=this._rasterJobHandler.instance,{bandIds:s}=this;return i=n?await n.symbolize({...e,simpleStretchParams:t,bandIds:s}):this.symbolizer.symbolize({...e,simpleStretchParams:t,bandIds:s}),i},i.getTileUrl=function(e,t,r){return"RasterTileServer"===this.raster.datasetFormat?`${this.url}/tile/${e}/${t}/${r}`:""},i.getCompatibleTileInfo=function(e,t){if(!this.loaded)return null;const r=f.getInfo(e);return J.create({size:256,spatialReference:e,origin:r?{x:r.origin[0],y:r.origin[1]}:{x:t.xmin,y:t.ymax}})},i.getCompatibleFullExtent=function(e){return this.loaded?(this._compatibleFullExtent&&this._compatibleFullExtent.spatialReference.equals(e)||(this._compatibleFullExtent=this.raster.computeExtent(e)),this._compatibleFullExtent):null},i.fetchTile=async function(e,t,r,i={}){if(i.requestAsImageElement){const n=this.getTileUrl(e,t,r);return _(n,{responseType:"image",query:{sliceId:this._sliceId,_ts:i.timestamp},signal:i.signal}).then((e=>e.data))}if(await this._initJobHandler(),this.multidimensionalDefinition){const e=this._sliceId;i={multidimensionalDefinition:this.multidimensionalDefinition,sliceId:e,...i}}return"raster-shaded-relief"===this.renderer.type&&(i={buffer:{cols:1,rows:1},...i}),this.raster.fetchTile(e,t,r,i)},i.fetchPixels=async function(e,t,r,i){if(await this._initJobHandler(),this.multidimensionalDefinition){const e=this._sliceId;i={multidimensionalDefinition:this.multidimensionalDefinition,sliceId:e,...i}}return this.raster.fetchPixels(e,t,r,i)},i.identify=function(e,t={}){return this.multidimensionalDefinition&&!t.multidimensionalDefinition&&(t={...t,multidimensionalDefinition:this.multidimensionalDefinition}),this.raster.identify(e,t)},i.increaseRasterJobHandlerUsage=function(){this._rasterJobHandler.refCount++},i.decreaseRasterJobHandlerUsage=function(){this._rasterJobHandler.refCount--,this._rasterJobHandler.refCount<=0&&this._shutdownJobHandler()},i._configDefaultSettings=function(){this._configDefaultInterpolation(),this._configDefaultSlice(),this._configDefaultRenderer()},i._initJobHandler=function(){if(null!=this._rasterJobHandler.connectionPromise)return this._rasterJobHandler.connectionPromise;const e=new x;return this._rasterJobHandler.connectionPromise=e.initialize().then((()=>{this._rasterJobHandler.instance=e,this.raster.rasterJobHandler=e,this.renderer&&this.updateRenderer()})).catch((()=>null)),this._rasterJobHandler.connectionPromise},i._shutdownJobHandler=function(){this._rasterJobHandler.instance&&this._rasterJobHandler.instance.destroy(),this._rasterJobHandler.instance=null,this._rasterJobHandler.connectionPromise=null,this._rasterJobHandler.refCount=0,this.raster.rasterJobHandler=null},i._configDefaultInterpolation=function(){if(null==this.interpolation){var e;const t=D.getDefaultInterpolation(this.rasterInfo,this.raster.tileType,null==(e=this.sourceJSON)?void 0:e.defaultResamplingMethod);this._set("interpolation",t)}},i._configDefaultSlice=function(){const{multidimensionalInfo:e}=this.raster.rasterInfo;if(n.isSome(e)){if(!this.multidimensionalDefinition){const t=e.variables[0],r=[];t.dimensions.forEach((e=>{r.push(new v({variableName:t.name,dimensionName:e.name,values:e.hasRegularIntervals?e.extent[0]:e.values[0],isSlice:!0}))})),this.multidimensionalDefinition=r}this._sliceId=this.raster.getSliceIndex(this.multidimensionalDefinition)}},i._configDefaultRenderer=function(){const e=this.raster.rasterInfo;var t;(this.bandIds||(this.bandIds=D.getDefaultBandCombination(e)),this.renderer)||(this.renderer=D.createDefaultRenderer(e,{bandIds:this.bandIds,variableName:null==(t=this.multidimensionalDefinition)?void 0:t[0].variableName}));this.symbolizer?(this.symbolizer.rendererJSON=this.renderer.toJSON(),this.symbolizer.rasterInfo=e):this.symbolizer=new H({rendererJSON:this.renderer.toJSON(),rasterInfo:e}),this.symbolizer.bind()||S.warn("imagery-tile-mixin","The given renderer is not supported by the layer.")},t._createClass(r,[{key:"multidimensionalDefinition",set:function(e){this.raster&&(this._sliceId=this.raster.getSliceIndex(e)),this._set("multidimensionalDefinition",e)}},{key:"url",set:function(e){this._set("url",b.sanitizeUrl(e,S))}},{key:"renderer",set:function(e){this._set("renderer",e),this.updateRenderer()}}]),r}(e);return r.__decorate([a.property()],i.prototype,"_cachedRendererJson",void 0),r.__decorate([a.property()],i.prototype,"_sliceId",void 0),r.__decorate([a.property()],i.prototype,"_compatibleFullExtent",void 0),r.__decorate([a.property()],i.prototype,"_rasterJobHandler",void 0),r.__decorate([a.property()],i.prototype,"bandIds",void 0),r.__decorate([a.property()],i.prototype,"copyright",void 0),r.__decorate([a.property({type:m}),l.aliasOf("rasterInfo.extent")],i.prototype,"fullExtent",void 0),r.__decorate([a.property()],i.prototype,"interpolation",void 0),r.__decorate([a.property({type:[v]})],i.prototype,"multidimensionalDefinition",null),r.__decorate([a.property()],i.prototype,"raster",void 0),r.__decorate([a.property({readOnly:!0}),l.aliasOf("raster.rasterInfo")],i.prototype,"rasterInfo",void 0),r.__decorate([a.property()],i.prototype,"sourceJSON",void 0),r.__decorate([a.property({type:h}),l.aliasOf("rasterInfo.spatialReference")],i.prototype,"spatialReference",void 0),r.__decorate([a.property({type:J,dependsOn:["rasterInfo"]}),l.aliasOf("rasterInfo.storageInfo.tileInfo")],i.prototype,"tileInfo",void 0),r.__decorate([a.property(g.url)],i.prototype,"url",null),r.__decorate([a.property({types:I.rasterRendererTypes})],i.prototype,"renderer",null),r.__decorate([a.property()],i.prototype,"symbolizer",void 0),i=r.__decorate([d.subclass("esri.layers.ImageryTileMixin")],i),i},Object.defineProperty(e,"__esModule",{value:!0})}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../core/has","../../../core/maybe","../../../core/Logger","../../../core/accessorSupport/ensureType","../../../core/accessorSupport/decorators/property","../../../core/accessorSupport/decorators/subclass","../../../core/Error","../../../core/urlUtils","../../../core/uuid","../../../portal/support/resourceExtension","../../../core/promiseUtils","../../layers/RefreshableLayerView","../tiling/TileKey","../tiling/TileInfoView","../tiling/TileQueue","../tiling/TileStrategy","../../layers/LayerView","../../support/drapedUtils","../../layers/TileLayerView","./LayerView2D","./BitmapTileLayerView2D"],(function(e,t,i,r,s,n,a,l,o,h,c,u,f,p,y,g,w,d,m,_,I,T,V){"use strict";const v=s.getLogger("esri.views.2d.layers.TileLayerView2D"),b=[0,0];let q=function(t){function i(){var e;return(e=t.apply(this,arguments)||this)._tileStrategy=null,e._fetchQueue=null,e.layer=null,e}e._inheritsLoose(i,t);var s=i.prototype;return s.initialize=function(){const e=this.layer.tileInfo,t=e&&e.spatialReference;let i;t||(i=new o("layerview:tiling-information-missing","The layer doesn't provide tiling information",{layer:this.layer})),t.equals(this.view.spatialReference)||(i=new o("layerview:spatial-reference-incompatible","The spatial reference of this layer does not meet the requirements of the view",{layer:this.layer})),this.watch("resampling",(()=>{this.refresh()})),i&&this.addResolvingPromise(f.reject(i))},s.hitTest=function(){return null},s.update=function(e){this._fetchQueue.pause(),this._fetchQueue.state=e.state,this._tileStrategy.update(e),this._fetchQueue.resume(),this.notifyChange("updating")},s.attach=function(){const e="tileServers"in this.layer?this.layer.tileServers:null;this._tileInfoView=new g(this.layer.tileInfo,this.layer.fullExtent),this._fetchQueue=new w({tileInfoView:this._tileInfoView,concurrency:e&&10*e.length||10,process:(e,t)=>this.fetchTile(e,t)}),this._tileStrategy=new d({cachePolicy:"keep",resampling:this.resampling,acquireTile:e=>this.acquireTile(e),releaseTile:e=>this.releaseTile(e),tileInfoView:this._tileInfoView}),this.requestUpdate(),this.container.requestRender(),t.prototype.attach.call(this)},s.detach=function(){t.prototype.detach.call(this),this._tileStrategy.destroy(),this._fetchQueue.clear(),this.container.removeAllChildren(),this._fetchQueue=this._tileStrategy=this._tileInfoView=null},s.moveStart=function(){this.requestUpdate()},s.viewChange=function(){this.requestUpdate()},s.moveEnd=function(){this.requestUpdate()},s.createFetchPopupFeaturesQueryGeometry=function(e,t){return _.createQueryGeometry(e,t,this.view)},s.doRefresh=async function(){this.updateRequested||this.suspended||(this._fetchQueue.reset(),this._tileStrategy.tiles.forEach((e=>this._enqueueTileFetch(e))),this.notifyChange("updating"))},s.isUpdating=function(){var e;return(null==(e=this._fetchQueue)?void 0:e.length)>0},s.acquireTile=function(e){const t=this._bitmapView.createTile(e),i=t.bitmap;return[i.x,i.y]=this._tileInfoView.getTileCoords(b,t.key),i.resolution=this._tileInfoView.getTileResolution(t.key),[i.width,i.height]=this._tileInfoView.tileInfo.size,this._enqueueTileFetch(t),this._bitmapView.addChild(t),this.requestUpdate(),t},s.releaseTile=function(e){this._fetchQueue.abort(e.key.id),this._bitmapView.removeChild(e),e.once("detach",(()=>e.destroy())),this.requestUpdate()},s.fetchTile=async function(e,t){const i="tilemapCache"in this.layer?this.layer.tilemapCache:null,s=!r.isNone(t)&&t.signal;if(!i)try{return await this._fetchImage(e,s)}catch(e){if(!f.isAbortError(e)&&!this.resampling)return this._createBlankImage();throw e}const n=new y(0,0,0,0);let a;try{if(await i.fetchAvailabilityUpsample(e.level,e.row,e.col,n,{signal:s}),n.level!==e.level&&!this.resampling)return this._createBlankImage();a=await this._fetchImage(n,s)}catch(t){if(f.isAbortError(t))throw t;a=await this._fetchImage(e,s)}const{level:l,row:o,col:h}=n;return this.resampling&&l!==e.level?this._resampleImage(a,l,o,h,e.level,e.row,e.col):a},s._enqueueTileFetch=async function(e){if(!this._fetchQueue.has(e.key.id)){try{const t=await this._fetchQueue.push(e.key);e.bitmap.source=t,e.bitmap.width=this._tileInfoView.tileInfo.size[0],e.bitmap.height=this._tileInfoView.tileInfo.size[1],e.once("attach",(()=>this.requestUpdate()))}catch(e){f.isAbortError(e)||v.error(e)}this.requestUpdate()}},s._fetchImage=async function(e,t){return this.layer.fetchTile(e.level,e.row,e.col,{timestamp:this.refreshTimestamp,signal:t})},s._resampleImage=function(e,t,i,r,s,n,a){const l=this._tileInfoView.tileInfo.size,o=this._tileInfoView.getTileResolution(t),h=this._tileInfoView.getTileResolution(s);let c=this._tileInfoView.getLODInfoAt(s);const u=c.getXForColumn(a),f=c.getYForRow(n);c=this._tileInfoView.getLODInfoAt(t);const p=c.getXForColumn(r),y=c.getYForRow(i),g=Math.round((u-p)/o),w=Math.round(-(f-y)/o),d=Math.round(l[0]*(h/o)),m=Math.round(l[1]*(h/o)),_=this._createBlankImage();return _.getContext("2d").drawImage(e,g,w,d,m,0,0,l[0],l[1]),_},s._createBlankImage=function(){const e=this._tileInfoView.tileInfo.size,t=document.createElement("canvas");return[t.width,t.height]=e,t},e._createClass(i,[{key:"resampling",get:function(){return!("resampling"in this.layer)||!1!==this.layer.resampling}}]),i}(I.TileLayerView(p.RefreshableLayerView(V.BitmapTileLayerView2D(T.LayerView2DMixin(m)))));return t.__decorate([a.property({dependsOn:["layer.resampling?"]})],q.prototype,"resampling",null),q=t.__decorate([l.subclass("esri.views.2d.layers.TileLayerView2D")],q),q}));

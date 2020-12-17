/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["../../../../../chunks/_rollupPluginBabelHelpers","../../../../../chunks/tslib.es6","../../../../../core/has","../../../../../core/Logger","../../../../../core/accessorSupport/ensureType","../../../../../core/accessorSupport/decorators/property","../../../../../core/accessorSupport/decorators/subclass","../../../../../core/urlUtils","../../../../../core/uuid","../../../../../portal/support/resourceExtension","../../../../../core/promiseUtils","../../../../../renderers/support/heatmapUtils","../../../engine/BitmapTileContainer","./BaseTileRenderer","./support/HeatmapSource"],(function(e,t,i,n,r,s,o,a,l,c,u,p,d,h,m){"use strict";let f=function(t){function i(e){var i;return(i=t.call(this,e)||this)._intensityInfo={minPixelIntensity:0,maxPixelIntensity:0},i.featuresView={attributeView:{initialize:()=>{},requestUpdate:()=>{}},requestRender:()=>{}},i._container=new d.BitmapTileContainer(e.tileInfoView),i}e._inheritsLoose(i,t);var n=i.prototype;return n.createTile=function(e){const t=this._container.createTile(e);return this.tileInfoView.getTileCoords(t.bitmap,e),t.bitmap.resolution=this.tileInfoView.getTileResolution(e),t},n.onConfigUpdate=function(){const e=this.layer.renderer;if("heatmap"===e.type){const{minPixelIntensity:t,maxPixelIntensity:i}=e;this._intensityInfo.minPixelIntensity=t,this._intensityInfo.maxPixelIntensity=i,this._gradient=p.generateGradient(e.toJSON()),this.tiles.forEach((e=>{const n=e.bitmap.source;n&&(n.minPixelIntensity=t,n.maxPixelIntensity=i,n.gradient=this._gradient,e.bitmap.invalidateTexture())}))}},n.hitTest=function(){return u.resolve([])},n.install=function(e){e.addChild(this._container)},n.uninstall=function(e){this._container.removeAllChildren(),e.removeChild(this._container)},n.disposeTile=function(e){this._container.removeChild(e),e.destroy()},n.supportsRenderer=function(e){return e&&"heatmap"===e.type},n.onTileData=function(e){const t=this.tiles.get(e.tileKey);if(!t)return;const i=e.intensityInfo,{minPixelIntensity:n,maxPixelIntensity:r}=this._intensityInfo,s=t.bitmap.source||new m.HeatmapSource;s.intensities=i&&i.matrix||null,s.minPixelIntensity=n,s.maxPixelIntensity=r,s.gradient=this._gradient,t.bitmap.source=s,this._container.addChild(t),this.requestUpdate()},n.onTileError=function(e){console.error(e)},n.lockGPUUploads=function(){},n.unlockGPUUploads=function(){},i}(h);return f=t.__decorate([o.subclass("esri.views.2d.layers.features.tileRenderers.HeatmapTileRenderer")],f),f}));

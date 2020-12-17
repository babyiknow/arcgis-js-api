/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["../../core/Error","../../core/promiseUtils","./PixelBlock","../../core/workers/workers"],(function(e,r,o,n){"use strict";return function(){function t(){this._workerThread=null,this._destroyed=!1}var i=t.prototype;return i.initialize=async function(){const e=await n.open("RasterWorker");this._destroyed?e.close():this._workerThread=e},i.destroy=function(){this._destroyed=!0,this._workerThread&&(this._workerThread.close(),this._workerThread=null)},i.decode=async function(r,n){if(!this._workerThread)throw new e("raster-jobhandler:no-connection","no available worker connection");const t=await this._workerThread.invoke("decode",r,n);return t?new o(t):null},i.symbolize=async function(r,n){if(!this._workerThread)throw new e("raster-jobhandler:no-connection","no available worker connection");const t={extent:r.extent&&r.extent.toJSON(),pixelBlock:r.pixelBlock.toJSON(),simpleStretchParams:r.simpleStretchParams,bandIds:r.bandIds},i=await this._workerThread.invoke("symbolize",t,n);return i?new o(i):null},i.updateSymbolizer=async function(o,n){var t;if(!this._workerThread)throw new e("raster-jobhandler:no-connection","no available worker connection");const i=null==o||null==(t=o.rendererJSON)?void 0:t.histograms;await r.all(this._workerThread.broadcast("updateSymbolizer",{symbolizerJSON:o.toJSON(),histograms:i},n))},i.stretch=async function(r,n){if(!this._workerThread)throw new e("raster-jobhandler:no-connection","no available worker connection");if(null==r||!r.pixelBlock)return null;const t={srcPixelBlock:r.pixelBlock.toJSON(),stretchParams:r.stretchParams},i=await this._workerThread.invoke("stretch",t,n);return i?new o(i):null},i.split=async function(n,t){if(!this._workerThread)throw new e("raster-jobhandler:no-connection","no available worker connection");if(null==n||!n.pixelBlock)return null;const i={srcPixelBlock:n.pixelBlock.toJSON(),tileSize:n.tileSize,maximumPyramidLevel:n.maximumPyramidLevel},a=await this._workerThread.invoke("split",i,t);return a&&a.forEach(((e,r)=>{a.set(r,e?o.fromJSON(e):null)})),r.resolve(a)},i.estimateStatisticsHistograms=async function(o,n){if(!this._workerThread)throw new e("raster-jobhandler:no-connection","no available worker connection");if(null==o||!o.pixelBlock)return null;const t={srcPixelBlock:o.pixelBlock.toJSON()},i=await this._workerThread.invoke("estimateStatisticsHistograms",t,n);return r.resolve(i)},i.mosaicAndTransform=async function(r,n){var t;if(!this._workerThread)throw new e("raster-jobhandler:no-connection","no available worker connection");if(null==r||null==(t=r.srcPixelBlocks)||!t.length)return null;const i={...r,srcPixelBlocks:r.srcPixelBlocks.map((e=>e?e.toJSON():null))},a=await this._workerThread.invoke("mosaicAndTransform",i,n);return a?new o(a):null},t}()}));

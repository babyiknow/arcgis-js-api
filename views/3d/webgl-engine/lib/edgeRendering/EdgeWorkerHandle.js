/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["../../../../../chunks/_rollupPluginBabelHelpers","../../../../../core/typedArrayUtil","../../../support/WorkerHandle","../../../support/buffer/workerHelper","./EdgeProcessingWorker"],(function(e,r,n,t,a){"use strict";return function(n){function i(e){return n.call(this,"EdgeProcessingWorker","wrappedWork",e)||this}e._inheritsLoose(i,n);var s=i.prototype;return s.process=async function(e,r,n){if(n)return a.work(e);const t=this._packInput(e),i=await this.invoke(t,r);return this._unpackOutput(i)},s.getTransferList=function(e){return[e.dataBuffer]},s._packInput=function(e){const n={dataBuffer:e.data.buffer,writerSettings:e.writerSettings,skipDeduplicate:e.skipDeduplicate};return e.originalIndices&&(n.originalIndicesBuffer=e.originalIndices.buffer,n.originalIndicesType=r.isUint32Array(e.originalIndices)?"Uint32Array":"Uint16Array"),n},s._unpackOutput=function(e){return{regular:{instancesData:t.unpackInterleavedBuffer(e.regular.instancesData),lodInfo:{lengths:new Float32Array(e.regular.lodInfo.lengths)}},silhouette:{instancesData:t.unpackInterleavedBuffer(e.silhouette.instancesData),lodInfo:{lengths:new Float32Array(e.silhouette.lodInfo.lengths)}},averageEdgeLength:e.averageEdgeLength}},i}(n.WorkerHandle)}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../../../chunks/_rollupPluginBabelHelpers","./terrainUtils","./tileUtils","./TileAgent"],(function(t,e,s,i,n){"use strict";let l=function(){function t(t,e){this._pool=e,this.waitingAgents=[],this.data=null,this._upsampleInfo=null,this.loadingAgent=null,this.requestPromise=null,this.requestAbort=null,this.pendingUpdates=0,this.elevationBounds=void 0,this.init(t)}var l=t.prototype;return l.init=function(t){this.waitingAgents.length=0,this.data=null,this.dataMissing=!1,this.dataInvalidated=!1,this._unsetUpsampleInfo(),this.loadingAgent=null,this.requestPromise=null,this.requestAbort=null,this.pendingUpdates=0,0===t&&(this.elevationBounds=null)},l.invalidateSourceData=function(){this.dataInvalidated=!0,this.dataMissing=!1,this._unsetUpsampleInfo()},l.abortRequest=function(){this.requestPromise&&(this.requestAbort.abort(),this.requestPromise=null,this.requestAbort=null)},l.dispose=function(){this.loadingAgent&&this.loadingAgent!==n.TILE_AGENT_DONE&&this.loadingAgent.dispose(),this.loadingAgent=null,this.abortRequest(),this._unsetUpsampleInfo(),this.pendingUpdates=0,this.disposeData()},l.disposeData=function(){this.data=s.releaseTileData(this.data)},l._unsetUpsampleInfo=function(){this._upsampleInfo&&(this._upsampleInfo.tile.unrefMapData(),this._pool.release(this._upsampleInfo),this._upsampleInfo=null)},l.setUpsampleInfo=function(t,e){if(t!==e&&null!=e){if(null==this._upsampleInfo)this._upsampleInfo=this._pool.acquire();else{if(this._upsampleInfo.tile===e)return;this._upsampleInfo.tile.unrefMapData()}e.refMapData(),i.computeUpsampleInfo(t,e,this._upsampleInfo)}else this._unsetUpsampleInfo()},t.makeEmptyLayerInfo=function(e,s,i){return i?(i.init(e),i):new t(e,s)},e._createClass(t,[{key:"upsampleInfo",get:function(){return this._upsampleInfo}}]),t}();t.TilePerLayerInfo=l,Object.defineProperty(t,"__esModule",{value:!0})}));

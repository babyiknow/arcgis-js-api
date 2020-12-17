/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../core/promiseUtils"],(function(t,o,r){"use strict";let l=function(){function t(){this._abortController=null,this._loadStatus=0,this._loadError=null,this._loader=null,this.logger=null}var l=t.prototype;return l.load=function(t,o){return 1===this._loadStatus?(t&&t(),this._loader):2===this._loadStatus?(o&&o(this._loadError),this._loader):(this._loader||(this._abortController=r.createAbortController(),this._loader=this.doLoad(this._abortController.signal).then((()=>{this._abortController=null,this._loadStatus=1}),(t=>{throw this._loadError=t,this._abortController=null,this._loadStatus=2,!r.isAbortError(t)&&this.logger&&t.message&&this.logger.warn(t.message),t}))),this._loader.then(t,o).catch((()=>{})),this._loader)},l.abortLoad=function(){this._abortController?(this._abortController.abort(),this._abortController=null):0===this._loadStatus&&(this._loadStatus=2),this._loader=null},o._createClass(t,[{key:"loadStatus",get:function(){return this._loadStatus}}]),t}();t.Loadable=l,Object.defineProperty(t,"__esModule",{value:!0})}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["../../../../chunks/_rollupPluginBabelHelpers","../../../../core/maybe","./Loadable","./symbolComplexity"],(function(i,t,e,o){"use strict";return function(e){function s(i,t){var o;return(o=e.call(this)||this).symbol=i,o.convert=t,o.graphics3DSymbol=null,o.referenced=0,o}i._inheritsLoose(s,e);var r=s.prototype;return r.getSymbolLayerSize=function(i){return t.isSome(this.graphics3DSymbol)?this.graphics3DSymbol.getSymbolLayerSize(i):null},r.doLoad=async function(i){const t=await this.symbol.fetchSymbol({signal:i});t.id=this.symbol.id,this.graphics3DSymbol=this.convert(t),await this.graphics3DSymbol.load()},r.createGraphics3DGraphic=function(i){return t.isSome(this.graphics3DSymbol)?this.graphics3DSymbol.createGraphics3DGraphic(i,this):null},r.globalPropertyChanged=function(i,e){return!!t.isSome(this.graphics3DSymbol)&&this.graphics3DSymbol.globalPropertyChanged(i,e)},r.applyRendererDiff=function(i,e){return!!t.isSome(this.graphics3DSymbol)&&this.graphics3DSymbol.applyRendererDiff(i,e)},r.prepareSymbolPatch=function(i){t.isSome(this.graphics3DSymbol)&&this.graphics3DSymbol.prepareSymbolPatch(i)},r.updateGeometry=function(i,e){return!!t.isSome(this.graphics3DSymbol)&&this.graphics3DSymbol.updateGeometry(i,e)},r.onRemoveGraphic=function(){},r.getFastUpdateStatus=function(){return t.isSome(this.graphics3DSymbol)?this.graphics3DSymbol.getFastUpdateStatus():{loading:1,fast:0,slow:0}},r.destroy=function(){t.isSome(this.graphics3DSymbol)&&this.graphics3DSymbol.destroy(),this.graphics3DSymbol=void 0,this.abortLoad()},i._createClass(s,[{key:"extentPadding",get:function(){return t.isSome(this.graphics3DSymbol)?this.graphics3DSymbol.extentPadding:0}},{key:"complexity",get:function(){return t.isSome(this.graphics3DSymbol)?this.graphics3DSymbol.complexity:o.emptySymbolComplexity}},{key:"destroyed",get:function(){return void 0===this.graphics3DSymbol}}]),s}(e.Loadable)}));

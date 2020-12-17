/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../../../core/maybe","../../../symbols/SimpleLineSymbol","../../../symbols/SimpleMarkerSymbol","../../../Graphic","../../../layers/GraphicsLayer"],(function(e,r,i,s,t,o){"use strict";let a=function(){function e(e){this._view=e,this._graphicsLayer=new o({listMode:"hide"}),this._view.map.add(this._graphicsLayer)}var a=e.prototype;return a.destroy=function(){this._view.map.remove(this._graphicsLayer),this._graphicsLayer.destroy(),this._graphicsLayer=null},a.update=function(e){for(;this._graphicsLayer.graphics.length>e.length;)this._graphicsLayer.graphics.pop().destroy();for(;this._graphicsLayer.graphics.length<e.length;)this._graphicsLayer.add(new t({symbol:new s({size:6,outline:new i({color:[255,255,255,1],width:1})})}));e.forEach(((e,i)=>{const{color:s,hoveredPoint:t}=e,o=this._graphicsLayer.graphics.getItemAt(i);o.geometry=t.clone(),r.isSome(o.symbol)&&"simple-marker"===o.symbol.type&&(o.symbol.color=s)}))},e}();e.HoveredPoints2D=a,Object.defineProperty(e,"__esModule",{value:!0})}));

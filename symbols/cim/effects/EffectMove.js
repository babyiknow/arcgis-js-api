/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../../../core/lang","../../../geometry/support/jsonUtils"],(function(t,e,i){"use strict";let n=function(){function t(){}return t.local=function(){return null===t.instance&&(t.instance=new t),t.instance},t.prototype.execute=function(t,e,i){return new o(t,e,i)},t}();n.instance=null;let o=function(){function t(t,e,i){this._inputGeometries=t,this._offsetX=void 0!==e.offsetX?e.offsetX*i:0,this._offsetY=void 0!==e.offsetY?-e.offsetY*i:0}var n=t.prototype;return n.next=function(){let t=this._inputGeometries.next();for(;t;){if(i.isExtent(t))return{xmin:t.xmin+this._offsetX,xmax:t.xmax+this._offsetX,ymin:t.ymin+this._offsetY,ymax:t.ymax+this._offsetY};if(i.isPolygon(t)){const i=e.clone(t);return this._moveMultipath(i.rings,this._offsetX,this._offsetY),i}if(i.isPolyline(t)){const i=e.clone(t);return this._moveMultipath(i.paths,this._offsetX,this._offsetY),i}if(i.isMultipoint(t)){const i=e.clone(t);return this._movePath(i.points,this._offsetX,this._offsetY),i}if(i.isPoint(t))return{x:t.x+this._offsetX,y:t.y+this._offsetY};t=this._inputGeometries.next()}return null},n._moveMultipath=function(t,e,i){if(t)for(const n of t)this._movePath(n,e,i)},n._movePath=function(t,e,i){if(t)for(const n of t)n[0]+=e,n[1]+=i},t}();t.EffectMove=n,Object.defineProperty(t,"__esModule",{value:!0})}));

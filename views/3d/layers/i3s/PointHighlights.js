/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../core/maybe","../../../../core/handleUtils","../../webgl-engine/lib/Object3DStateSet"],(function(e,t,i,n,o){"use strict";let h=function(){function e(e){this.context=e,this.highlights=new Set}var i=e.prototype;return i.destroy=function(){this.highlights=null},i.add=function(e){const t=new s(e);return this.highlights.add(t),this.enableSet(t),n.makeHandle((()=>this.removeSet(t)))},i.removeSet=function(e){this.disableSet(e),this.highlights.delete(e)},i.enableSet=function(e){e.enabled||(e.enabled=!0,this.context.forEachNode((t=>this.enableSetForNode(e,t))))},i.enableSetForNode=function(e,t){if(!e.enabled)return;const i=e.ids.get(t.id);i&&i.forEach((i=>this.context.addHighlight(t,i,e.id)))},i.disableSet=function(e){e.enabled&&(e.enabled=!1,this.context.forEachNode((t=>this.disableSetForNode(e,t))))},i.disableSetForNode=function(e,t){e.enabled||this.context.removeHighlight(t,e.id)},i.nodeAdded=function(e){this.highlights.forEach((t=>this.enableSetForNode(t,e)))},i.nodeRemoved=function(e){this.highlights.forEach((t=>this.disableSetForNode(t,e)))},i.removeAll=function(){this.highlights.forEach((e=>this.disableSet(e)))},t._createClass(e,[{key:"hasHighlights",get:function(){return this.highlights.size>0}}]),e}(),s=function(){function e(e){this.id=o.generateObject3DStateId(0),this.ids=new Map,this.enabled=!1;for(const t of e)i.isSome(t)&&this.add(t.nodeId,t.pointId)}return e.prototype.add=function(e,t){const i=this.ids.get(e);i?i.add(t):this.ids.set(e,new Set([t]))},e}();e.PointHighlights=h,Object.defineProperty(e,"__esModule",{value:!0})}));

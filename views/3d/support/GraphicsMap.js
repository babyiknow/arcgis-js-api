/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../../../chunks/_rollupPluginBabelHelpers","../../../core/Evented","../../../core/MapUtils"],(function(e,t,n,o){"use strict";let i=function(e){function n(){var t;return(t=e.apply(this,arguments)||this)._map=new Map,t}t._inheritsLoose(n,e);var i=n.prototype;return i.clear=function(){if(this._map.size>0){const e=this.toArray();this._map.clear(),this.emit("change",{added:[],removed:e})}},i.get=function(e){return this._map.get(e)},i.addMany=function(e){if(0===e.length)return;const t=new Set;for(let n=0;n<e.length;n++){const o=e[n],i=o.objectId,s=this._map.get(i);s?(t.add(i),o!==s&&(e[n]=s),++s.refCount):(o.refCount=1,this._map.set(i,o))}const n=t.size>0?e.filter((e=>!t.has(e.objectId))):e;n.length>0&&this.emit("change",{added:n,removed:[]})},i.removeMany=function(e){const t=[];for(const n of e){const e=n.objectId,o=this._map.get(e);null!=o&&--o.refCount<=0&&(this._map.delete(e),t.push(n))}t.length>0&&this.emit("change",{added:[],removed:t})},i.removeManyByObjectId=function(e){const t=[];for(const n of e){const e=this._map.get(n);null!=e&&--e.refCount<=0&&(this._map.delete(n),t.push(e))}t.length>0&&this.emit("change",{added:[],removed:t})},i.toArray=function(){return[...this._map.values()]},i.find=function(e){let t;return o.someMap(this._map,(n=>!!e(n)&&(t=n,!0))),t},i.forEach=function(e){this._map.forEach((t=>e(t)))},t._createClass(n,[{key:"length",get:function(){return this._map.size}}]),n}(n);e.GraphicsMap=i,Object.defineProperty(e,"__esModule",{value:!0})}));

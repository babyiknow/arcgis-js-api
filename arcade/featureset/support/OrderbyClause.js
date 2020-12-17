/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define((function(){"use strict";function t(t,e){return t===e?0:null===t?-1:null===e?1:t<e?-1:1}return function(){function e(t){const e=t.split(",");this._fields=[],this._directions=[];for(let t=0;t<e.length;t++){const i=e[t].match(/\S+/g);this._fields.push(i[0]),2===i.length?"asc"===i[1].toLowerCase()?this._directions.push(1):this._directions.push(0):this._directions.push(1)}}var i=e.prototype;return i.constructClause=function(){let t="";for(let e=0;e<this._fields.length;e++)0!==e&&(t+=","),t+=this._fields[e],1===this._directions[e]?t+=" ASC":t+=" DESC";return t},i.order=function(e){e.sort(((e,i)=>{for(let s=0;s<this._fields.length;s++){const r=this.featureValue(e.feature,this._fields[s],s),n=this.featureValue(i.feature,this._fields[s],s);let o=0;if(o=1===this._directions[s]?t(r,n):-1*t(r,n),0!==o)return o}return 0}))},i.scanForField=function(t){for(let e=0;e<this._fields.length;e++)if(this._fields[e].toLowerCase().trim()===t.toLowerCase().trim())return!0;return!1},i.replaceFields=function(t){let i="";for(let e=0;e<this._fields.length;e++){0!==e&&(i+=",");let s=this._fields[e];for(const e of t)if(s.toLowerCase()===e.field.toLowerCase()){s=e.newfield;break}i+=s,1===this._directions[e]?i+=" ASC":i+=" DESC"}return new e(i)},i.featureValue=function(t,e,i){const s=t.attributes[e];if(void 0!==s)return s;for(const s in t.attributes)if(e.toLowerCase()===s.toLowerCase())return this._fields[i]=s,t.attributes[s];return null},e}()}));

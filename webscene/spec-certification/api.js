/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../../core/has","../../core/accessorSupport/ensureType","../../core/accessorSupport/extensions/serializableProperty/type","../../Basemap","../../Ground","../../layers/mixins/operationalLayers","../../WebScene","../../layers/support/source/MapLayerSource","../../chunks/DataLayerSource","../../layers/GroupLayer","../../layers/KMLLayer","../../layers/support/Sublayer","../../layers/mixins/operationalLayerModuleMap","./utils"],(function(e,t,n,r,a,y,p,s,o,u,l,i,c,f,m){"use strict";async function d(e,t,n){switch(t.typeName){case"array":await async function(e,t,n){await d(`${e}[]`,t.elementType,n)}(e,t,n);break;case"union":await async function(e,t,n){const r=[];for(const a of t.types)if("native"!==a.type.typeName&&t.key){const t=`${e}<${w(a.type,a.value)}>`;await d(t,a.type,n)}else r.push(a.type);if(r.length){const a=r.map(k);t.nullable&&a.push("null"),a.sort(),n.addProperty({type:a.join("|"),name:e,default:t.default})}}(e,t,n);break;case"json":await N(e,t,n);break;case"native":await async function(e,t,n){n.addProperty({name:e,type:k(t),default:t.default})}(e,t,n);break;case"enum":await async function(e,t,n){const r=t.values.slice();t.nullable&&r.push(null);n.currentClass&&n.currentClass.typeValue&&"type"===e?n.addProperty({name:e,type:"string",enum:`"${n.currentClass.typeValue}"`}):n.addProperty({name:e,type:k(t),enum:b(r).map((e=>"string"==typeof e?`"${e}"`:`${e}`)).join("|"),default:t.default})}(e,t,n)}}function b(e){const t=e.slice();return t.sort(),t}function w(e,t){if("json"===e.typeName){const t=e.type.__accessorMetadata__,n=t&&t.properties&&t.properties&&t.properties.type,r=n&&C(n),a=r&&r.type,y=a||n&&n.type;if(y&&Array.isArray(y)&&1===y.length&&"string"==typeof y[0])return a?y[0]:S(n,y[0])}return t}async function g(e,t){return e.type===s&&"layers"===t?h("web-scene/operational-layers"):e.type!==a||"baseLayers"!==t&&"baseMapLayers"!==t?e.type===a&&"elevationLayers"===t||e.type===y&&"layers"===t?h("web-scene/ground"):e.type===l&&"layers"===t?h("web-scene/operational-layers",(e=>e!==l)):e.type!==u.JoinTableDataSource||"leftTableSource"!==t&&"rightTableSource"!==t?null:M({key:"type",base:null,typeMap:{"data-layer":u.DataLayerSource,"map-layer":o.MapLayerSource}}):h("web-scene/basemap")}async function v(e,t,n){const r=await g(e,t);return r||function(e){const t=C(e);if(t.types)return M(t.types);if(!t.type&&e.types)return M(e.types);return j(function(e){const t=C(e),n=O(e),r=L(t&&t.type||e.type);t&&void 0!==t.default&&"function"!=typeof t.default&&(r.default=S(e,t.default));n.allowNull&&(r.nullable=!0);return r}(e))}(n)}async function N(e,t,n){const r=t.type.__accessorMetadata__,a=t.type.prototype.declaredClass.replace(/\./g,"/");const y=r&&r.properties;if(!y)return e&&n.addProperty({name:e,type:"unknown"}),null;let p=a,s=null;const o=e&&e.match(/<([^>]+)>$/);o&&(p+=`--${o[1]}`,s=o[1]),t.type===c&&(p+=`--${n.currentClass.name}`,s=n.currentClass.name);const u=n.seen.get(p);if(u&&e)return n.addProperty({name:e,type:u}),u;const l={type:t.type,name:a,id:p,properties:[]};e&&(n.addProperty({name:e,type:l}),l.typeValue=s),n.push(e,l);for(const e in y){const r=y[e],a=O(r);if(!a||!a.enabled)continue;if(t.type===c){const e="esri/layers/TileLayer"===n.stack[n.stack.length-2].klass.name;if(e&&c.test.isMapImageLayerOverridePolicy(a.overridePolicy)||!e&&c.test.isTileImageLayerOverridePolicy(a.overridePolicy))continue}const p=a.target;if("string"==typeof p||null==p){const a=await v(t,e,r);if(!a)continue;await d("string"==typeof p?p:e,a,n)}else await T(t,p,n)}return n.pop()}async function T(e,t,n){for(const r in t){let a=await g(e,r);if(!a){const e=t[r];a=e.types?M(e.types):L(e.type),a.default=e.default,a=j(a)}await d(r,a,n)}}async function h(e,t){const n={typeName:"union",key:"layerType",types:[]};for(const r in p.supportedTypes[e]){if("web-scene/operational-layers"===e&&"ArcGISTiledElevationServiceLayer"===r)continue;const a=await f.typeModuleMap[r]();a&&(t&&!t(a)||a!==i&&n.types.push({type:{typeName:"json",type:a},value:r}))}if(0===n.types.length)return null;return{typeName:"array",elementType:1===n.types.length?n.types[0].type:n}}function k(e){switch(e.typeName){case"array":return`${k(e.elementType)}[]`;case"union":{const t=e.types.map((e=>k(e.type)));return e.nullable&&t.push("null"),t.sort(),`${t.join(" | ")}`}case"native":switch(e.type){case Number:return"number";case n.Integer:return"integer";case String:return"string";case Boolean:return"boolean";case Object:return"object";default:return"unknown"}case"json":return e.type.prototype.declaredClass;case"enum":return"string";default:return}}function j(e){if("array"===e.typeName)return e.elementType=j(e.elementType),e;const t=function(e){if("json"!==e.typeName)return null;const t=e.type.__accessorMetadata__,n=t&&t.properties&&t.properties.type,r=n&&C(n),a=r&&r.type,y=a||n&&n.type;return y&&Array.isArray(y)&&"string"==typeof y[0]?a||n.type.map((e=>S(n,e))):null}(e);return t?{typeName:"union",key:"type",types:t.map((t=>({value:t,type:e})))}:e}function M(e){if(Array.isArray(e))return{typeName:"array",elementType:M(e[0])};const t=[];for(const n in e.typeMap){const r=e.typeMap[n];t.push({type:L(r),value:_(r)?null:n})}return{typeName:"union",key:"string"==typeof e.key?e.key:"type",types:t}}function S(e,t){const n=O(e);if(null!=(r=n.writer)&&r.isJSONMapWriter){const e={value:""};return n.writer(t,e,"value"),e.value}var r;return t}function L(e){return e?n.isLongFormType(e)?P(e):Array.isArray(e)?"string"==typeof e[0]||"number"==typeof e[0]?{typeName:"enum",values:e}:e.length>1?{typeName:"union",key:null,types:e.map((e=>({type:L(e),value:null})))}:{typeName:"array",elementType:L(e[0])}:r.isCollection(e)?function(e){const t=e.prototype.itemType&&e.prototype.itemType.Type;if(!t)return{typeName:"array",elementType:{typeName:"native",type:null}};if("function"==typeof t)return{typeName:"array",elementType:L(t)};if(t.typeMap){const e=[];for(const n in t.typeMap){const r=t.typeMap[n];e.push({type:L(r),value:_(r)?null:n})}return{typeName:"array",elementType:{typeName:"union",key:"string"==typeof t.key?t.key:"type",types:e}}}}(e):_(e)?{typeName:"native",type:e}:function(e){let t=e;for(;t;){if(t.prototype&&("esri.core.JSONSupport"===t.prototype.declaredClass||"esri.core.MultiOriginJSONSupport"===t.prototype.declaredClass))return!0;t=Object.getPrototypeOf(t)}return!1}(e)?{typeName:"json",type:e}:{typeName:"native",type:null}:{typeName:"native",type:null}}function P(e){switch(e.type){case"native":return{typeName:"native",type:e.value};case"array":return{typeName:"array",elementType:L(e.value)};case"one-of":return{typeName:"union",key:null,types:e.values.map((e=>({type:P(e),value:null})))};default:return}}function _(e){return e===String||e===Boolean||e===Number||e===n.Integer||e===Object}function C(e){if(!e.json)return null;const t=e.json.origins,n=e.json,r=t&&t["web-scene"],a=t&&t["web-document"];return r||a||n||null}function O(e){if(!e.json)return null;const t=e.json.origins,n=e.json.write,r=t&&t["web-scene"]&&t["web-scene"].write,a=t&&t["web-document"]&&t["web-document"].write;return r||a||n||null}e.scan=async function(e){return N(null,{typeName:"json",type:e},new m.ScanContext)},Object.defineProperty(e,"__esModule",{value:!0})}));

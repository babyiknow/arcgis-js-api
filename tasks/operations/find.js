/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../../layers/support/layerUtils"],(function(e,i){"use strict";e.findToFindRESTParameters=function(e){const{contains:n,dynamicLayers:s,geometryPrecision:t,layerDefinitions:r,layerIds:o,maxAllowableOffset:l,outSR:a,returnGeometry:f,searchFields:c,searchText:d}=e.toJSON(),y={contains:n,returnGeometry:f,geometryPrecision:t,maxAllowableOffset:l,searchText:d};if(o&&(y.layers=o.join(",")),c&&(y.searchFields=c.join(",")),a&&(y.sr=a.wkid||JSON.stringify(a)),r){const e=[];for(let i=0;i<r.length;i++){const n=r[i];e[n.id]=n.definitionExpression}y.layerDefs=i.serializeLayerDefinitions(e)}if(s&&s.length){const e=[];for(let i=0;i<s.length;i++){const n=s[i],t=n.id;if(!n.subLayerIds&&o&&-1!==o.indexOf(t)){const i={id:t};i.source=n.source;let s=null;if(r&&r.length){const e=r.filter((e=>e.id===t))[0];s=e&&e.definitionExpression}s&&(i.definitionExpression=s),e.push(i)}}let i=JSON.stringify(e);"[]"===i&&(i="[{}]"),y.dynamicLayers=i}return y},Object.defineProperty(e,"__esModule",{value:!0})}));

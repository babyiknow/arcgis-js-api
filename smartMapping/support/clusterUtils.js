/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../../core/maybe","../../core/arrayUtils","../../renderers/visualVariables/support/sizeVariableUtils","../../core/MD5","./utils","../popup/support/utils"],(function(e,n,t,i,o,l,r){"use strict";function a(e,t){const r=function(e){if(!e)return null;const{field:n,valueExpression:t,normalizationField:o,normalizationType:r,normalizationTotal:a}=e;let s=null;if(t)s=t;else if(n){const e=l.getNormalizationType({normalizationType:r,normalizationField:o,normalizationTotal:a});if(e){const t=e.toLowerCase();if(s=n.toLowerCase()+",norm:"+t,o)s+=","+o.toLowerCase();else if("percent-of-total"===t){let e=a;i.isValidNumber(e)&&0!==e||(e=null),s+=","+e}}}return s}(e);return`${t}_${n.isSome(r)?function(e){return o.createMD5Hash(e)}(r):e.field}`}function s(e,n){const t=n.getField(e);return t&&t.type}function u(e,t){const i="field"in t&&t.field,o=i?s(i,e):null;return{field:i,fieldType:n.isSome(o)?o:null,valueExpression:"valueExpression"in t?t.valueExpression:null,valueExpressionTitle:"valueExpressionTitle"in t?t.valueExpressionTitle:null,normalizationField:"normalizationField"in t?t.normalizationField:null,normalizationType:"normalizationType"in t?t.normalizationType:null,normalizationTotal:"normalizationTotal"in t?t.normalizationTotal:null}}function p(e,t){const i="rotation"===t.type?t.rotationType:null,o=t.legendOptions&&t.legendOptions.title,l=t.field,r=l?s(l,e):null;return{field:l,fieldType:n.isSome(r)?r:null,rotationType:i,valueExpression:t.valueExpression,valueExpressionTitle:t.valueExpressionTitle||t.valueExpression&&o,normalizationField:"normalizationField"in t?t.normalizationField:null,vvType:t.type}}function f(e){return e?e.replace(/"/g,'\\"'):""}function c(e,n){const t=[a(e,n)];return"date"===e.fieldType&&t.push(e.fieldType.toLowerCase()),e.rotationType&&t.push(e.rotationType.toLowerCase()),t.join("_")}function d(e,n){return{statisticHash:c(e,n),attributeInfo:e,statisticType:n}}e.clusterCountField="cluster_count",e.getClusterField=function(e,n){return`cluster_${a(e,n)}`},e.getClusterFieldHash=function(e,n){return e.split(`cluster_${n}_`).pop()},e.getPredominantTypeExpression=function(e,n,t){return`\n  var uvInfos = [${function(e){return e.map((e=>`{\n        "value": "${String(e.value)}",\n        "label": "${f(String(e.label))}"\n      }`))}(e).join(", ")}];\n  var predominantType = Text($feature["${n}"]);\n  var label = "${f(t)}";\n\n  for (var i = 0; i < Count(uvInfos); i++) {\n    if (uvInfos[i].value == predominantType) {\n      label = uvInfos[i].label;\n      break;\n    }\n  }\n\n  return label;\n  `},e.getRendererAttributeInfo=u,e.getStatisticId=a,e.getStatisticInfo=d,e.getStatisticInfos=function(e,n,i=!0){const o=[],l=u(e,n);"class-breaks"===n.type?o.push(d(l,"avg")):"unique-value"===n.type&&o.push(d(l,"type"));const a=r.getPrimaryVisualVariables(n);for(const n of a){const t=p(e,n);o.push(d(t,"avg"))}return i?t.unique(o,((e,n)=>e.statisticHash===n.statisticHash)):o},e.getVariableAttributeInfo=p,Object.defineProperty(e,"__esModule",{value:!0})}));

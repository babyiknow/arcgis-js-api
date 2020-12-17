/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../../core/maybe","../../core/urlUtils","../../core/promiseUtils","../../geometry/support/jsonUtils","../../request","../../geometry/support/normalizeUtils","./queryZScale","./pbfQueryUtils","./urlUtils"],(function(e,t,r,n,i,u,o,s,a,l){"use strict";const y="Layer does not support extent calculation.";function c(e,r){const n=e.geometry,u=e.toJSON(),o=u;if(t.isSome(n)&&(o.geometry=JSON.stringify(n),o.geometryType=i.getJsonType(n),o.inSR=n.spatialReference.wkid||JSON.stringify(n.spatialReference)),u.groupByFieldsForStatistics&&(o.groupByFieldsForStatistics=u.groupByFieldsForStatistics.join(",")),u.objectIds&&(o.objectIds=u.objectIds.join(",")),u.orderByFields&&(o.orderByFields=u.orderByFields.join(",")),!u.outFields||!u.returnDistinctValues&&(null!=r&&r.returnCountOnly||null!=r&&r.returnExtentOnly||null!=r&&r.returnIdsOnly)?delete o.outFields:-1!==u.outFields.indexOf("*")?o.outFields="*":o.outFields=u.outFields.join(","),u.outSR?o.outSR=u.outSR.wkid||JSON.stringify(u.outSR):n&&(u.returnGeometry||u.returnCentroid)&&(o.outSR=o.inSR),u.returnGeometry&&delete u.returnGeometry,u.outStatistics&&(o.outStatistics=JSON.stringify(u.outStatistics)),u.pixelSize&&(o.pixelSize=JSON.stringify(u.pixelSize)),u.quantizationParameters&&(o.quantizationParameters=JSON.stringify(u.quantizationParameters)),u.parameterValues&&(o.parameterValues=JSON.stringify(u.parameterValues)),u.rangeValues&&(o.rangeValues=JSON.stringify(u.rangeValues)),u.dynamicDataSource&&(o.layer=JSON.stringify({source:u.dynamicDataSource}),delete u.dynamicDataSource),u.timeExtent){const e=u.timeExtent,{start:t,end:r}=e;null==t&&null==r||(o.time=t===r?t:`${null==t?"null":t},${null==r?"null":r}`),delete u.timeExtent}return o}function m(e,t,r){return d(e,t,"pbf",r)}function d(e,n,i,s={},a){const y="string"==typeof e?r.urlToObject(e):e,m=n.geometry?[n.geometry]:[];return s.responseType="pbf"===i?"array-buffer":"json",o.normalizeCentralMeridian(m,null,s).then((e=>{const o=e&&e[0];t.isSome(o)&&((n=n.clone()).geometry=o);const m=l.mapParameters({...y.query,f:i,...a,...c(n,a)});return u(r.join(y.path,"query"),{...s,query:{...m,...s.query}})}))}e.executeQuery=async function(e,r,n,i){const u=t.isSome(r.timeExtent)&&r.timeExtent.isEmpty?{data:{features:[]}}:await d(e,r,"json",i);return s.applyFeatureSetZUnitScaling(r,n,u.data),u},e.executeQueryForCount=function(e,r,i){return t.isSome(r.timeExtent)&&r.timeExtent.isEmpty?n.resolve({data:{count:0}}):d(e,r,"json",i,{returnIdsOnly:!0,returnCountOnly:!0})},e.executeQueryForExtent=function(e,r,i){return t.isSome(r.timeExtent)&&r.timeExtent.isEmpty?n.resolve({data:{count:0,extent:null}}):d(e,r,"json",i,{returnExtentOnly:!0,returnCountOnly:!0}).then((e=>{const t=e.data;if(t.hasOwnProperty("extent"))return e;if(t.features)throw new Error(y);if(t.hasOwnProperty("count"))throw new Error(y);return e}))},e.executeQueryForIds=function(e,r,i){return t.isSome(r.timeExtent)&&r.timeExtent.isEmpty?n.resolve({data:{objectIds:[]}}):d(e,r,"json",i,{returnIdsOnly:!0})},e.executeQueryPBF=async function(e,r,i,u){if(t.isSome(r.timeExtent)&&r.timeExtent.isEmpty)return n.resolve({data:i.createFeatureResult()});const o=await m(e,r,u),s=o;return s.data=a.parsePBFFeatureQuery(o.data,i),s},e.executeQueryPBFBuffer=m,e.queryToQueryStringParameters=c,e.runQuery=d,Object.defineProperty(e,"__esModule",{value:!0})}));

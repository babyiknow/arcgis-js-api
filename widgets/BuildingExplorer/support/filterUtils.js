/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../../../core/maybe","../../../core/uuid","../../../layers/support/BuildingFilterModeSolid","../../../layers/support/BuildingFilterModeXRay","../../../layers/support/BuildingFilterBlock"],(function(e,t,i,r,n,o){"use strict";const l="__BUILDING_EXPLORER_FILTER__";function s(e){const t="string"==typeof e?e:e.id;return!!t&&-1!==t.indexOf(l)}function u(e){return e.filter((e=>!!e)).map((e=>`(${e})`)).join(" AND ")}e.generateFilterId=function(){return`${i.generateUUID()}__BUILDING_EXPLORER_FILTER__`},e.getFilterBlockSolid=function(e){const t=u(e);return t?new o({filterExpression:t,filterMode:new r}):null},e.getFilterBlockXRay=function(e){const t=u(e);return t?new o({filterExpression:t,filterMode:new n}):null},e.getValueFromFilters=function(e,i){for(const r of e.items)for(const e of r.filters.items){if(!s(e))continue;const r=i(e);if(t.isSome(r))return r}return null},e.isBuildingExplorerFilter=s,e.setFilterOnLayers=function(e,i){t.isNone(i)||e.forEach((e=>{e.filters=e.filters.filter((e=>!s(e))).concat([i]),e.activeFilterId=i.id}))},Object.defineProperty(e,"__esModule",{value:!0})}));

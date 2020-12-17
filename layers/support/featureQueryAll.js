/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../../core/maybe","../../tasks/support/Query"],(function(e,t,r){"use strict";function u(e){return o(e)*a(e)}function a(e){return e.capabilities.query.maxRecordCount||2e3}function o(e){return e.capabilities.query.supportsMaxRecordCountFactor?r.MAX_MAX_RECORD_COUNT_FACTOR:1}e.getMaxRecordCountFactor=o,e.getMaximumQuerySize=u,e.getMaximumRecordCount=a,e.queryAllJSON=async function(e,r,a){r=r.clone(),e.capabilities.query.supportsMaxRecordCountFactor&&(r.maxRecordCountFactor=o(e));const n=u(e),i=e.capabilities.query.supportsPagination;r.start=0,r.num=n;let c=null;for(;;){const u=await e.source.queryFeaturesJSON(r,a);if(t.isNone(c)?c=u:c.features=c.features.concat(u.features),c.exceededTransferLimit=u.exceededTransferLimit,!i||!u.exceededTransferLimit)break;r.start+=n}return c},Object.defineProperty(e,"__esModule",{value:!0})}));

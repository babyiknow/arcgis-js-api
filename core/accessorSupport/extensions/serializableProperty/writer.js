/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../../../object","./type"],(function(e,t,r){"use strict";function n(e,r,n,o){t.setDeepValue(n,i(e,o),r)}function i(e,t){return e&&"function"==typeof e.write?e.write({},t):e&&"function"==typeof e.toJSON?e.toJSON():"number"==typeof e?o(e):e}function o(e){return e===-1/0?-Number.MAX_VALUE:e===1/0?Number.MAX_VALUE:isNaN(e)?null:e}function u(e,r,n,o){let u;null===e?u=null:e&&"function"==typeof e.map?(u=e.map((e=>i(e,o))),"function"==typeof u.toArray&&(u=u.toArray())):u=[i(e,o)],t.setDeepValue(n,u,r)}function l(e,t,r){return 0!==r&&Array.isArray(e)?e.map((e=>l(e,t,r-1))):i(e,t)}e.create=function(e,i){var o;if(!i.write||i.write.writer||!1===i.write.enabled&&!i.write.overridePolicy)return;const f=null!=(o=null==e?void 0:e.ndimArray)?o:0;var a;e&&(1===f||"type"in e&&r.isCollection(e.type))?i.write.writer=u:i.write.writer=f>1?(a=f,function(e,r,n,i){let o;if(null===e)o=null;else{o=l(e,i,a);let t=a,r=o;for(;t>0&&Array.isArray(r);)t--,r=r[0];if(void 0!==r)for(let e=0;e<t;e++)o=[o]}t.setDeepValue(n,o,r)}):n},e.numberToJSON=o,Object.defineProperty(e,"__esModule",{value:!0})}));

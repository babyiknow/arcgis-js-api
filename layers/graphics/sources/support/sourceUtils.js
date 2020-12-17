/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["require","exports","../../../../geometry/support/spatialReferenceUtils","../../../support/fieldUtils"],(function(e,t,i,n){"use strict";let r=function(){this.code=null,this.description=null},l=function(e){this.error=new r,this.globalId=null,this.objectId=null,this.success=!1,this.uniqueId=null,this.error.description=e};function s(e){return new l(e)}let o=function(e){this.globalId=null,this.success=!0,this.objectId=this.uniqueId=e};const u=new Set;function a(e,t){let i=t;return"string"==typeof t&&n.isNumericField(e)?i=parseFloat(t):null!=t&&n.isStringField(e)&&"string"!=typeof t&&(i=String(t)),n.sanitizeNullFieldValue(i)}let c;async function d(){return c||(c=await new Promise((function(t,i){e(["../../../../geometry/geometryEngineJSON"],t,i)})),c)}t.createFeatureEditErrorResult=s,t.createFeatureEditSuccessResult=function(e){return new o(e)},t.loadGeometryEngine=d,t.loadGeometryEngineForSimplify=async function(e,t){!i.isValid(e)||"esriGeometryPolygon"!==t&&"esriGeometryPolyline"!==t||await d()},t.mixAttributes=function(e,t,i,r,l=!1,o){u.clear();for(const t in r){const c=e.get(t);if(!c)continue;const d=r[t],f=a(c,d);if(f!==d&&o&&o.push({name:"invalid-value-type",message:"attribute value was converted to match the field type",details:{field:c,originalValue:d,sanitizedValue:f}}),u.add(c.name),c&&(l||c.editable)){const e=n.validateFieldValue(c,f);if(e)return s(n.validationErrorToString(e,c,f));i[c.name]=f}}for(const e of t)if(!u.has(e.name))return s(`missing required field "${e.name}"`);return null},t.simplify=function(e,t){if(!e||!i.isValid(t))return e;if("rings"in e||"paths"in e){if(!c)throw new TypeError("geometry engine not loaded");return c.simplify(t,e)}return e},Object.defineProperty(t,"__esModule",{value:!0})}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../../core/Error","../../core/promiseUtils","../../PopupTemplate","../../intl/messages","./support/utils"],(function(e,n,i,r,t,a){"use strict";async function o(e){const{layer:i,renderer:r}=e;await i.load();const t=r||i.renderer;if("unique-value"!==t.type)throw new n("relationship-popup:invalid-parameters","renderer.type must be 'unique-value'");const a=t.authoringInfo;if(!a||"relationship"!==a.type)throw new n("relationship-popup:invalid-parameters","renderer.authoringInfo.type must be 'relationship'");if(!(a.field1&&a.field1.field&&a.field2&&a.field2.field))throw new n("relationship-popup:invalid-parameters","'field1' and/or 'field2' properties are missing in renderer.authoringInfo");return{layer:i,renderer:t}}async function s(e,n,i="divide"){const{fieldInfos:t,expressionInfos:o}=await a.getFieldAndExpressionInfos({renderer:e,layer:n,normFieldExpressionTemplate:i});return new r({content:await a.getContentFromFieldInfos(n,{fieldInfos:t,expressionInfos:o}),fieldInfos:t,expressionInfos:o})}e.getTemplates=async function(e){const[{renderer:n,layer:r},a]=await i.all([o(e),t.fetchMessageBundle("esri/smartMapping/t9n/smartMapping")]),l={name:"relationship",title:a.relationshipPopupTitle,value:await s(n,r)},p=[];return function(e){const n=e.authoringInfo;return!(!n.field1.normalizationField&&!n.field2.normalizationField)}(n)&&p.push({name:"relationship-percent",title:a.relationshipNormFieldAsPercent,value:await s(n,r,"percentage")}),{primaryTemplate:l,secondaryTemplates:p}},Object.defineProperty(e,"__esModule",{value:!0})}));

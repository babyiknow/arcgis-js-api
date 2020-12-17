/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../../../core/maybe","../../../core/Error","../../../renderers/support/AuthoringInfo","../../../renderers/support/rasterRendererHelper","../support/utils"],(function(e,r,a,s,t,n){"use strict";e.createRenderer=async function(e){e=await async function(e){const s=(e=await n.processRasterRendererParameters(e)).layer,{rasterInfo:t}=s;if(t.bandCount>1)throw new a("raster-class-breaks-renderer:not-supported","Multiband raster is not supported");if(!r.isSome(t.attributeTable)&&!r.isSome(t.histograms)&&(await s.updateRasterInfoWithEstimatedStats({renderingRule:e.renderingRule,signal:e.signal}),!r.isSome(t.histograms)))throw new a("raster-class-breaks-renderer:not-supported","Histograms or raster attribute table is required on the source raster. Unable to estimate histograms");const{colors:o,numClasses:i}=e;if(o&&i&&o.length!==i)throw new a("raster-class-breaks-renderer:not-supported","The size of the `colors` parameter does not match 'numClasses'");return e.field||(e.field="value"),e.classificationMethod||(e.classificationMethod="equal-interval"),e}(e);const o=t.createClassBreaksRenderer(e.layer.rasterInfo,e);if(!r.isSome(o))throw new a("raster-class-breaks-renderer:not-supported","Class breaks renderer is not supported on this data");o.authoringInfo=new s({classificationMethod:e.classificationMethod,colorRamp:e.colorRamp,standardDeviationInterval:e.standardDeviationInterval});const i={minValue:o.minValue,maxValue:o.classBreakInfos[o.classBreakInfos.length-1].maxValue,normalizationTotal:null,classBreakInfos:o.classBreakInfos.map((e=>({minValue:e.minValue,maxValue:e.maxValue,label:e.label})))};return{renderer:o,classBreaksResult:i}},Object.defineProperty(e,"__esModule",{value:!0})}));

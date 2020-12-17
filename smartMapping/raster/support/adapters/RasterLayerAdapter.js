/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["../../../../chunks/_rollupPluginBabelHelpers","../../../../chunks/tslib.es6","../../../../core/has","../../../../core/maybe","../../../../core/Logger","../../../../core/accessorSupport/ensureType","../../../../core/accessorSupport/decorators/property","../../../../core/accessorSupport/decorators/subclass","../../../../core/urlUtils","../../../../core/uuid","../../../../portal/support/resourceExtension","../../../../core/Loadable"],(function(t,e,r,s,o,a,i,p,c,n,u,d){"use strict";let l=function(e){function r(){var t;return(t=e.apply(this,arguments)||this).type="raster-layer-adapter",t}t._inheritsLoose(r,e);var o=r.prototype;return o.updateRasterInfo=async function(t){this.rasterInfo=await this.generateRasterInfo(t),this.renderingRule=null==t?void 0:t.renderingRule},o.updateRasterInfoWithEstimatedStats=async function(t){const e=this.rasterInfo;if(!s.isSome(e.histograms)||!s.isSome(e.statistics)){const{statistics:r,histograms:o}=await this.estimateStatisticsHistograms(t);s.isSome(e.statistics)||(e.statistics=r),s.isSome(e.histograms)||(e.histograms=o)}},r}(d);return e.__decorate([i.property()],l.prototype,"layer",void 0),e.__decorate([i.property()],l.prototype,"rasterInfo",void 0),e.__decorate([i.property()],l.prototype,"renderingRule",void 0),e.__decorate([i.property({readOnly:!0})],l.prototype,"type",void 0),l=e.__decorate([p.subclass("esri.smartMapping.support.adapters.RasterLayerAdapter")],l),l}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../core/has","../../../../core/maybe","../../../../core/Logger","../../../../core/mathUtils","../../../../Color","../../../../chunks/vec3f64","../../../../chunks/vec4f64","./graphicUtils","./elevationAlignmentUtils","./featureExpressionInfoUtils","./ElevationContext","./Loadable","./symbolComplexity"],(function(e,t,n,o,i,r,a,s,l,u,c,p,d,f,y){"use strict";const h=i.getLogger("esri.views.3d.layers.graphics.Graphics3DSymbolLayer");let v=function(e){function n(t,n,o,i){var r;return(r=e.call(this)||this)._elevationInfoOverride=null,r.complexity=null,r.logger=h,r._elevationOptions={supportsOffsetAdjustment:!1,supportsOnTheGround:!0},r.symbol=t,r.symbolLayer=n,r._context=o,r._renderPriority=i.renderPriority,r._renderPriorityStep=i.renderPriorityStep,r._elevationContext=new d.ElevationContext,r.complexity=r.computeComplexity(),r._updateDrivenProperties(i.ignoreDrivers),r._updateElevationContext(),r}t._inheritsLoose(n,e);var i=n.prototype;return i.getCachedSize=function(){return null},i._logGeometryCreationWarnings=function(e,t,n,o){const i=e.projectionSuccess,r="polygons"in e?e.polygons:null,a=`${o} geometry failed to be created`;let s=null;i?!t.length||1===t.length&&!t[0].length?s=`${a} (no ${n} were defined)`:Array.isArray(t)&&Array.isArray(t[0])?r&&0===r.length&&"rings"===n&&t.length>0&&t[0].length>2&&(s=`${a} (filled rings should use clockwise winding - try reversing the order of vertices)`):s=`${a} (${n} should be defined as a 2D array)`:s=`${a} (failed to project geometry to view spatial reference)`,s&&h.warnOncePerTick(s)},i._validateGeometryType=function(e,t,n){return!!t.includes(e.type)||(this.logger.warn("unsupported geometry type for "+n+` symbol: ${e.type}`),!1)},i._validateGeometry=function(e){if("point"===e.type){const t=e;if(!r.isFinite(t.x)||!r.isFinite(t.y))return h.warn("point coordinate is not a valid number, graphic skipped"),!1}return!0},i._defaultElevationInfoNoZ=function(){return g},i._defaultElevationInfoZ=function(){return m},i._updateElevationContext=function(){o.isSome(this._elevationInfoOverride)?(this._elevationContext.setFromElevationInfo(this._elevationInfoOverride),this._elevationContext.updateFeatureExpressionInfoContext(null)):this._context.layer.elevationInfo?(this._elevationContext.setFromElevationInfo(this._context.layer.elevationInfo),this._elevationContext.updateFeatureExpressionInfoContext(this._context.featureExpressionInfoContext)):this._elevationContext.reset()},i.getDefaultElevationInfo=function(e){return e.hasZ?this._defaultElevationInfoZ():this._defaultElevationInfoNoZ()},i.getGeometryElevationMode=function(e,t=this.getDefaultElevationInfo(e)){return this._elevationContext.mode||t.mode},i.setElevationInfoOverride=function(e){this._elevationInfoOverride=e,this._updateElevationContext()},i.setGraphicElevationContext=function(e,t){const n=o.unwrap(e.geometry),i=this.getDefaultElevationInfo(n);t.unit=null!=this._elevationContext.unit?this._elevationContext.unit:i.unit,t.mode=this.getGeometryElevationMode(n,i),t.offsetMeters=o.unwrapOr(this._elevationContext.meterUnitOffset,o.unwrapOr(i.offset,0));const r=!this._elevationOptions.supportsOnTheGround&&"on-the-ground"===t.mode;r&&(t.mode="relative-to-ground",t.offsetMeters=0);const a=r?p.zeroContext:this._elevationContext.featureExpressionInfoContext;return t.updateFeatureExpressionInfoContext(a,e,this._context.layer),t},i.prepareSymbolLayerPatch=function(e){},i.updateGeometry=function(e,t){return!1},i.onRemoveGraphic=function(e){},i._updateDrivenProperties=function(e){const t={color:!1,opacity:!1,opacityAlwaysOpaque:!0,size:!1};if(e)return void(this._drivenProperties=t);const n=this._context.renderer;n&&"visualVariables"in n&&n.visualVariables&&n.visualVariables.forEach((e=>{switch(e.type){case"color":if(t.color=!0,e.stops)for(let n=0;n<e.stops.length;n++){const o=e.stops[n].color;o&&(t.opacity=!0,o.a<1&&(t.opacityAlwaysOpaque=!1))}break;case"opacity":t.opacity=!0,t.opacityAlwaysOpaque=!1;break;case"size":t.size=!0}})),this._drivenProperties=t},i._getLayerOpacity=function(){if(this._context.layerView&&"fullOpacity"in this._context.layerView)return this._context.layerView.fullOpacity;const e=this._context.layer.opacity;return null==e?1:e},i._getCombinedOpacity=function(e,t=x){let n=1;return this.draped||(n*=this._getLayerOpacity()),this._drivenProperties.opacity||(o.isSome(e)?n*=e.a:t.hasIntrinsicColor||(n=0)),n},i._getCombinedOpacityAndColor=function(e,t=x){const n=this._getCombinedOpacity(e,t);if(this._drivenProperties.color)return u.mixinColorAndOpacity(null,n);const i=o.isSome(e)?a.toUnitRGB(e):s.ONES;return u.mixinColorAndOpacity(i,n)},i._getVertexOpacityAndColor=function(e,t,n){const o=this._drivenProperties.color?e.color:null,i=this._drivenProperties.opacity?e.opacity:null,r=u.mixinColorAndOpacity(o,i);return n&&(r[0]*=n,r[1]*=n,r[2]*=n,r[3]*=n),t?new t(r):r},i._getIdHint=function(e=""){return this._context.layer.id+"_symbol"+e},i.isFastUpdatesEnabled=function(){return this._fastUpdates&&this._fastUpdates.enabled},i.computeComplexity=function(){return y.defaultSymbolLayerComplexity(this.symbol,this.symbolLayer)},i.destroy=function(){this.abortLoad()},i.globalPropertyChanged=function(e,t,n){switch(e){case"opacity":return this.layerOpacityChanged(t,n);case"elevationInfo":{const e=this._elevationContext.mode;this._updateElevationContext();return this.layerElevationInfoChanged(t,n,e)!==c.SymbolUpdateType.RECREATE}case"slicePlaneEnabled":return this.slicePlaneEnabledChanged(t,n);case"physicalBasedRenderingEnabled":return this.physicalBasedRenderingChanged();case"pixelRatio":return this.pixelRatioChanged();default:return!1}},i.updateGraphics3DGraphicElevationInfo=function(e,t,n){let i=c.SymbolUpdateType.UPDATE;return e.forEach((e=>{const r=t(e);if(o.isSome(r)){const t=e.graphic;this.setGraphicElevationContext(t,r.elevationContext),r.needsElevationUpdates=n(r.elevationContext.mode)}else i=c.SymbolUpdateType.RECREATE})),i},i.applyRendererDiff=function(e,t){return!1},i.getFastUpdateAttrValues=function(e){if(!this._fastUpdates.enabled)return null;const t=this._fastUpdates.visualVariables,n=t.size?_(t.size.field,e):0,o=t.color?_(t.color.field,e):0,i=t.opacity?_(t.opacity.field,e):0;return l.fromValues(n,o,i,0)},i.ensureDrapedStatus=function(e){return null==this._draped?(this._draped=e,!0):(e!==this.draped&&h.warnOnce("A symbol can only produce either draped or non-draped visualizations. Use two separate symbol instances for draped and non-draped graphics if necessary."),!1)},t._createClass(n,[{key:"extentPadding",get:function(){return 0}},{key:"needsDrivenTransparentPass",get:function(){return this._drivenProperties.opacity&&!this._drivenProperties.opacityAlwaysOpaque}},{key:"draped",get:function(){return this._draped}}]),n}(f.Loadable);function _(e,t){const n=null!=e?t.attributes[e]:0;return null!=n&&isFinite(n)?n:0}const g={mode:"on-the-ground",offset:0,unit:"meters"},m={mode:"absolute-height",offset:0,unit:"meters"},x={hasIntrinsicColor:!1};e.Graphics3DSymbolLayer=v,e.default=v,e.getAttributeValue=_,Object.defineProperty(e,"__esModule",{value:!0})}));

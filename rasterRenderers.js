/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","./core/Warning","./renderers/ClassBreaksRenderer","./renderers/RasterColormapRenderer","./renderers/RasterShadedReliefRenderer","./renderers/RasterStretchRenderer","./renderers/UniqueValueRenderer","./renderers/VectorFieldRenderer"],(function(e,r,n,t,s,a,d,o){"use strict";const l={key:"type",base:null,typeMap:{"unique-value":d,"class-breaks":n,"raster-colormap":t,"raster-stretch":a,"vector-field":o,"raster-shaded-relief":s}},u={...l,typeMap:{...l.typeMap}};delete u.typeMap["vector-field"];const i={uniqueValue:d,classBreaks:n,rasterStretch:a,rasterColormap:t,vectorField:o,rasterShadedRelief:s};function c(e,n){if(!e)return null;const t=function(e){return e&&i[e.type]||null}(e);if(t){const r=new t;return r.read(e,n),r}return n&&n.messages&&e&&n.messages.push(new r("renderer:unsupported","Renderers of type '"+(e.type||"unknown")+"' are not supported",{definition:e,context:n})),null}e.ClassBreaksRenderer=n,e.RasterColormapRenderer=t,e.RasterShadedReliefRenderer=s,e.RasterStretchRenderer=a,e.UniqueValueRenderer=d,e.VectorFieldRenderer=o,e.fromJSON=function(e,r){return c(e,r)},e.rasterRendererTypes=l,e.read=c,e.websceneRasterRendererTypes=u,Object.defineProperty(e,"__esModule",{value:!0})}));

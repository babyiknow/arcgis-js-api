/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../../../chunks/_rollupPluginBabelHelpers"],(function(e,t){"use strict";let o=function(){function e(){this.segments=[]}var o=e.prototype;return o.interpolateComponentsAt=function(e,t){e=Math.min(Math.max(e,0),1),e*=this.time;let o=0,n=0;const s=this.definition;for(let r=0;r<this.segments.length;r++){const a=this.segments[r],i=a.definition;if(e<=a.time||r===this.segments.length-1){t=this.segmentInterpolateComponentsAt(a,e/a.time,t),s.hasPan?t.pan=(o+i.compared.pan*t.pan)/s.compared.pan:t.pan=1,s.hasRotate?t.rotate=(n+i.compared.rotate*t.rotate)/s.compared.rotate:t.rotate=1;const r=t.zoom*(i.compared.targetZoom-i.compared.sourceZoom)+i.compared.sourceZoom,m=this.segments[0].definition.compared.sourceZoom,p=this.segments[this.segments.length-1].definition.compared.targetZoom;return s.hasZoom?t.zoom=(r-m)/(p-m):t.zoom=1,t}e-=a.time,o+=i.compared.pan,n+=i.compared.rotate}},o.segmentInterpolateComponentsAt=function(e,t,o){return e.interpolateComponentsAt(t,o)},t._createClass(e,[{key:"time",get:function(){return this.segments.reduce(((e,t)=>e+t.time),0)}}]),e}();e.Path=o,e.default=o,Object.defineProperty(e,"__esModule",{value:!0})}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../chunks/tslib.es6","../../../../core/has","../../../../core/maybe","../../../../core/Logger","../../../../core/accessorSupport/ensureType","../../../../core/accessorSupport/decorators/property","../../../../core/accessorSupport/decorators/subclass","../../../../core/urlUtils","../../../../core/uuid","../../../../portal/support/resourceExtension","../../../../core/Accessor","../../../../core/mathUtils","../../../../symbols/FillSymbol3DLayer","../../../../symbols/TextSymbol3DLayer","../../../../symbols/PointSymbol3D","../../../../symbols/PolygonSymbol3D","../../../../Graphic"],(function(e,r,t,s,o,i,l,n,c,a,u,h,p,b,y,g,d,_,m){"use strict";const f=[[0,179,255],[117,62,128],[0,104,255],[215,189,166],[32,0,193],[98,162,206],[102,112,129],[52,125,0],[142,118,246],[138,83,0],[92,122,255],[122,55,83],[0,142,255],[81,40,179],[0,200,244],[13,24,127],[0,170,147],[19,58,241],[22,44,35]];e.TileTree3DDebugger=function(e){function t(r){var t;return(t=e.call(this,r)||this).updating=!1,t.enablePolygons=!0,t.enableLabels=!0,t._graphics=[],t._enabled=!0,t}r._inheritsLoose(t,e);var s=t.prototype;return s.initialize=function(){this._symbols=f.map((e=>new _(new y({material:{color:[e[0],e[1],e[2],.6]},outline:{color:"black",size:1}}))))},s.destroy=function(){this.view&&(this.clear(),this._set("view",null))},s._update=function(e,r,t){if(this.clear(),!this._enabled)return;let s;const i=t.getLabel||(e=>{let r=`${e.lij[0]}/${e.lij[1]}/${e.lij[2]}`;return o.isSome(s)&&(r+=` (${s})`),r});e.forEach(((l,n)=>{const c=l.lij[0],a=r(l);if(this.enablePolygons&&this._graphics.push(new m({geometry:a,symbol:this._symbols[c%this._symbols.length]})),this.enableLabels){const r=n/(e.length-1),c=b.lerp(0,200,r),u=b.lerp(20,6,r);s=t.getLoadPriority&&t.getLoadPriority(l);const h=o.isSome(s)&&s>=e.length,p=i(l),y=new m({geometry:a.extent.center,symbol:new d({verticalOffset:{screenLength:40/.75},callout:{type:"line",color:"white",border:{color:"black"}},symbolLayers:[new g({text:p,halo:{color:"white",size:1/.75},material:{color:[c,h?0:c,h?0:c]},size:u/.75})]})});this._graphics.push(y)}})),this.view.graphics.addMany(this._graphics)},s.clear=function(){this.view.graphics.removeMany(this._graphics),this._graphics=[]},r._createClass(t,[{key:"enabled",get:function(){return this._enabled},set:function(e){this._enabled!==e&&(this._enabled=e,this.update())}}]),t}(p),t.__decorate([n.property({constructOnly:!0})],e.TileTree3DDebugger.prototype,"view",void 0),t.__decorate([n.property({readOnly:!0})],e.TileTree3DDebugger.prototype,"updating",void 0),e.TileTree3DDebugger=t.__decorate([c.subclass("esri.views.3d.layers.support.TileTree3DDebugger")],e.TileTree3DDebugger),Object.defineProperty(e,"__esModule",{value:!0})}));

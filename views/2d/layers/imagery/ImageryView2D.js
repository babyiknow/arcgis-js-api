/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["../../../../chunks/_rollupPluginBabelHelpers","../../../../chunks/tslib.es6","../../../../core/has","../../../../core/Logger","../../../../core/accessorSupport/ensureType","../../../../core/accessorSupport/decorators/property","../../../../core/accessorSupport/decorators/enumeration","../../../../core/accessorSupport/decorators/subclass","../../../../core/urlUtils","../../../../core/uuid","../../../../portal/support/resourceExtension","../../../../core/promiseUtils","../../../../core/screenUtils","../../../../Graphic","../../../../layers/support/rasterFunctions/pixelUtils","../../../layers/LayerView","../../engine/Container","../../engine/ImageryBitmapSource","../../engine/BitmapContainer","../LayerView2D","../support/ExportStrategy"],(function(e,t,r,i,n,o,a,s,l,c,p,u,h,y,d,g,m,x,f,v,_){"use strict";const w=i.getLogger("esri.views.2d.layers.imagery.ImageryView2D");let B=function(t){function r(){var e;return(e=t.apply(this,arguments)||this).container=new m.Container,e.type="Imagery",e._bitmapView=null,e}e._inheritsLoose(r,t);var i=r.prototype;return i.update=function(e){this.strategy.update(e).catch((e=>{u.isAbortError(e)||w.error(e)}))},i.detach=function(){this.strategy.destroy(),this._bitmapView.removeAllChildren(),this.container.removeAllChildren()},i.hitTest=function(e,t){if(this.suspended)return u.resolve(null);const r=this.view.toMap(h.createScreenPoint(e,t));return u.resolve(new y({attributes:{},geometry:r,layer:this.layer}))},i.attach=function(){const e=this.layer.version>=10,t=this.layer.version>=10.1?this.layer.imageMaxHeight:2048,r=this.layer.version>=10.1?this.layer.imageMaxWidth:2048;this._bitmapView=new f.BitmapContainer,this.strategy=new _({container:this._bitmapView,imageNormalizationSupported:e,imageMaxHeight:t,imageMaxWidth:r,fetchSource:this._fetchImage.bind(this),requestUpdate:()=>this.requestUpdate()})},i.moveStart=function(){},i.viewChange=function(){},i.moveEnd=function(){},i.install=function(e){this.container.addChild(this._bitmapView),e.addChild(this.container)},i.uninstall=function(e){this.container.removeChild(this._bitmapView),e.removeChild(this.container)},i.redraw=function(){this.strategy.updateExports((e=>{e.source instanceof HTMLImageElement?e.requestRender():this.layer.applyRenderer({pixelBlock:e.source.pixelBlock}).then((t=>{const r=e.source;r.pixelBlock=t.pixelBlock,r.filter=e=>this.layer.applyFilter(e),this.container.requestRender()}))}))},i.isUpdating=function(){return this.strategy.updating||this.updateRequested},i.getPixelData=function(){if(this.updating)return null;const e=this.strategy.container.children;if(1===e.length&&e[0].source)return{extent:e[0].source.extent,pixelBlock:e[0].source.originalPixelBlock};if(e.length>1){const t=this.view.extent,r=e.map((e=>e.source)).filter((e=>e.extent&&e.extent.intersects(t))).map((e=>({extent:e.extent,pixelBlock:e.originalPixelBlock}))),i=d.mosaicPixelData(r,t);return i?{extent:i.extent,pixelBlock:i.pixelBlock}:null}return null},i._fetchImage=function(e,t,r,i){return(i=i||{}).timeExtent=this.timeExtent,i.requestAsImageElement=!0,this.layer.fetchImage(e,t,r,i).then((e=>e.imageElement?e.imageElement:this.layer.applyRenderer(e.pixelData,{signal:i.signal}).then((t=>{const r=new x(t.pixelBlock,t.extent.clone(),e.pixelData.pixelBlock);return r.filter=e=>this.layer.applyFilter(e),r}))))},e._createClass(r,[{key:"updating",get:function(){var e;return null==(e=this.strategy)?void 0:e.updating}}]),r}(v.LayerView2DMixin(g));return t.__decorate([o.property()],B.prototype,"container",void 0),t.__decorate([o.property()],B.prototype,"layer",void 0),t.__decorate([o.property()],B.prototype,"strategy",void 0),t.__decorate([o.property()],B.prototype,"timeExtent",void 0),t.__decorate([o.property({dependsOn:["strategy.updating"]})],B.prototype,"updating",null),t.__decorate([a.enumeration({imagery:"Imagery"})],B.prototype,"type",void 0),B=t.__decorate([s.subclass("esri.views.2d.layers.imagery.ImageryView2D")],B),B}));

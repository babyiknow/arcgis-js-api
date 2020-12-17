/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../core/has","../../../core/Logger","../../../core/accessorSupport/ensureType","../../../core/accessorSupport/decorators/property","../../../core/accessorSupport/decorators/subclass","../../../core/Error","../../../core/urlUtils","../../../core/uuid","../../../portal/support/resourceExtension","../../../core/promiseUtils","../../../geometry/Extent","../../layers/RefreshableLayerView","../../../layers/support/ExportWMSImageParameters","../../layers/LayerView","../../layers/WMSLayerView","../engine/BitmapContainer","./LayerView2D","./support/ExportStrategy"],(function(e,t,r,i,a,s,n,o,p,h,c,u,l,m,d,y,g,f,w,x){"use strict";const _=i.getLogger("esri.views.2d.layers.WMSLayerView2D");let S=function(t){function r(){return t.apply(this,arguments)||this}e._inheritsLoose(r,t);var i=r.prototype;return i.initialize=function(){const{layer:e,view:t}=this;e.supportsSpatialReference(t.spatialReference)||this.addResolvingPromise(u.reject(new o("layerview:spatial-reference-incompatible","The spatial references supported by this WMS layer are incompatible with the spatial reference of the view",{layer:e})))},i.hitTest=function(){return null},i.update=function(e){this.strategy.update(e).catch((e=>{u.isAbortError(e)||_.error(e)}))},i.attach=function(){const{layer:e,view:t}=this,{imageMaxHeight:r,imageMaxWidth:i}=e;this._bitmapContainer=new f.BitmapContainer,this.container.addChild(this._bitmapContainer),this.strategy=new x({container:this._bitmapContainer,fetchSource:this.fetchImage.bind(this),requestUpdate:this.requestUpdate.bind(this),imageMaxHeight:r,imageMaxWidth:i,imageRotationSupported:!1,imageNormalizationSupported:!1,hidpi:!1}),this._exportWMSImageParameters=new d({layer:e,view:t}),this.handles.add(this._exportWMSImageParameters.watch("version",(e=>{this._exportImageVersion!==e&&(this._exportImageVersion=e,this.requestUpdate())})),"wms")},i.detach=function(){this.handles.remove("wms"),this.strategy.destroy(),this._exportWMSImageParameters.layer=null,this._exportWMSImageParameters.destroy(),this._exportWMSImageParameters=null,this.container.removeChild(this._bitmapContainer),this._bitmapContainer.removeAllChildren()},i.moveStart=function(){},i.viewChange=function(){},i.moveEnd=function(){this.requestUpdate()},i.createFetchPopupFeaturesQuery=function(e){const{view:t}=this,r=this._bitmapContainer,{x:i,y:a}=e,{spatialReference:s}=t;let n=null,o=0,p=0;r.children.some((e=>{const{width:t,height:r,resolution:h,x:c,y:u}=e,m=c+h*t,d=u-h*r;return i>=c&&i<=m&&a<=u&&a>=d&&(n=new l({xmin:c,ymin:d,xmax:m,ymax:u,spatialReference:s}),o=t,p=r,!0)}));const h=n.width/o,c=Math.round((i-n.xmin)/h),u=Math.round((n.ymax-a)/h);return{extent:n,width:o,height:p,x:c,y:u}},i.doRefresh=async function(){this.requestUpdate()},i.isUpdating=function(){return this.strategy.updating||this.updateRequested},i.fetchImage=function(e,t,r,i){return this.layer.fetchImage(e,t,r,{timeExtent:this._exportWMSImageParameters.timeExtent,timestamp:this.refreshTimestamp,...i})},r}(g.WMSLayerView(m.RefreshableLayerView(w.LayerView2DMixin(y))));return t.__decorate([s.property()],S.prototype,"strategy",void 0),t.__decorate([s.property({dependsOn:["strategy.updating"]})],S.prototype,"updating",void 0),S=t.__decorate([n.subclass("esri.views.2d.layers.WMSLayerView2D")],S),S}));

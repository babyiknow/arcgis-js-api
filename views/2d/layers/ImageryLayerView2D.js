/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../core/has","../../../core/Logger","../../../core/accessorSupport/ensureType","../../../core/accessorSupport/decorators/property","../../../core/accessorSupport/decorators/subclass","../../../core/urlUtils","../../../core/uuid","../../../portal/support/resourceExtension","../../../core/promiseUtils","../../../core/watchUtils","../../layers/RefreshableLayerView","../../layers/LayerView","../../layers/ImageryLayerView","./LayerView2D","./imagery/ImageryGraphicsView2D","./imagery/ImageryView2D"],(function(e,t,i,r,s,a,n,u,o,h,l,p,c,y,d,w,v,g){"use strict";let b=function(t){function i(){var e;return(e=t.apply(this,arguments)||this)._exportImageVersion=-1,e}e._inheritsLoose(i,t);var r=i.prototype;return r.hitTest=function(e,t){return this.suspended||!this.subview?l.resolve(null):this.subview.hitTest(e,t)},r.update=function(e){var t;null==(t=this.subview)||t.update(e)},r.attach=function(){this.layer.increaseRasterJobHandlerUsage(),this._setSubView(),this.handles.add([p.init(this,"layer.exportImageServiceParameters.version",(e=>{this._exportImageVersion!==e&&(this._exportImageVersion=e,this.requestUpdate())})),this.watch("timeExtent",(()=>{this.subview.timeExtent=this.timeExtent,this.requestUpdate()})),this.layer.on("redraw",(()=>this.subview.redraw())),p.watch(this.layer,"renderer",(()=>this._setSubView()))],"imagerylayerview-update")},r.detach=function(){this.layer.decreaseRasterJobHandlerUsage(),this.subview.destroy(),this.handles.remove("imagerylayerview-update"),this._exportImageVersion=-1},r.moveStart=function(){},r.viewChange=function(){},r.moveEnd=function(){this.requestUpdate()},r.doRefresh=async function(){this.requestUpdate()},r.isUpdating=function(){return!this.subview||this.subview.isUpdating()},r._setSubView=function(){var e;let t="Imagery";var i,r;("vector-field"===(null==(e=this.layer.renderer)?void 0:e.type)&&"lerc"===this.layer.format&&(t="Graphics"),this.subview&&this.subview.type===t)||(null==(i=this.subview)||i.uninstall(this.container),null==(r=this.subview)||r.destroy(),this.subview="Imagery"===t?new g({layer:this.layer,view:this.view}):new v({layer:this.layer,view:this.view}),this.subview.attach(),this.subview.install(this.container));this.requestUpdate()},e._createClass(i,[{key:"pixelData",get:function(){return this.updating?null:this.subview.getPixelData()}},{key:"updating",get:function(){return!(this.subview&&!this.subview.updating)}}]),i}(d.ImageryLayerView(c.RefreshableLayerView(w.LayerView2DMixin(y))));return t.__decorate([a.property({dependsOn:["updating"]})],b.prototype,"pixelData",null),t.__decorate([a.property({readOnly:!0,dependsOn:["subview.updating"]})],b.prototype,"updating",null),t.__decorate([a.property()],b.prototype,"subview",void 0),b=t.__decorate([n.subclass("esri.views.2d.layers.ImageryLayerView2D")],b),b}));

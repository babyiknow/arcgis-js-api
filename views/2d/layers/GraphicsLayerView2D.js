/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../core/has","../../../core/Logger","../../../core/accessorSupport/ensureType","../../../core/accessorSupport/decorators/property","../../../core/accessorSupport/decorators/subclass","../../../core/urlUtils","../../../core/uuid","../../../portal/support/resourceExtension","../../../core/promiseUtils","../../../core/Collection","../../../Graphic","../../layers/LayerView","./graphics/GraphicsView2D","./LayerView2D"],(function(e,i,r,t,s,a,c,n,o,h,p,u,l,d,g,w){"use strict";const y={remove(){},pause(){},resume(){}};let f=function(i){function r(){return i.apply(this,arguments)||this}e._inheritsLoose(r,i);var t=r.prototype;return t.initialize=function(){this.graphicsView=new g({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:this.layer.graphics})},t.attach=function(){this.container.addChild(this.graphicsView.container),this.handles.add(this.layer.on("graphic-update",this.graphicsView.graphicUpdateHandler),"graphicslayerview2d")},t.detach=function(){this.container.removeAllChildren(),this.graphicsView.destroy(),this.handles.remove("graphicslayerview2d")},t.hitTest=function(e,i){return this.suspended||!this.graphicsView?p.resolve(null):this.graphicsView.hitTest(e,i)},t.fetchPopupFeatures=async function(e){if(this.graphicsView)return this.graphicsView.searchFeatures(e).then((e=>e.filter((e=>!!e.popupTemplate))))},t.update=function(e){this.graphicsView.processUpdate(e)},t.moveStart=function(){},t.viewChange=function(){this.graphicsView.viewChange()},t.moveEnd=function(){},t.isUpdating=function(){return!this.graphicsView||this.graphicsView.updating},t.highlight=function(e){let i;return"number"==typeof e?i=[e]:e instanceof l?i=[e.uid]:Array.isArray(e)&&e.length>0?i="number"==typeof e[0]?e:e.map((e=>e&&e.uid)):u.isCollection(e)&&(i=e.map((e=>e&&e.uid)).toArray()),i=i.filter((e=>null!=e)),i.length?(this.graphicsView.addHighlight(i),{remove:()=>this.graphicsView.removeHighlight(i)}):y},t.queryGraphics=function(){return p.resolve(this.graphicsView.graphics)},r}(w.LayerView2DMixin(d));return i.__decorate([a.property()],f.prototype,"graphicsView",void 0),i.__decorate([a.property({dependsOn:["graphicsView.updating"]})],f.prototype,"updating",void 0),f=i.__decorate([c.subclass("esri.views.2d.layers.GraphicsLayerView2D")],f),f}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["./chunks/_rollupPluginBabelHelpers","./chunks/tslib.es6","./core/has","./core/maybe","./core/Logger","./core/accessorSupport/decorators/property","./core/accessorSupport/decorators/cast","./core/accessorSupport/decorators/subclass","./core/urlUtils","./core/uuid","./portal/support/resourceExtension","./core/JSONSupport","./geometry/support/jsonUtils","./geometry","./Camera"],(function(e,r,t,o,s,a,i,c,n,p,u,l,y,m,d){"use strict";var w;let g=w=function(r){function t(e){var t;return(t=r.call(this,e)||this).rotation=0,t.scale=0,t.targetGeometry=null,t.camera=null,t}e._inheritsLoose(t,r);var s=t.prototype;return s.castRotation=function(e){return(e%=360)<0&&(e+=360),e},s.clone=function(){return new w({rotation:this.rotation,scale:this.scale,targetGeometry:o.isSome(this.targetGeometry)?this.targetGeometry.clone():null,camera:o.isSome(this.camera)?this.camera.clone():null})},t}(l.JSONSupport);function _(){return{enabled:!this.camera}}return r.__decorate([a.property({type:Number,json:{write:!0,origins:{"web-map":{default:0,write:!0},"web-scene":{write:{overridePolicy:_}}}}})],g.prototype,"rotation",void 0),r.__decorate([i.cast("rotation")],g.prototype,"castRotation",null),r.__decorate([a.property({type:Number,json:{write:!0,origins:{"web-map":{default:0,write:!0},"web-scene":{write:{overridePolicy:_}}}}})],g.prototype,"scale",void 0),r.__decorate([a.property({types:m.geometryTypes,json:{read:y.fromJSON,write:!0,origins:{"web-scene":{read:y.fromJSON,write:{overridePolicy:_}}}}})],g.prototype,"targetGeometry",void 0),r.__decorate([a.property({type:d,json:{write:!0}})],g.prototype,"camera",void 0),g=w=r.__decorate([c.subclass("esri.Viewpoint")],g),g}));

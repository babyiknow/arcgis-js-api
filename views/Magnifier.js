/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["../chunks/_rollupPluginBabelHelpers","../chunks/tslib.es6","../core/has","../core/Logger","../core/accessorSupport/ensureType","../core/accessorSupport/decorators/property","../core/accessorSupport/decorators/subclass","../core/urlUtils","../core/uuid","../portal/support/resourceExtension","../core/Accessor"],(function(e,o,r,t,s,p,i,a,c,n,l){"use strict";let y=function(o){function r(e){var r;return(r=o.call(this,e)||this).factor=1.5,r.offsetX=0,r.offsetY=0,r.position=null,r.size=120,r.mask=null,r.maskEnabled=!0,r.overlay=null,r.overlayEnabled=!0,r.visible=!1,r}return e._inheritsLoose(r,o),e._createClass(r,[{key:"version",get:function(){return this.factor,this.offsetX,this.offsetY,this.position,this.visible,this.size,this.mask,this.maskEnabled,this.overlay,this.overlayEnabled,(this._get("version")||0)+1}}]),r}(l);return o.__decorate([p.property({type:Number})],y.prototype,"factor",void 0),o.__decorate([p.property({type:Number})],y.prototype,"offsetX",void 0),o.__decorate([p.property({type:Number})],y.prototype,"offsetY",void 0),o.__decorate([p.property()],y.prototype,"position",void 0),o.__decorate([p.property({type:Number,range:{min:0}})],y.prototype,"size",void 0),o.__decorate([p.property()],y.prototype,"mask",void 0),o.__decorate([p.property()],y.prototype,"maskEnabled",void 0),o.__decorate([p.property()],y.prototype,"overlay",void 0),o.__decorate([p.property()],y.prototype,"overlayEnabled",void 0),o.__decorate([p.property({readOnly:!0,dependsOn:["factor","offsetX","offsetY","position","visible","mask","overlay","maskEnabled","overlayEnabled","size"]})],y.prototype,"version",null),o.__decorate([p.property({type:Boolean})],y.prototype,"visible",void 0),y=o.__decorate([i.subclass("esri.views.Magnifier")],y),y}));

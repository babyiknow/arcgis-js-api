/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["../chunks/_rollupPluginBabelHelpers","../chunks/tslib.es6","../core/has","../core/lang","../core/Logger","../core/accessorSupport/decorators/property","../core/accessorSupport/decorators/cast","../core/accessorSupport/decorators/enumeration","../core/accessorSupport/decorators/subclass","../core/accessorSupport/decorators/writer","../core/urlUtils","../core/uuid","../portal/support/resourceExtension","../Color","./Symbol","../core/screenUtils","./Font"],(function(t,e,o,r,i,n,s,l,p,h,a,c,d,y,u,g,f){"use strict";var _;let b=_=function(e){function o(...t){var o;return(o=e.call(this,...t)||this).backgroundColor=null,o.borderLineColor=null,o.borderLineSize=null,o.font=new f,o.horizontalAlignment="center",o.kerning=!0,o.haloColor=null,o.haloSize=null,o.rightToLeft=null,o.rotated=!1,o.text="",o.type="text",o.verticalAlignment=null,o.xoffset=0,o.yoffset=0,o.angle=0,o.width=null,o.lineWidth=192,o.lineHeight=1,o}t._inheritsLoose(o,e);var i=o.prototype;return i.normalizeCtorArgs=function(t,e,o){if(t&&"string"!=typeof t)return t;const r={};return t&&(r.text=t),e&&(r.font=e),o&&(r.color=o),r},i.writeLineWidth=function(t,e,o,r){r&&"string"!=typeof r?r.origin:e[o]=t},i.castLineWidth=function(t){return g.toPt(t)},i.writeLineHeight=function(t,e,o,r){r&&"string"!=typeof r?r.origin:e[o]=t},i.clone=function(){return new _({angle:this.angle,backgroundColor:r.clone(this.backgroundColor),borderLineColor:r.clone(this.borderLineColor),borderLineSize:this.borderLineSize,color:r.clone(this.color),font:this.font&&this.font.clone(),haloColor:r.clone(this.haloColor),haloSize:this.haloSize,horizontalAlignment:this.horizontalAlignment,kerning:this.kerning,lineHeight:this.lineHeight,lineWidth:this.lineWidth,rightToLeft:this.rightToLeft,rotated:this.rotated,text:this.text,verticalAlignment:this.verticalAlignment,width:this.width,xoffset:this.xoffset,yoffset:this.yoffset})},i.hash=function(){return`${this.backgroundColor&&this.backgroundColor.hash()}.${this.borderLineColor}.${this.borderLineSize}.${this.color.hash()}.${this.font&&this.font.hash()}.${this.haloColor&&this.haloColor.hash()}.${this.haloSize}.${this.horizontalAlignment}.${this.kerning}.${this.rightToLeft}.${this.rotated}.${this.text}.${this.verticalAlignment}.${this.width}.${this.xoffset}.${this.yoffset}.${this.lineHeight}.${this.lineWidth}.${this.angle}`},o}(u);return e.__decorate([n.property({type:y,json:{write:!0}})],b.prototype,"backgroundColor",void 0),e.__decorate([n.property({type:y,json:{write:!0}})],b.prototype,"borderLineColor",void 0),e.__decorate([n.property({type:Number,json:{write:!0}})],b.prototype,"borderLineSize",void 0),e.__decorate([n.property({type:f,json:{write:!0}})],b.prototype,"font",void 0),e.__decorate([n.property({type:["left","right","center","justify"],json:{write:!0}})],b.prototype,"horizontalAlignment",void 0),e.__decorate([n.property({type:Boolean,json:{write:!0}})],b.prototype,"kerning",void 0),e.__decorate([n.property({type:y,json:{write:!0}})],b.prototype,"haloColor",void 0),e.__decorate([n.property({type:Number,cast:g.toPt,json:{write:!0}})],b.prototype,"haloSize",void 0),e.__decorate([n.property({type:Boolean,json:{write:!0}})],b.prototype,"rightToLeft",void 0),e.__decorate([n.property({type:Boolean,json:{write:!0}})],b.prototype,"rotated",void 0),e.__decorate([n.property({type:String,json:{write:!0}})],b.prototype,"text",void 0),e.__decorate([l.enumeration({esriTS:"text"},{readOnly:!0})],b.prototype,"type",void 0),e.__decorate([n.property({type:["baseline","top","middle","bottom"],json:{write:!0}})],b.prototype,"verticalAlignment",void 0),e.__decorate([n.property({type:Number,cast:g.toPt,json:{write:!0}})],b.prototype,"xoffset",void 0),e.__decorate([n.property({type:Number,cast:g.toPt,json:{write:!0}})],b.prototype,"yoffset",void 0),e.__decorate([n.property({type:Number,json:{read:t=>t&&-1*t,write:(t,e)=>e.angle=t&&-1*t}})],b.prototype,"angle",void 0),e.__decorate([n.property({type:Number,json:{write:!0}})],b.prototype,"width",void 0),e.__decorate([n.property({type:Number})],b.prototype,"lineWidth",void 0),e.__decorate([h.writer("lineWidth")],b.prototype,"writeLineWidth",null),e.__decorate([s.cast("lineWidth")],b.prototype,"castLineWidth",null),e.__decorate([n.property({type:Number})],b.prototype,"lineHeight",void 0),e.__decorate([h.writer("lineHeight")],b.prototype,"writeLineHeight",null),b=_=e.__decorate([p.subclass("esri.symbols.TextSymbol")],b),b}));

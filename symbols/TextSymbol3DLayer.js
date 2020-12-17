/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["../chunks/_rollupPluginBabelHelpers","../chunks/tslib.es6","../core/has","../core/lang","../core/maybe","../core/Logger","../core/accessorSupport/ensureType","../core/accessorSupport/decorators/property","../core/accessorSupport/decorators/enumeration","../core/accessorSupport/decorators/subclass","../core/accessorSupport/decorators/writer","../core/urlUtils","../core/uuid","../portal/support/resourceExtension","./Symbol3DLayer","./support/materialUtils","./support/Symbol3DMaterial","./Font","./support/Symbol3DHalo"],(function(e,t,o,r,n,s,i,l,c,a,u,p,h,y,f,d,_,z,S){"use strict";var m;let b=m=function(t){function o(e){var o;return(o=t.call(this,e)||this)._userSize=void 0,o.halo=null,o.material=null,o.text=void 0,o.type="text",o}e._inheritsLoose(o,t);var s=o.prototype;return s.writeFont=function(e,t,o,r){const n={...r,textSymbol3D:!0};t.font=e.write({},n),delete t.font.size},s.clone=function(){return new m({enabled:this.enabled,font:this.font&&r.clone(this.font),halo:this.halo&&r.clone(this.halo),material:n.isSome(this.material)?this.material.clone():null,size:this.size,text:this.text})},o.fromTextSymbol=function(e){const t=function(e,t){if(e&&t>0)return{color:r.clone(e),size:t};return null}(e.haloColor,e.haloSize),o=e.font?e.font.clone():new z;return new m({size:o.size,font:o,halo:t,material:e.color?{color:e.color.clone()}:null,text:e.text})},e._createClass(o,[{key:"font",get:function(){return this._get("font")||null},set:function(e){e&&this._userSize&&(e.size=this._userSize),this._set("font",e)}},{key:"size",get:function(){return null!=this._userSize?this._userSize:this.font&&null!=this.font.size?this.font.size:9},set:function(e){this._userSize=e,this.font&&(this.font.size=this._userSize),this.notifyChange("size")}}]),o}(f);return t.__decorate([l.property({type:z,json:{write:!0}})],b.prototype,"font",null),t.__decorate([u.writer("font")],b.prototype,"writeFont",null),t.__decorate([l.property({type:S.default,json:{write:!0}})],b.prototype,"halo",void 0),t.__decorate([l.property({type:_.default,json:{write:!0}})],b.prototype,"material",void 0),t.__decorate([l.property(d.screenSizeProperty),l.property({dependsOn:["font.size"]})],b.prototype,"size",null),t.__decorate([l.property({type:String,json:{write:!0}})],b.prototype,"text",void 0),t.__decorate([c.enumeration({Text:"text"},{readOnly:!0})],b.prototype,"type",void 0),b=m=t.__decorate([a.subclass("esri.symbols.TextSymbol3DLayer")],b),b}));

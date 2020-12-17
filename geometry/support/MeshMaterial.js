/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/has","../../core/lang","../../core/maybe","../../core/Logger","../../core/accessorSupport/ensureType","../../core/accessorSupport/decorators/property","../../core/accessorSupport/decorators/subclass","../../core/urlUtils","../../core/uuid","../../portal/support/resourceExtension","../../core/JSONSupport","../../Color","./MeshTexture"],(function(e,o,r,t,l,i,p,u,n,c,s,a,d,h,y){"use strict";var f;let _=f=function(o){function r(e){var r;return(r=o.call(this,e)||this).color=null,r.colorTexture=null,r.normalTexture=null,r.alphaMode="auto",r.alphaCutoff=.5,r.doubleSided=!0,r}e._inheritsLoose(r,o);var i=r.prototype;return i.clone=function(){return this.cloneWithDeduplication(null,new Map)},i.cloneWithDeduplication=function(e,o){const r=l.isSome(e)?e.get(this):null;if(r)return r;const t=new f(this.clonePropertiesWithDeduplication(o));return l.isSome(e)&&e.set(this,t),t},i.clonePropertiesWithDeduplication=function(e){return{color:t.clone(this.color),colorTexture:this.colorTexture?this.colorTexture.cloneWithDeduplication(e):null,normalTexture:this.normalTexture?this.normalTexture.cloneWithDeduplication(e):null,alphaMode:this.alphaMode,alphaCutoff:this.alphaCutoff,doubleSided:this.doubleSided}},r}(d.JSONSupport);return o.__decorate([u.property({type:h,json:{write:!0}})],_.prototype,"color",void 0),o.__decorate([u.property({type:y,json:{write:!0}})],_.prototype,"colorTexture",void 0),o.__decorate([u.property({type:y,json:{write:!0}})],_.prototype,"normalTexture",void 0),o.__decorate([u.property({json:{write:!0}})],_.prototype,"alphaMode",void 0),o.__decorate([u.property({json:{write:!0}})],_.prototype,"alphaCutoff",void 0),o.__decorate([u.property({json:{write:!0}})],_.prototype,"doubleSided",void 0),_=f=o.__decorate([n.subclass("esri.geometry.support.MeshMaterial")],_),_}));

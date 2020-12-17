/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["../chunks/_rollupPluginBabelHelpers","../chunks/tslib.es6","../core/has","../core/Logger","../core/accessorSupport/decorators/property","../core/accessorSupport/decorators/cast","../core/accessorSupport/decorators/subclass","../core/urlUtils","../core/uuid","../portal/support/resourceExtension","../core/JSONSupport","../core/Collection","../core/collectionUtils","./Slide"],(function(e,s,r,t,o,c,i,n,l,u,p,a,d,h){"use strict";const f=a.ofType(h);let S=function(s){function r(e){var r;return(r=s.call(this,e)||this).slides=new f,r}e._inheritsLoose(r,s);var t=r.prototype;return t.destroy=function(){this.slides.forEach((e=>e.destroy())),this.slides.removeAll()},t.clone=function(){return new(0,this.constructor)({slides:this.slides.clone()})},e._createClass(r,[{key:"slides",set:function(e){e&&(e=e.filter((e=>!!e.viewpoint))),this._set("slides",d.referenceSetter(e,this._get("slides"),f))}}]),r}(p.JSONSupport);return s.__decorate([o.property({type:f,nonNullable:!0,json:{write:!0}}),c.cast(d.castForReferenceSetter)],S.prototype,"slides",null),S=s.__decorate([i.subclass("esri.webscene.Presentation")],S),S}));

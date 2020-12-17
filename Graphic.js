/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["./chunks/_rollupPluginBabelHelpers","./chunks/tslib.es6","./core/has","./core/lang","./core/maybe","./core/Logger","./core/accessorSupport/ensureType","./core/accessorSupport/decorators/property","./core/accessorSupport/decorators/subclass","./core/urlUtils","./core/uuid","./portal/support/resourceExtension","./core/JSONSupport","./geometry/support/jsonUtils","./geometry","./PopupTemplate","./chunks/symbols","./core/uid"],(function(e,t,r,o,s,i,p,u,a,l,n,y,c,h,b,m,g,d){"use strict";var _;let f=_=function(t){function r(...r){var o;return(o=t.call(this,...r)||this).isAggregate=!1,o.layer=null,o.popupTemplate=null,o.sourceLayer=null,Object.defineProperty(e._assertThisInitialized(o),"uid",{value:d.generateUID(),configurable:!0}),o}e._inheritsLoose(r,t);var i=r.prototype;return i.normalizeCtorArgs=function(e,t,r,o){return e&&!e.declaredClass?e:{geometry:e,symbol:t,attributes:r,popupTemplate:o}},i.getEffectivePopupTemplate=function(e=!1){return this.popupTemplate?this.popupTemplate:this.sourceLayer?"popupTemplate"in this.sourceLayer&&this.sourceLayer.popupTemplate?this.sourceLayer.popupTemplate:e&&"defaultPopupTemplate"in this.sourceLayer&&s.isSome(this.sourceLayer.defaultPopupTemplate)?this.sourceLayer.defaultPopupTemplate:null:null},i.getAttribute=function(e){return this.attributes&&this.attributes[e]},i.setAttribute=function(e,t){if(this.attributes){const r=this.getAttribute(e);this.attributes[e]=t,this._notifyLayer("attributes",r,t,e)}else this.attributes={[e]:t},this._notifyLayer("attributes",void 0,t,e)},i.getObjectId=function(){return this.sourceLayer&&"objectIdField"in this.sourceLayer&&this.sourceLayer.objectIdField?this.getAttribute(this.sourceLayer.objectIdField):null},i.toJSON=function(){return{geometry:s.isSome(this.geometry)?this.geometry.toJSON():null,symbol:s.isSome(this.symbol)?this.symbol.toJSON():null,attributes:{...this.attributes},popupTemplate:this.popupTemplate&&this.popupTemplate.toJSON()}},i.clone=function(){return new _(this.cloneProperties())},i.cloneProperties=function(){return{attributes:o.clone(this.attributes),geometry:o.clone(this.geometry),layer:this.layer,popupTemplate:this.popupTemplate&&this.popupTemplate.clone(),sourceLayer:this.sourceLayer,symbol:o.clone(this.symbol),visible:this.visible}},i._notifyLayer=function(e,t,r,o){if(!this.layer||!("graphicChanged"in this.layer))return;const s={graphic:this,property:e,oldValue:t,newValue:r};"attributes"===e&&(s.attributeName=o),this.layer.graphicChanged(s)},e._createClass(r,[{key:"attributes",set:function(e){const t=this._get("attributes");t!==e&&(this._set("attributes",e),this._notifyLayer("attributes",t,e))}},{key:"geometry",set:function(e){const t=this._get("geometry");t!==e&&(this._set("geometry",e),this._notifyLayer("geometry",t,e))}},{key:"symbol",set:function(e){const t=this._get("symbol");t!==e&&(this._set("symbol",e),this._notifyLayer("symbol",t,e))}},{key:"visible",set:function(e){const t=this._get("visible");t!==e&&(this._set("visible",e),this._notifyLayer("visible",t,e))}}]),r}(c.JSONSupport);return t.__decorate([u.property({value:null})],f.prototype,"attributes",null),t.__decorate([u.property({value:null,types:b.geometryTypes,json:{read:h.fromJSON}})],f.prototype,"geometry",null),t.__decorate([u.property({type:Boolean})],f.prototype,"isAggregate",void 0),t.__decorate([u.property()],f.prototype,"layer",void 0),t.__decorate([u.property({type:m})],f.prototype,"popupTemplate",void 0),t.__decorate([u.property()],f.prototype,"sourceLayer",void 0),t.__decorate([u.property({value:null,types:g.symbolTypes})],f.prototype,"symbol",null),t.__decorate([u.property({type:Boolean,value:!0})],f.prototype,"visible",null),f=_=t.__decorate([a.subclass("esri.Graphic")],f),function(e){e.generateUID=d.generateUID}(f||(f={})),f}));

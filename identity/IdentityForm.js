/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["../chunks/_rollupPluginBabelHelpers","../chunks/tslib.es6","../core/has","../core/Logger","../core/accessorSupport/ensureType","../core/accessorSupport/decorators/property","../core/accessorSupport/decorators/subclass","../core/urlUtils","../core/uuid","../portal/support/resourceExtension","../intl/substitute","../widgets/support/widgetUtils","../widgets/support/decorators/messageBundle","../widgets/support/decorators/renderable","../chunks/index","../widgets/Widget"],(function(e,s,t,r,o,i,n,u,l,a,d,p,c,_,h,b){"use strict";const m="esri-identity-form",g="esri-identity-form__group",v="esri-identity-form__label",y="esri-identity-form__footer",f="esri-input",I="esri-button",x="esri-button--secondary";let w=function(s){function t(e,t){var r;return(r=s.call(this,e,t)||this)._usernameInputNode=null,r._passwordInputNode=null,r.messages=null,r.signingIn=!1,r.server=null,r.resource=null,r.error=null,r.oAuthPrompt=!1,r}e._inheritsLoose(t,s);var r=t.prototype;return r.render=function(){const{error:e,server:s,resource:t,signingIn:r,oAuthPrompt:o,messages:i}=this,n=h.jsx("div",{class:g},d.substitute(o?i.oAuthInfo:i.info,{server:/\.arcgis\.com/i.test(s)?"ArcGIS Online":s,resource:`(${t||i.lblItem})`})),u=o?null:h.jsx("div",{class:g},h.jsx("label",{class:v},i.lblUser,h.jsx("input",{value:"",required:!0,autocomplete:"off",spellcheck:!1,type:"text",bind:this,afterCreate:p.storeNode,"data-node-ref":"_usernameInputNode",class:f}))),l=o?null:h.jsx("div",{class:g},h.jsx("label",{class:v},i.lblPwd,h.jsx("input",{value:"",required:!0,type:"password",bind:this,afterCreate:p.storeNode,"data-node-ref":"_passwordInputNode",class:f}))),a=h.jsx("div",{class:this.classes(g,y)},h.jsx("input",{type:"submit",disabled:!!r,value:r?i.lblSigning:i.lblOk,class:I}),h.jsx("input",{type:"button",value:i.lblCancel,bind:this,onclick:this._cancel,class:this.classes(I,x)})),c=e?h.jsx("div",null,e.details&&e.details.httpStatus?i.invalidUser:i.noAuthService):null;return h.jsx("form",{class:m,bind:this,onsubmit:this._submit},n,c,u,l,a)},r._cancel=function(){this._set("signingIn",!1),this._usernameInputNode&&(this._usernameInputNode.value=""),this._passwordInputNode&&(this._passwordInputNode.value=""),this.emit("cancel")},r._submit=function(e){e.preventDefault(),this._set("signingIn",!0);const s=this.oAuthPrompt?{}:{username:this._usernameInputNode&&this._usernameInputNode.value,password:this._passwordInputNode&&this._passwordInputNode.value};this.emit("submit",s)},t}(b);return s.__decorate([i.property(),_.renderable(),c.messageBundle("esri/identity/t9n/identity")],w.prototype,"messages",void 0),s.__decorate([i.property(),_.renderable()],w.prototype,"signingIn",void 0),s.__decorate([i.property(),_.renderable()],w.prototype,"server",void 0),s.__decorate([i.property(),_.renderable()],w.prototype,"resource",void 0),s.__decorate([i.property(),_.renderable()],w.prototype,"error",void 0),s.__decorate([i.property(),_.renderable()],w.prototype,"oAuthPrompt",void 0),w=s.__decorate([n.subclass("esri.identity.IdentityForm")],w),w}));

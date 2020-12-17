/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["../chunks/_rollupPluginBabelHelpers","../chunks/tslib.es6","../core/has","../core/Logger","../core/accessorSupport/ensureType","../core/accessorSupport/decorators/property","../core/accessorSupport/decorators/aliasOf","../core/accessorSupport/decorators/subclass","../core/urlUtils","../core/uuid","../portal/support/resourceExtension","./support/decorators/accessibleHandler","./support/decorators/messageBundle","./support/decorators/renderable","../chunks/index","./support/widget","./Widget","./Expand/ExpandViewModel"],(function(e,n,t,o,r,s,a,d,i,l,p,c,u,_,x,h,g,b){"use strict";const y="esri-expand esri-widget",v="esri-expand--auto",f="esri-expand--drawer",m="esri-expand--floating",C="esri-expand__container",w="esri-expand__container--expanded",T="esri-expand__panel",k="esri-widget--button",I="esri-icon-font-fallback-text",M="esri-collapse__icon",O="esri-expand__icon--expanded",j="esri-expand__icon-number",N="esri-expand__icon-number--expanded",E="esri-icon-expand",B="esri-icon-collapse",H="esri-expand__content",L="esri-expand__content--expanded",P="esri-expand__mask",S="esri-expand__mask--expanded";let W=function(n){function t(e,t){var o;return(o=n.call(this,e,t)||this).autoCollapse=null,o.collapseTooltip="",o.content="",o.expanded=null,o.expandTooltip="",o.group=null,o.iconNumber=0,o.label=void 0,o.messages=null,o.messagesCommon=null,o.mode="auto",o.view=null,o.viewModel=new b,o}e._inheritsLoose(t,n);var o=t.prototype;return o.expand=function(){this.viewModel.expanded=!0},o.collapse=function(){this.viewModel.expanded=!1},o.toggle=function(){this.viewModel.expanded=!this.viewModel.expanded},o.render=function(){const{mode:e}=this,n={[v]:"auto"===e,[f]:"drawer"===e,[m]:"floating"===e};return x.jsx("div",{class:this.classes(y,n)},this.renderMask(),this.renderContainer())},o.renderContainer=function(){const{expanded:e}=this,n={[w]:e};return x.jsx("div",{class:this.classes(C,n)},this.renderPanel(),this.renderContent())},o.renderMask=function(){const{expanded:e}=this,n={[S]:e};return x.jsx("div",{bind:this,onclick:this._toggle,class:this.classes(P,n)})},o.renderBadgeNumber=function(){const{expanded:e,iconNumber:n}=this;return n&&!e?x.jsx("span",{key:"expand__icon-number",class:j},n):null},o.renderPanelNumber=function(){const{iconNumber:e,expanded:n}=this;return e&&n?x.jsx("span",{key:"expand__expand-icon-number",class:this.classes(j,N)},e):null},o.renderIcon=function(){const{collapseIconClass:e,expandIconClass:n,expanded:t}=this,o={[O]:t,[e]:t,[n]:!t};return e===n&&(o[e]=!0),x.jsx("span",{"aria-hidden":"true",class:this.classes(M,o)})},o.renderTitle=function(){return x.jsx("span",{class:I},this.expandTitle)},o.renderExpandButton=function(){const{expanded:e,expandTitle:n,contentId:t}=this;return x.jsx("div",{bind:this,onclick:this._toggle,onkeydown:this._toggle,"aria-controls":t,"aria-expanded":e?"true":"false",title:n,role:"button",tabindex:"0",class:k},this.renderBadgeNumber(),this.renderIcon(),this.renderTitle())},o.renderPanel=function(){return x.jsx("div",{class:T},this.renderExpandButton(),this.renderPanelNumber())},o.renderContent=function(){const{expanded:e,contentId:n}=this,t={[L]:e};return x.jsx("div",{id:n,role:"region",class:this.classes(H,t)},this.renderContentContainer())},o.renderContentContainer=function(){const e=this.content;return"string"==typeof e?x.jsx("div",{innerHTML:e}):h.isWidget(e)?e.render():e instanceof HTMLElement?x.jsx("div",{bind:e,afterCreate:this._attachToNode}):h.hasDomNode(e)?x.jsx("div",{bind:e.domNode,afterCreate:this._attachToNode}):null},o._toggle=function(){this.toggle()},o._attachToNode=function(e){e.appendChild(this)},e._createClass(t,[{key:"contentId",get:function(){return`${this.id}_controls_content`}},{key:"expandTitle",get:function(){const{expanded:e,messagesCommon:n,collapseTooltip:t,expandTooltip:o}=this;return e?t||n.collapse:o||n.expand}},{key:"collapseIconClass",get:function(){return B},set:function(e){e?this._override("collapseIconClass",e):this._clearOverride("collapseIconClass")}},{key:"expandIconClass",get:function(){return h.isWidget(this.content)?this.content.iconClass:E},set:function(e){e?this._override("expandIconClass",e):this._clearOverride("expandIconClass")}}]),t}(g);return n.__decorate([s.property({readOnly:!0,dependsOn:["id"]}),_.renderable()],W.prototype,"contentId",null),n.__decorate([s.property({readOnly:!0,dependsOn:["expanded","messagesCommon","collapseTooltip","expandTooltip"]}),_.renderable()],W.prototype,"expandTitle",null),n.__decorate([a.aliasOf("viewModel.autoCollapse")],W.prototype,"autoCollapse",void 0),n.__decorate([s.property({dependsOn:["content"]}),_.renderable()],W.prototype,"collapseIconClass",null),n.__decorate([s.property(),_.renderable()],W.prototype,"collapseTooltip",void 0),n.__decorate([s.property(),_.renderable()],W.prototype,"content",void 0),n.__decorate([a.aliasOf("viewModel.expanded"),_.renderable()],W.prototype,"expanded",void 0),n.__decorate([s.property({dependsOn:["content"]}),_.renderable()],W.prototype,"expandIconClass",null),n.__decorate([s.property(),_.renderable()],W.prototype,"expandTooltip",void 0),n.__decorate([a.aliasOf("viewModel.group")],W.prototype,"group",void 0),n.__decorate([s.property(),_.renderable()],W.prototype,"iconNumber",void 0),n.__decorate([s.property({aliasOf:{source:"messages.widgetLabel",overridable:!0}})],W.prototype,"label",void 0),n.__decorate([s.property(),_.renderable(),u.messageBundle("esri/widgets/Expand/t9n/Expand")],W.prototype,"messages",void 0),n.__decorate([s.property(),_.renderable(),u.messageBundle("esri/t9n/common")],W.prototype,"messagesCommon",void 0),n.__decorate([s.property(),_.renderable()],W.prototype,"mode",void 0),n.__decorate([a.aliasOf("viewModel.view"),_.renderable()],W.prototype,"view",void 0),n.__decorate([s.property({type:b}),_.renderable("viewModel.state")],W.prototype,"viewModel",void 0),n.__decorate([c.accessibleHandler()],W.prototype,"_toggle",null),W=n.__decorate([d.subclass("esri.widgets.Expand")],W),W}));

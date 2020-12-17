/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../core/has","../../../core/maybe","../../../core/Logger","../../../core/accessorSupport/ensureType","../../../core/accessorSupport/decorators/property","../../../core/accessorSupport/decorators/subclass","../../../core/urlUtils","../../../core/uuid","../../../portal/support/resourceExtension","../../../core/events","../../support/widgetUtils","../../support/decorators/renderable","../../../chunks/index","./SliderWithDropdownViewModel","../../Slider"],(function(e,o,t,r,i,n,s,l,d,p,a,c,h,u,w,_,b){"use strict";const v="esri-interactive",m="esri-slider__label",D="esri-slider-with-dropdown__box",f="esri-slider-with-dropdown__dropdown-root",y=" esri-widget__anchor esri-slider-with-dropdown__anchor",x="esri-slider-with-dropdown__anchor--open",g="esri-slider-with-dropdown__anchor--closed",k="esri-slider-with-dropdown__list",S="esri-slider-with-dropdown__list-item",E="esri-slider-with-dropdown__list-item--selected",I="esri-slider-with-dropdown__box--drop-down-on",O="esri-slider-with-dropdown__box--drop-down-off",M="Enter",T="Escape",C="ArrowUp",N="ArrowDown";let j=function(o){function t(e,t){var r;return(r=o.call(this,e,t)||this).viewModel=new _.SliderWithDropdownViewModel,r.buttonTooltip="",r.showDropDown=!0,r.currentIndex=0,r._rootNode=null,r}e._inheritsLoose(t,o);var i=t.prototype;return i.renderThumbLabel=function(e){const t={[I]:this.showDropDown,[O]:!this.showDropDown};return w.jsx("div",{class:this.classes(D,m,t)},o.prototype.renderThumbLabel.call(this,e),this.showDropDown?w.jsx("div",{bind:this,afterCreate:this._onRootNodeCreate,class:f},w.jsx("button",{class:this.classes(v,y,this.isDropdownOpen?x:g),bind:this,onclick:this._onAnchorClick,onpointerdown:this._killEvent,"aria-label":this.buttonTooltip,title:this.buttonTooltip,"aria-expanded":this.isDropdownOpen,"aria-haspopup":"listbox",type:"button"},this.currentItem?this.currentItem.name+" ":""),this.isDropdownOpen?w.jsx("ol",{class:this.classes(k),onpointerdown:this._killEvent,onblur:this._onDropdownBlur,bind:this,tabindex:"-1","aria-label":this.buttonTooltip,role:"listbox",onkeydown:this._onOlKeyDown,afterCreate:this._focusOnSelectedItem},this.items.map(((e,o)=>w.jsx("li",{class:o===this.currentIndex?this.classes(v,S,E):this.classes(v,S),bind:this,onclick:this._onDropdownItemClick,"data-result":o,"aria-label":e.label.join(" "),role:"option","aria-selected":o===this.currentIndex,onkeydown:this._onLiKeyDown,onblur:this._onDropdownBlur,tabindex:"0"},e.label.map((e=>w.jsx("span",{bind:this},e))))))):null):null)},i._onRootNodeCreate=function(e){this._rootNode=e},i._focusOnSelectedItem=function(e){var o;const t=null!=(o=e.querySelector(`.${E}`))?o:e.firstChild;r.isSome(t)&&t instanceof HTMLElement&&(t.scrollIntoView(),t.focus())},i._onAnchorClick=function(){return this.viewModel.toggle(),!0},i._onDropdownItemClick=function(e){const o=e.currentTarget;this.viewModel.selectItem(o["data-result"])},i._onDropdownBlur=function(e){let o=e.relatedTarget;null===o&&(o=document.activeElement),r.isSome(this._rootNode)&&!this._rootNode.contains(o)&&o!==this._rootNode.parentElement&&o!==this._rootNode.parentElement.parentElement&&(this.viewModel.isDropdownOpen=!1)},i._killEvent=function(e){return e.stopPropagation(),!0},i._onOlKeyDown=function(e){event.stopPropagation(),c.eventKey(e)===T&&(this.viewModel.isDropdownOpen=!1)},i._onLiKeyDown=function(e){const o=event.target;switch(c.eventKey(e)){case C:if(o.previousElementSibling){o.previousElementSibling.focus()}break;case N:if(o.nextElementSibling){o.nextElementSibling.focus()}break;case M:o.click()}},t}(b);return o.__decorate([s.property(),u.renderable()],j.prototype,"viewModel",void 0),o.__decorate([s.property(),u.renderable()],j.prototype,"buttonTooltip",void 0),o.__decorate([s.property(),u.renderable()],j.prototype,"showDropDown",void 0),o.__decorate([s.property({aliasOf:"viewModel.items"}),u.renderable()],j.prototype,"items",void 0),o.__decorate([s.property({aliasOf:"viewModel.currentIndex"}),u.renderable()],j.prototype,"currentIndex",void 0),o.__decorate([s.property({aliasOf:"viewModel.currentItem"}),u.renderable()],j.prototype,"currentItem",void 0),o.__decorate([s.property({aliasOf:"viewModel.isDropdownOpen"}),u.renderable()],j.prototype,"isDropdownOpen",void 0),j=o.__decorate([l.subclass("esri.widgets.Daylight.SliderWithDropdown")],j),j}));

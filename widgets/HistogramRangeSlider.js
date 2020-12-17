/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["../chunks/_rollupPluginBabelHelpers","../chunks/tslib.es6","../core/has","../core/Logger","../core/accessorSupport/ensureType","../core/accessorSupport/decorators/property","../core/accessorSupport/decorators/aliasOf","../core/accessorSupport/decorators/subclass","../core/urlUtils","../core/uuid","../portal/support/resourceExtension","../Color","../core/watchUtils","./support/widgetUtils","./support/decorators/messageBundle","./support/decorators/renderable","../chunks/index","./Widget","./Slider","./Histogram","./HistogramRangeSlider/HistogramRangeSliderViewModel","./smartMapping/support/utils"],(function(e,t,a,r,i,o,n,s,l,d,u,c,h,p,g,_,v,m,b,w,y,F){"use strict";const C="esri-histogram-range-slider",f="esri-histogram-range-slider__slider-container",B="esri-histogram-range-slider__histogram-container",M="esri-histogram-range-slider__range-type--",D="esri-widget",x="esri-disabled";let L=function(t){function a(e,a){var r;return(r=t.call(this,e,a)||this)._barElements=[],r._histogram=null,r._slider=null,r.average=null,r.barCreatedFunction=null,r.bins=null,r.dataLines=null,r.dataLineCreatedFunction=null,r.excludedBarColor=new c("#d7e5f0"),r.hasTimeData=null,r.includedBarColor=new c("#599dd4"),r.label=void 0,r.labelFormatFunction=null,r.max=null,r.messages=null,r.min=null,r.precision=4,r.rangeType=null,r.standardDeviation=null,r.standardDeviationCount=1,r.values=null,r.viewModel=new y,r}e._inheritsLoose(a,t);var r=a.prototype;return r.initialize=function(){const{average:e,bins:t,hasTimeData:a,max:r,min:i,viewModel:o}=this;this._updateBarFill=this._updateBarFill.bind(this),this._histogram=new w({average:e,bins:t,barCreatedFunction:(e,t)=>{0===e&&(this._barElements=[]),this._barElements.push(t),this._updateBarFill(e,t),this.barCreatedFunction&&this.barCreatedFunction(e,t)},dataLines:this._getDataLines(),dataLineCreatedFunction:(e,t)=>{this.dataLineCreatedFunction&&this.dataLineCreatedFunction(e,t)},labelFormatFunction:this.labelFormatFunction,layout:"horizontal",max:r,min:i}),this._slider=new b({labelFormatFunction:this.labelFormatFunction,layout:"horizontal",visibleElements:{labels:!0,rangeLabels:!0},rangeLabelInputsEnabled:!a,viewModel:o}),this.own(this._slider.on(["max-change","min-change"],(e=>this.emit(e.type,e))),this._slider.on(["segment-drag","thumb-change","thumb-drag"],(e=>{this._updateBarFills(),this.emit(e.type,e)})),h.watch(this,"bins",(()=>{const{_histogram:e,bins:t}=this;if(t&&e.bins){const a=e.bins.length-t.length;this._barElements.splice(-a,a)}else this._barElements=[];e.set({bins:t}),this._updateBarFills(),this.scheduleRender()})),h.watch(this,["max","min","rangeType","values"],(()=>{const{_histogram:e,max:t,min:a}=this;e.set({max:t,min:a}),this._updateBarFills(),this.scheduleRender()})),h.watch(this,["average","dataLines","standardDeviation","standardDeviationCount"],(()=>{const{_histogram:e,average:t}=this;e.set({average:t,dataLines:this._getDataLines()})})),h.watch(this,"labelFormatFunction",(()=>{const{_histogram:e,labelFormatFunction:t}=this;e.set({labelFormatFunction:t})})),h.watch(this,"hasTimeData",(()=>{this._slider.set({rangeLabelInputsEnabled:!this.hasTimeData})})))},r.generateWhereClause=function(e){return this.viewModel.generateWhereClause(e)},r.render=function(){const{rangeType:e,viewModel:t,label:a}=this,r=this.classes(C,D,`${M}${e}`,"disabled"===t.state?x:null);return v.jsx("div",{"aria-label":a,class:r},"disabled"===t.state?null:this.renderContent())},r.renderContent=function(){return[this.renderHistogram(),this.renderSlider()]},r.renderSlider=function(){return v.jsx("div",{key:`${this.id}-slider-container`,class:f},this._slider.render())},r.renderHistogram=function(){return v.jsx("div",{class:B},this._histogram.render())},r._getDataLines=function(){return[...this._getStandardDeviationDataLines(),...this.dataLines||[]]},r._getStandardDeviationDataLines=function(){const{average:e,standardDeviation:t,standardDeviationCount:a}=this;return F.getDeviationValues(t,e,a).map((e=>({value:e})))},r._updateBarFills=function(){this._barElements.forEach(((e,t)=>this._updateBarFill(t,e)))},r._updateBarFill=function(e,t){t.setAttribute("fill",this._getFillForBar(e).toHex())},r._getFillForBar=function(e){const{bins:t,rangeType:a,values:r}=this;if(!(t&&t.length&&a&&r.length))return null;const i=t[e];if(!i)return null;const{maxValue:o,minValue:n}=i,s=o-n,l=r[0]>n&&r[0]<o;switch(a){case"equal":case"not-equal":return this.includedBarColor;case"less-than":case"at-most":return l?this._getBlendedColor((r[0]-n)/s):o<=r[0]?this.includedBarColor:this.excludedBarColor;case"greater-than":case"at-least":return l?this._getBlendedColor(1-(r[0]-n)/s):n>=r[0]?this.includedBarColor:this.excludedBarColor;case"between":if(2===r.length)return r[0]>n&&r[0]<o?this._getBlendedColor(1-(r[0]-n)/s):r[1]>n&&r[1]<o?this._getBlendedColor((r[1]-n)/s):n>=r[0]&&o<=r[1]?this.includedBarColor:this.excludedBarColor;case"not-between":if(2===r.length)return r[0]>n&&r[0]<o?this._getBlendedColor((r[0]-n)/s):r[1]>n&&r[1]<o?this._getBlendedColor(1-(r[1]-n)/s):n>r[0]&&o<r[1]?this.excludedBarColor:this.includedBarColor;default:return this.includedBarColor}},r._getBlendedColor=function(e){return c.blendColors(this.excludedBarColor,this.includedBarColor,e)},a}(m);return t.__decorate([n.aliasOf("viewModel.average")],L.prototype,"average",void 0),t.__decorate([o.property(),_.renderable()],L.prototype,"barCreatedFunction",void 0),t.__decorate([n.aliasOf("viewModel.bins")],L.prototype,"bins",void 0),t.__decorate([o.property(),_.renderable()],L.prototype,"dataLines",void 0),t.__decorate([o.property(),_.renderable()],L.prototype,"dataLineCreatedFunction",void 0),t.__decorate([o.property({type:c,json:{type:[i.Integer],write:!0}})],L.prototype,"excludedBarColor",void 0),t.__decorate([n.aliasOf("viewModel.hasTimeData")],L.prototype,"hasTimeData",void 0),t.__decorate([o.property({type:c,json:{type:[i.Integer],write:!0}})],L.prototype,"includedBarColor",void 0),t.__decorate([o.property({aliasOf:{source:"messages.widgetLabel",overridable:!0}})],L.prototype,"label",void 0),t.__decorate([n.aliasOf("viewModel.labelFormatFunction")],L.prototype,"labelFormatFunction",void 0),t.__decorate([n.aliasOf("viewModel.max")],L.prototype,"max",void 0),t.__decorate([o.property(),_.renderable(),g.messageBundle("esri/widgets/HistogramRangeSlider/t9n/HistogramRangeSlider")],L.prototype,"messages",void 0),t.__decorate([n.aliasOf("viewModel.min")],L.prototype,"min",void 0),t.__decorate([n.aliasOf("viewModel.precision")],L.prototype,"precision",void 0),t.__decorate([n.aliasOf("viewModel.rangeType")],L.prototype,"rangeType",void 0),t.__decorate([n.aliasOf("viewModel.standardDeviation")],L.prototype,"standardDeviation",void 0),t.__decorate([o.property(),_.renderable()],L.prototype,"standardDeviationCount",void 0),t.__decorate([_.renderable(),n.aliasOf("viewModel.values")],L.prototype,"values",void 0),t.__decorate([o.property(),_.renderable(["viewModel.average","viewModel.hasTimeData","viewModel.labelFormatFunction","viewModel.max","viewModel.min","viewModel.precision","viewModel.rangeType","viewModel.standardDeviation","viewModel.values"])],L.prototype,"viewModel",void 0),L=t.__decorate([s.subclass("esri.widgets.HistogramRangeSlider")],L),L}));

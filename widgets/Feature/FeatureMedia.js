/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/has","../../core/Logger","../../core/accessorSupport/ensureType","../../core/accessorSupport/decorators/property","../../core/accessorSupport/decorators/aliasOf","../../core/accessorSupport/decorators/subclass","../../core/urlUtils","../../core/uuid","../../portal/support/resourceExtension","../../core/events","../../core/watchUtils","../support/widgetUtils","../support/decorators/messageBundle","../support/decorators/renderable","../../chunks/index","../Widget","./support/featureUtils","./FeatureMedia/FeatureMediaViewModel","../support/chartUtils"],(function(e,t,i,r,a,o,s,n,l,d,c,u,h,p,f,m,_,v,M,I,g){"use strict";const w="esri-feature-media",x="esri-feature-media__container",y="esri-feature-media__item-container",b="esri-feature-media__item",C="esri-feature-media__item-title",T="esri-feature-media__item-caption",L="esri-feature-media__previous",k="esri-feature-media__previous-icon",F="esri-feature-media__previous-icon--rtl",S="esri-feature-media__next",R="esri-feature-media__next-icon",P="esri-feature-media__next-icon--rtl",A="esri-feature-media__chart",j="esri-feature-media__button",z="esri-feature-media__icon",O="esri-icon-left-triangle-arrow",$="esri-icon-right-triangle-arrow",U=.05,X=.95;let Y=function(t){function i(e,i){var r;return(r=t.call(this,e,i)||this)._refreshTimer=null,r._refreshIntervalInfo=null,r.attributes=null,r.activeMediaInfoIndex=null,r.fieldInfoMap=null,r.layer=null,r.mediaInfos=null,r.popupTemplate=null,r.relatedInfos=null,r.viewModel=new I,r.messages=null,r}e._inheritsLoose(i,t);var r=i.prototype;return r.initialize=function(){this.own(h.init(this,["viewModel.activeMediaInfo","viewModel.activeMediaInfoIndex"],(()=>this._setupMediaRefreshTimer())))},r.destroy=function(){this._clearMediaRefreshTimer()},r.render=function(){return _.jsx("div",{bind:this,class:w,onkeyup:this._handleMediaKeyup},this.renderMedia())},r.renderMedia=function(){const{formattedMediaInfoCount:e}=this.viewModel;return e?_.jsx("div",{key:"media-element-container",class:x},this.renderMediaPageButton("previous"),this.renderMediaInfo(),this.renderMediaPageButton("next")):null},r.renderImageMediaInfo=function(e){const{_refreshIntervalInfo:t}=this,{activeMediaInfoIndex:i,formattedMediaInfoCount:r}=this.viewModel,{value:a,refreshInterval:o,altText:s,title:n,type:l}=e,{sourceURL:d,linkURL:c}=a,u=M.shouldOpenInNewTab(c)?"_blank":"_self",h="_blank"===u?"noreferrer":"",p=o?t:null,f=p?p.timestamp:0,m=p?p.sourceURL:d,v=_.jsx("img",{alt:s||n,key:`media-${l}-${i}-${r}-${f}`,src:m}),I=c?_.jsx("a",{title:n,href:c,rel:h,target:u},v):null;return I||v},r.renderChartMediaInfo=function(e){const{activeMediaInfoIndex:t,formattedMediaInfoCount:i}=this.viewModel;return _.jsx("div",{key:`media-${e.type}-${t}-${i}`,bind:this,class:A,afterCreate:this._getChartDependencies})},r.renderMediaInfoType=function(){const{activeMediaInfo:e}=this.viewModel;return e?"image"===e.type?this.renderImageMediaInfo(e):-1!==e.type.indexOf("chart")?this.renderChartMediaInfo(e):null:null},r.renderMediaInfo=function(){const{activeMediaInfo:e}=this.viewModel,t=e.title?_.jsx("div",{key:"media-title",class:C,innerHTML:e.title}):null,i=e.caption?_.jsx("div",{key:"media-caption",class:T,innerHTML:e.caption}):null;return _.jsx("div",{key:"media-container",class:y},t,i,_.jsx("div",{key:"media-item-container",class:b},this.renderMediaInfoType()))},r.renderMediaPageButton=function(e){if(this.viewModel.formattedMediaInfoCount<2)return null;const t="previous"===e,i=t?this.messages.previous:this.messages.next,r=t?this.classes(j,L):this.classes(j,S),a=t?this.classes(z,k,O):this.classes(z,R,$),o=t?this.classes(z,F,$):this.classes(z,P,O),s=t?"media-previous":"media-next",n=t?this._previous:this._next;return _.jsx("button",{type:"button",key:s,title:i,"aria-label":i,tabIndex:0,class:r,bind:this,onclick:n},_.jsx("span",{"aria-hidden":"true",class:a}),_.jsx("span",{"aria-hidden":"true",class:o}))},r._next=function(){this.viewModel.next()},r._previous=function(){this.viewModel.previous()},r._getChartDependencies=async function(e){const t=await g.loadChartsModule(),{activeMediaInfo:i}=this.viewModel;this._renderChart({chartDiv:e,mediaInfo:i,chartsModule:t})},r._handleMediaKeyup=function(e){const t=u.eventKey(e);"ArrowLeft"===t&&(e.stopPropagation(),this.viewModel.previous()),"ArrowRight"===t&&(e.stopPropagation(),this.viewModel.next())},r._renderChart=function(e){const{chartsModule:t,chartDiv:i,mediaInfo:r}=e,{value:a,type:o}=r,{am4core:s}=t,n=g.getColorSet(s);p.isDarkTheme()&&s.useTheme(t.am4themes_dark),s.useTheme(t.am4themes_animated),s.useTheme((function(e){e instanceof s.ColorSet&&n&&(e.list=n)}));const l="pie-chart"===o?this._createPieChart(e):this._createXYChart(e);i.setAttribute("aria-label",r.altText||r.title),l.data=a.series.map((e=>({tooltip:e.tooltip,value:e.value}))).filter((e=>"pie-chart"!==o||e.value>0))},r._customizeChartTooltip=function(e,t){e.label.wrap=!0,e.label.maxWidth=200,e.autoTextColor=!1,e.getFillFromObject=!1,e.label.fill=t.color("#ffffff"),e.background.fill=t.color({r:0,g:0,b:0,a:.7})},r._createPieChart=function(e){const{chartDiv:t,chartsModule:i}=e,{am4core:r,am4charts:a}=i,o=r.create(t,a.PieChart);o.rtl=p.isRTL();const s=o.series.push(new a.PieSeries);return s.labels.template.disabled=!0,s.ticks.template.disabled=!0,s.dataFields.value="value",s.dataFields.category="tooltip",this._customizeChartTooltip(s.tooltip,r),o},r._getMinSeriesValue=function(e){let t=0;return e.forEach((e=>t=Math.min(e.value,t))),t},r._createColumnChart=function(e,t){const{chartsModule:i,mediaInfo:r}=t,{value:a}=r,{am4core:o,am4charts:s}=i,n=e.xAxes.push(new s.CategoryAxis);n.dataFields.category="tooltip",n.renderer.labels.template.disabled=!0,this._customizeChartTooltip(n.tooltip,o),n.tooltip.events.on("sizechanged",(()=>{n.tooltip.dy=-n.tooltip.contentHeight}));const l=e.yAxes.push(new s.ValueAxis),d=l.renderer.labels.template;l.renderer.minLabelPosition=U,l.renderer.maxLabelPosition=X,l.min=this._getMinSeriesValue(a.series),this._customizeChartTooltip(l.tooltip,o),d.wrap=!0;const c=e.series.push(new s.ColumnSeries);c.dataFields.valueY="value",c.dataFields.categoryX="tooltip",e.cursor=new s.XYCursor,a.series.length>15&&(e.scrollbarX=new o.Scrollbar)},r._createBarChart=function(e,t){const{chartsModule:i,mediaInfo:r}=t,{value:a}=r,{am4core:o,am4charts:s}=i,n=e.yAxes.push(new s.CategoryAxis);n.dataFields.category="tooltip",n.renderer.inversed=!0,n.renderer.labels.template.disabled=!0,this._customizeChartTooltip(n.tooltip,o),n.tooltip.events.on("sizechanged",(()=>{n.tooltip.dx=n.tooltip.contentWidth}));const l=e.xAxes.push(new s.ValueAxis),d=l.renderer.labels.template;l.renderer.minLabelPosition=U,l.renderer.maxLabelPosition=X,l.min=this._getMinSeriesValue(a.series),this._customizeChartTooltip(l.tooltip,o),d.wrap=!0;const c=e.series.push(new s.ColumnSeries);c.dataFields.valueX="value",c.dataFields.categoryY="tooltip",e.cursor=new s.XYCursor,a.series.length>15&&(e.scrollbarY=new o.Scrollbar)},r._createLineChart=function(e,t){const{chartsModule:i,mediaInfo:r}=t,{value:a}=r,{am4core:o,am4charts:s}=i,n=e.xAxes.push(new s.CategoryAxis);n.dataFields.category="tooltip",n.renderer.labels.template.disabled=!0,this._customizeChartTooltip(n.tooltip,o),n.tooltip.events.on("sizechanged",(()=>{n.tooltip.dy=-n.tooltip.contentHeight}));const l=e.yAxes.push(new s.ValueAxis),d=l.renderer.labels.template;l.renderer.minLabelPosition=U,l.renderer.maxLabelPosition=X,l.min=this._getMinSeriesValue(a.series),this._customizeChartTooltip(l.tooltip,o),d.wrap=!0;const c=e.series.push(new s.LineSeries);c.dataFields.categoryX="tooltip",c.dataFields.valueY="value",e.cursor=new s.XYCursor,a.series.length>15&&(e.scrollbarX=new o.Scrollbar)},r._createXYChart=function(e){const{chartDiv:t,chartsModule:i,mediaInfo:r}=e,{type:a}=r,{am4core:o,am4charts:s}=i,n=o.create(t,s.XYChart);return n.rtl=p.isRTL(),"column-chart"===a&&this._createColumnChart(n,e),"bar-chart"===a&&this._createBarChart(n,e),"line-chart"===a&&this._createLineChart(n,e),n},r._clearMediaRefreshTimer=function(){const{_refreshTimer:e}=this;e&&(clearTimeout(e),this._refreshTimer=null)},r._updateMediaInfoTimestamp=function(e){const t=Date.now();this._refreshIntervalInfo={timestamp:t,sourceURL:this._getImageSource(e,t)},this.scheduleRender()},r._setupMediaRefreshTimer=function(){this._clearMediaRefreshTimer();const{activeMediaInfo:e}=this.viewModel;e&&"image"===e.type&&e.refreshInterval&&this._setRefreshTimeout(e)},r._setRefreshTimeout=function(e){const{refreshInterval:t,value:i}=e;if(!t)return;const r=6e4*t;this._updateMediaInfoTimestamp(i.sourceURL);const a=setInterval((()=>{this._updateMediaInfoTimestamp(i.sourceURL)}),r);this._refreshTimer=a},r._getImageSource=function(e,t){const i=-1!==e.indexOf("?")?"&":"?",[r,a=""]=e.split("#");return`${r}${i}timestamp=${t}${a?"#":""}${a}`},i}(v);return t.__decorate([s.aliasOf("viewModel.attributes")],Y.prototype,"attributes",void 0),t.__decorate([s.aliasOf("viewModel.activeMediaInfoIndex")],Y.prototype,"activeMediaInfoIndex",void 0),t.__decorate([s.aliasOf("viewModel.fieldInfoMap")],Y.prototype,"fieldInfoMap",void 0),t.__decorate([s.aliasOf("viewModel.layer")],Y.prototype,"layer",void 0),t.__decorate([s.aliasOf("viewModel.mediaInfos")],Y.prototype,"mediaInfos",void 0),t.__decorate([s.aliasOf("viewModel.popupTemplate")],Y.prototype,"popupTemplate",void 0),t.__decorate([s.aliasOf("viewModel.relatedInfos")],Y.prototype,"relatedInfos",void 0),t.__decorate([o.property({type:I}),m.renderable(["viewModel.formattedMediaInfos","viewModel.activeMediaInfoIndex","viewModel.activeMediaInfo"])],Y.prototype,"viewModel",void 0),t.__decorate([o.property(),m.renderable(),f.messageBundle("esri/widgets/Feature/t9n/Feature")],Y.prototype,"messages",void 0),Y=t.__decorate([n.subclass("esri.widgets.Feature.FeatureMedia")],Y),Y}));

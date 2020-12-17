/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../core/has","../../../core/Logger","../../../core/accessorSupport/ensureType","../../../core/accessorSupport/decorators/property","../../../core/accessorSupport/decorators/subclass","../../../core/urlUtils","../../../core/uuid","../../../portal/support/resourceExtension","../../../core/screenUtils","../../../intl/substitute","../../../intl","../../../core/Handles","../../support/widgetUtils","../../support/decorators/accessibleHandler","../../support/decorators/messageBundle","../../support/decorators/renderable","../../../chunks/index","../../Widget","../../../symbols/support/svgUtils","./support/utils","../support/styleUtils"],(function(e,s,t,i,r,a,n,o,l,c,d,h,p,y,g,m,_,u,v,f,b,x,w){"use strict";const j="esri-legend--card__carousel-indicator--activated",L="esri-legend--card",S="esri-legend--stacked",$="esri-legend--card__carousel-title",k="esri-legend--card__carousel-indicator",N="esri-legend--card__interval-separator",I="esri-legend--card__imagery-layer-image--stretched",A="esri-legend--card__image-label",z="esri-legend--card__layer-caption",T="esri-legend--card__label-element",C="esri-legend--card__layer-row",R="esri-legend--card__label-cell",E="esri-legend--card__message",F="esri-legend--card__ramp-label",B="esri-legend--card__section",U="esri-legend--card__relationship-section",M="esri-legend--card__service-caption-text",P="esri-legend--card__service-content",O="esri-legend--card__service",H="esri-legend--card__group-layer",D="esri-legend--card__group-layer-child",W="esri-legend--card__symbol",Z="esri-legend--card__size-ramp-row",G="esri-legend--card__symbol-row",V="esri-legend--card__symbol-cell",q="esri-legend--card__carousel-indicator-container",J="esri-legend--card__interval-separators-container",K="esri-legend--card__relationship-label-container",Q="esri-legend--card__label-container",X="esri-legend--card__service-caption-container",Y="esri-legend--card__symbol-container",ee="esri-legend--card__size-ramp-container",se="esri-legend--card__size-ramp-preview",te="esri-legend__size-ramp--horizontal",ie="esri-legend__ramp-labels",re="esri-legend__layer-cell esri-legend__layer-cell--info",ae="esri-univariate-above-and-below-ramp__color--card",ne="esri-widget__heading",oe="esri-legend--card__",le=window.devicePixelRatio;let ce=function(s){function t(e,t){var i;return(i=s.call(this,e,t)||this)._handles=new y,i._hasIndicators=!1,i._selectedSectionName=null,i._sectionNames=[],i._sectionMap=new Map,i.activeLayerInfos=null,i.layout="stack",i.messages=null,i.messagesCommon=null,i.type="card",i.view=null,i}e._inheritsLoose(t,s);var i=t.prototype;return i.initialize=function(){this.own([this.watch("activeLayerInfos",(e=>{this._handles.removeAll(),this._watchForSectionChanges(e)}))])},i.destroy=function(){this._handles.destroy(),this._handles=null},i.render=function(){this._hasIndicators="auto"===this.layout&&this.view.container.clientWidth<=768||"stack"===this.layout;const e=this.activeLayerInfos,s=e&&e.toArray().map((e=>this._renderLegendForLayer(e))).filter((e=>!!e));this._hasIndicators?this._selectedSectionName&&-1!==this._sectionNames.indexOf(this._selectedSectionName)||(this._selectedSectionName=this._sectionNames&&this._sectionNames[0]):this._selectedSectionName=null;const t=this._sectionNames.length,i=this._sectionNames.map(((e,s)=>{const i=h.substitute(this.messagesCommon.pagination.pageText,{index:s+1,total:t});return v.jsx("div",{key:e,"aria-label":i,title:i,tabIndex:0,onclick:this._selectSection,onkeydown:this._selectSection,bind:this,class:this.classes(k,{[j]:this._selectedSectionName===e}),"data-section-name":e})})),r=this._hasIndicators&&t>1?v.jsx("div",{class:q,key:"carousel-navigation"},i):null,a=this._hasIndicators?this._sectionMap.get(this._selectedSectionName):s&&s.length?s:null,n={[S]:this._hasIndicators};return v.jsx("div",{class:this.classes(L,n)},r,a||v.jsx("div",{class:E},this.messages.noLegend))},i._selectSection=function(e){const s=e.target.getAttribute("data-section-name");s&&(this._selectedSectionName=s)},i._watchForSectionChanges=function(e){if(this._generateSectionNames(),e){e.forEach((e=>{const s=`activeLayerInfo-${e.layer.uid}-version-change`;this._handles.remove(s),this._watchForSectionChanges(e.children),this._handles.add(e.watch("version",(()=>this._generateSectionNames())),s)}));const s="activeLayerInfos-collection-change";this._handles.remove(s),this._handles.add(e.on("change",(()=>this._watchForSectionChanges(e))),s)}},i._generateSectionNames=function(){this._sectionNames.length=0,this.activeLayerInfos&&this.activeLayerInfos.forEach(this._generateSectionNamesForActiveLayerInfo,this)},i._generateSectionNamesForActiveLayerInfo=function(e){e.children.forEach(this._generateSectionNamesForActiveLayerInfo,this),e.legendElements&&e.legendElements.forEach(((s,t)=>{this._sectionNames.push(`${oe}${e.layer.uid}-type-${s.type}-${t}`)}))},i._renderLegendForLayer=function(e){if(!e.ready)return null;if(e.children.length){const s=e.children.map((e=>this._renderLegendForLayer(e))).toArray();return v.jsx("div",{key:e.layer.uid,class:this.classes(O,H)},v.jsx("div",{class:X},e.title),s)}{const s=e.legendElements;if(s&&!s.length)return null;const t=s.some((e=>"relationship-ramp"===e.type)),i=s.map(((s,i)=>this._renderLegendForElement(s,e,i,t))).filter((e=>!!e));if(!i.length)return null;const r={[D]:!!e.parent};return v.jsx("div",{key:e.layer.uid,class:this.classes(O,r)},v.jsx("div",{class:X},v.jsx("div",{class:M},e.title)),v.jsx("div",{class:P},i))}},i._renderLegendForElement=function(e,s,t,i=!1){const r="color-ramp"===e.type,a="opacity-ramp"===e.type,n="size-ramp"===e.type,o=s.layer,l=e.title;let c=null;if("string"==typeof l)c=l;else if(l){const e=w.getTitle(this.messages,l,r||a);c=l.title?`${l.title} (${e})`:e}const d=`${oe}${o.uid}-type-${e.type}-${t}`,h=this._hasIndicators?v.jsx("div",null,v.jsx("h3",{class:this.classes(ne,$)},s.title),v.jsx("h4",{class:this.classes(ne,z)},c)):c?v.jsx("h4",{class:this.classes(ne,z)},c):null;let p=null;if("symbol-table"===e.type){const t=e.infos.map(((t,i)=>this._renderLegendForElementInfo(t,s,e.legendType,i))).filter((e=>!!e));if(t.length){const e=t[0].properties.classes&&t[0].properties.classes[G],s={[Q]:!e&&!i,[K]:i};p=v.jsx("div",{key:d,class:B},h,v.jsx("div",{class:this.classes(s)},t))}}else"color-ramp"===e.type||"opacity-ramp"===e.type||"heatmap-ramp"===e.type?p=v.jsx("div",{key:d,class:B},h,this._renderLegendForRamp(e,o.opacity)):n?p=v.jsx("div",{key:d,class:B},h,this._renderSizeRamp(e,o.opacity)):"relationship-ramp"===e.type?p=v.jsx("div",{key:d,class:this.classes(B,U)},h,x.renderRelationshipRamp(e,this.id,o.opacity)):"univariate-above-and-below-ramp"===e.type&&(p=v.jsx("div",{key:d,class:B},h,this._renderUnivariateAboveAndBelowRamp(e,o.opacity)));return p?(this._sectionMap.set(d,p),p):null},i._renderUnivariateAboveAndBelowRamp=function(e,s){const{sizeRampElement:t,colorRampElement:i}=x.getUnivariateAboveAndBelowRampElements(e,s,"horizontal"),r=x.getUnivariateAboveAndBelowSizeRampSize(t,"full","horizontal"),a=x.getUnivariateAboveAndBelowColorRampSize(t,"above","horizontal"),n=x.getUnivariateAboveAndBelowColorRampSize(t,"below","horizontal"),o=x.getUnivariateAboveAndBelowColorRampPreview(i,{width:a,height:12,rampAlignment:"horizontal",opacity:s,type:"above"}),l=x.getUnivariateAboveAndBelowColorRampPreview(i,{width:n,height:12,rampAlignment:"horizontal",opacity:s,type:"below"}),c=x.getUnivariateAboveAndBelowColorRampMargin(t,"card"),d=t.infos.map((e=>e.label)).map(((e,s)=>0===s||4===s?v.jsx("div",{key:s},e):null)),h={marginTop:"3px",marginLeft:`${c}px`,display:"flex"},p={width:`${r}px`,display:"flex",flexDirection:"row",justifyContent:"space-between"};return v.jsx("div",{class:C,key:"size-ramp-preview",styles:{display:"flex",flexDirection:"column"}},v.jsx("div",{class:this.classes(Y,te),styles:{display:"flex",flexDirection:"row"}},t.infos.map(((e,s)=>v.jsx("div",{key:s,class:W,bind:e.preview,afterCreate:w.attachToNode})))),o?v.jsx("div",{class:ae,styles:h,key:"color-ramp-preview"},v.jsx("div",{bind:o,afterCreate:w.attachToNode}),v.jsx("div",{bind:l,afterCreate:w.attachToNode})):null,v.jsx("div",{class:re},v.jsx("div",{class:ie,styles:p},d)))},i._renderLegendForElementInfo=function(e,s,t,i){const r=s.layer;if(e.type)return this._renderLegendForElement(e,s,i);const a=w.isImageryStretchedLegend(r,t);if(e.preview){var n,o;if(-1===e.symbol.type.indexOf("simple-fill")){if(!e.label)return v.jsx("div",{key:i,bind:e.preview,afterCreate:w.attachToNode});const s={[V]:this._hasIndicators};return v.jsx("div",{key:i,class:this.classes(C,{[G]:this._hasIndicators})},v.jsx("div",{class:this.classes(s),bind:e.preview,afterCreate:w.attachToNode}),v.jsx("div",{class:this.classes(A,{[R]:this._hasIndicators})},w.getTitle(this.messages,e.label,!1)||""))}let s=255,t=255,a=255,l=0,c=255,d=255,h=255,p=0;const y=e.symbol.color&&e.symbol.color.a,g=e.symbol.outline&&e.symbol.outline.color&&e.symbol.outline.color.a;y&&(s=e.symbol.color.r,t=e.symbol.color.g,a=e.symbol.color.b,l=e.symbol.color.a*r.opacity),g&&(c=e.symbol.outline.color.r,d=e.symbol.outline.color.g,h=e.symbol.outline.color.b,p=e.symbol.outline.color.a*r.opacity);const m=null==(n=null==(o=e.symbol.color)?void 0:o.isBright)||n,_=m?"rgba(255, 255, 255, .6)":"rgba(0, 0, 0, .6)",u={background:y?`rgba(${s}, ${t}, ${a}, ${l})`:"none",color:m?"black":"white",textShadow:`-1px -1px 0 ${_},\n                                              1px -1px 0 ${_},\n                                              -1px 1px 0 ${_},\n                                              1px 1px 0 ${_}`,border:g?`1px solid rgba(${c}, ${d}, ${h}, ${p})`:"none"};return v.jsx("div",{key:i,class:C},v.jsx("div",{class:T,styles:u}," ",e.label," "))}if(e.src){const s=this._renderImage(e,r,a);return v.jsx("div",{key:i,class:C},s,v.jsx("div",{class:A},e.label||""))}},i._renderImage=function(e,s,t){const{label:i,src:r,opacity:a}=e,n={[I]:t,[W]:!t},o={opacity:`${null!=a?a:s.opacity}`};return v.jsx("img",{alt:w.getTitle(this.messages,i,!1),src:r,border:0,width:e.width,height:e.height,class:this.classes(n),styles:o})},i._renderSizeRampLines=function(e){const s=e.infos,t=s[0],i=s[s.length-1],r=t.symbol,a=this._hasIndicators,n=d.pt2px(t.size+t.outlineSize)*le,o=d.pt2px(i.size+i.outlineSize)*le,l=a?n:n+50*le,c=a?n/2+50*le:n,h=function(e){if(e){if(e.type.indexOf("3d")>-1){const s=e.symbolLayers&&e.symbolLayers.length;if(!s)return;const t=e.symbolLayers.getItemAt(s-1).get("resource.primitive");return"triangle"===t||"cone"===t||"tetrahedron"===t}return"triangle"===e.style}}(r),p=function(e){if(e){if(e.type.indexOf("3d")>-1){const s=e.symbolLayers&&e.symbolLayers.length;if(!s)return;const t=e.symbolLayers.getItemAt(s-1),i=t.resource&&t.resource.primitive;return"circle"===i||"cross"===i||"kite"===i||"sphere"===i||"cube"===i||"diamond"===i}{const s=e.style;return"circle"===s||"diamond"===s||"cross"===s}}}(r),y=document.createElement("canvas");y.width=l,y.height=c,y.style.width=y.width/le+"px",y.style.height=y.height/le+"px";const g=y.getContext("2d");if(a){g.beginPath();const e=0,s=0,t=l/2-o/2,i=c;g.moveTo(e,s),g.lineTo(t,i);const r=l,a=0,n=l/2+o/2,d=c;g.moveTo(r,a),g.lineTo(n,d)}else{g.beginPath();const e=0,s=c/2-o/2,t=l,i=0;g.moveTo(e,s),g.lineTo(t,i);const r=0,a=c/2+o/2,n=l,d=c;g.moveTo(r,a),g.lineTo(n,d)}return g.strokeStyle="#ddd",g.stroke(),v.jsx("div",{bind:y,afterCreate:w.attachToNode,styles:a?{display:"flex",marginTop:`-${h?0:p?n/2:0}px`,marginBottom:`-${h?o:p?o/2:0}px`}:{display:"flex",marginRight:`-${h?0:p?n/2:0}px`,marginLeft:`-${h?0:p?o/2:0}px`}})},i._renderSizeRamp=function(e,s){const t=e.infos,i=t[0].label,r=t[t.length-1].label;let a=t[0].preview,n=t[t.length-1].preview;const o=this._hasIndicators,l={"flex-direction":o?"column":"row-reverse"};a&&(a=a.cloneNode(!0),a.style.display="flex"),n&&(n=n.cloneNode(!0),n.style.display="flex");const c={opacity:null!=s?`${s}`:""};return v.jsx("div",{class:this.classes(C,{[Z]:o})},v.jsx("div",{class:F},o?i:r),v.jsx("div",{class:ee,styles:l},v.jsx("div",{bind:a,afterCreate:w.attachToNode,class:se,styles:c}),this._renderSizeRampLines(e),v.jsx("div",{bind:n,afterCreate:w.attachToNode,class:ee,styles:c})),v.jsx("div",{class:F},o?r:i))},i._renderLegendForRamp=function(e,s){const t=e.infos,i="heatmap-ramp"===e.type,r=t.length-1,a=25,n=r>2&&!i?25*r:100,o=n+20,l=10,c=t.slice(0).reverse();c.forEach(((e,s)=>{e.offset=i?e.ratio:s/r}));const d=c.length-1,h=c.length%2!=0&&c[c.length/2|0],p=h&&v.jsx("div",{class:J},v.jsx("div",{class:N},"|"),v.jsx("div",{class:F},h.label)),y=t[t.length-1].label,g=t[0].label;let m=null;null!=s&&(m=`opacity: ${s}`);const _=[[{shape:{type:"path",path:"M0 12.5 L10 0 L10 25 Z"},fill:c[0].color,stroke:{width:0}},{shape:{type:"rect",x:l,y:0,width:n,height:a},fill:{type:"linear",x1:l,y1:0,x2:n+l,y2:0,colors:c},stroke:{width:0}},{shape:{type:"path",path:`M${n+l} 0 L${o} 12.5 L${n+l} 25 Z`},fill:c[d].color,stroke:{width:0}}]],u=b.renderSVG(_,o,a),{messages:f}=this;return v.jsx("div",{class:C},v.jsx("div",{class:F},i?f[y]:y),v.jsx("div",{class:Y},v.jsx("div",{style:m},u),p),v.jsx("div",{class:F},i?f[g]:g))},t}(f);return s.__decorate([u.renderable(),a.property()],ce.prototype,"activeLayerInfos",void 0),s.__decorate([a.property()],ce.prototype,"layout",void 0),s.__decorate([a.property(),u.renderable(),_.messageBundle("esri/widgets/Legend/t9n/Legend")],ce.prototype,"messages",void 0),s.__decorate([a.property(),u.renderable(),_.messageBundle("esri/t9n/common")],ce.prototype,"messagesCommon",void 0),s.__decorate([a.property({readOnly:!0})],ce.prototype,"type",void 0),s.__decorate([a.property()],ce.prototype,"view",void 0),s.__decorate([m.accessibleHandler()],ce.prototype,"_selectSection",null),ce=s.__decorate([n.subclass("esri.widgets.Legend.styles.Card")],ce),ce}));

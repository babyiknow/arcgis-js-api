/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/has","../../core/maybe","../../core/Logger","../../core/accessorSupport/ensureType","../../core/handleUtils","../../core/accessorSupport/decorators/property","../../core/accessorSupport/decorators/subclass","../../core/urlUtils","../../core/uuid","../../portal/support/resourceExtension","../../core/events","../../core/unitFormatUtils","../support/widgetUtils","../support/decorators/messageBundle","../support/decorators/renderable","../../chunks/index","../Widget","../support/Popover","./css","./support/constants"],(function(e,t,s,i,o,a,r,n,l,S,c,p,v,d,_,u,m,h,T,C,I,b,f){"use strict";const A=(e,t)=>Number(t.available)-Number(e.available);e.Statistics=function(e){function s(t,s){var i;return(i=e.call(this,t,s)||this)._messagesUnits=null,i._resizeObserver=null,i._maxNumStatistics=null,i._clickOutsideHandle=null,i._popover=null,i}t._inheritsLoose(s,e);var a=s.prototype;return a.destroy=function(){o.isSome(this._resizeObserver)&&(this._resizeObserver.disconnect(),this._resizeObserver=null),this._destroyPopover()},a.render=function(){const e=this._allStatistics,t=o.unwrapOr(this._maxNumStatistics,1/0);return 0===e.length?T.jsx("div",{class:this.classes(b.STATISTICS_CSS.base)}):T.jsx("div",{class:b.STATISTICS_CSS.base,bind:this,afterCreate:this._onContainerAfterCreate,afterUpdate:this._onContainerResize},e.map(((e,s)=>this._renderStatistic(e,{hidden:s>=t,inPopover:!1}))),t<e.length&&T.jsx("button",{class:b.STATISTICS_CSS.popoverToggle,bind:this,onclick:this._togglePopover,afterCreate:this._initializePopover,afterRemoved:this._destroyPopover}))},a._renderDistanceValue=function(e){const t=this._messagesUnits,s=this.viewModel.effectiveUnits.distance;return T.jsx("div",{class:b.STATISTICS_CSS.statisticValue},o.isSome(e)?_.formatDecimal(t,e,s,f.FORMAT_PRECISION):f.NOT_AVAILABLE)},a._renderElevationValue=function(e){const t=this._messagesUnits,s=this.viewModel.effectiveUnits.elevation;return T.jsx("div",{class:b.STATISTICS_CSS.statisticValue},o.isSome(e)?_.formatDecimal(t,e,s,f.FORMAT_PRECISION):f.NOT_AVAILABLE)},a._renderSlopeValue=function(e,t){return T.jsx("div",{class:b.STATISTICS_CSS.statisticValue},T.jsx("div",{key:"slope-up",class:this.classes(b.STATISTICS_CSS.slopeValue,{[b.STATISTICS_CSS.slopeValueNotAvailable]:o.isNone(e)})},T.jsx("div",{class:b.STATISTICS_CSS.slopeUpIcon}),o.isSome(e)?_.formatSlope(e,"degrees",f.FORMAT_PRECISION):f.NOT_AVAILABLE),T.jsx("div",{key:"slope-down",class:this.classes(b.STATISTICS_CSS.slopeValue,{[b.STATISTICS_CSS.slopeValueNotAvailable]:o.isNone(t)})},T.jsx("div",{class:b.STATISTICS_CSS.slopeDownIcon}),o.isSome(t)?_.formatSlope(t,"degrees",f.FORMAT_PRECISION):f.NOT_AVAILABLE))},a._renderStatistic=function({label:e,available:t,renderValue:s},{hidden:i,inPopover:o}){return T.jsx("div",{key:e,class:this.classes(b.STATISTICS_CSS.statistic,{[b.STATISTICS_CSS.statistic]:!o,[b.STATISTICS_CSS.statisticHidden]:i,[b.STATISTICS_CSS.statisticNotAvailable]:!t,[b.STATISTICS_CSS.popoverStatistic]:o})},T.jsx("h5",{class:b.STATISTICS_CSS.statisticLabel},e),s())},a._initializePopover=function(e){this._destroyPopover(),this._popover=new I({owner:this,placement:"bottom-end",anchorElement:e,renderContentFunction:()=>this._renderPopoverContent()})},a._destroyPopover=function(){o.destroyMaybe(this._popover),o.applySome(this._clickOutsideHandle,(e=>e.remove()))},a._renderPopoverContent=function(){const e=this._allStatistics,t=o.isSome(this._maxNumStatistics)?e.slice(this._maxNumStatistics,e.length):[];return T.jsx("div",{class:b.STATISTICS_CSS.popoverContent,bind:this,afterCreate:this._onPopoverContentAfterCreate},t.map((e=>this._renderStatistic(e,{hidden:!1,inPopover:!0}))))},a._togglePopover=function(){o.isSome(this._popover)&&this._popover.open?this._closePopover():this._openPopover()},a._openPopover=function(){o.applySome(this._popover,(e=>e.open=!0))},a._closePopover=function(){o.applySome(this._clickOutsideHandle,(e=>e.remove())),o.applySome(this._popover,(e=>e.open=!1))},a._onPopoverContentAfterCreate=function(e){o.applySome(this._clickOutsideHandle,(e=>e.remove())),this._clickOutsideHandle=n.handlesGroup([d.on(e,"click",(e=>e.stopPropagation())),d.on(window,"click",(()=>this._closePopover()))])},a._onContainerAfterCreate=function(e){this._resizeObserver=new ResizeObserver((()=>this._onContainerResize(e))),this._resizeObserver.observe(e)},a._onContainerResize=function(e){const{width:t}=e.getBoundingClientRect();let s=0;const i=Array.from(e.querySelectorAll(`.${b.STATISTICS_CSS.statistic}`)),o=i.length;for(let e=0;e<o;++e){const o=i[e];if(!(o instanceof HTMLElement))continue;const a=o.classList.contains(b.STATISTICS_CSS.statisticHidden);o.classList.remove(b.STATISTICS_CSS.statisticHidden);const r=o.offsetWidth+15;if(s+=r,o.classList.toggle(b.STATISTICS_CSS.statisticHidden,a),s>t)return s-=r,s+=49,void(this._maxNumStatistics=s>t?Math.max(0,e-1):e)}this._maxNumStatistics=o},t._createClass(s,[{key:"_allStatistics",get:function(){const e=this.viewModel.statistics;if(o.isNone(e))return[];const t=this._messages.statistics,s=[{label:t.maxDistance,available:o.isSome(e.maxDistance),renderValue:()=>this._renderDistanceValue(e.maxDistance)},{label:t.minElevation,available:o.isSome(e.minElevation),renderValue:()=>this._renderElevationValue(e.minElevation)},{label:t.maxElevation,available:o.isSome(e.maxElevation),renderValue:()=>this._renderElevationValue(e.maxElevation)},{label:t.avgElevation,available:o.isSome(e.avgElevation),renderValue:()=>this._renderElevationValue(e.avgElevation)},{label:t.gain,available:o.isSome(e.elevationGain),renderValue:()=>this._renderElevationValue(e.elevationGain)},{label:t.loss,available:o.isSome(e.elevationLoss),renderValue:()=>this._renderElevationValue(e.elevationLoss)}];return i("elevation-profile-slope-stats")&&s.push({label:t.maxSlope,available:o.isSome(e.maxPositiveSlope)||o.isSome(e.maxNegativeSlope),renderValue:()=>this._renderSlopeValue(e.maxPositiveSlope,e.maxNegativeSlope)},{label:t.avgSlope,available:o.isSome(e.avgPositiveSlope)||o.isSome(e.avgNegativeSlope),renderValue:()=>this._renderSlopeValue(e.avgPositiveSlope,e.avgNegativeSlope)}),s.sort(A)}}]),s}(C),s.__decorate([l.property(),h.renderable(["unit","unitOptions","statistics","effectiveUnits"])],e.Statistics.prototype,"viewModel",void 0),s.__decorate([l.property(),h.renderable(),m.messageBundle("esri/widgets/ElevationProfile/t9n/ElevationProfile")],e.Statistics.prototype,"_messages",void 0),s.__decorate([l.property(),h.renderable(),m.messageBundle("esri/core/t9n/Units")],e.Statistics.prototype,"_messagesUnits",void 0),s.__decorate([l.property(),h.renderable()],e.Statistics.prototype,"_maxNumStatistics",void 0),s.__decorate([l.property({readOnly:!0}),h.renderable()],e.Statistics.prototype,"_allStatistics",null),e.Statistics=s.__decorate([S.subclass("esri.widgets.ElevationProfile.Statistics")],e.Statistics),Object.defineProperty(e,"__esModule",{value:!0})}));

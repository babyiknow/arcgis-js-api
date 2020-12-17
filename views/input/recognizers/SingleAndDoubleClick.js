/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../../../chunks/_rollupPluginBabelHelpers","../../../core/clock","../../../core/MapUtils","../InputHandler","./support"],(function(e,t,i,o,n,l){"use strict";const u={maximumDoubleClickDelay:250,maximumDoubleClickDistance:10,maximumDoubleTouchDelay:350,maximumDoubleTouchDistance:35};let a=function(e){function n(o=u.maximumDoubleClickDelay,n=u.maximumDoubleClickDistance,l=u.maximumDoubleTouchDelay,a=u.maximumDoubleTouchDistance,c=i.default){var s;return(s=e.call(this,!1)||this).maximumDoubleClickDelay=o,s.maximumDoubleClickDistance=n,s.maximumDoubleTouchDelay=l,s.maximumDoubleTouchDistance=a,s._clock=c,s._pointerState=new Map,s._click=s.registerOutgoing("click"),s._doubleClick=s.registerOutgoing("double-click"),s.registerIncoming("immediate-click",s._handleImmediateClick.bind(t._assertThisInitialized(s))),s.registerIncoming("pointer-drag",s._handlePointerDrag.bind(t._assertThisInitialized(s))),s.registerIncoming("drag",s._handleDrag.bind(t._assertThisInitialized(s))),s}t._inheritsLoose(n,e);var a=n.prototype;return a.onUninstall=function(){this._pointerState.forEach((e=>{null!=e.doubleClickTimeout&&(e.doubleClickTimeout.remove(),e.doubleClickTimeout=null)}))},a._pointerId=function(e){const t=e.native;return"mouse"===t.pointerType?`${t.pointerId}:${t.button}`:`${t.pointerType}`},a._handleImmediateClick=function(e){const t=e.data,i=this._pointerId(t),o=this._pointerState.get(i);if(o){const n="touch"===t.native.pointerType?this.maximumDoubleTouchDistance:this.maximumDoubleClickDistance;l.manhattanDistance(o.event.data,t)>n?(this._clearDoubleClickTimeout(i,!0),this._startClick(e)):(this._clearDoubleClickTimeout(i,!1),this._doubleClick.emit(o.event.data,void 0,o.event.modifiers))}else this._startClick(e)},a._startClick=function(e){const t=this._pointerId(e.data),i="touch"===e.data.native.pointerType?this.maximumDoubleTouchDelay:this.maximumDoubleClickDelay;this._pointerState.set(t,{event:e,doubleClickTimeout:this._clock.setTimeout((()=>this._doubleClickTimeoutExceeded(t)),i)}),this.refreshHasPendingInputs()},a._handlePointerDrag=function(e){const t=this._pointerId(e.data.currentEvent);this._clearDoubleClickTimeout(t,!0)},a._handleDrag=function(e){const t=this._pointerId(e.data.pointer);this._clearDoubleClickTimeout(t,!0)},a._clearDoubleClickTimeout=function(e,t){const i=this._pointerState.get(e);i&&(i.doubleClickTimeout.remove(),i.doubleClickTimeout=null,t&&this._doubleClickTimeoutExceeded(e),this._pointerState.delete(e),this.refreshHasPendingInputs())},a._doubleClickTimeoutExceeded=function(e){const t=this._pointerState.get(e);this._click.emit(t.event.data,void 0,t.event.modifiers),t.doubleClickTimeout=null,this._pointerState.delete(e),this.refreshHasPendingInputs()},t._createClass(n,[{key:"hasPendingInputs",get:function(){return o.someMap(this._pointerState,(e=>null!=e.doubleClickTimeout))}}]),n}(n.InputHandler);e.DefaultParameters=u,e.SingleAndDoubleClick=a,Object.defineProperty(e,"__esModule",{value:!0})}));

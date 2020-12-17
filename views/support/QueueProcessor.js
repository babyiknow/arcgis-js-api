/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","../../core/maybe","../../core/promiseUtils","../../core/scheduling","../../core/Queue"],(function(e,s,t,r,i,n){"use strict";let o=function(e,s){this.item=e,this.controller=s,this.promise=null},c=function(){function e(e){this._deferreds=new Map,this._controllers=new Map,this._processingItems=new Map,this._isPaused=!1,this._schedule=null,this._task=null,this.concurrency=1,e.concurrency&&(this.concurrency=e.concurrency),this._queue=new n(e.peeker),this.process=e.process;const s=e.scheduler;e.task&&t.isSome(s)&&(this._task=s.registerTask(e.task,(e=>this.update(e)),(()=>this.needsUpdate())))}var c=e.prototype;return c.destroy=function(){this.clear(),this._schedule&&(this._schedule.remove(),this._schedule=null),this._task&&(this._task.remove(),this._task=null)},c.abort=function(e){const s=this._controllers.get(e);s&&s.abort()},c.clear=function(){this._queue.clear();const e=[];this._controllers.forEach((s=>e.push(s))),this._controllers.clear(),e.forEach((e=>e.abort())),this._processingItems.clear(),this._cancelNext()},c.forEach=function(e){this._deferreds.forEach(((s,t)=>e(t)))},c.get=function(e){const s=this._deferreds.get(e);return s?s.promise:void 0},c.isOngoing=function(e){return this._processingItems.has(e)},c.has=function(e){return this._deferreds.has(e)},c.pause=function(){this._isPaused||(this._isPaused=!0,this._cancelNext())},c.push=function(e,s){const i=this.get(e);if(i)return i;let n;const o=r.createAbortController();let c=null;s&&(c=r.onAbort(s,(()=>o.abort())));const h=()=>{u.remove(),t.isSome(c)&&c.remove(),this._deferreds.delete(e),this._controllers.delete(e),this._queue.remove(e),this._processingItems.delete(e),this._scheduleNext()},u=r.onAbortOrThrow(o.signal,(()=>{const s=this._processingItems.get(e);s&&s.controller.abort(),h(),n.reject(r.createAbortError())}));return n=r.createDeferred(),this._deferreds.set(e,n),this._controllers.set(e,o),n.promise.then(h,h),this._queue.push(e),this._scheduleNext(),n.promise},c.reset=function(){const e=[];this._processingItems.forEach((s=>e.push(s))),this._processingItems.clear();for(const s of e)this._queue.push(s.item),s.controller.abort();this._scheduleNext()},c.resume=function(){this._isPaused&&(this._isPaused=!1,this._scheduleNext())},c.takeAll=function(){const e=[];for(;this._queue.length;)e.push(this._queue.pop());return this.clear(),e},c.needsUpdate=function(){return!this._isPaused&&this._queue.length>0&&this._processingItems.size<this.concurrency},c.update=function(e){for(;!e.done&&this._queue.length>0&&this._processingItems.size<this.concurrency;)this._process(this._queue.pop()),e.madeProgress()},c._scheduleNext=function(){this._task||this._isPaused||this._schedule||(this._schedule=i.schedule((()=>{this._schedule=null,this._next()})))},c._next=function(){for(;this._queue.length>0&&this._processingItems.size<this.concurrency;)this._process(this._queue.pop())},c._cancelNext=function(){this._schedule&&(this._schedule.remove(),this._schedule=null)},c._processResult=function(e,s){this._canProcessFulfillment(e)&&(this._scheduleNext(),this._deferreds.get(e.item).resolve(s))},c._processError=function(e,s){this._canProcessFulfillment(e)&&(this._scheduleNext(),this._deferreds.get(e.item).reject(s))},c._canProcessFulfillment=function(e){return!!this._deferreds.get(e.item)&&this._processingItems.get(e.item)===e},c._process=function(e){if(t.isNone(e))return;let s;const i=r.createAbortController(),n=new o(e,i);this._processingItems.set(e,n);try{s=this.process(e,i.signal)}catch(e){this._processError(n,e)}var c;(c=s)&&"function"==typeof c.then?(n.promise=s,s.then((e=>this._processResult(n,e)),(e=>this._processError(n,e)))):this._processResult(n,s)},s._createClass(e,[{key:"length",get:function(){return this._processingItems.size+this._queue.length}},{key:"test",get:function(){return{update:e=>this.update(e)}}}]),e}();e.QueueProcessor=c,Object.defineProperty(e,"__esModule",{value:!0})}));

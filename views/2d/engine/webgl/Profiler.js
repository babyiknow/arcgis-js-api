/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../core/has","../../../../core/maybe","../../../../core/Evented","../../../../core/CircularArray","../../../webgl/capabilities/DisjointTimerQuery"],(function(e,t,n,s,r,i,o){"use strict";const a=n("esri-2d-profiler");let m=function(){function e(e,t){if(this._events=new r,this._entries=new Map,this._timings=new i(10),!a)return;this._ext=o.createDisjointTimerQuery(e.gl,{}),this._debugOutput=t;const n=e.gl;if(this.enableCommandLogging)for(const e in n)if("function"==typeof n[e]){const t=n[e],s=-1!==e.indexOf("draw");n[e]=(...r)=>(this._events.emit("command",{container:this._currentContainer,pass:this._currentPass,brush:this._currentBrush,method:e,args:r,isDrawCommand:s}),this._currentSummary&&(this._currentSummary.commands++,s&&this._currentSummary.drawCommands++),t.apply(n,r))}}var n=e.prototype;return n.recordContainerStart=function(e){a&&(this._currentContainer=e)},n.recordContainerEnd=function(){a&&(this._currentContainer=null)},n.recordPassStart=function(e){a&&(this._currentPass=e,this._initSummary())},n.recordPassEnd=function(){a&&(this._currentPass=null,this._emitSummary())},n.recordBrushStart=function(e){a&&(this._currentBrush=e)},n.recordBrushEnd=function(){a&&(this._currentBrush=null)},n.recordStart=function(e){if(a&&s.isSome(this._ext)){if(this._entries.has(e)){const t=this._entries.get(e),n=this._ext.resultAvailable(t.query),r=this._ext.disjoint();if(n&&!r){const n=this._ext.getResult(t.query)/1e6;let r=0;if(s.isSome(this._timings.enqueue(n))){const e=this._timings.entries,t=e.length;let n=0;for(const t of e)n+=t;r=n/t}const i=n.toFixed(2),o=r?r.toFixed(2):"--";this.enableCommandLogging?(console.groupCollapsed(`Frame report for ${e}, ${i} ms (${o} last 10 avg)\n${t.commandsLen} Commands (${t.drawCommands} draw)`),console.log("RenderPass breakdown: "),console.table(t.summaries),console.log("Commands: ",t.commands),console.groupEnd()):console.log(`Frame report for ${e}, ${i} ms (${o} last 10 avg)`),this._debugOutput.innerHTML=`${i} (${o})`}for(const e of t.handles)e.remove();this._entries.delete(e)}const t={name:e,query:this._ext.createQuery(),commands:[],commandsLen:0,drawCommands:0,summaries:[],handles:[]};this.enableCommandLogging&&(t.handles.push(this._events.on("command",(e=>{t.commandsLen++,t.commands.push(e),e.isDrawCommand&&t.drawCommands++}))),t.handles.push(this._events.on("summary",(e=>{t.summaries.push(e)})))),this._ext.beginTimeElapsed(t.query),this._entries.set(e,t)}},n.recordEnd=function(e){a&&s.isSome(this._ext)&&this._entries.has(e)&&this._ext.endTimeElapsed()},n._initSummary=function(){this.enableCommandLogging&&(this._currentSummary={container:this._currentContainer,pass:this._currentPass,drawCommands:0,commands:0})},n._emitSummary=function(){this.enableCommandLogging&&this._events.emit("summary",this._currentSummary)},t._createClass(e,[{key:"enableCommandLogging",get:function(){return!("object"==typeof a&&a.disableCommands)}}]),e}();e.Profiler=m,Object.defineProperty(e,"__esModule",{value:!0})}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../../core/maybe"],(function(t,e){"use strict";let i=function(){function t(t){this.timer=t,this.start=t.createQuery(),t.createTimestamp(this.start)}var e=t.prototype;return e.stop=function(t,e=50){this.end=this.timer.createQuery(),this.timer.createTimestamp(this.end),this.checkQueryResult(t,e)},e.checkQueryResult=function(t,e){if(!this.timer.resultAvailable(this.end))return void setTimeout((()=>this.checkQueryResult(t,e)),e);if(this.timer.disjoint())return void t(null);const i=this.timer.getResult(this.start),s=this.timer.getResult(this.end);t((s-i)/1e6)},t}(),s=function(){function t(t){this.timer=t,this.query=t.createQuery(),r=!0,this.timer.beginTimeElapsed(this.query)}var e=t.prototype;return e.stop=function(t,e=50){this.timer.endTimeElapsed(),r=!1,this.checkQueryResult(t,e)},e.checkQueryResult=function(t,e){const i=this.timer.resultAvailable(this.query),s=this.timer.disjoint();if(!i||s)s?t(null):setTimeout((()=>this.checkQueryResult(t,e)),e);else{const e=this.timer.getResult(this.query);t(e/1e6)}},t}(),r=!1;t.startMeasurement=function(t){const u=t.capabilities.disjointTimerQuery;return e.isNone(u)?null:u.timestampBits()>0?new i(u):r?null:new s(u)},Object.defineProperty(t,"__esModule",{value:!0})}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","../../chunks/vec3f64","../../chunks/vec3","../../chunks/vec2f64","../3d/state/utils/navigationUtils","./FilteredFiniteDifference","./Momentum","./FilteredValue"],(function(e,t,i,s,n,a,l,r,h){"use strict";const u=1e-5;let c=function(e){function i(t,i,s,n,a,l=0,r){var h;return(h=e.call(this,t,i,s)||this).angularVelocity1=n,h.axis1=a,h.angularVelocity2=l,h.axis2=r,h}t._inheritsLoose(i,e);var s=i.prototype;return s.value1=function(t){return e.prototype.valueFromInitialVelocity.call(this,this.angularVelocity1,t)},s.value2=function(t){return e.prototype.valueFromInitialVelocity.call(this,this.angularVelocity2,t)},i}(r.Momentum),o=function(){function e(e=300,t=12,s=.84){this.minimumInitialVelocity=e,this.stopVelocity=t,this.friction=s,this.enabled=!0,this.tmpAxis1=i.create(),this.tmpAxis2=i.create(),this.tmpAngles=n.create(),this.time=new l.FilteredFiniteDifference(.3),this.screen=[new l.FilteredFiniteDifference(.4),new l.FilteredFiniteDifference(.4)],this.angle1=new h.FilteredValue(.6),this.angle2=new h.FilteredValue(.6),this.axis1=i.create(),this.axis2=i.create(),this.lastScene=i.create()}var t=e.prototype;return t.addMomentumDirectRotation=function(e,t,i,n,l,r){if(this.enabled){if(this.time.hasLastValue){if(this.time.computeDelta(i)<.01)return;let e=a.rotationAngleAndAxisDirectRotation(this.lastScene,t,this.tmpAxis2,n,l,r);this.angle2.update(0),s.squaredLength(this.tmpAxis2)<u?e=0:s.normalize(this.axis1,this.tmpAxis2),this.angle1.update(e),s.copy(this.lastScene,t)}this.screen[0].update(e[0]),this.screen[1].update(e[1]),this.time.update(i)}},t.addMomentumPreserveHeading=function(e,t,i,n,l,r,h){if(this.enabled){if(this.time.hasLastValue){if(this.time.computeDelta(i)<.01)return;a.rotationAnglesAndAxesHeadingPreserving(this.lastScene,t,this.tmpAxis2,this.tmpAxis1,this.tmpAngles,n,l,r,h,!1),s.squaredLength(this.tmpAxis2)<u?(this.angle1.update(0),this.angle2.update(0)):(this.angle1.update(this.tmpAngles[1]),this.angle2.update(this.tmpAngles[0]),s.normalize(this.axis1,this.tmpAxis1),s.normalize(this.axis2,this.tmpAxis2)),s.copy(this.lastScene,t)}this.screen[0].update(e[0]),this.screen[1].update(e[1]),this.time.update(i)}},t.reset=function(){this.screen[0].reset(),this.screen[1].reset(),this.angle1.reset(),this.angle2.reset(),this.time.reset()},t.evaluateMomentum=function(){if(!this.enabled||!this.screen[0].hasFilteredDelta)return null;const e=this.screen[0].filteredDelta,t=this.screen[1].filteredDelta,i=Math.sqrt(e*e+t*t)/this.time.filteredDelta;return Math.abs(i)<this.minimumInitialVelocity?null:this.createMomentum(i,this.stopVelocity,this.friction)},t.createMomentum=function(e,t,i){const s=this.angle1.filteredValue/this.time.filteredDelta,n=this.angle2.filteredValue/this.time.filteredDelta;return new c(e,t,i,s,this.axis1,n,this.axis2)},e}();e.PanSphericalMomentum=c,e.PanSphericalMomentumEstimator=o,Object.defineProperty(e,"__esModule",{value:!0})}));

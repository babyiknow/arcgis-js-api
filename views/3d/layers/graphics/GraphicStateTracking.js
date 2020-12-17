/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../../../../core/maybe","../../../../core/arrayUtils","../../../../layers/graphics/dehydratedFeatures"],(function(t,i,e,s){"use strict";let a=function(){function t(t){this.graphicsCore=t,this.idToState=new Map,this.states=new Set;const i=t.owner.layer&&t.owner.layer.objectIdField;i?(this.getGraphicId=t=>s.getObjectId(t,i),this.getGraphics3DGraphicById=t=>this.graphicsCore.getGraphics3DGraphicByObjectId(t)):(this.getGraphicId=t=>t.uid,this.getGraphics3DGraphicById=t=>this.graphicsCore.getGraphics3DGraphicById(t))}var a=t.prototype;return a.destroy=function(){this.idToState.clear(),this.states.forEach(((t,i)=>this.remove(i)))},a.add=function(t){const e={remove:()=>this.remove(t)};if(this.states.has(t))return e;const s=this.getGraphicId(t.graphic),a=this.getGraphics3DGraphicById(s);this.states.has(t)||this.states.add(t);return this.ensureStateList(s).push(t),t.displaying=!!i.isSome(a)&&a.isVisible(),t.isDraped=!!i.isSome(a)&&a.isDraped,t.tracking=!0,e},a.remove=function(t){if(this.states.has(t)){if(this.idToState.size){const i=this.getGraphicId(t.graphic),s=this.idToState.get(i);s&&(e.remove(s,t),0===s.length&&this.idToState.delete(i))}this.states.delete(t),t.tracking=!1,t.displaying=!1}},a.addGraphic=function(t){this.forEachState(t,(i=>{i.displaying=t.isVisible(),i.isDraped=t.isDraped,i.emit("changed",{})}))},a.removeGraphic=function(t){this.forEachState(t,(t=>{t.displaying=!1,t.isDraped=!1}))},a.updateGraphicGeometry=function(t){this.forEachState(t,(t=>{t.emit("changed",{})}))},a.updateGraphicVisibility=function(t){this.forEachState(t,(i=>{i.displaying=t.isVisible()}))},a.allGraphicsDeleted=function(){this.states.forEach((t=>{t.displaying=!1}))},a.ensureStateList=function(t){const i=this.idToState.get(t);if(i)return i;const e=new Array;return this.idToState.set(t,e),e},a.forEachState=function(t,i){if(0===this.states.size||0===this.idToState.size)return;const e=this.getGraphicId(t.graphic),s=this.idToState.get(e);null!=s&&s.forEach(i)},t}();t.GraphicStateTracking=a,Object.defineProperty(t,"__esModule",{value:!0})}));

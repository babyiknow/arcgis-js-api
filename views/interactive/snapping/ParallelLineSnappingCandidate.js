/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../../../chunks/_rollupPluginBabelHelpers","../../../core/handleUtils","../../../Color","../../../chunks/vec3","../../../chunks/vec2","./Settings","./snappingUtils","./SnappingCandidate","./SnappingConstraint","../../3d/interactive/visualElements/ParallelLineVisualElement"],(function(e,t,n,i,a,r,l,s,o,d,c){"use strict";let f=function(e){function o({coordinateHelper:t,referenceLine:n,lineStart:i,targetPoint:a}){var l;const s=t.clone(i);return r.subtract(s,r.add(s,s,n.right.pos),n.left.pos),(l=e.call(this,t,a,new d.LineConstraint(i,s))||this)._referenceLines=[{edge:n,fadeLeft:!0,fadeRight:!0}],l}t._inheritsLoose(o,e);var f=o.prototype;return f.visualizeReferenceHints=function(e,t,i){return n.handlesGroup([...this._referenceLines.map((i=>n.destroyHandle(s.createLineSegmentHintFromEdge(1,i.edge,this.coordinateHelper,t,e,i.fadeLeft,i.fadeRight)))),n.destroyHandle(this.createParallelLineVisualElement(e,t,this.constraint.start,i))])},f.visualizeTargetHints=function(e,t,i){return n.handlesGroup([n.destroyHandle(s.createLineSegmentHintFromMap(0,this.constraint.start,i,this.coordinateHelper,t,e))])},f.addReferenceLine=function(e){const t={edge:e,fadeLeft:!0,fadeRight:!0};this._referenceLines.forEach((n=>{e.right.right===n.edge&&(n.fadeLeft=!1,t.fadeRight=!1),e.left.left===n.edge&&(n.fadeRight=!1,t.fadeLeft=!1)})),this._referenceLines.push(t)},f.createParallelLineVisualElement=function(e,t,n,r){const o=s.anyMapPointToRender(n,this.coordinateHelper,t,e),d=s.anyMapPointToRender(r,this.coordinateHelper,t,e),f=a.lerp(d,o,d,.5),u=new c.ParallelLineVisualElement({view:e,attached:!1,offset:l.defaults.parallelLineHintOffset,length:l.defaults.parallelLineHintLength,width:l.defaults.parallelLineHintWidth,color:i.toUnitRGBA(l.defaults.orange),location:f,renderOccluded:16});return u.setDirectionFromPoints(o,f),u.attached=!0,u},o}(o.SnappingCandidate);e.ParallelLineSnappingCandidate=f,Object.defineProperty(e,"__esModule",{value:!0})}));

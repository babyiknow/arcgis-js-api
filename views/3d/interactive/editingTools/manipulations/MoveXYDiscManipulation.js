/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../../../../../chunks/_rollupPluginBabelHelpers","../../../../../core/maybe","../../../../../Color","../../../../../chunks/vec3f64","../../../../../chunks/vec3","../../../../../core/Handles","../../../../../chunks/mat4","../../../../../chunks/mat4f64","../../../../../support/elevationInfoUtils","../../../support/stack","../../../webgl-engine/lib/GeometryUtil","../../../webgl-engine/lib/Geometry","../../../webgl-engine/materials/ColorMaterial","../../../../interactive/dragEventPipeline","../dragEventPipeline3D","../../Manipulator3D","../settings","./config","./Manipulation","./moveUtils","../snapping/SnapToScene"],(function(e,t,a,i,n,r,o,s,l,c,u,p,d,_,h,f,m,M,g,S,v,y){"use strict";let T=function(e){function S(t){var a;return(a=e.call(this)||this)._handles=new o,a._snapToScene=new y.SnapToScene,a._discMaterial=a._createMaterial(),a._discMaterialTransparent=a._createMaterial(.5),a._scale=1,a._radius=g.DISC_RADIUS,a._view=t.view,a._tool=t.tool,null!=t.snapToScene&&(a.snapToScene=t.snapToScene),null!=t.radius&&(a._radius=t.radius),a._createManipulator(),a.forEachManipulator((e=>a._tool.manipulators.add(e))),a}t._inheritsLoose(S,e);var T=S.prototype;return T.destroy=function(){this._handles.destroy(),this.forEachManipulator((e=>{this._tool.manipulators.remove(e),e.destroy()})),this._tool=null,this._view=null,this._manipulator=null},T.forEachManipulator=function(e){e(this._manipulator,1)},T.createGraphicDragPipeline=function(e,t){const i=e.graphic,n=c.getGraphicEffectiveElevationInfo(i),r=a.unwrap(i.geometry).spatialReference;return v.createGraphicMoveDragPipeline(e,t,(e=>this.createDragPipeline(e,n,r)))},T.createDragPipeline=function(e,t,a){const i=this._view;return h.createManipulatorDragEventPipeline(this._manipulator,((n,r,o,s,l)=>{const c=r.next(h.dragAtLocation(i,n.elevationAlignedLocation)).next(f.screenToMapXYAtLocation(i,n.elevationAlignedLocation,t,a)).next(this._snapToScene.createDragEventPipelineStep(i,t),this._snapToScene.next).next((e=>({...e,manipulatorType:1}))).next(h.addScreenDelta());e(n,c,o,s,l)}))},T._updateManipulatorTransform=function(){const e=s.fromScaling(u.sm4d.get(),r.set(u.sv3d.get(),this.displayScale,this.displayScale,this.displayScale));this._manipulator.modelTransform=e},T._createManipulator=function(){const e=this._view;this._manipulator=new m.Manipulator3D({view:e,worldSized:!1,autoScaleRenderObjects:!1,focusMultiplier:1,touchMultiplier:1,collisionType:{type:"disc",direction:n.fromValues(0,0,1)},worldOriented:!0}),this._updateManipulator()},T._updateManipulator=function(){const e=new d(p.createCylinderGeometry(g.DISC_HEIGHT,1,g.GEOMETRY_SEGMENTS,n.fromValues(0,0,1),n.fromValues(0,0,0)),"graphic-transform-disc"),t=s.fromScaling(l.create(),n.fromValues(this._radius,this._radius,this._radius));this._manipulator.renderObjects=[{geometry:e,material:this._discMaterial,transform:t,stateMask:2},{geometry:e,material:this._discMaterialTransparent,transform:t,stateMask:1}],this._manipulator.radius=g.DISC_COLLISION_RADIUS*(this._radius/g.DISC_RADIUS)},T._createMaterial=function(e=1){const t=i.toUnitRGBA(M.colors.main);return t[3]*=e,new _.ColorMaterial({color:t,transparent:1!==e,cullFace:2,renderOccluded:2},"move-xy-disc")},t._createClass(S,[{key:"displayScale",get:function(){return this._scale},set:function(e){this._scale=e,this._updateManipulatorTransform()}},{key:"snapToScene",get:function(){return this._snapToScene.enabled},set:function(e){this._snapToScene.enabled=e}},{key:"radius",get:function(){return this._radius},set:function(e){e!==this._radius&&(this._radius=e,this._updateManipulator())}},{key:"test",get:function(){return{discManipulator:this._manipulator}}}]),S}(S.Manipulation);e.MoveXYDiscManipulation=T,Object.defineProperty(e,"__esModule",{value:!0})}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../../../../../chunks/_rollupPluginBabelHelpers","../../../../../core/maybe","../../../../../core/scheduling","../../../../../core/Evented","../../../../../core/mathUtils","../../../../../core/screenUtils","../../../../../chunks/vec3f64","../../../../../chunks/common","../../../../../chunks/vec3","../../../support/mathUtils","../../../../../core/Handles","../../../../../core/watchUtils","../../../../../chunks/mat4","../../../../../chunks/mat4f64","../../../../../support/elevationInfoUtils","../../../support/stack","../../../support/geometryUtils","../../../webgl-engine/lib/GeometryUtil","../../../webgl-engine/lib/Geometry","../../../webgl-engine/materials/ColorMaterial","../../../../interactive/dragEventPipeline","../dragEventPipeline3D","../../Manipulator3D","../../manipulatorUtils","../manipulations/config"],(function(t,e,a,i,o,n,s,r,l,c,h,u,d,g,p,m,R,D,S,I,_,A,T,f,E,M){"use strict";var y;!function(t){t.ScaleIn=32,t.ScaleOut=64,t.RotateLeft=128,t.RotateRight=256,t.Unlocked=1024,t.DelayedFocused=2048,t.TouchInput=32768}(y||(y={}));let N=function(){function t(t){this.mode=null,this._handles=new u,this._scaleRotateDragData=null,this._activeAnimation=null,this.events=new o,this.getFocused=()=>this.ringManipulator.focused,this.getScale=()=>a.isSome(this._scaleRotateDragData)&&"scale"===this._scaleRotateDragData.mode?this._scaleRotateDragData.scale:1,this.tool=t.tool,this.mode=t.mode,this.createManipulator(),this.updateDragState(),this.updateManipulatorTransform()}var s=t.prototype;return s.destroy=function(){a.isSome(this._activeAnimation)&&(this._activeAnimation.frameTask.remove(),this._activeAnimation=null),this._handles.removeAll(),this.tool.manipulators.remove(this.ringManipulator),this.ringManipulator=null},s.startAnimation=function(t){this.cancelActiveAnimation(),t.start();const e=i.addFrameTask({update:({deltaTime:e})=>{t.update(e)&&this.cancelActiveAnimation()}});this._activeAnimation={...t,frameTask:e}},s.cancelActiveAnimation=function(){a.isSome(this._activeAnimation)&&(this._activeAnimation.frameTask.remove(),this._activeAnimation.destroy(),this._activeAnimation=null)},s.forEachManipulator=function(t){t(this.ringManipulator,2)},s.createManipulator=function(){this.ringManipulator=this.createRingManipulator(),this.tool.manipulators.add(this.ringManipulator);const t=this.ringManipulator,e=this.tool.graphicState.graphic,i=A.createManipulatorDragEventPipeline(t,((t,i,o)=>{this._scaleRotateDragData=null;const s=function(t,e){const i=t.allLayerViews.find((t=>t.layer===e.layer));if(a.isNone(e.symbol))return null;const o=e.symbol;return{symbolLayers:o.symbolLayers.map((t=>{let e=null,a=null;return"object"===t.type&&(e=t.heading),a=i.getSymbolLayerSize(o,t),{heading:e,size:a}})).toArray()}}(this.tool.view,e);if(a.isNone(s))return this.updateDragState(),null;const l={mode:"none",origin:r.clone(t.renderLocation),angle:0,startAngle:this.tool.symbolRotationAngle,angleDir:0,scale:1,scaleDir:0,startSymbolData:s};this._scaleRotateDragData=l,this.updateDragState();const u=R.sv3d.get();this.tool.view.renderCoordsHelper.worldUpAtPosition(t.renderLocation,u),i.next(T.screenToRenderPlane(this.tool.view,D.plane.fromPositionAndNormal(t.renderLocation,u))).next((t=>{const i=D.plane.normal(t.plane),o=E.calculateInputRotationTransform(t.renderStart,t.renderEnd,l.origin,i),s=h.cyclicalPI.shortestSignedDiff(l.angle,o);l.angleDir=n.clamp(l.angleDir+s,-M.ROTATE_INDICATOR_DIRECTION_BUFFER,M.ROTATE_INDICATOR_DIRECTION_BUFFER),l.angle=o;const r=function(t,e){const a=c.subtract(R.sv3d.get(),e.renderStart,t.origin),i=c.subtract(R.sv3d.get(),e.renderEnd,t.origin),o=c.length(a),n=c.length(i);if(0===o)return 0;return n/o}(l,t),u=r-l.scale;if(l.scaleDir=n.clamp(l.scaleDir+u,-M.SCALE_INDICATOR_DIRECTION_BUFFER,M.SCALE_INDICATOR_DIRECTION_BUFFER),l.scale=r,this.onScaleChanged(),"none"===l.mode){const i=this.mode||function(t,e,a,i){const{renderStart:o,renderEnd:n}=t,s=O(o,i,R.sv3d.get()),r=O(n,i,R.sv3d.get());if(c.squaredDistance(s,r)<M.DRAG_THRESHOLD_PX*M.DRAG_THRESHOLD_PX)return null;const l=c.subtract(R.sv3d.get(),o,a),h=c.cross(R.sv3d.get(),l,e),u=o,d=c.add(R.sv3d.get(),u,h),g=O(a,i,R.sv3d.get()),p=s,m=O(d,i,R.sv3d.get()),S=c.subtract(R.sv3d.get(),m,p),I=c.subtract(R.sv3d.get(),s,g),_=D.ray.wrap(p,S),A=D.ray.wrap(g,I);if(D.ray.distance2(_,r)<D.ray.distance2(A,r))return"rotate";return"scale"}(t,t.plane,l.origin,this.tool.view.state.camera);if(a.isSome(i)){switch(i){case"rotate":this.tool.emit("graphic-rotate-start",{graphic:e,angle:l.angle});break;case"scale":this.tool.emit("graphic-scale-start",{graphic:e,scale:l.scale})}l.mode=i}}if(this.updateDragState(),a.isSome(e.symbol)){const t=e.symbol.clone();let a=0,i=1;switch(l.mode){default:case"none":break;case"scale":i=l.scale;break;case"rotate":a=l.angle}this.applySymbolData(t,l.startSymbolData,a,i),e.symbol=t,this.updateManipulatorTransform()}switch(t.action){case"start":case"update":switch(l.mode){case"rotate":this.tool.emit("graphic-rotate",{graphic:e,angle:l.angle});break;case"scale":this.tool.emit("graphic-scale",{graphic:e,scale:l.scale})}break;case"end":switch(l.mode){case"rotate":this.tool.emit("graphic-rotate-stop",{graphic:e,angle:l.angle});break;case"scale":this.tool.emit("graphic-scale-stop",{graphic:e,scale:l.scale});break;default:case"none":}}"end"===t.action&&(this.startAnimation(C(this,(()=>this.onScaleChanged()))),this._scaleRotateDragData=null,this.updateDragState())})),o.next(A.resetSymbol(e)).next((()=>{if(a.isSome(this._scaleRotateDragData)){switch(this._scaleRotateDragData.mode){case"none":break;case"rotate":this.tool.emit("graphic-rotate-stop",{graphic:e,angle:this._scaleRotateDragData.startAngle});break;case"scale":this.tool.emit("graphic-scale-stop",{graphic:e,scale:1})}this.startAnimation(C(this,(()=>this.onScaleChanged()))),this._scaleRotateDragData=null}}))}));this._handles.add(i),this._handles.add([this.ringManipulator.events.on("focus-changed",(t=>{"focus"===t.action?this.startAnimation(function(t,e){let a=0,i=null;const o=()=>!1;return{start:()=>{i=t.getFocused,t.getFocused=o,a=0,e()},update:t=>(a+=t,!i()||a>M.RING_INDICATOR_DELAY_MS?1:0),destroy:()=>{t.getFocused=i,e()}}}(this,(()=>this.updateDelayedFocusedState()))):this.updateDelayedFocusedState()})),this.ringManipulator.events.on("immediate-click",(t=>{t.stopPropagation()})),d.init(this.tool.graphicState,"displaying",(t=>this.ringManipulator.available=t)),this.tool.graphicState.on("changed",(()=>E.placeAtGraphic(this.tool.view,this.ringManipulator,e)))]),E.placeAtGraphic(this.tool.view,this.ringManipulator,e)},s.onScaleChanged=function(){this.events.emit("scale-changed"),this.updateManipulatorTransform()},s.updateDelayedFocusedState=function(){this.ringManipulator.updateStateEnabled(y.DelayedFocused,this.getFocused())},s.updateDragState=function(){if(this.ringManipulator.updateStateEnabled(y.Unlocked,!(a.isSome(this._scaleRotateDragData)&&"none"!==this._scaleRotateDragData.mode)),a.isSome(this._scaleRotateDragData))switch(this._scaleRotateDragData.mode){case"rotate":this.ringManipulator.updateStateEnabled(y.ScaleIn|y.ScaleOut,!1),this.ringManipulator.updateStateEnabled(y.RotateLeft,this._scaleRotateDragData.angleDir<0),this.ringManipulator.updateStateEnabled(y.RotateRight,this._scaleRotateDragData.angleDir>=0);break;case"scale":this.ringManipulator.updateStateEnabled(y.RotateLeft|y.RotateRight,!1),this.ringManipulator.updateStateEnabled(y.ScaleIn,this._scaleRotateDragData.scaleDir<0),this.ringManipulator.updateStateEnabled(y.ScaleOut,this._scaleRotateDragData.scaleDir>=0)}else this.ringManipulator.updateStateEnabled(y.ScaleIn|y.ScaleOut|y.RotateLeft|y.RotateRight,!1)},s.updateManipulatorTransform=function(){const t=g.identity(R.sm4d.get()),e=this.tool.symbolRotationAngle;g.rotate(t,t,e,r.fromValues(0,0,1));const a=this.getScale(),i=g.fromScaling(R.sm4d.get(),c.set(R.sv3d.get(),a,a,a)),o=g.identity(R.sm4d.get());g.multiply(o,i,t),this.ringManipulator.modelTransform=o},s.createRingManipulator=function(){const t=(t,e,a)=>{const i=[],o=Math.ceil(M.GEOMETRY_SEGMENTS*(e-t)/(2*Math.PI));for(let n=0;n<o+1;n++){const s=t+n*(e-t)/o;i.push(r.fromValues(a*Math.cos(s),a*Math.sin(s),0))}return i},e=e=>t(0,2*Math.PI,e),a=(t,e)=>new I(S.createPathExtrusionGeometry((t=>[[-t/2,0],[t/2,0],[t/2,M.RING_HEIGHT/2],[-t/2,M.RING_HEIGHT/2]])(e),t,[],[],!1),"graphic-transform-ring"),i=e(M.RING_RADIUS),o=a(i,M.RING_THICKNESS),n={left:[],right:[]},s=[];for(let e=0;e<2;e++){const i=e*Math.PI-Math.PI/4,o=Math.PI/2-M.ROTATE_INDICATOR_ARC_LENGTH,r=i+o,l=i+Math.PI/2-o,c=t(r,l,M.INNER_INDICATOR_RADIUS),h=a(c,M.INDICATOR_THICKNESS);s.push(c),s.push(t(r,l,M.OUTER_INDICATOR_RADIUS-M.RING_THICKNESS/2)),n.left.push(h),n.right.push(h);for(let t=0;t<2;t++){const e=0===t,a=p.create();if(e){g.scale(a,a,[1,-1,1]),g.rotate(a,a,-r,[0,0,1]);const t=Math.round(M.ROTATE_INDICATOR_ARROW_PLACEMENT_PERCENTAGE*(c.length-1));a[12]=c[t][0],a[13]=c[t][1],a[14]=c[t][2]}else{g.rotate(a,a,l,[0,0,1]);const t=Math.round((1-M.ROTATE_INDICATOR_ARROW_PLACEMENT_PERCENTAGE)*(c.length-1));a[12]=c[t][0],a[13]=c[t][1],a[14]=c[t][2]}const i=S.createExtrudedTriangle(M.ROTATE_INDICATOR_ARROW_TIP_LENGTH,0,M.ROTATE_INDICATOR_ARROW_TIP_RADIUS,M.RING_HEIGHT);S.transformInPlace(i,a);const o=new I(i,"graphic-transform-ring-rotate");(e?n.left:n.right).push(o)}}const l=[];for(let e=0;e<2;e++){const i=e*Math.PI-Math.PI/4,o=Math.PI/2-M.SCALE_INDICATOR_ARC_LENGTH,n=i+o,s=i+Math.PI/2-o,r=t(n,s,M.OUTER_INDICATOR_RADIUS);l.push(a(r,M.INDICATOR_THICKNESS))}const c=e(M.RING_RADIUS+M.SCALE_INDICATOR_OFFSET1),h=e(M.RING_RADIUS+M.SCALE_INDICATOR_OFFSET2),u=a(c,M.INDICATOR_THICKNESS),d=a(h,M.INDICATOR_THICKNESS),R=e(M.RING_RADIUS-M.SCALE_INDICATOR_OFFSET1),D=e(M.RING_RADIUS-M.SCALE_INDICATOR_OFFSET2),_=a(R,M.INDICATOR_THICKNESS),A=a(D,M.INDICATOR_THICKNESS),T=this.createMaterial(),E=this.createMaterial(.66),N=this.createMaterial(.5),O=this.createMaterial(.33);let C=[{geometry:o,material:T,stateMask:y.DelayedFocused},{geometry:o,material:N,stateMask:0}];this.mode&&"scale"!==this.mode||(C=C.concat([{geometry:l,material:T,stateMask:y.DelayedFocused|y.Unlocked},{geometry:u,material:E,stateMask:y.DelayedFocused|y.ScaleIn},{geometry:d,material:O,stateMask:y.DelayedFocused|y.ScaleIn},{geometry:_,material:E,stateMask:y.DelayedFocused|y.ScaleOut},{geometry:A,material:O,stateMask:y.DelayedFocused|y.ScaleOut}])),this.mode&&"rotate"!==this.mode||(C=C.concat([{geometry:n.right,material:T,stateMask:y.DelayedFocused|y.Unlocked},{geometry:n.left,material:T,stateMask:y.DelayedFocused|y.RotateLeft},{geometry:n.right,material:T,stateMask:y.DelayedFocused|y.RotateRight}]));const b=[i,...s];return new f.Manipulator3D({view:this.tool.view,renderObjects:C,autoScaleRenderObjects:!1,worldOriented:!0,radius:M.RING_THICKNESS,focusMultiplier:1,touchMultiplier:1.5,elevationInfo:m.getGraphicEffectiveElevationInfo(this.tool.graphicState.graphic),collisionType:{type:"ribbon",paths:b,direction:r.fromValues(0,0,1)}})},s.createMaterial=function(t=1){const e=[...M.HANDLE_COLOR,t];return new _.ColorMaterial({color:e,transparent:1!==t,cullFace:2,renderOccluded:2},"graphic-transform")},s.applySymbolData=function(t,e,i,o){t.symbolLayers.forEach(((t,n)=>{const{heading:s,size:r}=e.symbolLayers[n];"object"===t.type&&(t.heading=(a.isSome(s)?s:0)-l.toDegree(i),a.isSome(r)&&"width"in r&&(r.width=this.enforceNonZeroSize(r.width),r.height=this.enforceNonZeroSize(r.height),r.depth=this.enforceNonZeroSize(r.depth),t.width=r.width*o,t.depth=r.depth*o,t.height=r.height*o))}))},s.enforceNonZeroSize=function(t){return t||this.tool.view.state.camera.computeRenderPixelSizeAt(this.ringManipulator.renderLocation)},e._createClass(t,[{key:"test",get:function(){return{ringManipulator:this.ringManipulator}}}]),t}();function O(t,e,a){const i=e.projectToRenderScreen(t,s.castRenderScreenPointArray(b)),o=e.renderToScreen(i,v);return c.set(a,o[0],o[1],0)}function C(t,e){let a=null,i=1;const o=()=>i;return{start:()=>{i=t.getScale(),a=t.getScale,t.getScale=o,e()},update:t=>(i+=((i+1)/2-i)*Math.min(t*M.RING_RESET_ANIMATION_SPEED_FACTOR,1),e(),Math.abs(i-1)<.01?1:0),destroy:()=>{t.getScale=a,e()}}}const b=r.create(),v=s.createScreenPointArray();t.GraphicScaleRotateTransform=N,Object.defineProperty(t,"__esModule",{value:!0})}));

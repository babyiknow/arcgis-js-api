/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../../../../../core/compilerUtils","../../../../../core/maybe","../../../../../core/Logger","../../../../../geometry/Point","../../../../../geometry","../../../../../core/mathUtils","../../../../../core/screenUtils","../../../../../chunks/vec3f64","../../../../../chunks/vec3","../../../../../chunks/mat4","../../../../../chunks/mat4f64","../../../../../chunks/quat","../../../support/stack","../../../../../chunks/vector","../../../support/geometryUtils","../../../webgl-engine/lib/Util","../../../webgl-engine/lib/GeometryData","../../../webgl-engine/lib/GeometryUtil","../../../webgl-engine/lib/Geometry","../../../webgl-engine/materials/RibbonLineMaterial","../../../webgl-engine/materials/NativeLineMaterial","../../../webgl-engine/materials/ColorMaterial","../../Manipulator3D","../../manipulatorUtils","./sliceToolConfig","../../../webgl-engine/materials/ImageMaterial","../../../webgl-engine/materials/SlicePlaneMaterial"],(function(e,t,a,i,s,r,n,o,c,l,d,u,g,m,p,T,b,R,_,f,S,A,h,E,I,y,w,O){"use strict";const P=i.getLogger("esri.views.3d.interactive.analysisTools.slice.sliceToolUtils");function L(e,t,a,i,s,r){const n=l.dot(e,t),o=m.sv3d.get(),c=m.sv3d.get();switch(0===i?Math.abs(n)>y.VERTICAL_DOT_THRESHOLD?1:2:i){case 2:{const i=Math.abs(n)<=y.SMALL_ANGLE_DOT_THRESHOLD?e:a.viewUp;l.cross(o,i,t),l.copy(c,t);break}case 1:l.cross(o,a.viewUp,t),l.cross(c,t,o);break;case 3:{const i=Math.abs(n)<=y.SMALL_ANGLE_DOT_THRESHOLD?t:a.viewUp;l.cross(o,i,e),l.cross(c,e,o);break}}const d=l.cross(m.sv3d.get(),o,c);l.dot(d,a.viewForward)>0&&l.scale(c,c,-1),l.normalize(s,o),l.normalize(r,c)}function v(e,t){switch(t){case 0:return{basis:e.basis1,direction:1,position:l.add(m.sv3d.get(),e.origin,e.basis1),edge:t};case 1:return{basis:e.basis2,direction:1,position:l.add(m.sv3d.get(),e.origin,e.basis2),edge:t};case 2:return{basis:e.basis1,direction:-1,position:l.subtract(m.sv3d.get(),e.origin,e.basis1),edge:t};case 3:return{basis:e.basis2,direction:-1,position:l.subtract(m.sv3d.get(),e.origin,e.basis2),edge:t}}}function M(e,t,a){const i=a.projectToRenderScreen(l.add(m.sv3d.get(),e,t),o.castRenderScreenPointArray3(m.sv3d.get())),s=a.projectToRenderScreen(l.subtract(m.sv3d.get(),e,t),o.castRenderScreenPointArray3(m.sv3d.get()));return l.squaredLength(l.subtract(i,i,s))}function D(e){const t=l.length(e.basis1),a=l.length(e.basis2);return y.RESIZE_HANDLE_EDGE_PADDING_FRAC*Math.min(t,a)}function N(e){return D(e)}function H(e){return 0!==e.direction[0]&&0!==e.direction[1]}function C(e,t,i){const s=s=>{const r=(s?t:e).slice(0),n=l.subtract(m.sv3d.get(),r[0],r[1]);l.normalize(n,n);const o=l.subtract(m.sv3d.get(),r[r.length-1],r[r.length-2]);if(l.normalize(o,o),i.padding>0){const e=l.scale(c.create(),o,-i.padding);if(r[r.length-1]=l.add(e,e,r[r.length-1]),i.bothEnds){const e=l.scale(c.create(),n,-i.padding);r[0]=l.add(e,e,r[0])}}const p=s?i.tipFocusMultiplier:1,T=i.tipLength*(i.focusTipLength?p:1),b=i.tipRadius*p,R=d.identity(m.sm4d.get());if(i.padding>0){const e=T/4,t=l.set(m.sv3d.get(),0,e,0),a=1+i.padding/e;d.translate(R,R,t),d.scale(R,R,l.set(m.sv3d.get(),a,a,a)),d.translate(R,R,l.scale(t,t,-1/a))}const S=d.identity(u.create()),A=c.fromValues(0,1,0),h=d.fromQuat(u.create(),g.rotationTo(m.sq4d.get(),A,o));h[12]=r[r.length-1][0],h[13]=r[r.length-1][1],h[14]=r[r.length-1][2],d.multiply(h,h,R);const E=[{part:"tube",geometry:new f(function(e,t,i){const s=[];if(a.isSome(t))s.push([e,t.thickness/2],[-e,t.thickness/2],[-e,-t.thickness/2],[e,-t.thickness/2]);else{const t=12;for(let a=0;a<t;a++){const i=a/t*2*Math.PI;s.push([Math.cos(i)*e,Math.sin(i)*e])}}return _.createPathExtrusionGeometry(s,i,[],[],!1)}(i.tubeRadius*(s?i.tubeFocusMultiplier:1)+i.padding,i.flat,r),"arrow-tube"),transform:S}];let I,y;if(a.isSome(i.flat)?I=new f(_.createExtrudedTriangle(T,b,b,i.flat.thickness),"arrow-tip"):(I=new f(_.createConeGeometry(T,b,24,!1,!1,!0),"arrow-tip"),y=new f(_.createConeGeometry(T,b,24,!1,!0,!1),"arrow-cap")),E.push({part:"tip",geometry:I,transform:h}),y&&E.push({part:"cap",geometry:y,transform:h}),i.bothEnds){const e=d.fromQuat(u.create(),g.rotationTo(m.sq4d.get(),A,n));e[12]=r[0][0],e[13]=r[0][1],e[14]=r[0][2],d.multiply(e,e,R),E.push({part:"tip",geometry:I,transform:e}),y&&E.push({part:"cap",geometry:y,transform:e})}return E};return{normal:s(!1),focused:s(!0)}}function U(e,t){const a=l.subtract(c.create(),e[e.length-1],e[e.length-2]);if(l.normalize(a,a),l.scale(a,a,y.ROTATE_HEADING_TIP_LENGTH),l.add(a,a,e[e.length-1]),t){const t=l.subtract(c.create(),e[0],e[1]);return l.normalize(t,t),l.scale(t,t,y.ROTATE_HEADING_TIP_LENGTH),l.add(t,t,e[0]),[t,...e,a]}return[...e,a]}function F(e,t){return p.angleAroundAxis(t,e.basis2,e.basis1)+V}const G=16,k=32,z=T.ray.create(),V=Math.PI/2;e.DidPointerMoveRecentlyFlag=G,e.addArrowTips=U,e.calculateBoundedPlaneTranslateRotate=function(e,t){return I.calculateTranslateRotateFromBases(e.basis1,e.basis2,e.origin,t)},e.calculateDiagonalResizeHandleScale=N,e.calculatePlaneHalfSize=function(e,t){return y.INITIAL_PLANE_HALF_SIZE_VIEW_PROPORTION*Math.min(t.width,t.height)*t.computeRenderPixelSizeAt(e)},e.calculateResizeHandlePadding=D,e.calculateScreenSpaceBasisLength2=M,e.createArrowGeometry=C,e.createGridManipulator=function(e){const t=new f(_.createSquareGeometry(),"slice-grid"),a=[...y.PLANE_BACKGROUND_COLOR],i=new O.SlicePlaneMaterial({backgroundColor:a,gridColor:y.GRID_COLOR,gridWidth:4,renderOccluded:4},"slice-grid");return{manipulator:new E.Manipulator3D({view:e,renderObjects:[{geometry:t,material:i}],interactive:!1,autoScaleRenderObjects:!1,worldSized:!0}),material:i}},e.createOutlineManipulator=function(e){const t=new f(_.createPolylineGeometry([[-1,-1,0],[1,-1,0],[1,1,0],[-1,1,0],[-1,-1,0]]),"slice-outline"),a=[...y.PLANE_OUTLINE_COLOR],i=new S.RibbonLineMaterial({color:a,writeDepth:!1,width:y.PLANE_OUTLINE_WIDTH,renderOccluded:4},"slice-outline");return{manipulator:new E.Manipulator3D({view:e,renderObjects:[{geometry:t,material:i}],interactive:!1,autoScaleRenderObjects:!1,worldSized:!0}),material:i}},e.createPlane=function(e,t,a,i,s,r,n,o){return L(t,n.worldUpAtPosition(e,m.sv3d.get()),s,r,o.basis1,o.basis2),l.scale(o.basis1,o.basis1,a),l.scale(o.basis2,o.basis2,i),l.copy(o.origin,e),T.plane.fromVectorsAndPoint(o.basis2,o.basis1,o.origin,o.plane),o},e.createResizeManipulator=function(e,t){const a=H(t),i=a?[c.fromValues(1,0,0),c.fromValues(0,0,0),c.fromValues(0,1,0)]:[c.fromValues(1,0,0),c.fromValues(-1,0,0)],s=new f(_.createPolylineGeometry(i),"slice-resize"),r=[...y.HANDLE_COLOR,1],n=a?y.RESIZE_HANDLE_CORNER_WIDTH:y.RESIZE_HANDLE_EDGE_WIDTH,o=n*y.DISPLAY_FOCUS_MULTIPLIER,l=e=>e>1?(e=>new S.RibbonLineMaterial({color:r,width:e,renderOccluded:4},"slice-resize"))(e):new A.NativeLineMaterial({color:r,renderOccluded:4},"slice-resize");return new E.Manipulator3D({view:e,renderObjects:[{geometry:s,material:l(n),stateMask:1},{geometry:s,material:l(o),stateMask:2}],collisionType:{type:"line",paths:[i]},autoScaleRenderObjects:!1,worldSized:!0,radius:a?y.RESIZE_HANDLE_CORNER_INPUT_RADIUS:y.RESIZE_HANDLE_EDGE_INPUT_RADIUS})},e.createRotateManipulator=function(e,t){const a=new w.ImageMaterial({transparent:!0,writeDepth:!1,textureId:t.id,renderOccluded:16},"slice-rotate"),i=y.ROTATE_HEADING_OFFSET_DISTANCE,s=y.ROTATE_HEADING_DISC_RADIUS,r=s*y.ROTATE_HEADING_DISC_RADIUS_FOCUS_MULTIPLIER,n=e=>{const t=new Uint32Array([0,1,2,2,3,0]);return new f(new R.GeometryData({[b.VertexAttrConstants.POSITION]:{size:3,data:new Float32Array([i-e,-e,0,i+e,-e,0,i+e,e,0,i-e,e,0])},[b.VertexAttrConstants.UV0]:{size:2,data:new Float32Array([0,0,1,0,1,1,0,1])}},{[b.VertexAttrConstants.POSITION]:t,[b.VertexAttrConstants.UV0]:t}))},o=new f(_.createPolylineGeometry([[0,0,0],[i-s,0,0]]),"slice-rotate-heading"),c=new f(_.createPolylineGeometry([[0,0,0],[i-r,0,0]]),"slice-rotate-heading"),l=new A.NativeLineMaterial({color:y.ROTATE_HEADING_CALLOUT_COLOR,renderOccluded:4},"slice-rotate-heading"),d=[{geometry:n(s),material:a,stateMask:1|G},{geometry:o,material:l,stateMask:1|G},{geometry:n(r),material:a,stateMask:2|G},{geometry:c,material:l,stateMask:2|G}];return new E.Manipulator3D({view:e,renderObjects:d,autoScaleRenderObjects:!1,collisionType:{type:"disc",direction:[0,0,1],offset:[i,0,0]},collisionPriority:1,radius:s/2,state:G})},e.createRotatePlane=function(e,t,a,i){const s=t.worldUpAtPosition(e.origin,m.sv3d.get()),r=m.sv3d.get();switch(a){case 1:l.copy(r,s);break;case 2:l.copy(r,e.basis1)}return T.plane.fromPositionAndNormal(e.origin,r,i)},e.createShiftManipulator=function(e){const t=[c.fromValues(0,0,-y.SHIFT_RESTART_ARROW_LENGTH/2),c.fromValues(0,0,y.SHIFT_RESTART_ARROW_LENGTH/2)],a=U(t,!0),i=(e,a)=>C(t,t,{tubeRadius:y.SHIFT_RESTART_TUBE_RADIUS,tipRadius:y.SHIFT_RESTART_TIP_RADIUS,tipLength:y.SHIFT_RESTART_TIP_LENGTH,tubeFocusMultiplier:y.SHIFT_RESTART_TUBE_FOCUS_MULTIPLIER,tipFocusMultiplier:y.SHIFT_RESTART_TIP_FOCUS_MULTIPLIER,padding:e,bothEnds:!0,flat:null,focusTipLength:!0,addCap:a}),s=i(0,!1),r=i(y.SHIFT_RESTART_ARROW_OUTLINE_WIDTH,!0),n=new h.ColorMaterial({color:y.SHIFT_RESTART_ARROW_TIP_COLOR,cullFace:2,renderOccluded:16},"slice-shift"),o=new h.ColorMaterial({color:y.SHIFT_RESTART_ARROW_CAP_COLOR,cullFace:2,renderOccluded:16},"slice-shift"),l=new h.ColorMaterial({color:y.SHIFT_RESTART_TUBE_COLOR,cullFace:2,renderOccluded:16},"slice-shift"),d=new h.ColorMaterial({color:y.SHIFT_RESTART_OUTLINE_COLOR,transparent:!0,writeDepth:!1,cullFace:1,renderOccluded:2},"slice-shift"),u=new f(_.createPolylineGeometry([[0,0,0],[-y.SHIFT_RESTART_OFFSET_DISTANCE,0,0]]),"slice-rotate-heading"),g=new f(_.createPolylineGeometry([[0,0,0],[-y.SHIFT_RESTART_OFFSET_DISTANCE,0,0]]),"slice-rotate-heading"),m=new A.NativeLineMaterial({color:y.SHIFT_RESTART_CALLOUT_COLOR,renderOccluded:4},"slice-rotate-heading");return new E.Manipulator3D({view:e,renderObjects:[...s.normal.map((({part:e,geometry:t,transform:a})=>({geometry:t,material:"tip"===e?n:"cap"===e?o:l,transform:a,stateMask:1|G}))),...r.normal.map((({geometry:e,transform:t})=>({geometry:e,material:d,transform:t,stateMask:1|G}))),{geometry:u,material:m,stateMask:1|G|k},...s.focused.map((({part:e,geometry:t,transform:a})=>({geometry:t,material:"tip"===e?n:"cap"===e?o:l,transform:a,stateMask:2|G}))),...r.focused.map((({geometry:e,transform:t})=>({geometry:e,material:d,transform:t,stateMask:2|G}))),{geometry:g,material:m,stateMask:2|G|k}],autoScaleRenderObjects:!1,collisionType:{type:"line",paths:[a]},collisionPriority:1,radius:y.SHIFT_RESTART_TIP_RADIUS,state:G})},e.createShiftPlane=function(e,t,a,i){const s=l.cross(m.sv3d.get(),t,a);return l.cross(s,s,t),T.plane.fromPositionAndNormal(e,s,i)},e.forceHorizontalOrVertical=function(e,t,a){const i=t.worldUpAtPosition(e.origin,m.sv3d.get()),s=e.basis1,r=F(e,i),n=Math.round(r/V)*V;return T.boundedPlane.rotate(e,n-r,s,a)},e.isAlwaysDrapedLayer=function(e){switch(e.type){case"building-scene":case"csv":case"feature":case"geo-rss":case"geojson":case"graphics":case"group":case"integrated-mesh":case"kml":case"map-notes":case"ogc-feature":case"point-cloud":case"route":case"scene":case"stream":case"unknown":case"unsupported":case null:return!1;case"base-dynamic":case"base-elevation":case"base-tile":case"bing-maps":case"elevation":case"imagery":case"imagery-tile":case"map-image":case"open-street-map":case"tile":case"vector-tile":case"wcs":case"web-tile":case"wms":case"wmts":return!0;default:return t.neverReached(e.type),!1}},e.isDiagonalResizeHandle=H,e.normalToBases=L,e.planeToShape=function(e,t,i,r){if(a.isNone(e))return null;const o=a.isSome(r.position)?r.position:new s;t.fromRenderCoords(e.origin,o,i),r.position=o;const c=t.worldUpAtPosition(e.origin,m.sv3d.get()),d=t.worldBasisAtPosition(e.origin,1,m.sv3d.get());return r.width=2*l.length(e.basis1),r.height=2*l.length(e.basis2),r.tilt=n.rad2deg(F(e,c)),r.heading=n.rad2deg(function(e,t,a){return p.angleAroundAxis(e.basis1,a,t)-V}(e,c,d)),r},e.resizePlane=function(e,t,a,i,s,r){const n=l.copy(m.sv3d.get(),s.origin);l.add(n,n,l.scale(m.sv3d.get(),s.basis1,e.direction[0]<0?1:-1)),l.add(n,n,l.scale(m.sv3d.get(),s.basis2,e.direction[1]<0?1:-1));const o=l.length(s.basis1),c=l.length(s.basis2),d=l.subtract(m.sv3d.get(),a,n),u=l.subtract(m.sv3d.get(),t,n);let g=0,p=0;if(H(e)){const t=N(s),a=N(r);g=o-.5*e.direction[0]*l.dot(s.basis1,u)/o,p=c-.5*e.direction[1]*l.dot(s.basis2,u)/c;const i=a/t;g*=i,p*=i}const b=g+.5*e.direction[0]*l.dot(s.basis1,d)/o,R=p+.5*e.direction[1]*l.dot(s.basis2,d)/c,_=l.scale(m.sv3d.get(),s.basis1,b/o),f=l.scale(m.sv3d.get(),s.basis2,R/c);(b<=0||M(r.origin,_,i)<=y.PLANE_MIN_BASIS_SCREEN_LEN2)&&l.copy(_,r.basis1),(R<=0||M(r.origin,f,i)<=y.PLANE_MIN_BASIS_SCREEN_LEN2)&&l.copy(f,r.basis2);const S=l.copy(m.sv3d.get(),n);return l.add(S,S,l.scale(m.sv3d.get(),_,e.direction[0]<0?-1:1)),l.add(S,S,l.scale(m.sv3d.get(),f,e.direction[1]<0?-1:1)),T.boundedPlane.fromValues(S,_,f,r)},e.shapeToPlane=function(e,t,i){return a.isNone(e)||a.isNone(e.position)?null:t.toRenderCoords(e.position,i.origin)?(t.worldBasisAtPosition(i.origin,0,i.basis1),t.worldBasisAtPosition(i.origin,1,i.basis2),T.plane.fromVectorsAndPoint(i.basis2,i.basis1,i.origin,i.plane),T.boundedPlane.rotate(i,-n.deg2rad(e.heading),T.boundedPlane.normal(i),i),T.boundedPlane.rotate(i,n.deg2rad(e.tilt),i.basis1,i),l.scale(i.basis1,i.basis1,e.width/2),l.scale(i.basis2,i.basis2,e.height/2),T.boundedPlane.updateUnboundedPlane(i),i):(P.error(`Failed to project slice plane position, projection from ${e.position.spatialReference.wkid} is not supported`),null)},e.updateResizeHandle=function(e,t,a,i){const s=l.length(i.basis1),r=l.length(i.basis2),n=D(i),o=N(i),c=l.set(m.sv3d.get(),0,0,0);l.add(c,l.scale(m.sv3d.get(),i.basis1,t.direction[0]),l.scale(m.sv3d.get(),i.basis2,t.direction[1])),l.add(c,i.origin,c);let u=0,g=1;if(H(t))1===t.direction[0]&&-1===t.direction[1]?u=V:1===t.direction[0]&&1===t.direction[1]?u=Math.PI:-1===t.direction[0]&&1===t.direction[1]&&(u=3*Math.PI/2),g=o;else{const e=0!==t.direction[0]?1:2;u=1===e?V:0,g=(1===e?r:s)-n}const p=d.identity(m.sm4d.get());d.rotateZ(p,p,u),d.scale(p,p,l.set(m.sv3d.get(),g,g,g)),d.multiply(p,a,p),p[12]=0,p[13]=0,p[14]=0,e.modelTransform=p,e.renderLocation=c},e.updateRotateHeadingHandle=function(e,t,a,i){const s=i.worldUpAtPosition(a.origin,m.sv3d.get()),r=v(a,0),n=d.identity(m.sm4d.get());d.rotateZ(n,n,r.edge*Math.PI/2),d.rotateX(n,n,-F(a,s)),d.multiply(n,t,n),n[12]=0,n[13]=0,n[14]=0,e.modelTransform=n,e.renderLocation=r.position},e.updateRotateTiltHandle=function(e,t,a){const i=v(a,1),s=d.identity(m.sm4d.get());d.rotateZ(s,s,i.edge*Math.PI/2),d.rotateX(s,s,V),d.multiply(s,t,s),s[12]=0,s[13]=0,s[14]=0,e.modelTransform=s,e.renderLocation=i.position},e.updateShiftRestartHandle=function(e,t,a,i){const s=v(a,2),r=m.sm4d.get();d.rotateZ(r,t,s.edge*Math.PI/2);const n=l.normalize(m.sv3d.get(),s.basis);let u=l.scale(m.sv3d.get(),n,s.direction*i.computeScreenPixelSizeAt(s.position)*y.SHIFT_RESTART_OFFSET_DISTANCE);l.add(u,u,s.position);const g=i.projectToRenderScreen(u,o.castRenderScreenPointArray3(m.sv3d.get())),p=function(e,t){const[a,i,s,r]=e.viewport,n=Math.min(s,r)/16;let o=!0;t[0]<a+n?(t[0]=a+n,o=!1):t[0]>a+s-n&&(t[0]=a+s-n,o=!1);t[1]<i+n?(t[1]=i+n,o=!1):t[1]>i+r-n&&(t[1]=i+r-n,o=!1);return o}(i,g);T.ray.fromRender(i,g,z),l.normalize(z.direction,z.direction);const b=m.sv3d.get();!p&&T.boundedPlane.intersectRay(a,z,b)&&(u=b),r[12]=0,r[13]=0,r[14]=0,e.modelTransform=r,e.renderLocation=c.clone(u),p?e.state|=k:e.state&=~k},Object.defineProperty(e,"__esModule",{value:!0})}));

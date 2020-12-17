/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../../../../core/maybe","../../../../core/handleUtils","../../../../core/mathUtils","../../../../chunks/vec3f64","../../../../chunks/vec3","../../../../support/elevationInfoUtils","../visualElements/LaserlineVisualElement","../visualElements/ExtendedLineVisualElement","../Manipulator3D","./settings","../visualElements/OutlineVisualElement","./ManipulatorState","../../layers/graphics/GraphicState"],(function(e,t,n,a,i,l,s,o,r,c,d,u,h,p){"use strict";function g(e,t){const{view:a,graphic:i}=e,l=new u.OutlineVisualElement({view:a,geometry:m(i)?i.geometry:null,elevationInfo:s.getGraphicEffectiveElevationInfo(i),attached:!1});d.settings.visualElements.lineGraphics.shadowStyle.apply(l);const o=()=>{l.attached=t.displaying};d.settings.visualElements.lineGraphics.outline.apply(l);const r=[t.watch("displaying",o),t.watch("isDraped",(e=>l.isDraped=e)),t.on("changed",(()=>l.geometry=m(i)?i.geometry:null)),n.destroyHandle(l)];return o(),{visualElement:l,remove:()=>n.handlesGroup(r).remove()}}function m(e){return t.isSome(e.geometry)&&("polygon"===e.geometry.type||"polyline"===e.geometry.type)}const v=i.create();e.createGeometryRepresentationVisualElement=g,e.createVisualElements=function(e){const{view:i,graphic:u}=e,E=new p.GraphicState({graphic:u}),y=g(e,E),f=[y,function(e,i,u){const{graphic:p,view:g}=e,E=[],y=s.getGraphicEffectiveElevationInfo(p),f="on-the-ground"===y.mode||!y.offset&&"absolute-height"!==y.mode,w=new h.ManipulatorState,S=new r.ExtendedLineVisualElement({view:g,extensionType:d.settings.visualElements.zVerticalLine.extensionType,innerWidth:1,attached:!1,writeDepthEnabled:!1,renderOccluded:4});d.settings.visualElements.pointGraphics.shadowStyle.apply(S);const G=a.deg2rad(d.settings.visualElements.heightPlaneAngleCutoff),b=new o.LaserlineVisualElement({view:g,attached:!1,angleCutoff:G});d.settings.visualElements.heightPlane.apply(b);let M=1,V=1;const L=()=>{if(w.update(e),!u.displaying||f&&(u.isDraped||!m(p)||!p.geometry.hasZ))return i.laserlineEnabled=!1,S.attached=!1,void(b.attached=!1);i.laserlineEnabled=!0;{const e=4&w.grabbingState?d.settings.visualElements.laserlineAlphaMultiplier:1;e!==M&&(M=e,d.settings.visualElements.lineGraphics.shadowStyle.apply(i,e),d.settings.visualElements.pointGraphics.shadowStyle.apply(S,e))}{const e=2&w.grabbingState?d.settings.visualElements.laserlineAlphaMultiplier:1;e!==V&&(V=e,d.settings.visualElements.heightPlane.apply(b,e))}!function(e,n){const a=1===n.numSelected?n.firstSelected:n.numSelected>1&&t.isSome(n.firstGrabbedXY)?n.firstGrabbedXY:null;t.isSome(a)?(e.setStartEndFromWorldDownAtLocation(a.renderLocation),e.attached=!0):e.attached=!1}(S,w),function(e,n,a,i){if(i.numSelected>0){l.set(v,0,0,0);let t=0;e.forEachManipulator(((e,n)=>{1===n&&e.selected&&e instanceof c.Manipulator3D&&(l.add(v,v,e.renderLocation),t++)})),t>0?(a.heightManifoldTarget=l.scale(v,v,1/t),a.attached=!0):a.attached=!1}else{const i=n.attachmentOrigin;t.isSome(i)&&e.view.renderCoordsHelper.toRenderCoords(i,v)?(a.heightManifoldTarget=v,a.attached=!0):a.attached=!1}}(e,i,b,w)};d.settings.visualElements.zVerticalLine.apply(S),E.push(u.on("changed",L),u.watch("displaying",L),i.events.on("attachment-origin-changed",L),n.destroyHandle(S),n.destroyHandle(b));const D=[],O=()=>{n.handlesGroup(D).remove(),D.length=0,e.forEachManipulator((e=>D.push(e.events.on("grab-changed",L)))),e.forEachManipulator((e=>D.push(e.events.on("select-changed",L)))),L()};return O(),E.push(e.onManipulatorsChanged(O),n.refHandle((()=>n.handlesGroup(D)))),n.handlesGroup(E)}(e,y.visualElement,E),i.maskOccludee(u),i.trackGraphicState(E)];return{visualElement:y.visualElement,remove:()=>n.handlesGroup(f).remove()}},Object.defineProperty(e,"__esModule",{value:!0})}));

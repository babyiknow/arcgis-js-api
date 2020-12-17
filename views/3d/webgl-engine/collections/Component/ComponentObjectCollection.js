/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../../../../../chunks/_rollupPluginBabelHelpers","../../../../../core/maybe","../../../../../core/Logger","../../../../../chunks/vec3f64","../../../../../chunks/vec3","../../../../../chunks/mat3","../../../../../chunks/vec4","../../../../../chunks/mat3f32","../../../support/buffer/glUtil","../../../support/buffer/InterleavedLayout","../../lib/Util","../../../../webgl/BufferObject","../../../../webgl/VertexArrayObject","../../../layers/support/symbolColorUtils","../../../../../chunks/vec4f32","../../../support/orientedBoundingBox","./ComponentData","./interface","../../core/util/BucketedObjectStore","./ComponentObject","../../lib/ComponentUtils","./IntersectionGeometry","./Renderable","./RenderGeometry","./RenderSubmitSystem","./SourceGeometry","./Material/ComponentTechnique","./Material/ComponentMaterial","../../core/util/TwoVectorPosition","../../lib/TextureBackedBuffer/BufferManager"],(function(e,t,o,n,r,i,s,a,c,l,m,u,p,h,f,b,g,d,y,C,w,S,M,_,x,v,B,I,P,D,j){"use strict";const k=n.getLogger("esri.views.3d.webgl-engine.collections.Component.ComponentObjectCollection");let O=function(){function e(e){this._renderManager=e,this._objects=new C.BucketedObjectStore,this._renderSubmit=new v.RenderSubmitSystem(this),this._renderManager.register(this._renderSubmit),this._componentBufferManager=new j.BufferManager(e.rctx)}var n=e.prototype;return n.dispose=function(){u.assert(0===this._objects.count,"ObjectCollection should be empty upon disposal"),this._componentBufferManager.destroy()},n.createObject=function(e){const t=new w;return t.toMapSpace=e.toMapSpace.slice(),t.transform=e.transform,t.obb=g.clone(e.obb),t.components=new d(this._componentBufferManager,e.geometry.componentOffsets),t.renderable=this._createRenderable(e,t.components),t.intersectionGeometry=new M(e.geometry.positionData,t.components),this._objects.add(e.visible?y.VISIBLE_BIT:0,t),t},n.destroyObject=function(e){const t=e;this._objects.remove(t),t.dispose(),this._notifyDirty()},n.setObjectVisibility=function(e,t){const o=e;if(t!==o.visible){const e=t?o.bucketKey|y.VISIBLE_BIT:o.bucketKey&~y.VISIBLE_BIT;this._objects.updateKey(o,e),this._notifyDirty()}},n.preSubmit=function(e){const t=e.camera.eye;this._objects.forEach(((e,o)=>{o&y.VISIBLE_BIT&&e.forEach((e=>{const o=i.squaredDistance(t,e.obb.center);e.renderable.meta.cameraDepthSquared=o}))}))},n.getMaterial=function(e){return e.renderable.material},n.updateMaterial=function(e,t){const o=e.renderable.material;t(o),o.dirty&&this._notifyDirty()},n.setAllComponentVisibilities=function(e,t){const o=e;o.components.visibility.reset(t),o.components.visibilityDirty(),this._notifyDirty()},n.forEachVisibleComponent=function(e,t){return e.components.visibility.forEachComponent(t)},n.getComponentCount=function(e){const t=e,o=t.components.visibility.componentCount();return{visible:o,invisible:t.components.count-o}},n.setComponentData=function(e,t){const o=e,n=o.renderable.material;if(y.isVaryingComponentParameters(t)){const e=o.components,r=e.materialDataBuffer,i=e.materialDataIndices,s={castShadows:!0,pickable:!0,externalColor:b.create(),externalColorMixMode:1},a=r.textureBuffer,c=new Uint8Array(4),l=new Uint32Array(c.buffer);let m=0,u=0,p=0,h=!1,g=0;for(let o=0;o<e.count;o++)t(o,s),m+=+(s.externalColor[3]<1),u+=+(3===s.externalColorMixMode&&1===s.externalColor[3]),p+=+s.castShadows,f.encodeSymbolColor(s.externalColor,s.externalColorMixMode,c),c[2]=254&c[2]|+s.castShadows,a.setData(i[o],0,c[0],c[1],c[2],c[3]),h=h||o>0&&g!==l[0],g=l[0],s.pickable!==S.getVisibility(e.pickability,o)&&(e.pickability=S.updateVisibilityWithCount(e.pickability,e.count,o,s.pickable));h?(n.componentParameters=new P.ComponentParametersVarying,n.componentParameters.castShadows=L(p,e.count),n.componentParameters.transparent=L(m,e.count),n.componentParameters.opaqueOverride=L(u,e.count),n.componentParameters.texture=a,a.updateTexture()):(n.componentParameters=new P.ComponentParametersUniform,n.componentParameters.castShadows=s.castShadows?0:2,n.componentParameters.externalColor=s.externalColor,n.componentParameters.externalColorMixMode=s.externalColorMixMode)}else n.componentParameters=new P.ComponentParametersUniform,n.componentParameters.castShadows=t.castShadows?0:2,n.componentParameters.externalColor=t.externalColor,n.componentParameters.externalColorMixMode=t.externalColorMixMode;this._notifyDirty()},n.getComponentAabb=function(e,t,o){return e.intersectionGeometry.getComponentAabb(t,o)},n.getComponentObb=function(e){return e.obb},n.getObjectTransform=function(e){return e.transform},n.getComponentPositions=function(e,t,o){return e.intersectionGeometry.getComponentPositions(t,o)},n.intersect=function(e,t,n,r,a,c){const l=e;o.isSome(a)&&(a.localOrigin=l.transform.position);const m=s.invert(T,l.transform.rotationScale);i.sub(E,t,l.transform.position),i.sub(U,n,l.transform.position),i.transformMat3(E,E,m),i.transformMat3(U,U,m);const u=s.transpose(T,m);return l.intersectionGeometry.intersect(E,U,r,u,a,c)},n.addEdges=function(e,t,o,n){const r=e,{indices:i,positions:s}=r.intersectionGeometry,a=r.components.offsets;return t.addComponentObject(e,r.transform,r.obb.center,s,i,a,o,n)},n.addComponentHighlight=function(e,t){const n=e.components;o.isNone(n.highlightCounts)&&(n.highlightCounts=new Uint32Array(n.count+1));0===n.highlightCounts[t]++&&(n.highlightsDirty(),this._notifyDirty()),n.highlightCounts[n.count]++},n.removeComponentHighlight=function(e,t){const n=e.components;if(o.isNone(n.highlightCounts))return void k.warn("Removing non-existing highlight.");const r=n.highlightCounts[t],i=n.highlightCounts[n.count];if(0!==r){if(r>1)return n.highlightCounts[t]=r-1,void(n.highlightCounts[n.count]=i-1);n.highlightCounts[t]=0,n.highlightsDirty(),this._notifyDirty(),1===i?n.highlightCounts=null:n.highlightCounts[n.count]=i-1}else k.warn("Removing non-existing highlight.")},n.clearHighlights=function(e){const t=e.components;o.isSome(t.highlightCounts)&&(t.highlightCounts=null,t.highlightsDirty(),this._notifyDirty())},n.getObjectGPUMemoryUsage=function(e){return e.renderable.meta.gpuMemoryEstimate},n._createRenderable=function(e,t){const n=this._renderManager.rctx,r=e.geometry,m=r.vertices.layoutParameters,u=p.createVertex(n,35044,r.vertices.data),f=o.applySome(r.indices,(e=>p.createIndex(n,35044,e))),b=l.glLayout(B.createVertexBufferLayout(m)),g=new Uint16Array(r.vertices.count);for(let e=0;e<t.count;e++){const n=t.offsets[e],i=t.offsets[e+1],s=t.materialDataIndices[e];if(o.isSome(r.indices))for(let e=n;e<i;e++){g[r.indices[e]]=s}else for(let e=n;e<i;e++)g[e]=s}const d=p.createVertex(n,35044,g.buffer),y=new D.TwoVectorPosition(e.transform.position),C=c.clone(e.transform.rotationScale);s.invert(C,C),s.transpose(C,C);const w=new I.ComponentDrawParameters;i.copy(w.worldFromModel_TL,y.low),i.copy(w.worldFromModel_TH,y.high),s.copy(w.worldFromModel_RS,e.transform.rotationScale),s.copy(w.transformNormal_GlobalFromModel,C),a.copy(w.toMapSpace,e.toMapSpace);const S=new P.ComponentMaterial,M=new h(n,S.attributeLocations,{data:b,componentIndices:V},{data:u,componentIndices:d},o.unwrap(f)),v=new _;return v.material=S,v.drawParameters=w,v.geometry=new x(M,r.primitiveType,m,o.isSome(f)),v.meta.cameraDepthSquared=.5,v.meta.gpuMemoryEstimate=u.byteSize+d.byteSize+(o.isSome(f)?f.byteSize:0),v},n._notifyDirty=function(){this._renderManager.notifyDirty()},t._createClass(e,[{key:"visibleObjects",get:function(){return this._objects.getBucket(y.VISIBLE_BIT)}},{key:"performanceInfo",get:function(){const e=this._objects.getPerformanceInfo(y.VISIBLE_BIT);return{shown:e.added,hidden:e.removed}}}]),e}();const V=l.glLayout(m.newLayout().u16("componentIndex"));function L(e,t){return e===t?0:0===e?2:1}const T=c.create(),E=r.create(),U=r.create();e.ComponentObjectCollection=O,Object.defineProperty(e,"__esModule",{value:!0})}));

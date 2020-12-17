/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../core/maybe","../../../../core/Error","../../../../chunks/vec3f64","../../../../chunks/vec3","../../../../chunks/mat4","../../../../geometry/projection","../../../../chunks/mat3f64","../../../../chunks/mat4f64","../../../../core/libs/earcut/earcut","../../../../chunks/mat3","../../support/buffer/BufferView","../../../../chunks/vec32","../../../../geometry/support/aaBoundingBox","../../support/ElevationProvider","../../webgl-engine/lib/Util","../../webgl-engine/lib/GeometryData","../../webgl-engine/lib/Object3D","./graphicUtils","./elevationAlignmentUtils","./ElevationContext","./Graphics3DObject3DGraphicLayer","../../webgl-engine/lib/Geometry","../support/edgeUtils","./Graphics3DSymbolLayer","../../../../renderers/support/renderingInfoUtils","./polygonUtils","../../webgl-engine/materials/DefaultMaterial"],(function(e,t,n,a,r,i,s,o,l,c,h,d,u,p,m,g,y,f,_,b,E,x,v,P,A,S,w,C,L){"use strict";let M=function(e){function i(t,n,a,r){var i;return(i=e.call(this,t,n,a,r)||this).ensureDrapedStatus(!1),i}t._inheritsLoose(i,e);var g=i.prototype;return g.doLoad=async function(){if(!this._drivenProperties.size){const e=b.validateSymbolLayerSize(this._getSymbolSize());if(e)throw new a("graphics3dextrudesymbollayer:invalid-size",e)}const e=n.get(this.symbolLayer,"material","color"),t=this._getCombinedOpacityAndColor(e),i=r.fromArray(t),s=t[3],o={usePBR:this._context.physicalBasedRenderingEnabled,isSchematic:!0,diffuse:i,ambient:i,opacity:s,transparent:s<1||this.needsDrivenTransparentPass,vertexColors:!0,slicePlaneEnabled:this._context.slicePlaneEnabled,castShadows:this.symbolLayer.castShadows,offsetTransparentBackfaces:!0};this._material=new L.DefaultMaterial(o,this._getIdHint("_3dlinemat")),this._bottomMaterial=new L.DefaultMaterial({...o,cullFace:2},this._getIdHint("_3dlinematbot")),this._context.stage.add(3,this._material),this._context.stage.add(3,this._bottomMaterial)},g.destroy=function(){e.prototype.destroy.call(this),this._material&&(this._context.stage.remove(3,this._material.id),this._context.stage.remove(3,this._bottomMaterial.id))},g.createGraphics3DGraphic=function(e){const t=e.graphic;if(!this._validateGeometryType(t.geometry,i.validGeometryTypes,this.symbolLayer.type)||!this._validateGeometry(t.geometry))return null;const n="graphic"+t.uid,a=this._getVertexOpacityAndColor(e.renderingInfo,Float32Array,255),r=this.setGraphicElevationContext(t,new x.ElevationContext);return this._createAs3DShape(t,e.renderingInfo,a,r,n,t.uid)},g.layerOpacityChanged=function(e,t){const a=n.get(this.symbolLayer,"material","color"),r=this._getCombinedOpacity(a),i=r<1||this.needsDrivenTransparentPass;this._material.setParameterValues({opacity:r,transparent:i}),this._bottomMaterial.setParameterValues({opacity:r,transparent:i});const s=this._getLayerOpacity();return e.forEach((e=>{const a=t(e);n.isSome(a)&&a.layerOpacityChanged(s,this._context.isAsync)})),!0},g.layerElevationInfoChanged=function(e,t){return this.updateGraphics3DGraphicElevationInfo(e,t,E.needsElevationUpdates3D)},g.slicePlaneEnabledChanged=function(e,t){return this._material.setParameterValues({slicePlaneEnabled:this._context.slicePlaneEnabled}),this._bottomMaterial.setParameterValues({slicePlaneEnabled:this._context.slicePlaneEnabled}),e.forEach((e=>{const a=t(e);n.isSome(a)&&a.slicePlaneEnabledChanged(this._context.slicePlaneEnabled,this._context.isAsync)})),!0},g.physicalBasedRenderingChanged=function(){return this._material.setParameterValues({usePBR:this._context.physicalBasedRenderingEnabled,isSchematic:!0}),this._bottomMaterial.setParameterValues({usePBR:this._context.physicalBasedRenderingEnabled,isSchematic:!0}),!0},g.pixelRatioChanged=function(){return!0},g._getExtrusionSize=function(e){let t;var n;e.size&&this._drivenProperties.size?t=null!=(n=w.getDriverAxisSizeValue(e.size,2))?n:0:t=this._getSymbolSize();return t/=this._context.renderCoordsHelper.unitInMeters,t},g._getSymbolSize=function(){var e;return null!=(e=this.symbolLayer.size)?e:1},g._createAs3DShape=function(e,t,a,i,g,y){const f=C.geometryAsPolygon(e.geometry);if(n.isNone(f))return null;const x=C.geometryToRenderInfo(f,this._context.elevationProvider,this._context.renderCoordsHelper,i);if(this._logGeometryCreationWarnings(x,f.rings,"rings","ExtrudeSymbol3DLayer"),0===f.rings.length||!f.rings.some((e=>e.length>0)))return null;const A=b.computeCentroid(f);if(n.isNone(A))return null;const S=new Array,w=new Array,L=new Array,M=m.create(),T=c.create(),D=r.create(),I=1===this._context.renderCoordsHelper.viewingMode;I||this._context.renderCoordsHelper.worldUpAtPosition(null,D),o.computeLinearTransformation(f.spatialReference,[A.x,A.y,0],T,this._context.renderCoordsHelper.spatialReference);const V=c.create();s.invert(V,T);const G=l.create();d.normalFromMat4(G,V);const{polygons:O,mapPosition:z,position:R}=x,U=R.length/3,N=new Float64Array(3*U*6),F=new Float64Array(3*U*6),H=new Float64Array(3*U*6),j=new Float64Array(1*U*6);let Y=0;for(let e=0;e<O.length;++e){const n=O[e],r=n.count;if(this._context.clippingExtent&&(m.empty(M),m.expandWithBuffer(M,n.mapPosition),!m.intersectsClippingArea(M,this._context.clippingExtent)))continue;const i=h.earcut(n.mapPosition,n.holeIndices,3);if(0===i.length)continue;const s=3*r*2+i.length,o=new Uint32Array(s),l=new Uint32Array(i.length),d=6*r,y=3*N.BYTES_PER_ELEMENT,f=new u.BufferViewVec3f64(N.buffer,Y*y,y,(Y+d)*y),_=3*F.BYTES_PER_ELEMENT,b=new u.BufferViewVec3f64(F.buffer,Y*_,_,(Y+d)*_),E=new Float64Array(H.buffer,3*Y*H.BYTES_PER_ELEMENT,3*d),x=new Float64Array(j.buffer,1*Y*j.BYTES_PER_ELEMENT,1*d),v=this._getExtrusionSize(t);B(R,z,i,n,f.typedBuffer,E,b.typedBuffer,x,0,o,l,v,D,I),p.transformMat4(f,f,V),p.transformMat3(b,b,G),Y+=6*r;const A=this._createExtrudeGeometry(o,{positions:f.typedBuffer,elevation:E,normals:b.typedBuffer,heights:x},a),C=new P(A,g+"path"+e);S.push(C),w.push(this._material),L.push(c.IDENTITY);const T=this._createExtrudeGeometry(l,{positions:f.typedBuffer,elevation:E,normals:b.typedBuffer,heights:x},a),U=new P(T,g+"bottompath"+e);S.push(U),w.push(this._bottomMaterial),L.push(c.IDENTITY)}if(0===S.length)return null;const W=new _({geometries:S,materials:w,transformations:L,castShadow:!0,metadata:{layerUid:this._context.layer.uid,graphicUid:y,isElevationSource:!0},idHint:g});W.objectTransformation=T;const Z=k,q=this._createEdgeMaterial(),J=n.isSome(q)?{baseMaterial:this._material,edgeMaterials:[q],properties:{mergeGeometries:!0,slicePlaneEnabled:this._context.slicePlaneEnabled}}:null,K=new v(this,W,S,null,null,Z,i,J);return K.alignedSampledElevation=x.sampledElevation,K.needsElevationUpdates=E.needsElevationUpdates3D(i.mode),K},g._createExtrudeGeometry=function(e,t,n){const a=new Uint32Array(e.length),r={};r[y.VertexAttrConstants.POSITION]=e,r[y.VertexAttrConstants.NORMAL]=e,r[y.VertexAttrConstants.COLOR]=a;const i={};return i[y.VertexAttrConstants.POSITION]={size:3,data:t.positions},i[y.VertexAttrConstants.NORMAL]={size:3,data:t.normals},i[y.VertexAttrConstants.COLOR]={size:4,data:n},i[y.VertexAttrConstants.SIZE]={size:1,data:t.heights},t.elevation&&(i.mapPos={size:3,data:t.elevation},r.mapPos=e),new f.GeometryData(i,r)},g._createEdgeMaterial=function(){const e={opacity:this._getLayerOpacity()};return A.createMaterial(this.symbolLayer,e)},i}(S.Graphics3DSymbolLayer);function B(e,t,n,a,r,s,o,l,c,h,d,u,p,m){const g=n.length/3;let y=0,f=2*a.count;!function(e,t,n,a,r,s,o,l,c,h,d,u,p,m,g,y,f,_){i.copy(H,f);const b=y>0?1:-1;let E=3*n,x=u,v=3*x,P=u+a,A=3*P;for(let n=0;n<a;++n)_&&(H[0]=e[E+0],H[1]=e[E+1],H[2]=e[E+2],i.normalize(H,H)),l[v+0]=e[E+0],l[v+1]=e[E+1],l[v+2]=e[E+2],c[v+0]=t[E+0],c[v+1]=t[E+1],c[v+2]=t[E+2],h[v+0]=-b*H[0],h[v+1]=-b*H[1],h[v+2]=-b*H[2],d[x]=0,l[A+0]=e[E+0]+y*H[0],l[A+1]=e[E+1]+y*H[1],l[A+2]=e[E+2]+y*H[2],c[A+0]=t[E+0],c[A+1]=t[E+1],c[A+2]=t[E+2],h[A+0]=b*H[0],h[A+1]=b*H[1],h[A+2]=b*H[2],d[P]=y,v+=3,A+=3,E+=3,x+=1,P+=1;E=3*s,v=0,A=3*g;const S=y<0?Y:j,w=y<0?j:Y;for(let e=0;e<o;++e)m[v+0]=r[E+S[0]],m[v+1]=r[E+S[1]],m[v+2]=r[E+S[2]],p[A+0]=r[E+w[0]]+a,p[A+1]=r[E+w[1]]+a,p[A+2]=r[E+w[2]]+a,v+=3,A+=3,E+=3}(e,t,a.index,a.count,n,0,g,r,s,o,l,c,h,d,f,u,p,m),c+=2*a.count,f=0,I(r,s,l,o,y,a.pathLengths[0],a.count,c,h,f,u),c+=4*a.pathLengths[0],f+=2*a.pathLengths[0],y+=a.pathLengths[0];for(let e=1;e<a.pathLengths.length;++e)I(r,s,l,o,y,a.pathLengths[e],a.count,c,h,f,u),c+=4*a.pathLengths[e],f+=2*a.pathLengths[e],y+=a.pathLengths[e]}function T(e,t,n,a,r,i,s){a[i]=a[s],s*=3,e[(i*=3)+0]=e[s+0],e[i+1]=e[s+1],e[i+2]=e[s+2],t[i+0]=t[s+0],t[i+1]=t[s+1],t[i+2]=t[s+2],n[i+0]=r[0],n[i+1]=r[1],n[i+2]=r[2]}M.validGeometryTypes=["polygon","extent"];const D=r.create();function I(e,t,n,a,r,i,s,o,l,c,h){let d=r,u=r+1,p=r+s,m=r+s+1,g=o,y=o+1,f=o+2*i,_=o+2*i+1;h<0&&(d=r+s+1,m=r),c*=3;for(let o=0;o<i;++o)o===i-1&&(h>0?(u=r,m=r+s):(u=r,d=r+s)),U(e,d,u,p,D),T(e,t,a,n,D,g,d),T(e,t,a,n,D,y,u),T(e,t,a,n,D,f,p),T(e,t,a,n,D,_,m),l[c++]=g,l[c++]=f,l[c++]=_,l[c++]=g,l[c++]=_,l[c++]=y,d++,u++,p++,m++,g+=2,y+=2,f+=2,_+=2}const V=r.create(),G=r.create(),O=r.create(),z=r.create(),R=r.create();function U(e,t,n,a,r){t*=3,n*=3,a*=3,i.set(V,e[t++],e[t++],e[t++]),i.set(G,e[n++],e[n++],e[n++]),i.set(O,e[a++],e[a++],e[a++]),i.subtract(z,G,V),i.subtract(R,O,V),i.cross(r,R,z),i.normalize(r,r)}const N=r.create();function k(e,t,n,a){const r=e.stageObject,o=r.geometryRecords,l=o.length,h="absolute-height"!==t.mode;let d=0;const u=r.objectTransformation,p=s.invert(c.create(),u);for(let e=0;e<l;e+=2){const s=o[e].geometry,l=s.data.getVertexAttr(),c=l[y.VertexAttrConstants.POSITION].data,m=l[y.VertexAttrConstants.SIZE].data,f=l.mapPos.data,_=new g.SamplePosition(f),b=c.length/3;let x=0,v=!1,P=0;for(let e=0;e<b;e++){N[0]=c[x],N[1]=c[x+1],N[2]=c[x+2];const e=E.evaluateElevationAlignmentAtPoint(_,n,t,a,h?W:null);h&&(P+=W.sampledElevation),i.set(F,c[x+0],c[x+1],c[x+2]),i.transformMat4(F,F,u),a.setAltitude(e+m[x/3],F),i.transformMat4(F,F,p),c[x]=F[0],c[x+1]=F[1],c[x+2]=F[2];const r=.01/a.unitInMeters;(Math.abs(N[0]-c[x])>r||Math.abs(N[1]-c[x+1])>r||Math.abs(N[2]-c[x+2])>r)&&(v=!0),_.offset+=3,x+=3}v&&(s.invalidateBoundingInfo(),r.geometryVertexAttrsUpdated(e),o[e+1].geometry.invalidateBoundingInfo(),r.geometryVertexAttrsUpdated(e+1)),d+=P/b}return d/l}const F=r.create(),H=r.create(),j=[0,2,1],Y=[0,1,2],W={verticalDistanceToGround:0,sampledElevation:0};e.Graphics3DExtrudeSymbolLayer=M,e.default=M,Object.defineProperty(e,"__esModule",{value:!0})}));

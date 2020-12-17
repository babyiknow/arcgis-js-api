/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../../../../../core/maybe","../../../../../core/mathUtils","../../../../../chunks/vec3f64","../../../../../chunks/vec3","../../../../../geometry/support/aaBoundingBox","../../lib/Util","../renderers/utils","../../lib/screenSizePerspectiveUtils"],(function(e,t,n,i,o,r,s,c,a){"use strict";const l=r.create(),f=s.VertexAttrConstants;const u=i.create();function d(e,n,i,o,s,c){const a=I(n,i,u);if(r.setMin(l,e.getBBMin()),r.setMax(l,e.getBBMax()),t.isSome(s)&&s.applyToAabb(l),b(l,n,a,o)){const t=e.getPrimitiveIndices(),r=e.getIndices(),a=e.getPosition(),l=t?t.length:r.length/3;if(l>T){const t=e.getChildren();if(void 0!==t){for(let e=0;e<8;++e)void 0!==t[e]&&d(t[e],n,i,o,s,c);return}}g(n,i,0,l,r,a,t,s,c)}}const m=2**-52,p=i.create();function g(e,n,i,o,r,s,c,a,l){if(c)return function(e,n,i,o,r,s,c,a,l){const{data:f,offsetIdx:u,strideIdx:d}=s,g=e[0],h=e[1],x=e[2],I=n[0],b=n[1],v=n[2],y=I-g,T=b-h,A=v-x;for(let e=i;e<o;++e){const n=c[e];let i=3*n,o=u+d*r[i++],s=f[o++],I=f[o++],b=f[o];o=u+d*r[i++];let v=f[o++],P=f[o++],S=f[o];o=u+d*r[i];let O=f[o++],V=f[o++],B=f[o];t.isSome(a)&&([s,I,b]=a.applyToVertex(s,I,b,e),[v,P,S]=a.applyToVertex(v,P,S,e),[O,V,B]=a.applyToVertex(O,V,B,e));const L=v-s,D=P-I,N=S-b,U=O-s,z=V-I,E=B-b,W=T*E-z*A,C=A*U-E*y,R=y*z-U*T,_=L*W+D*C+N*R;if(Math.abs(_)<=m)continue;const k=g-s,G=h-I,H=x-b,j=k*W+G*C+H*R;if(_>0){if(j<0||j>_)continue}else if(j>0||j<_)continue;const X=G*N-D*H,Y=H*L-N*k,Z=k*D-L*G,q=y*X+T*Y+A*Z;if(_>0){if(q<0||j+q>_)continue}else if(q>0||j+q<_)continue;const w=(U*X+z*Y+E*Z)/_;if(w>=0){l(w,M(L,D,N,U,z,E,p),n)}}}(e,n,i,o,r,s,c,a,l);const{data:f,offsetIdx:u,strideIdx:d}=s,g=e[0],h=e[1],x=e[2],I=n[0]-g,b=n[1]-h,v=n[2]-x;for(let e=i,n=3*i;e<o;++e){let i=u+d*r[n++],o=f[i++],s=f[i++],c=f[i];i=u+d*r[n++];let y=f[i++],T=f[i++],A=f[i];i=u+d*r[n++];let P=f[i++],S=f[i++],O=f[i];t.isSome(a)&&([o,s,c]=a.applyToVertex(o,s,c,e),[y,T,A]=a.applyToVertex(y,T,A,e),[P,S,O]=a.applyToVertex(P,S,O,e));const V=y-o,B=T-s,L=A-c,D=P-o,N=S-s,U=O-c,z=b*U-N*v,E=v*D-U*I,W=I*N-D*b,C=V*z+B*E+L*W;if(Math.abs(C)<=m)continue;const R=g-o,_=h-s,k=x-c,G=R*z+_*E+k*W;if(C>0){if(G<0||G>C)continue}else if(G>0||G<C)continue;const H=_*L-B*k,j=k*V-L*R,X=R*B-V*_,Y=I*H+b*j+v*X;if(C>0){if(Y<0||G+Y>C)continue}else if(Y>0||G+Y<C)continue;const Z=(D*H+N*j+U*X)/C;if(Z>=0){l(Z,M(V,B,L,D,N,U,p),e)}}}const h=i.create(),x=i.create();function M(e,t,n,i,r,s,c){return o.set(h,e,t,n),o.set(x,i,r,s),o.cross(c,h,x),o.normalize(c,c),c}function I(e,t,n){return o.set(n,1/(t[0]-e[0]),1/(t[1]-e[1]),1/(t[2]-e[2]))}function b(e,t,n,i){return v(e,t,n,i,1/0)}function v(e,t,n,i,o){const r=(e[0]-i-t[0])*n[0],s=(e[3]+i-t[0])*n[0];let c=Math.min(r,s),a=Math.max(r,s);const l=(e[1]-i-t[1])*n[1],f=(e[4]+i-t[1])*n[1];if(a=Math.min(a,Math.max(l,f)),a<0)return!1;if(c=Math.max(c,Math.min(l,f)),c>a)return!1;const u=(e[2]-i-t[2])*n[2],d=(e[5]+i-t[2])*n[2];return a=Math.min(a,Math.max(u,d)),!(a<0)&&(c=Math.max(c,Math.min(u,d)),!(c>a)&&c<o)}function y(e){const t=[];return e.forEach((e=>t.push(e))),t}const T=1e3;e.bindScreenSizePerspective=function(e,t,n){if(!e)return;const i=e.parameters,o=e.paddingPixelsOverride;t.setUniform4f(n,i.divisor,i.offset,i.minPixelSize,o)},e.colorMixModes={multiply:1,ignore:2,replace:3,tint:4},e.computeInvDir=I,e.computeNormal=M,e.copyParameters=function e(t,n){const i=n?e(n):{};for(const e in t){let n=t[e];n&&n.forEach&&(n=y(n)),null==n&&e in i||(i[e]=n)}return i},e.intersectAabbInvDir=b,e.intersectAabbInvDirBefore=v,e.intersectDrapedRenderLineGeometry=function(e,t,i,o,r){if(!t.options.selectionMode)return;const s=e.getAttribute(f.POSITION).data,c=e.getAttribute(f.SIZE),a=c&&c.data[0],l=i[0],u=i[1],d=((a+o)/2+4)*e.screenToWorldRatio;let m=Number.MAX_VALUE;for(let e=0;e<s.length-5;e+=3){const t=s[e],i=s[e+1],o=l-t,r=u-i,c=s[e+3]-t,a=s[e+4]-i,f=c*o+a*r,d=c*c+a*a,p=n.clamp(f/d,0,1),g=c*p-o,h=a*p-r,x=g*g+h*h;x<m&&(m=x)}m<d*d&&r()},e.intersectTriangleGeometry=function(e,t,n,i,o,r,a){const l=c.isInstanceHidden(t),u=n.tolerance;if(!l)if(e.boundingInfo)s.assert("triangle"===e.data.primitiveType),d(e.boundingInfo,i,o,u,r,a);else{const t=e.getIndices(f.POSITION),n=e.getAttribute(f.POSITION);g(i,o,0,t.length/3,t,n,void 0,r,a)}},e.intersectTriangles=g,e.updateParameters=function(e,t){let n=!1;for(const i in t){const o=t[i];void 0!==o&&(n=!0,Array.isArray(o)?e[i]=o.slice():e[i]=o)}return n},e.verticalOffsetAtDistance=function(e,t,i,o,r){let s=(i.screenLength||0)*e.pixelRatio;r&&(s=a.scale(s,o,t,r));const c=s*Math.tan(.5*e.fovY)/(.5*e.fullHeight);return n.glClamp(c*t,i.minWorldLength||0,null!=i.maxWorldLength?i.maxWorldLength:1/0)},Object.defineProperty(e,"__esModule",{value:!0})}));

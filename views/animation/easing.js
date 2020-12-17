/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports"],(function(t){"use strict";function u(t){return t}const i=t=>t*t,n=t=>1-i(1-t),o=t=>t<.5?i(2*t)/2:(n(2*(t-.5))+1)/2,a=t=>t*t*t,c=t=>1-a(1-t),s=t=>t<.5?a(2*t)/2:(c(2*(t-.5))+1)/2,r=t=>t*t*t*t,e=t=>1-r(1-t),C=t=>t<.5?r(2*t)/2:(e(2*(t-.5))+1)/2,q=t=>t*t*t*t*t,Q=t=>1-q(1-t),d=t=>t<.5?q(2*t)/2:(Q(2*(t-.5))+1)/2,b=t=>1-Math.cos(t*Math.PI/2),O=t=>1-b(1-t),p=t=>t<.5?b(2*t)/2:(O(2*(t-.5))+1)/2,x=t=>Math.pow(2,10*(t-1)),f=t=>1-x(1-t),M=t=>t<.5?x(2*t)/2:(f(2*(t-.5))+1)/2,h=t=>-(Math.sqrt(1-t*t)-1),l=t=>1-h(1-t),E=t=>t<.5?h(2*t)/2:(l(2*(t-.5))+1)/2;function S(t){const u=2*(t-Math.sqrt((t-1)*t)),i=u/2/t;return n=>n<i?t*n*n:u*n-u+1}function P(t,u){return i=>i<u?u*t(i/u):1-t((1-i)/(1-u))*(1-u)}const _=P(S(1),1),j=P(S(1),0),m=P(S(1),.5),v=P(S(2),1),w=P(S(2),0),y=P(S(2),.5),I=P(S(3),1),g=P(S(3),0),k=P(S(3),.5),z=P(S(4),1),A=P(S(4),0),B=P(S(4),.5),D={linear:u,"in-quad":i,"out-quad":n,"in-out-quad":o,"in-coast-quad":_,"out-coast-quad":j,"in-out-coast-quad":m,"in-cubic":a,"out-cubic":c,"in-out-cubic":s,"in-coast-cubic":v,"out-coast-cubic":w,"in-out-coast-cubic":y,"in-quart":r,"out-quart":e,"in-out-quart":C,"in-coast-quart":I,"out-coast-quart":g,"in-out-coast-quart":k,"in-quint":q,"out-quint":Q,"in-out-quint":d,"in-coast-quint":z,"out-coast-quint":A,"in-out-coast-quint":B,"in-sine":b,"out-sine":O,"in-out-sine":p,"in-expo":x,"out-expo":f,"in-out-expo":M,"in-circ":h,"out-circ":l,"in-out-circ":E};t.inCirc=h,t.inCoastCubic=v,t.inCoastQuad=_,t.inCoastQuart=I,t.inCoastQuint=z,t.inCubic=a,t.inExpo=x,t.inOutCirc=E,t.inOutCoastCubic=y,t.inOutCoastQuad=m,t.inOutCoastQuart=k,t.inOutCoastQuint=B,t.inOutCubic=s,t.inOutExpo=M,t.inOutQuad=o,t.inOutQuart=C,t.inOutQuint=d,t.inOutSine=p,t.inQuad=i,t.inQuart=r,t.inQuint=q,t.inSine=b,t.linear=u,t.named=D,t.outCirc=l,t.outCoastCubic=w,t.outCoastQuad=j,t.outCoastQuart=g,t.outCoastQuint=A,t.outCubic=c,t.outExpo=f,t.outQuad=n,t.outQuart=e,t.outQuint=Q,t.outSine=O,Object.defineProperty(t,"__esModule",{value:!0})}));

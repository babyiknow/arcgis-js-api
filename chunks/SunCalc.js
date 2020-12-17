/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","./_commonjsHelpers"],(function(n,t){"use strict";var r=t.createCommonjsModule((function(n){var t;void 0!==(t=function(){var n=Math.PI,t=Math.sin,r=Math.cos,e=Math.tan,u=Math.asin,o=Math.atan2,i=Math.acos,a=n/180,c=864e5,f=2440588,d=2451545,s={dec:0,ra:0};function v(n){return n.valueOf()/c-.5+f}function M(n){return new Date((n+.5-f)*c)}function O(n){return v(n)-d}var N=23.4397*a;function P(n,u){return o(t(n)*r(N)-e(u)*t(N),r(n))}function h(n,e){return u(t(e)*r(N)+r(e)*t(N)*t(n))}function E(n,u,i){return o(t(n),r(n)*t(u)-e(i)*r(u))}function I(n,e,o){return u(t(e)*t(o)+r(e)*r(o)*r(n))}function l(n,t){return a*(280.16+360.9856235*n)-t}function T(n){return a*(357.5291+.98560028*n)}function A(n){return a*(1.9148*t(n)+.02*t(2*n)+3e-4*t(3*n))}function L(t,r){return t+r+102.9372*a+n}function R(n,t){var r=T(n),e=L(r,A(r));return t||(t={dec:0,ra:0}),t.dec=h(e,0),t.ra=P(e,0),t}var _={POLAR_EXCEPTION:{NORMAL:0,MIDNIGHT_SUN:1,POLAR_NIGHT:2},getPosition:function(n,t,r,e){var u=a*-r,o=a*t,i=O(n),c=R(i,s),f=l(i,u)-c.ra;return e||(e={azimuth:0,altitude:0}),e.azimuth=E(f,o,c.dec),e.altitude=I(f,o,c.dec),e}},m=[[-.83,"sunrise","sunset"]];_.addTime=function(n,t,r){m.push([n,t,r])};var p=9e-4;function C(t,r){return Math.round(t-p-r/(2*n))}function g(t,r,e){return p+(t+r)/(2*n)+e}function H(n,r,e){return d+n+.0053*t(r)-.0069*t(2*e)}function X(n,e,u){return i((t(n)-t(e)*t(u))/(r(e)*r(u)))}function x(n){var e=a*(134.963+13.064993*n),u=a*(93.272+13.22935*n),o=a*(218.316+13.176396*n)+6.289*a*t(e),i=5.128*a*t(u),c=385001-20905*r(e);return{ra:P(o,i),dec:h(o,i),dist:c}}return _.getTimes=function(n,e,u){var o=a*-u,i=a*e,c=C(O(n),o),f=g(0,o,c),d=T(f),s=A(d),v=L(d,s),N=h(v,0),P=H(f,d,v);function E(n){return H(g(X(n,i,N),o,c),d,v)}function I(n){var e=(t(n)-t(i)*t(N))/(r(i)*r(N));return e<-1?_.POLAR_EXCEPTION.MIDNIGHT_SUN:e>1?_.POLAR_EXCEPTION.POLAR_NIGHT:_.POLAR_EXCEPTION.NORMAL}var l,R,p,x,G,z={solarNoon:M(P),nadir:M(P-.5),polarException:_.POLAR_EXCEPTION.NORMAL};for(l=0,R=m.length;l<R;l+=1)G=P-((x=E((p=m[l])[0]*a))-P),z[p[1]]=M(G),z[p[2]]=M(x);return z.polarException=I(m[0][0]*a),z},_.getMoonPosition=function(n,t,r){var u=a*-r,o=a*t,i=O(n),c=x(i),f=l(i,u)-c.ra,d=I(f,o,c.dec);return d+=.017*a/e(d+10.26*a/(d+5.1*a)),{azimuth:E(f,o,c.dec),altitude:d,distance:c.dist}},_.getMoonFraction=function(n){var e=O(n),u=R(e),a=x(e),c=149598e3,f=i(t(u.dec)*t(a.dec)+r(u.dec)*r(a.dec)*r(u.ra-a.ra)),d=o(c*t(f),a.dist-c*r(f));return(1+r(d))/2},_}())&&(n.exports=t)}));n.SunCalc=r}));

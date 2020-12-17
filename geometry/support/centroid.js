/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","./coordsUtils"],(function(n,t){"use strict";function e(n,t){if(!n||!n.length)return null;const e=[],i=[],o=t?[1/0,-1/0,1/0,-1/0,1/0,-1/0]:[1/0,-1/0,1/0,-1/0];for(let e=0,r=n.length;e<r;e++){const r=l(n[e],t,o);r&&i.push(r)}if(i.sort(((n,e)=>{let l=n[2]-e[2];return 0===l&&t&&(l=n[4]-e[4]),l})),i.length){let n=6*i[0][2];e[0]=i[0][0]/n,e[1]=i[0][1]/n,t&&(n=6*i[0][4],e[2]=0!==n?i[0][3]/n:0),(e[0]<o[0]||e[0]>o[1]||e[1]<o[2]||e[1]>o[3]||t&&(e[2]<o[4]||e[2]>o[5]))&&(e.length=0)}if(!e.length){const l=n[0]&&n[0].length?r(n[0],t):null;if(!l)return null;e[0]=l[0],e[1]=l[1],t&&l.length>2&&(e[2]=l[2])}return e}function l(n,t,e){let l=0,r=0,i=0,o=0,u=0;for(let g=0;g<n.length;g++){const s=n[g],[h,c,f]=s,x=n[(g+1)%n.length],[m,d,a]=x;let y=h*d-m*c;o+=y,l+=(h+m)*y,r+=(c+d)*y,t&&s.length>2&&x.length>2&&(y=h*a-m*f,i+=(f+a)*y,u+=y),h<e[0]&&(e[0]=h),h>e[1]&&(e[1]=h),c<e[2]&&(e[2]=c),c>e[3]&&(e[3]=c),t&&(f<e[4]&&(e[4]=f),f>e[5]&&(e[5]=f))}if(o>0&&(o*=-1),u>0&&(u*=-1),!o)return null;const g=[l,r,.5*o];return t&&(g[3]=i,g[4]=.5*u),g}function r(n,e){const l=e?[0,0,0]:[0,0],r=e?[0,0,0]:[0,0];let i=0,o=0,u=0,g=0;for(let s=0,h=n.length;s<h-1;s++){const h=n[s],c=n[s+1];if(h&&c){l[0]=h[0],l[1]=h[1],r[0]=c[0],r[1]=c[1],e&&h.length>2&&c.length>2&&(l[2]=h[2],r[2]=c[2]);const n=t.getLength(l,r);if(n){i+=n;const l=t.getMidpoint(h,c);o+=n*l[0],u+=n*l[1],e&&l.length>2&&(g+=n*l[2])}}}return i>0?e?[o/i,u/i,g/i]:[o/i,u/i]:n.length?n[0]:null}n.extentCentroid=function(n){return n?n.hasZ?[n.xmax-n.xmin/2,n.ymax-n.ymin/2,n.zmax-n.zmin/2]:[n.xmax-n.xmin/2,n.ymax-n.ymin/2]:null},n.lineCentroid=r,n.polygonCentroid=function(n){return n?e(n.rings,n.hasZ):null},n.ringsCentroid=e,Object.defineProperty(n,"__esModule",{value:!0})}));

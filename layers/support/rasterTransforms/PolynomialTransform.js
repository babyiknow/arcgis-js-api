/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../core/has","../../../core/Logger","../../../core/accessorSupport/ensureType","../../../core/accessorSupport/decorators/property","../../../core/accessorSupport/decorators/subclass","../../../core/urlUtils","../../../core/uuid","../../../portal/support/resourceExtension","../../../core/JSONSupport","../../../geometry/Point","../../../geometry/Extent","../../../geometry"],(function(e,r,t,o,n,s,i,p,a,c,l,f,u,y){"use strict";function h(e,r,t){const{x:o,y:n}=r;if(t<2){return{x:e[0]+o*e[2]+n*e[4],y:e[1]+o*e[3]+n*e[5]}}if(2===t){const r=o*o,t=n*n,s=o*n;return{x:e[0]+o*e[2]+n*e[4]+r*e[6]+s*e[8]+t*e[10],y:e[1]+o*e[3]+n*e[5]+r*e[7]+s*e[9]+t*e[11]}}const s=o*o,i=n*n,p=o*n,a=s*o,c=s*n,l=o*i,f=n*i;return{x:e[0]+o*e[2]+n*e[4]+s*e[6]+p*e[8]+i*e[10]+a*e[12]+c*e[14]+l*e[16]+f*e[18],y:e[1]+o*e[3]+n*e[5]+s*e[7]+p*e[9]+i*e[11]+a*e[13]+c*e[15]+l*e[17]+f*e[19]}}function m(e,r,t){const{xmin:o,ymin:n,xmax:s,ymax:i,spatialReference:p}=r;let a=[];if(t<2)a.push({x:o,y:i}),a.push({x:s,y:i}),a.push({x:o,y:n}),a.push({x:s,y:n});else{let e=10;for(let r=0;r<e;r++)a.push({x:o,y:n+(i-n)*r/(e-1)}),a.push({x:s,y:n+(i-n)*r/(e-1)});e=8;for(let r=1;r<=e;r++)a.push({x:o+(s-o)*r/e,y:n}),a.push({x:o+(s-o)*r/e,y:i})}a=a.map((r=>h(e,r,t)));const c=a.map((e=>e.x)),l=a.map((e=>e.y));return new u({xmin:Math.min.apply(null,c),xmax:Math.max.apply(null,c),ymin:Math.min.apply(null,l),ymax:Math.max.apply(null,l),spatialReference:p})}let x=function(r){function t(){var e;return(e=r.apply(this,arguments)||this).polynomialOrder=1,e}e._inheritsLoose(t,r);var o=t.prototype;return o.forwardTransform=function(e){if("point"===e.type){const r=h(this.forwardCoefficients,e,this.polynomialOrder);return new f({x:r.x,y:r.y,spatialReference:e.spatialReference})}return m(this.forwardCoefficients,e,this.polynomialOrder)},o.inverseTransform=function(e){if("point"===e.type){const r=h(this.inverseCoefficients,e,this.polynomialOrder);return new f({x:r.x,y:r.y,spatialReference:e.spatialReference})}return m(this.inverseCoefficients,e,this.polynomialOrder)},e._createClass(t,[{key:"inverseCoefficients",get:function(){let e=this._get("inverseCoefficients");const r=this._get("forwardCoefficients");return!e&&r&&this.polynomialOrder<2&&(e=function(e){const[r,t,o,n,s,i]=e,p=o*i-s*n,a=s*n-o*i;return[(s*t-r*i)/p,(o*t-r*n)/a,i/p,n/a,-s/p,-o/a]}(r)),e},set:function(e){this._set("inverseCoefficients",e)}}]),t}(l.JSONSupport);return r.__decorate([s.property({json:{write:!0}})],x.prototype,"polynomialOrder",void 0),r.__decorate([s.property({json:{write:!0}})],x.prototype,"forwardCoefficients",void 0),r.__decorate([s.property({dependsOn:["forwardCoefficients"],json:{write:!0}})],x.prototype,"inverseCoefficients",null),x=r.__decorate([i.subclass("esri.layers.support.rasterTransforms.PolynomialTransform")],x),x}));

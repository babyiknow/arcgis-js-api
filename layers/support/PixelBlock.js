/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/has","../../core/lang","../../core/maybe","../../core/Logger","../../core/accessorSupport/decorators/property","../../core/accessorSupport/decorators/cast","../../core/accessorSupport/decorators/subclass","../../core/Error","../../core/urlUtils","../../core/uuid","../../portal/support/resourceExtension","../../core/JSONSupport"],(function(t,e,s,i,r,l,o,a,n,h,c,p,u,f){"use strict";var x;const d=l.getLogger("esri.layers.support.PixelBlock");let g=x=function(e){function s(t){var s;return(s=e.call(this,t)||this).width=null,s.height=null,s.pixelType="f32",s.validPixelCount=null,s.mask=null,s.maskIsAlpha=!1,s.pixels=null,s.statistics=null,s}t._inheritsLoose(s,e),s.createEmptyBand=function(t,e){return new(x.getPixelArrayConstructor(t))(e)},s.getPixelArrayConstructor=function(t){let e;switch(t){case"u1":case"u2":case"u4":case"u8":e=Uint8Array;break;case"u16":e=Uint16Array;break;case"u32":e=Uint32Array;break;case"s8":e=Int8Array;break;case"s16":e=Int16Array;break;case"s32":e=Int32Array;break;case"u32":e=Uint32Array;break;case"f32":e=Float32Array;break;case"f64":e=Float64Array;break;case"c64":case"c128":case"unknown":e=Float32Array}return e};var l=s.prototype;return l.castPixelType=function(t){if(!t)return"f32";let e=t.toLowerCase();return["u1","u2","u4"].indexOf(e)>-1?e="u8":-1===["unknown","u8","s8","u16","s16","u32","s32","f32","f64"].indexOf(e)&&(e="f32"),e},l.getPlaneCount=function(){return this.pixels&&this.pixels.length},l.addData=function(t){if(!t.pixels||t.pixels.length!==this.width*this.height)throw new h("pixelblock:invalid-or-missing-pixels","add data requires valid pixels array that has same length defined by pixel block width * height");this.pixels||(this.pixels=[]),this.statistics||(this.statistics=[]),this.pixels.push(t.pixels),this.statistics.push(t.statistics||{minValue:null,maxValue:null})},l.getAsRGBA=function(){const t=new ArrayBuffer(this.width*this.height*4);switch(this.pixelType){case"s8":case"s16":case"u16":case"s32":case"u32":case"f32":case"f64":this._fillFromNon8Bit(t);break;default:this._fillFrom8Bit(t)}return new Uint8ClampedArray(t)},l.getAsRGBAFloat=function(){const t=new Float32Array(this.width*this.height*4);return this._fillFrom32Bit(t),t},l.updateStatistics=function(){this.statistics=this.pixels.map((t=>this._calculateBandStatistics(t,this.mask)));const t=this.mask;let e=0;if(t)for(let s=0;s<t.length;s++)t[s]&&e++;else e=this.width*this.height;this.validPixelCount=e},l.clamp=function(t){if(!t||"f64"===t||"f32"===t)return;let e;switch(t){case"u8":e=[0,255];break;case"u16":e=[0,65535];break;case"u32":e=[0,4294967295];break;case"s8":e=[-128,127];break;case"s16":e=[-32768,32767];break;case"s32":e=[-2147483648,2147483647];break;default:e=[-34e38,34e38]}const[s,i]=e,r=this.pixels,l=this.width*this.height,o=r.length;let a,n,h;const c=[];for(let e=0;e<o;e++){h=x.createEmptyBand(t,l),a=r[e];for(let t=0;t<l;t++)n=a[t],h[t]=n>i?i:n<s?s:n;c.push(h)}this.pixels=c,this.pixelType=t},l.extractBands=function(t){if(r.isNone(t)||0===t.length||null==this.pixels||0===this.pixels.length)return this;const e=this.pixels.length,s=t.some((t=>t>=this.pixels.length)),i=e===t.length&&!t.some(((t,e)=>t!==e));return s||i?this:new x({pixelType:this.pixelType,width:this.width,height:this.height,mask:this.mask,validPixelCount:this.validPixelCount,maskIsAlpha:this.maskIsAlpha,pixels:t.map((t=>this.pixels[t])),statistics:this.statistics&&t.map((t=>this.statistics[t]))})},l.clone=function(){const t=new x({width:this.width,height:this.height,pixelType:this.pixelType,maskIsAlpha:this.maskIsAlpha,validPixelCount:this.validPixelCount});let e;this.mask&&(this.mask instanceof Uint8Array?t.mask=new Uint8Array(this.mask):t.mask=this.mask.slice(0));const s=x.getPixelArrayConstructor(this.pixelType);if(this.pixels&&this.pixels.length>0){t.pixels=[];const i=this.pixels[0].slice;for(e=0;e<this.pixels.length;e++)t.pixels[e]=i?this.pixels[e].slice(0,this.pixels[e].length):new s(this.pixels[e])}if(this.statistics)for(t.statistics=[],e=0;e<this.statistics.length;e++)t.statistics[e]=i.clone(this.statistics[e]);return t},l._fillFrom8Bit=function(t){const{mask:e,maskIsAlpha:s,pixels:i}=this;if(!t||!i||!i.length)return void d.error("getAsRGBA()","Unable to convert to RGBA. The input pixel block is empty.");let r,l,o,a;r=l=o=i[0],i.length>=3?(l=i[1],o=i[2]):2===i.length&&(l=i[1]);const n=new Uint32Array(t),h=this.width*this.height;if(r.length===h)if(e&&e.length===h)if(s)for(a=0;a<h;a++)e[a]&&(n[a]=e[a]<<24|o[a]<<16|l[a]<<8|r[a]);else for(a=0;a<h;a++)e[a]&&(n[a]=255<<24|o[a]<<16|l[a]<<8|r[a]);else for(a=0;a<h;a++)n[a]=255<<24|o[a]<<16|l[a]<<8|r[a];else d.error("getAsRGBA()","Unable to convert to RGBA. The pixelblock is invalid.")},l._fillFromNon8Bit=function(t){const{pixels:e,mask:s,statistics:i}=this;if(!t||!e||!e.length)return void d.error("getAsRGBA()","Unable to convert to RGBA. The input pixel block is empty.");const r=this.pixelType;let l=1,o=0,a=1;if(i&&i.length>0)o=i.map((t=>t.minValue)).reduce(((t,e)=>Math.min(t,e))),a=i.map((t=>t.maxValue-t.minValue)).reduce(((t,e)=>Math.max(t,e))),l=255/a;else{let t=255;"s8"===r?(o=-128,t=127):"u16"===r?t=65535:"s16"===r?(o=-32768,t=32767):"u32"===r?t=4294967295:"s32"===r?(o=-2147483648,t=2147483647):"f32"===r?(o=-34e38,t=34e38):"f64"===r&&(o=-Number.MAX_VALUE,t=Number.MAX_VALUE),l=255/(t-o)}const n=new Uint32Array(t),h=this.width*this.height;let c,p,u,f,x;if(c=p=u=e[0],c.length!==h)return d.error("getAsRGBA()","Unable to convert to RGBA. The pixelblock is invalid.");if(e.length>=2)if(p=e[1],e.length>=3&&(u=e[2]),s&&s.length===h)for(f=0;f<h;f++)s[f]&&(n[f]=255<<24|(u[f]-o)*l<<16|(p[f]-o)*l<<8|(c[f]-o)*l);else for(f=0;f<h;f++)n[f]=255<<24|(u[f]-o)*l<<16|(p[f]-o)*l<<8|(c[f]-o)*l;else if(s&&s.length===h)for(f=0;f<h;f++)x=(c[f]-o)*l,s[f]&&(n[f]=255<<24|x<<16|x<<8|x);else for(f=0;f<h;f++)x=(c[f]-o)*l,n[f]=255<<24|x<<16|x<<8|x},l._fillFrom32Bit=function(t){const{pixels:e,mask:s}=this;if(!t||!e||!e.length)return d.error("getAsRGBAFloat()","Unable to convert to RGBA. The input pixel block is empty.");let i,r,l,o;i=r=l=e[0],e.length>=3?(r=e[1],l=e[2]):2===e.length&&(r=e[1]);const a=this.width*this.height;if(i.length!==a)return d.error("getAsRGBAFloat()","Unable to convert to RGBA. The pixelblock is invalid.");let n=0;if(s&&s.length===a)for(o=0;o<a;o++)t[n++]=i[o],t[n++]=r[o],t[n++]=l[o],t[n++]=1&s[o];else for(o=0;o<a;o++)t[n++]=i[o],t[n++]=r[o],t[n++]=l[o],t[n++]=1},l._calculateBandStatistics=function(t,e){let s=1/0,i=-1/0;const r=t.length;let l,o=0;if(e)for(l=0;l<r;l++)e[l]&&(o=t[l],s=o<s?o:s,i=o>i?o:i);else for(l=0;l<r;l++)o=t[l],s=o<s?o:s,i=o>i?o:i;return{minValue:s,maxValue:i}},s}(f.JSONSupport);return e.__decorate([o.property({json:{write:!0}})],g.prototype,"width",void 0),e.__decorate([o.property({json:{write:!0}})],g.prototype,"height",void 0),e.__decorate([o.property({json:{write:!0}})],g.prototype,"pixelType",void 0),e.__decorate([a.cast("pixelType")],g.prototype,"castPixelType",null),e.__decorate([o.property({json:{write:!0}})],g.prototype,"validPixelCount",void 0),e.__decorate([o.property({json:{write:!0}})],g.prototype,"mask",void 0),e.__decorate([o.property({json:{write:!0}})],g.prototype,"maskIsAlpha",void 0),e.__decorate([o.property({json:{write:!0}})],g.prototype,"pixels",void 0),e.__decorate([o.property({json:{write:!0}})],g.prototype,"statistics",void 0),g=x=e.__decorate([n.subclass("esri.layers.support.PixelBlock")],g),g}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../../../../core/Logger","../../../../core/mathUtils","../../../webgl/Texture"],(function(e,t,r,n){"use strict";const o=t.getLogger("esri.views.3d.webgl-engine.lib.DDSUtil");function a(e){return e.charCodeAt(0)+(e.charCodeAt(1)<<8)+(e.charCodeAt(2)<<16)+(e.charCodeAt(3)<<24)}const i=a("DXT1"),s=a("DXT3"),u=a("DXT5");function l(e,t){const n=new Int32Array(e,0,31);if(542327876!==n[0])return o.error("Invalid magic number in DDS header"),null;if(!(4&n[20]))return o.error("Unsupported format, must contain a FourCC code"),null;const a=n[21];let l,c;switch(a){case i:l=8,c=33776;break;case s:l=16,c=33778;break;case u:l=16,c=33779;break;default:return o.error("Unsupported FourCC code:",(d=a,String.fromCharCode(255&d,d>>8&255,d>>16&255,d>>24&255))),null}var d;let h=1,m=n[4],g=n[3];0==(3&m)&&0==(3&g)||(o.warn("Rounding up compressed texture size to nearest multiple of 4."),m=m+3&-4,g=g+3&-4);const p=m,w=g;let f,D;131072&n[2]&&!1!==t&&(h=Math.max(1,n[7])),1===h||r.isPowerOfTwo(m)&&r.isPowerOfTwo(g)||(o.warn("Ignoring mipmaps of non power of two sized compressed texture."),h=1);let x=n[1]+4;const C=[];for(let t=0;t<h;++t)D=(m+3>>2)*(g+3>>2)*l,f=new Uint8Array(e,x,D),C.push(f),x+=D,m=Math.max(1,m>>1),g=Math.max(1,g>>1);return{textureData:{type:"compressed",levels:C},internalFormat:c,width:p,height:w}}e.createDDSTexture=function(e,t,r,o){const{textureData:a,internalFormat:i,width:s,height:u}=l(r,o);t.samplingMode=a.levels.length>1?9987:9729,t.hasMipmap=a.levels.length>1,t.internalFormat=i,t.width=s,t.height=u;const c=new n(e,t,a);return e.bindTexture(c,0),c},e.createDDSTextureData=l,Object.defineProperty(e,"__esModule",{value:!0})}));

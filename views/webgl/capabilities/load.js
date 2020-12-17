/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","./isWebGL2Context","./DisjointTimerQuery","./DrawBuffers","./Instancing","./LoseContext","./VertexArrayObjects"],(function(e,t,r,n,o,_,u){"use strict";function l(e,r,n,o,_){if(o&&t(e))return!0;if(r[n])return!1;for(const t of _)if(e.getExtension(t))return!0;return!1}e.loadCapabilities=function(e,i){const a=i&&i.disabledExtensions||{},f=i&&i.debugWebGLExtensions||{};let E,x,s,T,F,R,c,d,X,A,g=null,S=null,B=null,G=null;return{get drawBuffers(){return A||(A=n.load(e,a)),A},get instancing(){return E||(E=o.load(e)),E},get vao(){return x||(x=u.load(e,a)),x},get compressedTextureS3TC(){return s||(s=function(e,t){if(t.compressedTextureS3TC)return null;const r=e.getExtension("WEBGL_compressed_texture_s3tc");if(!r)return null;return{COMPRESSED_RGB_S3TC_DXT1:r.COMPRESSED_RGB_S3TC_DXT1_EXT,COMPRESSED_RGBA_S3TC_DXT1:r.COMPRESSED_RGBA_S3TC_DXT1_EXT,COMPRESSED_RGBA_S3TC_DXT3:r.COMPRESSED_RGBA_S3TC_DXT3_EXT,COMPRESSED_RGBA_S3TC_DXT5:r.COMPRESSED_RGBA_S3TC_DXT5_EXT}}(e,a)),s},get textureFilterAnisotropic(){return T||(T=function(e,t){if(t.textureFilterAnisotropic)return null;const r=e.getExtension("EXT_texture_filter_anisotropic")||e.getExtension("MOZ_EXT_texture_filter_anisotropic")||e.getExtension("WEBKIT_EXT_texture_filter_anisotropic");if(!r)return null;return{MAX_TEXTURE_MAX_ANISOTROPY:r.MAX_TEXTURE_MAX_ANISOTROPY_EXT,TEXTURE_MAX_ANISOTROPY:r.TEXTURE_MAX_ANISOTROPY_EXT}}(e,a)),T},get disjointTimerQuery(){return F||(F=r.createDisjointTimerQuery(e,a)),F},get textureFloat(){return R||(R=function(e,r){if(t(e))return{textureFloat:!0,textureFloatLinear:!r.textureFloatLinear&&!!e.getExtension("OES_texture_float_linear"),textureHalfFloat:!0,textureHalfFloatLinear:!r.textureHalfFloatLinear&&!!e.getExtension("OES_texture_half_float_linear"),HALF_FLOAT:e.HALF_FLOAT};if(e instanceof WebGLRenderingContext){const t=!r.textureHalfFloat&&e.getExtension("OES_texture_half_float");return{textureFloat:!r.textureFloat&&!!e.getExtension("OES_texture_float"),textureFloatLinear:!r.textureFloatLinear&&!!e.getExtension("OES_texture_float_linear"),textureHalfFloat:!!t,textureHalfFloatLinear:!r.textureHalfFloatLinear&&!!e.getExtension("OES_texture_half_float_linear"),HALF_FLOAT:t?t.HALF_FLOAT_OES:void 0}}return null}(e,a)),R},get colorBufferFloat(){return c||(c=function(e,r){if(t(e)){const t=!r.colorBufferFloat&&e.getExtension("EXT_color_buffer_half_float"),n=!r.colorBufferFloat&&e.getExtension("EXT_color_buffer_float");return t||n?{textureFloat:!!n,textureHalfFloat:!!t,R16F:e.R16F,RG16F:e.RG16F,RGBA16F:e.RGBA16F,R32F:e.R32F,RG32F:e.RG32F,RGBA32F:e.RGBA32F,R11F_G11F_B10F:e.R11F_G11F_B10F,RGB16F:e.RGB16F}:null}if(e instanceof WebGLRenderingContext){const t=!r.colorBufferFloat&&e.getExtension("EXT_color_buffer_half_float"),n=!r.colorBufferFloat&&e.getExtension("WEBGL_color_buffer_float");return t||n?{textureFloat:!!n,textureHalfFloat:!!t,RGBA16F:t?t.RGBA16F_EXT:void 0,RGB16F:t?t.RGB16F_EXT:void 0,RGBA32F:n?n.RGBA32F_EXT:void 0}:null}return null}(e,a)),c},get blendMinMax(){return d||(d=function(e,r){if(t(e))return{MIN:e.MIN,MAX:e.MAX};if(r.blendMinMax)return null;{const t=e.getExtension("EXT_blend_minmax");return t?{MIN:t.MIN_EXT,MAX:t.MAX_EXT}:null}}(e,a)),d},get depthTexture(){return null===g&&(g=l(e,a,"depthTexture",!0,["WEBGL_depth_texture","MOZ_WEBGL_depth_texture","WEBKIT_WEBGL_depth_texture"])),g},get standardDerivatives(){return null===S&&(S=l(e,a,"standardDerivatives",!0,["OES_standard_derivatives"])),S},get shaderTextureLOD(){return null===B&&(B=l(e,a,"shaderTextureLOD",!0,["EXT_shader_texture_lod"])),B},get fragDepth(){return null===G&&(G=l(e,a,"fragDepth",!0,["EXT_frag_depth"])),G},get loseContext(){return X||(X=_.load(e,f)),X}}},Object.defineProperty(e,"__esModule",{value:!0})}));

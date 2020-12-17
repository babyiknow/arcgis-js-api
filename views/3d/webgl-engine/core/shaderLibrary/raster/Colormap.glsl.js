/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../../shaderModules/interfaces"],(function(e,o){"use strict";e.Colormap=function(e){e.fragment.uniforms.add("u_colormap","sampler2D"),e.fragment.uniforms.add("u_colormapOffset","float"),e.fragment.uniforms.add("u_colormapMaxIndex","float"),e.fragment.code.add(o.glsl`
    vec4 colormap(vec4 currentPixel, bool isFloat) {
      // colormap is only applicable to integer data but could be already normalized to 0-1 float
      float clrIndex = isFloat ? currentPixel.r - u_colormapOffset : currentPixel.r * 255.0 - u_colormapOffset;
      vec4 result;
      // handle no data and out of range pixels
      if (currentPixel.a == 0.0 || clrIndex > u_colormapMaxIndex) {
        result = vec4(0.0, 0.0, 0.0, 0.0);
      } else {
        // colormap lookup
        vec2 clrPosition = vec2((clrIndex + 0.5) / (u_colormapMaxIndex + 1.0), 0.0);
        vec4 color = texture2D(u_colormap, clrPosition);
        result = vec4(color.rgb, 1.0) * color.a * u_opacity;
      }
      return result;
    }
  `)},Object.defineProperty(e,"__esModule",{value:!0})}));

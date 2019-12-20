// COPYRIGHT © 2019 Esri
//
// All rights reserved under the copyright laws of the United States
// and applicable international laws, treaties, and conventions.
//
// This material is licensed for use under the Esri Master License
// Agreement (MLA), and is bound by the terms of that agreement.
// You may redistribute and use this code without modification,
// provided you adhere to the terms of the MLA and include this
// copyright notice.
//
// See use restrictions at http://www.esri.com/legal/pdfs/mla_e204_e300/english
//
// For additional information, contact:
// Environmental Systems Research Institute, Inc.
// Attn: Contracts and Legal Services Department
// 380 New York Street
// Redlands, California, USA 92373
// USA
//
// email: contracts@esri.com
//
// See http://js.arcgis.com/4.14/esri/copyright.txt for details.

define(["require","exports","../../../../../../core/tsSupport/makeTemplateObjectHelper","../../shaderModules/interfaces"],function(e,v,o,n){function r(e,v){(v.vvSize||v.vvColor)&&e.attributes.add("instanceFeatureAttribute","vec4"),v.vvSize?(e.vertex.uniforms.add("vvSizeMinSize","vec3"),e.vertex.uniforms.add("vvSizeMaxSize","vec3"),e.vertex.uniforms.add("vvSizeOffset","vec3"),e.vertex.uniforms.add("vvSizeFactor","vec3"),e.vertex.uniforms.add("vvSymbolRotationMatrix","mat3"),e.vertex.uniforms.add("vvSymbolAnchor","vec3"),e.vertex.code.add(n.glsl(t||(t=o(["\n      vec4 vvTransformPosition(vec3 position, vec4 _featureAttribute) {\n        vec3 vvScale = clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize);\n        return vec4(vvSymbolRotationMatrix * (vvScale * (position + vvSymbolAnchor)), 1.0);\n      }\n    "],["\n      vec4 vvTransformPosition(vec3 position, vec4 _featureAttribute) {\n        vec3 vvScale = clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize);\n        return vec4(vvSymbolRotationMatrix * (vvScale * (position + vvSymbolAnchor)), 1.0);\n      }\n    "])))),e.vertex.code.add(n.glsl(i||(i=o(["\n      const float eps = 1.192092896e-07;\n      vec4 vvTransformNormal(vec3 _normal, vec4 _featureAttribute) {\n        vec3 vvScale = clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize + eps, vvSizeMaxSize);\n        return vec4(vvSymbolRotationMatrix * _normal / vvScale, 1.0);\n      }\n\n      vec4 vvLocalNormal(vec3 _normal) {\n        return vvTransformNormal(_normal, instanceFeatureAttribute);\n      }\n\n      vec4 localPosition() {\n        return vvTransformPosition(position, instanceFeatureAttribute);\n      }\n    "],["\n      const float eps = 1.192092896e-07;\n      vec4 vvTransformNormal(vec3 _normal, vec4 _featureAttribute) {\n        vec3 vvScale = clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize + eps, vvSizeMaxSize);\n        return vec4(vvSymbolRotationMatrix * _normal / vvScale, 1.0);\n      }\n\n      vec4 vvLocalNormal(vec3 _normal) {\n        return vvTransformNormal(_normal, instanceFeatureAttribute);\n      }\n\n      vec4 localPosition() {\n        return vvTransformPosition(position, instanceFeatureAttribute);\n      }\n    "]))))):e.vertex.code.add(n.glsl(a||(a=o(["\n      vec4 localPosition() { return vec4(position, 1.0); }\n\n      vec4 vvLocalNormal(vec3 _normal) { return vec4(_normal, 1.0); }\n    "],["\n      vec4 localPosition() { return vec4(position, 1.0); }\n\n      vec4 vvLocalNormal(vec3 _normal) { return vec4(_normal, 1.0); }\n    "])))),v.vvColor?(e.vertex.defines.addInt("VV_COLOR_N",8),e.vertex.code.add(n.glsl(l||(l=o(["\n      uniform float vvColorValues[VV_COLOR_N];\n      uniform vec4 vvColorColors[VV_COLOR_N];\n\n      vec4 vvGetColor(vec4 featureAttribute, float values[VV_COLOR_N], vec4 colors[VV_COLOR_N]) {\n        float value = featureAttribute.y;\n        if (value <= values[0]) {\n          return colors[0];\n        }\n\n        for (int i = 1; i < VV_COLOR_N; ++i) {\n          if (values[i] >= value) {\n            float f = (value - values[i-1]) / (values[i] - values[i-1]);\n            return mix(colors[i-1], colors[i], f);\n          }\n        }\n        return colors[VV_COLOR_N - 1];\n      }\n\n      vec4 vvColor() {\n        return vvGetColor(instanceFeatureAttribute, vvColorValues, vvColorColors);\n      }\n    "],["\n      uniform float vvColorValues[VV_COLOR_N];\n      uniform vec4 vvColorColors[VV_COLOR_N];\n\n      vec4 vvGetColor(vec4 featureAttribute, float values[VV_COLOR_N], vec4 colors[VV_COLOR_N]) {\n        float value = featureAttribute.y;\n        if (value <= values[0]) {\n          return colors[0];\n        }\n\n        for (int i = 1; i < VV_COLOR_N; ++i) {\n          if (values[i] >= value) {\n            float f = (value - values[i-1]) / (values[i] - values[i-1]);\n            return mix(colors[i-1], colors[i], f);\n          }\n        }\n        return colors[VV_COLOR_N - 1];\n      }\n\n      vec4 vvColor() {\n        return vvGetColor(instanceFeatureAttribute, vvColorValues, vvColorColors);\n      }\n    "]))))):e.vertex.code.add(n.glsl(c||(c=o(["\n      vec4 vvColor() { return vec4(1.0); }\n    "],["\n      vec4 vvColor() { return vec4(1.0); }\n    "]))))}Object.defineProperty(v,"__esModule",{value:!0}),v.VisualVariables=r,function(e){function v(e,v){v.vvSizeEnabled&&(e.setUniform3fv("vvSizeMinSize",v.vvSizeMinSize),e.setUniform3fv("vvSizeMaxSize",v.vvSizeMaxSize),e.setUniform3fv("vvSizeOffset",v.vvSizeOffset),e.setUniform3fv("vvSizeFactor",v.vvSizeFactor)),v.vvColorEnabled&&(e.setUniform1fv("vvColorValues",v.vvColorValues),e.setUniform4fv("vvColorColors",v.vvColorColors))}function o(e,o){v(e,o),o.vvOpacityEnabled&&(e.setUniform1fv("vvOpacityValues",o.vvOpacityValues),e.setUniform1fv("vvOpacityOpacities",o.vvOpacityOpacities))}function n(e,o){v(e,o),o.vvSizeEnabled&&(e.setUniform3fv("vvSymbolAnchor",o.vvSymbolAnchor),e.setUniformMatrix3fv("vvSymbolRotationMatrix",o.vvSymbolRotationMatrix))}e.bindUniformsWithOpacity=o,e.bindUniformsForSymbols=n}(r=v.VisualVariables||(v.VisualVariables={}));var t,i,a,l,c});
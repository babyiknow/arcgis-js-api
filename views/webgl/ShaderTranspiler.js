/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","./reservedWordsGLSL3","../../chunks/builtins"],(function(t,e,a){"use strict";var r=999,n=9999,o=["block-comment","line-comment","preprocessor","operator","integer","float","ident","builtin","keyword","whitespace","eof","integer"];function i(){var t,e,i,s=0,c=0,d=r,f=[],p=[],u=1,l=0,h=0,y=!1,g=!1,w="";return function(e){return p=[],null!==e?function(e){var a;s=0,i=(w+=e).length;for(;t=w[s],s<i;){switch(a=s,d){case 0:s=x();break;case 1:s=_();break;case 2:s=v();break;case 3:s=j();break;case 4:s=L();break;case 11:s=O();break;case 5:s=D();break;case n:s=G();break;case 9:s=m();break;case r:s=b()}if(a!==s)switch(w[a]){case"\n":l=0,++u;break;default:++l}}return c+=s,w=w.slice(s),p}(e.replace?e.replace(/\r\n/g,"\n"):e):function(t){f.length&&k(f.join(""));return d=10,k("(eof)"),p}()};function k(t){t.length&&p.push({type:o[d],data:t,position:h,line:u,column:l})}function b(){return f=f.length?[]:f,"/"===e&&"*"===t?(h=c+s-1,d=0,e=t,s+1):"/"===e&&"/"===t?(h=c+s-1,d=1,e=t,s+1):"#"===t?(d=2,h=c+s,s):/\s/.test(t)?(d=9,h=c+s,s):(y=/\d/.test(t),g=/[^\w_]/.test(t),h=c+s,d=y?4:g?3:n,s)}function m(){return/[^\s]/g.test(t)?(k(f.join("")),d=r,s):(f.push(t),e=t,s+1)}function v(){return"\r"!==t&&"\n"!==t||"\\"===e?(f.push(t),e=t,s+1):(k(f.join("")),d=r,s)}function _(){return v()}function x(){return"/"===t&&"*"===e?(f.push(t),k(f.join("")),d=r,s+1):(f.push(t),e=t,s+1)}function j(){if("."===e&&/\d/.test(t))return d=5,s;if("/"===e&&"*"===t)return d=0,s;if("/"===e&&"/"===t)return d=1,s;if("."===t&&f.length){for(;E(f););return d=5,s}if(";"===t||")"===t||"("===t){if(f.length)for(;E(f););return k(t),d=r,s+1}var a=2===f.length&&"="!==t;if(/[\w_\d\s]/.test(t)||a){for(;E(f););return d=r,s}return f.push(t),e=t,s+1}function E(t){for(var e,r,n=0;;){if(e=a.operators.indexOf(t.slice(0,t.length+n).join("")),r=a.operators[e],-1===e){if(n--+t.length>0)continue;r=t.slice(0,1).join("")}return k(r),h+=r.length,(f=f.slice(r.length)).length}}function O(){return/[^a-fA-F0-9]/.test(t)?(k(f.join("")),d=r,s):(f.push(t),e=t,s+1)}function L(){return"."===t||/[eE]/.test(t)?(f.push(t),d=5,e=t,s+1):"x"===t&&1===f.length&&"0"===f[0]?(d=11,f.push(t),e=t,s+1):/[^\d]/.test(t)?(k(f.join("")),d=r,s):(f.push(t),e=t,s+1)}function D(){return"f"===t&&(f.push(t),e=t,s+=1),/[eE]/.test(t)||"-"===t&&/[eE]/.test(e)?(f.push(t),e=t,s+1):/[^\d]/.test(t)?(k(f.join("")),d=r,s):(f.push(t),e=t,s+1)}function G(){if(/[^\d\w_]/.test(t)){var n=f.join("");return d=a.literals.indexOf(n)>-1?8:a.builtins.indexOf(n)>-1?7:6,k(f.join("")),d=r,s}return f.push(t),e=t,s+1}}function s(t){return e=t,a=i(),[].concat(a(e)).concat(a(null));var e,a}const c=["GL_OES_standard_derivatives","GL_EXT_frag_depth","GL_EXT_draw_buffers","GL_EXT_shader_texture_lod"];function d(t,e){for(let a=e-1;a>=0;a--){const e=t[a];if("whitespace"!==e.type&&"block-comment"!==e.type){if("keyword"!==e.type)break;if("attribute"===e.data||"in"===e.data)return!0}}return!1}function f(t,e,a,r){r=r||a;for(const n of t)if("ident"===n.type&&n.data===a){r in e?e[r]++:e[r]=0;return f(t,e,r+"_"+e[r],r)}return a}function p(t,e,a="afterVersion"){function r(t,e){for(let a=e;a<t.length;a++){const e=t[a];if("operator"===e.type&&";"===e.data)return a}return null}const n={data:"\n",type:"whitespace"},o=e=>e<t.length&&/[^\r\n]$/.test(t[e].data);let i=function(t){let e=-1,n=0,o=-1;for(let i=0;i<t.length;i++){const s=t[i];if("preprocessor"===s.type&&(s.data.match(/\#(if|ifdef|ifndef)\s+.+/)?++n:s.data.match(/\#endif\s*.*/)&&--n),"afterVersion"!==a&&"afterPrecision"!==a||"preprocessor"===s.type&&/^#version/.test(s.data)&&(o=Math.max(o,i)),"afterPrecision"===a&&"keyword"===s.type&&"precision"===s.data){const e=r(t,i);if(null===e)throw new Error("precision statement not followed by any semicolons!");o=Math.max(o,e)}e<o&&0===n&&(e=i)}return e+1}(t);o(i-1)&&t.splice(i++,0,n);for(const a of e)t.splice(i++,0,a);o(i-1)&&o(i)&&t.splice(i,0,n)}function u(t,e,a,r="lowp"){p(t,[{type:"keyword",data:"out"},{type:"whitespace",data:" "},{type:"keyword",data:r},{type:"whitespace",data:" "},{type:"keyword",data:a},{type:"whitespace",data:" "},{type:"ident",data:e},{type:"operator",data:";"}],"afterPrecision")}function l(t,e,a,r,n="lowp"){p(t,[{type:"keyword",data:"layout"},{type:"operator",data:"("},{type:"keyword",data:"location"},{type:"whitespace",data:" "},{type:"operator",data:"="},{type:"whitespace",data:" "},{type:"integer",data:r.toString()},{type:"operator",data:")"},{type:"whitespace",data:" "},{type:"keyword",data:"out"},{type:"whitespace",data:" "},{type:"keyword",data:n},{type:"whitespace",data:" "},{type:"keyword",data:a},{type:"whitespace",data:" "},{type:"ident",data:e},{type:"operator",data:";"}],"afterPrecision")}function h(t,e){let a,r,n=-1;for(let o=e;o<t.length;o++){const e=t[o];if("operator"===e.type&&("["===e.data&&(a=o),"]"===e.data)){r=o;break}"integer"===e.type&&(n=parseInt(e.data,10))}return a&&r&&t.splice(a,r-a+1),n}t.transpileShader=function(t,a){const r=s(t);if("300 es"===function(t,e="100",a="300 es"){const r=/^\s*\#version\s+([0-9]+(\s+[a-zA-Z]+)?)\s*/;for(const n of t)if("preprocessor"===n.type){const t=r.exec(n.data);if(t){const r=t[1].replace(/\s\s+/g," ");if(r===a)return r;if(r===e)return n.data="#version "+a,e;throw new Error("unknown glsl version: "+r)}}return t.splice(0,0,{type:"preprocessor",data:"#version "+a},{type:"whitespace",data:"\n"}),null}(r,"100","300 es"))throw new Error("shader is already glsl 300 es");let n=null,o=null;const i={},p={};for(let t=0;t<r.length;++t){const s=r[t];switch(s.type){case"keyword":"vertex"===a&&"attribute"===s.data?s.data="in":"varying"===s.data&&(s.data="vertex"===a?"out":"in");break;case"builtin":if(/^texture(2D|Cube)(Proj)?(Lod|Grad)?(EXT)?$/.test(s.data.trim())&&(s.data=s.data.replace(/(2D|Cube|EXT)/g,"")),"fragment"===a&&"gl_FragColor"===s.data&&(n||(n=f(r,i,"fragColor"),u(r,n,"vec4")),s.data=n),"fragment"===a&&"gl_FragData"===s.data){const e=h(r,t+1),a=f(r,i,"fragData");l(r,a,"vec4",e,"mediump"),s.data=a}else"fragment"===a&&"gl_FragDepthEXT"===s.data&&(o||(o=f(r,i,"gl_FragDepth")),s.data=o);break;case"ident":if(e.indexOf(s.data)>=0){if("vertex"===a&&d(r,t))throw new Error("attribute in vertex shader uses a name that is a reserved word in glsl 300 es");s.data in p||(p[s.data]=f(r,i,s.data)),s.data=p[s.data]}}}for(let t=r.length-1;t>=0;--t){const e=r[t];if("preprocessor"===e.type){const a=e.data.match(/\#extension\s+(.*)\:/);if(a&&a[1]&&c.indexOf(a[1].trim())>=0){const e=r[t+1];r.splice(t,e&&"whitespace"===e.type?2:1)}const n=e.data.match(/\#ifdef\s+(.*)/);n&&n[1]&&c.indexOf(n[1].trim())>=0&&(e.data="#if 1");const o=e.data.match(/\#ifndef\s+(.*)/);o&&o[1]&&c.indexOf(o[1].trim())>=0&&(e.data="#if 0")}}return function(t){return t.map((t=>"eof"!==t.type?t.data:"")).join("")}(r)},Object.defineProperty(t,"__esModule",{value:!0})}));

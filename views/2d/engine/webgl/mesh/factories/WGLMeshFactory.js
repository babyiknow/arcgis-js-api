/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../../../../../../chunks/_rollupPluginBabelHelpers","../../../../../../core/has","../../../../../../core/maybe","../../../../../../core/promiseUtils","../../definitions","../../enums","../MeshData","../VertexVector","../templates/WGLLabelTemplate","../templates/WGLMarkerTemplate","../templates/WGLTemplateStore"],(function(e,t,r,i,s,o,n,a,l,p,y,c){"use strict";let m=function(){function e(e,t,r){this._isDD=!1,this._geometryType=e,this._idField=t,this._templateStore=r}var r=e.prototype;return r.update=function(e,t){this._isDD="simple"===e.mesh.matcher.type&&e.mesh.matcher.isDotDensity,i.isSome(e.mesh.labels)&&this._setLabelTemplates(e.mesh.labels,t)},r._setLabelTemplates=function(e,t){this._labelTemplates=e.map((e=>p.fromLabelClass(e,t)))},r.createMeshData=function(e){const t=new Array(5),r=this._labelTemplates&&this._labelTemplates.length>0,i="esriGeometryPolyline"===this._geometryType?o.HEURISTIC_GLYPHS_PER_LINE:o.HEURISTIC_GLYPHS_PER_FEATURE;return t[n.WGLGeometryType.MARKER]=new l.VertexVectors(n.WGLGeometryType.MARKER,4*e),t[n.WGLGeometryType.FILL]=new l.VertexVectors(n.WGLGeometryType.FILL,e,this._isDD),t[n.WGLGeometryType.LINE]=new l.VertexVectors(n.WGLGeometryType.LINE,e),t[n.WGLGeometryType.TEXT]=new l.VertexVectors(n.WGLGeometryType.TEXT,4*e),t[n.WGLGeometryType.LABEL]=new l.VertexVectors(n.WGLGeometryType.LABEL,r?4*i:0),new a.MeshData(t,{features:e,records:e,metrics:0})},r.analyze=async function(e,t,r,i,o){if(s.isAborted(o))return;let n;"dictionary"===t.type&&(n=await t.analyze(this._idField,e.copy(),r,i,o));let a=0;for(;e.next();){let s;if(s=n?n[a++]:t.match(this._idField,e,this._geometryType,r,i),e.setGroupId(s),c.isDynamicId(s)){const t=this._templateStore.getDynamicTemplateGroup(s);for(const s of t)s&&s.analyze&&s.analyze(this._templateStore,e,r,i)}}return this._templateStore.finalize(o)},r.analyzeGraphics=async function(e,t,r,i,o){if(s.isAborted(o))return;const n=e.getCursor();for(t&&await t.analyze(this._idField,n.copy(),r,i,o);n.next();){let e=n.getGroupId();if(null!=e&&-1!==e||(e=t.match(this._idField,n,n.geometryType,r,i),n.setGroupId(e)),c.isDynamicId(e)){const t=this._templateStore.getDynamicTemplateGroup(e);for(const e of t)e&&e.analyze&&e.analyze(this._templateStore,n,r,i)}n.setGroupId(e)}return this._templateStore.finalize(o)},r.writeGraphic=function(e,t){const r=t.getGroupId(),i=t.getDisplayId(),s=this._templateStore.getTemplateGroup(r),o=t.geometryType;if(null!=i){if(c.isDynamicId(r))for(const e of s)e.bindFeature(t,null,null);if(s){e.writeDisplayObject(i,t.readGraphic().insertAfter);for(const r of s){if(!r)continue;const s=e.get(r.geometryType);r.writeMesh(e,s,t,o,i)}}}},r.writeCursor=function(e,t,r,s,o,n){const a=t.getGroupId(),l=t.getDisplayId(),p=this._templateStore.getTemplateGroup(a);if(null==l)return;if(!p)return;if(e.writeDisplayObject(l,0),c.isDynamicId(a))for(const e of p)e.bindFeature(t,r,s);for(const r of p){const i=e.get(r.geometryType);!r.needsPixelBuffer&&t.hasFilter()||r.writeMesh(e,i,t,this._geometryType,l)}const y=e.hasDisplayRecords();if(i.isSome(n)&&y){const r=n&&this._findLabelRef(p);this._writeLabels(e,t,l,n,r,o)}e.endDisplayObject()},r._findLabelRef=function(e){for(const t of e)if(t instanceof y)return t;return null},r._writeLabels=function(e,t,r,s,o,n){for(const a of s)if(i.isSome(a)&&a){const{glyphs:i,rtl:s,index:l}=a,p=this._labelTemplates[l],y=e.get(p.geometryType);p.bindReferenceTemplate(o),p.bindTextInfo(i,s),p.writeMesh(e,y,t,this._geometryType,r,n)}},t._createClass(e,[{key:"templates",get:function(){return this._templateStore}}]),e}();e.WGLMeshFactory=m,Object.defineProperty(e,"__esModule",{value:!0})}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/has","../../core/lang","../../core/Logger","../../core/accessorSupport/ensureType","../../core/accessorSupport/decorators/property","../../core/Warning","../../core/accessorSupport/decorators/subclass","../../core/accessorSupport/decorators/writer","../../core/accessorSupport/decorators/persistable","../../core/JSONSupport","../../geometry/Polygon","../../geometry","../../geometry/projection"],(function(e,r,t,o,s,c,a,p,i,n,l,u,y,f,d){"use strict";var g;let m=g=function(r){function t(e){var t;return(t=r.call(this,e)||this).geometry=null,t.type="clip",t}e._inheritsLoose(t,r);var s=t.prototype;return s.writeGeometry=function(e,r,t,o){if(o.layer&&o.layer.spatialReference&&!o.layer.spatialReference.equals(this.geometry.spatialReference)){if(!d.canProjectWithoutEngine(e.spatialReference,o.layer.spatialReference))return void(o&&o.messages&&o.messages.push(new p("scenemodification:unsupported","Scene modifications with incompatible spatial references are not supported",{modification:this,spatialReference:o.layer.spatialReference,context:o})));const s=new y;d.projectPolygon(e,s,o.layer.spatialReference),r[t]=s.toJSON(o)}else r[t]=e.toJSON(o);delete r[t].spatialReference},s.clone=function(){return new g({geometry:o.clone(this.geometry),type:this.type})},t}(u.JSONSupport);return r.__decorate([a.property({type:y}),l.persistable()],m.prototype,"geometry",void 0),r.__decorate([n.writer(["web-scene","portal-item"],"geometry")],m.prototype,"writeGeometry",null),r.__decorate([a.property({type:["clip","mask","replace"],nonNullable:!0}),l.persistable()],m.prototype,"type",void 0),m=g=r.__decorate([i.subclass("esri.layers.support.SceneModification")],m),m}));

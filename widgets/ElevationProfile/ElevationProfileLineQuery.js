/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/has","../../core/Logger","../../core/accessorSupport/ensureType","../../core/handleUtils","../../core/accessorSupport/decorators/property","../../core/accessorSupport/decorators/subclass","../../core/urlUtils","../../core/uuid","../../portal/support/resourceExtension","../../Color","../../core/watchUtils","./ElevationProfileLine","./support/elevationQuerySourceUtils"],(function(e,r,o,t,n,i,s,u,l,c,a,p,h,y,d){"use strict";let f=function(r){function o(e){var o;return(o=r.call(this,e)||this).type="query",o.color=new p([219,51,74]),o.source=null,o.numSamplesForPreview=50,o.numSamplesPerChunk=500,o}e._inheritsLoose(o,r);var t=o.prototype;return t.queryElevation=function(e,r){if(!this.source)throw new Error("No source configured for the elevation profile line");return this.source.queryElevation(e,r)},t.attach=function(e){return i.handlesGroup([r.prototype.attach.call(this,e),h.init(this,"source",this._onChange)])},e._createClass(o,[{key:"minDemResolution",get:function(){return d.getQuerySourceMinDemResolution(this.source)}}]),o}(y.ElevationProfileLine);return r.__decorate([s.property({type:p,nonNullable:!0})],f.prototype,"color",void 0),r.__decorate([s.property()],f.prototype,"source",void 0),r.__decorate([s.property({readOnly:!0})],f.prototype,"minDemResolution",null),f=r.__decorate([u.subclass("esri.widgets.ElevationProfile.ElevationProfileLineQuery")],f),f}));

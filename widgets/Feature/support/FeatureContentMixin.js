/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../core/has","../../../core/Logger","../../../core/accessorSupport/ensureType","../../../core/accessorSupport/decorators/property","../../../core/accessorSupport/decorators/subclass","../../../core/urlUtils","../../../core/uuid","../../../portal/support/resourceExtension","../../../chunks/index","../../support/widget"],(function(e,t,r,o,s,n,i,c,u,a,d,p,l){"use strict";e.FeatureContentMixin=e=>{let o=function(e){function r(){var t;return(t=e.apply(this,arguments)||this).renderNodeContent=e=>l.isWidget(e)&&!e.destroyed?p.jsx("div",{key:e},e.render()):e instanceof HTMLElement?p.jsx("div",{key:e,bind:e,afterCreate:t._attachToNode}):l.hasDomNode(e)?p.jsx("div",{key:e,bind:e.domNode,afterCreate:t._attachToNode}):null,t}return t._inheritsLoose(r,e),r.prototype._attachToNode=function(e){e.appendChild(this)},r}(e);return o=r.__decorate([c.subclass("esri.widgets.Feature.ContentMixin")],o),o},Object.defineProperty(e,"__esModule",{value:!0})}));

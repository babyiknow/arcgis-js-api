/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/has","../../core/Logger","../../core/accessorSupport/ensureType","../../core/accessorSupport/decorators/property","../../core/accessorSupport/decorators/subclass","../../core/urlUtils","../../core/uuid","../../portal/support/resourceExtension","../../core/Accessor","../../core/Collection","../support/WatchUpdatingTracking","../../libs/maquette/projection","../../libs/maquette/projector"],(function(e,t,r,o,i,s,n,c,a,d,l,p,h,u,m){"use strict";let f=function(t){function r(){var e;return(e=t.apply(this,arguments)||this).items=new p,e._watchUpdatingTracking=new h.WatchUpdatingTracking,e._callbacks=new Map,e._projector=m.createProjector(),e._hiddenProjector=m.createProjector(),e}e._inheritsLoose(r,t);var o=r.prototype;return o.initialize=function(){const e=document.createElement("div");e.className="esri-overlay-surface",this._set("surface",e),this._hiddenSurface=document.createElement("div"),this._hiddenSurface.setAttribute("style","visibility: hidden;"),e.appendChild(this._hiddenSurface),this._watchUpdatingTracking.addOnCollectionChange(this.items,(e=>{e.added.map((e=>{const t=()=>e.render();this._callbacks.set(e,t),this._projector.append(this.surface,t)})),e.removed.map((e=>{const t=this._projector.detach(this._callbacks.get(e));this.surface.removeChild(t.domNode),this._callbacks.delete(e)}))}))},o.addItem=function(e){this.items.add(e)},o.removeItem=function(e){this.items.remove(e)},o.destroy=function(){this.items.removeAll(),this._callbacks.forEach((e=>this._projector.detach(e))),this._callbacks=null,this._projector=null,this._watchUpdatingTracking.destroy()},o.render=function(){this._projector.renderNow()},o.computeBoundingRect=function(e){const t=this._hiddenSurface,r=this._hiddenProjector;let o=null;const i=()=>(o=e.render(),o);r.append(t,i),r.renderNow();const s={left:0,top:0,right:0,bottom:0};if(o&&o.domNode){const e=o.domNode.getBoundingClientRect();s.left=e.left,s.top=e.top,s.right=e.right,s.bottom=e.bottom}for(r.detach(i);t.firstChild;)t.removeChild(t.firstChild);return s},o.overlaps=function(e,t){const r=this.computeBoundingRect(e),o=this.computeBoundingRect(t);return Math.max(r.left,o.left)<=Math.min(r.right,o.right)&&Math.max(r.top,o.top)<=Math.min(r.bottom,o.bottom)},o.renderCanvas=function(e){if(!this.items.some((e=>e.visible)))return;const t=e.getContext("2d");t.save(),t.font=`10px ${getComputedStyle(this.surface).fontFamily}`,this.items.forEach((e=>{t.save(),e.renderCanvas(t),t.restore()})),t.restore()},e._createClass(r,[{key:"needsRender",get:function(){return this.items.length>0}},{key:"hasVisibleItems",get:function(){return this.items.some((e=>e.visible))}}]),r}(l);return t.__decorate([s.property({readOnly:!0})],f.prototype,"surface",void 0),t.__decorate([s.property({readOnly:!0})],f.prototype,"items",void 0),t.__decorate([s.property({readOnly:!0,dependsOn:["items.length"]})],f.prototype,"needsRender",null),t.__decorate([s.property({readOnly:!0})],f.prototype,"_watchUpdatingTracking",void 0),t.__decorate([s.property({readOnly:!0,aliasOf:"_watchUpdatingTracking.updating"})],f.prototype,"updating",void 0),f=t.__decorate([n.subclass("esri.views.overlay.ViewOverlay")],f),f}));

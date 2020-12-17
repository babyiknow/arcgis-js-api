/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../core/has","../../../core/Logger","../../../core/accessorSupport/ensureType","../../../core/accessorSupport/decorators/property","../../../core/accessorSupport/decorators/subclass","../../../core/urlUtils","../../../core/uuid","../../../portal/support/resourceExtension","../../../core/Accessor","../../../core/screenUtils"],(function(t,e,i,r,o,n,s,a,h,c,l,u){"use strict";const _="esri-zoom-box__container",d="esri-zoom-box__overlay",p="esri-zoom-box__overlay-background",w="esri-zoom-box__outline",g="Shift",b="Ctrl";let v=function(e){function i(i){var r;return(r=e.call(this,i)||this)._container=null,r._overlay=null,r._backgroundShape=null,r._boxShape=null,r._box={x:0,y:0,width:0,height:0},r._redraw=r._redraw.bind(t._assertThisInitialized(r)),r}t._inheritsLoose(i,e);var r=i.prototype;return r.destroy=function(){this.view=null},r._start=function(){this._createContainer(),this._createOverlay(),this.navigation.begin()},r._update=function(t,e,i,r){this._box.x=t,this._box.y=e,this._box.width=i,this._box.height=r,this._rafId||(this._rafId=requestAnimationFrame(this._redraw))},r._end=function(t,e,i,r,o){const n=this.view,s=n.toMap(u.createScreenPoint(t+.5*i,e+.5*r));let a=Math.max(i/n.width,r/n.height);-1===o&&(a=1/a),this._destroyOverlay(),this.navigation.end(),n.goTo({center:s,scale:n.scale*a})},r._updateBox=function(t,e,i,r){const o=this._boxShape;o.setAttributeNS(null,"x",""+t),o.setAttributeNS(null,"y",""+e),o.setAttributeNS(null,"width",""+i),o.setAttributeNS(null,"height",""+r),o.setAttributeNS(null,"class",w)},r._updateBackground=function(t,e,i,r){this._backgroundShape.setAttributeNS(null,"d",this._toSVGPath(t,e,i,r,this.view.width,this.view.height))},r._createContainer=function(){const t=document.createElement("div");t.className=_,this.view.root.appendChild(t),this._container=t},r._createOverlay=function(){const t=this.view.width,e=this.view.height,i=document.createElementNS("http://www.w3.org/2000/svg","path");i.setAttributeNS(null,"d","M 0 0 L "+t+" 0 L "+t+" "+e+" L 0 "+e+" Z"),i.setAttributeNS(null,"class",p);const r=document.createElementNS("http://www.w3.org/2000/svg","rect"),o=document.createElementNS("http://www.w3.org/2000/svg","svg");o.setAttributeNS("http://www.w3.org/2000/xmlns/","xmlns:xlink","http://www.w3.org/1999/xlink"),o.setAttributeNS(null,"class",d),o.appendChild(i),o.appendChild(r),this._container.appendChild(o),this._backgroundShape=i,this._boxShape=r,this._overlay=o},r._destroyOverlay=function(){this._container&&this._container.parentNode&&this._container.parentNode.removeChild(this._container),this._container=this._backgroundShape=this._boxShape=this._overlay=null},r._toSVGPath=function(t,e,i,r,o,n){const s=t+i,a=e+r;return"M 0 0 L "+o+" 0 L "+o+" "+n+" L 0 "+n+" ZM "+t+" "+e+" L "+t+" "+a+" L "+s+" "+a+" L "+s+" "+e+" Z"},r._handleDrag=function(t,e){const i=t.x,r=t.y,o=t.origin.x,n=t.origin.y;let s,a,h,c;switch(i>o?(s=o,h=i-o):(s=i,h=o-i),r>n?(a=n,c=r-n):(a=r,c=n-r),t.action){case"start":this._start();break;case"update":this._update(s,a,h,c);break;case"end":this._end(s,a,h,c,e)}t.stopPropagation()},r._redraw=function(){if(!this._rafId)return;if(this._rafId=null,!this._overlay)return;const{x:t,y:e,width:i,height:r}=this._box;this._updateBox(t,e,i,r),this._updateBackground(t,e,i,r),this._rafId=requestAnimationFrame(this._redraw)},t._createClass(i,[{key:"view",set:function(t){this._handles&&this._handles.forEach((t=>{t.remove()})),this._handles=null,this._destroyOverlay(),this._set("view",t),t&&(t.on("drag",[g],(t=>this._handleDrag(t,1))),t.on("drag",[g,b],(t=>this._handleDrag(t,-1))))}}]),i}(l);return e.__decorate([n.property()],v.prototype,"navigation",void 0),e.__decorate([n.property()],v.prototype,"view",null),v=e.__decorate([s.subclass("esri.views.2d.navigation.ZoomBox")],v),v}));

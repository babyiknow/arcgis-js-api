/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../../../../../../chunks/_rollupPluginBabelHelpers","../../../../../../core/promiseUtils","../../../../engine/webgl/enums","../../../../engine/brushes","../../../../engine/FeatureContainer"],(function(e,s,t,r,a,i){"use strict";let l=function(e){function i(s,t,r){var a;return(a=e.call(this,s)||this)._pointToCallbacks=new Map,a._layer=r,a._layerView=t,a}s._inheritsLoose(i,e);var l=i.prototype;return l.renderChildren=function(s){if(this.attributeView.update(),this.hasAnimation){s.painter.effects.integrate.draw(s,s.attributeView)}e.prototype.renderChildren.call(this,s)},l.hitTest=function(e,s){const r=[e,s],a=t.createResolver();return this._pointToCallbacks.set(r,a),this.requestRender(),a.promise},l.doRender=function(s){const{minScale:t,maxScale:r}=this._layer,a=s.state.scale;a<=(t||1/0)&&a>=r&&e.prototype.doRender.call(this,s)},l.prepareRenderPasses=function(s){const t=s.registerRenderPass({name:"label",brushes:[a.brushes.label],target:()=>this.hasLabels?this.children:null,drawPhase:r.WGLDrawPhase.LABEL|r.WGLDrawPhase.LABEL_ALPHA}),i=s.registerRenderPass({name:"geometry",brushes:[a.brushes.fill,a.brushes.line,a.brushes.marker,a.brushes.text],target:()=>this.children,enableDefaultDraw:()=>!this._layerView.hasEffects,effects:[{apply:s.effects.outsideEffect,enable:()=>this._layerView.hasEffects,args:()=>this._layerView.effectLists.excluded},{apply:s.effects.insideEffect,enable:()=>this._layerView.hasEffects,args:()=>this._layerView.effectLists.included},{apply:s.effects.hittest,enable:()=>!!this._pointToCallbacks.size,args:()=>this._pointToCallbacks}]}),l=s.registerRenderPass({name:"highlight",brushes:[a.brushes.fill,a.brushes.line,a.brushes.marker,a.brushes.text],target:()=>this.children,drawPhase:r.WGLDrawPhase.HIGHLIGHT,enableDefaultDraw:()=>!1,effects:[{apply:s.effects.highlight,enable:()=>!!this._layerView.hasHighlight()}]});return[...e.prototype.prepareRenderPasses.call(this,s),i,l,t]},s._createClass(i,[{key:"hasAnimation",get:function(){return this.hasLabels}},{key:"hasLabels",get:function(){const e=this._layer.featureReduction,s=e&&"cluster"===e.type&&e.labelsVisible&&e.labelingInfo&&e.labelingInfo.length;return this._layer.labelingInfo&&this._layer.labelingInfo.length&&this._layer.labelsVisible||!!s}},{key:"labelsVisible",get:function(){return this._layer.labelsVisible}}]),i}(i.FeatureContainer);e.WGLFeatureView=l,Object.defineProperty(e,"__esModule",{value:!0})}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../../../../geometry/Point","../../../../geometry","../../../../Viewpoint","../../ViewState"],(function(e,t,i,n,l){"use strict";let r=function(){function e(){this.renderParams={context:null,drawPhase:1,state:new l({viewpoint:new n({targetGeometry:new t(0,0),scale:1,rotation:0}),size:[256,256]}),stationary:!0,pixelRatio:1,displayLevel:-1,requiredLevel:-1,globalOpacity:1,renderPass:"background",styleLayer:null,styleLayerUID:-1,painter:null,glyphMosaic:null,spriteMosaic:null,driverTestResult:null,profiler:null,renderingOptions:null,deltaTime:-1,timeline:null,time:0,hasClipping:!1,blendMode:null,dataUploadCounter:0,effects:null,inFadeTransition:!1}}var i=e.prototype;return i.dispose=function(){this.renderParams=null},i.render=function(e,t,i,n,l,r,a,s,o,u){const d=r.adjustLevel(t[0]),p=this.renderParams;p.context=e,p.painter=n,p.glyphMosaic=n.glyphMosaic,p.spriteMosaic=n.spriteMosaic,p.pixelRatio=u,p.displayLevel=d,p.requiredLevel=d,n.setContext(e);const c=r.getScale(t[0]),[y,g]=r.getShift(t,a*c),f=.125*a*c/o,h=i.transforms.dvs;h[0]=f,h[4]=-f,h[6]=-1-y-s[0]*a*2,h[7]=1+g+(1-s[1])*a*2-2,p.state.size[0]=o,p.state.size[1]=o,i.stage||i.attachWithContext(e),i.triangleCount=0,n.drawTile(p,i,l)},e}();e.VectorTileRendererHelper3D=r,Object.defineProperty(e,"__esModule",{value:!0})}));

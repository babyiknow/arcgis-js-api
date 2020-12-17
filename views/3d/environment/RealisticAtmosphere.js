/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../../../core/promiseUtils","../../../geometry/support/Ellipsoid","../../../chunks/vec3f64","../../../chunks/vec3","../../../core/Handles","../../../core/watchUtils","../../../chunks/mat4","../../../chunks/mat4f64","../../../chunks/vec2f64","../../../chunks/vec4f64","../../../chunks/vec2","../../../chunks/vec4","../webgl-engine/lib/DefaultVertexAttributeLocations","../support/buffer/glUtil","../support/buffer/InterleavedLayout","../../webgl/BufferObject","../../webgl/VertexArrayObject","./atmosphereUtils","./RealisticAtmosphereTechnique"],(function(e,t,a,r,i,s,n,o,h,c,d,u,l,_,p,m,v,f,D,g){"use strict";let w=function(){function e(e,t){this._view=e,this.canRender=!0,this._skyslot=14,this._hazeSlot=15,this._renderData={texDepth:c.create(),cameraPosition:r.create(),projectionInverse:h.create(),viewInverse:h.create(),heightParameters:d.create(),atmosphereParameters1:d.create(),atmosphereParameters2:d.create(),atmosphereParameters3:r.create(),invWavelength:R,invWavelengthScaled:P,radii:c.create(),scale:0,scaleDepth:q,lowerAlphaBlendBound:0,scaleOverScaleDepth:0,oneOverScaleDepth:0,scaleDepthBlue:x,oneOverScaleDepthBlue:S,scaleOverScaleDepthBlue:0,g:B,g2:B*B,miePhaseCoefficients:E,nearFar:c.create(),cameraHeight:0,cameraHeightSq:0,C:0,CSur:0,innerFadeDistance:0,altitudeFade:0},this._lowerElevationBoundRadius=0,this._lowerBoundEarthRadius=a.earth.radius,this._updateRadius(a.earth.radius),this._techniqueRepository=t,this._atmosphereTechniqueConfig=new g.RealisticAtmosphereTechniqueConfiguration}var m=e.prototype;return m.destroy=function(){this._handles&&(this._handles.destroy(),this._handles=null),this._vao&&(this._vao.dispose(),this._vao=null)},m.when=function(){return t.resolve()},m.initializeRenderContext=function(e){const t=e.rctx;this._handles=new s,this._updateElevation({spatialReference:this._view.basemapTerrain.spatialReference,tile:this._view.basemapTerrain.rootTiles[0],extent:this._view.basemapTerrain.rootTiles[0].extent,context:"ground"}),this._handles.add(n.on(this._view,"basemapTerrain","elevation-change",(e=>this._updateElevation(e)),(()=>this._updateElevation()))),this._handles.add(n.on(this._view,"basemapTerrain","elevation-bounds-change",(()=>this._updateVisibleElevationBounds()),(()=>this._updateVisibleElevationBounds()))),this._atmosphereTechniqueConfig.haze=!1,this._atmosphereTechnique=this._techniqueRepository.acquireAndReleaseExisting(g.RealisticAtmosphereTechnique,this._atmosphereTechniqueConfig,this._atmosphereTechnique),this._atmosphereTechniqueConfig.haze=!0,this._atmosphereHazeTechnique=this._techniqueRepository.acquireAndReleaseExisting(g.RealisticAtmosphereTechnique,this._atmosphereTechniqueConfig,this._atmosphereHazeTechnique),this._vao=this._createVertexArrayObject(t)},m.uninitializeRenderContext=function(){this.destroy()},m.render=function(e){return(e.slot===this._hazeSlot||e.slot===this._skyslot)&&0===e.pass&&(this._update(e.camera),e.slot===this._skyslot&&this._renderSky(e),e.slot===this._hazeSlot&&this._renderHaze(e),!0)},m._renderSky=function(e){const t=e.rctx,a=this._atmosphereTechnique.program;t.bindProgram(a),this._atmosphereTechnique.bindPipelineState(t),a.setUniform3fv("atmosphereParameters3",this._renderData.atmosphereParameters3),this._renderCommon(a,e)},m._renderHaze=function(e){const t=e.rctx,a=e.offscreenRenderingHelper,r=this._atmosphereHazeTechnique.program;t.bindProgram(r),this._atmosphereHazeTechnique.bindPipelineState(t),a.renderDepthDetached((()=>{const i=a.depthTexture;t.bindTexture(i,0),r.setUniform1i("depthTex",0),this._renderCommon(r,e)}))},m._renderCommon=function(e,t){const a=t.rctx;e.setUniform3fv("invWavelength",this._renderData.invWavelength),e.setUniform3fv("invWavelengthScaled",this._renderData.invWavelengthScaled),t.scenelightingData.setLightDirectionUniform(e),e.setUniform4fv("heightParameters",this._renderData.heightParameters),e.setUniform3fv("cameraPosition",this._renderData.cameraPosition),e.setUniformMatrix4fv("projectionInverse",this._renderData.projectionInverse),e.setUniformMatrix4fv("viewInverse",this._renderData.viewInverse),e.setUniform2fv("nearFar",this._renderData.nearFar),e.setUniform2fv("radii",this._renderData.radii),e.setUniform4fv("atmosphereParameters1",this._renderData.atmosphereParameters1),e.setUniform4fv("atmosphereParameters2",this._renderData.atmosphereParameters2),e.setUniform1f("innerFadeDistance",this._renderData.innerFadeDistance),e.setUniform1f("altitudeFade",this._renderData.altitudeFade),a.bindVAO(this._vao),e.assertCompatibleVertexAttributeLocations(this._vao),a.drawArrays(5,0,4)},m._createVertexArrayObject=function(e){const t=V.createBuffer(4);return t.position.setVec(0,[-1,-1]),t.position.setVec(1,[1,-1]),t.position.setVec(2,[-1,1]),t.position.setVec(3,[1,1]),t.uv0.setVec(0,[0,0]),t.uv0.setVec(1,[1,0]),t.uv0.setVec(2,[0,1]),t.uv0.setVec(3,[1,1]),new f(e,_.Default3D,{geometry:p.glLayout(V)},{geometry:v.createVertex(e,35044,t.buffer)})},m._adjustRadiusForTesselation=function(e){const t=Math.PI/Math.pow(2,4)/16;return e*Math.cos(t)},m._updateElevation=function(e){const t=e?e.tile:this._view.basemapTerrain.rootTiles[0];if(0!==t.lij[0])return;const r=this._adjustRadiusForTesselation(a.earth.radius+t.elevationBounds[0]);r!==this._lowerElevationBoundRadius&&(this._lowerElevationBoundRadius=r,this._lowerBoundEarthRadius=-1,this._updateVisibleElevationBounds())},m._updateVisibleElevationBounds=function(){const e=this._adjustRadiusForTesselation(a.earth.radius+this._view.basemapTerrain.elevationBounds.min);(this._lowerBoundEarthRadius<0||e<this._lowerBoundEarthRadius)&&this._updateRadius(e)},m._updateRadius=function(e){this._lowerBoundEarthRadius=e;const t=e,a=t/10*10.25,r=1/(a-t),s=r/q,n=r/x,o=.3*(a-t)+t,h=this._renderData;l.set(h.atmosphereParameters1,r,q,s,y),l.set(h.atmosphereParameters2,B,x,n,S),i.set(h.atmosphereParameters3,B*B,E,o),u.set(h.radii,t,a),h.scale=r,h.lowerAlphaBlendBound=o,h.scaleOverScaleDepth=s,h.scaleOverScaleDepthBlue=n;const c=D.INNER_ATMOSPHERE_DEPTH;h.innerFadeDistance=2*Math.sqrt((2*t-c)*c)},m._update=function(e){e&&(this._renderData.cameraHeight=i.length(e.eye),this._renderData.cameraHeightSq=this._renderData.cameraHeight*this._renderData.cameraHeight,this._renderData.C=this._renderData.cameraHeightSq-this._renderData.radii[1]*this._renderData.radii[1],this._renderData.CSur=this._renderData.cameraHeightSq-this._renderData.radii[0]*this._renderData.radii[0],this._renderData.heightParameters=d.fromValues(this._renderData.cameraHeight,this._renderData.cameraHeightSq,this._renderData.C,this._renderData.CSur),i.copy(this._renderData.cameraPosition,e.eye),o.invert(this._renderData.projectionInverse,e.projectionMatrix),o.invert(this._renderData.viewInverse,e.viewMatrix),u.set(this._renderData.nearFar,e.near,e.far),this._renderData.altitudeFade=D.computeInnerAltitudeFade(this._renderData.cameraHeight-this._lowerBoundEarthRadius))},e.isSupported=function(e){return e.rctx.capabilities.depthTexture},e}();const T=.02*Math.PI,b=.004*Math.PI,R=r.fromValues(1/Math.pow(.65,4),1/Math.pow(.57,4),1/Math.pow(.475,4)),P=r.clone(R);i.scale(P,P,T),i.add(P,P,r.fromValues(b,b,b));const q=.25,x=.05,y=1/q,S=1/x,B=-.99999,E=(1-B*B)/(2+B*B)*1.5,V=m.newLayout().vec2f("position").vec2f("uv0");e.RealisticAtmosphere=w,Object.defineProperty(e,"__esModule",{value:!0})}));

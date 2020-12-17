/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["../../../../../../chunks/_rollupPluginBabelHelpers","../../../../../../core/maybe","../../../../../../core/Logger","../../../../../../core/Error","../../../../../../core/mathUtils","../../../../../../core/screenUtils","../../definitions","../../alignmentUtils","../../number","../../enums","./meshUtils","../../materialKey/MaterialKey","../../color","../../collisions/Metric","./segmentUtils","./WGLTextTemplate"],(function(e,t,n,i,o,s,r,a,l,c,h,u,m,f,p,_){"use strict";const g=n.getLogger("esri.views.2d.engine.webgl.WGLLabelTemplate");const d=function(e){const t=new Map;return n=>(t.has(n)||t.set(n,e(n)),t.get(n))}((e=>{let t=0;if(0===e)return 1/0;for(;!(e%2);)t++,e/=2;return t})),y=e=>Math.floor(127*e+127),x=e=>Math.floor(10*e),b=e=>Math.round(e*(254/360)),M=(e,t)=>l.i1616to32(Math.round(8*e),Math.round(8*t));return function(n){function _(e,t,i,l){var f;(f=n.call(this,e,i.font.size,i.haloSize||0,i.color&&m.premultiplyAlphaRGBAArray(i.color)||0,i.haloColor&&m.premultiplyAlphaRGBAArray(i.haloColor)||0,i.horizontalAlignment,i.verticalAlignment,h.isMapAligned(t.labelPlacement)?1:0,i.font.decoration,!1,i.angle||0,i.xoffset,i.yoffset,i.lineWidth,i.lineHeight,null,null)||this)._outLineLabelAngle=0,f._refPlacementPadding=0,f._refPlacementDirX=0,f._refPlacementDirY=0,f._refOffsetX=0,f._refOffsetY=0,f.geometryType=c.WGLGeometryType.LABEL;const p=function(e,t){const n=!!e.minScale&&t.scaleToZoom(e.minScale)||0;return o.clamp(n,0,25.5)}(t,l),_=function(e,t){const n=!!e.maxScale&&t.scaleToZoom(e.maxScale)||255;return o.clamp(n,0,25.5)}(t,l),g=t.labelPlacement,[d,y]=a.getAlignmentFromPlacement(g);f._xAlignD=d,f._yAlignD=y,f._minZoom=p,f._maxZoom=_,f._refPlacementPadding=s.pt2px(i.haloSize)+r.TEXT_PLACEMENT_PADDING;const x=u.LabelMaterialKey.load(e);return x.sdf=!0,f._materialKey=x.data,f}e._inheritsLoose(_,n),_.fromLabelClass=function(e,t){if("center-along"===e.labelPlacement){const t=e.symbol;t.xoffset=0,t.yoffset=0,t.angle=0,t.font.decoration="none"}return new _(e.materialKey,e,e.symbol,t)};var L=_.prototype;return L.bindReferenceTemplate=function(e){let n=a.getXDirection(this._xAlignD),i=a.getYDirection(this._yAlignD);if(this._refOffsetX=0,this._refOffsetY=0,t.isNone(e))return void(this._refSymbolAndPlacementOffset=l.i8888to32(0,0,y(n),y(i)));if("circle"===e.boundsType&&(n||i)){const e=Math.sqrt(n*n+i*i);n/=e,i/=e}const o=Math.max(e.height,e.width),s=4*this._refPlacementPadding;this._refSymbolAndPlacementOffset=l.i8888to32(s,o,y(n),y(i)),this._referenceSize=o,this._refPlacementDirX=n,this._refPlacementDirY=i,this._refOffsetX=e.xOffset,this._refOffsetY=e.yOffset},L.writeMesh=function(e,n,o,s,r,a){if(t.isNone(this._shapingInfo))return;const l=new Array,c=this._shapingInfo,h="esriGeometryPolygon"===o.geometryType?o.readLegacyCentroid():o.readLegacyGeometry();if(h){switch(this.current={out:e,outVecs:n,outMetrics:l,inId:r,inShaping:c,zoomLevel:a},s){case"esriGeometryPolyline":this._placeLineLabels(h);break;case"esriGeometryPoint":case"esriGeometryPolygon":this._placePointLabels(h);break;default:((e,t="mapview-labeling")=>{g.error(new i(t,e))})("mapview-labeling",`Geometry of type ${s} is not supported`)}e.writeMetrics(this.current.outMetrics)}},L._isVisible=function(e,t){const n=x(this.current.zoomLevel);return x(e)<=n&&n<=x(t)},L._placePointLabels=function(e){const{out:t,outVecs:n,outMetrics:i,inId:o}=this.current;this._writeGlyphs(t,n,o,e,i)},L._placeLineLabels=function(e){const t=p.smoothPaths(e.paths,this.current.inShaping.bounds.width),n=this._placeSubdivGlyphs.bind(this),i=(this._shapedBox.width+128)/4;for(const e of t)p.pathDivide(e,i,n)},L._placeSubdivGlyphs=function(e,t,n,i){const s=d(t),r=this._shapedBox.width/4,a=Math.min(n,i-n),l=o.log2(a/(4+r/2)),c=0===t?l:Math.min(s,l),h=Math.max(this._minZoom,this.current.zoomLevel+2-c),u=this.current.zoomLevel-h,m=this._shapedBox.width/2*Math.pow(2,u);this.current.inShaping.isMultiline?0===t&&this._placeStraight(e,h):this._placeCurved(e,h,m)},L._placeStraight=function(e,t){const{out:n,outVecs:i,outMetrics:o,inId:s}=this.current;this._writeGlyphs(n,i,s,e,o,t)},L._placeCurved=function(e,t,n){const i={from:this.current.out.currentDisplayRecordCount(),count:-1},o=new f(this.current.inId,i,e.x,e.y,t),s=e.clone(),r=e.angle*(180/Math.PI)%360,a=(e.angle*(180/Math.PI)+180)%360;this._outLineLabelAngle=b(r),this._placeFirst(s,o,t,1),this._placeBack(e,s,o,t,n,1),this._placeForward(e,s,o,t,n,1),this._outLineLabelAngle=b(a),this._placeFirst(s,o,t,0),this._placeBack(e,s,o,t,n,0),this._placeForward(e,s,o,t,n,0),o.range.count=this.current.out.currentDisplayRecordCount()-o.range.from,o.bounds&&this.current.outMetrics.push(o)},L._placeBack=function(e,t,n,i,o,s){const r=e.clone();let a=e.backwardLength+0;for(;r.prev()&&!(a>=o);)this._placeOnSegment(r,t,n,a,i,-1,s),a+=r.length+0},L._placeForward=function(e,t,n,i,o,s){const r=e.clone();let a=e.remainingLength+0;for(;r.next()&&!(a>=o);)this._placeOnSegment(r,t,n,a,i,1,s),a+=r.length+0},L._placeFirst=function(e,t,n,i){const s=e,r=this.current.inShaping,a=r.glyphs,l=this.current.zoomLevel,{out:c,outVecs:h,inId:u}=this.current,m=M(s.x,s.y);for(const s of a){const a=s.x>r.bounds.x?i:1-i,f=a*e.remainingLength+(1-a)*e.backwardLength,p=Math.abs(s.x+s.width/2-r.bounds.x),_=Math.max(0,l+o.log2(p/(f+0))),g=Math.max(n,_);s.maxZoom=25,s.angle=e.angle+(1-i)*Math.PI,s.minZoom=g,this._writeGlyph(c,h,s,u,m),i&&this._isVisible(s.minZoom,s.maxZoom)&&t.add(s.bounds,0,0)}},L._placeOnSegment=function(e,t,n,i,s,r,a){const l=this.current.inShaping.glyphs,{out:c,outVecs:h,inId:u}=this.current,m=this.current.inShaping,f=this.current.zoomLevel,p=e.dx/e.length,_=e.dy/e.length,g={x:e.x+i*-r*p,y:e.y+i*-r*_},d=M(g.x,g.y);for(const p of l){const l=p.x>m.bounds.x?a:1-a;if(!(l&&1===r||!l&&-1===r))continue;const _=Math.abs(p.x+p.width/2-m.bounds.x),g=Math.max(0,f+o.log2(_/i)-.1),y=Math.max(s,f+o.log2(_/(i+e.length+0)));0!==g&&(p.angle=e.angle+(1-a)*Math.PI,p.minZoom=y,p.maxZoom=g,this._writeGlyph(c,h,p,u,d),a&&this._isVisible(p.minZoom,p.maxZoom)&&n.add(p.bounds,e.x-t.x,e.y-t.y))}},L._writeGlyphs=function(e,n,i,o,s,r=this._minZoom){const a=this._shapingInfo;if(t.isNone(a))return;if(o.x<0||o.x>=512||o.y<0||o.y>=512)return;const l=e.currentDisplayRecordCount(),c=M(o.x+this._refOffsetX,o.y-this._refOffsetY),h=new f(i,{from:l,count:-1},o.x+this._refOffsetX,o.y-this._refOffsetY,r);for(const t of a.glyphs)t.minZoom=r,t.maxZoom=this._maxZoom,this._writeGlyph(e,n,t,i,c);h.range.count=e.currentDisplayRecordCount()-h.range.from,h.bounds=a.boundsT;const m=u.LabelMaterialKey.load(this._materialKey),p=this._refPlacementDirX,_=this._refPlacementDirY,g=m.vvSizeFieldStops||m.vvSizeMinMaxValue||m.vvSizeScaleStops||m.vvSizeUnitValue;h.setPlacementOffset(g,this._referenceSize,this._refPlacementPadding,p,_),s.push(h)},L._writeGlyph=function(e,t,n,i,o){const s=u.MaterialKeyBase.load(this._materialKey);s.textureBinding=n.textureBinding;const r=t.indexVector.length,a=t.getVector("geometry").vertexCount,l=this._writeIndices(t),c=this._writeVertex(t,i,o,n);e.writeDisplayRecord(this.geometryType,s.data,a,c,r,l)},L._writeVertexCommon=function(e,t,n,i){const o=this._color,s=this._haloColor,r=l.i8888to32(0,0,this._size,this._haloSize),a=Math.max(i.minZoom,this._minZoom),c=Math.min(i.maxZoom,this._maxZoom),h=l.i8888to32(x(a),x(c),this._outLineLabelAngle,0);e.push(n),e.push(t),e.push(o),e.push(s),e.push(r),e.push(this._refSymbolAndPlacementOffset),e.push(h)},e._createClass(_,[{key:"_shapedBox",get:function(){return t.unwrap(this._shapingInfo).bounds}}]),_}(_)}));

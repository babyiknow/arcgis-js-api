/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","../../core/maybe","../../core/Error","../../core/promiseUtils","../../geometry/Point","../../geometry/Multipoint","../../geometry/Polyline","../../core/asyncUtils","../../core/unitUtils","../../geometry/support/aaBoundingRect","../../geometry/projection","./ElevationSampler","./ElevationTile"],(function(e,t,i,n,o,l,s,a,r,c,u,f,h,p){"use strict";let m=function(){function e(){}var t=e.prototype;return t.queryAll=async function(e,t,i){if(!(e=i&&i.ignoreInvisibleLayers?e.filter((e=>e.visible)):e.slice()).length)throw new n("elevation-query:invalid-layer","Elevation queries require at least one elevation layer to fetch tiles from");const o=d.fromGeometry(t);let l=!1;i&&i.returnSampleInfo||(l=!0);const s={...g,...i,returnSampleInfo:!0},a=await this.query(e[e.length-1],o,s),r=await this._queryAllContinue(e,a,s);return r.geometry=r.geometry.export(),l&&delete r.sampleInfo,r},t.query=async function(e,t,i){if(!e)throw new n("elevation-query:invalid-layer","Elevation queries require an elevation layer to fetch tiles from");if(!t||!(t instanceof d)&&"point"!==t.type&&"multipoint"!==t.type&&"polyline"!==t.type)throw new n("elevation-query:invalid-geometry","Only point, polyline and multipoint geometries can be used to query elevation");const o={...g,...i},l=new T(e,t.spatialReference,o),s=o.signal;return await e.load({signal:s}),await this._createGeometryDescriptor(l,t,s),await this._selectTiles(l,s),await this._populateElevationTiles(l,s),this._sampleGeometryWithElevation(l),this._createQueryResult(l,s)},t.createSampler=async function(e,t,i){if(!e)throw new n("elevation-query:invalid-layer","Elevation queries require an elevation layer to fetch tiles from");if(!t||"extent"!==t.type)throw new n("elevation-query:invalid-extent","Invalid or undefined extent");const o={...g,...i};return this._createSampler(e,t,o)},t.createSamplerAll=async function(e,t,i){if(!(e=i&&i.ignoreInvisibleLayers?e.filter((e=>e.visible)):e.slice()).length)throw new n("elevation-query:invalid-layer","Elevation queries require at least one elevation layer to fetch tiles from");if(!t||"extent"!==t.type)throw new n("elevation-query:invalid-extent","Invalid or undefined extent");const o={...g,...i,returnSampleInfo:!0},l=await this._createSampler(e[e.length-1],t,o);return this._createSamplerAllContinue(e,t,l,o)},t._createSampler=async function(e,t,i,n){const o=i.signal;await e.load({signal:o});const l=t.spatialReference,s=e.tileInfo.spatialReference;l.equals(s)||(await f.initializeProjection([{source:l,dest:s}],{signal:o}),t=f.project(t,s));const a=new v(e,t,i,n);return await this._selectTiles(a,o),await this._populateElevationTiles(a,o),new h.MultiTileElevationSampler(a.elevationTiles,a.layer.tileInfo,a.options.noDataValue)},t._createSamplerAllContinue=async function(e,t,i,n){if(e.pop(),!e.length)return i;const o=i.samplers.map((e=>u.fromExtent(e.extent))),l=await this._createSampler(e[e.length-1],t,n,o);if(0===l.samplers.length)return i;const s=i.samplers.concat(l.samplers),a=new h.MultiTileElevationSampler(s,n.noDataValue);return this._createSamplerAllContinue(e,t,a,n)},t._queryAllContinue=async function(e,t,i){const n=e.pop(),o=t.geometry.coordinates,l=[],s=[];for(let i=0;i<o.length;i++){const a=t.sampleInfo[i];a.demResolution>=0?a.source||(a.source=n):e.length&&(l.push(o[i]),s.push(i))}if(!e.length||0===l.length)return t;const a=t.geometry.clone(l),r=await this.query(e[e.length-1],a,i);return s.forEach(((e,i)=>{o[e].z=r.geometry.coordinates[i].z,t.sampleInfo[e].demResolution=r.sampleInfo[i].demResolution})),this._queryAllContinue(e,t,i)},t._createQueryResult=async function(e,t){const i={geometry:(await e.geometry.project(e.outSpatialReference,t)).export(),noDataValue:e.options.noDataValue};return e.options.returnSampleInfo&&(i.sampleInfo=this._extractSampleInfo(e)),e.geometry.coordinates.forEach((e=>{e.tile=null,e.elevationTile=null})),i},t._createGeometryDescriptor=async function(e,t,i){let o;const l=e.layer.tileInfo.spatialReference;if(t instanceof d?o=await t.project(l,i):(await f.initializeProjection([{source:t.spatialReference,dest:l}],{signal:i}),o=f.project(t,l)),!o)throw new n("elevation-query:spatial-reference-mismatch",`Cannot query elevation in '${t.spatialReference.wkid}' on an elevation service in '${l.wkid}'`);e.geometry=d.fromGeometry(o)},t._selectTiles=async function(e,t){const i=e.options.demResolution;if("geometry"===e.type&&this._preselectOutsideLayerExtent(e),"number"==typeof i)this._selectTilesClosestResolution(e);else if("finest-contiguous"===i)await this._selectTilesFinestContiguous(e,t);else{if("auto"!==i)throw new n("elevation-query:invalid-dem-resolution",`Invalid dem resolution value '${i}', expected a number, "finest-contiguous" or "auto"`);await this._selectTilesAuto(e,t)}},t._preselectOutsideLayerExtent=function(e){const t=new p.ElevationTile(null);t.sample=()=>e.options.noDataValue,e.outsideExtentTile=t;const i=e.layer.fullExtent;e.geometry.coordinates.forEach((e=>{const n=e.x,o=e.y;(n<i.xmin||n>i.xmax||o<i.ymin||o>i.ymax)&&(e.elevationTile=t)}))},t._selectTilesClosestResolution=function(e){const t=e.layer.tileInfo,i=this._findNearestDemResolutionLODIndex(t,e.options.demResolution);e.selectTilesAtLOD(i)},t._findNearestDemResolutionLODIndex=function(e,t){const i=t/c.getMetersPerUnitForSR(e.spatialReference);let n=e.lods[0],o=0;for(let t=1;t<e.lods.length;t++){const l=e.lods[t];Math.abs(l.resolution-i)<Math.abs(n.resolution-i)&&(n=l,o=t)}return o},t._selectTilesFinestContiguous=async function(e,t){const i=x(e.layer.tileInfo,e.options.minDemResolution);await this._selectTilesFinestContiguousAt(e,i,t)},t._selectTilesFinestContiguousAt=async function(e,t,i){const l=e.layer;if(e.selectTilesAtLOD(t),t<0)return;const s=l.tilemapCache,a=e.getTilesToFetch();try{if(s)await o.whenOrAbort(o.all(a.map((e=>s.fetchAvailability(e.level,e.row,e.col,{signal:i})))),i);else if(await this._populateElevationTiles(e,i),!e.allElevationTilesFetched())throw e.clearElevationTiles(),new n("elevation-query:has-unavailable-tiles")}catch(n){o.throwIfAbortError(n),await this._selectTilesFinestContiguousAt(e,t-1,i)}},t._populateElevationTiles=async function(e,t){const n=e.getTilesToFetch(),l={},s=e.options.cache,a=e.options.noDataValue,r=n.map((async n=>{const o=`${e.layer.uid}:${n.id}:${a}`,r=i.isSome(s)?s.get(o):null,c=i.isSome(r)?r:await e.layer.fetchTile(n.level,n.row,n.col,{noDataValue:a,signal:t});i.isSome(s)&&s.put(o,c),l[n.id]=new p.ElevationTile(n,c)}));await o.whenOrAbort(o.eachAlways(r),t),e.populateElevationTiles(l)},t._selectTilesAuto=async function(e,t){this._selectTilesAutoFinest(e),this._reduceTilesForMaximumRequests(e);const i=e.layer.tilemapCache;if(!i)return this._selectTilesAutoPrefetchUpsample(e,t);const n=e.getTilesToFetch(),l={},s=n.map((async e=>{const n={id:null,level:0,row:0,col:0,extent:u.create()},s=await r.result(i.fetchAvailabilityUpsample(e.level,e.row,e.col,n,{signal:t}));!1===s.ok?o.throwIfAbortError(s.error):l[e.id]=n}));await o.whenOrAbort(o.all(s),t),e.remapTiles(l)},t._reduceTilesForMaximumRequests=function(e){const t=e.layer.tileInfo;let i=0;const n={},o=e=>{e.id in n?n[e.id]++:(n[e.id]=1,i++)},l=e=>{const t=n[e.id];1===t?(delete n[e.id],i--):n[e.id]=t-1};e.forEachTileToFetch(o,l);let s=!0;for(;s&&(s=!1,e.forEachTileToFetch((n=>{i<=e.options.maximumAutoTileRequests||(l(n),t.upsampleTile(n)&&(s=!0),o(n))}),l),s););},t._selectTilesAutoFinest=function(e){const t=x(e.layer.tileInfo,e.options.minDemResolution);e.selectTilesAtLOD(t,e.options.maximumAutoTileRequests)},t._selectTilesAutoPrefetchUpsample=async function(e,t){const i=e.layer.tileInfo;await this._populateElevationTiles(e,t);let n=!1;e.forEachTileToFetch(((e,t)=>{i.upsampleTile(e)?n=!0:t()})),n&&await this._selectTilesAutoPrefetchUpsample(e,t)},t._sampleGeometryWithElevation=function(e){e.geometry.coordinates.forEach((t=>{const i=t.elevationTile;let n=e.options.noDataValue;if(i){const e=i.sample(t.x,t.y);void 0!==e?n=e:t.elevationTile=null}t.z=n}))},t._extractSampleInfo=function(e){const t=e.layer.tileInfo,i=c.getMetersPerUnitForSR(t.spatialReference);return e.geometry.coordinates.map((n=>{let o=-1;if(n.elevationTile&&n.elevationTile!==e.outsideExtentTile){o=t.lodAt(n.elevationTile.tile.level).resolution*i}return{demResolution:o}}))},e}(),d=function(){function e(){}var t=e.prototype;return t.export=function(){return this._exporter(this.coordinates,this.spatialReference)},t.clone=function(t){const i=new e;return i.geometry=this.geometry,i.spatialReference=this.spatialReference,i.coordinates=t||this.coordinates.map((e=>this._cloneCoordinate(e))),i._exporter=this._exporter,i},t.project=async function(e,t){if(this.spatialReference.equals(e))return this.clone();await f.initializeProjection([{source:this.spatialReference,dest:e}],{signal:t});const i=new s({spatialReference:this.spatialReference,points:this.coordinates.map((e=>[e.x,e.y]))}),n=f.project(i,e);if(!n)return null;const o=this.coordinates.map(((e,t)=>{const i=this._cloneCoordinate(e),o=n.points[t];return i.x=o[0],i.y=o[1],i})),l=this.clone(o);return l.spatialReference=e,l},t._cloneCoordinate=function(e){return{x:e.x,y:e.y,z:e.z,m:e.m,tile:null,elevationTile:null}},e.fromGeometry=function(t){const i=new e;if(i.geometry=t,i.spatialReference=t.spatialReference,t instanceof e)i.coordinates=t.coordinates.map((e=>i._cloneCoordinate(e))),i._exporter=(e,i)=>{const n=t.clone(e);return n.spatialReference=i,n};else switch(t.type){case"point":{const e=t,{hasZ:n,hasM:o}=e;i.coordinates=n&&o?[{x:e.x,y:e.y,z:e.z,m:e.m}]:n?[{x:e.x,y:e.y,z:e.z}]:o?[{x:e.x,y:e.y,m:e.m}]:[{x:e.x,y:e.y}],i._exporter=(e,i)=>t.hasM?new l(e[0].x,e[0].y,e[0].z,e[0].m,i):new l(e[0].x,e[0].y,e[0].z,i);break}case"multipoint":{const e=t,{hasZ:n,hasM:o}=e;i.coordinates=n&&o?e.points.map((e=>({x:e[0],y:e[1],z:e[2],m:e[3]}))):n?e.points.map((e=>({x:e[0],y:e[1],z:e[2]}))):o?e.points.map((e=>({x:e[0],y:e[1],m:e[2]}))):e.points.map((e=>({x:e[0],y:e[1]}))),i._exporter=(e,i)=>t.hasM?new s({points:e.map((e=>[e.x,e.y,e.z,e.m])),hasZ:!0,hasM:!0,spatiaReference:i}):new s(e.map((e=>[e.x,e.y,e.z])),i);break}case"polyline":{const e=t,n=[],o=[],{hasZ:l,hasM:s}=t;let r=0;for(const t of e.paths)if(o.push([r,r+t.length]),r+=t.length,l&&s)for(const e of t)n.push({x:e[0],y:e[1],z:e[2],m:e[3]});else if(l)for(const e of t)n.push({x:e[0],y:e[1],z:e[2]});else if(s)for(const e of t)n.push({x:e[0],y:e[1],m:e[2]});else for(const e of t)n.push({x:e[0],y:e[1]});i.coordinates=n,i._exporter=(e,i)=>{const n=t.hasM?e.map((e=>[e.x,e.y,e.z,e.m])):e.map((e=>[e.x,e.y,e.z])),l=o.map((e=>n.slice(e[0],e[1])));return new a({paths:l,hasM:t.hasM,hasZ:!0,spatialReference:i})};break}}return i},e}(),y=function(e,t){this.layer=e,this.options=t},T=function(e){function i(t,i,n){var o;return(o=e.call(this,t,n)||this).type="geometry",o.outSpatialReference=i,o}t._inheritsLoose(i,e);var n=i.prototype;return n.selectTilesAtLOD=function(e){if(e<0)this.geometry.coordinates.forEach((e=>e.tile=null));else{const t=this.layer.tileInfo,i=t.lods[e].level;this.geometry.coordinates.forEach((e=>{e.tile=t.tileAt(i,e.x,e.y)}))}},n.allElevationTilesFetched=function(){return!this.geometry.coordinates.some((e=>!e.elevationTile))},n.clearElevationTiles=function(){for(const e of this.geometry.coordinates)e.elevationTile!==this.outsideExtentTile&&(e.elevationTile=null)},n.populateElevationTiles=function(e){for(const t of this.geometry.coordinates)!t.elevationTile&&t.tile&&(t.elevationTile=e[t.tile.id])},n.remapTiles=function(e){for(const t of this.geometry.coordinates)t.tile=e[t.tile.id]},n.getTilesToFetch=function(){const e={},t=[];for(const i of this.geometry.coordinates){const n=i.tile;i.elevationTile||!i.tile||e[n.id]||(e[n.id]=n,t.push(n))}return t},n.forEachTileToFetch=function(e){for(const t of this.geometry.coordinates)t.tile&&!t.elevationTile&&e(t.tile,(()=>t.tile=null))},i}(y),v=function(e){function i(t,i,n,o){var l;return(l=e.call(this,t,n)||this).type="extent",l.elevationTiles=[],l.candidateTiles=[],l.fetchedCandidates=new Set,l.extent=i.intersection(t.fullExtent),l.maskExtents=o,l}t._inheritsLoose(i,e);var n=i.prototype;return n.selectTilesAtLOD=function(e,t){const i=this._maximumLodForRequests(t),n=Math.min(i,e);n<0?this.candidateTiles.length=0:this._selectCandidateTilesCoveringExtentAt(n)},n._maximumLodForRequests=function(e){const t=this.layer.tileInfo;if(!e)return t.lods.length-1;const i=this.extent;for(let n=t.lods.length-1;n>=0;n--){const o=t.lods[n],l=o.resolution*t.size[0],s=o.resolution*t.size[1];if(Math.ceil(i.width/l)*Math.ceil(i.height/s)<=e)return n}return-1},n.allElevationTilesFetched=function(){return this.candidateTiles.length===this.elevationTiles.length},n.clearElevationTiles=function(){this.elevationTiles.length=0,this.fetchedCandidates.clear()},n.populateElevationTiles=function(e){for(const t of this.candidateTiles){const i=e[t.id];i&&(this.fetchedCandidates.add(t),this.elevationTiles.push(i))}},n.remapTiles=function(e){this.candidateTiles=this._uniqueNonOverlappingTiles(this.candidateTiles.map((t=>e[t.id])))},n.getTilesToFetch=function(){return this.candidateTiles},n.forEachTileToFetch=function(e,t){const i=this.candidateTiles;this.candidateTiles=[],i.forEach((i=>{if(this.fetchedCandidates.has(i))return void(t&&t(i));let n=!1;e(i,(()=>n=!0)),n?t&&t(i):this.candidateTiles.push(i)})),this.candidateTiles=this._uniqueNonOverlappingTiles(this.candidateTiles,t)},n._uniqueNonOverlappingTiles=function(e,t){const i={},n=[];for(const o of e)i[o.id]?t&&t(o):(i[o.id]=o,n.push(o));const o=n.sort(((e,t)=>e.level-t.level));return o.filter(((e,i)=>{for(let n=0;n<i;n++)if(u.contains(o[n].extent,e.extent))return t&&t(e),!1;return!0}))},n._selectCandidateTilesCoveringExtentAt=function(e){this.candidateTiles.length=0;const t=this.layer.tileInfo,i=t.lods[e],n=this.extent,o=t.tileAt(i.level,n.xmin,n.ymin),l=i.resolution*t.size[0],s=i.resolution*t.size[1],a=Math.ceil((n.xmax-o.extent[0])/l),r=Math.ceil((n.ymax-o.extent[1])/s);for(let e=0;e<r;e++)for(let i=0;i<a;i++){const n={id:null,level:o.level,row:o.row-e,col:o.col+i};t.updateTileInfo(n),this._tileIsMasked(n)||this.candidateTiles.push(n)}},n._tileIsMasked=function(e){return!!this.maskExtents&&this.maskExtents.some((t=>u.contains(t,e.extent)))},i}(y);function x(e,t){let i=e.lods.length-1;if(t>0){const n=e.lods.findIndex((e=>e.resolution<t));0===n?i=0:n>0&&(i=n-1)}return i}const g={maximumAutoTileRequests:20,noDataValue:0,returnSampleInfo:!1,demResolution:"auto",minDemResolution:0};e.ElevationQuery=m,e.GeometryDescriptor=d,e.default=m,e.getFinestLodIndex=x,Object.defineProperty(e,"__esModule",{value:!0})}));

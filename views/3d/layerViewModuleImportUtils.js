/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["require","exports","../../core/maybe","../../core/Error"],(function(e,n,i,r){"use strict";function o(e){return Object.freeze({__proto__:null,default:e})}const t=()=>new Promise((function(n,i){e(["./layers/TileLayerView3D"],(function(e){n(o(e))}),i)})),a=()=>new Promise((function(n,i){e(["./layers/ElevationLayerView3D"],(function(e){n(o(e))}),i)})),s={"base-dynamic":()=>new Promise((function(n,i){e(["./layers/BaseDynamicLayerView3D"],(function(e){n(o(e))}),i)})),"base-elevation":a,"base-tile":t,"bing-maps":t,"building-scene":()=>new Promise((function(n,i){e(["./layers/BuildingSceneLayerView3D"],(function(e){n(o(e))}),i)})),csv:()=>new Promise((function(n,i){e(["./layers/CSVLayerView3D"],(function(e){n(o(e))}),i)})),elevation:a,feature:()=>new Promise((function(n,i){e(["./layers/FeatureLayerView3D"],(function(e){n(o(e))}),i)})),geojson:()=>new Promise((function(n,i){e(["./layers/GeoJSONLayerView3D"],(function(e){n(o(e))}),i)})),graphics:()=>new Promise((function(n,i){e(["./layers/GraphicsLayerView3D"],(function(e){n(o(e))}),i)})),group:()=>new Promise((function(n,i){e(["../layers/GroupLayerView"],(function(e){n(o(e))}),i)})),imagery:()=>new Promise((function(n,i){e(["./layers/ImageryLayerView3D"],(function(e){n(o(e))}),i)})),"integrated-mesh":()=>new Promise((function(n,i){e(["./layers/IntegratedMeshLayerView3D"],(function(e){n(o(e))}),i)})),"map-image":()=>new Promise((function(n,i){e(["./layers/MapImageLayerView3D"],(function(e){n(o(e))}),i)})),"ogc-feature":()=>new Promise((function(n,i){e(["./layers/OGCFeatureLayerView3D"],(function(e){n(o(e))}),i)})),"open-street-map":t,"point-cloud":()=>new Promise((function(n,i){e(["./layers/PointCloudLayerView3D"],(function(e){n(o(e))}),i)})),scene:n=>null==n.profile||"mesh-pyramids"===n.profile?new Promise((function(n,i){e(["./layers/SceneLayerView3D"],(function(e){n(o(e))}),i)})):new Promise((function(n,i){e(["./layers/SceneLayerGraphicsView3D"],(function(e){n(o(e))}),i)})),stream:()=>new Promise((function(n,i){e(["./layers/StreamLayerView3D"],(function(e){n(o(e))}),i)})),tile:t,"imagery-tile":()=>new Promise((function(n,i){e(["./layers/ImageryTileLayerView3D"],(function(e){n(o(e))}),i)})),"vector-tile":()=>new Promise((function(n,i){e(["./layers/VectorTileLayerView3D"],(function(e){n(o(e))}),i)})),wcs:()=>new Promise((function(n,i){e(["./layers/ImageryTileLayerView3D"],(function(e){n(o(e))}),i)})),"web-tile":t,wms:()=>new Promise((function(n,i){e(["./layers/WMSLayerView3D"],(function(e){n(o(e))}),i)})),wmts:()=>new Promise((function(n,i){e(["./layers/WMTSLayerView3D"],(function(e){n(o(e))}),i)})),"geo-rss":null,kml:null,"map-notes":null,route:null,unknown:null,unsupported:null};const u={hasLayerViewModule:e=>i.isSome(s[e.type]),importLayerView:e=>{const n=s[e.type];if(!i.isSome(n))throw function(e){const n=e.declaredClass?e.declaredClass.slice(e.declaredClass.lastIndexOf(".")+1):"Unknown",i=n.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase();return new r(`${i}:view-not-supported`,`${n} is not supported in 3D`)}(e);return n(e)}};n.layerView3DImporter=u,Object.defineProperty(n,"__esModule",{value:!0})}));

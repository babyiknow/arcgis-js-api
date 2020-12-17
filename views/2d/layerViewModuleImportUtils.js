/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["require","exports","../../core/maybe","../../core/Error"],(function(e,n,i,r){"use strict";function t(e){return Object.freeze({__proto__:null,default:e})}function o(){return Promise.all([new Promise((function(n,i){e(["../webgl"],n,i)})),new Promise((function(n,i){e(["./mapViewDeps"],n,i)}))])}const s=()=>o().then((()=>new Promise((function(n,i){e(["./layers/TileLayerView2D"],(function(e){n(t(e))}),i)})))),a=()=>o().then((()=>new Promise((function(n,i){e(["./layers/FeatureLayerView2D"],(function(e){n(t(e))}),i)})))),u={"base-dynamic":()=>o().then((()=>new Promise((function(n,i){e(["./layers/BaseDynamicLayerView2D"],(function(e){n(t(e))}),i)})))),"base-tile":s,"bing-maps":s,csv:a,"geo-rss":()=>o().then((()=>new Promise((function(n,i){e(["./layers/GeoRSSLayerView2D"],(function(e){n(t(e))}),i)})))),feature:a,geojson:a,graphics:()=>o().then((()=>new Promise((function(n,i){e(["./layers/GraphicsLayerView2D"],(function(e){n(t(e))}),i)})))),group:()=>o().then((()=>new Promise((function(n,i){e(["./layers/GroupLayerView2D"],(function(e){n(t(e))}),i)})))),imagery:()=>o().then((()=>new Promise((function(n,i){e(["./layers/ImageryLayerView2D"],(function(e){n(t(e))}),i)})))),"imagery-tile":()=>o().then((()=>new Promise((function(n,i){e(["./layers/ImageryTileLayerView2D"],(function(e){n(t(e))}),i)})))),kml:()=>o().then((()=>new Promise((function(n,i){e(["./layers/KMLLayerView2D"],(function(e){n(t(e))}),i)})))),"map-image":()=>o().then((()=>new Promise((function(n,i){e(["./layers/MapImageLayerView2D"],(function(e){n(t(e))}),i)})))),"map-notes":()=>o().then((()=>new Promise((function(n,i){e(["./layers/MapNotesLayerView2D"],(function(e){n(t(e))}),i)})))),"ogc-feature":a,"open-street-map":s,route:()=>o().then((()=>new Promise((function(n,i){e(["./layers/RouteLayerView2D"],(function(e){n(t(e))}),i)})))),stream:()=>o().then((()=>new Promise((function(n,i){e(["./layers/StreamLayerView2D"],(function(e){n(t(e))}),i)})))),tile:s,"vector-tile":()=>o().then((()=>new Promise((function(n,i){e(["./layers/VectorTileLayerView2D"],(function(e){n(t(e))}),i)})))),wcs:()=>o().then((()=>new Promise((function(n,i){e(["./layers/ImageryTileLayerView2D"],(function(e){n(t(e))}),i)})))),"web-tile":s,wms:()=>o().then((()=>new Promise((function(n,i){e(["./layers/WMSLayerView2D"],(function(e){n(t(e))}),i)})))),wmts:()=>o().then((()=>new Promise((function(n,i){e(["./layers/WMTSLayerView2D"],(function(e){n(t(e))}),i)})))),"base-elevation":null,"building-scene":null,elevation:null,"integrated-mesh":null,"point-cloud":null,scene:null,unknown:null,unsupported:null};const c={hasLayerViewModule:e=>i.isSome(u[e.type]),importLayerView:e=>{const n=u[e.type];if(!i.isSome(n))throw function(e){const n=e.declaredClass?e.declaredClass.slice(e.declaredClass.lastIndexOf(".")+1):"Unknown",i=n.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase();return new r(`${i}:view-not-supported`,`${n} is not supported in 2D`)}(e);return n(e)}};n.layerView2DImporter=c,Object.defineProperty(n,"__esModule",{value:!0})}));

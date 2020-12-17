/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../geometry/Extent"],(function(e,r){"use strict";e.cloneGeometry=function(e){if(null===e)return null;const r=e.clone();return void 0!==e.cache._geVersion&&(r.cache._geVersion=e.cache._geVersion),r},e.convertLinearUnitsToCode=function(e){if(void 0===e)return null;if("number"==typeof e)return e;if("number"==typeof e)return e;switch(e.toLowerCase()){case"meters":case"meter":case"m":case"squaremeters":case"squaremeter":case"square-meter":case"square-meters":return 9001;case"miles":case"mile":case"squaremile":case"squaremiles":case"square-miles":case"square-mile":return 9035;case"kilometers":case"kilometer":case"squarekilometers":case"squarekilometer":case"square-kilometers":case"square-kilometer":case"km":return 9036;case"yard":case"yd":case"yards":case"square-yards":case"square-yard":case"squareyards":case"squareyard":return 9096;case"feet":case"ft":case"foot":case"square-feet":case"square-foot":case"squarefeet":case"squarefoot":return 9002}return null},e.convertSquareUnitsToCode=function(e){if(void 0===e)return null;if("number"==typeof e)return e;switch(e.toLowerCase()){case"meters":case"meter":case"m":case"squaremeters":case"squaremeter":case"square-meter":case"square-meters":return 109404;case"miles":case"mile":case"squaremile":case"squaremiles":case"square-miles":case"square-mile":return 109413;case"kilometers":case"kilometer":case"squarekilometers":case"squarekilometer":case"square-kilometers":case"square-kilometer":case"km":return 109414;case"acres":case"acre":case"ac":return 109402;case"hectares":case"hectare":case"ha":return 109401;case"yard":case"yd":case"yards":case"square-yards":case"square-yard":case"squareyards":case"squareyard":return 109442;case"feet":case"ft":case"foot":case"square-feet":case"square-foot":case"squarefeet":case"squarefoot":return 109405}return null},e.sameGeomType=function(e,r){return e===r||("point"===e&&"esriGeometryPoint"===r||("polyline"===e&&"esriGeometryPolyline"===r||("polygon"===e&&"esriGeometryPolygon"===r||("extent"===e&&"esriGeometryEnvelope"===r||("multipoint"===e&&"esriGeometryMultipoint"===r||("point"===r&&"esriGeometryPoint"===e||("polyline"===r&&"esriGeometryPolyline"===e||("polygon"===r&&"esriGeometryPolygon"===e||("extent"===r&&"esriGeometryEnvelope"===e||"multipoint"===r&&"esriGeometryMultipoint"===e)))))))))},e.shapeExtent=function(e){if(null===e)return null;switch(e.type){case"polygon":case"multipoint":case"polyline":return e.extent;case"point":return new r({xmin:e.x,ymin:e.y,xmax:e.x,ymax:e.y,spatialReference:e.spatialReference});case"extent":return e}return null},Object.defineProperty(e,"__esModule",{value:!0})}));

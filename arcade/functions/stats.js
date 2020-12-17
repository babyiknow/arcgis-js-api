/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../../chunks/languageUtils","./fieldStats"],(function(n,t,r){"use strict";function e(n,e,u,i){if(1===i.length){if(t.isArray(i[0]))return r.calculateStat(n,i[0],-1);if(t.isImmutableArray(i[0]))return r.calculateStat(n,i[0].toArray(),-1)}return r.calculateStat(n,i,-1)}n.registerFunctions=function(n,r){n.stdev=function(n,t){return r(n,t,(function(n,t,r){return e("stdev",0,0,r)}))},n.variance=function(n,t){return r(n,t,(function(n,t,r){return e("variance",0,0,r)}))},n.average=function(n,t){return r(n,t,(function(n,t,r){return e("mean",0,0,r)}))},n.mean=function(n,t){return r(n,t,(function(n,t,r){return e("mean",0,0,r)}))},n.sum=function(n,t){return r(n,t,(function(n,t,r){return e("sum",0,0,r)}))},n.min=function(n,t){return r(n,t,(function(n,t,r){return e("min",0,0,r)}))},n.max=function(n,t){return r(n,t,(function(n,t,r){return e("max",0,0,r)}))},n.distinct=function(n,t){return r(n,t,(function(n,t,r){return e("distinct",0,0,r)}))},n.count=function(n,e){return r(n,e,(function(n,r,e){if(t.pcCheck(e,1,1),t.isArray(e[0])||t.isString(e[0]))return e[0].length;if(t.isImmutableArray(e[0]))return e[0].length();throw new Error("Invalid Parameters for Count")}))}},Object.defineProperty(n,"__esModule",{value:!0})}));

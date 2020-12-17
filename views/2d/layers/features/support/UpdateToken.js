/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports"],(function(e){"use strict";let t=function(){function e(){this.source=!1,this.targets={feature:!1,aggregate:!1},this.storage={filters:!1,data:!1},this.mesh=!1,this.queryFilter=!1,this.why={mesh:[],source:[]}}e.create=function(t){const s=new e;for(const e in t){const r=t[e];if("object"==typeof r)for(const t in r){const a=r[t];s[e][t]=a}s[e]=r}return s},e.empty=function(){return e.create({})},e.all=function(){return e.create({source:!0,targets:{feature:!0,aggregate:!0},storage:{filters:!0,data:!0},mesh:!0})};var t=e.prototype;return t.any=function(){return this.source||this.mesh||this.storage.filters||this.storage.data||this.targets.feature||this.targets.aggregate||this.queryFilter},t.describe=function(){let e=0,t="";if(this.mesh){e+=20,t+="-> (20) Mesh needs update\n";for(const e of this.why.mesh)t+=`    + ${e}\n`}if(this.source){e+=10,t+="-> (10) The source needs update\n";for(const e of this.why.source)t+=`    + ${e}\n`}this.targets.feature&&(e+=5,t+="-> (5) Feature target parameters changed\n"),this.storage.filters&&(e+=5,t+="-> (5) Feature filter parameters changed\n"),this.targets.aggregate&&(e+=4,t+="-> (4) Aggregate target parameters changed\n"),this.storage.data&&(e+=1,t+="-> (1) Texture storage parameters changed");const s=e<5?"Fastest":e<10?"Fast":e<15?"Moderate":e<20?"Slow":"Very Slow";console.debug(`Applying ${s} update of cost ${e}/45 `),console.debug(t)},t.toJSON=function(){return{source:this.source,targets:this.targets,storage:this.storage,mesh:this.mesh,queryFilter:this.queryFilter}},e}();e.UpdateToken=t,Object.defineProperty(e,"__esModule",{value:!0})}));

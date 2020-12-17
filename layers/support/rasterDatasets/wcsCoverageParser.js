/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../../../geometry/Extent","../RasterInfo","./xmlUtilities","../wmsUtils"],(function(e,t,n,i,a){"use strict";function s(e){const t=i.getElementValues(e,"interpolationMethod"),n=e.getAttribute("default");return null!=n?[n].concat(t.filter((e=>e.toLowerCase()!==n.toLowerCase()))):t}function l(e){return null==e?["nearest"]:e.map((e=>{const t=e.toLowerCase();return t.indexOf("nearest")>-1?"nearest":t.indexOf("linear")>-1?"bilinear":t.indexOf("cubic")>-1?"cubic":null})).filter((e=>!!e))}function o(e){const n=i.getElements(e,"pos"),a=i.getSpaceDelimitedNumericValues(n[0]),s=i.getSpaceDelimitedNumericValues(n[1]);return new t({xmin:a[0],ymin:a[1],xmax:s[0],ymax:s[1],spatialReference:{wkid:4326}})}function r(e){const t=[],n=i.getElements(e,"RangeSet");let a=[];for(let e=0;e<n.length;e++){const s=i.getElementValue(n[e],"name"),l=i.getElementValue(n[e],"label"),o=[],r=i.getElements(n[e],"AxisDescription");for(let e=0;e<r.length;e++){const t=i.getElementValue(r[e],"name"),n=i.getElementValue(r[e],"label"),s=i.getElementValues(r[e],"singleValue");if(0===s.length){const t=i.getElementValue(r[e],"min"),n=i.getElementValue(r[e],"max"),a=Number(i.getElementValue(r[e],"res"))||1;if(null!==t&&null!==n)for(let e=parseInt(t,10);e<=parseInt(n,10);e+=a)s.push(e.toString())}"band"===t.toLowerCase()&&(a=s),o.push({name:t,label:n,values:s})}t.push({name:s,label:l,axis:o})}return{rangeSet:t,bandNames:a}}function m(e){const t=i.getElements(e,"timeposition");if(t.length>0){const e=[];for(let n=0;n<t.length;n++)e.push(new Date(i.getElementValue(t[n])));return{begin:e[0],end:e[e.length-1],values:e}}const n=i.getElement(e,"timePeriod");if(n){return{begin:new Date(i.getElementValue(n,"beginPosition")),end:new Date(i.getElementValue(n,"endPosition")),...function(e=null){if(!e)return{resolution:null,units:null};let t=e.toUpperCase();const n=["Y","M","D"],i=["H","M","S"],a=["Years","Months","Days","Hours","Minutes","Seconds"];let s,l,o;return-1===t.indexOf("PT")?(t=t.slice(1),o=n.findIndex((e=>t.indexOf(e)>-1)),o>-1&&(s=a[o]),l=parseFloat(t.substring(0,t.length-1))):(t=t.slice(2),o=i.findIndex((e=>t.indexOf(e)>-1)),s=a[3+o],l=parseFloat(t.substring(0,t.length-1))),{resolution:l,units:s}}(i.getElementValue(n,"timeResolution"))}}return null}function u(e){const n=i.getElement(e,"spatialDomain"),a=i.getElement(n,"Envelope")||i.getElement(n,"EnvelopeWithTimePeriod"),s=a.getAttribute("srsName").split(":"),l=s[s.length-1],o=i.getElements(a,"pos"),r=i.getSpaceDelimitedNumericValues(o[0]),u=i.getSpaceDelimitedNumericValues(o[1]),p=new t({xmin:r[0],ymin:r[1],xmax:u[0],ymax:u[1],spatialReference:{wkid:parseInt(l,10)}}),g=i.getElement(n,"RectifiedGrid"),c=i.getElementValue(g,"low").split(" "),d=i.getElementValue(g,"high").split(" "),f=parseInt(d[0],10)-parseInt(c[0],10)+1,h=parseInt(d[1],10)-parseInt(c[1],10)+1,x=i.getSpaceDelimitedNumericValues(n,"origin/pos"),E=i.getElements(n,"offsetVector"),b={envelope:p,columns:f,rows:h,offset:{x:parseFloat(i.getElementValue(E[0]).split(" ")[0]),y:parseFloat(i.getElementValue(E[1]).split(" ")[1])},origin:{x:x[0],y:x[1]}},S=i.getElement(e,"temporalDomain");return{spatialDomain:b,temporalDomain:S?m(S):null}}function p(e){const t=[],n=i.getElements(e,"Field");let a=[];for(let e=0;e<n.length;e++){const s=i.getElementValue(n[e],"Identifier"),l=i.getElementValue(n[e],"Description"),o=i.getElementValue(n[e],"Definition"),r=i.getElementValue(n[e],"Abstract"),m=i.getElementValue(n[e],"Title"),u=i.getElementValues(n[e],"InterpolationMethod"),p=[],g=i.getElements(n[e],"Axis");for(let e=0;e<g.length;e++){const t=g[e].getAttribute("identifier"),n=i.getElementValue(g[e],"valuesUnit"),s=i.getElementValue(g[e],"DataType"),l=i.getElementValues(g[e],"Key");"band"===t.toLowerCase()&&(a=l),p.push({identifier:t,valuesUnit:n,dataType:s,values:l})}t.push({identifier:s,description:l,definition:o,abstract:r,title:m,supportedInterpolations:u,axis:p})}return{rangeSet:t,bandNames:a}}function g(e){var n;const s=i.getElement(e,"SpatialDomain"),l=i.getElement(s,"GridCRS"),o=i.getElementValue(l,"GridBaseCRS"),r=i.getElementValue(l,"GridOrigin"),u=null!=(n=null==r?void 0:r.split(" ").map((e=>parseFloat(e))))?n:[0,0],p=i.getSpaceDelimitedNumericValues(l,"GridOffsets"),g=i.getElements(s,"BoundingBox");let c,d,f,h;for(let e=0;e<g.length;e++){var x;const n=null==(x=g[e].getAttribute("crs"))?void 0:x.toLowerCase();if(null!=n)if(n.indexOf("imagecrs")>-1){const t=i.getSpaceDelimitedNumericValues(g[e],"LowerCorner"),n=i.getSpaceDelimitedNumericValues(g[e],"UpperCorner");c=n[0]-t[0]+1,d=n[1]-t[1]+1}else if(n.indexOf("epsg")>0){const a=n.split(":");f=parseInt(a[a.length-1],10);const s=i.getSpaceDelimitedNumericValues(g[e],"LowerCorner"),l=i.getSpaceDelimitedNumericValues(g[e],"UpperCorner");h=new t({xmin:s[0],ymin:s[1],xmax:l[0],ymax:l[1],spatialReference:{wkid:f}})}}const E=c>d,b=h.xmax-h.xmin>h.ymax-h.ymin;let S=!1;a.coordsReversed(f)&&(E===b?S=!1:(S=!0,h=new t({xmin:h.ymin,ymin:h.xmin,xmax:h.ymax,ymax:h.xmax,spatialReference:{wkid:f}})));const v={columns:c,rows:d,origin:{x:u[0],y:u[1]},offset:{x:p[0],y:p[1]},gridBaseCRS:o,envelope:h,useEPSGAxis:S},V=i.getElement(e,"temporalDomain");return{spatialDomain:v,temporalDomain:V?m(V):null}}function c(e,t){const a=[],s=[],o={supportedFormats:a,supportedCRSs:s,version:"1.1"};let r;for(let t=0;t<e.childNodes.length;t++){const n=e.childNodes[t];if(1!==n.nodeType)continue;const l=i.getNodeNameIgnoreNS(n).toLowerCase();switch(l){case"title":case"abstract":case"identifier":o[l]=i.getElementValue(n);break;case"supportedformat":{const e=i.getElementValue(n);-1===a.indexOf(e)&&a.push(e)}break;case"supportedcrs":{const e=i.getElementValue(n);-1===s.indexOf(e)&&s.push(e)}break;case"range":{const e=p(n);o.range=e.rangeSet,r=e.bandNames}break;case"domain":o.domain=g(n)}}const m=l(o.range[0].supportedInterpolations),{identifier:u,abstract:c,title:d,domain:f,range:h}=o,x={x:Math.abs(f.spatialDomain.offset.x),y:Math.abs(f.spatialDomain.offset.y)},E=function(e,t){const n=e.filter((e=>-1===e.identifier.toLowerCase().indexOf("field_1")&&!e.axis.some((e=>"band"===e.identifier.toLowerCase())))),i=[];if(n.length&&n.forEach((e=>{var t;const n=e.axis.map((e=>{const t=e.values.map((e=>parseFloat(e.trim()))),n=[Math.min.apply(null,t),Math.max.apply(null,t)];return{name:e.identifier.trim(),description:"",field:e.identifier.trim(),unit:e.valuesUnit?e.valuesUnit.trim():"",hasRegularIntervals:!1,values:t,extent:n}}));i.push({name:e.identifier.trim(),description:null!=(t=null==e?void 0:e.description.trim())?t:"",unit:"",dimensions:n})})),t.temporalDomain){const{begin:e,end:n,values:a,units:s,resolution:l}=t.temporalDomain;i.forEach((t=>{t.dimensions.push({name:"StdTime",description:"",unit:"ISO8601",values:null==a?void 0:a.map((e=>e.getTime())),hasRegularIntervals:!a,interval:l,intervalUnit:s,extent:[e.getTime(),n.getTime()]})}))}return i.length?{variables:i}:null}(h,f),b=new n({width:f.spatialDomain.columns,height:f.spatialDomain.rows,pixelSize:x,extent:f.spatialDomain.envelope,spatialReference:f.spatialDomain.envelope.spatialReference,bandCount:r.length||1,multidimensionalInfo:E});return{id:u,title:o.title,description:c||d,lonLatEnvelope:null,bandNames:r,rasterInfo:b,supportedFormats:a,supportedInterpolations:m,coverageDescription:o,version:t,useEPSGAxis:f.spatialDomain.useEPSGAxis}}function d(e){const n=i.getElement(e,"Envelope")||i.getElement(e,"EnvelopeWithTimePeriod"),a=n.getAttribute("srsName"),s=a.slice(a.lastIndexOf("/")+1),l=n.getAttribute("axisLabels"),o=i.getSpaceDelimitedNumericValues(n,"lowerCorner"),r=i.getSpaceDelimitedNumericValues(n,"upperCorner"),m=!["y","lat","latitude","north","nor","n","b"].some((e=>e===l[0].toLowerCase()));let u;u=new t(m?{xmin:o[0],ymin:o[1],xmax:r[0],ymax:r[1],spatialReference:{wkid:parseInt(s,10)}}:{xmin:o[1],ymin:o[0],xmax:r[1],ymax:r[0],spatialReference:{wkid:parseInt(s,10)}});const p={mins:o,maxs:r},g=n.getAttribute("uomLabels").trim().split(" ");let c,d;return i.isSameTagIgnoreNS(n,"EnvelopeWithTimePeriod")&&(c=new Date(i.getElementValue(e,"beginPosition")),d=new Date(i.getElementValue(e,"endPosition"))),{envelope:u,axisLabels:l,uomLabels:g.length?g:null,envelopeAllDims:p,beginPosition:c,endPosition:d,isEastFirst:m}}function f(e){const t=[],n=i.getElements(e,"DataRecord"),a=[];for(let e=0;e<n.length;e++){const s=i.getElements(n[e],"field"),l=[];for(let e=0;e<s.length;e++){const t=s[e].getAttribute("name"),n=i.getElementValue(s[e],"description")||"",o=i.getElement(s[e],"uom").getAttribute("code")||"",r=i.getSpaceDelimitedNumericValues(s[e],"interval");t.toLowerCase().indexOf("band")>-1&&a.push(t),l.push({name:t,description:n,uom:o,allowedValues:r})}t.push(l)}return{rangeType:t,bandNames:a}}function h(e){let t=1,n="";const i=.01;return Math.abs(e-1/24)<1/24*i?n="Hours":Math.abs(e-1)<.01?n="Days":e<1?(t=Math.round(24*e),n="Hours"):e>27.99&&e<31.01||Math.round(e/30)<12?n="Months":e>364.99&&e<366.01&&(n="Years"),{interval:t,intervalUnit:n}}function x(e){const t=i.getElement(e,"RectifiedGrid"),n=i.getSpaceDelimitedNumericValues(t,"low"),a=i.getSpaceDelimitedNumericValues(t,"high"),s=[];for(let e=0;e<n.length;e++)s.push(a[e]-n[e]+1);const l=i.getElementValue(t,"axisLabels").split(" "),o=i.getSpaceDelimitedNumericValues(t,"origin/pos"),r=i.getElements(t,"offsetVector"),m=[];for(let e=0;e<r.length;e++)m.push(parseFloat(i.getElementValue(r[e]).split(" ")[e]));let u,p,g;return["y","lat","latitude","north","nor","n","b"].some((e=>e===l[0].toLowerCase()))?(u=s[1],p=s[0],g={y:Math.abs(m[0]),x:Math.abs(m[1])}):(u=s[0],p=s[1],g={x:Math.abs(m[0]),y:Math.abs(m[1])}),{columns:u,rows:p,origin:o,offset:m,resolution:g,gridSamples:s,axisLabels:l}}function E(e){const t={version:"2.0"};let a=[];for(let n=0;n<e.childNodes.length;n++){const s=e.childNodes[n];if(1===s.nodeType)if(i.isSameTagIgnoreNS(s,"coverageId"))t.coverageId=i.getElementValue(s);else if(i.isSameTagIgnoreNS(s,"ServiceParameters"))t.serviceParameters={supportedFormats:i.getElementValues(s,"nativeFormat")};else if(i.isSameTagIgnoreNS(s,"boundedBy"))t.boundedBy=d(s);else if(i.isSameTagIgnoreNS(s,"rangeType")){const e=f(s);t.rangeType=e.rangeType,a=e.bandNames}else i.isSameTagIgnoreNS(s,"domainSet")&&(t.domainSet=x(s))}const{coverageId:s,boundedBy:l,domainSet:o,rangeType:r,serviceParameters:m}=t,u=function(e,t,n){const i=[];for(let t=0;t<e.length;t++){const n=e[t];for(let e=0;e<n.length;e++)-1===n[e].name.toLowerCase().indexOf("band")&&i.push(n[e])}const a=[];if(i.length){const e=[];for(let i=2;i<n.axisLabels.length;i++){const a=(t.uomLabels&&t.uomLabels.length)>i?t.uomLabels[i]:"",s=n.axisLabels[i].toLowerCase().indexOf("time")>-1||"iso8601"===a.toLowerCase();let l,o;if(s){const e=h(n.offset[i]);l=e.interval,o=e.intervalUnit}else l=n.offset[i],o=a;const r=[];s?(r.push((new Date).setTime(24*(t.envelopeAllDims.mins[i]-25569)*3600*1e3)),r.push((new Date).setTime(24*(t.envelopeAllDims.maxs[i]-25569)*3600*1e3))):(r.push(t.envelopeAllDims.mins[i]),r.push(t.envelopeAllDims.maxs[i])),e.push({name:n.axisLabels[i].trim(),description:n.axisLabels[i].trim(),unit:t.uomLabels&&t.uomLabels.length>i?t.uomLabels[i].trim():"",hasRegularIntervals:!0,extent:r,interval:l,intervalUnit:o})}if(i.forEach((t=>a.push({name:t.name.trim(),description:t.description.trim(),unit:t.uom.trim(),dimensions:e}))),a.length)return{variables:a}}return null}(r,l,o);return{id:s,title:s,description:s,lonLatEnvelope:null,bandNames:a,rasterInfo:new n({width:o.columns,height:o.rows,pixelSize:o.resolution,extent:l.envelope,spatialReference:l.envelope.spatialReference,bandCount:a.length||1,multidimensionalInfo:u}),supportedFormats:m.supportedFormats,supportedInterpolations:null,coverageDescription:t,version:"1.0.0",useEPSGAxis:!1}}e.parseCoverages=function(e,t){let a=null;if("string"==typeof e){a=(new DOMParser).parseFromString(e,"text/xml")}else a=e;if("1.0.0"===t){return i.getElements(a,"CoverageOffering").map((e=>function(e){const t={version:"1.0"};let a=[];for(let n=0;n<e.childNodes.length;n++){const l=e.childNodes[n];if(1===l.nodeType)if(i.isSameTagIgnoreNS(l,"description"))t.description=i.getElementValue(l);else if(i.isSameTagIgnoreNS(l,"name"))t.name=i.getElementValue(l);else if(i.isSameTagIgnoreNS(l,"label"))t.label=i.getElementValue(l);else if(i.isSameTagIgnoreNS(l,"supportedFormats"))t.supportedFormats=i.getElementValues(l,"formats");else if(i.isSameTagIgnoreNS(l,"supportedCRSs"))t.supportedCRSs=(m=l,{requestResponseCRSs:i.getElementValues(m,"requestResponseCRSs").map((e=>e.split(":")[1])),nativeCRSs:i.getElementValues(m,"nativeCRSs").map((e=>e.split(":")[1]))});else if(i.isSameTagIgnoreNS(l,"supportedInterpolations"))t.supportedInterpolations=s(l);else if(i.isSameTagIgnoreNS(l,"lonLatEnvelope"))t.lonLatEnvelope=o(l);else if(i.isSameTagIgnoreNS(l,"rangeSet")){const e=r(l);t.rangeSet=e.rangeSet,a=e.bandNames}else i.isSameTagIgnoreNS(l,"domainSet")&&(t.domainSet=u(l))}var m;const p=l(t.supportedInterpolations),{name:g,description:c,label:d,lonLatEnvelope:f,supportedFormats:h}=t,{spatialDomain:x}=t.domainSet,E={x:Math.abs(x.offset.x),y:Math.abs(x.offset.y)},b=new n({width:x.columns,height:x.rows,pixelSize:E,extent:x.envelope,spatialReference:x.envelope.spatialReference,bandCount:a.length||1});return{id:g,title:t.name,description:c||d,lonLatEnvelope:f,rasterInfo:b,bandNames:a,supportedFormats:h,supportedInterpolations:p,coverageDescription:t,version:"1.0.0",useEPSGAxis:!1}}(e)))}const m=i.getElements(a,"CoverageDescription");return"1.1.0"===t||"1.1.1"===t||"1.1.2"===t?m.map((e=>c(e,t))):m.map((e=>E(e)))},e.standardizeInterpolations=l,Object.defineProperty(e,"__esModule",{value:!0})}));

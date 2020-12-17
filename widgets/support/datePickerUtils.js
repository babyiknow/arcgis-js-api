/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../../core/Error","../../intl/date"],(function(t,e,r){"use strict";function o(t){const e=[/٠/g,/١/g,/٢/g,/٣/g,/٤/g,/٥/g,/٦/g,/٧/g,/٨/g,/٩/g];for(let r=0;r<10;r++)t=t.replace(e[r],r.toString());return Number(t)}function a(t){return new e(`could not parse date input, expecting the following format: ${r.formatDate(Date.now(),t)}`)}t.parseDateIntoParts=function(t,e){const n=r.getDateTimeFormatter(e),i=Date.now(),c=n.formatToParts(i),l=new Set;c.filter((({type:t})=>"literal"===t)).forEach((({value:t})=>l.add(t)));let s=0;const f={};for(;c.length>0;){const{type:e,value:r}=c.shift();for(let o=0;o<r.length;o++,s++){const r=t.charAt(s);if(l.has(r)){s++;break}if("literal"===e)break;f[e]||(f[e]=[]),f[e].push(r)}}const g={};try{g.day=o(f.day.join("")),g.month=o(f.month.join(""))-1,g.year=o((f.year||f.relatedYear).join(""))}catch(t){throw a(e)}if(isNaN(g.day)||isNaN(g.month)||isNaN(g.year))throw a(e);return g},Object.defineProperty(t,"__esModule",{value:!0})}));

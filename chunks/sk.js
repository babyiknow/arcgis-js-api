/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","./_commonjsHelpers","./moment"],(function(e,t,n){"use strict";var r=t.createCommonjsModule((function(e,r){var s,o;s=t.commonjsGlobal,o=function(e){var t="január_február_marec_apríl_máj_jún_júl_august_september_október_november_december".split("_"),n="jan_feb_mar_apr_máj_jún_júl_aug_sep_okt_nov_dec".split("_");function r(e){return e>1&&e<5}function s(e,t,n,s){var o=e+" ";switch(n){case"s":return t||s?"pár sekúnd":"pár sekundami";case"ss":return t||s?o+(r(e)?"sekundy":"sekúnd"):o+"sekundami";case"m":return t?"minúta":s?"minútu":"minútou";case"mm":return t||s?o+(r(e)?"minúty":"minút"):o+"minútami";case"h":return t?"hodina":s?"hodinu":"hodinou";case"hh":return t||s?o+(r(e)?"hodiny":"hodín"):o+"hodinami";case"d":return t||s?"deň":"dňom";case"dd":return t||s?o+(r(e)?"dni":"dní"):o+"dňami";case"M":return t||s?"mesiac":"mesiacom";case"MM":return t||s?o+(r(e)?"mesiace":"mesiacov"):o+"mesiacmi";case"y":return t||s?"rok":"rokom";case"yy":return t||s?o+(r(e)?"roky":"rokov"):o+"rokmi"}}return e.defineLocale("sk",{months:t,monthsShort:n,weekdays:"nedeľa_pondelok_utorok_streda_štvrtok_piatok_sobota".split("_"),weekdaysShort:"ne_po_ut_st_št_pi_so".split("_"),weekdaysMin:"ne_po_ut_st_št_pi_so".split("_"),longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd D. MMMM YYYY H:mm"},calendar:{sameDay:"[dnes o] LT",nextDay:"[zajtra o] LT",nextWeek:function(){switch(this.day()){case 0:return"[v nedeľu o] LT";case 1:case 2:return"[v] dddd [o] LT";case 3:return"[v stredu o] LT";case 4:return"[vo štvrtok o] LT";case 5:return"[v piatok o] LT";case 6:return"[v sobotu o] LT"}},lastDay:"[včera o] LT",lastWeek:function(){switch(this.day()){case 0:return"[minulú nedeľu o] LT";case 1:case 2:return"[minulý] dddd [o] LT";case 3:return"[minulú stredu o] LT";case 4:case 5:return"[minulý] dddd [o] LT";case 6:return"[minulú sobotu o] LT"}},sameElse:"L"},relativeTime:{future:"za %s",past:"pred %s",s:s,ss:s,m:s,mm:s,h:s,hh:s,d:s,dd:s,M:s,MM:s,y:s,yy:s},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}})},"function"==typeof t.commonjsRequire?o(n.moment$1):o(s.moment)})),s=Object.freeze(Object.assign(Object.create(null),r,{default:r}));e.sk=s}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../../../core/maybe","../../../core/promiseUtils","../../../geometry/Polygon","../../../Graphic","./geometryUtils"],(function(e,t,o,n,r,s){"use strict";const c="Single Line Input";function i(e,t){const{filter:o,withinViewEnabled:n}=e,r=t&&t.scale,c=t&&t.extent,i=o&&o.geometry;return s.createExtentFromGeometry(i,t,r)||(n&&c?c:void 0)}function a(e,o){return e.map((e=>function(e,o){const{key:c,scale:i,sourceIndex:a,view:u,zoomScale:l,defaultZoomScale:d}=o,{attributes:g,extent:f,location:m,address:x}=e,y=new r({geometry:m,attributes:g}),p=f||m,S=s.createExtentFromGeometry(p,u,i),v="number"==typeof l?s.scaleExtent(S,u,l):"number"==typeof d&&"point"===p.type?s.scaleExtent(S,u,d):S,w=m?`${m.x},${m.y}`:"",I=x||w,R=y.clone();return t.isSome(v)&&(R.geometry=n.fromExtent(v)),{extent:v,feature:y,target:R,key:c,name:I,sourceIndex:a}}(e,o)))}e.getResults=function(e,n){return e.location?function(e,t){const{source:o,spatialReference:n,location:r,sourceIndex:s,view:c}=e,{locator:i,zoomScale:u,defaultZoomScale:l}=o,d=c&&c.scale,g=t&&t.signal;n&&(i.outSpatialReference=n);return i.locationToAddress({location:r},{signal:g}).then((e=>a([e],{sourceIndex:s,scale:d,view:c,zoomScale:u,defaultZoomScale:l})))}(e,n):function(e,n){const{source:r,suggestResult:s,spatialReference:u,view:l,maxResults:d,sourceIndex:g}=e,f=r&&r.zoomScale,m=r&&r.defaultZoomScale;if(!s.text.trim())return o.resolve();const x=!s.key&&r.prefix?r.prefix:"",y=!s.key&&r.suffix?r.suffix:"",p=`${x}${s.text}${y}`,S={},{locator:v}=r,w=l&&l.scale,I=i(r,l),R=n&&n.signal;if(!v)return o.resolve();r.categories&&(S.categories=r.categories);r.locationType&&(S.locationType=r.locationType);u&&(v.outSpatialReference=u);const E=l&&l.get("extent.center");E&&(S.location=E);S.maxLocations=d,I&&(S.searchExtent=t.unwrap(I));r.countryCode&&(S.countryCode=r.countryCode);const{key:$}=s;$&&(S.magicKey=$);S.address={},S.address[r.singleLineFieldName||c]=p,r.outFields&&(S.outFields=r.outFields);return v.addressToLocations(S,{signal:R}).then((e=>a(e,{key:$,scale:w,sourceIndex:g,view:l,zoomScale:f,defaultZoomScale:m})))}(e,n)},e.getSuggestions=function(e,n){const{source:r,spatialReference:s,view:c,suggestTerm:a,maxSuggestions:u,sourceIndex:l}=e,d={},{locator:g}=r,f=i(r,c),m=n&&n.signal;if(!g)return o.resolve();r.categories&&(d.categories=r.categories),g.outSpatialReference=s;const x=c&&c.get("extent.center");if(x&&(d.location=x),!a.trim())return o.resolve();const{prefix:y="",suffix:p=""}=r,S=`${y}${a}${p}`;return d.text=S,f&&(d.searchExtent=t.unwrap(f)),d.maxSuggestions=u,r.countryCode&&(d.countryCode=r.countryCode),g.suggestLocations(d,{signal:m}).then((e=>function(e,t){return e.map((e=>function(e,t){return{text:e.text,key:e.magicKey,sourceIndex:t}}(e,t)))}(e,l)))},e.isArcGISWorldGeocoder=function(e){return!!e&&(function(e){return/(?:arcgis\.com\/arcgis\/rest\/services\/world\/geocodeserver).*/gi.test(e)}(e)||function(e){return/(?:\/servers\/[\da-z\.-]+\/rest\/services\/world\/geocodeserver).*/gi.test(e)}(e))},Object.defineProperty(e,"__esModule",{value:!0})}));

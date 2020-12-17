/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../../core/maybe","../../core/promiseUtils","../../kernel","../../request","../../portal/Portal","../../portal/PortalItem","../FeatureLayer"],(function(t,r,e,n,a,o,i,s){"use strict";let l=function(){function t(t,r,e){this.parsedUrl=t,this.portalItem=r,this.signal=e,this.rootDocument=null;const n=this.parsedUrl.path.match(/^(.*)\/SceneServer\/layers\/([\d]*)\/?$/i);n&&(this.urlParts={root:n[1],layerId:parseInt(n[2],10)})}var l=t.prototype;return l.fetch=async function(){var t;if(!this.urlParts)return null;const e=null!=(t=this.portalItem)?t:await this.portalItemFromServiceItemId();if(r.isNone(e))return this.loadFromUrl();const n=await this.findAndLoadRelatedPortalItem(e);return r.isNone(n)?null:this.loadFeatureLayerFromPortalItem(n)},l.fetchPortalItem=async function(){var t;if(!this.urlParts)return null;const e=null!=(t=this.portalItem)?t:await this.portalItemFromServiceItemId();return r.isNone(e)?null:this.findAndLoadRelatedPortalItem(e)},l.fetchRootDocument=async function(){if(r.isSome(this.rootDocument))return this.rootDocument;if(r.isNone(this.urlParts))return this.rootDocument={},{};const t={query:{f:"json"},responseType:"json",authMode:"no-prompt",signal:this.signal},e=`${this.urlParts.root}/SceneServer`;try{const r=await a(e,t);this.rootDocument=r.data}catch{this.rootDocument={}}return this.rootDocument},l.fetchServiceOwningPortalUrl=async function(){var t;const r=null==(t=n.id)?void 0:t.findServerInfo(this.parsedUrl.path);if(null!=r&&r.owningSystemUrl)return r.owningSystemUrl;const o=this.parsedUrl.path.replace(/(.*\/rest)\/.*/i,"$1")+"/info";try{const t=(await a(o,{query:{f:"json"},responseType:"json",signal:this.signal})).data.owningSystemUrl;if(t)return t}catch(t){e.throwIfAbortError(t)}return null},l.findAndLoadRelatedPortalItem=async function(t){try{return(await t.fetchRelatedItems({relationshipType:"Service2Service",direction:"reverse"},{signal:this.signal})).find((t=>"Feature Service"===t.type))||null}catch(t){return e.throwIfAbortError(t),null}},l.loadFeatureLayerFromPortalItem=async function(t){await t.load({signal:this.signal});const r=await this.findMatchingAssociatedSublayerUrl(t.url);return new s({url:r,portalItem:t}).load({signal:this.signal})},l.loadFromUrl=async function(){const t=await this.findMatchingAssociatedSublayerUrl(`${this.urlParts.root}/FeatureServer`);return new s({url:t}).load({signal:this.signal})},l.findMatchingAssociatedSublayerUrl=async function(t){const r=t.replace(/^(.*FeatureServer)(\/[\d]*\/?)?$/i,"$1"),n={query:{f:"json"},responseType:"json",authMode:"no-prompt",signal:this.signal},o=this.urlParts.layerId,i=this.fetchRootDocument(),s=a(r,n),[l,c]=await e.all([s,i]),u=c&&c.layers,h=l.data&&l.data.layers;if(!Array.isArray(h))throw new Error("expected layers array");if(Array.isArray(u))for(let t=0;t<Math.min(u.length,h.length);t++){if(u[t].id===o)return`${r}/${h[t].id}`}else if(o<h.length)return`${r}/${h[o].id}`;throw new Error("could not find matching associated sublayer")},l.portalItemFromServiceItemId=async function(){const t=(await this.fetchRootDocument()).serviceItemId;if(!t)return null;const n=new i({id:t}),a=await this.fetchServiceOwningPortalUrl();r.isSome(a)&&(n.portal=new o({url:a}));try{return n.load({signal:this.signal})}catch(t){return e.throwIfAbortError(t),null}},t}();t.FetchAssociatedFeatureLayer=l,Object.defineProperty(t,"__esModule",{value:!0})}));

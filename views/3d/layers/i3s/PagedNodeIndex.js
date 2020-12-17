/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["../../../../geometry/support/aaBoundingBox","../../support/orientedBoundingBox","./I3SUtil"],(function(e,t,n){"use strict";function s(e,t){return e/t|0}function i(e,t){return e%t}return function(){function o(e,t,n){this._pages=[],this.pageSize=0,this._nodeSR=null,this._renderSR=null,this._nodeSR=e,this._renderSR=t,this.pageSize=n}var r=o.prototype;return r.addPage=function(e,o,r=0){for(;this._pages.length<e;)this._pages.push(null);const u=function(e,s,i,o){const r=new t.ObbArray(e.length);for(let t=0;t<e.length;t++)n.transformObb(e[t].obb,s,r.obbs[t],i,o);return r.obbs}(o,this._nodeSR,this._renderSR,r);this._pages[e]={nodes:o,renderObbs:u,parents:new Uint32Array(this.pageSize)},function(e,t){const n=[0];for(;n.length;){const o=n.pop(),r=e[s(o,t)].nodes[i(o,t)];for(let u=0;u<r.childCount;u++){const a=r.firstChild+u;null!=e[s(a,t)]&&(e[s(a,t)].parents[i(a,t)]=o,n.push(a))}}}(this._pages,this.pageSize)},r.hasPage=function(e){return!!this._pages[e]},r.getNode=function(e){const t=this.pageSize;return this._pages[s(e,t)].nodes[i(e,t)]},r.getRenderObb=function(e){const t=this.pageSize;return this._pages[s(e,t)].renderObbs[i(e,t)]},r.getRenderCenter=function(e){return this.getRenderObb(e).center},r.setRenderObb=function(e,n){const o=this.pageSize;t.set(n,this._pages[s(e,o)].renderObbs[i(e,o)])},r.getParentId=function(e){const t=this.pageSize;return this._pages[s(e,t)].parents[i(e,t)]},r.hasNodes=function(e,t){const n=s(e,this.pageSize),i=s(e+t-1,this.pageSize);for(let e=n;e<=i;e++)if(null==this._pages[e])return!1;return!0},r.forEachNodeId=function(e){for(let t=0;t<this._pages.length;t++){const n=this._pages[t];if(n)for(let s=0;s<n.nodes.length;s++)e(t*this.pageSize+s)}},r.createVisibilityTraverse=function(){const n={index:this,queue:[],masks:[],tempAabb:e.create()};return(i,o)=>function(n,i,o){const r=n.index;if(!r.hasNodes(0,1))return;const u=n.queue;u.length=0,u.push(0);const a=n.masks;a.length=0,a.push(0);for(;u.length>0;){const h=u.pop();let p=a.pop();const c=r.getNode(h),g=r.getRenderObb(h);let l=!0;if(null!=i.clippingBox){const s=1<<i.frustumPlanes.length;if(0==(p&s)){const o=t.toAaBoundingBox(g,n.tempAabb);e.contains(i.clippingBox,o)?p|=s:e.intersects(i.clippingBox,o)||(l=!1)}}for(let e=0;e<i.frustumPlanes.length&&l;e++){const n=1<<e;if(0==(p&n)){const s=t.intersectPlane(g,i.frustumPlanes[e]);s>0?l=!1:s<0&&(p|=n)}}if(o.predicate(h,c,l)){const e=c.firstChild,t=c.childCount;let n=!1;const i=s(e,r.pageSize),g=s(e+t-1,r.pageSize);for(let e=i;e<=g;e++)if(!r.hasPage(e)){o.pageMiss(h,e),n=!0;break}if(!n)for(let n=0;n<t;n++)u.push(e+n),a.push(p)}}}(n,i,o)},o}()}));

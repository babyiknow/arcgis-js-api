/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../../core/Error","../../core/uuid","../../core/promiseUtils","../../core/asyncUtils","../../portal/support/resourceUtils"],(function(e,r,o,t,s,c){"use strict";async function a(e,r){const o=await s.result(e.resource.portalItem.addResource(e.resource,e.content,r));if(!0!==o.ok)throw e.error&&e.error(o.error),o.error;e.finish&&e.finish(e.resource)}async function n(e,r){const o=await s.result(e.resource.update(e.content,r));if(!0!==o.ok)throw e.error(o.error),o.error;e.finish(e.resource)}e.saveResources=async function(e,s,u){if(!s||!s.resources)return;const h=s.portalItem===e.portalItem?new Set(e.paths):new Set;e.paths.length=0,e.portalItem=s.portalItem;const p=new Set(s.resources.toKeep.map((e=>e.resource.path))),i=new Set,f=[];p.forEach((r=>{h.delete(r),e.paths.push(r)}));for(const r of s.resources.toUpdate)if(h.delete(r.resource.path),p.has(r.resource.path)||i.has(r.resource.path)){const{resource:t,content:s,finish:n,error:h}=r,p=c.getSiblingOfSameTypeI(t,o.generateUUID());e.paths.push(p.path),f.push(a({resource:p,content:s,finish:n,error:h},u))}else e.paths.push(r.resource.path),f.push(n(r,u)),i.add(r.resource.path);for(const r of s.resources.toAdd)f.push(a(r,u)),e.paths.push(r.resource.path);if(h.forEach((e=>{const r=s.portalItem.resourceFromPath(e);f.push(r.portalItem.removeResource(r).catch((()=>{})))})),0===f.length)return;const l=await t.eachAlways(f);t.throwIfAborted(u);const d=l.filter((e=>"error"in e)).map((e=>e.error));if(d.length>0)throw new r("save:resources","Failed to save one or more resources",{errors:d})},Object.defineProperty(e,"__esModule",{value:!0})}));

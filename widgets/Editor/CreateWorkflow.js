/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/has","../../core/maybe","../../core/Logger","../../core/accessorSupport/ensureType","../../core/accessorSupport/decorators/property","../../core/accessorSupport/decorators/subclass","../../core/urlUtils","../../core/uuid","../../portal/support/resourceExtension","./CreateWorkflowData","./Edits","./Workflow","./workflowUtils"],(function(e,t,i,r,a,o,n,s,l,u,d,c,f,w,p){"use strict";var m;let g=m=function(t){function i(e){var i;return(i=t.call(this,e)||this).type="create",i}return e._inheritsLoose(i,t),i.create=function(e,t,i){const r=new c({edits:new f,viewModel:e}),a=new m({data:r,afterCommit:i});return a._set("steps",this._createWorkflowSteps(a,t)),a},i._createWorkflowSteps=function(e,t="awaiting-feature-creation-info"){const{data:i,handles:a}=e,o={"awaiting-feature-creation-info":()=>({id:"awaiting-feature-creation-info",async setUp(){i.creationInfo=null,a.add(i.viewModel.featureTemplatesViewModel.on("select",(({item:e})=>{i.creationInfo={layer:e.layer,template:e.template},i.viewModel.activeWorkflow.next()})),this.id)},async tearDown(){a.remove(this.id)}}),"awaiting-feature-to-create":()=>({id:"awaiting-feature-to-create",async setUp(){a.add(await p.setUpFeatureAdd(i.viewModel.sketchViewModel,i.creationInfo,i.viewModel.view,(e=>{i.edits.feature=e,i.viewModel.activeWorkflow.next()})),this.id)},async tearDown(){a.remove(this.id)}}),"editing-new-feature":()=>({id:"editing-new-feature",async setUp(){const e=i.edits.feature,t=i.viewModel,o=p.findLayerInfo(t.layerInfos,e.layer),n=o&&o.fieldConfig;t.featureFormViewModel.set({feature:e,fieldConfig:n});const s=p.getVisualVariableAttributes(e),{interactive:l,visual:u}=await p.setUpGeometryUpdate(e,s,t.sketchViewModel,t.view,(({geometry:e,attributes:a})=>{if(r.isSome(s.rotation)){const{field:e}=s.rotation;t.featureFormViewModel.setValue(e,a[e])}if(r.isSome(s.size)){const{field:e}=s.size;t.featureFormViewModel.setValue(e,a[e])}i.edits.updateAttributes(a),i.edits.updateGeometry(e)}));a.add([i.viewModel.featureFormViewModel.on("value-change",(()=>{i.edits.updateAttributes(i.viewModel.featureFormViewModel.getValues()),e.attributes=i.edits.feature.attributes})),l,u],this.id)},async tearDown(){i.edits.feature=null,i.viewModel.featureFormViewModel.set({feature:null,fieldConfig:null}),a.remove(this.id)}})};let n=!1;const s=["awaiting-feature-creation-info","awaiting-feature-to-create","editing-new-feature"].filter((e=>!!n||(n=e===t,n))).map((e=>o[e]()));i.viewModel.refreshCreationTemplates();const l=function(e){if(1!==e.length)return null;const[t]=e;if(!("items"in t))return t;{const e=t;if(1===e.items.length)return e.items[0]}return null}(i.viewModel.featureTemplatesViewModel.items),[u]=s;if("awaiting-feature-creation-info"===u.id&&l){const{layer:e,template:t}=l;i.creationInfo={layer:e,template:t},s.shift()}return s},i}(w);return g=m=t.__decorate([s.subclass("esri.widgets.Editor.CreateWorkflow")],g),g}));

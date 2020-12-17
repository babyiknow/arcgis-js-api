/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["../chunks/_rollupPluginBabelHelpers","../chunks/tslib.es6","../core/has","../core/Logger","../core/accessorSupport/ensureType","../core/accessorSupport/decorators/property","../core/accessorSupport/decorators/aliasOf","../core/accessorSupport/decorators/subclass","../core/urlUtils","../core/uuid","../portal/support/resourceExtension","../core/events","../layers/support/fieldUtils","../intl/substitute","../intl","../core/watchUtils","../core/HandleOwner","./support/widgetUtils","./support/decorators/accessibleHandler","./support/decorators/messageBundle","./support/decorators/renderable","./support/decorators/vmEvent","../chunks/index","./Widget","./Attachments","./Spinner","./FeatureForm","./FeatureTemplates/ItemList","./FeatureTemplates","./Editor/EditorViewModel"],(function(e,t,s,i,a,r,n,l,o,d,c,u,h,p,m,_,w,f,g,v,y,b,k,M,x,A,F,T,W,C){"use strict";const j="esri-editor esri-widget esri-widget--panel",I="esri-editor__header",E="esri-editor__scroller",H="esri-editor__content",D="esri-editor__content-group",S="esri-editor__temp-wrapper",U="esri-editor__message",B="esri-editor__controls",L="esri-editor__title",O="esri-editor__back-button",z="esri-editor__mode-selection",P="esri-editor__progress-bar",V="esri-editor__warning-card",R="esri-editor__warning-header",K="esri-editor__warning-heading",q="esri-editor__warning-message",$="esri-editor__warning-divider",G="esri-editor__warning-option",N="esri-editor__warning-option--primary",J="esri-editor__warning-option--negative",Q="esri-editor__warning-option--positive",X="esri-editor__feature-list-item",Y="esri-editor__feature-list-item--disabled",Z="esri-editor__feature-list-name",ee="esri-editor__feature-list-icon",te="esri-editor__control-button",se="esri-editor__overlay",ie="esri-icon-right",ae="esri-icon-left",re="esri-icon-notice-triangle",ne="esri-icon-edit",le="esri-button",oe="esri-button--disabled",de="esri-button--secondary",ce="esri-button--tertiary",ue="esri-heading",he="esri-interactive";function pe(e){e.focus()}let me=function(t){function s(s,i){var a;return(a=t.call(this,s,i)||this)._candidateCommitted=!1,a._featureForm=new F,a._attachments=new x({visibleElements:{addSubmitButton:!1,cancelAddButton:!1,cancelUpdateButton:!1,deleteButton:!1,errorMessage:!1,progressBar:!1,updateButton:!1}}),a._featureTemplates=new W,a._filterText="",a._prompt=null,a._spinner=new A,a.activeWorkflow=null,a.allowedWorkflows=null,a.iconClass=ne,a.label=void 0,a.layerInfos=null,a.messages=null,a.messagesCommon=null,a.messagesTemplates=null,a.supportingWidgetDefaults=null,a.view=null,a.viewModel=new C,a._handleHeaderClickOrKeyDown=t=>{t.currentTarget["data-prevent-back"]||a._handleBack.call(e._assertThisInitialized(a),t)},a._setCandidateFeature=(e,t=!1)=>{if(a._candidateCommitted)return;const s=a.viewModel.activeWorkflow;s.data.edits.feature=e,t&&(s.next(),a._candidateCommitted=!0)},a._handleSave=a._handleSave.bind(e._assertThisInitialized(a)),a._handleBack=a._handleBack.bind(e._assertThisInitialized(a)),a._handleDone=a._handleDone.bind(e._assertThisInitialized(a)),a._handleDelete=a._handleDelete.bind(e._assertThisInitialized(a)),a._handleAdd=a._handleAdd.bind(e._assertThisInitialized(a)),a._handleEdit=a._handleEdit.bind(e._assertThisInitialized(a)),a._handleAttachmentAdd=a._handleAttachmentAdd.bind(e._assertThisInitialized(a)),a._handleAttachmentUpdate=a._handleAttachmentUpdate.bind(e._assertThisInitialized(a)),a._handleAttachmentDelete=a._handleAttachmentDelete.bind(e._assertThisInitialized(a)),a}e._inheritsLoose(s,t);var i=s.prototype;return i.initialize=function(){const{messages:e,messagesCommon:t}=this;this.own([_.init(this,"viewModel",(e=>{this._featureForm.viewModel=e?e.featureFormViewModel:null,this._attachments.viewModel=e?e.attachmentsViewModel:null,this._featureTemplates.viewModel=e?e.featureTemplatesViewModel:null,this._spinner.viewModel=e?e.spinnerViewModel:null})),_.init(this,"view",((e,t)=>{const s=`editor-${this.id}-spinner`;t&&t.ui.remove(this._spinner,s),e&&e.ui.add(this._spinner,{key:s,position:"manual"})})),_.on(this,"viewModel.sketchViewModel","create",(()=>{this.scheduleRender()})),_.on(this,"viewModel.activeWorkflow","cancel-request",(({controller:s})=>{this._prompt={title:e.cancelRequestTitle,message:e.cancelRequestWarningMessage,options:[{label:t.form.no,type:"neutral",action:()=>(s.deny(),this._prompt=null)},{label:t.form.yes,type:"negative",action:()=>{s.allow(),this._prompt=null}}]},this.scheduleRender()})),_.init(this,"supportingWidgetDefaults",(e=>{e&&(this._featureForm.set(e.featureForm),this._attachments.set(e.attachments),this._featureTemplates.set(e.featureTemplates),this.viewModel.sketchViewModel.set(e.sketch))})),_.watch(this,"_attachments.error",(s=>{s&&(this._prompt={title:e.errorWarningTitle,message:s.message,options:[{label:t.form.ok,type:"neutral",action:()=>{this._prompt=null}}]})})),_.watch(this,"viewModel.failures",(t=>{if(!t)return;const[{error:s,retry:i,cancel:a}]=t;this._prompt={title:e.errorWarningTitle,message:p.substitute(e.errorWarningMessageTemplate,{errorMessage:s.message}),options:[{label:e.retry,type:"positive",action:()=>{i(),this._prompt=null}},{label:e.ignore,type:"neutral",action:()=>(a(),this._prompt=null)}]}})),_.watch(this,"viewModel.state",(e=>{"awaiting-update-feature-candidate"===e&&(this._candidateCommitted=!1)})),_.watch(this,["_attachments.selectedFile","_attachments.submitting"],(()=>this.scheduleRender())),_.whenNot(this,"viewModel.activeWorkflow",(()=>this._featureTemplates.filterText=""))])},i.destroy=function(){this._attachments.destroy(),this._featureForm.destroy(),this._featureTemplates.destroy()},i.startCreateWorkflowAtFeatureTypeSelection=function(){return this.viewModel.startCreateWorkflowAtFeatureTypeSelection()},i.startCreateWorkflowAtFeatureCreation=function(e){return this.viewModel.startCreateWorkflowAtFeatureCreation(e)},i.startCreateWorkflowAtFeatureEdit=function(e){return this.viewModel.startCreateWorkflowAtFeatureEdit(e)},i.startUpdateWorkflowAtFeatureSelection=function(){return this.viewModel.startUpdateWorkflowAtFeatureSelection()},i.startUpdateWorkflowAtMultipleFeatureSelection=function(e){return this.viewModel.startUpdateWorkflowAtMultipleFeatureSelection(e)},i.startUpdateWorkflowAtFeatureEdit=function(e){return this.viewModel.startUpdateWorkflowAtFeatureEdit(e)},i.deleteFeatureFromWorkflow=function(){return this.viewModel.deleteFeatureFromWorkflow()},i.cancelWorkflow=function(e){return this.viewModel.cancelWorkflow(e)},i.render=function(){const{_attachments:e,viewModel:t}=this;if(!t)return k.jsx("div",{class:j});const{state:s}=t,i=this._prompt?k.jsx("div",{class:se,key:"overlay"},this.renderPrompt({message:this._prompt.message,title:this._prompt.title,options:this._prompt.options})):null;return k.jsx("div",{class:j},t.syncing||e.submitting?this.renderProgressBar():null,"disabled"===s?null:"ready"===s?this.renderLanding():"awaiting-feature-creation-info"===s?this.renderTemplates():"editing-new-feature"===s||"editing-existing-feature"===s?this.renderAttributeEditing():"awaiting-feature-to-update"===s?this.renderFeatureUpdating():"awaiting-update-feature-candidate"===s?this.renderFeatureList():"awaiting-feature-to-create"===s?this.renderFeatureCreation():"adding-attachment"===s?this.renderAttachmentAdding():"editing-attachment"===s?this.renderAttachmentEditing():null,i)},i.renderTemplates=function(){return k.jsx("div",{class:S,key:"wrapper"},this.renderHeader(this.messages.selectTemplate,!0),k.jsx("div",{key:"content",class:H},this._featureTemplates.render()))},i.renderAttributeEditing=function(){const{activeWorkflow:e,featureFormViewModel:t}=this.viewModel,s=e.data.edits.feature,i="update"===e.type&&!e.data.edits.modified||t.inputFields.length>0&&!t.valid,{messages:a,messagesCommon:r}=this,n="create"===e.type?r.add:r.update,l=[{label:n,type:"primary",disabled:i,clickHandler:this._handleSave}];let o=!1;"update"===e.type&&(e.data.editableItem.hasAttachments&&(o=!0),e.data.editableItem.supports.indexOf("delete")>-1&&l.push({label:r.delete,type:"tertiary",clickHandler:this._handleDelete}));const d=this._getLabel(s);return k.jsx("div",{class:S,key:"wrapper"},this.renderHeader(d,!0),k.jsx("div",{key:"content",class:this.classes(H,E)},k.jsx("div",{class:D},t.inputFields.length>0?this._featureForm.render():this.renderMessage(p.substitute(a.clickToFinishTemplate,{button:n})),o?k.jsx("div",{key:"attachments"},k.jsx("div",null,a.attachments),this._attachments.render()):null)),this.renderControls(l))},i.renderAttachmentAdding=function(){const{_attachments:e,messages:t,messagesCommon:s}=this,i=[{label:e.submitting?s.cancel:s.add,disabled:e.submitting||!e.selectedFile,type:"primary",clickHandler:this._handleAttachmentAdd}];return k.jsx("div",{class:S,key:"wrapper"},this.renderHeader(t.addAttachment,!0,e.submitting),k.jsx("div",{key:"content",class:this.classes(H,E)},e.render()),this.renderControls(i))},i.renderAttachmentEditing=function(){const{_attachments:e,messages:t,messagesCommon:s}=this,i=[{label:s.update,disabled:e.submitting||!e.selectedFile,type:"primary",clickHandler:this._handleAttachmentUpdate},{label:s.delete,disabled:e.submitting,type:"tertiary",clickHandler:this._handleAttachmentDelete}];return k.jsx("div",{class:S,key:"wrapper"},this.renderHeader(t.editAttachment,!0,e.submitting),k.jsx("div",{key:"content",class:this.classes(H,E)},e.render()),this.renderControls(i))},i.renderFeatureUpdating=function(){const{messages:e}=this;return k.jsx("div",{class:S,key:"wrapper"},this.renderHeader(e.selectFeature,!0),k.jsx("div",{key:"content",class:this.classes(H,E)},this.renderMessage(e.selectFeatureToEdit)))},i.renderMessage=function(e){return k.jsx("div",{class:U},e)},i.renderFeatureCreation=function(){const{messages:e,viewModel:t}=this,s=t.sketchViewModel,i=t.activeWorkflow.data.creationInfo.layer,a=s.canUndo()&&s.createGraphic?s.createGraphic:null,r=this._getSketchingTip(i.geometryType,a);return k.jsx("div",{class:S,key:"wrapper"},this.renderHeader(e.placeFeature,!0),k.jsx("div",{key:"content",class:this.classes(H,E)},this.renderMessage(r)))},i.renderControls=function(e){return k.jsx("div",{class:B,key:"controls"},e.map((({disabled:e=!1,label:t,type:s,clickHandler:i},a)=>this.renderButton({label:t,class:this.classes(te,le,"secondary"===s?de:"tertiary"===s?ce:null,e?oe:null),disabled:e,clickHandler:i,key:a}))))},i.renderPrompt=function({title:e,message:t,options:s=[]}){return k.jsx("div",{class:V,role:"alert"},k.jsx("div",{class:R},k.jsx("span",{class:re,"aria-hidden":"true"}),k.jsx("h4",{class:this.classes(ue,K)},e)),k.jsx("div",{class:q},t),k.jsx("div",{class:$}),s.map((({label:e,action:t,type:s},i)=>{const a=0===i;return k.jsx("div",{afterCreate:a?pe:null,class:this.classes(G,a?N:null,"positive"===s?Q:"negative"===s?J:null),key:i,onclick:t,onkeydown:e=>{const s=u.eventKey(e);"Enter"!==s&&" "!==s||(e.preventDefault(),t.call(null))},tabIndex:0,role:"button"},e)})))},i.renderProgressBar=function(){return k.jsx("div",{class:this.classes(P),key:"progress-bar"})},i.renderButton=function(e){return k.jsx("button",{class:e.class,disabled:e.disabled,key:e.key,onclick:e.clickHandler,type:"button"},e.label)},i.renderHeader=function(e,t=!1,s=!1){const{messagesCommon:i}=this;return k.jsx("header",{class:I,key:"header"},t?k.jsx("div",{"aria-label":i.back,class:this.classes(O,he,s?oe:null),key:"back-button","data-prevent-back":s,onclick:this._handleHeaderClickOrKeyDown,onkeydown:this._handleHeaderClickOrKeyDown,role:"button",tabIndex:0,title:i.back},k.jsx("span",{"aria-hidden":"true",class:f.isRTL()?ie:ae})):null,k.jsx("h4",{class:this.classes(L,ue)},e))},i.renderLanding=function(){const{messages:e}=this,{allowedWorkflows:t,canCreate:s,canUpdate:i}=this.viewModel,a=f.isRTL()?ae:ie;return k.jsx("div",{class:S,key:"wrapper"},this.renderHeader(e.widgetLabel),k.jsx("div",{key:"content",class:H,role:"group"},k.jsx("div",{class:z,key:"mode-selection"},t.indexOf("update")>-1?k.jsx("div",{"aria-disabled":i?"false":"true",class:this.classes(X,i?null:Y),key:"update",onclick:this._handleEdit,onkeydown:this._handleEdit,role:"button",tabIndex:i?0:-1},k.jsx("span",{class:Z},e.editFeature),k.jsx("span",{"aria-hidden":"true",class:this.classes(ee,a)})):null,t.indexOf("create")>-1?k.jsx("div",{class:this.classes(X,s?null:Y),key:"create",onclick:this._handleAdd,onkeydown:this._handleAdd,role:"button",tabIndex:s?0:-1},k.jsx("span",{class:Z},e.addFeature),k.jsx("span",{"aria-hidden":"true",class:this.classes(ee,a)})):null)))},i.renderFeatureList=function(){const{messages:e,messagesTemplates:t,viewModel:{editableItems:s,activeWorkflow:i}}=this,a=i.data.candidates,r=p.substitute(e.multipleFeaturesTemplate,{total:a.length}),n=new Map;a.map((e=>({label:this._getLabel(e),id:e.attributes[e.layer.objectIdField],data:e}))).filter((e=>{const{label:t,data:s}=e,i=this._filterText.toLowerCase(),{title:a}=s.layer;return this.viewModel.editableItems.find((e=>e.layer===s.layer)).supports.indexOf("update")>-1&&(!i||t.toLowerCase().indexOf(i)>-1||a.toLowerCase().indexOf(i)>-1)})).forEach((e=>{const t=e.data.layer;n.has(t)?n.get(t).items.push(e):n.set(t,{id:`${t.id}`,label:t.title,items:[e]})}));const l=s.filter((({layer:e})=>n.has(e))).map((({layer:e})=>n.get(e))).toArray();return k.jsx("div",{class:S,key:"wrapper"},this.renderHeader(r,!0),k.jsx("div",{key:"content",class:this.classes(H,E)},T.ItemList({id:this.id,filterText:this._filterText,items:l,messages:{filterPlaceholder:t.filterPlaceholder,noItems:t.noItems,noMatches:t.noMatches},onItemMouseEnter:({data:e})=>this._setCandidateFeature(e),onItemMouseLeave:()=>this._setCandidateFeature(null),onItemSelect:({data:e})=>this._setCandidateFeature(e,!0),onFilterChange:e=>this._filterText=e})))},i._getSketchingTip=function(e,t){const{messages:s}=this;if("point"===e)return s.tips.clickToAddPoint;if("polygon"===e||"polyline"===e){if(!t)return s.tips.clickToStart;const i=t.geometry,a="polygon"===e?"rings":"paths",[r]=i[a];return"polygon"===e&&r<4?s.tips.clickToContinue:s.tips.clickToContinueThenDoubleClickToEnd}return s.tips.clickToAddFeature},i._getLabel=function(e){const t=e.layer,{objectIdField:s}=t,{attributes:i}=e,a=h.getDisplayFieldName(t);return a&&i[a]&&`${i[a]}`||p.substitute(this.messages.untitledFeatureTemplate,{id:i[s]})},i._handleDelete=function(){const{messages:e,messagesCommon:t}=this;this._prompt={title:e.deleteWarningTitle,message:e.deleteWarningMessage,options:[{label:e.keepFeature,type:"neutral",action:()=>this._prompt=null},{label:t.delete,type:"positive",action:()=>{this.viewModel.deleteFeatureFromWorkflow(),this._prompt=null}}]}},i._handleSave=function(){this.viewModel.activeWorkflow.commit()},i._handleAttachmentAdd=function(){const{_attachments:e}=this,{activeWorkflow:t}=this.viewModel;e.addAttachment().then((()=>t.previous()))},i._handleAttachmentUpdate=function(){const{_attachments:e}=this,{activeWorkflow:t}=this.viewModel;e.updateAttachment().then((()=>t.previous()))},i._handleAttachmentDelete=function(){const{messages:e,messagesCommon:t}=this;this._prompt={title:e.deleteAttachmentWarningTitle,message:e.deleteAttachmentWarningMessage,options:[{label:e.keepAttachment,type:"neutral",action:()=>this._prompt=null},{label:t.delete,type:"positive",action:()=>{const{_attachments:e}=this,{activeWorkflow:t}=this.viewModel;e.deleteAttachment(e.viewModel.activeAttachmentInfo).then((()=>{t.previous(),this._prompt=null}))}}]}},i._handleAdd=function(){this.viewModel.canCreate&&this.viewModel.startCreateWorkflowAtFeatureTypeSelection()},i._handleEdit=function(){this.viewModel.canUpdate&&this.viewModel.startUpdateWorkflowAtFeatureSelection()},i._handleDone=function(){this.viewModel.cancelWorkflow({force:!0})},i._handleBack=function(){const{messages:e}=this,{activeWorkflow:t}=this.viewModel,{stepId:s,data:i,type:a}=t,r=()=>{t.hasPreviousStep?t.previous():this.viewModel.cancelWorkflow({force:!0})};if("editing-new-feature"===s||"editing-existing-feature"===s&&i.edits.modified){const t="create"===a?e.cancelAddWarningMessage:e.cancelEditWarningMessage,s="create"===a?e.cancelAddTitle:e.cancelEditTitle,i="create"===a?e.continueAdding:e.continueEditing,n="create"===a?e.discardFeature:e.discardEdits;this._prompt={title:s,message:t,options:[{label:i,type:"neutral",action:()=>this._prompt=null},{label:n,type:"negative",action:()=>{r(),this._prompt=null}}]}}else r()},s}(w.HandleOwnerMixin(M));return t.__decorate([r.property()],me.prototype,"_attachments",void 0),t.__decorate([n.aliasOf("viewModel.activeWorkflow")],me.prototype,"activeWorkflow",void 0),t.__decorate([n.aliasOf("viewModel.allowedWorkflows")],me.prototype,"allowedWorkflows",void 0),t.__decorate([r.property()],me.prototype,"iconClass",void 0),t.__decorate([r.property({aliasOf:{source:"messages.widgetLabel",overridable:!0}})],me.prototype,"label",void 0),t.__decorate([n.aliasOf("viewModel.layerInfos")],me.prototype,"layerInfos",void 0),t.__decorate([r.property(),y.renderable(),v.messageBundle("esri/widgets/Editor/t9n/Editor")],me.prototype,"messages",void 0),t.__decorate([r.property(),y.renderable(),v.messageBundle("esri/t9n/common")],me.prototype,"messagesCommon",void 0),t.__decorate([r.property(),y.renderable(),v.messageBundle("esri/widgets/FeatureTemplates/t9n/FeatureTemplates")],me.prototype,"messagesTemplates",void 0),t.__decorate([r.property()],me.prototype,"supportingWidgetDefaults",void 0),t.__decorate([n.aliasOf("viewModel.view")],me.prototype,"view",void 0),t.__decorate([r.property(),y.renderable(["viewModel.canCreate","viewModel.canUpdate","viewModel.failures","viewModel.state","viewModel.syncing","viewModel.activeWorkflow.data.edits.modified"]),b.vmEvent(["workflow-cancel","workflow-commit"])],me.prototype,"viewModel",void 0),t.__decorate([g.accessibleHandler()],me.prototype,"_handleDelete",null),t.__decorate([g.accessibleHandler()],me.prototype,"_handleAttachmentAdd",null),t.__decorate([g.accessibleHandler()],me.prototype,"_handleAttachmentUpdate",null),t.__decorate([g.accessibleHandler()],me.prototype,"_handleAttachmentDelete",null),t.__decorate([g.accessibleHandler()],me.prototype,"_handleAdd",null),t.__decorate([g.accessibleHandler()],me.prototype,"_handleEdit",null),t.__decorate([g.accessibleHandler()],me.prototype,"_handleDone",null),t.__decorate([g.accessibleHandler()],me.prototype,"_handleBack",null),me=t.__decorate([l.subclass("esri.widgets.Editor")],me),me}));

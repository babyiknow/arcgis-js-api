/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["../chunks/_rollupPluginBabelHelpers","../chunks/tslib.es6","../core/has","../core/Logger","../core/accessorSupport/decorators/property","../core/accessorSupport/decorators/aliasOf","../core/accessorSupport/decorators/cast","../core/accessorSupport/decorators/subclass","../core/urlUtils","../core/uuid","../portal/support/resourceExtension","../core/Collection","../intl/substitute","../intl","./support/widgetUtils","./support/decorators/messageBundle","./support/decorators/renderable","./support/decorators/vmEvent","../chunks/index","./Widget","./Sketch/SketchViewModel","./support/Selector"],(function(e,t,o,i,s,n,l,a,r,c,d,u,h,p,v,_,f,b,y,g,w,S){"use strict";const m="esri-sketch",C="esri-sketch--vertical",T="esri-sketch__panel",k="esri-sketch__info-panel",M="esri-sketch__section",O="esri-sketch__tool-section",B="esri-sketch__info-section",x="esri-sketch__info-count-section",j="esri-sketch__feature-count-badge",I="esri-sketch__feature-count-number",R="esri-sketch__button",P="esri-sketch__button--selected",E="esri-icon-map-pin",G="esri-icon-polygon",L="esri-icon-polyline",U="esri-icon-radio-unchecked",D="esri-icon-checkbox-unchecked",z="esri-icon-cursor",F="esri-icon-trash",V="esri-icon-undo",A="esri-icon-redo",q="esri-icon-cursor-marquee",H="esri-icon-lasso",W="esri-widget",J="esri-icon-edit",K="esri-disabled",N={createTools:{point:!0,polyline:!0,polygon:!0,rectangle:!0,circle:!0},selectionTools:{"rectangle-selection":!0,"lasso-selection":!0},undoRedoMenu:!0};let Q=function(t){function o(o,i){var s;return(s=t.call(this,o,i)||this)._activeCreateOptions=null,s._activeSelectionInfo=null,s._selector=new S,s.availableCreateTools=["point","polyline","polygon","rectangle","circle"],s.createGraphic=null,s.creationMode="continuous",s.defaultCreateOptions=null,s.defaultUpdateOptions=null,s.iconClass=J,s.label=void 0,s.layer=null,s.messages=null,s.updateGraphics=new u,s.view=null,s.viewModel=new w,s.visibleElements={...N},s._activateCreateTool=s._activateCreateTool.bind(e._assertThisInitialized(s)),s}e._inheritsLoose(o,t);var i=o.prototype;return i.initialize=function(){const{view:e}=this;this._selector.view=e,this.own([this.viewModel.on("create",(()=>this.scheduleRender())),this.viewModel.on("update",(()=>this.scheduleRender())),this.viewModel.on("create",(e=>this._onCreateOperation(e))),this.viewModel.on("delete",(e=>this.emit("delete",e))),this.viewModel.on("undo",(()=>this.scheduleRender())),this.viewModel.on("redo",(()=>this.scheduleRender())),this.viewModel.watch("view",(e=>this._selector.set({view:e}))),this.viewModel.watch("state",(()=>this.notifyChange("state")))])},i.castVisibleElements=function(e){return{...N,...e,createTools:{...N.createTools,...null==e?void 0:e.createTools},selectionTools:{...N.selectionTools,...null==e?void 0:e.selectionTools}}},i.create=function(e,t){this._activeCreateOptions=t||null,this.viewModel.create(e,t)},i.update=function(e,t){return this.viewModel.update(e,t)},i.complete=function(){},i.cancel=function(){this._cancelSelectionOperation(),this.viewModel.cancel()},i.undo=function(){},i.redo=function(){},i.delete=function(){},i.render=function(){const{label:e,layout:t,viewModel:{state:o}}=this;return y.jsx("div",{"aria-label":e,class:this.classes(m,W,{[K]:"disabled"===o,[C]:"vertical"===t})},y.jsx("div",{class:T},this.renderTopPanelContents()),y.jsx("div",{class:this.classes(T,k)},this.renderInfoPanelContents()))},i.renderTopPanelContents=function(){const e=this.classes(M,O),{availableCreateTools:t,visibleElements:o}=this;return[y.jsx("div",{key:"selection-button-container",class:e},this.renderSelectionTools()),t&&t.length?y.jsx("div",{class:e},this.renderDrawButtons()):null,o.undoRedoMenu?y.jsx("div",{key:"menu-button-container",class:e},this.renderMenuButtons()):null]},i.renderInfoPanelContents=function(){if(this.updateGraphics.length)return[y.jsx("div",{class:this.classes(M,B,x),key:"feature-count-container"},this.renderFeatureCount()),y.jsx("div",{class:this.classes(M,B),key:"delete-button-container"},this.renderDeleteButton())]},i.renderFeatureCount=function(){const{layout:e,messages:t,updateGraphics:{length:o}}=this,i=h.substitute(1===o?t.featureCount:t.featuresCount,{count:o});return y.jsx("div",{class:j,"aria-label":i},y.jsx("span",{class:I},"vertical"===e?o:i))},i.renderDeleteButton=function(){const e=this.messages.deleteFeature;return y.jsx("button",{"aria-label":e,bind:this,class:this.classes(R,F),onclick:this.delete,title:e,type:"button"})},i.renderSelectionTools=function(){return[this.renderDefaultSelectionButton(),this.renderRectangleSelectionButton(),this.renderLassoSelectionButton()]},i.renderDefaultSelectionButton=function(){if(!this.viewModel.updateOnGraphicClick)return;const e=this.messages.selectFeature;return y.jsx("button",{"aria-label":e,bind:this,class:this.classes(R,z,{[P]:"ready"===this.state}),onclick:this.cancel,title:e})},i.renderRectangleSelectionButton=function(){var e,t;if("2d"!==(null==(e=this.view)?void 0:e.type)||!this.visibleElements.selectionTools["rectangle-selection"])return;const o=this.messages.selectRectangle;return y.jsx("button",{"aria-label":o,bind:this,class:this.classes(R,q,{[P]:"rectangle-selection"===(null==(t=this._activeSelectionInfo)?void 0:t.tool)}),onclick:this._activateRectangleSelectTool,title:o})},i.renderLassoSelectionButton=function(){var e,t;if("2d"!==(null==(e=this.view)?void 0:e.type)||!this.visibleElements.selectionTools["lasso-selection"])return;const o=this.messages.selectLasso;return y.jsx("button",{"aria-label":o,bind:this,class:this.classes(R,H,{[P]:"lasso-selection"===(null==(t=this._activeSelectionInfo)?void 0:t.tool)}),onclick:this._activateLassoSelectTool,title:o})},i.renderDrawButtons=function(){const e=this.visibleElements.createTools;return this.availableCreateTools.map((t=>"point"===t&&e.point?this.renderPointButton():"polyline"===t&&e.polyline?this.renderPolylineButton():"polygon"===t&&e.polygon?this.renderPolygonButton():"rectangle"===t&&e.rectangle?this.renderRectangleButton():"circle"===t&&e.circle?this.renderCircleButton():void 0))},i.renderPointButton=function(){const e="point",t=this.messages.drawPoint,o=[R,E];return this.activeTool===e&&o.push(P),y.jsx("button",{"aria-label":t,bind:this,class:this.classes(o),"data-tool-name":e,onclick:this._activateCreateTool,title:t,type:"button"})},i.renderPolygonButton=function(){const e="polygon",t=this.messages.drawPolygon,o=[R,G];return this.activeTool===e&&o.push(P),y.jsx("button",{"aria-label":t,bind:this,class:this.classes(o),"data-tool-name":e,onclick:this._activateCreateTool,title:t,type:"button"})},i.renderPolylineButton=function(){const e="polyline",t=this.messages.drawPolyline,o=[R,L];return this.activeTool===e&&o.push(P),y.jsx("button",{"aria-label":t,bind:this,class:this.classes(o),"data-tool-name":e,onclick:this._activateCreateTool,title:t,type:"button"})},i.renderCircleButton=function(){const e="circle",t=this.messages.drawCircle,o=[R,U];return this.activeTool===e&&o.push(P),y.jsx("button",{"aria-label":t,bind:this,class:this.classes(o),"data-tool-name":e,onclick:this._activateCreateTool,title:t,type:"button"})},i.renderRectangleButton=function(){const e="rectangle",t=this.messages.drawRectangle,o=[R,D];return this.activeTool===e&&o.push(P),y.jsx("button",{"aria-label":t,bind:this,class:this.classes(o),"data-tool-name":e,onclick:this._activateCreateTool,title:t,type:"button"})},i.renderMenuButtons=function(){return[this.renderUndoButton(),this.renderRedoButton()]},i.renderUndoButton=function(){const e=this.messages.undo,t=!this.viewModel.canUndo(),o=v.isRTL()?A:V;return y.jsx("button",{"aria-label":e,bind:this,class:this.classes(R,o),disabled:t,onclick:this.undo,title:e,type:"button"})},i.renderRedoButton=function(){const e=this.messages.redo,t=!this.viewModel.canRedo(),o=v.isRTL()?V:A;return y.jsx("button",{"aria-label":e,bind:this,class:this.classes(R,o),disabled:t,onclick:this.redo,title:e,type:"button"})},i._cancelSelectionOperation=function(){var e,t;null==(e=this._activeSelectionInfo)||null==(t=e.operation)||t.cancel(),this._activeSelectionInfo=null,this._selector.candidates=null},i._activateCreateTool=function(e){const t=e.target.getAttribute("data-tool-name");this.activeTool!==t?(this._activeSelectionInfo&&this._cancelSelectionOperation(),this.create(t)):this.cancel()},i._onCreateOperation=function(e){if("complete"!==e.state)return;const{creationMode:t}=this,{type:o}=e;if("create"===o){const{tool:o,graphic:i}=e,s=this._activeCreateOptions;this._activeCreateOptions=null,"continuous"===t?this.create(o,s):"update"===t&&this.update([i])}},i._onSelectionOperationComplete=function(e){const{viewModel:{defaultUpdateOptions:t}}=this,{selection:o}=e;if(this._activeSelectionInfo=null,!e.aborted&&o.length){const e=t.tool,i=o.length>1&&"reshape"===e?"transform":e;this.update(o,{...t,tool:i})}this.notifyChange("state")},i._activateRectangleSelectTool=function(){if(this._activeSelectionInfo){const e=this._activeSelectionInfo.tool;if(this._cancelSelectionOperation(),"rectangle-selection"===e)return}else"active"===this.state&&this.cancel();this._selector.candidates=this._getSelectionCandidates();const e=this._selector.draw({tool:"rectangle"});e.once("complete",(e=>this._onSelectionOperationComplete(e))),this._activeSelectionInfo={tool:"rectangle-selection",operation:e}},i._activateLassoSelectTool=function(){if(this._activeSelectionInfo){const e=this._activeSelectionInfo.tool;if(this._cancelSelectionOperation(),"lasso-selection"===e)return}else"active"===this.state&&this.cancel();this._selector.candidates=this._getSelectionCandidates();const e=this._selector.draw({tool:"polygon",createOptions:{mode:"freehand"}});e.once("complete",(e=>this._onSelectionOperationComplete(e))),this._activeSelectionInfo={tool:"lasso-selection",operation:e}},i._getSelectionCandidates=function(){var e,t;return(null==(e=this.layer)||null==(t=e.graphics)?void 0:t.toArray())||[]},e._createClass(o,[{key:"activeTool",get:function(){var e;return(null==(e=this._activeSelectionInfo)?void 0:e.tool)||this.viewModel.activeTool}},{key:"layout",set:function(e){"vertical"!==e&&(e="horizontal"),this._set("layout",e)}},{key:"state",get:function(){return this._activeSelectionInfo?"active":this.viewModel.state}}]),o}(g);return t.__decorate([s.property()],Q.prototype,"_activeSelectionInfo",void 0),t.__decorate([s.property({dependsOn:["_activeSelectionInfo","viewModel.activeTool"]})],Q.prototype,"activeTool",null),t.__decorate([s.property({cast:e=>{if(!e||!e.length)return null;const t=new Set(["point","polyline","polygon","rectangle","circle"]);return e.filter((e=>t.has(e)))}}),f.renderable()],Q.prototype,"availableCreateTools",void 0),t.__decorate([n.aliasOf("viewModel.createGraphic"),f.renderable()],Q.prototype,"createGraphic",void 0),t.__decorate([s.property()],Q.prototype,"creationMode",void 0),t.__decorate([n.aliasOf("viewModel.defaultCreateOptions"),f.renderable()],Q.prototype,"defaultCreateOptions",void 0),t.__decorate([n.aliasOf("viewModel.defaultUpdateOptions"),f.renderable()],Q.prototype,"defaultUpdateOptions",void 0),t.__decorate([s.property()],Q.prototype,"iconClass",void 0),t.__decorate([s.property({aliasOf:{source:"messages.widgetLabel",overridable:!0}})],Q.prototype,"label",void 0),t.__decorate([n.aliasOf("viewModel.layer"),f.renderable()],Q.prototype,"layer",void 0),t.__decorate([s.property({value:"horizontal"}),f.renderable()],Q.prototype,"layout",null),t.__decorate([s.property(),f.renderable(),_.messageBundle("esri/widgets/Sketch/t9n/Sketch")],Q.prototype,"messages",void 0),t.__decorate([s.property({dependsOn:["_activeSelectionInfo","viewModel.state"]}),f.renderable()],Q.prototype,"state",null),t.__decorate([n.aliasOf("viewModel.updateGraphics"),f.renderable(["updateGraphics","updateGraphics.length"])],Q.prototype,"updateGraphics",void 0),t.__decorate([n.aliasOf("viewModel.view"),f.renderable()],Q.prototype,"view",void 0),t.__decorate([s.property(),f.renderable("viewModel.state"),b.vmEvent(["create","update","undo","redo"])],Q.prototype,"viewModel",void 0),t.__decorate([s.property(),f.renderable()],Q.prototype,"visibleElements",void 0),t.__decorate([l.cast("visibleElements")],Q.prototype,"castVisibleElements",null),t.__decorate([n.aliasOf("viewModel.complete")],Q.prototype,"complete",null),t.__decorate([n.aliasOf("viewModel.undo")],Q.prototype,"undo",null),t.__decorate([n.aliasOf("viewModel.redo")],Q.prototype,"redo",null),t.__decorate([n.aliasOf("viewModel.delete")],Q.prototype,"delete",null),Q=t.__decorate([a.subclass("esri.widgets.Sketch")],Q),Q}));

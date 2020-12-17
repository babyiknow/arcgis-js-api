/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["../chunks/_rollupPluginBabelHelpers","../chunks/tslib.es6","../core/has","../core/Logger","../core/accessorSupport/decorators/property","../core/accessorSupport/decorators/aliasOf","../core/accessorSupport/decorators/cast","../core/deprecate","../core/accessorSupport/decorators/subclass","../core/urlUtils","../core/uuid","../portal/support/resourceExtension","../core/events","../core/Handles","../core/watchUtils","../webdoc/support/Thumbnail","./support/widgetUtils","./support/decorators/messageBundle","./support/decorators/renderable","./support/decorators/vmEvent","../chunks/index","./Widget","../chunks/sortable.esm","./Bookmarks/BookmarksUserState","./Bookmarks/BookmarksViewModel","./FeatureTable/Grid/support/ButtonMenuItem","./FeatureTable/Grid/support/ButtonMenu"],(function(e,t,o,s,r,i,n,a,d,l,u,k,c,m,h,_,p,b,f,v,g,B,y,E,x,I,S){"use strict";const w="data-bookmark-uid",A="esri-bookmarks esri-widget--panel",j="esri-bookmarks__loader-container",U="esri-bookmarks__loader",C="esri-bookmarks__list",M="esri-bookmarks__list--sortable",O="esri-bookmarks__bookmark",N="esri-bookmarks__bookmark-button",T="esri-bookmarks__bookmark-image-container",F="esri-bookmarks__bookmark-edit-button",H="esri-bookmarks_bookmark-drag-handle",R="esri-bookmarks_bookmark-drag-handle-icon",D="esri-bookmarks__bookmark-icon",L="esri-bookmarks__image",q="esri-bookmarks__bookmark-name",P="esri-bookmarks__bookmark--active",V="esri-widget__content--empty",z="esri-bookmarks__no-bookmarks-heading",K="esri-widget__no-bookmark-icon",G="esri-bookmarks__no-bookmarks-description",W="esri-bookmarks__adding-bookmark",$="esri-bookmarks__add-bookmark",J="esri-bookmarks__add-bookmark-button",Q="esri-bookmarks__add-bookmark-icon",X="esri-bookmarks__authoring-card",Y="esri-bookmarks__authoring-container",Z="esri-bookmarks__authoring-form",ee="esri-bookmarks__authoring-label",te="esri-bookmarks__authoring-actions",oe="esri-bookmarks__authoring-input--invalid",se="esri-bookmarks__authoring-delete-button",re="esri-bookmarks__authoring-cancel-button",ie="esri-widget",ne="esri-widget--disabled",ae="esri-button",de="esri-button--tertiary",le="esri-input",ue="esri-icon-handle-vertical",ke="esri-icon-plus",ce="esri-icon-edit",me="esri-icon-handle-horizontal",he="esri-icon-refresh",_e="esri-icon-link",pe="esri-icon-erase",be="esri-icon-bookmark",fe="esri-widget__heading",ve="esri-icon-loading-indicator",ge="esri-rotating",Be={addBookmark:!0,thumbnail:!0},ye=/^https:\/\/.*/i,Ee="esri.widgets.Bookmarks",xe=s.getLogger(Ee);let Ie=function(t){function o(e,o){var s;return(s=t.call(this,e,o)||this)._handles=new m,s._addInputNode=null,s._editInputNode=null,s._urlEditInputNode=null,s._addBookmarkButtonNode=null,s._focusAddBookmarkButton=!1,s._focusEditInputBox=!1,s._focusAddInputBox=!1,s._focusUrlEditInputBox=!1,s._sortable=null,s._sortableNode=null,s._focusSortUid=null,s._selectedSortUid=null,s._sortableSavedItems=null,s._userState=null,s.defaultCreateOptions=null,s.defaultEditOptions=null,s.bookmarks=null,s.disabled=!1,s.editingEnabled=!1,s.goToOverride=null,s.iconClass=be,s.label=void 0,s.messages=null,s.messagesCommon=null,s.messagesUnits=null,s.view=null,s.viewModel=new x,s.visibleElements={...Be},s}e._inheritsLoose(o,t);var s=o.prototype;return s.initialize=function(){this.own([h.init(this,"viewModel.bookmarks",(()=>this._bookmarksInitialized())),h.init(this,"editingEnabled",(()=>this._toggleSorting()))])},s.destroy=function(){this._destroySortable(),this._handles.destroy(),this._handles=null,this._editMenu.destroy()},s.castVisibleElements=function(e){return{...Be,...e}},s.endAddBookmark=function(){this._userState=null},s.goTo=function(e){return this.viewModel.goTo(e)},s.render=function(){const{state:e}=this.viewModel,t="loading"===e?this.renderLoading():this.renderBookmarks();return g.jsx("div",{class:this.classes(A,ie,{[ne]:this.disabled})},t)},s.startAddBookmark=function(){this._userState=new E({state:"add"}),this._focusAddInputBox=!0,this.scheduleRender()},s.renderLoading=function(){return g.jsx("div",{class:j,key:"loader"},g.jsx("div",{class:U}))},s.renderNoBookmarksContainer=function(){const{messages:e}=this;return g.jsx("div",{class:V,key:"no-bookmarks"},g.jsx("span",{"aria-hidden":"true",class:this.classes(K,be)}),g.jsx("h1",{class:this.classes(fe,z)},null==e?void 0:e.noBookmarksHeading),g.jsx("p",{class:G},null==e?void 0:e.noBookmarksDescription))},s.renderAddBookmarkLoading=function(){var e;return g.jsx("div",{key:"adding-bookmark",class:W},g.jsx("span",{"aria-hidden":"true",class:this.classes(ve,ge)}),null==(e=this.messages)?void 0:e.addingBookmark)},s.renderBookmarkItems=function(e){if(!e)return null;const{_userState:t,editingEnabled:o}=this;return e.map((e=>o&&e&&t&&("edit"===t.state||"edit-thumbnail"===t.state)&&t.bookmark===e?"edit-thumbnail"===t.state?this.renderEditingBookmarkUrl(t.editedBookmark):this.renderEditingBookmark(t.editedBookmark):this.renderBookmark(e))).toArray()},s.renderBookmarksContainer=function(e){var t;const{_userState:o,editingEnabled:s}=this,r="add"===(null==o?void 0:o.state),i=s&&!r?this.renderAddBookmarkButton():null,n=s?r&&o.loading?this.renderAddBookmarkLoading():"add"===(null==o?void 0:o.state)?this.renderAddingBookmark():null:null;return[g.jsx("ul",{key:"bookmark-list","aria-label":null==(t=this.messages)?void 0:t.widgetLabel,class:this.classes(C,{[M]:this.editingEnabled}),afterCreate:this._sortNodeCreated,afterRemoved:this._destroySortable,"data-node-ref":"_sortableNode",bind:this},this.renderBookmarkItems(e)),i,n]},s.renderAddBookmarkButton=function(){var e;return this.visibleElements.addBookmark?g.jsx("div",{key:"add-bookmark-item",class:$},g.jsx("button",{class:this.classes(ae,de,J),onclick:this.startAddBookmark,afterCreate:this._storeAddBookmarkButton,afterUpdate:this._storeAddBookmarkButton,"data-node-ref":"_addBookmarkButtonNode",bind:this,type:"button"},g.jsx("span",{"aria-hidden":"true",class:this.classes(Q,ke)}),null==(e=this.messages)?void 0:e.addBookmark)):null},s.renderBookmarks=function(){const{bookmarks:e}=this.viewModel,t=e&&e.filter(Boolean),o=t&&t.length,s=o||this.editingEnabled?this.renderBookmarksContainer(t):null;return[o?null:this.renderNoBookmarksContainer(),s]},s.renderEditContainer=function(e){const{messagesCommon:t}=this;return g.jsx("div",{key:"edit-container"},g.jsx("button",{title:null==t?void 0:t.edit,"aria-label":null==t?void 0:t.edit,"data-bookmark":e,onclick:this._showEditBookmarkForm,bind:this,class:F,type:"button"},g.jsx("span",{"aria-hidden":"true",class:ce})))},s.renderDragHandle=function(e){const{messagesCommon:t}=this,o={[w]:e.uid};return g.jsx("div",Object.assign({role:"button",tabIndex:0,key:"drag-handle",bind:this,class:H,onkeydown:this._dragHandleKeydown,afterCreate:this._focusDragHandle,afterUpdate:this._focusDragHandle,onblur:this._dragHandleBlur,"aria-pressed":this._selectedSortUid===e.uid?"true":"false","aria-label":null==t?void 0:t.dragHandleLabel,title:null==t?void 0:t.dragHandleTitle},o),g.jsx("span",{"aria-hidden":"true",class:this.classes(R,ue)}))},s.renderBookmarkImageIcon=function(){return g.jsx("span",{"aria-hidden":"true",class:this.classes(D,be)})},s.renderBookmarkImage=function(e){const{visibleElements:t}=this,{thumbnail:o}=e,s=o&&o.url||"";return t.thumbnail&&s?g.jsx("img",{src:s,alt:"",class:L}):null},s.renderBookmarkButton=function(e){const{messagesCommon:t}=this,{name:o}=e,s=o||(null==t?void 0:t.untitled),r=g.jsx("div",{class:T},this.renderBookmarkImage(e)||this.renderBookmarkImageIcon());return g.jsx("button",{key:"bookmark-button",class:N,bind:this,"data-bookmark":e,onclick:this._goToBookmark,type:"button"},r,g.jsx("span",{class:q},s))},s.renderBookmark=function(e){const{activeBookmark:t}=this.viewModel,o={[P]:t===e},s=this.editingEnabled?this.renderEditContainer(e):null,r={[w]:e.uid},i=this.editingEnabled?this.renderDragHandle(e):null;return g.jsx("li",Object.assign({key:e,class:this.classes(O,o)},r),i,this.renderBookmarkButton(e),s)},s.renderEditingBookmarkName=function(e){const{messages:t,_userState:o}=this,s="name-required"===o.validationState;return g.jsx("label",{class:ee},null==t?void 0:t.title,s?g.jsx("strong",null,null==t?void 0:t.invalidTitle):null,g.jsx("input",{required:!0,bind:this,class:this.classes(le,s?oe:null),type:"text",value:e.name,afterCreate:this._storeEditInput,afterUpdate:this._focusEditInput,"data-bookmark":e,"data-node-ref":"_editInputNode",placeholder:null==t?void 0:t.titlePlaceholder}))},s.renderEditingBookmarkUrlActions=function(){const{messagesCommon:e}=this;return g.jsx("div",{class:te},g.jsx("input",{type:"button",value:null==e?void 0:e.back,class:this.classes(ae,de),onclick:this._closeUrlEditBookmarkForm,bind:this}),g.jsx("input",{class:ae,type:"submit",value:null==e?void 0:e.add}))},s.renderEditingBookmarkActions=function(){const{messagesCommon:e}=this,{bookmark:t}=this._userState;return g.jsx("div",{class:te},g.jsx("input",{type:"button",value:null==e?void 0:e.delete,class:this.classes(ae,de,se),"data-bookmark":t,onclick:this._deleteBookmark,bind:this}),g.jsx("input",{type:"button",value:null==e?void 0:e.cancel,class:this.classes(ae,de),onclick:this._closeEditBookmarkForm,bind:this}),g.jsx("input",{class:ae,type:"submit",value:null==e?void 0:e.save}))},s.renderEditingBookmarkUrlInput=function(e){var t;const{messages:o,_userState:s}=this,r=null==(t=e.thumbnail)?void 0:t.url,i=ye.test(r)?r:null,n="absolute-url-required"===s.validationState;return g.jsx("label",{class:ee},n?g.jsx("strong",null,null==o?void 0:o.invalidImageUrl):null,g.jsx("input",{required:!0,bind:this,class:this.classes(le,n?oe:null),type:"text",value:i,afterCreate:this._storeUrlEditInput,afterUpdate:this._focusUrlEditInput,"data-bookmark":e,"data-node-ref":"_urlEditInputNode",title:null==o?void 0:o.imageUrlTooltip,placeholder:null==o?void 0:o.imageUrlPlaceholder}))},s.renderEditingBookmarkUrl=function(e){const t={[w]:e.uid};return g.jsx("li",Object.assign({key:"edit-bookmark-url-form",class:X},t),g.jsx("form",{class:Z,onsubmit:this._editBookmarkUrlSubmit,bind:this},this.renderEditingBookmarkUrlInput(e),this.renderEditingBookmarkUrlActions()))},s.renderEditingBookmark=function(e){const t={[w]:e.uid};return g.jsx("li",Object.assign({key:"edit-bookmark-form",class:X},t),g.jsx("form",{class:Z,onsubmit:this._editBookmarkSubmit,bind:this},g.jsx("div",{class:Y},g.jsx("div",{class:T},this.renderBookmarkImage(e),this._editMenu.render()),this.renderEditingBookmarkName(e)),this.renderEditingBookmarkActions()))},s.renderAddingBookmarkName=function(){const{_userState:e,messages:t}=this,o="name-required"===e.validationState;return g.jsx("label",{class:ee},null==t?void 0:t.title,o?g.jsx("strong",null,null==t?void 0:t.invalidTitle):null,g.jsx("input",{required:!0,bind:this,class:this.classes(le,o?oe:null),type:"text",afterCreate:this._storeAddInput,afterUpdate:this._focusAddInput,"data-node-ref":"_addInputNode",value:"",placeholder:null==t?void 0:t.titlePlaceholder}))},s.renderAddingBookmarkActions=function(){const{messagesCommon:e}=this;return g.jsx("div",{class:this.classes(te)},g.jsx("input",{type:"button",value:null==e?void 0:e.cancel,class:this.classes(ae,de,re),onclick:this._endAddBookmark.bind(this),bind:this}),g.jsx("input",{class:ae,type:"submit",value:null==e?void 0:e.add}))},s.renderAddingBookmark=function(){return g.jsx("div",{key:"add-bookmark-form",class:X},g.jsx("form",{class:Z,onsubmit:this._addBookmarkSubmit,bind:this},this.renderAddingBookmarkName(),this.renderAddingBookmarkActions()))},s._dragHandleBlur=function(){this._selectedSortUid=null,this.scheduleRender()},s._dragHandleKeydown=function(e){e.stopPropagation();const{_sortableSavedItems:t}=this,o=c.eventKey(e);if(-1===["ArrowDown","ArrowUp","Escape","Tab"," ","Enter"].indexOf(o))return;const{_sortable:s,_selectedSortUid:r}=this,i=s.toArray(),n=e.target.getAttribute(w),a=i.indexOf(n);if(" "===o||"Enter"===o){const e=r&&r===n;return this._selectedSortUid=e?null:n,this._sortableSavedItems=e?null:this._sortable.toArray(),void this.scheduleRender()}if("Tab"===o)return this._selectedSortUid=null,void this.scheduleRender();if("Escape"===o&&t)return this._selectedSortUid=null,this._updateSortItems(t,s,n),void this.scheduleRender();if(-1===a||!r)return;const d="ArrowUp"===o?a-1:a+1;var l,u,k;d>=i.length||d<=-1||(u=a,k=d,(l=i).splice(k,0,l.splice(u,1)[0]),this._updateSortItems(i,s,n))},s._updateSortItems=function(e,t,o){t.sort(e),this._sortBookmarks(t),this._focusSortUid=o,this._selectedSortUid=o},s._focusDragHandle=function(e){const{_focusSortUid:t}=this;if(!e||!t)return;e.getAttribute(w)===t&&(e.focus(),this._focusSortUid=null)},s._toggleSorting=function(){const{_sortable:e,_sortableNode:t,editingEnabled:o}=this;if(t)if(e)e.option("disabled",!o);else{const e=y.Sortable.create(t,{dataIdAttr:w,handle:`.${H}`,group:"bookmarks",disabled:!o,onSort:()=>this._sortBookmarks(e)});this._sortable=e}},s._sortNodeCreated=function(e){this._sortableNode=e,this._toggleSorting()},s._sortBookmarks=function(e){const{bookmarks:t}=this.viewModel;if(!t)return;const o=e.toArray();t.sort(((e,t)=>{const s=o.indexOf(e.uid),r=o.indexOf(t.uid);return s>r?1:s<r?-1:0}))},s._destroySortable=function(){const{_sortable:e}=this;e&&e.destroy(),this._sortable=null},s._endAddBookmark=function(){this._focusAddBookmarkButton=!0,this.endAddBookmark()},s._bookmarksInitialized=function(){const e="bookmarks-init",{_handles:t}=this;t.remove(e),t.add(h.on(this,"viewModel.bookmarks","change",(()=>this._bookmarksChanged())),e)},s._bookmarksChanged=function(){const e="bookmarks-change",{bookmarks:t}=this.viewModel,{_handles:o}=this;o.remove(e);const s=t.map((e=>h.watch(e,["active","name","thumbnail.url"],(()=>this.scheduleRender()))));o.add(s,e),this.scheduleRender()},s._showEditBookmarkForm=function(e){const t=e.currentTarget["data-bookmark"];this._focusEditInputBox=!0,this._userState=new E({bookmark:t,state:"edit"}),this.viewModel.goTo(t),this.scheduleRender()},s._closeUrlEditBookmarkForm=function(){this._focusEditInputBox=!0,this._userState.state="edit"},s._closeEditBookmarkForm=function(){this._userState=null},s._addBookmarkSubmit=function(e){e.preventDefault();const{_addInputNode:t,_userState:o}=this,s=t&&t.value.trim();s?(o.loading=!0,this.viewModel.createBookmark().then((e=>{e.name=s,this.viewModel.bookmarks.add(e),this._endAddBookmark()}))):o.validationState="name-required"},s._editBookmarkAndClose=async function(e,t){await this.viewModel.editBookmark(e,t),this._closeEditBookmarkForm()},s._editBookmarkSubmit=function(e){e.preventDefault();const{_editInputNode:t,_userState:o}=this,s=t&&t.value.trim();s?(o.bookmark.name=s,o.bookmark.thumbnail=o.editedBookmark.thumbnail,this._editBookmarkAndClose(o.bookmark,{takeScreenshot:!1})):o.validationState="name-required"},s._storeAddBookmarkButton=function(e){this._addBookmarkButtonNode=e,this._focusAddBookmark()},s._storeEditInput=function(e){this._editInputNode=e,this._focusEditInput()},s._storeAddInput=function(e){this._addInputNode=e,this._focusAddInput()},s._storeUrlEditInput=function(e){this._urlEditInputNode=e,this._focusUrlEditInput()},s._focusUrlEditInput=function(){this._urlEditInputNode&&this._focusUrlEditInputBox&&(this._focusUrlEditInputBox=!1,this._urlEditInputNode.focus())},s._focusAddInput=function(){this._addInputNode&&this._focusAddInputBox&&(this._focusAddInputBox=!1,this._addInputNode.focus())},s._focusAddBookmark=function(){this._addBookmarkButtonNode&&this._focusAddBookmarkButton&&(this._focusAddBookmarkButton=!1,this._addBookmarkButtonNode.focus())},s._focusEditInput=function(){this._editInputNode&&this._focusEditInputBox&&(this._focusEditInputBox=!1,this._editInputNode.focus())},s._deleteBookmark=function(e){const t=e.currentTarget["data-bookmark"];this.viewModel.bookmarks.remove(t)},s._goToBookmark=function(e){const t=e.currentTarget["data-bookmark"];this.endAddBookmark(),this._closeEditBookmarkForm(),this.viewModel.goTo(t)},s._refreshThumbnail=async function(){const{_userState:e,_editMenu:t,viewModel:o}=this;e.validationState=void 0,await o.editBookmark(this._userState.editedBookmark,{takeScreenshot:!0,captureExtent:!1,captureViewpoint:!1,captureRotation:!1,captureScale:!1}),t.open=!1,this._focusEditInputBox=!0,this.scheduleRender()},s._removeThumbnail=function(){const{_userState:e,_editMenu:t}=this;e.editedBookmark.thumbnail=null,e.validationState=void 0,t.open=!1,this._focusEditInputBox=!0,this.scheduleRender()},s._startUseImageUrl=function(){this._userState.state="edit-thumbnail",this._editMenu.open=!1,this._focusUrlEditInputBox=!0,this.scheduleRender()},s._editBookmarkUrlSubmit=function(e){e.preventDefault();const{_urlEditInputNode:t,_userState:o}=this,s=t.value;ye.test(s)?(s&&(o.editedBookmark.thumbnail=new _({url:s})),this._closeUrlEditBookmarkForm()):o.validationState="absolute-url-required"},e._createClass(o,[{key:"_editMenuItems",get:function(){var e,t;const{messages:o,_userState:s}=this,r=null==s||null==(e=s.editedBookmark)||null==(t=e.thumbnail)?void 0:t.url;return[new I({label:null==o?void 0:o.menu.refreshThumbnail,iconClass:he,clickFunction:()=>this._refreshThumbnail()}),new I({label:ye.test(r)?null==o?void 0:o.menu.editImageUrl:null==o?void 0:o.menu.useImageUrl,iconClass:_e,clickFunction:()=>this._startUseImageUrl()}),r?new I({label:null==o?void 0:o.menu.removeThumbnail,iconClass:pe,clickFunction:()=>this._removeThumbnail()}):null].filter(Boolean)}},{key:"_editMenu",get:function(){const{_editMenuItems:e,messages:t}=this,o=this._get("_editMenu");o&&o.destroy();const s=new S({iconClass:me,label:null==t?void 0:t.menu.label});return s.items=e,s}},{key:"bookmarkCreationOptions",get:function(){return a.deprecatedProperty(xe,"bookmarkCreationOptions",{replacement:"defaultCreateOptions",version:"4.18"}),this.viewModel.defaultCreateOptions},set:function(e){void 0!==e.captureExtent&&a.deprecatedProperty(xe,"bookmarkCreationOptions.captureExtent",{replacement:"defaultCreateOptions.captureViewpoint",version:"4.17"}),a.deprecatedProperty(xe,"bookmarkCreationOptions",{replacement:"defaultCreateOptions",version:"4.18"}),this.viewModel.defaultCreateOptions=e}}]),o}(B);return t.__decorate([r.property({type:E}),f.renderable(["state","editedBookmark","loading","validationState"])],Ie.prototype,"_userState",void 0),t.__decorate([r.property({readOnly:!0,dependsOn:["messages","_userState.editedBookmark.thumbnail.url"]})],Ie.prototype,"_editMenuItems",null),t.__decorate([r.property({readOnly:!0,dependsOn:["messages","_editMenuItems"]})],Ie.prototype,"_editMenu",null),t.__decorate([r.property({dependsOn:["viewModel.defaultCreateOptions"]})],Ie.prototype,"bookmarkCreationOptions",null),t.__decorate([i.aliasOf("viewModel.defaultCreateOptions")],Ie.prototype,"defaultCreateOptions",void 0),t.__decorate([i.aliasOf("viewModel.defaultEditOptions")],Ie.prototype,"defaultEditOptions",void 0),t.__decorate([i.aliasOf("viewModel.bookmarks")],Ie.prototype,"bookmarks",void 0),t.__decorate([f.renderable(),r.property()],Ie.prototype,"disabled",void 0),t.__decorate([f.renderable(),r.property()],Ie.prototype,"editingEnabled",void 0),t.__decorate([i.aliasOf("viewModel.goToOverride")],Ie.prototype,"goToOverride",void 0),t.__decorate([r.property()],Ie.prototype,"iconClass",void 0),t.__decorate([r.property({aliasOf:{source:"messages.widgetLabel",overridable:!0}})],Ie.prototype,"label",void 0),t.__decorate([r.property(),f.renderable(),b.messageBundle("esri/widgets/Bookmarks/t9n/Bookmarks")],Ie.prototype,"messages",void 0),t.__decorate([r.property(),f.renderable(),b.messageBundle("esri/t9n/common")],Ie.prototype,"messagesCommon",void 0),t.__decorate([r.property(),f.renderable(),b.messageBundle("esri/core/t9n/Units")],Ie.prototype,"messagesUnits",void 0),t.__decorate([i.aliasOf("viewModel.view")],Ie.prototype,"view",void 0),t.__decorate([r.property({type:x}),f.renderable(["activeBookmark","state","bookmarks"]),v.vmEvent(["select-bookmark","bookmark-edit","bookmark-select"])],Ie.prototype,"viewModel",void 0),t.__decorate([r.property(),f.renderable()],Ie.prototype,"visibleElements",void 0),t.__decorate([n.cast("visibleElements")],Ie.prototype,"castVisibleElements",null),t.__decorate([r.property()],Ie.prototype,"endAddBookmark",null),t.__decorate([r.property()],Ie.prototype,"startAddBookmark",null),Ie=t.__decorate([d.subclass(Ee)],Ie),Ie}));

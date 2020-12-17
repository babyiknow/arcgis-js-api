/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../core/maybe","../../core/mathUtils","../../core/screenUtils","../../core/MapUtils","./interactiveToolUtils","../support/screenUtils"],(function(e,t,o,i,n,r,a){"use strict";let s=function(){function s(){this._pointerLocations=new Map,this._hoveredManipulators=new Map,this._grabbedManipulators=new Map,this._draggedManipulators=new Map,this._stopDrag=!1,this._revertToActiveTool=null,this._cursor=null}var d=s.prototype;return d.handleInputEvent=function(e,i){const n=()=>e.stopPropagation();switch(e.type){case"pointer-move":l(e.pointerType)&&this._pointerLocations.set(e.pointerId,{x:e.x,y:e.y,pointerType:e.pointerType});break;case"drag":this._grabbedManipulators.size>0&&(this._stopDrag=!0),this._stopDrag&&(n(),"end"===e.action&&(this._stopDrag=!1));break;case"pointer-down":{if(!c(e)||p(e))break;const o=a.createScreenPointFromEvent(e),r=this._intersect(o,e.pointerType,i.forEachTool);if(t.isNone(r))break;const s=this._findToolAndManipulatorByKey(r,i.forEachTool,u),l=t.applySome(s,(e=>e.manipulator)),d=t.applySome(s,(e=>e.tool));!(t.isSome(l)&&t.isSome(d)&&l.interactive)||l.grabbable&&l.grabbableForEvent(e)||!l.grabbing||l.dragging||this._ungrabManipulatorBeforeDragging(l,d,e),t.isSome(l)&&l.interactive&&l.grabbable&&l.grabbableForEvent(e)&&!l.grabbing&&(this._grabbedManipulators.set(e.pointerId,{key:r,start:o}),1===this._grabbedManipulators.size&&(this._revertToActiveTool=i.activeTool,i.setActiveTool(r.tool)),l.grabbing=!0,l.events.emit("grab-changed",{action:"start",screenPoint:o}),n());break}case"pointer-up":this._handlePointerEnd(e,i);break;case"pointer-drag":{if(!c(e))break;const r=this._grabbedManipulators.get(e.pointerId),s=this._draggedManipulators.get(e.pointerId),l=t.applySome(r||s,(({key:e})=>e)),p=this._findManipulatorByKey(l,i.forEachTool);if(t.isNone(p))break;const u=a.createScreenPointFromEvent(e);u.x=o.clamp(u.x,0,i.view.width),u.y=o.clamp(u.y,0,i.view.height);const d=t.unwrap(r||s).start;switch(e.action){case"start":case"update":"update"!==e.action&&1!==this._grabbedManipulators.size||(p.dragging=!0,s?p.events.emit("drag",{action:"update",start:d,screenPoint:u}):p.events.emit("drag",{action:"start",start:d,screenPoint:u,pointerType:e.pointerType}),this._draggedManipulators.set(e.pointerId,{key:t.unwrap(l),start:d}));break;case"end":p.dragging=!1,s&&p.events.emit("drag",{action:"end",start:d,screenPoint:u}),this._draggedManipulators.delete(e.pointerId),this._handlePointerEnd(e,i)}n();break}case"immediate-click":{const o=a.createScreenPointFromEvent(e),r=this._intersect(o,e.pointerType,i.forEachTool),s=this._findToolAndManipulatorByKey(r,i.forEachTool,u);if(p(e)||i.forEachTool((e=>{if((!t.isSome(s)||s.tool!==e||!e.selectionManagementDisabled)&&e.manipulators){let t=!1;e.manipulators.forEach((({manipulator:e})=>{e.selected&&(e.selected=!1,t=!0)})),t&&e.manipulatorSelectionChanged&&e.manipulatorSelectionChanged()}})),t.isNone(s))break;const{manipulator:l,tool:c}=s;if(!l.interactive)break;l.selectable&&!c.selectionManagementDisabled&&(l.selected=!l.selected,c.manipulatorSelectionChanged&&c.manipulatorSelectionChanged());const d=e.native.shiftKey;l.events.emit("immediate-click",{screenPoint:o,button:e.button,pointerType:e.pointerType,shiftKey:d,stopPropagation:n});break}case"click":{const o=a.createScreenPointFromEvent(e),r=this._intersect(o,e.pointerType,i.forEachTool),s=this._findManipulatorByKey(r,i.forEachTool);if(t.isNone(s)||!s.interactive)break;const l=e.native.shiftKey;s.events.emit(e.type,{screenPoint:o,button:e.button,pointerType:e.pointerType,shiftKey:l}),n();break}case"double-click":{const o=a.createScreenPointFromEvent(e),r=this._intersect(o,e.pointerType,i.forEachTool),s=this._findManipulatorByKey(r,i.forEachTool);if(t.isNone(s)||!s.interactive)break;const l=e.native.shiftKey;s.events.emit("double-click",{screenPoint:o,button:e.button,pointerType:e.pointerType,shiftKey:l,stopPropagation:n});break}case"immediate-double-click":{const o=a.createScreenPointFromEvent(e),r=this._intersect(o,e.pointerType,i.forEachTool),s=this._findManipulatorByKey(r,i.forEachTool);if(t.isNone(s)||!s.interactive)break;const l=e.native.shiftKey;s.events.emit("immediate-double-click",{screenPoint:o,button:e.button,pointerType:e.pointerType,shiftKey:l,stopPropagation:n});break}}this._updateCursor(i.forEachTool)},d._ungrabManipulatorBeforeDragging=function(e,t,o){e.grabbing=!1,e.events.emit("grab-changed",{action:"end",screenPoint:a.createScreenPointFromEvent(o)}),this._grabbedManipulators.forEach((({key:o},i)=>{o.tool===t&&t.manipulators.findById(o.manipulatorId)===e&&this._grabbedManipulators.delete(i)}))},d._handlePointerEnd=function(e,o){const i=t.applySome(this._grabbedManipulators.get(e.pointerId),(({key:e})=>e)),n=this._findManipulatorByKey(i,o.forEachTool);if(t.isSome(n)&&!n.dragging){const r=t.isSome(o.creatingTool)&&o.creatingTool===t.unwrap(i).tool;1!==this._grabbedManipulators.size||0!==this._draggedManipulators.size||r||(o.setActiveTool(this._revertToActiveTool),this._revertToActiveTool=null),n.grabbing&&(n.grabbing=!1,n.events.emit("grab-changed",{action:"end",screenPoint:a.createScreenPointFromEvent(e)})),this._grabbedManipulators.delete(e.pointerId)}},d._cursorFromMap=function(e,o){let i=null;return n.someMap(e,(({key:e})=>{const n=this._findManipulatorByKey(e,o);return!!(t.isSome(n)&&n.interactive&&"cursor"in n&&n.cursor)&&(i=n.cursor,!0)})),i},d._updateCursor=function(e){this._grabbedManipulators.size>0?this._cursor=this._cursorFromMap(this._grabbedManipulators,e)||"grabbing":this._hoveredManipulators.size>0?this._cursor=this._cursorFromMap(this._hoveredManipulators,e)||"pointer":this._cursor=null},d.clearPointers=function(e,o,i=!0,n){const r=o=>o.tool===e&&(t.isNone(n)||o.manipulatorId===n);this._grabbedManipulators.forEach((({key:e},i)=>{if(r(e)){this._grabbedManipulators.delete(i);const n=this._findManipulatorByKey(e,o);t.isSome(n)&&(n.grabbing=!1,n.events.emit("grab-changed",{action:"end",screenPoint:null}))}})),this._draggedManipulators.forEach((({key:e},i)=>{if(r(e)){this._draggedManipulators.delete(i);const n=this._findManipulatorByKey(e,o);t.isSome(n)&&(n.dragging=!1,n.events.emit("drag",{action:"cancel"}))}})),i&&this._hoveredManipulators.forEach((({key:e},i)=>{if(r(e)){this._hoveredManipulators.delete(i);const n=this._findManipulatorByKey(e,o);t.isSome(n)&&(n.hovering=!1)}})),this._updateCursor(o)},d._intersect=function(e,o,i){let n=null;return i((i=>{if(null==i.manipulators||!r.areToolManipulatorsEditable(i))return!1;const a=i.manipulators.intersect(e,o);return!t.isNone(a)&&(n={manipulatorId:a,tool:i},!0)})),n},d.updateHoveredStateFromKnownPointers=function(e){this._pointerLocations.forEach(((t,o)=>{this._updateHoveredStateForPointerAtScreenPosition(i.createScreenPoint(t.x,t.y),o,t.pointerType,e)}))},d.handleHoverEvent=function(e,t){"pointer-up"!==e.type&&"immediate-click"!==e.type&&"pointer-move"!==e.type||!l(e.pointerType)||this._updateHoveredStateForPointerAtScreenPosition(a.createScreenPointFromEvent(e),e.pointerId,e.pointerType,t)},d._updateHoveredStateForPointerAtScreenPosition=function(e,o,i,n){const r=this._intersect(e,i,n);let a=this._findManipulatorByKey(r,n);const s=t.applySome(this._hoveredManipulators.get(o),(({key:e})=>e)),l=this._findManipulatorByKey(s,n);t.isSome(a)&&!a.interactive&&(a=null),l!==a&&(t.isSome(l)&&(l.hovering=!1),t.isSome(a)?(a.hovering=!0,this._hoveredManipulators.set(o,{key:t.unwrap(r)})):this._hoveredManipulators.delete(o),this._updateCursor(n))},d._findManipulatorByKey=function(e,t){return this._findToolAndManipulatorByKey(e,t,u)?u.manipulator:null},d._findToolAndManipulatorByKey=function(e,o,i){return t.isNone(e)?null:(i.tool=null,i.manipulator=null,o((o=>{if(o!==e.tool||null==o.manipulators||!r.areToolManipulatorsEditable(o))return!1;const n=o.manipulators.findById(e.manipulatorId);return!!t.isSome(n)&&(i.manipulator=n,i.tool=o,!0)})),i.manipulator?i:null)},e._createClass(s,[{key:"cursor",get:function(){return this._cursor}}]),s}();function l(e){return"mouse"===e}function c(e){return"mouse"!==e.pointerType||0===e.button}function p(e){return!!e.native.shiftKey}const u={manipulator:null,tool:null};return s}));

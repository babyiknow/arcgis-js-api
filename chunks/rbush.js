/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","./quickselect"],(function(t,i){"use strict";function n(t,i){if(!(this instanceof n))return new n(t,i);this._maxEntries=Math.max(4,t||9),this._minEntries=Math.max(2,Math.ceil(.4*this._maxEntries)),i&&("function"==typeof i?this.toBBox=i:this._initFormat(i)),this.clear()}function h(t,i,n){if(!n)return i.indexOf(t);for(var h=0;h<i.length;h++)if(n(t,i[h]))return h;return-1}function a(t,i){e(t,0,t.children.length,i,t)}function e(t,i,n,h,a){a||(a=f(null)),a.minX=1/0,a.minY=1/0,a.maxX=-1/0,a.maxY=-1/0;for(var e,o=i;o<n;o++)e=t.children[o],r(a,t.leaf?h(e):e);return a}function r(t,i){return t.minX=Math.min(t.minX,i.minX),t.minY=Math.min(t.minY,i.minY),t.maxX=Math.max(t.maxX,i.maxX),t.maxY=Math.max(t.maxY,i.maxY),t}function o(t,i){return t.minX-i.minX}function s(t,i){return t.minY-i.minY}function l(t){return(t.maxX-t.minX)*(t.maxY-t.minY)}function c(t){return t.maxX-t.minX+(t.maxY-t.minY)}function m(t,i){return t.minX<=i.minX&&t.minY<=i.minY&&i.maxX<=t.maxX&&i.maxY<=t.maxY}function u(t,i){return i.minX<=t.maxX&&i.minY<=t.maxY&&i.maxX>=t.minX&&i.maxY>=t.minY}function f(t){return{children:t,height:1,leaf:!0,minX:1/0,minY:1/0,maxX:-1/0,maxY:-1/0}}function x(t,n,h,a,e){for(var r,o=[n,h];o.length;)(h=o.pop())-(n=o.pop())<=a||(r=n+Math.ceil((h-n)/a/2)*a,i.quickselect(t,r,n,h,e),o.push(n,r,r,h))}n.prototype={all:function(){return this._all(this.data,[])},search:function(t){var i=this.data,n=[],h=this.toBBox;if(!u(t,i))return n;for(var a,e,r,o,s=[];i;){for(a=0,e=i.children.length;a<e;a++)r=i.children[a],u(t,o=i.leaf?h(r):r)&&(i.leaf?n.push(r):m(t,o)?this._all(r,n):s.push(r));i=s.pop()}return n},collides:function(t){var i=this.data,n=this.toBBox;if(!u(t,i))return!1;for(var h,a,e,r,o=[];i;){for(h=0,a=i.children.length;h<a;h++)if(e=i.children[h],u(t,r=i.leaf?n(e):e)){if(i.leaf||m(t,r))return!0;o.push(e)}i=o.pop()}return!1},load:function(t){if(!t||!t.length)return this;if(t.length<this._minEntries){for(var i=0,n=t.length;i<n;i++)this.insert(t[i]);return this}var h=this._build(t.slice(),0,t.length-1,0);if(this.data.children.length)if(this.data.height===h.height)this._splitRoot(this.data,h);else{if(this.data.height<h.height){var a=this.data;this.data=h,h=a}this._insert(h,this.data.height-h.height-1,!0)}else this.data=h;return this},insert:function(t){return t&&this._insert(t,this.data.height-1),this},clear:function(){return this.data=f([]),this},remove:function(t,i){if(!t)return this;for(var n,a,e,r,o=this.data,s=this.toBBox(t),l=[],c=[];o||l.length;){if(o||(o=l.pop(),a=l[l.length-1],n=c.pop(),r=!0),o.leaf&&-1!==(e=h(t,o.children,i)))return o.children.splice(e,1),l.push(o),this._condense(l),this;r||o.leaf||!m(o,s)?a?(n++,o=a.children[n],r=!1):o=null:(l.push(o),c.push(n),n=0,a=o,o=o.children[0])}return this},toBBox:function(t){return t},compareMinX:o,compareMinY:s,toJSON:function(){return this.data},fromJSON:function(t){return this.data=t,this},_all:function(t,i){for(var n=[];t;)t.leaf?i.push.apply(i,t.children):n.push.apply(n,t.children),t=n.pop();return i},_build:function(t,i,n,h){var e,r=n-i+1,o=this._maxEntries;if(r<=o)return a(e=f(t.slice(i,n+1)),this.toBBox),e;h||(h=Math.ceil(Math.log(r)/Math.log(o)),o=Math.ceil(r/Math.pow(o,h-1))),(e=f([])).leaf=!1,e.height=h;var s,l,c,m,u=Math.ceil(r/o),d=u*Math.ceil(Math.sqrt(o));for(x(t,i,n,d,this.compareMinX),s=i;s<=n;s+=d)for(x(t,s,c=Math.min(s+d-1,n),u,this.compareMinY),l=s;l<=c;l+=u)m=Math.min(l+u-1,c),e.children.push(this._build(t,l,m,h-1));return a(e,this.toBBox),e},_chooseSubtree:function(t,i,n,h){for(var a,e,r,o,s,c,m,u,f,x;h.push(i),!i.leaf&&h.length-1!==n;){for(m=u=1/0,a=0,e=i.children.length;a<e;a++)s=l(r=i.children[a]),f=t,x=r,(c=(Math.max(x.maxX,f.maxX)-Math.min(x.minX,f.minX))*(Math.max(x.maxY,f.maxY)-Math.min(x.minY,f.minY))-s)<u?(u=c,m=s<m?s:m,o=r):c===u&&s<m&&(m=s,o=r);i=o||i.children[0]}return i},_insert:function(t,i,n){var h=this.toBBox,a=n?t:h(t),e=[],o=this._chooseSubtree(a,this.data,i,e);for(o.children.push(t),r(o,a);i>=0&&e[i].children.length>this._maxEntries;)this._split(e,i),i--;this._adjustParentBBoxes(a,e,i)},_split:function(t,i){var n=t[i],h=n.children.length,e=this._minEntries;this._chooseSplitAxis(n,e,h);var r=this._chooseSplitIndex(n,e,h),o=f(n.children.splice(r,n.children.length-r));o.height=n.height,o.leaf=n.leaf,a(n,this.toBBox),a(o,this.toBBox),i?t[i-1].children.push(o):this._splitRoot(n,o)},_splitRoot:function(t,i){this.data=f([t,i]),this.data.height=t.height+1,this.data.leaf=!1,a(this.data,this.toBBox)},_chooseSplitIndex:function(t,i,n){var h,a,r,o,s,c,m,u,f,x,d,p,M,X;for(c=m=1/0,h=i;h<=n-i;h++)a=e(t,0,h,this.toBBox),r=e(t,h,n,this.toBBox),f=a,x=r,d=void 0,p=void 0,M=void 0,X=void 0,d=Math.max(f.minX,x.minX),p=Math.max(f.minY,x.minY),M=Math.min(f.maxX,x.maxX),X=Math.min(f.maxY,x.maxY),o=Math.max(0,M-d)*Math.max(0,X-p),s=l(a)+l(r),o<c?(c=o,u=h,m=s<m?s:m):o===c&&s<m&&(m=s,u=h);return u},_chooseSplitAxis:function(t,i,n){var h=t.leaf?this.compareMinX:o,a=t.leaf?this.compareMinY:s;this._allDistMargin(t,i,n,h)<this._allDistMargin(t,i,n,a)&&t.children.sort(h)},_allDistMargin:function(t,i,n,h){t.children.sort(h);var a,o,s=this.toBBox,l=e(t,0,i,s),m=e(t,n-i,n,s),u=c(l)+c(m);for(a=i;a<n-i;a++)o=t.children[a],r(l,t.leaf?s(o):o),u+=c(l);for(a=n-i-1;a>=i;a--)o=t.children[a],r(m,t.leaf?s(o):o),u+=c(m);return u},_adjustParentBBoxes:function(t,i,n){for(var h=n;h>=0;h--)r(i[h],t)},_condense:function(t){for(var i,n=t.length-1;n>=0;n--)0===t[n].children.length?n>0?(i=t[n-1].children).splice(i.indexOf(t[n]),1):this.clear():a(t[n],this.toBBox)},_initFormat:function(t){var i=["return a"," - b",";"];this.compareMinX=new Function("a","b",i.join(t[0])),this.compareMinY=new Function("a","b",i.join(t[1])),this.toBBox=new Function("a","return {minX: a"+t[0]+", minY: a"+t[1]+", maxX: a"+t[2]+", maxY: a"+t[3]+"};")}},t.rbush=n}));

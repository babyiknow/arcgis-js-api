/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["../../../chunks/_rollupPluginBabelHelpers","../../../core/ObjectPool"],(function(t,e){"use strict";let o=function(){function e(t,e,o,l){this.set(t,e,o,l)}e.getId=function(t,e,o,l){return"object"==typeof t?`${t.level}/${t.row}/${t.col}/${t.world}`:`${t}/${e}/${o}/${l}`};var o=e.prototype;return o.acquire=function(t,e,o,l){this.set(t,e,o,l)},o.contains=function(t){const e=t.level-this.level;return this.row===t.row>>e&&this.col===t.col>>e&&this.world===t.world},o.equals=function(t){return this.level===t.level&&this.row===t.row&&this.col===t.col&&this.world===t.world},o.clone=function(){return new e(this)},o.release=function(){this.level=0,this.row=0,this.col=0,this.world=0},o.set=function(t,e,o,l){if(null==t)this.level=0,this.row=0,this.col=0,this.world=0;else if("object"==typeof t)this.level=t.level||0,this.row=t.row||0,this.col=t.col||0,this.world=t.world||0;else if("string"==typeof t){const[e,o,l,i]=t.split("/");this.level=parseFloat(e),this.row=parseFloat(o),this.col=parseFloat(l),this.world=parseFloat(i)}else this.level=+t,this.row=+e,this.col=+o,this.world=+l||0;return this},o.toString=function(){return`${this.level}/${this.row}/${this.col}/${this.world}`},o.getParentKey=function(){return this.level<=0?null:new e(this.level-1,this.row>>1,this.col>>1,this.world)},o.getChildKeys=function(){const t=this.level+1,o=this.row<<1,l=this.col<<1,i=this.world;return[new e(t,o,l,i),new e(t,o,l+1,i),new e(t,o+1,l,i),new e(t,o+1,l+1,i)]},o.compareRowMajor=function(t){return this.row<t.row?-1:this.row>t.row?1:this.col<t.col?-1:this.col>t.col?1:0},t._createClass(e,[{key:"key",get:function(){return this}},{key:"id",get:function(){return this.toString()},set:function(t){this.set(t)}}]),e}();return o.pool=new e(o,null,null,25,50),o}));

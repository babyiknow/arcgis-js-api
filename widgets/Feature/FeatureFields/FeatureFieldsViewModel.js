/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../core/has","../../../core/Logger","../../../core/accessorSupport/ensureType","../../../core/accessorSupport/decorators/property","../../../core/accessorSupport/decorators/subclass","../../../core/urlUtils","../../../core/uuid","../../../portal/support/resourceExtension","../../../core/Accessor","../../../popup/FieldInfo","../../../popup/ExpressionInfo","../support/featureUtils"],(function(e,o,r,s,t,n,p,i,l,u,c,a,d,f){"use strict";let y=function(o){function r(e){var r;return(r=o.call(this,e)||this).attributes=null,r.expressionInfos=null,r.fieldInfos=null,r}return e._inheritsLoose(r,o),e._createClass(r,[{key:"formattedFieldInfos",get:function(){const{expressionInfos:e,fieldInfos:o}=this,r=[];return null==o||o.forEach((o=>{if(!(!o.hasOwnProperty("visible")||o.visible))return;const s=o.clone();s.label=f.getFieldInfoLabel(s,e),r.push(s)})),r}}]),r}(c);return o.__decorate([n.property()],y.prototype,"attributes",void 0),o.__decorate([n.property({type:[d]})],y.prototype,"expressionInfos",void 0),o.__decorate([n.property({type:[a]})],y.prototype,"fieldInfos",void 0),o.__decorate([n.property({readOnly:!0,dependsOn:["expressionInfos","fieldInfos"]})],y.prototype,"formattedFieldInfos",null),y=o.__decorate([p.subclass("esri.widgets.Feature.FeatureFields.FeatureFieldsViewModel")],y),y}));

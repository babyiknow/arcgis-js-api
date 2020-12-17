/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["require","../chunks/_rollupPluginBabelHelpers","../chunks/tslib.es6","../core/has","../core/lang","../core/maybe","../core/Logger","../core/accessorSupport/ensureType","../core/accessorSupport/decorators/property","../core/accessorSupport/decorators/reader","../core/accessorSupport/decorators/subclass","../core/Error","../core/urlUtils","../core/uuid","./support/resourceExtension","../core/promiseUtils","../core/JSONSupport","../geometry/Extent","../assets","../core/Loadable","./Portal","./PortalItemResource","./PortalRating"],(function(e,t,r,o,i,a,n,s,l,p,c,d,u,y,m,h,g,f,w,v,b,_,x){"use strict";var k;let O=k=function(r){function o(e){var t;return(t=r.call(this,e)||this).access=null,t.accessInformation=null,t.applicationProxies=null,t.avgRating=null,t.categories=null,t.created=null,t.culture=null,t.description=null,t.extent=null,t.groupCategories=null,t.id=null,t.itemControl=null,t.licenseInfo=null,t.modified=null,t.name=null,t.numComments=null,t.numRatings=null,t.numViews=null,t.owner=null,t.ownerFolder=null,t.portal=null,t.screenshots=null,t.size=null,t.snippet=null,t.sourceJSON=null,t.tags=null,t.title=null,t.type=null,t.typeKeywords=null,t.url=null,t}t._inheritsLoose(o,r),o.from=function(e){return s.ensureClass(k,e)};var n=o.prototype;return n.destroy=function(){this.portal=null},n.readExtent=function(e){return e&&e.length?new f(e[0][0],e[0][1],e[1][0],e[1][1]):null},n.load=function(e){this.portal||(this.portal=b.getDefault());const t=this.portal.load(e).then((()=>this.sourceJSON?this.sourceJSON:this.id&&this.itemUrl?this.portal._request(this.itemUrl,{signal:a.isSome(e)?e.signal:null}):{})).then((e=>{this.sourceJSON=e,this.read(e)}));return this.addResolvingPromise(t),h.resolve(this)},n.addRating=function(e){const t={method:"post",query:{}};return e instanceof x&&(e=e.rating),isNaN(e)||"number"!=typeof e||(t.query.rating=e),this.portal._request(this.itemUrl+"/addRating",t).then((()=>new x({rating:e,created:new Date})))},n.clone=function(){const e={access:this.access,accessInformation:this.accessInformation,applicationProxies:i.clone(this.applicationProxies),avgRating:this.avgRating,categories:i.clone(this.categories),created:i.clone(this.created),culture:this.culture,description:this.description,extent:i.clone(this.extent),groupCategories:i.clone(this.groupCategories),id:this.id,itemControl:this.itemControl,licenseInfo:this.licenseInfo,modified:i.clone(this.modified),name:this.name,numComments:this.numComments,numRatings:this.numRatings,numViews:this.numViews,owner:this.owner,ownerFolder:this.ownerFolder,portal:this.portal,screenshots:i.clone(this.screenshots),size:this.size,snippet:this.snippet,tags:i.clone(this.tags),thumbnail:this.thumbnail,title:this.title,type:this.type,typeKeywords:i.clone(this.typeKeywords),url:this.url};return this.loaded&&(e.loadStatus="loaded"),new k({sourceJSON:this.sourceJSON}).set(e)},n.createPostQuery=function(){const e=this.toJSON();for(const t in e)"tags"===t&&null!==e[t]&&(e[t]=e[t].join(", ")),"typeKeywords"===t&&null!==e[t]&&(e[t]=e[t].join(", ")),"extent"===t&&e[t]&&(e[t]=JSON.stringify(e[t]));return e},n.deleteRating=function(){return this.portal._request(this.itemUrl+"/deleteRating",{method:"post"}).then((()=>{}))},n.fetchData=function(e="json",t){return this.portal._request(this.itemUrl+"/data",{responseType:e,...t})},n.fetchRating=function(e){return this.portal._request(this.itemUrl+"/rating",e).then((e=>null!=e.rating?(e.created=new Date(e.created),new x(e)):null))},n.fetchRelatedItems=function(e,t){return this.portal._requestToTypedArray(this.itemUrl+"/relatedItems",{query:e,...t},k)},n.getThumbnailUrl=function(e){let t=this.thumbnailUrl;return t&&e&&(t+=`&w=${e}`),t},n.reload=function(){return this.portal._request(this.itemUrl,{cacheBust:!0}).then((e=>(this.sourceJSON=e,this.read(e),this)))},n.update=function(e){return this.id?this.load().then((()=>this.portal._signIn())).then((()=>{const t=e&&e.data,r={method:"post"};r.query=this.createPostQuery();for(const e in r.query)null===r.query[e]&&(r.query[e]="");return r.query.clearEmptyFields=!0,null!=t&&("string"==typeof t?r.query.text=t:"object"==typeof t&&(r.query.text=JSON.stringify(t))),this.portal._request(`${this.userItemUrl}/update`,r).then((()=>this.reload()))})):h.reject(new d("portal:item-does-not-exist","The item does not exist yet and cannot be updated"))},n.updateThumbnail=function(e){return this.id?this.load().then((()=>this.portal._signIn())).then((()=>{const t=e.thumbnail,r=e.filename,o={method:"post"};if("string"==typeof t)u.isDataProtocol(t)?o.query={data:t}:o.query={url:u.makeAbsolute(t)},a.isSome(r)&&(o.query.filename=r);else{const e=new FormData;a.isSome(r)?e.append("file",t,r):e.append("file",t),o.body=e}return this.portal._request(`${this.userItemUrl}/updateThumbnail`,o).then((()=>this.reload()))})):h.reject(new d("portal:item-does-not-exist","The item does not exist yet and cannot be updated"))},n.fetchResources=async function(t={},r){return(await new Promise((function(t,r){e(["./support/resourceUtils"],t,r)}))).fetchResources(this,t,r)},n.addResource=async function(t,r,o){const i=await new Promise((function(t,r){e(["./support/resourceUtils"],t,r)}));return t.portalItem=this,i.addOrUpdateResource(t,"add",r,o)},n.removeResource=async function(t,r){const o=await new Promise((function(t,r){e(["./support/resourceUtils"],t,r)}));if(t.portalItem&&t.portalItem.itemUrl!==this.itemUrl)throw new d("removeresource:portal-item-mismatch","The portal item associated with the provided resource does not match the item");return o.removeResource(this,t,r)},n.removeAllResources=async function(t){return(await new Promise((function(t,r){e(["./support/resourceUtils"],t,r)}))).removeAllResources(this,t)},n.resourceFromPath=function(e){return new _({portalItem:this,path:e})},n.toJSON=function(){const e=this.extent,t={created:this.created&&this.created.getTime(),description:this.description,extent:e&&[[e.xmin,e.ymin],[e.xmax,e.ymax]],id:this.id,modified:this.modified&&this.modified.getTime(),name:this.name,owner:this.owner,ownerFolder:this.ownerFolder,snippet:this.snippet,tags:this.tags,thumbnail:this.thumbnail,title:this.title,type:this.type,typeKeywords:this.typeKeywords,url:this.url};return i.fixJson(t)},o.fromJSON=function(e){if(!e)return null;if(e.declaredClass)throw new Error("JSON object is already hydrated");return new k({sourceJSON:e})},n._getPostQuery=function(){const e=this.toJSON();for(const t in e)"tags"===t&&null!==e[t]&&(e[t]=e[t].join(", ")),"typeKeywords"===t&&null!==e[t]&&(e[t]=e[t].join(", ")),"extent"===t&&e[t]&&(e[t]=JSON.stringify(e[t]));return e},t._createClass(o,[{key:"displayName",get:function(){const e=this.type,t=this.typeKeywords||[];let r=e;return"Feature Service"===e||"Feature Collection"===e?r=t.indexOf("Table")>-1?"Table":t.indexOf("Route Layer")>-1?"Route Layer":t.indexOf("Markup")>-1?"Markup":"Feature Layer":"Image Service"===e?r=t.indexOf("Elevation 3D Layer")>-1?"Elevation Layer":t.indexOf("Tiled Imagery")>-1?"Tiled Imagery Layer":"Imagery Layer":"Scene Service"===e?r="Scene Layer":"Scene Package"===e?r="Scene Layer Package":"Stream Service"===e?r="Feature Layer":"Geoprocessing Service"===e&&this.portal&&this.portal.isPortal?r=t.indexOf("Web Tool")>-1?"Tool":"Geoprocessing Service":"Geocoding Service"===e?r="Locator":"Geoenrichment Service"===e?r="GeoEnrichment Service":"Microsoft Powerpoint"===e?r="Microsoft PowerPoint":"GeoJson"===e?r="GeoJSON":"Globe Service"===e?r="Globe Layer":"Vector Tile Service"===e?r="Tile Layer":"netCDF"===e?r="NetCDF":"Map Service"===e?r=-1===t.indexOf("Spatiotemporal")&&(t.indexOf("Hosted Service")>-1||t.indexOf("Tiled")>-1)&&-1===t.indexOf("Relational")?"Tile Layer":"Map Image Layer":e&&e.toLowerCase().indexOf("add in")>-1?r=e.replace(/(add in)/gi,"Add-In"):"datastore catalog service"===e?r="Big Data File Share":"Compact Tile Package"===e&&(r="Tile Package (tpkx)"),r}},{key:"iconUrl",get:function(){const e=this.type&&this.type.toLowerCase()||"",t=this.typeKeywords||[];let r,o=!1,i=!1,a=!1,n=!1,s=!1,l=!1;return e.indexOf("service")>0||"feature collection"===e||"kml"===e||"wms"===e||"wmts"===e||"wfs"===e?(o=t.indexOf("Hosted Service")>-1,"feature service"===e||"feature collection"===e||"kml"===e||"wfs"===e?(i=t.indexOf("Table")>-1,a=t.indexOf("Route Layer")>-1,n=t.indexOf("Markup")>-1,s=-1!==t.indexOf("Spatiotemporal"),l=-1!==t.indexOf("UtilityNetwork"),r=s&&i?"spatiotemporaltable":i?"table":a?"routelayer":n?"markup":s?"spatiotemporal":o?"featureshosted":l?"utilitynetwork":"features"):r="map service"===e||"wms"===e||"wmts"===e?o||t.indexOf("Tiled")>-1||"wmts"===e?"maptiles":"mapimages":"scene service"===e?t.indexOf("Line")>-1?"sceneweblayerline":t.indexOf("3DObject")>-1?"sceneweblayermultipatch":t.indexOf("Point")>-1?"sceneweblayerpoint":t.indexOf("IntegratedMesh")>-1?"sceneweblayermesh":t.indexOf("PointCloud")>-1?"sceneweblayerpointcloud":t.indexOf("Polygon")>-1?"sceneweblayerpolygon":t.indexOf("Building")>-1?"sceneweblayerbuilding":"sceneweblayer":"image service"===e?t.indexOf("Elevation 3D Layer")>-1?"elevationlayer":t.indexOf("Tiled Imagery")>-1?"tiledimagerylayer":"imagery":"stream service"===e?"streamlayer":"vector tile service"===e?"vectortile":"datastore catalog service"===e?"datastorecollection":"geocoding service"===e?"geocodeservice":"geoprocessing service"===e?t.indexOf("Web Tool")>-1&&this.portal&&this.portal.isPortal?"tool":"layers":"knowledge graph service"===e?"knowledgegraph":"layers"):r="web map"===e||"cityengine web scene"===e?"maps":"web scene"===e?t.indexOf("ViewingMode-Local")>-1?"webscenelocal":"websceneglobal":"web mapping application"===e||"mobile application"===e||"application"===e||"operation view"===e||"desktop application"===e?"apps":"map document"===e||"map package"===e||"published map"===e||"scene document"===e||"globe document"===e||"basemap package"===e||"mobile basemap package"===e||"mobile map package"===e||"project package"===e||"project template"===e||"pro map"===e||"layout"===e||"layer"===e&&t.indexOf("ArcGIS Pro")>-1||"explorer map"===e&&t.indexOf("Explorer Document")?"mapsgray":"service definition"===e||"csv"===e||"shapefile"===e||"cad drawing"===e||"geojson"===e||"360 vr experience"===e||"netcdf"===e||"administrative report"===e?"datafiles":"explorer add in"===e||"desktop add in"===e||"windows viewer add in"===e||"windows viewer configuration"===e?"appsgray":"arcgis pro add in"===e||"arcgis pro configuration"===e?"addindesktop":"rule package"===e||"file geodatabase"===e||"sqlite geodatabase"===e||"csv collection"===e||"kml collection"===e||"windows mobile package"===e||"map template"===e||"desktop application template"===e||"gml"===e||"arcpad package"===e||"code sample"===e||"form"===e||"document link"===e||"operations dashboard add in"===e||"rules package"===e||"image"===e||"workflow manager package"===e||"explorer map"===e&&t.indexOf("Explorer Mapping Application")>-1||t.indexOf("Document")>-1?"datafilesgray":"network analysis service"===e||"geoprocessing service"===e||"geodata service"===e||"geometry service"===e||"geoprocessing package"===e||"locator package"===e||"geoprocessing sample"===e||"workflow manager service"===e?"toolsgray":"layer"===e||"layer package"===e||"explorer layer"===e?"layersgray":"scene package"===e?"scenepackage":"mobile scene package"===e?"mobilescenepackage":"tile package"===e||"compact tile package"===e?"tilepackage":"task file"===e?"taskfile":"report template"===e?"report-template":"statistical data collection"===e?"statisticaldatacollection":"insights workbook"===e?"workbook":"insights model"===e?"insightsmodel":"insights page"===e?"insightspage":"insights theme"===e?"insightstheme":"hub initiative"===e?"hubinitiative":"hubpage"===e?"hubpage":"hub event"===e?"hubevent":"hub site application"===e?"hubsite":"relational database connection"===e?"relationaldatabaseconnection":"big data file share"===e?"datastorecollection":"image collection"===e?"imagecollection":"style"===e?"style":"desktop style"===e?"desktopstyle":"dashboard"===e?"dashboard":"raster function template"===e?"rasterprocessingtemplate":"vector tile package"===e?"vectortilepackage":"ortho mapping project"===e?"orthomappingproject":"ortho mapping template"===e?"orthomappingtemplate":"solution"===e?"solutions":"geopackage"===e?"geopackage":"deep learning package"===e?"deeplearningpackage":"real time analytic"===e?"realtimeanalytics":"big data analytic"===e?"bigdataanalytics":"feed"===e?"feed":"excalibur imagery project"===e?"excaliburimageryproject":"notebook"===e?"notebook":"storymap"===e?"storymap":"survey123 add in"===e?"survey123addin":"mission"===e?"mission":"mission report"===e?"missionreport":"quickcapture project"===e?"quickcaptureproject":"pro report"===e?"proreport":"urban model"===e?"urbanmodel":"web experience"===e?"experiencebuilder":"web experience template"===e?"webexperiencetemplate":"workflow"===e?"workflow":"insights script"===e?"insightsscript":"kernel gateway connection"===e?"kernelgatewayconnection":"hub initiative template"===e?"hubinitiativetemplate":"storymap theme"===e?"storymaptheme":"maps",r?w.getAssetUrl("esri/images/portal/"+r+"16.png"):null}},{key:"isLayer",get:function(){return["Map Service","Feature Service","Feature Collection","Scene Service","Image Service","Stream Service","Vector Tile Service","WMTS","WMS"].indexOf(this.type)>-1}},{key:"itemUrl",get:function(){const e=this.get("portal.restUrl");return e?e+"/content/items/"+this.id:null}},{key:"thumbnailUrl",get:function(){const e=this.itemUrl,t=this.thumbnail;return e&&t?this.portal._normalizeUrl(`${e}/info/${t}?f=json`):null}},{key:"userItemUrl",get:function(){const e=this.get("portal.restUrl");if(!e)return null;const t=this.owner||this.get("portal.user.username");if(!t)return null;return`${e}/content/users/${this.ownerFolder?`${t}/${this.ownerFolder}`:t}/items/${this.id}`}}]),o}(g.JSONSupportMixin(v));return r.__decorate([l.property({type:["private","shared","org","public"]})],O.prototype,"access",void 0),r.__decorate([l.property()],O.prototype,"accessInformation",void 0),r.__decorate([l.property({json:{read:{source:"appProxies"}}})],O.prototype,"applicationProxies",void 0),r.__decorate([l.property()],O.prototype,"avgRating",void 0),r.__decorate([l.property()],O.prototype,"categories",void 0),r.__decorate([l.property({type:Date})],O.prototype,"created",void 0),r.__decorate([l.property()],O.prototype,"culture",void 0),r.__decorate([l.property()],O.prototype,"description",void 0),r.__decorate([l.property({dependsOn:["type","typeKeywords"],readOnly:!0})],O.prototype,"displayName",null),r.__decorate([l.property({type:f})],O.prototype,"extent",void 0),r.__decorate([p.reader("extent")],O.prototype,"readExtent",null),r.__decorate([l.property()],O.prototype,"groupCategories",void 0),r.__decorate([l.property({dependsOn:["type","typeKeywords"],readOnly:!0})],O.prototype,"iconUrl",null),r.__decorate([l.property()],O.prototype,"id",void 0),r.__decorate([l.property({dependsOn:["type"],readOnly:!0})],O.prototype,"isLayer",null),r.__decorate([l.property()],O.prototype,"itemControl",void 0),r.__decorate([l.property({dependsOn:["portal.restUrl","id"],readOnly:!0})],O.prototype,"itemUrl",null),r.__decorate([l.property()],O.prototype,"licenseInfo",void 0),r.__decorate([l.property({type:Date})],O.prototype,"modified",void 0),r.__decorate([l.property()],O.prototype,"name",void 0),r.__decorate([l.property()],O.prototype,"numComments",void 0),r.__decorate([l.property()],O.prototype,"numRatings",void 0),r.__decorate([l.property()],O.prototype,"numViews",void 0),r.__decorate([l.property()],O.prototype,"owner",void 0),r.__decorate([l.property()],O.prototype,"ownerFolder",void 0),r.__decorate([l.property({type:b})],O.prototype,"portal",void 0),r.__decorate([l.property()],O.prototype,"screenshots",void 0),r.__decorate([l.property()],O.prototype,"size",void 0),r.__decorate([l.property()],O.prototype,"snippet",void 0),r.__decorate([l.property()],O.prototype,"sourceJSON",void 0),r.__decorate([l.property()],O.prototype,"tags",void 0),r.__decorate([l.property()],O.prototype,"thumbnail",void 0),r.__decorate([l.property({dependsOn:["itemUrl","thumbnail","portal.credential.token"],readOnly:!0})],O.prototype,"thumbnailUrl",null),r.__decorate([l.property()],O.prototype,"title",void 0),r.__decorate([l.property()],O.prototype,"type",void 0),r.__decorate([l.property()],O.prototype,"typeKeywords",void 0),r.__decorate([l.property()],O.prototype,"url",void 0),r.__decorate([l.property({dependsOn:["portal.restUrl","portal.user.username","owner","ownerFolder","id"],readOnly:!0})],O.prototype,"userItemUrl",null),O=k=r.__decorate([c.subclass("esri.portal.PortalItem")],O),O}));

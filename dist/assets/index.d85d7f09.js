import{aL as $e,q as ae,ba as he,r as b,v as Te,z as G,be as ze,av as Ee,b as M,aK as ne,J as B,bB as te,bA as Be,y as Ne,ak as Re,aF as le,cM as je,cN as Ke,cO as Ve,a2 as Fe,a9 as T,aa as se,as as De,b$ as Ge,m as We,ad as Ze,a3 as E,o as L,c as ie,w as S,d as C,e as z,t as R,aS as _e,j as N,a4 as ke,F as oe,aT as Me,k as Je,cP as qe,bZ as Ye,a6 as He,cQ as Qe,I as Ae,u as be,ac as we,b5 as Xe,ae as re,af as ue,a as en,cg as nn,g as Se,ab as Ce,cR as Ie}from"./index.b0e1550a.js";/* empty css               */import{C as ce}from"./index.9a44580e.js";import"./index.d4371571.js";import{S as tn}from"./Spin.83ba1358.js";var de=function(){return null};de.isSelectOption=!0;de.displayName="AAutoCompleteOption";const W=de;var pe=function(){return null};pe.isSelectOptGroup=!0;pe.displayName="AAutoCompleteOptGroup";const Q=pe;function on(e){var d,y;return(e==null||(d=e.type)===null||d===void 0?void 0:d.isSelectOption)||(e==null||(y=e.type)===null||y===void 0?void 0:y.isSelectOptGroup)}var an=function(){return B(B({},ne(Be(),["loading","mode","optionLabelProp","labelInValue"])),{},{dataSource:Array,dropdownMenuStyle:{type:Object,default:void 0},dropdownMatchSelectWidth:{type:[Number,Boolean],default:!0},prefixCls:String,showSearch:{type:Boolean,default:void 0},transitionName:String,choiceTransitionName:{type:String,default:"zoom"},autofocus:{type:Boolean,default:void 0},backfill:{type:Boolean,default:void 0},filterOption:{type:[Boolean,Function],default:!1},defaultActiveFirstOption:{type:Boolean,default:!0}})},X=ae({compatConfig:{MODE:3},name:"AAutoComplete",inheritAttrs:!1,props:an(),slots:["option"],setup:function(d,y){var v=y.slots,p=y.attrs,l=y.expose;he(!("dataSource"in v),"AutoComplete","`dataSource` slot is deprecated, please use props `options` instead."),he(!("options"in v),"AutoComplete","`options` slot is deprecated, please use props `options` instead.");var a=b(),i=function(){var o,t=Ne((o=v.default)===null||o===void 0?void 0:o.call(v)),u=t.length?t[0]:void 0;return u},f=function(){var o;(o=a.value)===null||o===void 0||o.focus()},h=function(){var o;(o=a.value)===null||o===void 0||o.blur()};l({focus:f,blur:h});var A=Te("select",d),n=A.prefixCls;return function(){var r,o,t=d.size,u=d.dataSource,_=d.notFoundContent,k=_===void 0?(r=v.notFoundContent)===null||r===void 0?void 0:r.call(v):_,g,I=p.class,x=(o={},G(o,I,!!I),G(o,"".concat(n.value,"-lg"),t==="large"),G(o,"".concat(n.value,"-sm"),t==="small"),G(o,"".concat(n.value,"-show-search"),!0),G(o,"".concat(n.value,"-auto-complete"),!0),o);if(d.options===void 0){var $,j,K=(($=v.dataSource)===null||$===void 0?void 0:$.call(v))||((j=v.options)===null||j===void 0?void 0:j.call(v))||[];K.length&&on(K[0])?g=K:g=u?u.map(function(O){if(ze(O))return O;switch(Ee(O)){case"string":return M(W,{key:O,value:O},{default:function(){return[O]}});case"object":return M(W,{key:O.value,value:O.value},{default:function(){return[O.text]}});default:throw new Error("AutoComplete[dataSource] only supports type `string[] | Object[]`.")}}):[]}var Z=ne(B(B(B({},d),p),{},{mode:te.SECRET_COMBOBOX_MODE_DO_NOT_USE,getInputElement:i,notFoundContent:k,class:x,ref:a}),["dataSource","loading"]);return M(te,Z,B({default:function(){return[g]}},ne(v,["default","dataSource","options"])))}}});const ln=$e(X,{Option:W,OptGroup:Q,install:function(d){return d.component(X.name,X),d.component(W.displayName,W),d.component(Q.displayName,Q),d}});var Oe={exports:{}};(function(e,d){(function(y,v){e.exports=v()})(Re,function(){function y(n){var r=[];return n.AMapUI&&r.push(v(n.AMapUI)),n.Loca&&r.push(p(n.Loca)),Promise.all(r)}function v(n){return new Promise(function(r,o){var t=[];if(n.plugins)for(var u=0;u<n.plugins.length;u+=1)a.AMapUI.plugins.indexOf(n.plugins[u])==-1&&t.push(n.plugins[u]);if(i.AMapUI===l.failed)o("\u524D\u6B21\u8BF7\u6C42 AMapUI \u5931\u8D25");else if(i.AMapUI===l.notload){i.AMapUI=l.loading,a.AMapUI.version=n.version||a.AMapUI.version,u=a.AMapUI.version;var _=document.body||document.head,k=document.createElement("script");k.type="text/javascript",k.src="https://webapi.amap.com/ui/"+u+"/main.js",k.onerror=function(g){i.AMapUI=l.failed,o("\u8BF7\u6C42 AMapUI \u5931\u8D25")},k.onload=function(){if(i.AMapUI=l.loaded,t.length)window.AMapUI.loadUI(t,function(){for(var g=0,I=t.length;g<I;g++){var x=t[g].split("/").slice(-1)[0];window.AMapUI[x]=arguments[g]}for(r();f.AMapUI.length;)f.AMapUI.splice(0,1)[0]()});else for(r();f.AMapUI.length;)f.AMapUI.splice(0,1)[0]()},_.appendChild(k)}else i.AMapUI===l.loaded?n.version&&n.version!==a.AMapUI.version?o("\u4E0D\u5141\u8BB8\u591A\u4E2A\u7248\u672C AMapUI \u6DF7\u7528"):t.length?window.AMapUI.loadUI(t,function(){for(var g=0,I=t.length;g<I;g++){var x=t[g].split("/").slice(-1)[0];window.AMapUI[x]=arguments[g]}r()}):r():n.version&&n.version!==a.AMapUI.version?o("\u4E0D\u5141\u8BB8\u591A\u4E2A\u7248\u672C AMapUI \u6DF7\u7528"):f.AMapUI.push(function(g){g?o(g):t.length?window.AMapUI.loadUI(t,function(){for(var I=0,x=t.length;I<x;I++){var $=t[I].split("/").slice(-1)[0];window.AMapUI[$]=arguments[I]}r()}):r()})})}function p(n){return new Promise(function(r,o){if(i.Loca===l.failed)o("\u524D\u6B21\u8BF7\u6C42 Loca \u5931\u8D25");else if(i.Loca===l.notload){i.Loca=l.loading,a.Loca.version=n.version||a.Loca.version;var t=a.Loca.version,u=a.AMap.version.startsWith("2"),_=t.startsWith("2");if(u&&!_||!u&&_)o("JSAPI \u4E0E Loca \u7248\u672C\u4E0D\u5BF9\u5E94\uFF01\uFF01");else{u=a.key,_=document.body||document.head;var k=document.createElement("script");k.type="text/javascript",k.src="https://webapi.amap.com/loca?v="+t+"&key="+u,k.onerror=function(g){i.Loca=l.failed,o("\u8BF7\u6C42 AMapUI \u5931\u8D25")},k.onload=function(){for(i.Loca=l.loaded,r();f.Loca.length;)f.Loca.splice(0,1)[0]()},_.appendChild(k)}}else i.Loca===l.loaded?n.version&&n.version!==a.Loca.version?o("\u4E0D\u5141\u8BB8\u591A\u4E2A\u7248\u672C Loca \u6DF7\u7528"):r():n.version&&n.version!==a.Loca.version?o("\u4E0D\u5141\u8BB8\u591A\u4E2A\u7248\u672C Loca \u6DF7\u7528"):f.Loca.push(function(g){g?o(g):o()})})}if(!window)throw Error("AMap JSAPI can only be used in Browser.");var l;(function(n){n.notload="notload",n.loading="loading",n.loaded="loaded",n.failed="failed"})(l||(l={}));var a={key:"",AMap:{version:"1.4.15",plugins:[]},AMapUI:{version:"1.1",plugins:[]},Loca:{version:"1.3.2"}},i={AMap:l.notload,AMapUI:l.notload,Loca:l.notload},f={AMap:[],AMapUI:[],Loca:[]},h=[],A=function(n){typeof n=="function"&&(i.AMap===l.loaded?n(window.AMap):h.push(n))};return{load:function(n){return new Promise(function(r,o){if(i.AMap==l.failed)o("");else if(i.AMap==l.notload){var t=n.key,u=n.version,_=n.plugins;t?(window.AMap&&location.host!=="lbs.amap.com"&&o("\u7981\u6B62\u591A\u79CDAPI\u52A0\u8F7D\u65B9\u5F0F\u6DF7\u7528"),a.key=t,a.AMap.version=u||a.AMap.version,a.AMap.plugins=_||a.AMap.plugins,i.AMap=l.loading,u=document.body||document.head,window.___onAPILoaded=function(g){if(delete window.___onAPILoaded,g)i.AMap=l.failed,o(g);else for(i.AMap=l.loaded,y(n).then(function(){r(window.AMap)}).catch(o);h.length;)h.splice(0,1)[0]()},_=document.createElement("script"),_.type="text/javascript",_.src="https://webapi.amap.com/maps?callback=___onAPILoaded&v="+a.AMap.version+"&key="+t+"&plugin="+a.AMap.plugins.join(","),_.onerror=function(g){i.AMap=l.failed,o(g)},u.appendChild(_)):o("\u8BF7\u586B\u5199key")}else if(i.AMap==l.loaded)if(n.key&&n.key!==a.key)o("\u591A\u4E2A\u4E0D\u4E00\u81F4\u7684 key");else if(n.version&&n.version!==a.AMap.version)o("\u4E0D\u5141\u8BB8\u591A\u4E2A\u7248\u672C JSAPI \u6DF7\u7528");else{if(t=[],n.plugins)for(u=0;u<n.plugins.length;u+=1)a.AMap.plugins.indexOf(n.plugins[u])==-1&&t.push(n.plugins[u]);t.length?window.AMap.plugin(t,function(){y(n).then(function(){r(window.AMap)}).catch(o)}):y(n).then(function(){r(window.AMap)}).catch(o)}else if(n.key&&n.key!==a.key)o("\u591A\u4E2A\u4E0D\u4E00\u81F4\u7684 key");else if(n.version&&n.version!==a.AMap.version)o("\u4E0D\u5141\u8BB8\u591A\u4E2A\u7248\u672C JSAPI \u6DF7\u7528");else{var k=[];if(n.plugins)for(u=0;u<n.plugins.length;u+=1)a.AMap.plugins.indexOf(n.plugins[u])==-1&&k.push(n.plugins[u]);A(function(){k.length?window.AMap.plugin(k,function(){y(n).then(function(){r(window.AMap)}).catch(o)}):y(n).then(function(){r(window.AMap)}).catch(o)})}})},reset:function(){delete window.AMap,delete window.AMapUI,delete window.Loca,a={key:"",AMap:{version:"1.4.15",plugins:[]},AMapUI:{version:"1.1",plugins:[]},Loca:{version:"1.3.2"}},i={AMap:l.notload,AMapUI:l.notload,Loca:l.notload},f={AMap:[],AMapUI:[],Loca:[]}}}})})(Oe);const fe=Oe.exports,Pe={height:{type:String,default:"450px"},center:Array,zoom:{type:Number,default:11},chooseZoom:{type:Number,default:17},poiSize:{type:Number,default:30},poiType:{type:String,default:""},poiKeywords:{type:String,default:""},poiRadius:{type:Number,default:1e3},needCity:Boolean,forceChoose:{type:Boolean,default:!0},suggestionCity:{type:String,default:"\u5168\u56FD"},searchType:{type:Number,default:0,validator:e=>[0,1].includes(e)},searchPlaceholder:String,markerSrc:{type:String,default:"https://3gimg.qq.com/lightmap/components/locationPicker2/image/marker.png"},mapKey:String,mapVersion:{type:String,default:"2.0"},mapStyle:String,darkMode:Boolean,okText:String,tipMessage:String},ee="ele-map-picker-main-icon",sn=ae({name:"MapView",components:{ASpin:tn,AAutoComplete:ln,AButton:le,PlusOutlined:je,EnvironmentOutlined:Ke,CheckCircleOutlined:Ve},props:Pe,emits:["done","map-done"],setup(e,{emit:d}){const{authenticated:y}=Fe(),v=b(null),p=b(!0),l=b(!1),a=b(!1),i=b([]),f=b([]),h=b([ee]),A=b("");let n="",r=null,o=!1,t=null,u=null,_=null,k=null;const g=()=>{!e.mapKey||t||fe.load({key:e.mapKey,version:e.mapVersion,plugins:["AMap.PlaceSearch","AMap.AutoComplete"]}).then(s=>{H(),_=new s.AutoComplete({city:e.suggestionCity}),u=new s.PlaceSearch({type:e.poiType,pageSize:e.poiSize,pageIndex:1});const c=(()=>{if(e.mapStyle)return e.mapStyle;if(e.darkMode)return"amap://styles/dark"})();t=new s.Map(v.value,{zoom:e.zoom,center:e.center,resizeEnable:!0,mapStyle:c}),t.on("complete",()=>{p.value=!1;const{lng:m,lat:w}=t.getCenter();Z(m,w)}),t.on("moveend",()=>{if(o)o=!1;else if(e.searchType===0){me();const{lng:m,lat:w}=t.getCenter();Z(m,w)}}),k=new s.Marker({icon:new s.Icon({image:e.markerSrc,size:new s.Size(26,36.5),imageSize:new s.Size(26,36.5)}),offset:new s.Pixel(-13,-36.5)}),d("map-done",t)}).catch(s=>{console.error(s)})},I=s=>{!s||n===s||(n=s,e.searchType!==0&&(l.value=!0),K(s).then(c=>{e.searchType!==0?(i.value=c,l.value=!1,q()):f.value=c}).catch(c=>{console.error(c),l.value=!1}))},x=(s,c)=>{(!i.value.length||i.value[0].name!==c.name)&&(i.value=[{...c,selected:!0},...i.value.map(m=>({...m,selected:!1}))]),Y(c.location.lng,c.location.lat,e.chooseZoom),r=c},$=s=>{o=!0,i.value=i.value.map(w=>({...w,selected:w===s}));const{lng:c,lat:m}=s.location;Y(c,m,e.chooseZoom),e.searchType===0?me():ve(c,m)},j=()=>{if(!y.value){console.warn(Ge);return}const s=J();if(!s){if(e.forceChoose){We.error(e.tipMessage);return}a.value=!0,ye(e.needCity).then(m=>{a.value=!1,d("done",m)}).catch(m=>{console.error(m),a.value=!1,d("done",{})});return}const c={...s.location,name:s.name,address:s.address||""};e.needCity?(a.value=!0,Y(c.lng,c.lat),ye(!0).then(({city:m})=>{a.value=!1,c.city=m,d("done",c)}).catch(m=>{console.error(m),a.value=!1,d("done",c)})):d("done",c)},K=s=>new Promise((c,m)=>{if(!_){m(new Error("AutoComplete instance is null"));return}_.search(s,(w,U)=>{if(!(U!=null&&U.tips)){c([]);return}const V=U.tips.filter(P=>!!P.location).map(P=>{const F=`${P.name}(${P.district})`;return{...P,label:F,value:F,key:P.id||F,address:Array.isArray(P.address)?P.address[0]:P.address}});c(V)})}),Z=(s,c)=>{l.value=!0,O(s,c).then(m=>{r?m.length===0||m[0].name!==r.name?i.value=[{...r,selected:!0},...m]:i.value=m.map((w,U)=>({...w,selected:U===0})):i.value=m,l.value=!1}).catch(m=>{console.error(m),l.value=!1,i.value=[]})},O=(s,c)=>new Promise((m,w)=>{if(!u){w(new Error("PlaceSearch instance is null"));return}u.searchNearBy(e.poiKeywords,[s,c],e.poiRadius,(U,V)=>{var P;if(U==="complete"&&((P=V==null?void 0:V.poiList)==null?void 0:P.pois)){const F=V.poiList.pois.filter(D=>!!D.location).map((D,Le)=>({...D,key:D.id||`${D.name}-${Le}`}));m(F)}else U==="no_data"?m([]):w(new Error(U))})}),J=()=>i.value.find(s=>s.selected),me=()=>{h.value=[ee],Ze(()=>{setTimeout(()=>{h.value=[ee,"ele-map-picker-anim-bounce"]},0)})},q=()=>{k&&t&&t.remove(k)},ve=(s,c)=>{if(!k){console.error("centerMarker is null");return}if(!t){console.error("map instance is null");return}s!=null&&c!=null?(k.setPosition([s,c]),t.add(k)):q()},Y=(s,c,m)=>{t&&s!=null&&c!=null&&(m==null?t.setCenter([s,c]):t.setZoomAndCenter(m,[s,c]))},ye=s=>new Promise((c,m)=>{if(!t){m(new Error("map instance is null"));return}const w=t.getCenter();s?t.getCity(U=>{w.city=U,c(w)}):c(w)}),ge=s=>{t&&(typeof s=="boolean"?s?t.setMapStyle("amap://styles/dark"):t.setMapStyle("amap://styles/normal"):s&&t.setMapStyle(s))},Ue=()=>{t&&t.destroy(),k=null,u=null,_=null,t=null},H=()=>{Ue(),i.value=[],f.value=[],A.value="",n="",r=null,o=!1},xe=()=>t;return T(()=>e.darkMode,s=>{e.mapStyle||ge(s)}),T(()=>e.mapStyle,s=>{s&&ge(s)}),T(()=>e.searchType,s=>{if(A.value="",f.value=[],r=null,n="",q(),s===1){const c=J();if(c){const{lng:m,lat:w}=c.location;ve(m,w)}}}),T(()=>e.mapKey,()=>{H(),g()}),se(()=>{g()}),De(()=>{H()}),{mapRef:v,loading:p,poiLoading:l,confirmLoading:a,data:i,suggestionData:f,centerIconClass:h,keywords:A,onSearch:I,onSearchSelect:x,onItemClick:$,onConfirm:j,getMapIns:xe}}}),rn=(e,d)=>{const y=e.__vccOpts||e;for(const[v,p]of d)y[v]=p;return y},un={class:"ele-map-picker-header"},cn={class:"ele-map-picker-header-search"},dn={class:"ele-map-picker-body"},pn={class:"ele-map-picker-main"},fn=["src"],mn=["onClick"],vn={class:"ele-map-picker-poi-item-title"},yn={key:0,class:"ele-map-picker-poi-item-address"};function gn(e,d,y,v,p,l){const a=E("AAutoComplete"),i=E("AButton"),f=E("PlusOutlined"),h=E("EnvironmentOutlined"),A=E("CheckCircleOutlined"),n=E("ASpin");return L(),ie(n,{spinning:e.loading},{default:S(()=>[C("div",un,[C("div",cn,[M(a,{"allow-clear":!0,value:e.keywords,"onUpdate:value":d[0]||(d[0]=r=>e.keywords=r),options:e.suggestionData,placeholder:e.searchPlaceholder,onSelect:e.onSearchSelect,onSearch:e.onSearch},null,8,["value","options","placeholder","onSelect","onSearch"])]),M(i,{type:"primary",loading:e.confirmLoading,onClick:e.onConfirm},{default:S(()=>[z(R(e.okText),1)]),_:1},8,["loading","onClick"])]),C("div",dn,[C("div",pn,[C("div",{ref:"mapRef",style:_e({height:e.height})},null,4),e.searchType===0?(L(),N(oe,{key:0},[M(f,{class:"ele-map-picker-main-plus"}),C("img",{class:ke(e.centerIconClass),src:e.markerSrc,alt:""},null,10,fn)],64)):Me("",!0)]),M(n,{spinning:e.poiLoading},{default:S(()=>[C("div",{class:"ele-map-picker-poi-list",style:_e({height:e.height})},[(L(!0),N(oe,null,Je(e.data,r=>(L(),N("div",{key:r.key,class:ke(["ele-map-picker-poi-item",{active:r.selected}]),onClick:o=>e.onItemClick(r)},[M(h,{class:"ele-map-picker-poi-item-icon"}),C("div",vn,R(r.name),1),r.address?(L(),N("div",yn,R(r.address),1)):Me("",!0),M(A,{class:"ele-map-picker-poi-item-check"})],10,mn))),128))],4)]),_:1},8,["spinning"])])]),_:1},8,["spinning"])}const hn=rn(sn,[["render",gn]]),_n={...qe,...Pe,visible:Boolean,title:String,width:{type:String,default:"780px"},dialogStyle:Object},kn=ae({name:"EleMapPicker",props:_n,emits:["done","open","closed","update:visible","map-done"],setup(e,{emit:d,slots:y,expose:v}){const{locale:p,globalConfig:l}=Ye({name:"map"}),a=He(Qe),i=b(null),f=b(!e.destroyOnClose||e.visible),h=Ae(()=>{var t,u;return(u=(t=be(a))==null?void 0:t.styleResponsive)!=null?u:!0}),A=Ae(()=>e.mapKey||l.mapKey),n=t=>{d("done",t)},r=t=>{d("update:visible",t)};return T(()=>e.visible,t=>{t?(f.value=!0,d("open")):(e.destroyOnClose&&(f.value=!1),d("closed"))}),v({mapRef:i}),()=>we(Xe,{centered:e.centered,closable:e.closable,destroyOnClose:e.destroyOnClose,forceRender:e.forceRender,keyboard:e.keyboard,mask:e.mask,maskClosable:e.maskClosable,maskStyle:e.maskStyle,wrapClassName:e.wrapClassName,zIndex:e.zIndex,dialogClass:e.dialogClass,movable:e.movable,moveOut:e.moveOut,moveOutPositive:e.moveOutPositive,resizable:e.resizable,maxable:e.maxable,multiple:e.multiple,fullscreen:e.fullscreen,inner:e.inner,resetOnClose:e.resetOnClose,maskClass:e.maskClass,position:e.position,visible:e.visible,width:e.width,title:e.title||p.value.title,style:e.dialogStyle,footer:null,bodyStyle:{padding:0},class:["ele-map-picker-dialog",{"ele-map-picker-responsive":h.value}],"onUpdate:visible":r},{...y,default:()=>{if(!!f.value)return we(hn,{height:e.height,center:e.center,zoom:e.zoom,chooseZoom:e.chooseZoom,poiSize:e.poiSize,poiType:e.poiType,poiKeywords:e.poiKeywords,poiRadius:e.poiRadius,needCity:e.needCity,forceChoose:e.forceChoose,suggestionCity:e.suggestionCity,searchType:e.searchType,markerSrc:e.markerSrc,mapVersion:e.mapVersion,mapStyle:e.mapStyle,darkMode:e.darkMode,searchPlaceholder:e.searchPlaceholder||p.value.placeholder,mapKey:A.value,okText:e.okText||p.value.ok,tipMessage:p.value.message,ref:i,"onMap-done":t=>d("map-done",t),onDone:n})}})}});const Mn={style:{width:"140px"}},An=z("POI\u68C0\u7D22\u6A21\u5F0F"),wn=z("\u5173\u952E\u5B57\u68C0\u7D22\u6A21\u5F0F"),bn=z(" \u6253\u5F00\u5730\u56FE\u4F4D\u7F6E\u9009\u62E9\u5668 "),Sn={style:{"margin-top":"12px"}},Cn={style:{"margin-top":"12px"}},In={style:{"margin-top":"12px"}},On={__name:"demo-picker",setup(e){const d=re(),{darkMode:y}=ue(d),v=b(!1),p=b(0),l=en({location:"",address:"",lngAndLat:""}),a=()=>{v.value=!0},i=f=>{var h,A,n;console.log(f),l.location=`${(h=f.city)==null?void 0:h.province}/${(A=f.city)==null?void 0:A.city}/${(n=f.city)==null?void 0:n.district}`,l.address=`${f.name} ${f.address}`,l.lngAndLat=`${f.lng},${f.lat}`,v.value=!1};return(f,h)=>{const A=nn,n=te,r=le,o=Se,t=ce,u=kn;return L(),N(oe,null,[M(t,{title:"\u5730\u56FE\u4F4D\u7F6E\u9009\u62E9\u5668",bordered:!1},{default:S(()=>[M(o,null,{default:S(()=>[C("div",Mn,[M(n,{value:p.value,"onUpdate:value":h[0]||(h[0]=_=>p.value=_),class:"ele-fluid"},{default:S(()=>[M(A,{value:0},{default:S(()=>[An]),_:1}),M(A,{value:1},{default:S(()=>[wn]),_:1})]),_:1},8,["value"])]),M(r,{class:"ele-btn-icon",onClick:a},{default:S(()=>[bn]),_:1})]),_:1}),C("div",Sn,"\u9009\u62E9\u4F4D\u7F6E: "+R(l.location),1),C("div",Cn,"\u8BE6\u7EC6\u5730\u5740: "+R(l.address),1),C("div",In,"\u7ECF \u7EAC \u5EA6 : "+R(l.lngAndLat),1)]),_:1}),M(u,{"need-city":!0,"dark-mode":be(y),visible:v.value,"onUpdate:visible":h[1]||(h[1]=_=>v.value=_),"search-type":p.value,onDone:i},null,8,["dark-mode","visible","search-type"])],64)}}},Pn={__name:"demo-map",setup(e){const d=re(),{darkMode:y}=ue(d),v=b(null);let p;const l=()=>{fe.load({key:Ie,version:"2.0",plugins:["AMap.InfoWindow","AMap.Marker"]}).then(a=>{const i={zoom:13,center:[114.346084,30.516215],mapStyle:y.value?"amap://styles/dark":void 0};p=new a.Map(v.value,i);const f=new a.InfoWindow({content:`
            <div style="color: #333;">
              <div style="padding: 5px;font-size: 16px;">\u6B66\u6C49\u6613\u4E91\u667A\u79D1\u6280\u6709\u9650\u516C\u53F8</div>
              <div style="padding: 0 5px;">\u5730\u5740: \u6E56\u5317\u7701\u6B66\u6C49\u5E02\u6D2A\u5C71\u533A\u96C4\u695A\u5927\u9053222\u53F7</div>
              <div style="padding: 0 5px;">\u7535\u8BDD: 020-123456789</div>
            </div>
            <a
              class="ele-text-primary"
              style="padding: 8px 5px 0;text-decoration: none;display: inline-block;"
              href="//uri.amap.com/marker?position=114.346084,30.511215&name=\u6B66\u6C49\u6613\u4E91\u667A\u79D1\u6280\u6709\u9650\u516C\u53F8"
              target="_blank">\u5230\u8FD9\u91CC\u53BB\u2192
            </a>
          `});f.open(p,[114.346084,30.511215]);const h=new a.Icon({size:new a.Size(25,34),image:"//a.amap.com/jsapi_demos/static/demo-center/icons/poi-marker-red.png",imageSize:new a.Size(25,34)}),A=new a.Marker({icon:h,position:[114.346084,30.511215],offset:new a.Pixel(-12,-28)});A.setMap(p),A.on("click",()=>{f.open(p)})}).catch(a=>{console.error(a)})};return se(()=>{l()}),Ce(()=>{p&&p.destroy()}),T(y,a=>{p&&(a?p.setMapStyle("amap://styles/dark"):p.setMapStyle("amap://styles/normal"))}),(a,i)=>{const f=ce;return L(),ie(f,{title:"\u5B98\u7F51\u5E95\u90E8\u5730\u56FE",bordered:!1},{default:S(()=>[C("div",{ref_key:"locationMapRef",ref:v,style:{height:"360px","max-width":"800px"}},null,512)]),_:1})}}},Un=z(" \u5F00\u59CB\u79FB\u52A8 "),xn=z(" \u6682\u505C\u79FB\u52A8 "),Ln=z(" \u7EE7\u7EED\u79FB\u52A8 "),$n={__name:"demo-track",setup(e){const d=re(),{darkMode:y}=ue(d),v=b(null);let p,l;const a=[[116.478935,39.997761],[116.478939,39.997825],[116.478912,39.998549],[116.478912,39.998549],[116.478998,39.998555],[116.478998,39.998555],[116.479282,39.99856],[116.479658,39.998528],[116.480151,39.998453],[116.480784,39.998302],[116.480784,39.998302],[116.481149,39.998184],[116.481573,39.997997],[116.481863,39.997846],[116.482072,39.997718],[116.482362,39.997718],[116.483633,39.998935],[116.48367,39.998968],[116.484648,39.999861]],i=()=>{fe.load({key:Ie,version:"2.0",plugins:["AMap.MoveAnimation","AMap.Marker","AMap.Polyline"]}).then(n=>{const r={zoom:17,center:[116.478935,39.997761],mapStyle:y.value?"amap://styles/dark":void 0};p=new n.Map(v.value,r),l=new n.Marker({map:p,position:[116.478935,39.997761],icon:"https://a.amap.com/jsapi_demos/static/demo-center-v2/car.png",offset:new n.Pixel(-13,-26)}),new n.Polyline({map:p,path:a,showDir:!0,strokeColor:"#2288FF",strokeOpacity:1,strokeWeight:6});const o=new n.Polyline({map:p,showDir:!0,strokeColor:"#44BB55",strokeOpacity:1,strokeWeight:6});l.on("moving",t=>{o.setPath(t.passedPath)}),p.setFitView()}).catch(n=>{console.error(n)})},f=()=>{l&&(l.stopMove(),l.moveAlong(a,{duration:200,autoRotation:!0}))},h=()=>{l&&l.pauseMove()},A=()=>{l&&l.resumeMove()};return se(()=>{i()}),Ce(()=>{p&&p.destroy()}),T(y,()=>{p&&(y.value?p.setMapStyle("amap://styles/dark"):p.setMapStyle("amap://styles/normal"))}),(n,r)=>{const o=le,t=Se,u=ce;return L(),ie(u,{title:"\u8F68\u8FF9\u5C55\u793A\u53CA\u8F68\u8FF9\u56DE\u653E",bordered:!1},{default:S(()=>[C("div",{ref_key:"trackMapRef",ref:v,style:{height:"360px","max-width":"800px","margin-bottom":"16px"}},null,512),M(t,null,{default:S(()=>[M(o,{type:"primary",class:"ele-btn-icon",onClick:f},{default:S(()=>[Un]),_:1}),M(o,{type:"primary",class:"ele-btn-icon",onClick:h},{default:S(()=>[xn]),_:1}),M(o,{type:"primary",class:"ele-btn-icon",onClick:A},{default:S(()=>[Ln]),_:1})]),_:1})]),_:1})}}},Tn={class:"ele-body ele-body-card"},zn={name:"ExtensionMap"},Kn=Object.assign(zn,{setup(e){return(d,y)=>(L(),N("div",Tn,[M(On),M(Pn),M($n)]))}});export{Kn as default};
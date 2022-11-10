import{V as B}from"./vuedraggable.umd.15cba163.js";import{q as w,f as P,V as D,bY as T,cY as F,bZ as q,I as O,a3 as n,o as s,j as y,c as I,aS as A,B as S,d as C,b as m,cz as U,aT as h,t as H,w as v,a4 as j,cM as L,a2 as N,a as z,ai as E,b$ as G,cm as M,k as $,cA as Y,cB as Z,F as W}from"./index.b0e1550a.js";import{_ as V,a as J}from"./index.e41e4f00.js";import{_ as K}from"./index.7dd997be.js";import{_ as Q,U as X}from"./index.1b1a7df7.js";const x=w({name:"ImageItem",components:{AImage:V,AProgress:K,ATooltip:P,CloseOutlined:D,ReloadOutlined:T,FileTextOutlined:F},props:{item:{type:Object,required:!0},disabled:Boolean,itemStyle:Object,imageStyle:Object},emits:["remove","item-click","retry"],setup(e,{emit:o}){const{locale:a}=q({name:"upload"}),l=O(()=>e.item.status?{uploading:a.value.uploading,exception:a.value.exception}[e.item.status]:""),r=O(()=>!!(e.item.status&&["uploading","exception"].includes(e.item.status))),f=O(()=>e.item.status?{exception:"exception"}[e.item.status]:void 0);return{locale:a,statusText:l,progressVisible:r,progressStatus:f,onRemove:()=>{o("remove")},onItemClick:()=>{o("item-click")},onRetry:()=>{o("retry")}}}}),ee=(e,o)=>{const a=e.__vccOpts||e;for(const[l,r]of o)a[l]=r;return a},te=["title"],oe={key:3,class:"ele-image-upload-progress"},ae={class:"ele-image-upload-text"},le={key:0,class:"ele-image-upload-retry"},ne={key:4,class:"ele-image-upload-mask"};function se(e,o,a,l,r,f){const d=n("AImage"),c=n("FileTextOutlined"),p=n("CloseOutlined"),_=n("AProgress"),b=n("ReloadOutlined"),R=n("ATooltip");return s(),y("div",{style:A(e.itemStyle),class:j(["ele-image-upload-item",{"ele-draggable":!e.disabled}]),onClick:o[1]||(o[1]=(...g)=>e.onItemClick&&e.onItemClick(...g))},[e.item.url?(s(),I(d,{key:0,width:"100%",height:"100%",src:e.item.url,alt:e.item.name,style:A(e.imageStyle),preview:!1},null,8,["src","alt","style"])):S(e.$slots,"image",{key:1,item:e.item},()=>[C("div",{class:"ele-image-upload-thumbnail",title:e.item.name},[m(c)],8,te)]),e.disabled?h("",!0):(s(),y("div",{key:2,class:"ele-image-upload-close",onClick:o[0]||(o[0]=U((...g)=>e.onRemove&&e.onRemove(...g),["stop"]))},[m(p)])),e.progressVisible?(s(),y("div",oe,[S(e.$slots,"progress",{item:e.item},()=>[C("div",ae,H(e.statusText),1),m(_,{"show-info":!1,percent:e.item.progress,status:e.progressStatus},null,8,["percent","status"]),e.item.status==="exception"?(s(),y("div",le,[m(R,{title:e.locale.retry},{default:v(()=>[m(b,{onClick:U(e.onRetry,["stop"])},null,8,["onClick"])]),_:1},8,["title"])])):h("",!0)])])):(s(),y("div",ne))],6)}const ie=ee(x,[["render",se]]),re={value:{type:Array,required:!0},disabled:Boolean,preview:{type:Boolean,default:!0},itemStyle:Object,buttonStyle:Object,imageStyle:Object,customStyle:Object,customClass:String,beforeUpload:Function,beforeRemove:Function,uploadHandler:Function,removeHandler:Function,autoUpload:{type:Boolean,default:!0},limit:Number,multiple:Boolean,drag:Boolean,accept:{type:String,default:"image/png,image/jpeg"},directory:Boolean},ue=w({name:"EleImageUpload",components:{VueDraggable:B,AUpload:Q,AUploadDragger:X,AImagePreviewGroup:J,AImage:V,PlusOutlined:L,ImageItem:ie},props:re,emits:["update:value","remove","item-click","upload","drag-reject"],setup(e,{emit:o}){const{authenticated:a}=N(),l=z({current:0,visible:!1,onVisibleChange:t=>{l.visible=t}}),r=O(()=>{const t=[];return e.itemStyle&&t.push(e.itemStyle),e.buttonStyle&&t.push(e.buttonStyle),t}),f=O(()=>!e.disabled&&!(typeof e.limit=="number"&&e.limit>0&&e.value!=null&&e.value.length>=e.limit)),d=t=>{o("update:value",t)},c=({file:t})=>{if(!a.value){console.warn(G);return}if(!f.value)return;if(typeof e.uploadHandler=="function"){e.uploadHandler(t);return}const i={file:t,uid:t.uid,name:t.name,progress:0,status:void 0};t.type.startsWith("image")&&(i.url=window.URL.createObjectURL(t)),typeof e.beforeUpload=="function"?Promise.resolve(e.beforeUpload(t)).then(k=>{k!==!1&&p(i)}).catch(k=>{k&&console.error(k)}):p(i)},p=t=>{d(e.value==null?[t]:e.value.concat([t])),e.autoUpload&&o("upload",t)},_=t=>{if(typeof e.removeHandler=="function"){e.removeHandler(t);return}typeof e.beforeRemove=="function"?Promise.resolve(e.beforeRemove(t)).then(i=>{i!==!1&&b(t)}).catch(()=>{}):b(t)},b=t=>{d(e.value.filter(i=>i!==t)),o("remove",t)},R=t=>{if(e.preview&&t.url&&e.value!=null){const i=e.value.filter(k=>!!k.url).indexOf(t);i!==-1&&(l.current=i,l.visible=!0)}o("item-click",t)},g=t=>{o("upload",t)},u=t=>{o("drag-reject",t)};return E(()=>{l.visible=!1}),{previewOption:l,uploadButtonStyle:r,uploadVisible:f,updateValue:d,onUpload:c,onRemove:_,onItemClick:R,onRetry:g,onDragReject:u}}}),de=(e,o)=>{const a=e.__vccOpts||e;for(const[l,r]of o)a[l]=r;return a},me={style:{display:"none"}};function ce(e,o,a,l,r,f){const d=n("ImageItem"),c=n("PlusOutlined"),p=n("AUploadDragger"),_=n("AUpload"),b=n("AImage"),R=n("AImagePreviewGroup"),g=n("VueDraggable");return s(),I(g,{"item-key":"uid",animation:300,"model-value":e.value,draggable:".ele-draggable",class:j(["ele-image-upload-list",{"ele-image-upload-disabled":e.disabled},e.customClass]),style:A(e.customStyle),"set-data":()=>{},"onUpdate:modelValue":e.updateValue},{item:v(({element:u})=>[m(d,{item:u,disabled:e.disabled,"item-style":e.itemStyle,"image-style":e.imageStyle,onItemClick:t=>e.onItemClick(u),onRemove:t=>e.onRemove(u),onRetry:t=>e.onRetry(u)},M({_:2},[$(Object.keys(e.$slots),t=>({name:t,fn:v(i=>[S(e.$slots,t,Y(Z(i||{})))])}))]),1032,["item","disabled","item-style","image-style","onItemClick","onRemove","onRetry"])]),footer:v(()=>[e.uploadVisible?(s(),y("div",{key:0,style:A(e.uploadButtonStyle),class:"ele-image-upload-item ele-image-upload-button"},[e.drag?(s(),I(p,{key:0,accept:e.accept,multiple:e.multiple,directory:e.directory,"show-upload-list":!1,"custom-request":e.onUpload,onReject:e.onDragReject},{default:v(()=>[S(e.$slots,"icon",{},()=>[m(c,{class:"ele-image-upload-icon"})])]),_:3},8,["accept","multiple","directory","custom-request","onReject"])):(s(),I(_,{key:1,accept:e.accept,multiple:e.multiple,directory:e.directory,"show-upload-list":!1,"custom-request":e.onUpload},{default:v(()=>[S(e.$slots,"icon",{},()=>[m(c,{class:"ele-image-upload-icon"})])]),_:3},8,["accept","multiple","directory","custom-request"]))],4)):h("",!0),C("div",me,[e.previewOption.visible?(s(),I(R,{key:0,preview:e.previewOption},{default:v(()=>[(s(!0),y(W,null,$(e.value,u=>(s(),I(b,{key:u.uid,src:u.url},null,8,["src"]))),128))]),_:1},8,["preview"])):h("",!0)])]),_:3},8,["model-value","class","style","set-data","onUpdate:modelValue"])}const be=de(ue,[["render",ce]]);export{be as i};

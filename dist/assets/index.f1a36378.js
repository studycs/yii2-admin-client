import{cj as q,r as T,o as u,c as b,w as t,b as e,u as h,e as $,br as P,c5 as O,aF as M,g as E,c6 as F,_ as V,j as I,d,t as c,aO as Y,a4 as H,aP as C,aT as D,h as z,b5 as L,s as N,F as A,cD as G,m as J}from"./index.b0e1550a.js";import{_ as U,a as j,C as K}from"./index.9a44580e.js";/* empty css              *//* empty css              *//* empty css               *//* empty css               *//* empty css               */import"./index.13ccca11.js";import{i as Q}from"./index.a402f9d8.js";import{_ as B}from"./index.764bd5c9.js";import{w as W,u as X}from"./xlsx.db07aefa.js";import{R as Z}from"./index.aa9f7d32.js";import{U as ee}from"./UpOutlined.3c72882a.js";import{D as te}from"./DownloadOutlined.b6ed2567.js";import"./vuedraggable.umd.15cba163.js";import"./index.50a7696f.js";import"./css.1dd79e5e.js";import"./index.d4371571.js";import"./Spin.83ba1358.js";import"./index.79d1eddb.js";import"./useMaxLevel.2bdcb2e5.js";import"./Group.ef3b103e.js";import"./index.92aa3868.js";import"./RadioButton.4b1c6045.js";import"./CaretUpOutlined.0f21e912.js";import"./iconUtil.035bdc1b.js";const ae=$("\u67E5\u8BE2"),se=$("\u91CD\u7F6E"),oe={__name:"operation-record-search",emits:["search"],setup(a,{emit:s}){const{form:_,resetFields:p}=q({username:"",module:""}),f=T(["",""]),n=()=>{const[k,m]=f.value;s("search",{..._,createTimeStart:k,createTimeEnd:m})},w=()=>{p(),f.value=["",""],n()};return(k,m)=>{const o=P,l=O,r=U,g=Z,x=M,S=E,y=j,i=F;return u(),b(i,{"label-col":{xl:7,lg:5,md:7,sm:4},"wrapper-col":{xl:17,lg:19,md:17,sm:20}},{default:t(()=>[e(y,{gutter:8},{default:t(()=>[e(r,{xl:6,lg:12,md:12,sm:24,xs:24},{default:t(()=>[e(l,{label:"\u7528\u6237\u8D26\u53F7"},{default:t(()=>[e(o,{value:h(_).username,"onUpdate:value":m[0]||(m[0]=v=>h(_).username=v),valueModifiers:{trim:!0},placeholder:"\u8BF7\u8F93\u5165","allow-clear":""},null,8,["value"])]),_:1})]),_:1}),e(r,{xl:6,lg:12,md:12,sm:24,xs:24},{default:t(()=>[e(l,{label:"\u64CD\u4F5C\u6A21\u5757"},{default:t(()=>[e(o,{value:h(_).module,"onUpdate:value":m[1]||(m[1]=v=>h(_).module=v),valueModifiers:{trim:!0},placeholder:"\u8BF7\u8F93\u5165","allow-clear":""},null,8,["value"])]),_:1})]),_:1}),e(r,{xl:6,lg:12,md:12,sm:24,xs:24},{default:t(()=>[e(l,{label:"\u64CD\u4F5C\u65F6\u95F4"},{default:t(()=>[e(g,{value:f.value,"onUpdate:value":m[2]||(m[2]=v=>f.value=v),"show-time":!0,"value-format":"YYYY-MM-DD HH:mm:ss",class:"ele-fluid"},null,8,["value"])]),_:1})]),_:1}),e(r,{xl:6,lg:12,md:12,sm:24,xs:24},{default:t(()=>[e(l,{class:"ele-text-right","wrapper-col":{span:24}},{default:t(()=>[e(S,null,{default:t(()=>[e(x,{type:"primary",onClick:n},{default:t(()=>[ae]),_:1}),e(x,{onClick:w},{default:t(()=>[se]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}}};const le={__name:"text-ellipsis",props:{content:String},setup(a){const s=T(!1);return(_,p)=>(u(),I("div",{class:H(["demo-text-ellipsis ele-bg-white ele-border-split",{expanded:s.value}])},[d("div",null,c(a.content),1),d("div",{class:"demo-text-ellipsis-footer ele-border-split ele-bg-white",onClick:p[0]||(p[0]=f=>s.value=!s.value)},[s.value?(u(),b(h(ee),{key:0})):(u(),b(h(Y),{key:1}))])],2))}},R=V(le,[["__scopeId","data-v-8905402a"]]),ne={class:"ele-text-secondary"},re={class:"ele-text-secondary"},ie={class:"ele-text-secondary"},ce={class:"ele-text-secondary"},de={class:"ele-text-secondary"},ue={class:"ele-text-secondary"},me={key:0,class:"ele-text-secondary"},_e={style:{margin:"12px 0"}},pe={class:"ele-text-secondary"},fe={class:"ele-text-secondary"},xe={class:"ele-text-secondary"},ve={__name:"operation-record-detail",props:{visible:Boolean,data:Object},emits:["update:visible"],setup(a,{emit:s}){const _=p=>{s("update:visible",p)};return(p,f)=>{const n=O,w=U,k=B,m=j,o=z,l=F,r=L;return u(),b(r,{title:"\u8BE6\u60C5",width:640,footer:null,visible:a.visible,"onUpdate:visible":_},{default:t(()=>[e(l,{class:"ele-form-detail","label-col":{sm:8,xs:6},"wrapper-col":{sm:16,xs:18}},{default:t(()=>[e(m,{gutter:16},{default:t(()=>[e(w,{sm:12,xs:24},{default:t(()=>[e(n,{label:"\u64CD\u4F5C\u4EBA"},{default:t(()=>[d("div",ne,c(a.data.nickname)+"("+c(a.data.username)+") ",1)]),_:1}),e(n,{label:"\u64CD\u4F5C\u6A21\u5757"},{default:t(()=>[d("div",re,c(a.data.module),1)]),_:1}),e(n,{label:"\u64CD\u4F5C\u65F6\u95F4"},{default:t(()=>[d("div",ie,c(h(C)(a.data.createTime)),1)]),_:1}),e(n,{label:"\u8BF7\u6C42\u65B9\u5F0F"},{default:t(()=>[d("div",ce,c(a.data.requestMethod),1)]),_:1})]),_:1}),e(w,{sm:12,xs:24},{default:t(()=>[e(n,{label:"IP\u5730\u5740"},{default:t(()=>[d("div",de,c(a.data.ip),1)]),_:1}),e(n,{label:"\u64CD\u4F5C\u529F\u80FD"},{default:t(()=>[d("div",ue,c(a.data.description),1)]),_:1}),e(n,{label:"\u8BF7\u6C42\u8017\u65F6"},{default:t(()=>[isNaN(a.data.spendTime)?D("",!0):(u(),I("div",me,c(a.data.spendTime/1e3)+"s ",1))]),_:1}),e(n,{label:"\u8BF7\u6C42\u72B6\u6001"},{default:t(()=>[e(k,{color:["green","red"][a.data.status]},{default:t(()=>[$(c(["\u6B63\u5E38","\u5F02\u5E38"][a.data.status]),1)]),_:1},8,["color"])]),_:1})]),_:1})]),_:1}),d("div",_e,[e(o)]),e(n,{label:"\u8BF7\u6C42\u5730\u5740","label-col":{sm:4,xs:6},"wrapper-col":{sm:20,xs:18}},{default:t(()=>[d("div",pe,c(a.data.url),1)]),_:1}),e(n,{label:"\u8C03\u7528\u65B9\u6CD5","label-col":{sm:4,xs:6},"wrapper-col":{sm:20,xs:18}},{default:t(()=>[d("div",fe,c(a.data.method),1)]),_:1}),e(n,{label:"\u8BF7\u6C42\u53C2\u6570","label-col":{sm:4,xs:6},"wrapper-col":{sm:20,xs:18}},{default:t(()=>[d("div",xe,c(a.data.params),1)]),_:1}),a.data.status===0?(u(),b(n,{key:0,label:"\u8FD4\u56DE\u7ED3\u679C","label-col":{sm:4,xs:6},"wrapper-col":{sm:20,xs:18}},{default:t(()=>[e(R,{content:a.data.result,class:"ele-text-secondary"},null,8,["content"])]),_:1})):(u(),b(n,{key:1,label:"\u5F02\u5E38\u4FE1\u606F","label-col":{sm:4,xs:6},"wrapper-col":{sm:20,xs:18}},{default:t(()=>[e(R,{content:a.data.error,class:"ele-text-secondary"},null,8,["content"])]),_:1}))]),_:1})]),_:1},8,["visible"])}}};async function he(a){const s=await N.get("/system/operation-record/page",{params:a});return s.data.code===0?s.data.data:Promise.reject(new Error(s.data.message))}async function be(a){const s=await N.get("/system/operation-record",{params:a});return s.data.code===0&&s.data.data?s.data.data:Promise.reject(new Error(s.data.message))}const ge={class:"ele-body"},ye=d("span",null,"\u5BFC\u51FA",-1),we=$("\u6B63\u5E38"),ke=$("\u5F02\u5E38"),Te=["onClick"],Se={name:"SystemOperationRecord"},Ze=Object.assign(Se,{setup(a){const s=T(null),_=T([{key:"index",width:48,align:"center",fixed:"left",hideInSetting:!0,customRender:({index:o})=>{var l,r;return o+((r=(l=s.value)==null?void 0:l.tableIndex)!=null?r:0)}},{title:"\u8D26\u53F7",dataIndex:"username",sorter:!0,showSorterTooltip:!1,ellipsis:!0},{title:"\u7528\u6237\u540D",dataIndex:"nickname",sorter:!0,showSorterTooltip:!1,ellipsis:!0},{title:"\u64CD\u4F5C\u6A21\u5757",dataIndex:"module",sorter:!0,showSorterTooltip:!1,ellipsis:!0},{title:"\u64CD\u4F5C\u529F\u80FD",dataIndex:"description",sorter:!0,showSorterTooltip:!1,ellipsis:!0},{title:"\u8BF7\u6C42\u5730\u5740",dataIndex:"url",sorter:!0,showSorterTooltip:!1,ellipsis:!0},{title:"\u8BF7\u6C42\u65B9\u5F0F",dataIndex:"requestMethod",sorter:!0,showSorterTooltip:!1,width:100,align:"center"},{title:"\u72B6\u6001",key:"status",dataIndex:"status",sorter:!0,showSorterTooltip:!1,width:100,filters:[{text:"\u6B63\u5E38",value:0},{text:"\u5F02\u5E38",value:1}],filterMultiple:!1,align:"center"},{title:"\u8017\u65F6",dataIndex:"spendTime",sorter:!0,showSorterTooltip:!1,width:100,customRender:({text:o})=>o/1e3+"s"},{title:"\u64CD\u4F5C\u65F6\u95F4",dataIndex:"createTime",sorter:!0,showSorterTooltip:!1,ellipsis:!0,customRender:({text:o})=>C(o),align:"center"},{title:"\u64CD\u4F5C",key:"action",width:90,align:"center",fixed:"right"}]),p=T({module:"",description:"",url:"",requestMethod:"",method:"",params:"",result:"",error:"",spendTime:0,os:"",device:"",browser:"",ip:"",status:0,createTime:"",nickname:"",username:""}),f=T(!1),n=({page:o,limit:l,where:r,orders:g,filters:x})=>he({...r,...g,...x,page:o,limit:l}),w=o=>{var l;(l=s==null?void 0:s.value)==null||l.reload({page:1,where:o})},k=o=>{p.value=o,f.value=!0},m=()=>{var r;const o=[["\u8D26\u53F7","\u7528\u6237\u540D","\u64CD\u4F5C\u6A21\u5757","\u64CD\u4F5C\u529F\u80FD","\u8BF7\u6C42\u5730\u5740","\u8BF7\u6C42\u65B9\u5F0F","\u72B6\u6001","\u8017\u65F6","\u64CD\u4F5C\u65F6\u95F4"]],l=G("\u8BF7\u6C42\u4E2D..",0);(r=s.value)==null||r.doRequest(({where:g,orders:x,filters:S})=>{be({...g,...x,...S}).then(y=>{l(),y.forEach(i=>{o.push([i.username,i.nickname,i.module,i.description,i.url,i.requestMethod,["\u6B63\u5E38","\u5F02\u5E38"][i.status],i.spendTime/1e3+"s",C(i.createTime)])}),W({SheetNames:["Sheet1"],Sheets:{Sheet1:X.aoa_to_sheet(o)}},"\u64CD\u4F5C\u65E5\u5FD7.xlsx")}).catch(y=>{l(),J.error(y.message)})})};return(o,l)=>{const r=M,g=E,x=B,S=Q,y=K;return u(),I("div",ge,[e(y,{bordered:!1},{default:t(()=>[e(oe,{onSearch:w}),e(S,{ref_key:"tableRef",ref:s,"row-key":"id",columns:_.value,datasource:n,scroll:{x:1e3},"cache-key":"proSystemOperationRecordTable"},{toolbar:t(()=>[e(g,null,{default:t(()=>[e(r,{type:"primary",class:"ele-btn-icon",onClick:m},{icon:t(()=>[e(h(te))]),default:t(()=>[ye]),_:1})]),_:1})]),bodyCell:t(({column:i,record:v})=>[i.key==="status"?(u(),I(A,{key:0},[v.status===0?(u(),b(x,{key:0,color:"green"},{default:t(()=>[we]),_:1})):v.status===1?(u(),b(x,{key:1,color:"red"},{default:t(()=>[ke]),_:1})):D("",!0)],64)):i.key==="action"?(u(),I("a",{key:1,onClick:Ie=>k(v)},"\u8BE6\u60C5",8,Te)):D("",!0)]),_:1},8,["columns"])]),_:1}),e(ve,{visible:f.value,"onUpdate:visible":l[0]||(l[0]=i=>f.value=i),data:p.value},null,8,["visible","data"])])}}});export{Ze as default};

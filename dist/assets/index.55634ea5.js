import{cj as F,o as C,c as R,w as o,b as a,u as v,e as K,br as M,c5 as T,aF as V,g as S,c6 as j,r as p,a as z,a9 as E,m as y,b5 as q,d as I,b4 as G,aT as A,ds as H,dt as J,ad as Q,bV as O,aP as D,j as W,cM as X,cD as B,cn as Y,cE as Z,h as ee}from"./index.b0e1550a.js";import{_ as te,a as ae,C as oe}from"./index.9a44580e.js";/* empty css              *//* empty css              *//* empty css               *//* empty css               *//* empty css               */import"./index.13ccca11.js";import{i as le}from"./index.a402f9d8.js";import{_ as ne}from"./index.35429753.js";import{u as se,a as re,b as ie,c as ce,p as ue,r as de,d as me}from"./index.5d4e726e.js";import{d as pe}from"./index.50a7696f.js";import{S as _e}from"./Spin.83ba1358.js";import{D as ve}from"./DeleteOutlined.e5f00379.js";import"./vuedraggable.umd.15cba163.js";import"./css.1dd79e5e.js";import"./index.d4371571.js";import"./index.79d1eddb.js";import"./useMaxLevel.2bdcb2e5.js";import"./Group.ef3b103e.js";import"./index.92aa3868.js";import"./RadioButton.4b1c6045.js";import"./CaretUpOutlined.0f21e912.js";import"./iconUtil.035bdc1b.js";const fe=K("\u67E5\u8BE2"),be=K("\u91CD\u7F6E"),ge={__name:"role-search",emits:["search"],setup(x,{emit:b}){const{form:r,resetFields:i}=F({roleName:"",roleCode:"",comments:""}),c=()=>{b("search",r)},m=()=>{i(),c()};return(u,d)=>{const f=M,g=T,h=te,n=V,l=S,e=ae,t=j;return C(),R(t,{"label-col":{xl:7,lg:5,md:7,sm:4},"wrapper-col":{xl:17,lg:19,md:17,sm:20}},{default:o(()=>[a(e,{gutter:8},{default:o(()=>[a(h,{xl:6,lg:12,md:12,sm:24,xs:24},{default:o(()=>[a(g,{label:"\u89D2\u8272\u540D\u79F0"},{default:o(()=>[a(f,{value:v(r).roleName,"onUpdate:value":d[0]||(d[0]=s=>v(r).roleName=s),valueModifiers:{trim:!0},placeholder:"\u8BF7\u8F93\u5165","allow-clear":""},null,8,["value"])]),_:1})]),_:1}),a(h,{xl:6,lg:12,md:12,sm:24,xs:24},{default:o(()=>[a(g,{label:"\u89D2\u8272\u6807\u8BC6"},{default:o(()=>[a(f,{value:v(r).roleCode,"onUpdate:value":d[1]||(d[1]=s=>v(r).roleCode=s),valueModifiers:{trim:!0},placeholder:"\u8BF7\u8F93\u5165","allow-clear":""},null,8,["value"])]),_:1})]),_:1}),a(h,{xl:6,lg:12,md:12,sm:24,xs:24},{default:o(()=>[a(g,{label:"\u5907\u6CE8"},{default:o(()=>[a(f,{value:v(r).comments,"onUpdate:value":d[2]||(d[2]=s=>v(r).comments=s),valueModifiers:{trim:!0},placeholder:"\u8BF7\u8F93\u5165","allow-clear":""},null,8,["value"])]),_:1})]),_:1}),a(h,{xl:6,lg:12,md:12,sm:24,xs:24},{default:o(()=>[a(g,{class:"ele-text-right","wrapper-col":{span:24}},{default:o(()=>[a(l,null,{default:o(()=>[a(n,{type:"primary",onClick:c},{default:o(()=>[fe]),_:1}),a(n,{onClick:m},{default:o(()=>[be]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}}},he={__name:"role-edit",props:{visible:Boolean,data:Object},emits:["done","update:visible"],setup(x,{emit:b}){const r=x,i=p(null),c=p(!1),m=p(!1),{form:u,resetFields:d,assignFields:f}=F({roleId:void 0,roleName:"",roleCode:"",comments:""}),g=z({roleName:[{required:!0,message:"\u8BF7\u8F93\u5165\u89D2\u8272\u540D\u79F0",type:"string",trigger:"blur"}],roleCode:[{required:!0,message:"\u8BF7\u8F93\u5165\u89D2\u8272\u6807\u8BC6",type:"string",trigger:"blur"}]}),h=()=>{!i.value||i.value.validate().then(()=>{m.value=!0,(c.value?se:re)(u).then(e=>{m.value=!1,y.success(e),n(!1),b("done")}).catch(e=>{m.value=!1,y.error(e.message)})}).catch(()=>{})},n=l=>{b("update:visible",l)};return E(()=>r.visible,l=>{var e;l?r.data?(f(r.data),c.value=!0):c.value=!1:(d(),(e=i.value)==null||e.clearValidate())}),(l,e)=>{const t=M,s=T,_=j,N=q;return C(),R(N,{width:460,visible:x.visible,"confirm-loading":m.value,title:c.value?"\u4FEE\u6539\u89D2\u8272":"\u6DFB\u52A0\u89D2\u8272","body-style":{paddingBottom:"8px"},"onUpdate:visible":n,onOk:h},{default:o(()=>[a(_,{ref_key:"formRef",ref:i,model:v(u),rules:g,"label-col":{md:5,sm:5,xs:24},"wrapper-col":{md:19,sm:19,xs:24}},{default:o(()=>[a(s,{label:"\u89D2\u8272\u6807\u8BC6",name:"roleCode"},{default:o(()=>[a(t,{"allow-clear":"",maxlength:20,placeholder:"\u8BF7\u8F93\u5165\u89D2\u8272\u6807\u8BC6",value:v(u).roleCode,"onUpdate:value":e[0]||(e[0]=U=>v(u).roleCode=U)},null,8,["value"])]),_:1}),a(s,{label:"\u89D2\u8272\u540D\u79F0",name:"roleName"},{default:o(()=>[a(t,{"allow-clear":"",maxlength:20,placeholder:"\u8BF7\u8F93\u5165\u89D2\u8272\u540D\u79F0",value:v(u).roleName,"onUpdate:value":e[1]||(e[1]=U=>v(u).roleName=U)},null,8,["value"])]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["visible","confirm-loading","title"])}}},ye={style:{height:"60vh"},class:"ele-scrollbar-hover"},ke={components:H},xe=Object.assign(ke,{__name:"role-auth",props:{visible:Boolean,data:Object},emits:["update:visible"],setup(x,{emit:b}){const r=x,i=p([]),c=p(!1),m=p(!1),u=p([]),d=p([]),f=()=>{i.value=[],u.value=[],d.value=[],r.data&&(c.value=!0,ie(r.data.roleId).then(n=>{c.value=!1,i.value=J({data:n==null?void 0:n.map(l=>({...l,key:l.menuId,icon:void 0,menuIcon:l.icon})),idField:"menuId",parentIdField:"parentId",addParentIds:!0,parentIds:[]}),Q(()=>{const l=[],e=[];O(i.value,t=>{var s;t.key&&((s=t.children)!=null&&s.length?l.push(t.key):t.checked&&e.push(t.key))}),u.value=l,d.value=e})}).catch(n=>{c.value=!1,y.error(n.message)}))},g=()=>{var l;m.value=!0;const n=new Set;O(i.value,e=>{e.key&&d.value.some(t=>t===e.key)&&(n.add(e.key),e.parentIds&&e.parentIds.forEach(t=>{n.add(t)}))}),ce((l=r.data)==null?void 0:l.roleId,Array.from(n)).then(e=>{m.value=!1,y.success(e),h(!1)}).catch(e=>{m.value=!1,y.error(e.message)})},h=n=>{b("update:visible",n)};return E(()=>r.visible,n=>{n&&f()}),(n,l)=>{const e=pe,t=_e,s=q;return C(),R(s,{width:460,title:"\u5206\u914D\u6743\u9650",visible:x.visible,"confirm-loading":m.value,"onUpdate:visible":h,onOk:g},{default:o(()=>[a(t,{spinning:c.value},{default:o(()=>[I("div",ye,[a(e,{checkable:!0,"show-icon":!0,"tree-data":i.value,expandedKeys:u.value,"onUpdate:expandedKeys":l[0]||(l[0]=_=>u.value=_),checkedKeys:d.value,"onUpdate:checkedKeys":l[1]||(l[1]=_=>d.value=_)},{icon:o(({menuIcon:_})=>[_?(C(),R(G(_),{key:0})):A("",!0)]),_:1},8,["tree-data","expandedKeys","checkedKeys"])])]),_:1},8,["spinning"])]),_:1},8,["visible","confirm-loading"])}}}),Ce={class:"ele-body"},Ie=I("span",null,"\u65B0\u5EFA",-1),Ue=I("span",null,"\u5220\u9664",-1),Re=["onClick"],Ne=["onClick"],$e=I("a",{class:"ele-text-danger"},"\u5220\u9664",-1),we={name:"SystemRole"},et=Object.assign(we,{setup(x){const b=p(null),r=p([{title:"\u89D2\u8272\u540D\u79F0",dataIndex:"roleName"},{title:"\u89D2\u8272\u6807\u8BC6",dataIndex:"roleCode"},{title:"\u5907\u6CE8",dataIndex:"comments"},{title:"\u521B\u5EFA\u65F6\u95F4",dataIndex:"createTime",customRender:({text:e})=>D(e)},{title:"\u66F4\u65B0\u65F6\u95F4",dataIndex:"updateTime",customRender:({text:e})=>D(e)},{title:"\u64CD\u4F5C",key:"action",width:200,align:"center"}]),i=p([]),c=p(null),m=p(!1),u=p(!1),d=({page:e,limit:t,where:s,orders:_})=>ue({...s,..._,page:e,limit:t}),f=e=>{var t;i.value=[],(t=b==null?void 0:b.value)==null||t.reload({page:1,where:e})},g=e=>{c.value=e!=null?e:null,m.value=!0},h=e=>{c.value=e!=null?e:null,u.value=!0},n=e=>{const t=B("\u8BF7\u6C42\u4E2D..",0);de(e.roleId).then(s=>{t(),y.success(s),f()}).catch(s=>{t(),y.error(s.message)})},l=()=>{if(!i.value.length){y.error("\u8BF7\u81F3\u5C11\u9009\u62E9\u4E00\u6761\u6570\u636E");return}Y.confirm({title:"\u63D0\u793A",content:"\u786E\u5B9A\u8981\u5220\u9664\u9009\u4E2D\u7684\u89D2\u8272\u5417?",icon:a(Z),maskClosable:!0,onOk:()=>{const e=B("\u8BF7\u6C42\u4E2D..",0);me(i.value.map(t=>t.roleId)).then(t=>{e(),y.success(t),f()}).catch(t=>{e(),y.error(t.message)})}})};return(e,t)=>{const s=V,_=S,N=ee,U=ne,P=le,L=oe;return C(),W("div",Ce,[a(L,{bordered:!1},{default:o(()=>[a(ge,{onSearch:f}),a(P,{ref_key:"tableRef",ref:b,"row-key":"roleId",columns:r.value,datasource:d,selection:i.value,"onUpdate:selection":t[1]||(t[1]=k=>i.value=k),scroll:{x:800},"cache-key":"proSystemRoleTable"},{toolbar:o(()=>[a(_,null,{default:o(()=>[a(s,{type:"primary",class:"ele-btn-icon",onClick:t[0]||(t[0]=k=>g())},{icon:o(()=>[a(v(X))]),default:o(()=>[Ie]),_:1}),a(s,{danger:"",type:"primary",class:"ele-btn-icon",onClick:l},{icon:o(()=>[a(v(ve))]),default:o(()=>[Ue]),_:1})]),_:1})]),bodyCell:o(({column:k,record:$})=>[k.key==="action"?(C(),R(_,{key:0},{default:o(()=>[I("a",{onClick:w=>g($)},"\u4FEE\u6539",8,Re),a(N,{type:"vertical"}),I("a",{onClick:w=>h($)},"\u5206\u914D\u6743\u9650",8,Ne),a(N,{type:"vertical"}),a(U,{placement:"topRight",title:"\u786E\u5B9A\u8981\u5220\u9664\u6B64\u89D2\u8272\u5417\uFF1F",onConfirm:w=>n($)},{default:o(()=>[$e]),_:2},1032,["onConfirm"])]),_:2},1024)):A("",!0)]),_:1},8,["columns","selection"])]),_:1}),a(he,{visible:m.value,"onUpdate:visible":t[2]||(t[2]=k=>m.value=k),data:c.value,onDone:f},null,8,["visible","data"]),a(xe,{visible:u.value,"onUpdate:visible":t[3]||(t[3]=k=>u.value=k),data:c.value},null,8,["visible","data"])])}}});export{et as default};

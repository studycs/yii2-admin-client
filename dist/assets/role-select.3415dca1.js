import{I as v,r as g,m as h,o as t,c as n,w as c,j as f,k as B,e as I,t as k,F as x,u as y,cg as A,bB as b}from"./index.b0e1550a.js";import{l as w}from"./index.5d4e726e.js";const S=/^1\d{10}$/,Z=/^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/,F={__name:"role-select",props:{value:Array,placeholder:{type:String,default:"\u8BF7\u9009\u62E9\u89D2\u8272"}},emits:["update:value","blur"],setup(o,{emit:s}){const u=o,p=v(()=>{var e;return(e=u.value)==null?void 0:e.map(a=>a.roleId)}),r=g([]),d=e=>{s("update:value",e.map(a=>({roleId:a})))};w({limit:1e3,page:1}).then(e=>{r.value=e.list}).catch(e=>{h.error(e.message)});const m=()=>{s("blur")};return(e,a)=>{const _=A,i=b;return t(),n(i,{"allow-clear":"",mode:"multiple",value:y(p),placeholder:o.placeholder,"onUpdate:value":d,onBlur:m},{default:c(()=>[(t(!0),f(x,null,B(r.value,l=>(t(),n(_,{key:l.roleId,value:l.roleId},{default:c(()=>[I(k(l.roleName),1)]),_:2},1032,["value"]))),128))]),_:1},8,["value","placeholder"])}}};export{F as _,Z as e,S as p};
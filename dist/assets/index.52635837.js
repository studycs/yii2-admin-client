import{q as r,a2 as c,I as i,a3 as d,o as u,c as m,w as g,B as p,a4 as f}from"./index.b0e1550a.js";import{_}from"./index.764bd5c9.js";const C={closable:Boolean,color:String,size:{type:String,default:"mini",validator:e=>["large","middle","small","mini"].includes(e)},shape:{type:String,default:"default",validator:e=>["round","default","circle"].includes(e)}},h=r({name:"EleTag",components:{ATag:_},props:C,emits:["close"],setup(e,{emit:s}){const{authenticated:o}=c();return{tagClass:i(()=>o.value?["ele-tag",{"ele-tag-round":e.shape==="round"},{"ele-tag-circle":e.shape==="circle"},{"ele-tag-lg":e.size==="large"},{"ele-tag-md":e.size==="middle"},{"ele-tag-mini":e.size==="mini"}]:[]),onClose:t=>{s("close",t)}}}}),v=(e,s)=>{const o=e.__vccOpts||e;for(const[a,n]of s)o[a]=n;return o};function $(e,s,o,a,n,t){const l=d("ATag");return u(),m(l,{color:e.color,class:f(e.tagClass),closable:e.closable,onClose:e.onClose},{default:g(()=>[p(e.$slots,"default")]),_:3},8,["color","class","closable","onClose"])}const B=v(h,[["render",$]]);export{B as i};
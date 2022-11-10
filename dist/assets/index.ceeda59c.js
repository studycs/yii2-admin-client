import{b as $,aj as w,q as R,a2 as P,a6 as B,cQ as _,r as k,I as o,u as E,a9 as N,b$ as A,a3 as O,o as s,j as m,d as i,aS as u,B as C,c as b,aT as z,a4 as I}from"./index.b0e1550a.js";var T={icon:{tag:"svg",attrs:{viewBox:"0 0 1024 1024",focusable:"false"},children:[{tag:"path",attrs:{d:"M689 165.1L308.2 493.5c-10.9 9.4-10.9 27.5 0 37L689 858.9c14.2 12.2 35 1.2 35-18.5V183.6c0-19.7-20.8-30.7-35-18.5z"}}]},name:"caret-left",theme:"outlined"};const V=T;function h(e){for(var t=1;t<arguments.length;t++){var l=arguments[t]!=null?Object(arguments[t]):{},n=Object.keys(l);typeof Object.getOwnPropertySymbols=="function"&&(n=n.concat(Object.getOwnPropertySymbols(l).filter(function(a){return Object.getOwnPropertyDescriptor(l,a).enumerable}))),n.forEach(function(a){D(e,a,l[a])})}return e}function D(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}var p=function(t,l){var n=h({},t,l.attrs);return $(w,h({},n,{icon:V}),null)};p.displayName="CaretLeftOutlined";p.inheritAttrs=!1;const U=p;var M={icon:{tag:"svg",attrs:{viewBox:"0 0 1024 1024",focusable:"false"},children:[{tag:"path",attrs:{d:"M715.8 493.5L335 165.1c-14.2-12.2-35-1.2-35 18.5v656.8c0 19.7 20.8 30.7 35 18.5l380.8-328.4c10.9-9.4 10.9-27.6 0-37z"}}]},name:"caret-right",theme:"outlined"};const W=M;function S(e){for(var t=1;t<arguments.length;t++){var l=arguments[t]!=null?Object(arguments[t]):{},n=Object.keys(l);typeof Object.getOwnPropertySymbols=="function"&&(n=n.concat(Object.getOwnPropertySymbols(l).filter(function(a){return Object.getOwnPropertyDescriptor(l,a).enumerable}))),n.forEach(function(a){Y(e,a,l[a])})}return e}function Y(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}var y=function(t,l){var n=S({},t,l.attrs);return $(w,S({},n,{icon:W}),null)};y.displayName="CaretRightOutlined";y.inheritAttrs=!1;const q=y,H={width:{type:String,default:"200px"},space:{type:String,default:"16px"},collapse:Boolean,allowCollapse:Boolean,leftStyle:Object,rightStyle:Object,collapseBtnStyle:Object},Q=R({name:"EleSplitLayout",components:{CaretLeftOutlined:U,CaretRightOutlined:q},props:H,emits:["update:collapse"],setup(e,{emit:t}){const{authenticated:l}=P(),n=B(_),a=k(!1),v=o(()=>{var r,g;return(g=(r=E(n))==null?void 0:r.styleResponsive)!=null?g:!0}),c=o(()=>["ele-split-layout",{"ele-split-layout-collapse":e.allowCollapse&&a.value},{"ele-split-layout-responsive":v.value}]),f=o(()=>({width:`calc(${e.width} + ${e.space})`})),d=o(()=>{var r;return[{width:e.width,marginRight:e.space},(r=e.leftStyle)!=null?r:{}]}),L=o(()=>{var r;return[{left:e.width},(r=e.collapseBtnStyle)!=null?r:{}]}),j=r=>{if(!l.value){console.warn(A);return}a.value=typeof r=="boolean"?r:!a.value,t("update:collapse",a.value)};return N(()=>e.collapse,r=>{l.value&&(a.value=r)},{immediate:!0}),{isCollapse:a,layoutClass:c,leftWrapStyle:f,leftContentStyle:d,collapseStyle:L,toggleCollapse:j}}}),Z=(e,t)=>{const l=e.__vccOpts||e;for(const[n,a]of t)l[n]=a;return l};function F(e,t,l,n,a,v){const c=O("CaretRightOutlined"),f=O("CaretLeftOutlined");return s(),m("div",{class:I(e.layoutClass)},[i("div",{class:"ele-split-layout-left",style:u(e.leftWrapStyle)},[i("div",{class:"ele-split-layout-left-content",style:u(e.leftContentStyle)},[C(e.$slots,"default")],4)],4),i("div",{class:"ele-split-layout-content",style:u(e.rightStyle)},[C(e.$slots,"content")],4),e.allowCollapse?(s(),m("div",{key:0,class:"ele-split-layout-collapse-btn",style:u(e.collapseStyle),onClick:t[0]||(t[0]=d=>e.toggleCollapse())},[e.isCollapse?(s(),b(c,{key:0})):(s(),b(f,{key:1}))],4)):z("",!0),i("div",{class:"ele-split-layout-mask",onClick:t[1]||(t[1]=d=>e.toggleCollapse())})],2)}const J=Z(Q,[["render",F]]);export{J as i};

import{r as m,a as f,o as x,j as b,b as e,w as o,d as h,e as c,aF as g,g as v}from"./index.b0e1550a.js";import{C as y}from"./index.9a44580e.js";import{i as C}from"./index.f2502d2d.js";const k={class:"ele-body ele-body-card"},B={style:{"padding-left":"10px","margin-bottom":"15px"}},N=c("\u91CD\u65B0\u5F00\u59CB"),E=c("\u66F4\u65B0\u6570\u5B57"),V={name:"ExtensionCountUp"},G=Object.assign(V,{setup(j){const n=m(6317),r=f({useEasing:!0,useGrouping:!0,separator:",",decimal:".",prefix:"",suffix:""});let t;const _=a=>{t=a},d=()=>{!t||(t.reset(),t.start())},l=()=>{n.value+=100+Math.round(Math.random()*300)};return(a,w)=>{const i=C,s=g,u=v,p=y;return x(),b("div",k,[e(p,{title:"\u6EDA\u52A8\u6570\u5B57",bordered:!1},{default:o(()=>[h("h1",B,[e(i,{delay:0,"end-val":n.value,options:r,onReady:_},null,8,["end-val","options"])]),e(u,null,{default:o(()=>[e(s,{class:"ele-btn-icon",onClick:d},{default:o(()=>[N]),_:1}),e(s,{class:"ele-btn-icon",onClick:l},{default:o(()=>[E]),_:1})]),_:1})]),_:1})])}}});export{G as default};

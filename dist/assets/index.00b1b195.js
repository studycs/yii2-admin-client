import{r as _,o as v,c as j,w as d,b as l,d as g,e as p,m as c,aF as x,cn as B,cE as D,j as I}from"./index.b0e1550a.js";import{C as U}from"./index.9a44580e.js";/* empty css              */import"./index.e41e4f00.js";import"./index.7dd997be.js";import"./index.1b1a7df7.js";import{i as C}from"./index.10ac694e.js";import{R as E,_ as L}from"./Group.ef3b103e.js";import"./css.1dd79e5e.js";import"./ZoomOutOutlined.19b0b6ba.js";import"./DeleteOutlined.e5f00379.js";import"./DownloadOutlined.b6ed2567.js";import"./vuedraggable.umd.15cba163.js";const O={class:"ele-cell"},$=p("\u83B7\u53D6\u6570\u636E"),Q=g("div",{style:{"line-height":"22px"}},[g("em"),p("\u7981\u7528:")],-1),V={class:"ele-cell-content"},w=p("\u5426"),M=p("\u662F"),R={__name:"demo-basic",setup(b){const o=_([{uid:1,url:"https://cdn.eleadmin.com/20200609/c184eef391ae48dba87e3057e70238fb.jpg",status:"done"},{uid:2,url:"https://cdn.eleadmin.com/20200610/WLXm7gp1EbLDtvVQgkeQeyq5OtDm00Jd.jpg",status:"done"},{uid:3,url:"https://cdn.eleadmin.com/20200609/f6bc05af944a4f738b54128717952107.jpg",status:"done"}]),r=_(!1),m=()=>{console.log("data:",o.value),c.success("\u6570\u636E\u5DF2\u6253\u5370\u5728\u63A7\u5236\u53F0")},i=n=>{var a;const e=(a=o.value.find(u=>u.uid===n.uid))!=null?a:n;if(console.log("item:",e),o.value.length!==5){e.status="uploading",e.progress=20;const u=setInterval(()=>{e.progress==null?e.progress=20:e.progress+=20,e.progress===100&&(e.status="done",clearInterval(u))},1e3)}else e.status="uploading",e.progress==null?e.progress=20:e.progress<80&&(e.progress+=20),setTimeout(()=>{e.status="exception",c.error("\u4E0A\u4F20\u5931\u8D25, \u670D\u52A1\u5668\u7E41\u5FD9")},2e3)},s=n=>{if(!n.type.startsWith("image"))return c.error("\u53EA\u80FD\u9009\u62E9\u56FE\u7247"),!1;if(n.size/1024/1024>2)return c.error("\u5927\u5C0F\u4E0D\u80FD\u8D85\u8FC7 2MB"),!1},t=n=>{console.log("item-click:",n)};return(n,e)=>{const a=C,u=x,f=E,h=L,k=U;return v(),j(k,{title:"\u57FA\u7840\u793A\u4F8B",bordered:!1},{default:d(()=>[l(a,{value:o.value,"onUpdate:value":e[0]||(e[0]=y=>o.value=y),limit:8,disabled:r.value,"before-upload":s,drag:!0,onUpload:i,onItemClick:t},null,8,["value","disabled"]),g("div",O,[l(u,{type:"primary",onClick:m},{default:d(()=>[$]),_:1}),Q,g("div",V,[l(h,{value:r.value,"onUpdate:value":e[1]||(e[1]=y=>r.value=y)},{default:d(()=>[l(f,{value:!1},{default:d(()=>[w]),_:1}),l(f,{value:!0},{default:d(()=>[M]),_:1})]),_:1},8,["value"])])])]),_:1})}}},W={class:"ele-cell"},q=p(" \u63D0\u4EA4 "),J={__name:"demo-advanced",setup(b){const o=_([{uid:1,url:"https://cdn.eleadmin.com/20200609/c184eef391ae48dba87e3057e70238fb.jpg",status:"done"},{uid:2,url:"https://cdn.eleadmin.com/20200610/WLXm7gp1EbLDtvVQgkeQeyq5OtDm00Jd.jpg",status:"done"},{uid:3,url:"https://cdn.eleadmin.com/20200609/f6bc05af944a4f738b54128717952107.jpg",status:"done"}]),r=_(!1),m=()=>{if(s()){t();return}r.value=!0,o.value.forEach(e=>{e.status||i(e)})},i=e=>{e.progress==null?e.progress=20:e.progress+=20,e.status="uploading";const a=setInterval(()=>{e.progress==null?e.progress=20:e.progress+=20,e.progress===100&&(e.status="done",clearInterval(a),s()&&t())},Math.round(Math.random()*2500)+500)},s=()=>!o.value.some(e=>e.status!=="done"),t=()=>{c.success("\u5DF2\u5168\u90E8\u4E0A\u4F20\u5B8C\u6BD5"),console.log("data:",o.value),r.value=!1},n=()=>new Promise((e,a)=>{B.confirm({title:"\u63D0\u793A",content:"\u786E\u5B9A\u8981\u5220\u9664\u5417?",icon:l(D),maskClosable:!0,onOk:()=>{e()},onCancel:()=>{a()}})});return(e,a)=>{const u=C,f=x,h=U;return v(),j(h,{title:"\u624B\u52A8\u4E0A\u4F20",bordered:!1},{default:d(()=>[l(u,{value:o.value,"onUpdate:value":a[0]||(a[0]=k=>o.value=k),"auto-upload":!1,"before-remove":n},null,8,["value"]),g("div",W,[l(f,{type:"primary",loading:r.value,onClick:m},{default:d(()=>[q]),_:1},8,["loading"])])]),_:1})}}},N=p("\u83B7\u53D6\u6570\u636E"),X={__name:"demo-multiple",setup(b){const o=_([{uid:1,url:"https://cdn.eleadmin.com/20200609/c184eef391ae48dba87e3057e70238fb.jpg",status:"done"},{uid:2,url:"https://cdn.eleadmin.com/20200610/WLXm7gp1EbLDtvVQgkeQeyq5OtDm00Jd.jpg",status:"done"},{uid:3,url:"https://cdn.eleadmin.com/20200609/f6bc05af944a4f738b54128717952107.jpg",status:"done"}]),r=()=>{console.log("data:",o.value),c.success("\u6570\u636E\u5DF2\u6253\u5370\u5728\u63A7\u5236\u53F0")},m=s=>{const t={file:s,uid:s.uid,name:s.name,progress:0,status:void 0};if(!s.type.startsWith("image")){c.error("\u53EA\u80FD\u9009\u62E9\u56FE\u7247");return}if(s.size/1024/1024>2){c.error("\u5927\u5C0F\u4E0D\u80FD\u8D85\u8FC7 2MB");return}t.url=window.URL.createObjectURL(s),o.value.push(t),i(t)},i=s=>{var e;const t=(e=o.value.find(a=>a.uid===s.uid))!=null?e:s;console.log("item:",t),t.status="uploading",t.progress=20;const n=setInterval(()=>{t.progress==null?t.progress=20:t.progress+=20,t.progress===100&&(t.status="done",clearInterval(n))},1e3)};return(s,t)=>{const n=C,e=x,a=U;return v(),j(a,{title:"\u652F\u6301\u591A\u9009",bordered:!1},{default:d(()=>[l(n,{value:o.value,"onUpdate:value":t[0]||(t[0]=u=>o.value=u),limit:8,drag:!0,multiple:!0,"upload-handler":m,onUpload:i},null,8,["value"]),l(e,{type:"primary",onClick:r},{default:d(()=>[N]),_:1})]),_:1})}}},z={class:"ele-body ele-body-card"},F={name:"ExtensionUpload"},ae=Object.assign(F,{setup(b){return(o,r)=>(v(),I("div",z,[l(R),l(J),l(X)]))}});export{ae as default};

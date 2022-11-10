import{a as A,o as v,c as g,w as e,b as t,e as n,d as _,cg as B,bB as P,c5 as H,br as j,c6 as T,aF as x,g as w,_ as U,r as C,p as I,i as J,f as N,j as D}from"./index.b0e1550a.js";import{C as b}from"./index.9a44580e.js";import{a as E,p as R,b as f,c as S,m as F,d as L}from"./printer.54326f8e.js";import"./index.764bd5c9.js";import{i as M}from"./index.52635837.js";/* empty css              */import{R as V,_ as X}from"./Group.ef3b103e.js";const O=n("\u6A2A\u5411"),Q=n("\u7EB5\u5411"),q=n("0px"),W=n("50px"),Z=n("100px"),G=n("\u6253\u5370"),K=n(" \u6253\u5370\u9690\u85CF\u6307\u5B9A\u5185\u5BB9 "),Y=_("div",{style:{"margin-top":"16px"}},[_("span",{class:"ele-text-primary ele-printer-hide"}," \u6B64\u6BB5\u5185\u5BB9\u5728\u6240\u6709\u6253\u5370\u65F6\u9690\u85CF, \u6253\u5370\u5B8C\u590D\u539F\u3002 "),_("span",{class:"ele-text-danger demo-hide-1"}," \u6B64\u6BB5\u5185\u5BB9\u5728\u6307\u5B9A\u6253\u5370\u65F6\u624D\u9690\u85CF\u3002 ")],-1),tt={__name:"print-this",setup(r){const o=A({horizontal:void 0,margin:void 0,title:""}),i=()=>{E(o)},c=()=>{E({...o,hide:[".demo-hide-1"]})},u=l=>{o.horizontal={1:!0,0:!1}[String(l)]};return(l,a)=>{const s=B,d=P,p=H,m=j,h=T,y=x,$=w,k=b;return v(),g(k,{title:"\u6253\u5370\u5F53\u524D\u9875\u9762",bordered:!1},{default:e(()=>[t(h,{"label-col":{span:6},"wrapper-col":{span:18},style:{"max-width":"320px"}},{default:e(()=>[t(p,{label:"\u7EB8\u5F20\u65B9\u5411"},{default:e(()=>[t(d,{"allow-clear":"",value:{true:1,false:0}[String(o.horizontal)],placeholder:"\u4E0D\u8BBE\u7F6E","onUpdate:value":u},{default:e(()=>[t(s,{value:1},{default:e(()=>[O]),_:1}),t(s,{value:0},{default:e(()=>[Q]),_:1})]),_:1},8,["value"])]),_:1}),t(p,{label:"\u9875\u9762\u95F4\u8DDD"},{default:e(()=>[t(d,{"allow-clear":"",value:o.margin,"onUpdate:value":a[0]||(a[0]=z=>o.margin=z),placeholder:"\u4E0D\u8BBE\u7F6E"},{default:e(()=>[t(s,{value:"0px"},{default:e(()=>[q]),_:1}),t(s,{value:"50px"},{default:e(()=>[W]),_:1}),t(s,{value:"100px"},{default:e(()=>[Z]),_:1})]),_:1},8,["value"])]),_:1}),t(p,{label:"\u9875\u9762\u6807\u9898"},{default:e(()=>[t(m,{"allow-clear":"",value:o.title,"onUpdate:value":a[1]||(a[1]=z=>o.title=z),placeholder:"\u4E0D\u8BBE\u7F6E"},null,8,["value"])]),_:1})]),_:1}),t($,null,{default:e(()=>[t(y,{onClick:i},{default:e(()=>[G]),_:1}),t(y,{class:"ele-btn-icon",onClick:c},{default:e(()=>[K]),_:1})]),_:1}),Y]),_:1})}}};const et=r=>(I("data-v-8bb2d39a"),r=r(),J(),r),ot=et(()=>_("div",{class:"demo-print-div"},"\u793A\u4F8B\u793A\u4F8B\u793A\u4F8B\u793A\u4F8B\u793A\u4F8B",-1)),nt={class:"demo-print-right"},at=n("\u793A\u4F8B"),st=n("\u793A\u4F8B"),lt=n("\u793A\u4F8B"),dt={style:{"margin-top":"12px"}},it={style:{"margin-top":"20px"}},rt=n("\u6253\u5370"),ct={__name:"print-div",setup(r){const o=C(null),i=()=>{R(o.value)},c=C("\u793A\u4F8B\u793A\u4F8B\u793A\u4F8B");return(u,l)=>{const a=M,s=j,d=x,p=b;return v(),g(p,{title:"\u6253\u5370\u6307\u5B9A\u533A\u57DF",bordered:!1},{default:e(()=>[_("div",{ref_key:"printRef",ref:o,class:"demo-print-group"},[ot,_("div",nt,[_("div",null,[t(a,{size:"mini",color:"blue"},{default:e(()=>[at]),_:1}),t(a,{size:"mini",color:"green"},{default:e(()=>[st]),_:1}),t(a,{size:"mini",color:"orange"},{default:e(()=>[lt]),_:1})]),_("div",dt,[t(s,{value:c.value,"onUpdate:value":l[0]||(l[0]=m=>c.value=m)},null,8,["value"])])])],512),_("div",it,[t(d,{onClick:i},{default:e(()=>[rt]),_:1})])]),_:1})}}},pt=U(ct,[["__scopeId","data-v-8bb2d39a"]]),_t=n("\u4E0D\u663E\u793A"),ut=n("\u663E\u793A"),mt=n(" \u6253\u5370\u4EFB\u610F\u5185\u5BB9 "),ht=n(" \u8BBE\u7F6E\u9875\u7709\u9875\u811A "),ft=n("\u6253\u5370\u56FE\u7247"),vt={__name:"print-html",setup(r){const o=A({loading:!1}),i=()=>{f({...o,html:['<h1 style="color: #1890ff;">EleAdmin \u540E\u53F0\u7BA1\u7406\u6A21\u677F</h1>','<div style="color: #F51D2C;">\u901A\u7528\u578B\u540E\u53F0\u7BA1\u7406\u6A21\u677F\uFF0C\u754C\u9762\u7F8E\u89C2\u3001\u5F00\u7BB1\u5373\u7528</div>'].join("")})},c=()=>{f({...o,margin:0,html:['<div style="padding: 0 60px;">',Array(38).join("<h3>EleAdmin \u540E\u53F0\u7BA1\u7406\u6A21\u677F</h3>"),"</div>"].join(""),header:`
        <div style="display: flex;font-size: 12px;padding: 15px 30px 25px;">
          <div>\u6211\u662F\u9875\u7709\u5DE6\u4FA7</div>
          <div style="flex: 1;text-align: center;">\u6211\u662F\u9875\u7709</div>
          <div>\u6211\u662F\u9875\u7709\u53F3\u4FA7</div>
        </div>`,footer:`
        <div style="display: flex;font-size: 12px;padding: 15px 30px 25px;">
          <div>\u6211\u662F\u9875\u811A\u5DE6\u4FA7</div>
          <div style="flex: 1;text-align: center;">\u6211\u662F\u9875\u811A</div>
          <div>\u6211\u662F\u9875\u811A\u53F3\u4FA7</div>
        </div>`,style:"<style> h3 { color: red; } </style>"})},u=()=>{f({...o,margin:0,html:'<img src="https://cdn.eleadmin.com/20200610/LrCTN2j94lo9N7wEql7cBr1Ux4rHMvmZ.jpg" style="width: 100%;"/>'})};return(l,a)=>{const s=V,d=X,p=H,m=T,h=x,y=w,$=b;return v(),g($,{title:"\u6253\u5370\u4EFB\u610F\u5185\u5BB9",bordered:!1},{default:e(()=>[t(m,{"label-col":{span:6},"wrapper-col":{span:18},style:{"max-width":"320px"}},{default:e(()=>[t(p,{label:"loading"},{default:e(()=>[t(d,{value:o.loading,"onUpdate:value":a[0]||(a[0]=k=>o.loading=k)},{default:e(()=>[t(s,{value:!1},{default:e(()=>[_t]),_:1}),t(s,{value:!0},{default:e(()=>[ut]),_:1})]),_:1},8,["value"])]),_:1})]),_:1}),t(y,{style:{"flex-wrap":"wrap"}},{default:e(()=>[t(h,{class:"ele-btn-icon",onClick:i},{default:e(()=>[mt]),_:1}),t(h,{class:"ele-btn-icon",onClick:c},{default:e(()=>[ht]),_:1}),t(h,{class:"ele-btn-icon",onClick:u},{default:e(()=>[ft]),_:1})]),_:1})]),_:1})}}},gt=n("\u5206\u9875\u6253\u5370"),xt=n(" \u5206\u9875\u6253\u5370\u8BBE\u7F6E\u9875\u7709\u9875\u811A "),bt={__name:"print-page",setup(r){const o=()=>{S({pages:["<h3>\u6211\u662F\u7B2C\u4E00\u9875</h3>","<h3>\u6211\u662F\u7B2C\u4E8C\u9875</h3>","<h3>\u6211\u662F\u7B2C\u4E09\u9875</h3>","<h3>\u6211\u662F\u7B2C\u56DB\u9875</h3>","<h3>\u6211\u662F\u7B2C\u4E94\u9875</h3>"],style:"<style> h3 { color: red; } </style>",loading:!1})},i=()=>{S({pages:["<h3>\u6211\u662F\u7B2C\u4E00\u9875</h3>","<h3>\u6211\u662F\u7B2C\u4E8C\u9875</h3>","<h3>\u6211\u662F\u7B2C\u4E09\u9875</h3>","<h3>\u6211\u662F\u7B2C\u56DB\u9875</h3>","<h3>\u6211\u662F\u7B2C\u4E94\u9875</h3>"],margin:0,padding:"20px 60px",header:`
        <div style="display: flex;font-size: 12px;padding: 15px 30px;">
          <div>\u6211\u662F\u9875\u7709\u5DE6\u4FA7</div>
          <div style="flex: 1;text-align: center;">\u6211\u662F\u9875\u7709</div>
          <div>\u6211\u662F\u9875\u7709\u53F3\u4FA7</div>
        </div>`,footer:`
        <div style="display: flex;font-size: 12px;padding: 15px 30px;">
          <div>\u6211\u662F\u9875\u811A\u5DE6\u4FA7</div>
          <div style="flex: 1;text-align: center;">\u6211\u662F\u9875\u811A</div>
          <div>\u6211\u662F\u9875\u811A\u53F3\u4FA7</div>
        </div>`,style:"<style> h3 { color: red; } </style>",loading:!1})};return(c,u)=>{const l=x,a=w,s=b;return v(),g(s,{title:"\u5206\u9875\u6253\u5370",bordered:!1},{default:e(()=>[t(a,null,{default:e(()=>[t(l,{class:"ele-btn-icon",onClick:o},{default:e(()=>[gt]),_:1}),t(l,{class:"ele-btn-icon",onClick:i},{default:e(()=>[xt]),_:1})]),_:1})]),_:1})}}},yt=n(" \u6253\u5370\u6570\u636E\u8868\u683C "),wt=n("\u6253\u5370pdf"),$t=n("\u6253\u5370\u6761\u7801"),kt=n(" \u6253\u5370\u81EA\u5B9A\u4E49\u8868\u683C "),zt={__name:"print-advanced",setup(r){const o=C([{key:1,username:"\u5F20\u5C0F\u4E09",amount:18,province:"\u6D59\u6C5F",city:"\u676D\u5DDE",zone:"\u897F\u6E56\u533A",street:"\u897F\u6EAA\u8857\u9053",address:"\u897F\u6EAA\u82B1\u56ED30\u680B1\u5355\u5143"},{key:2,username:"\u674E\u5C0F\u56DB",amount:39,province:"\u6C5F\u82CF",city:"\u82CF\u5DDE",zone:"\u59D1\u82CF\u533A",street:"\u4E1D\u7EF8\u8DEF",address:"\u5929\u5885\u4E4B\u57CE9\u5E622\u5355\u5143"},{key:3,username:"\u738B\u5C0F\u4E94",amount:8,province:"\u6C5F\u897F",city:"\u5357\u660C",zone:"\u9752\u5C71\u6E56\u533A",street:"\u827E\u6EAA\u6E56\u529E\u4E8B\u5904",address:"\u4E2D\u5174\u548C\u56ED1\u5E623\u5355\u5143"},{key:4,username:"\u8D75\u5C0F\u516D",amount:16,province:"\u798F\u5EFA",city:"\u6CC9\u5DDE",zone:"\u4E30\u6CFD\u533A",street:"\u5357\u6D0B\u8857\u9053",address:"\u5357\u6D0B\u67516\u5E621\u5355\u5143"},{key:5,username:"\u5B59\u5C0F\u4E03",amount:12,province:"\u6E56\u5317",city:"\u6B66\u6C49",zone:"\u6B66\u660C\u533A",street:"\u6B66\u660C\u5927\u9053",address:"\u4E24\u6E56\u82B1\u56ED16\u5E622\u5355\u5143"},{key:6,username:"\u5468\u5C0F\u516B",amount:11,province:"\u5B89\u5FBD",city:"\u9EC4\u5C71",zone:"\u9EC4\u5C71\u533A",street:"\u6C64\u53E3\u9547",address:"\u6E29\u6CC9\u675121\u53F7"}]),i=()=>{const a=F(o.value,[[{field:"username",width:150,rowspan:2,title:"\u8054\u7CFB\u4EBA"},{align:"center",colspan:3,title:"\u5730\u5740"},{field:"amount",width:120,rowspan:2,title:"\u91D1\u989D",align:"center"}],[{field:"province",width:120,title:"\u7701"},{field:"city",width:120,title:"\u5E02"},{width:200,title:"\u533A",templet:s=>`<span style="color: red;">${s.zone}</span>`}]]);f({html:"<p>\u63D0\u4F9B\u6570\u636E\u548Ccols\u914D\u7F6E\u81EA\u52A8\u751F\u6210\u590D\u6742\u8868\u683C\uFF0C\u975E\u5E38\u7684\u65B9\u4FBF</p>"+a,loading:!1})},c=()=>{L({url:"https://cdn.eleadmin.com/20200610/20200708224450.pdf"})},u=()=>{f({html:`
      <div class="code-group">
        <div class="code-group-title">EasyWeb\u6388\u6743\u51ED\u8BC1</div>
        <div class="code-group-body">
          <p>\u624B\u673A\u626B\u63CF\u53F3\u4FA7\u4E8C\u7EF4\u7801\uFF0C\u6216\u767B\u5F55</p>
          <p>\u7F51\u7AD9https://easyweb.vip</p>
          <p>\u67E5\u8BE2\u4EA7\u54C1\u771F\u4F2A</p>
          <img src="https://cdn.eleadmin.com/20200610/20200708230820.png" width="70px" height="70px"/>
          <span>515AE3X1</span>
        </div>
      </div>
      <style>
        .code-group {
          display: inline-block;
          border: 1px solid #ccc;
          border-radius: 5px;
          background-color: #fff;
        }
        .code-group-title {
          border-bottom: 1px solid #ccc;
          padding: 10px 15px;
          text-align: center;
          font-size: 18px;
        }
        .code-group-body {
          text-align: center;
          position: relative;
          padding: 15px 115px 0 25px;
          min-height: 90px;
        }
        .code-group-body > p {
          margin: 0 0 13px 0;
          font-size: 15px;
          font-family: \u5E7C\u5706;
          color: #333;
          font-weight: 600;
        }
        .code-group-body > img, .code-group-body > span {
          position: absolute;
          right: 25px;
          top: 15px;
        }
        .code-group-body > span {
          top: 90px;
        }
      </style>
    `,loading:!1})},l=()=>{f({html:`
      <h2 style="text-align: center;color: #333;">XxxXx\u73ED\u8BFE\u7A0B\u8868</h2>
      <table class="ele-printer-table">
        <colgroup>
          <col width="130px"/>
        </colgroup>
        <tr>
          <th style="position: relative;">
            <div style="position: absolute;right: 20px;top: 10px;line-height: normal;">\u661F\u671F</div>
            <div style="position: absolute;left: 20px;bottom: 10px;line-height: normal;">\u65F6\u95F4</div>
            <div
              style="border-top: 1px solid #000;width:141px;height: 0;position: absolute;left: 0;top: 0;transform: rotate(22deg);transform-origin: 0 0;">
            </div>
          </th>
          <th>\u5468\u4E00</th>
          <th>\u5468\u4E8C</th>
          <th>\u5468\u4E09</th>
          <th>\u5468\u56DB</th>
          <th>\u5468\u4E94</th>
        </tr>
        <tr>
          <td>8:00-10:00</td>
          <td>HTML5\u7F51\u9875\u8BBE\u8BA1<br/>\u66F2\u4E3D\u4E3D - 441\u6559\u5BA4</td>
          <td>\u6570\u636E\u5E93\u539F\u7406\u53CA\u5E94\u7528<br/>\u4E25\u826F - 716\u673A\u623F</td>
          <td>JavaSE\u521D\u7EA7\u7A0B\u5E8F\u8BBE\u8BA1<br/>\u8096\u8427 - 715\u673A\u623F</td>
          <td></td>
          <td>JavaScript\u7A0B\u5E8F\u8BBE\u8BA1<br/>\u8463\u5A1C - 733\u673A\u623F</td>
        </tr>
        <tr>
          <td>10:30-12:30</td>
          <td></td>
          <td>JavaScript\u7A0B\u5E8F\u8BBE\u8BA1<br/>\u8463\u5A1C - 733\u673A\u623F</td>
          <td></td>
          <td>\u950B\u5229\u7684jQuery<br/>\u7A0B\u548F - 303\u6559\u5BA4</td>
          <td>JavaEE\u5E94\u7528\u5F00\u53D1<br/>\u5468\u661F - 303\u6559\u5BA4</td>
        </tr>
        <tr>
          <td colspan="6" style="height: auto;">\u5348\u4F11</td>
        </tr>
        <tr>
          <td>13:30-15:30</td>
          <td>JavaSE\u521D\u7EA7\u7A0B\u5E8F\u8BBE\u8BA1<br/>\u8096\u8427 - 715\u673A\u623F</td>
          <td></td>
          <td>HTML5\u7F51\u9875\u8BBE\u8BA1<br/>\u66F2\u4E3D\u4E3D - 441\u6559\u5BA4</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>16:00-18:00</td>
          <td></td>
          <td>JavaEE\u5E94\u7528\u5F00\u53D1<br/>\u5468\u661F - 303\u6559\u5BA4</td>
          <td></td>
          <td>\u6570\u636E\u5E93\u539F\u7406\u53CA\u5E94\u7528<br/>\u4E25\u826F - 716\u673A\u623F</td>
          <td></td>
        </tr>
      </table>
      <style>
        th, td {
          text-align: center;
          line-height: 35px;
        }
        td {
          height: 100px;
        }
      </style>
    `,horizontal:!0,title:".",loading:!1})};return(a,s)=>{const d=x,p=N,m=w,h=b;return v(),g(h,{title:"\u8FDB\u9636\u793A\u4F8B",bordered:!1},{default:e(()=>[t(m,{style:{"flex-wrap":"wrap"}},{default:e(()=>[t(d,{class:"ele-btn-icon",onClick:i},{default:e(()=>[yt]),_:1}),t(p,{title:"\u5BF9\u4E8E\u590D\u6742\u7684\u6253\u5370\u9700\u6C42\uFF0C\u53EF\u4EE5\u540E\u7AEF\u751F\u6210pdf\u7ED9\u524D\u7AEF\u6253\u5370"},{default:e(()=>[t(d,{class:"ele-btn-icon",onClick:c},{default:e(()=>[wt]),_:1})]),_:1}),t(d,{class:"ele-btn-icon",onClick:u},{default:e(()=>[$t]),_:1}),t(d,{class:"ele-btn-icon",onClick:l},{default:e(()=>[kt]),_:1})]),_:1})]),_:1})}}},Ct={class:"ele-body ele-body-card"},Et={name:"ExtensionPrinter"},Ut=Object.assign(Et,{setup(r){return(o,i)=>(v(),D("div",Ct,[t(tt),t(pt),t(vt),t(bt),t(zt)]))}});export{Ut as default};

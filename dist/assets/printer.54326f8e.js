const H='<object id="WebBrowser" classid="clsid:8856F961-340A-11D0-A96B-00C04FD705A2" width="0" height="0"></object>',x="ele-printer-frame",F="ele-printer-style",L="ele-printer-set",$="ele-printer-loading",y="ele-printer-printing",m="ele-printer-hide",w="ele-printer-hide-none";function S(e=8){const t="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";let o="p_";for(let l=0;l<e;l++)o+=t.charAt(Math.floor(Math.random()*t.length));return o}function b(){return!!window.ActiveXObject||"ActiveXObject"in window}function C(){const e=document.getElementById(x);e&&e.parentNode&&e.parentNode.removeChild(e);const t=document.createElement("iframe");return t.id=x,t.style.width="0px",t.style.height="0px",t.style.position="fixed",t.style.visibility="hidden",document.body.appendChild(t),t.focus(),t}function P(e=!1){return`
    @media print {
      html, body {
        padding: 0;
        margin: 0;
      }
    }

    /* \u6253\u5370\u65F6\u4E0D\u663E\u793A\u7684\u5143\u7D20 */
    .${m}.${y} {
      visibility: hidden !important;
    }
    .${m} {
      ${e?"visibility: hidden !important;":""}
    }
    .${m}.${y}.${w},
    .${m}.${w}${e?"":"-no"} {
      display: none !important;
    }

    /* \u8868\u683C\u6837\u5F0F */
    .ele-printer-table {
      width: 100%;
      border-collapse: collapse;
      border: none;
    }
    .ele-printer-table td, .ele-printer-table th {
      color: #333;
      padding: 9px 15px;
      border: 1px solid #333;
      word-break: break-all;
    }

    /* loading \u6837\u5F0F */
    #${$} {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: hsla(0, 0%, 100%, .9);
      z-index: 19000000;
    }
    #${$}:after {
      content: "";
      width: 40px;
      height: 40px;
      position: absolute;
      top: 50%;
      left: 50%;
      margin: -20px auto auto -20px;
      border: 2px solid #3296FA;
      border-right-color: transparent;
      border-bottom-color: transparent;
      border-radius: 50%;
      animation: ele-printer-loading-anim .8s linear infinite;
    }
    @keyframes ele-printer-loading-anim {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }

    /* \u5E26\u9875\u7709\u9875\u811A\u9875\u9762\u6837\u5F0F */
    .ele-printer-table-page {
      width: 100%;
      border-collapse: collapse;
      border: none;
    }
    .ele-printer-table-page td {
      padding: 0;
      border: none;
    }
  `}function j(e,t,o){return`
    <style>
      body {
        margin: 0 !important;
      }

      /* \u81EA\u5B9A\u4E49\u8FB9\u8DDD\u53CA\u5BBD\u9AD8\u6837\u5F0F */
      .ele-printer-page .ele-printer-page-item {
        width: ${t!=null?t:"auto"};
        height: ${o!=null?o:"auto"};
        padding: ${e!=null?e:"0"};
        page-break-after: always !important;
        box-sizing: border-box !important;
        border: none !important;
        position: relative;
      }

      /* \u8C03\u8BD5\u6A21\u5F0F\u6837\u5F0F */
      .ele-printer-page.ele-printer-debug .ele-printer-page-item {
        border: 1px solid red !important;
      }

      /* \u5168\u5C40\u6837\u5F0F */
      ${P(!0)}
    </style>
  `}function _(e){const{beforeJs:t,doneJs:o}=M(e.before,e.done),r=(e.blank||e.iePreview!==!1&&b())&&e.close!==!1?"window.close();":"",n="parent.hideElePrinterLoading&&parent.hideElePrinterLoading();",i=[];return i.push(`<style type="text/css" media="print" id="${L}">`),i.push("@page {"),typeof e.horizontal<"u"&&i.push(`size: ${e.horizontal?"landscape":"portrait"};`),e.margin!=null&&i.push(`margin: ${e.margin};`),i.push("}"),i.push("</style>"),e.iePreview!==!1&&b()?(i.push(H),e.print!==!1&&i.push(`
        <script>
          window.onload = function() {
            ${t}
            try {
              window.WebBrowser.ExecWB(7, 1);
            } catch(e) {
              console.error(e);
              window.print();
            }
            ${n}
            ${o}
            ${r}
          }
        <\/script>
      `)):e.print!==!1&&i.push(`
      <script>
        window.onload = function() {
          ${t}
          window.print();
          ${n}
          ${o}
          ${r}
        }
      <\/script>
    `),i.join("")}function N(){if(!document.getElementById(F)){const e=document.createElement("style");e.id=F,e.setAttribute("type","text/css"),e.innerHTML=P(),document.body.appendChild(e)}}function T(e,t,o){if(!t&&!o)return e!=null?e:"";let l='<table class="ele-printer-table-page">';return t&&(l+=`<thead><tr><td>${t}</td></tr></thead>`),l+=`<tbody><tr><td>${e!=null?e:""}</td></tr></tbody>`,o&&(l+=`<tfoot><tr><td>${o}</td></tr></tfoot>`),l+"</table>"}function M(e,t){const o="p"+S();window.elePrinterBefore||(window.elePrinterBefore={}),window.elePrinterDone||(window.elePrinterDone={}),e&&(window.elePrinterBefore[o]=e),t&&(window.elePrinterDone[o]=t);const l=`;parent.elePrinterBefore&&parent.elePrinterBefore.${o}&&parent.elePrinterBefore.${o}();`,r=`;parent.elePrinterDone&&parent.elePrinterDone.${o}&&parent.elePrinterDone.${o}();`;return{taskId:o,beforeJs:l,doneJs:r}}function I(e,t){var o,l;if(Array.prototype.forEach.call(document.getElementsByClassName(m),n=>{n!=null&&n.classList&&n.classList.add(y)}),!e)return;const r=(Array==null?void 0:Array.isArray(e))||((o=NodeList==null?void 0:NodeList.prototype)==null?void 0:o.isPrototypeOf(e))||((l=HTMLCollection==null?void 0:HTMLCollection.prototype)==null?void 0:l.isPrototypeOf(e));Array.prototype.forEach.call(r?e:[e],n=>{typeof n=="string"?Array.prototype.forEach.call(document.querySelectorAll(n),i=>{i!=null&&i.classList&&(i.classList.add(m),i.classList.add(y),t&&i.classList.add(w))}):n!=null&&n.classList&&(n.classList.add(m),n.classList.add(y),t&&n.classList.add(w))})}function O(e){var t,o;if(Array.prototype.forEach.call(document.getElementsByClassName(m),r=>{r!=null&&r.classList&&r.classList.remove(y)}),!e)return;const l=(Array==null?void 0:Array.isArray(e))||((t=NodeList==null?void 0:NodeList.prototype)==null?void 0:t.isPrototypeOf(e))||((o=HTMLCollection==null?void 0:HTMLCollection.prototype)==null?void 0:o.isPrototypeOf(e));Array.prototype.forEach.call(l?e:[e],r=>{typeof r=="string"?Array.prototype.forEach.call(document.querySelectorAll(r),n=>{n!=null&&n.classList&&(n.classList.remove(m),n.classList.remove(y),n.classList.remove(w))}):r!=null&&r.classList&&(r.classList.remove(m),r.classList.remove(y),r.classList.remove(w))})}function B(){N();let e=document.getElementById($);return e||(e=document.createElement("div"),e.id=$,document.body.appendChild(e)),e.style.display="block",window.hideElePrinterLoading=()=>{A()},e}function A(){const e=document.getElementById($);e&&(e.style.display="none")}function R(e={}){var t;window.focus(),N();const o=document.getElementById(L);o&&o.parentNode&&o.parentNode.removeChild(o);const l=[];if(typeof e.horizontal=="boolean"&&l.push(`size: ${e.horizontal?"landscape":"portrait"};`),e.margin!=null&&l.push(`margin: ${e.margin};`),l){const i=document.createElement("style");i.id=L,i.setAttribute("type","text/css"),i.setAttribute("media","print"),i.innerHTML=`@page { ${l.join("")} }`,document.body.appendChild(i)}I(e.hide,e.isHideNone);const r=document.title;e.title&&(document.title=e.title);let n;if(e.blank){if(n=window.open("","_blank"),n){n.focus();const i=n.document;if(i){i.open();let u="<!DOCTYPE html>"+((t=document.getElementsByTagName("html")[0])==null?void 0:t.outerHTML);u=u.replace(/<script/g,'<div style="display:none;" ').replace(/<\/script>/g,"</div>");const g=function(v){u=u.replace(/<\/html>/,`${v}</html>`)};e.iePreview!==!1&&b()?(document.getElementById("WebBrowser")||g(H),g(`
          <script>
            window.onload = function() {
              try {
                window.WebBrowser.ExecWB(7,1);
              } catch(e) {
                console.error(e);
                window.print();
              }
              ${e.close!==!1?"window.close();":""}
            }
          <\/script>
          `)):g(`
          <script>
            window.onload = function() {
              window.print();
              ${e.close!==!1?"window.close();":""}
            }
          <\/script>
          `),i.write(u),i.close()}}}else if(n=window,e.iePreview!==!1&&b()){if(!document.getElementById("WebBrowser")){const i=document.createElement("object");i.id="WebBrowser",i.setAttribute("classid","clsid:8856F961-340A-11D0-A96B-00C04FD705A2"),i.style.display="none",document.body.appendChild(i)}try{window.WebBrowser.ExecWB(7,1)}catch(i){console.error(i),n.print()}}else n.print();return e.title&&(document.title=r),O(e.hide),n}function z(e){var t,o;e.loading!==!1&&e.blank!==!0&&B();let l,r;if(e.blank||e.iePreview!==!1&&b())l=window.open("","_blank"),r=l==null?void 0:l.document;else{const n=C();l=n.contentWindow,r=n.contentDocument||(l==null?void 0:l.document)}return l&&(l.focus(),r&&e.html&&(r.open(),r.write(`
        <!DOCTYPE html>
        <head>
          <meta charset="UTF-8"/>
          <title>${(t=e.title)!=null?t:""}</title>
          <style>
            ${P(!0)}
          </style>
          ${(o=e.style)!=null?o:""}
        </head>
        <html>
        <body>
          ${T(e.html,e.header,e.footer)}
          ${_(e)}
        </body>
        </html>
      `),r.close())),l}function G(e){var t,o,l,r;e.loading!==!1&&e.blank!==!0&&B();let n,i;if(e.blank||e.iePreview!==!1&&b())n=window.open("","_blank"),i=n==null?void 0:n.document;else{const u=C();n=u.contentWindow,i=u.contentDocument||(n==null?void 0:n.document)}if(n&&i){n.focus();const u=(o=(t=e.pages)==null?void 0:t.map(D=>`<div class="ele-printer-page-item">${D}</div>`).join(""))!=null?o:"",v=`<div class="${"ele-printer-page"+(e.isDebug?" ele-printer-debug":"")}">${u}</div>`;i.open(),i.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="UTF-8"/>
          <title>${(l=e.title)!=null?l:""}</title>
          ${j(e.padding,e.width,e.height)}
          ${(r=e.style)!=null?r:""}
        </head>
        <body>
        ${T(v,e.header,e.footer)}
        ${_(e)}
        </body>
      </html>
    `),i.close()}return n}function J(e){e.loading!==!1&&B();const t=C(),o=t.contentWindow;t.onload=()=>{!t.getAttribute("src")||(t.focus(),e.before&&e.before(),o==null||o.print(),A(),e.done&&e.done())};function l(r){const n=new window.Blob([r],{type:"application/pdf"});window.navigator&&window.navigator.msSaveOrOpenBlob?(window.navigator.msSaveOrOpenBlob(n,"print.pdf"),A()):t.setAttribute("src",window.URL.createObjectURL(n))}if(e.arraybuffer)l(e.arraybuffer);else if(e.url){const r=new window.XMLHttpRequest;r.open("GET",e.url,!0),r.responseType="arraybuffer",r.onload=()=>{if([200,201].indexOf(r.status)===-1)return e.error&&e.error(r.status,r.statusText);l(r.response)},r.send()}return o}function X(e,t){t.forEach(a=>{a.forEach(s=>{s.INIT_OK=void 0,s.key=void 0,s.colGroup=void 0,s.HAS_PARENT=void 0,s.parentKey=void 0,s.PARENT_COL_INDEX=void 0})});const o=[];let l=0;for(let a=0;a<t.length;a++){const s=t[a];for(let d=0;d<s.length;d++){const c=s[d];if(!c){s.splice(d,1);continue}c.key=a+"-"+d;let E;if(c.colGroup||c.colspan&&c.colspan>1){c.colGroup=!0,E=[],l++;let f=0;for(let h=0;h<t[a+1].length;h++){const p={...t[a+1][h]};if(p.HAS_PARENT||f>1&&f==c.colspan){t[a+1][h]=p;continue}p.HAS_PARENT=!0,p.parentKey=a+"-"+d,p.key=a+1+"-"+h,p.PARENT_COL_INDEX=l,E.push(p),f=f+Number(p.colspan&&p.colspan>1?p.colspan:1),t[a+1][h]=p}}c.CHILD_COLS=E,c.PARENT_COL_INDEX||o.push(c),t[a][d]=c}}const r=function(a,s){s||(s=o);for(let d=0;d<s.length;d++){const c=s[d];a&&a(d,c),c.CHILD_COLS&&r(a,c.CHILD_COLS)}};let n=1,i=!0;const u=[];r((a,s)=>{s.colGroup||(u.push("<col"),s.width&&u.push(` width="${s.width}"`),u.push("/>"),s.width&&!/\d+%$/.test(String(s.width))?n+=s.width+1:i=!1)});const v="<thead>"+t.map(a=>"<tr>"+a.map(d=>`<th
                    colspan="${d.colspan||1}"
                    rowspan="${d.rowspan||1}"
                    align="${d.thAlign||d.align||"left"}"
                    style="${d.thStyle}">${d.title||""}
                  </th>`).join("")+"</tr>").join("")+"</thead>",k="<tbody>"+e.map((a,s)=>{const d=["<tr>"];let c=0;return r((E,f)=>{if(!f.colGroup){const h=f.field?a[f.field]:"",p=f.templet?f.templet(a,s,c):h,W=f.align||"left";d.push(`<td align="${W}" style="${f.style}">${p}</td>`),c++}}),d.push("</tr>"),d.join("")}).join("")+"</tbody>";return`<table
            style="width: ${i?n+"px":"100%"};"
            class="ele-printer-table">
            <colgroup>${u.join("")}</colgroup>
            ${v} ${k}
          </table>`}function q(e,t){if(!e)return null;const o=Array.prototype.filter.call(document.body.children,i=>!(typeof(i==null?void 0:i.tagName)=="string"&&["style","script","link"].includes(i.tagName.toLowerCase())));I(o,!0);const l=e.parentNode,r=e.nextElementSibling;document.body.append(e);const n=R(t);return r?l==null||l.insertBefore(e,r):l==null||l.append(e),O(o),n}export{R as a,z as b,G as c,J as d,X as m,q as p};

import{q as E,N as w,a6 as A,bN as j,ad as k,bu as V,bI as B,D as y,aW as $,b as s,L as O,z as r,J as b,bO as T,P}from"./index.b0e1550a.js";var W=["class","style"],q=function(){return{prefixCls:String,spinning:{type:Boolean,default:void 0},size:String,wrapperClassName:String,tip:P.any,delay:Number,indicator:P.any}},p=null;function J(t,n){return!!t&&!!n&&!isNaN(Number(n))}function M(t){var n=t.indicator;p=typeof n=="function"?n:function(){return s(n,null,null)}}const F=E({compatConfig:{MODE:3},name:"ASpin",inheritAttrs:!1,props:w(q(),{size:"default",spinning:!0,wrapperClassName:""}),setup:function(){return{originalUpdateSpinning:null,configProvider:A("configProvider",j)}},data:function(){var n=this.spinning,e=this.delay,i=J(n,e);return{sSpinning:n&&!i}},created:function(){this.originalUpdateSpinning=this.updateSpinning,this.debouncifyUpdateSpinning(this.$props)},mounted:function(){this.updateSpinning()},updated:function(){var n=this;k(function(){n.debouncifyUpdateSpinning(),n.updateSpinning()})},beforeUnmount:function(){this.cancelExistingSpin()},methods:{debouncifyUpdateSpinning:function(n){var e=n||this.$props,i=e.delay;i&&(this.cancelExistingSpin(),this.updateSpinning=V(this.originalUpdateSpinning,i))},updateSpinning:function(){var n=this.spinning,e=this.sSpinning;e!==n&&(this.sSpinning=n)},cancelExistingSpin:function(){var n=this.updateSpinning;n&&n.cancel&&n.cancel()},renderIndicator:function(n){var e="".concat(n,"-dot"),i=B(this,"indicator");return i===null?null:(Array.isArray(i)&&(i=i.length===1?i[0]:i),y(i)?$(i,{class:e}):p&&y(p())?$(p(),{class:e}):s("span",{class:"".concat(e," ").concat(n,"-dot-spin")},[s("i",{class:"".concat(n,"-dot-item")},null),s("i",{class:"".concat(n,"-dot-item")},null),s("i",{class:"".concat(n,"-dot-item")},null),s("i",{class:"".concat(n,"-dot-item")},null)]))}},render:function(){var n,e,i,o=this.$props,f=o.size,N=o.prefixCls,h=o.tip,d=h===void 0?(n=(e=this.$slots).tip)===null||n===void 0?void 0:n.call(e):h,x=o.wrapperClassName,l=this.$attrs,v=l.class,_=l.style,C=O(l,W),S=this.configProvider,U=S.getPrefixCls,I=S.direction,a=U("spin",N),u=this.sSpinning,z=(i={},r(i,a,!0),r(i,"".concat(a,"-sm"),f==="small"),r(i,"".concat(a,"-lg"),f==="large"),r(i,"".concat(a,"-spinning"),u),r(i,"".concat(a,"-show-text"),!!d),r(i,"".concat(a,"-rtl"),I==="rtl"),r(i,v,!!v),i),m=s("div",b(b({},C),{},{style:_,class:z}),[this.renderIndicator(a),d?s("div",{class:"".concat(a,"-text")},[d]):null]),g=T(this);if(g&&g.length){var c,D=(c={},r(c,"".concat(a,"-container"),!0),r(c,"".concat(a,"-blur"),u),c);return s("div",{class:["".concat(a,"-nested-loading"),x]},[u&&s("div",{key:"loading"},[m]),s("div",{class:D,key:"container"},[g])])}return m}});export{F as S,M as s};

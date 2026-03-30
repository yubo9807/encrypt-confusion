import{c as G,S as Z}from"./index-DclGUUo_.js";import{d as V,h as B,o as u,c as p,n as R,i as w,a as l,j as h,k as $,l as W,m as f,e as M,b as j,w as E,f as C,p as Y,q as U,F as J,g as Q,t as A,s as O,T as ee,r as te}from"./index-BLCRhn8h.js";import{_ as L}from"./_plugin-vue_export-helper-DlAUqK2U.js";const ne=`<template>
  <div style="height: 300px;">
    <BothwaySide v-model:left-visible="bothwaySide.left" v-model:right-visible="bothwaySide.right">
      <template #left>
        left content
      </template>
  
      <template #right>
        right content
      </template>
    </BothwaySide>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import BothwaySide from './index.vue'

const bothwaySide = reactive({
  left: false,
  right: false,
})
<\/script>
`,oe=`<template>
  <CodeEdit v-model="code" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import CodeEdit from './index.vue'

const code = ref(\`import { ref } from 'vue';
const count = ref(0);
\`)
<\/script>`,ie=`<template>
  <div>
    <button @click="visible = !visible">visible</button>
    <DialogDrag v-model="visible">
      <div>hello world</div>
    </DialogDrag>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import DialogDrag from './index.vue'

const visible = ref(false);
<\/script>`,se=`<template>
  <div style="height: 300px;">
    <Partition>
      <template #main>
        main content
      </template>
      <template #vice>
        vice content
      </template>
    </Partition>
  </div>
</template>

<script lang="ts" setup>
import Partition from './index.vue'
<\/script>`;function X(e,t){let n=0;return function(...o){let i=new Date().getTime();i-n>t&&(e.apply(this,...o),n=i)}}window.addEventListener("load",()=>{setTimeout(()=>{const e=window.performance.timing,t={},n=window.performance.getEntriesByType("paint");t.DNS查询耗时=e.domainLookupEnd-e.domainLookupStart,t.TCP链接耗时=e.connectEnd-e.connectStart,t.request耗时=e.responseEnd-e.responseStart,t.解析DOM树耗时=e.domComplete-e.domInteractive,t.白屏时间=e.domLoading-e.fetchStart,t.domready=e.domContentLoadedEventEnd-e.fetchStart,t.onload=e.loadEventEnd-e.fetchStart,t["首次绘制时间(FC)"]=n[0].startTime,t["首次内容绘制时间(FCP)"]=n[1].startTime,console.log(t)},0)});window.onerror=(e,t,n,o,i)=>{let c=i?i.stack:null;console.log(e,t,n,o,c)};window.onunhandledrejection=e=>{let t="",n="";typeof e.reason=="object"?(t=e.reason.message,n=e.reason.stack):t=e.reason,console.log(t,n)};const le={class:"left"},ae={class:"main"},re={class:"right"},H=200,de=V({__name:"index",props:{leftVisible:{type:Boolean},rightVisible:{type:Boolean},hiddenLeft:{type:Boolean},hiddenRight:{type:Boolean},cacheKey:{}},emits:["update:leftVisible","update:rightVisible","change"],setup(e,{expose:t,emit:n}){const o=e,i=f(),c=f("0px"),s=f("0px"),r=`__${o.cacheKey}_bothway_side_left_width__`,v=`__${o.cacheKey}_bothway_side_right_width__`;function I(){return localStorage.getItem(r)||"384px"}function T(a){o.cacheKey&&localStorage.setItem(r,a)}function x(){return localStorage.getItem(v)||"384px"}function D(a){o.cacheKey&&localStorage.setItem(v,a)}const g=n,d=M({get(){return o.leftVisible},set(a){g("update:leftVisible",a),g("change")}});B(()=>o.leftVisible,a=>{c.value=a?I():"0px"});const y=M({get(){return o.rightVisible},set(a){g("update:rightVisible",a),g("change")}});B(()=>o.rightVisible,a=>{s.value=a?x():"0px"}),t({el:()=>i.value});function S(){function a(m){return X(()=>{const _=i.value.getBoundingClientRect();let b=Math.max(m.clientX-_.left,H);c.value=b+"px",T(b+"px"),g("change")},100)()}i.value.addEventListener("mousemove",a),i.value.addEventListener("mouseup",()=>{i.value.removeEventListener("mousemove",a)})}function k(){function a(m){return X(()=>{const _=i.value.getBoundingClientRect();let b=Math.max(_.right-m.clientX,H);s.value=b+"px",D(b+"px"),g("change")},100)()}i.value.addEventListener("mousemove",a),i.value.addEventListener("mouseup",()=>{i.value.removeEventListener("mousemove",a)})}return(a,m)=>(u(),p("div",{ref_key:"wrapRef",ref:i,class:w(["bothway-side",d.value&&"open-left",y.value&&"open-right"]),style:R(`--side-left-width: ${d.value?c.value:"0px"}; --side-right-width: ${y.value?s.value:"0px"};`)},[l("div",le,[h(a.$slots,"left",{},void 0,!0)]),l("div",{class:"line left-line",onMousedown:W(S,["self"])},[e.hiddenLeft?$("",!0):(u(),p("div",{key:0,class:"block",onClick:m[0]||(m[0]=_=>d.value=!d.value)},[...m[2]||(m[2]=[l("div",{class:"icon"},null,-1)])]))],32),l("div",ae,[h(a.$slots,"default",{},void 0,!0)]),a.$slots.right?(u(),p("div",{key:0,class:"line right-line",onMousedown:W(k,["self"])},[e.hiddenRight?$("",!0):(u(),p("div",{key:0,class:"block",onClick:m[1]||(m[1]=_=>y.value=!y.value)},[...m[3]||(m[3]=[l("div",{class:"icon"},null,-1)])]))],32)):$("",!0),l("div",re,[h(a.$slots,"right",{},void 0,!0)])],6))}}),ue=L(de,[["__scopeId","data-v-52839a43"]]),ce={style:{height:"300px"}},me=V({__name:"demo",setup(e){const t=Y({left:!1,right:!1});return(n,o)=>(u(),p("div",ce,[j(ue,{"left-visible":t.left,"onUpdate:leftVisible":o[0]||(o[0]=i=>t.left=i),"right-visible":t.right,"onUpdate:rightVisible":o[1]||(o[1]=i=>t.right=i)},{left:E(()=>[...o[2]||(o[2]=[C(" left content ",-1)])]),right:E(()=>[...o[3]||(o[3]=[C(" right content ",-1)])]),_:1},8,["left-visible","right-visible"])]))}}),pe=Object.freeze(Object.defineProperty({__proto__:null,default:me},Symbol.toStringTag,{value:"Module"})),fe=e=>{const{proxy:t}=U(),n=f(e.modelValue||""),o=M(()=>e.toHtml?e.toHtml(n.value):n.value),i=M(()=>n.value.split(`
`).length);B(()=>e.modelValue,r=>{n.value=r||""},{immediate:!0});function c(r){const v=r.target.value;n.value=v,t.$emit("update:modelValue",v)}function s(){const r=n.value;G(r),e.onCopy&&e.onCopy(r)}return{model:n,html:o,rowNum:i,input:c,copy:s}},ve={props:{modelValue:{type:String,default:""},isEdit:{type:Boolean,default:!0},isCopy:{type:Boolean,default:!1},toHtml:{type:Function}},setup:fe},ge={class:"br-code-edit"},ye={class:"row-num"},he={class:"content"},_e=["innerHTML"],be=["value"],we={key:0,class:"copy",onclick:"{copy}"};function $e(e,t,n,o,i,c){return u(),p("div",ge,[l("ul",ye,[(u(!0),p(J,null,Q(e.rowNum,s=>(u(),p("li",{key:s},A(s),1))),128))]),l("div",he,[l("pre",{class:"mark",innerHTML:e.html},null,8,_e),n.isEdit!==!1?(u(),p("textarea",{key:0,value:e.model,onInput:t[0]||(t[0]=(...s)=>e.input&&e.input(...s))},null,40,be)):$("",!0)]),n.isCopy?(u(),p("span",we,"copy")):$("",!0)])}const Se=L(ve,[["render",$e],["__scopeId","data-v-16940edb"]]),ke=V({__name:"demo",setup(e){const t=f(`import { ref } from 'vue';
const count = ref(0);
`);return(n,o)=>(u(),O(Se,{modelValue:t.value,"onUpdate:modelValue":o[0]||(o[0]=i=>t.value=i)},null,8,["modelValue"]))}}),Me=Object.freeze(Object.defineProperty({__proto__:null,default:ke},Symbol.toStringTag,{value:"Module"}));function F(e,t,n){return Math.max(t,Math.min(n,e))}const Ee=300,Ce=1e3;let K=Ce;const Ve=e=>{const{proxy:t}=U(),n=f(e.modelValue),o=f(!1),i=f(null),c=f(null),s=f(++K),r=Y({left:0,top:0}),v=M(()=>({left:`${r.left}px`,top:`${r.top}px`}));function I(){const d=t.$refs.bodyRef;if(!d)return;const{offsetWidth:y,offsetHeight:S}=d,{innerWidth:k,innerHeight:a}=window;r.left=(k-y)/2,r.top=(a-S)/2}function T(){s.value=++K}function x(d){if(!e.draggable||d.target.closest(".icon-close"))return;const y=t.$refs.bodyRef;if(!y)return;const{clientX:S,clientY:k}=d,{left:a,top:m}=r,{innerWidth:_,innerHeight:b}=window,{offsetWidth:q}=y,z=N=>{r.left=F(a+N.clientX-S,-q+40,_-40),r.top=F(m+N.clientY-k,0,b-40)},P=()=>{document.removeEventListener("mousemove",z),document.removeEventListener("mouseup",P)};document.addEventListener("mousemove",z),document.addEventListener("mouseup",P)}function D(){const d=t.$refs.containerRef;d.classList.add("close"),setTimeout(()=>{d.classList.remove("close"),n.value=!1,t.$emit("update:modelValue",!1)},Ee)}function g(d){d.key==="Escape"&&D()}return B(()=>e.modelValue,d=>{n.value=d,d?(o.value=!0,window.addEventListener("keydown",g),setTimeout(()=>{T(),I()},0)):window.removeEventListener("keydown",g)}),{visible:n,isRender:o,close:D,bodyRef:i,headerRef:c,dialogStyle:v,zIndex:s,handleMouseDown:x,bringToFront:T,draggable:e.draggable}},Le={props:{modelValue:{type:Boolean,default:!1},title:{type:String,default:"标题"},style:{type:[Object,String],default:""},isPaddind:{type:Boolean,default:!0},draggable:{type:Boolean,default:!0}},setup:Ve};function Te(e,t,n,o,i,c){return u(),O(ee,{to:"body"},[l("div",{ref:"containerRef",class:w(["custom-dialog",e.visible&&"open"]),style:R({zIndex:e.zIndex}),onMousedown:t[2]||(t[2]=(...s)=>e.bringToFront&&e.bringToFront(...s))},[e.isRender?(u(),p("div",{key:0,ref:"bodyRef",class:"body",style:R([n.style,e.dialogStyle])},[l("div",{ref:"headerRef",class:w(["header",n.draggable&&"draggable"]),onMousedown:t[1]||(t[1]=(...s)=>e.handleMouseDown&&e.handleMouseDown(...s))},[l("h2",null,[t[3]||(t[3]=l("div",{class:"line"},[l("span"),l("span"),l("span")],-1)),C(" "+A(n.title)+" ",1),t[4]||(t[4]=l("div",{class:"line"},[l("span"),l("span"),l("span")],-1))]),l("span",{class:"icon-close",onClick:t[0]||(t[0]=(...s)=>e.close&&e.close(...s))},"x")],34),l("div",{class:w(["content",n.isPaddind&&"padding"])},[h(e.$slots,"default",{},void 0,!0)],2)],4)):$("",!0)],38)])}const De=L(Le,[["render",Te],["__scopeId","data-v-41041292"]]),Be=V({__name:"demo",setup(e){const t=f(!1);return(n,o)=>(u(),p("div",null,[l("button",{onClick:o[0]||(o[0]=i=>t.value=!t.value)},"visible"),j(De,{modelValue:t.value,"onUpdate:modelValue":o[1]||(o[1]=i=>t.value=i)},{default:E(()=>[...o[2]||(o[2]=[l("div",null,"hello world",-1)])]),_:1},8,["modelValue"])]))}}),Re=Object.freeze(Object.defineProperty({__proto__:null,default:Be},Symbol.toStringTag,{value:"Module"})),Ie=e=>{const t=f(),n=f(e.size);function o(){t.value.addEventListener("mousemove",i),document.addEventListener("mouseup",c)}function i(s){const r=t.value.getBoundingClientRect();if(e.type==="horizontal"){const v=e.main===1?s.clientX-r.left:r.width-s.clientX+r.left;n.value=v+"px"}else{const v=e.main===1?s.clientY-r.top:r.height-s.clientY+r.top;n.value=v+"px"}}function c(){t.value.removeEventListener("mousemove",i)}return{partial:n,onMousedown:o,wrapRef:t,isMain:e.main===1}},xe={props:{size:{type:String,default:"30%"},type:{type:String,default:"horizontal"},main:{type:Number,default:1}},setup:Ie};function je(e,t,n,o,i,c){return u(),p("div",{ref:"wrapRef",class:w(["br-partition",n.type]),style:R({"--skew":e.partial})},[l("div",{class:w(["item",e.isMain?"main":"vice"])},[e.isMain?h(e.$slots,"main",{key:0},void 0,!0):h(e.$slots,"vice",{key:1},void 0,!0)],2),l("div",{class:"line",onMousedown:t[0]||(t[0]=(...s)=>e.onMousedown&&e.onMousedown(...s))},null,32),l("div",{class:w(["item",e.isMain?"vice":"main"])},[e.isMain?h(e.$slots,"vice",{key:0},void 0,!0):h(e.$slots,"main",{key:1},void 0,!0)],2)],6)}const Oe=L(xe,[["render",je],["__scopeId","data-v-3072ef4b"]]),ze={style:{height:"300px"}},Pe=V({__name:"demo",setup(e){return(t,n)=>(u(),p("div",ze,[j(Oe,null,{main:E(()=>[...n[0]||(n[0]=[C(" main content ",-1)])]),vice:E(()=>[...n[1]||(n[1]=[C(" vice content ",-1)])]),_:1})]))}}),Ne=Object.freeze(Object.defineProperty({__proto__:null,default:Pe},Symbol.toStringTag,{value:"Module"}));function We(){const e=Object.assign({"/core/comp/BothwaySide/demo.vue":ne,"/core/comp/CodeEdit/demo.vue":oe,"/core/comp/DialogDrag/demo.vue":ie,"/core/comp/Partition/demo.vue":se}),t=Object.assign({"/core/comp/BothwaySide/demo.vue":pe,"/core/comp/CodeEdit/demo.vue":Me,"/core/comp/DialogDrag/demo.vue":Re,"/core/comp/Partition/demo.vue":Ne}),n=[];for(const o in e){const i=o.split("/");n.push({name:i[3],demo:e[o],exec:t[o].default})}return n}const Xe=()=>({list:We()}),He={components:{SourceCodeDemo:Z},setup:Xe};function Fe(e,t,n,o,i,c){const s=te("SourceCodeDemo");return u(),O(s,{list:e.list},null,8,["list"])}const Ae=L(He,[["render",Fe]]);export{Ae as default};

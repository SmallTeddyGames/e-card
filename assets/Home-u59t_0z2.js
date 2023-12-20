import{e as Fe,u as m,o as de,n as fe,r as I,a as me,w as T,g as Ee,b as Re,t as Ae,c as ze,d as pe,s as Ge,f as R,h as Me,i as x,j as _,k as h,l as a,m as G,p as _e,v as ge,_ as ve,q as w,F as te,x as he,y as z,z as je,A as Le,B as H,C as be,D as Te,E as ne,G as we,H as F,T as Oe}from"./index-c3tPY5eL.js";function re(e){return Ee()?(Re(e),!0):!1}function Ne(e){let t=!1,n;const o=Fe(!0);return(...r)=>(t||(n=o.run(()=>e(...r)),t=!0),n)}function K(e){return typeof e=="function"?e():m(e)}const ye=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const De=Object.prototype.toString,Ve=e=>De.call(e)==="[object Object]",Ce=()=>{};function Be(e,t){function n(...o){return new Promise((r,s)=>{Promise.resolve(e(()=>t.apply(this,o),{fn:t,thisArg:this,args:o})).then(r).catch(s)})}return n}const Se=e=>e();function We(e=Se){const t=I(!0);function n(){t.value=!1}function o(){t.value=!0}const r=(...s)=>{t.value&&e(...s)};return{isActive:me(t),pause:n,resume:o,eventFilter:r}}function qe(e){return e||pe()}function Ue(...e){if(e.length!==1)return Ae(...e);const t=e[0];return typeof t=="function"?me(ze(()=>({get:t,set:Ce}))):I(t)}function He(e,t,n={}){const{eventFilter:o=Se,...r}=n;return T(e,Be(o,t),r)}function Pe(e,t,n={}){const{eventFilter:o,...r}=n,{eventFilter:s,pause:i,resume:c,isActive:d}=We(o);return{stop:He(e,t,{...r,eventFilter:s}),pause:i,resume:c,isActive:d}}function Ie(e,t=!0,n){const o=qe(n);o?de(e,o):t?e():fe(e)}function P(e){var t;const n=K(e);return(t=n==null?void 0:n.$el)!=null?t:n}const V=ye?window:void 0,Je=ye?window.document:void 0;function J(...e){let t,n,o,r;if(typeof e[0]=="string"||Array.isArray(e[0])?([n,o,r]=e,t=V):[t,n,o,r]=e,!t)return Ce;Array.isArray(n)||(n=[n]),Array.isArray(o)||(o=[o]);const s=[],i=()=>{s.forEach(b=>b()),s.length=0},c=(b,l,g,v)=>(b.addEventListener(l,g,v),()=>b.removeEventListener(l,g,v)),d=T(()=>[P(t),K(r)],([b,l])=>{if(i(),!b)return;const g=Ve(l)?{...l}:l;s.push(...n.flatMap(v=>o.map(y=>c(b,v,y,g))))},{immediate:!0,flush:"post"}),p=()=>{d(),i()};return re(p),p}function Qe(){const e=I(!1);return pe()&&de(()=>{e.value=!0}),e}function ke(e){const t=Qe();return R(()=>(t.value,!!e()))}function Ze(e,t={}){const{window:n=V}=t,o=ke(()=>n&&"matchMedia"in n&&typeof n.matchMedia=="function");let r;const s=I(!1),i=p=>{s.value=p.matches},c=()=>{r&&("removeEventListener"in r?r.removeEventListener("change",i):r.removeListener(i))},d=Me(()=>{o.value&&(c(),r=n.matchMedia(K(e)),"addEventListener"in r?r.addEventListener("change",i):r.addListener(i),s.value=r.matches)});return re(()=>{d(),c(),r=void 0}),s}const q=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},U="__vueuse_ssr_handlers__",Ke=Xe();function Xe(){return U in q||(q[U]=q[U]||{}),q[U]}function xe(e,t){return Ke[e]||t}function Ye(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"?"object":Number.isNaN(e)?"any":"number"}const et={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}},se="vueuse-storage";function $e(e,t,n,o={}){var r;const{flush:s="pre",deep:i=!0,listenToStorageChanges:c=!0,writeDefaults:d=!0,mergeDefaults:p=!1,shallow:b,window:l=V,eventFilter:g,onError:v=f=>{console.error(f)},initOnMounted:y}=o,C=(b?Ge:I)(typeof t=="function"?t():t);if(!n)try{n=xe("getDefaultStorage",()=>{var f;return(f=V)==null?void 0:f.localStorage})()}catch(f){v(f)}if(!n)return C;const $=K(t),u=Ye($),A=(r=o.serializer)!=null?r:et[u],{pause:B,resume:k}=Pe(C,()=>M(C.value),{flush:s,deep:i,eventFilter:g});return l&&c&&Ie(()=>{J(l,"storage",E),J(l,se,N),y&&E()}),y||E(),C;function M(f){try{if(f==null)n.removeItem(e);else{const S=A.write(f),j=n.getItem(e);j!==S&&(n.setItem(e,S),l&&l.dispatchEvent(new CustomEvent(se,{detail:{key:e,oldValue:j,newValue:S,storageArea:n}})))}}catch(S){v(S)}}function W(f){const S=f?f.newValue:n.getItem(e);if(S==null)return d&&$!=null&&n.setItem(e,A.write($)),$;if(!f&&p){const j=A.read(S);return typeof p=="function"?p(j,$):u==="object"&&!Array.isArray(j)?{...$,...j}:j}else return typeof S!="string"?S:A.read(S)}function N(f){E(f.detail)}function E(f){if(!(f&&f.storageArea!==n)){if(f&&f.key==null){C.value=$;return}if(!(f&&f.key!==e)){B();try{(f==null?void 0:f.newValue)!==A.write(C.value)&&(C.value=W(f))}catch(S){v(S)}finally{f?fe(k):k()}}}}}function tt(e){return Ze("(prefers-color-scheme: dark)",e)}function nt(e={}){const{selector:t="html",attribute:n="class",initialValue:o="auto",window:r=V,storage:s,storageKey:i="vueuse-color-scheme",listenToStorageChanges:c=!0,storageRef:d,emitAuto:p,disableTransition:b=!0}=e,l={auto:"",light:"light",dark:"dark",...e.modes||{}},g=tt({window:r}),v=R(()=>g.value?"dark":"light"),y=d||(i==null?Ue(o):$e(i,o,s,{window:r,listenToStorageChanges:c})),C=R(()=>y.value==="auto"?v.value:y.value),$=xe("updateHTMLAttrs",(k,M,W)=>{const N=typeof k=="string"?r==null?void 0:r.document.querySelector(k):P(k);if(!N)return;let E;if(b){E=r.document.createElement("style");const f="*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}";E.appendChild(document.createTextNode(f)),r.document.head.appendChild(E)}if(M==="class"){const f=W.split(/\s/g);Object.values(l).flatMap(S=>(S||"").split(/\s/g)).filter(Boolean).forEach(S=>{f.includes(S)?N.classList.add(S):N.classList.remove(S)})}else N.setAttribute(M,W);b&&(r.getComputedStyle(E).opacity,document.head.removeChild(E))});function u(k){var M;$(t,n,(M=l[k])!=null?M:k)}function A(k){e.onChanged?e.onChanged(k,u):u(k)}T(C,A,{flush:"post",immediate:!0}),Ie(()=>A(C.value));const B=R({get(){return p?y.value:C.value},set(k){y.value=k}});try{return Object.assign(B,{store:y,system:v,state:C})}catch{return B}}const ae=["fullscreenchange","webkitfullscreenchange","webkitendfullscreen","mozfullscreenchange","MSFullscreenChange"];function rt(e,t={}){const{document:n=Je,autoExit:o=!1}=t,r=R(()=>{var u;return(u=P(e))!=null?u:n==null?void 0:n.querySelector("html")}),s=I(!1),i=R(()=>["requestFullscreen","webkitRequestFullscreen","webkitEnterFullscreen","webkitEnterFullScreen","webkitRequestFullScreen","mozRequestFullScreen","msRequestFullscreen"].find(u=>n&&u in n||r.value&&u in r.value)),c=R(()=>["exitFullscreen","webkitExitFullscreen","webkitExitFullScreen","webkitCancelFullScreen","mozCancelFullScreen","msExitFullscreen"].find(u=>n&&u in n||r.value&&u in r.value)),d=R(()=>["fullScreen","webkitIsFullScreen","webkitDisplayingFullscreen","mozFullScreen","msFullscreenElement"].find(u=>n&&u in n||r.value&&u in r.value)),p=["fullscreenElement","webkitFullscreenElement","mozFullScreenElement","msFullscreenElement"].find(u=>n&&u in n),b=ke(()=>r.value&&n&&i.value!==void 0&&c.value!==void 0&&d.value!==void 0),l=()=>p?(n==null?void 0:n[p])===r.value:!1,g=()=>{if(d.value){if(n&&n[d.value]!=null)return n[d.value];{const u=r.value;if((u==null?void 0:u[d.value])!=null)return!!u[d.value]}}return!1};async function v(){if(!(!b.value||!s.value)){if(c.value)if((n==null?void 0:n[c.value])!=null)await n[c.value]();else{const u=r.value;(u==null?void 0:u[c.value])!=null&&await u[c.value]()}s.value=!1}}async function y(){if(!b.value||s.value)return;g()&&await v();const u=r.value;i.value&&(u==null?void 0:u[i.value])!=null&&(await u[i.value](),s.value=!0)}async function C(){await(s.value?v():y())}const $=()=>{const u=g();(!u||u&&l())&&(s.value=u)};return J(n,ae,$,!1),J(()=>P(r),ae,$,!1),o&&re(v),{isSupported:b,isFullscreen:s,enter:y,exit:v,toggle:C}}const O=Ne(()=>$e("global-state",{playerRole:null,isAiBattle:!0,rounds:0,gameState:"init",playerCardItems:[],computerCardItems:[],bgImage:1,isShowGameInfo:!0})),ot=x({__name:"ChangeGameStatus",setup(e){const t=O(),n=()=>{t.value.gameState="pause"};return(o,r)=>(_(),h("button",{rounded:"","p-2":"",hover:"bg-active",onClick:n},[a("div",{class:G({"i-material-symbols:play-circle-rounded":m(t).gameState==="pause","i-material-symbols:pause-circle":m(t).gameState==="start"}),"text-2xl":""},null,2)]))}}),st=x({__name:"GameInfoToggle",setup(e){const t=O(),n=()=>{t.value.isShowGameInfo=!t.value.isShowGameInfo};return(o,r)=>_e((_(),h("button",{rounded:"","p-2":"",hover:"bg-active",onClick:n},[a("div",{class:G({"i-material-symbols:right-panel-close-rounded":m(t).isShowGameInfo,"i-material-symbols:right-panel-open-rounded":!m(t).isShowGameInfo}),"text-2xl":""},null,2)],512)),[[ge,m(t).gameState==="start"]])}}),at=a("div",{"i-humbleicons:exchange-vertical":"","text-2xl":""},null,-1),lt=[at],it=x({__name:"ChangeBackImage",setup(e){const t=O(),n=()=>{t.value.bgImage>=4?t.value.bgImage=1:t.value.bgImage++};return(o,r)=>(_(),h("button",{rounded:"","p-2":"",hover:"bg-active",onClick:n},lt))}}),ut=x({__name:"FullScreenToggle",setup(e){const{isFullscreen:t,toggle:n}=rt();return(o,r)=>(_(),h("button",{rounded:"","p-2":"",hover:"bg-active",onClick:r[0]||(r[0]=(...s)=>m(n)&&m(n)(...s))},[a("div",{class:G({"i-gridicons:fullscreen-exit":m(t),"i-gridicons:fullscreen":!m(t)}),"text-2xl":""},null,2)]))}}),ct=a("div",{"i-ph-sun-dim-duotone":"","dark:i-ph-moon-stars-duotone":"","text-2xl":""},null,-1),dt=[ct],ft=x({__name:"ColorSchemeToggle",setup(e){const t=nt(),n=()=>{t.value=t.value==="light"?"dark":"light"};return(o,r)=>(_(),h("button",{rounded:"","p-2":"",hover:"bg-active",onClick:n},dt))}}),mt={},pt={rounded:"",p2:"",title:"GitHub",hover:"bg-active",href:"https://github.com/SmallTeddy/e-card",target:"_blank"},_t=a("div",{"i-carbon-logo-github":"","text-2xl":""},null,-1),gt=[_t];function vt(e,t){return _(),h("a",pt,gt)}const ht=ve(mt,[["render",vt]]),bt={"w-screen":"",px4:"",py3:"","text-lg":"",border:"b base",flex:"~ gap-1 items-center"},wt=a("div",{title:"Game"},"E-Card",-1),yt=a("div",{"flex-auto":""},null,-1),Ct={__name:"GameNav",setup(e){return(t,n)=>(_(),h("nav",bt,[wt,yt,w(ot),w(ht),w(st),w(ft),w(it),w(ut)]))}},X=e=>(je("data-v-809a195e"),e=e(),Le(),e),St=X(()=>a("tr",null,[a("td",null,"局数"),a("td",null,"角色"),a("td",null,"结果"),a("td",null,"记分")],-1)),It=X(()=>a("td",null,"总比分",-1)),kt=X(()=>a("td",null,null,-1)),xt=X(()=>a("td",null,null,-1)),$t=x({__name:"GameInformation",props:{gameInfoItems:{default:()=>[]}},setup(e){const n=e.gameInfoItems,o=n.reduce((r,s)=>r+s.score,0);return(r,s)=>(_(),h("table",null,[St,(_(!0),h(te,null,he(m(n),i=>(_(),h("tr",{class:G(i.score?"bg-green":"bg-red")},[a("td",null,z(i.round),1),a("td",null,z(i.role),1),a("td",null,z(i.result),1),a("td",null,z(i.score),1)],2))),256)),a("tr",null,[It,kt,xt,a("td",null,z(m(o)),1)])]))}}),Ft=ve($t,[["__scopeId","data-v-809a195e"]]),Et=""+new URL("bg-1-mdVtkdQm.jpg",import.meta.url).href,Rt=""+new URL("bg-2-DRO9E5Ab.jpg",import.meta.url).href,At=""+new URL("bg-3-9k6GZAb9.jpg",import.meta.url).href,zt=""+new URL("bg-4-AjVdAbEv.jpg",import.meta.url).href,Gt=""+new URL("card-bg-V5GSdMqO.jpg",import.meta.url).href,Mt=""+new URL("citizen-2myAtGQo.jpg",import.meta.url).href,jt=""+new URL("emperor-jZ-GUtEA.jpg",import.meta.url).href,Lt=""+new URL("slave-vZ3wDTL4.jpg",import.meta.url).href,L=O(),Tt=e=>e=="emperor"?"国王":"奴隶",le=(e,t,n)=>({role:e,img:`${e}.jpg`,isClick:!1,sort:t,group:n}),Q=e=>{const t=Array(4).fill(0).map((n,o)=>le("citizen",o+1,e));return t.unshift(le(e,0,e)),t},Y=e=>e=="emperor"?"slave":"emperor",ie=(e,t)=>{L.value={playerRole:e,rounds:t,gameState:"init",isAiBattle:!0,playerCardItems:Q(e),computerCardItems:Q(Y(e)),bgImage:1,isShowGameInfo:!0}},Ot=()=>{const e=Y(L.value.playerRole),t=L.value.rounds+1;L.value.playerRole=e,L.value.rounds=t,L.value.playerCardItems=Q(e),L.value.computerCardItems=Q(Y(e))},Z=e=>new URL(Object.assign({"../assets/bg-1.jpg":Et,"../assets/bg-2.jpg":Rt,"../assets/bg-3.jpg":At,"../assets/bg-4.jpg":zt,"../assets/card-bg.jpg":Gt,"../assets/citizen.jpg":Mt,"../assets/emperor.jpg":jt,"../assets/slave.jpg":Lt})[`../assets/${e}`],import.meta.url).href,oe=e=>(Math.floor(Math.random()*e)+1)%e,ee=(e,t=new WeakMap)=>{if(e===null||typeof e!="object")return e;if(t.has(e))return t.get(e);const n=Array.isArray(e)?[]:{};t.set(e,n);for(let o in e)e.hasOwnProperty(o)&&(n[o]=ee(e[o],t));return n},D=x({__name:"Card",props:{cardInfo:{default:()=>null},isAnimation:{type:Boolean,default:()=>!1}},emits:["card-click"],setup(e,{emit:t}){const n=t;return(o,r)=>(_(),h("div",{class:G({"card-animation":o.isAnimation}),"card-size":"",relative:"","preserve-3d":"","cursor-pointer":"","transition-transform-1":"",onClick:r[0]||(r[0]=s=>n("card-click",o.cardInfo))},[a("div",{"w-full":"","h-full":"",absolute:"","bg-cover":"","backface-hidden":"",style:H({backgroundImage:`url(${m(Z)(o.cardInfo.img)})`})},null,4),a("div",{"w-full":"","h-full":"",absolute:"","bg-cover":"","backface-hidden":"","transform-rotate-y-180":"",style:H({backgroundImage:`url(${m(Z)("card-bg.jpg")})`})},null,4)],2))}}),Nt={grid:"~ cols-5 gap-5"},Dt=x({__name:"ComputedCard",props:{role:{default:()=>"emperor"},cardItems:{default:()=>[]}},emits:{"card-check":e=>!0},setup(e,{expose:t,emit:n}){const o=e,r=n,s=I();return T(()=>o.cardItems,c=>{s.value=c},{immediate:!0}),t({cardCheckClick:c=>{s.value=s.value.filter(d=>d.sort!==c.sort),r("card-check",c)}}),(c,d)=>(_(),h("div",Nt,[(_(!0),h(te,null,he(c.cardItems,(p,b)=>(_(),h("div",{"card-size":"",relative:"","cursor-pointer":"","transition-all-500":"",class:G([p.isClick?"top--20px":"top-0",p.group,p.role+b])},[w(D,{"card-info":p},null,8,["card-info"])],2))),256))]))}}),Vt={key:0,"text-center":""},Bt=["onClick"],Wt=x({__name:"PlayerCard",props:{role:{default:()=>"emperor"},cardItems:{default:()=>[]}},emits:{"card-check":e=>!0},setup(e,{expose:t,emit:n}){const o=e,r=n,s=I();T(()=>o.cardItems,d=>{s.value=d},{immediate:!0});const i=d=>{s.value.map(p=>p.isClick=!1),d.isClick=!0},c=d=>{r("card-check",d)};return t({cardCheckClick:c}),(d,p)=>{const b=be("draggable");return _(),Te(b,{list:d.cardItems,tag:"div",group:{name:d.role,pull:!0,put:!1,revertClone:!0},"component-data":{grid:"~ cols-5 gap-5"},"item-key":"sort",sort:!0},{item:ne(({element:l,index:g})=>[a("div",{"card-size":"",relative:"","cursor-pointer":"","transition-all-500":"",class:G([l.isClick?"top--20px":"top-0",l.group,l.role+g])},[w(D,{cardInfo:l,onCardClick:i},null,8,["cardInfo"]),l.isClick?(_(),h("div",Vt,[a("button",{onClick:v=>c(l)},"check",8,Bt)])):we("",!0)],2)]),_:1},8,["list","group"])}}}),qt={key:0,"flex-center":"","flex-col":"","h-full":"","w-screen":"",relative:"","font-size-40px":"","bg-gray:50":""},Ut={key:0,flex:"~ col items-center gap-10"},Ht={"w-160px":"","h-56px":"","flex-center":"","rd-8px":"","gap-5":""},Pt={"text-green":""},Jt={"w-240px":"","h-56px":"","flex-center":"","rd-8px":""},Qt={"text-red":""},Zt={key:1,"flex-col":"","flex-center":"","gap-10":""},Kt={"flex-center":"","gap-10":""},ue=21,Xt=x({__name:"StartInfo",setup(e,{expose:t}){const n=O(),o=I(!1),r=I(!0),s=I({playerRole:oe(2)==0?"emperor":"slave",rounds:1}),i=R(()=>Tt(s.value.playerRole));ie(Math.floor(Math.random()*10*20%2)==0?"emperor":"slave",1),s.value=n.value;const c=()=>{r.value=!0,s.value.rounds<=ue&&s.value.rounds>1&&setTimeout(()=>{r.value=!1},2e3)},d=()=>{o.value=!0,n.value.gameState="start",setTimeout(()=>{r.value=!1,s.value.rounds>ue&&(o.value=!1)},2e3)},p=()=>{o.value=!1,r.value=!0,n.value.rounds=1,n.value.gameState="init",ie(s.value.playerRole,s.value.rounds),s.value=n.value},b=()=>{let l="开始";return n.value.gameState==="pause"&&(l="继续"),l};return T(()=>n.value.gameState,l=>{o.value=l==="start",l==="start"&&d(),l==="pause"&&(r.value=!0)},{immediate:!0}),t({reshow:c}),(l,g)=>{var v;return m(r)?(_(),h("div",qt,[m(o)?(_(),h("div",Ut,[a("div",Ht,[F(" 第 "),a("span",Pt,z((v=m(s))==null?void 0:v.rounds),1),F(" 局 ")]),a("div",Jt,[F(" 角色 ： "),a("span",Qt,z(m(i)),1)])])):(_(),h("div",Zt,[a("button",{onClick:d},z(b()),1),a("button",{onClick:p},"重新开始"),a("div",Kt,[w(D,{"card-info":{role:"emperor",img:"emperor.jpg"},"is-animation":""},null,8,["card-info"]),w(D,{"card-info":{role:"citizen",img:"citizen.jpg"},"is-animation":""},null,8,["card-info"]),w(D,{"card-info":{role:"slave",img:"slave.jpg"},"is-animation":""},null,8,["card-info"])])]))])):we("",!0)}}}),Yt={key:0},en={key:1,"card-size":"","cursor-pointer":"",border:"1px #fff dashed","flex-center":""},tn=a("br",null,null,-1),nn=a("br",null,null,-1),rn=a("br",null,null,-1),ce=x({__name:"CheckCard",props:{cardInfo:{default:()=>null}},setup(e){return(t,n)=>t.cardInfo[0]?(_(),h("div",Yt,[w(D,{"card-info":t.cardInfo[0]},null,8,["card-info"])])):(_(),h("div",en,[F(" 检"),tn,F("查"),nn,F("区"),rn,F("域 ")]))}}),on={key:0,"flex-center":"",relative:"","card-size":""},sn=["alt","src"],an={key:1,"card-size":"","cursor-pointer":"",border:"1px #fff dashed","flex-center":""},ln=a("br",null,null,-1),un=a("br",null,null,-1),cn=a("br",null,null,-1),dn=x({__name:"DropCard",props:{cardItems:{default:()=>[]}},setup(e){return(t,n)=>{const o=be("draggable");return t.cardItems.length>0?(_(),h("div",on,[w(o,{list:t.cardItems,group:"drop","item-key":"sort"},{item:ne(({element:r,index:s})=>[a("img",{"card-size":"","cursor-pointer":"",absolute:"","left-0":"","top-0":"",class:"rotate",style:H(`--rotation-random: ${m(oe)(5*s)}deg`),alt:r.role,src:m(Z)(r.img)},null,12,sn)]),_:1},8,["list"])])):(_(),h("div",an,[F(" 弃"),ln,F("牌"),un,F("区"),cn,F("域 ")]))}}}),fn={grid:"~ rows-4","col-span-3":"","h-full":"","w-full":""},mn={"w-full":"","bg-gray:50":"","flex-center":""},pn={"bg-gray:50":"","flex-center":""},_n={"w-full":"","bg-gray:50":"","flex-center":""},gn={"w-full":"","bg-gray:50":"","flex-center":""},vn={grid:"~ rows-4","col-span-2":"","h-full":"","w-full":""},hn={"h-full":"","w-full":"","bg-gray:80":"","flex-center":"","row-span-3":""},bn={"w-full":"","bg-gray:80":"","flex-center":"","row-span-1":""},wn=x({__name:"GameMain",setup(e){const t=O(),n=I(null),o=R(()=>t.value.playerRole),r=I(),s=I(),i=I([]),c=I([]),d=l=>{r.value&&i.value.push(r.value,s.value);const g=ee(l);r.value=g,t.value.playerCardItems=t.value.playerCardItems.filter(C=>C.sort!==g.sort);const v=oe(t.value.computerCardItems.length),y=ee(t.value.computerCardItems[v]);s.value=y,t.value.computerCardItems=t.value.computerCardItems.filter(C=>C.sort!==y.sort),setTimeout(()=>{b(g,y)},1e3)},p=(l,g)=>{const y={emperor:{emperor:null,citizen:"win",slave:"lose"},citizen:{emperor:"lose",citizen:null,slave:"win"},slave:{emperor:"win",citizen:"lose",slave:null}}[l.role][g.role];return{round:t.value.rounds,role:o.value,result:y,score:y==="win"?1:0}},b=(l,g)=>{if(s.value=null,r.value=null,l.role===g.role)i.value.push(l,g);else{const v=p(l,g);c.value.push(v),i.value=[],Ot(),n.value.reshow()}};return T(()=>t.value.gameState,l=>{l==="init"&&(i.value=[],c.value=[])}),(l,g)=>(_(),h(te,null,[w(Xt,{ref_key:"showInfoRef",ref:n},null,512),w(Oe,null,{default:ne(()=>[a("div",{"h-full":"","w-screen":"",grid:"~",class:G([m(t).isShowGameInfo?"grid-cols-5":"grid-cols-1"])},[a("div",fn,[a("div",mn,[w(Dt,{role:"slave",cardItems:m(t).computerCardItems},null,8,["cardItems"])]),a("div",pn,[w(ce,{"card-info":[m(s)]},null,8,["card-info"])]),a("div",_n,[w(ce,{"card-info":[m(r)]},null,8,["card-info"])]),a("div",gn,[w(Wt,{role:"emperor",cardItems:m(t).playerCardItems,onCardCheck:d},null,8,["cardItems"])])]),_e(a("div",vn,[a("div",hn,[w(Ft,{"game-info-items":m(c)},null,8,["game-info-items"])]),a("div",bn,[w(dn,{cardItems:m(i)},null,8,["cardItems"])])],512),[[ge,m(t).isShowGameInfo]])],2)]),_:1})],64))}}),yn=x({__name:"GameContent",setup(e){const t=O();return(n,o)=>(_(),h("div",{"w-full":"","h-full":"","flex-center":"","bg-center":"","bg-cover":"","bg-no-repeat":"",style:H({backgroundImage:`url(${m(Z)(`bg-${m(t).bgImage}.jpg`)})`})},[w(wn)],4))}}),Cn={"h-100dvh":"","h-screen":"","w-screen":"","of-hidden":"",grid:"~ rows-[max-content_1fr]"},In=x({__name:"Home",setup(e){return(t,n)=>(_(),h("main",Cn,[w(Ct),w(yn)]))}});export{In as default};

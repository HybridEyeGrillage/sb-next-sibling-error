import{b as Fe,d as Be,r as De,s as Re}from"./chunk-S5JSPH7Z-1d6216f0.js";import{s as Ee}from"./index-d475d2ea.js";import{d as h1,a as A,w as Ue,h as i3}from"./vue.esm-bundler-bde78347.js";import"./index-356e4a49.js";var{window:qe}=Ee;qe.STORYBOOK_ENV="vue3";const{start:$e}=__STORYBOOK_MODULE_PREVIEW_API__;var Oe=$e(Fe,{decorateStory:Be,render:De});Oe.clientApi;var r3;(r3=module==null?void 0:module.hot)==null||r3.decline();function A4(c,a){var e=Object.keys(c);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(c);a&&(s=s.filter(function(r){return Object.getOwnPropertyDescriptor(c,r).enumerable})),e.push.apply(e,s)}return e}function C(c){for(var a=1;a<arguments.length;a++){var e=arguments[a]!=null?arguments[a]:{};a%2?A4(Object(e),!0).forEach(function(s){x(c,s,e[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(e)):A4(Object(e)).forEach(function(s){Object.defineProperty(c,s,Object.getOwnPropertyDescriptor(e,s))})}return c}function k2(c){return k2=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},k2(c)}function Ge(c,a){if(!(c instanceof a))throw new TypeError("Cannot call a class as a function")}function P4(c,a){for(var e=0;e<a.length;e++){var s=a[e];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(c,s.key,s)}}function We(c,a,e){return a&&P4(c.prototype,a),e&&P4(c,e),Object.defineProperty(c,"prototype",{writable:!1}),c}function x(c,a,e){return a in c?Object.defineProperty(c,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):c[a]=e,c}function p1(c,a){return _e(c)||Xe(c,a)||f3(c,a)||Ke()}function o2(c){return Ie(c)||je(c)||f3(c)||Ye()}function Ie(c){if(Array.isArray(c))return i1(c)}function _e(c){if(Array.isArray(c))return c}function je(c){if(typeof Symbol<"u"&&c[Symbol.iterator]!=null||c["@@iterator"]!=null)return Array.from(c)}function Xe(c,a){var e=c==null?null:typeof Symbol<"u"&&c[Symbol.iterator]||c["@@iterator"];if(e!=null){var s=[],r=!0,i=!1,f,n;try{for(e=e.call(c);!(r=(f=e.next()).done)&&(s.push(f.value),!(a&&s.length===a));r=!0);}catch(l){i=!0,n=l}finally{try{!r&&e.return!=null&&e.return()}finally{if(i)throw n}}return s}}function f3(c,a){if(c){if(typeof c=="string")return i1(c,a);var e=Object.prototype.toString.call(c).slice(8,-1);if(e==="Object"&&c.constructor&&(e=c.constructor.name),e==="Map"||e==="Set")return Array.from(c);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return i1(c,a)}}function i1(c,a){(a==null||a>c.length)&&(a=c.length);for(var e=0,s=new Array(a);e<a;e++)s[e]=c[e];return s}function Ye(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ke(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var T4=function(){},u1={},n3={},l3=null,o3={mark:T4,measure:T4};try{typeof window<"u"&&(u1=window),typeof document<"u"&&(n3=document),typeof MutationObserver<"u"&&(l3=MutationObserver),typeof performance<"u"&&(o3=performance)}catch{}var Qe=u1.navigator||{},F4=Qe.userAgent,B4=F4===void 0?"":F4,O=u1,u=n3,D4=l3,M2=o3;O.document;var U=!!u.documentElement&&!!u.head&&typeof u.addEventListener=="function"&&typeof u.createElement=="function",t3=~B4.indexOf("MSIE")||~B4.indexOf("Trident/"),h2,p2,u2,L2,d2,D="___FONT_AWESOME___",f1=16,C3="fa",z3="svg-inline--fa",j="data-fa-i2svg",n1="data-fa-pseudo-element",Je="data-fa-pseudo-element-pending",L1="data-prefix",d1="data-icon",R4="fontawesome-i2svg",Ze="async",cs=["HTML","HEAD","STYLE","SCRIPT"],H3=function(){try{return!0}catch{return!1}}(),p="classic",L="sharp",g1=[p,L];function t2(c){return new Proxy(c,{get:function(e,s){return s in e?e[s]:e[p]}})}var r2=t2((h2={},x(h2,p,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),x(h2,L,{fa:"solid",fass:"solid","fa-solid":"solid"}),h2)),i2=t2((p2={},x(p2,p,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),x(p2,L,{solid:"fass"}),p2)),f2=t2((u2={},x(u2,p,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),x(u2,L,{fass:"fa-solid"}),u2)),as=t2((L2={},x(L2,p,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),x(L2,L,{"fa-solid":"fass"}),L2)),es=/fa(s|r|l|t|d|b|k|ss)?[\-\ ]/,m3="fa-layers-text",ss=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,rs=t2((d2={},x(d2,p,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),x(d2,L,{900:"fass"}),d2)),v3=[1,2,3,4,5,6,7,8,9,10],is=v3.concat([11,12,13,14,15,16,17,18,19,20]),fs=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],I={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},n2=new Set;Object.keys(i2[p]).map(n2.add.bind(n2));Object.keys(i2[L]).map(n2.add.bind(n2));var ns=[].concat(g1,o2(n2),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",I.GROUP,I.SWAP_OPACITY,I.PRIMARY,I.SECONDARY]).concat(v3.map(function(c){return"".concat(c,"x")})).concat(is.map(function(c){return"w-".concat(c)})),a2=O.FontAwesomeConfig||{};function ls(c){var a=u.querySelector("script["+c+"]");if(a)return a.getAttribute(c)}function os(c){return c===""?!0:c==="false"?!1:c==="true"?!0:c}if(u&&typeof u.querySelector=="function"){var ts=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];ts.forEach(function(c){var a=p1(c,2),e=a[0],s=a[1],r=os(ls(e));r!=null&&(a2[s]=r)})}var V3={styleDefault:"solid",familyDefault:"classic",cssPrefix:C3,replacementClass:z3,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};a2.familyPrefix&&(a2.cssPrefix=a2.familyPrefix);var J=C(C({},V3),a2);J.autoReplaceSvg||(J.observeMutations=!1);var z={};Object.keys(V3).forEach(function(c){Object.defineProperty(z,c,{enumerable:!0,set:function(e){J[c]=e,e2.forEach(function(s){return s(z)})},get:function(){return J[c]}})});Object.defineProperty(z,"familyPrefix",{enumerable:!0,set:function(a){J.cssPrefix=a,e2.forEach(function(e){return e(z)})},get:function(){return J.cssPrefix}});O.FontAwesomeConfig=z;var e2=[];function Cs(c){return e2.push(c),function(){e2.splice(e2.indexOf(c),1)}}var $=f1,B={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function zs(c){if(!(!c||!U)){var a=u.createElement("style");a.setAttribute("type","text/css"),a.innerHTML=c;for(var e=u.head.childNodes,s=null,r=e.length-1;r>-1;r--){var i=e[r],f=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(f)>-1&&(s=i)}return u.head.insertBefore(a,s),c}}var Hs="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function l2(){for(var c=12,a="";c-- >0;)a+=Hs[Math.random()*62|0];return a}function Z(c){for(var a=[],e=(c||[]).length>>>0;e--;)a[e]=c[e];return a}function x1(c){return c.classList?Z(c.classList):(c.getAttribute("class")||"").split(" ").filter(function(a){return a})}function M3(c){return"".concat(c).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function ms(c){return Object.keys(c||{}).reduce(function(a,e){return a+"".concat(e,'="').concat(M3(c[e]),'" ')},"").trim()}function T2(c){return Object.keys(c||{}).reduce(function(a,e){return a+"".concat(e,": ").concat(c[e].trim(),";")},"")}function S1(c){return c.size!==B.size||c.x!==B.x||c.y!==B.y||c.rotate!==B.rotate||c.flipX||c.flipY}function vs(c){var a=c.transform,e=c.containerWidth,s=c.iconWidth,r={transform:"translate(".concat(e/2," 256)")},i="translate(".concat(a.x*32,", ").concat(a.y*32,") "),f="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),n="rotate(".concat(a.rotate," 0 0)"),l={transform:"".concat(i," ").concat(f," ").concat(n)},t={transform:"translate(".concat(s/2*-1," -256)")};return{outer:r,inner:l,path:t}}function Vs(c){var a=c.transform,e=c.width,s=e===void 0?f1:e,r=c.height,i=r===void 0?f1:r,f=c.startCentered,n=f===void 0?!1:f,l="";return n&&t3?l+="translate(".concat(a.x/$-s/2,"em, ").concat(a.y/$-i/2,"em) "):n?l+="translate(calc(-50% + ".concat(a.x/$,"em), calc(-50% + ").concat(a.y/$,"em)) "):l+="translate(".concat(a.x/$,"em, ").concat(a.y/$,"em) "),l+="scale(".concat(a.size/$*(a.flipX?-1:1),", ").concat(a.size/$*(a.flipY?-1:1),") "),l+="rotate(".concat(a.rotate,"deg) "),l}var Ms=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function h3(){var c=C3,a=z3,e=z.cssPrefix,s=z.replacementClass,r=Ms;if(e!==c||s!==a){var i=new RegExp("\\.".concat(c,"\\-"),"g"),f=new RegExp("\\--".concat(c,"\\-"),"g"),n=new RegExp("\\.".concat(a),"g");r=r.replace(i,".".concat(e,"-")).replace(f,"--".concat(e,"-")).replace(n,".".concat(s))}return r}var E4=!1;function a1(){z.autoAddCss&&!E4&&(zs(h3()),E4=!0)}var hs={mixout:function(){return{dom:{css:h3,insertCss:a1}}},hooks:function(){return{beforeDOMElementCreation:function(){a1()},beforeI2svg:function(){a1()}}}},R=O||{};R[D]||(R[D]={});R[D].styles||(R[D].styles={});R[D].hooks||(R[D].hooks={});R[D].shims||(R[D].shims=[]);var T=R[D],p3=[],ps=function c(){u.removeEventListener("DOMContentLoaded",c),w2=1,p3.map(function(a){return a()})},w2=!1;U&&(w2=(u.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(u.readyState),w2||u.addEventListener("DOMContentLoaded",ps));function us(c){U&&(w2?setTimeout(c,0):p3.push(c))}function C2(c){var a=c.tag,e=c.attributes,s=e===void 0?{}:e,r=c.children,i=r===void 0?[]:r;return typeof c=="string"?M3(c):"<".concat(a," ").concat(ms(s),">").concat(i.map(C2).join(""),"</").concat(a,">")}function U4(c,a,e){if(c&&c[a]&&c[a][e])return{prefix:a,iconName:e,icon:c[a][e]}}var Ls=function(a,e){return function(s,r,i,f){return a.call(e,s,r,i,f)}},e1=function(a,e,s,r){var i=Object.keys(a),f=i.length,n=r!==void 0?Ls(e,r):e,l,t,o;for(s===void 0?(l=1,o=a[i[0]]):(l=0,o=s);l<f;l++)t=i[l],o=n(o,a[t],t,a);return o};function ds(c){for(var a=[],e=0,s=c.length;e<s;){var r=c.charCodeAt(e++);if(r>=55296&&r<=56319&&e<s){var i=c.charCodeAt(e++);(i&64512)==56320?a.push(((r&1023)<<10)+(i&1023)+65536):(a.push(r),e--)}else a.push(r)}return a}function l1(c){var a=ds(c);return a.length===1?a[0].toString(16):null}function gs(c,a){var e=c.length,s=c.charCodeAt(a),r;return s>=55296&&s<=56319&&e>a+1&&(r=c.charCodeAt(a+1),r>=56320&&r<=57343)?(s-55296)*1024+r-56320+65536:s}function q4(c){return Object.keys(c).reduce(function(a,e){var s=c[e],r=!!s.icon;return r?a[s.iconName]=s.icon:a[e]=s,a},{})}function o1(c,a){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},s=e.skipHooks,r=s===void 0?!1:s,i=q4(a);typeof T.hooks.addPack=="function"&&!r?T.hooks.addPack(c,q4(a)):T.styles[c]=C(C({},T.styles[c]||{}),i),c==="fas"&&o1("fa",a)}var g2,x2,S2,Y=T.styles,xs=T.shims,Ss=(g2={},x(g2,p,Object.values(f2[p])),x(g2,L,Object.values(f2[L])),g2),N1=null,u3={},L3={},d3={},g3={},x3={},Ns=(x2={},x(x2,p,Object.keys(r2[p])),x(x2,L,Object.keys(r2[L])),x2);function bs(c){return~ns.indexOf(c)}function ks(c,a){var e=a.split("-"),s=e[0],r=e.slice(1).join("-");return s===c&&r!==""&&!bs(r)?r:null}var S3=function(){var a=function(i){return e1(Y,function(f,n,l){return f[l]=e1(n,i,{}),f},{})};u3=a(function(r,i,f){if(i[3]&&(r[i[3]]=f),i[2]){var n=i[2].filter(function(l){return typeof l=="number"});n.forEach(function(l){r[l.toString(16)]=f})}return r}),L3=a(function(r,i,f){if(r[f]=f,i[2]){var n=i[2].filter(function(l){return typeof l=="string"});n.forEach(function(l){r[l]=f})}return r}),x3=a(function(r,i,f){var n=i[2];return r[f]=f,n.forEach(function(l){r[l]=f}),r});var e="far"in Y||z.autoFetchSvg,s=e1(xs,function(r,i){var f=i[0],n=i[1],l=i[2];return n==="far"&&!e&&(n="fas"),typeof f=="string"&&(r.names[f]={prefix:n,iconName:l}),typeof f=="number"&&(r.unicodes[f.toString(16)]={prefix:n,iconName:l}),r},{names:{},unicodes:{}});d3=s.names,g3=s.unicodes,N1=F2(z.styleDefault,{family:z.familyDefault})};Cs(function(c){N1=F2(c.styleDefault,{family:z.familyDefault})});S3();function b1(c,a){return(u3[c]||{})[a]}function ws(c,a){return(L3[c]||{})[a]}function _(c,a){return(x3[c]||{})[a]}function N3(c){return d3[c]||{prefix:null,iconName:null}}function ys(c){var a=g3[c],e=b1("fas",c);return a||(e?{prefix:"fas",iconName:e}:null)||{prefix:null,iconName:null}}function G(){return N1}var k1=function(){return{prefix:null,iconName:null,rest:[]}};function F2(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=a.family,s=e===void 0?p:e,r=r2[s][c],i=i2[s][c]||i2[s][r],f=c in T.styles?c:null;return i||f||null}var $4=(S2={},x(S2,p,Object.keys(f2[p])),x(S2,L,Object.keys(f2[L])),S2);function B2(c){var a,e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=e.skipLookups,r=s===void 0?!1:s,i=(a={},x(a,p,"".concat(z.cssPrefix,"-").concat(p)),x(a,L,"".concat(z.cssPrefix,"-").concat(L)),a),f=null,n=p;(c.includes(i[p])||c.some(function(t){return $4[p].includes(t)}))&&(n=p),(c.includes(i[L])||c.some(function(t){return $4[L].includes(t)}))&&(n=L);var l=c.reduce(function(t,o){var H=ks(z.cssPrefix,o);if(Y[o]?(o=Ss[n].includes(o)?as[n][o]:o,f=o,t.prefix=o):Ns[n].indexOf(o)>-1?(f=o,t.prefix=F2(o,{family:n})):H?t.iconName=H:o!==z.replacementClass&&o!==i[p]&&o!==i[L]&&t.rest.push(o),!r&&t.prefix&&t.iconName){var V=f==="fa"?N3(t.iconName):{},M=_(t.prefix,t.iconName);V.prefix&&(f=null),t.iconName=V.iconName||M||t.iconName,t.prefix=V.prefix||t.prefix,t.prefix==="far"&&!Y.far&&Y.fas&&!z.autoFetchSvg&&(t.prefix="fas")}return t},k1());return(c.includes("fa-brands")||c.includes("fab"))&&(l.prefix="fab"),(c.includes("fa-duotone")||c.includes("fad"))&&(l.prefix="fad"),!l.prefix&&n===L&&(Y.fass||z.autoFetchSvg)&&(l.prefix="fass",l.iconName=_(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||f==="fa")&&(l.prefix=G()||"fas"),l}var As=function(){function c(){Ge(this,c),this.definitions={}}return We(c,[{key:"add",value:function(){for(var e=this,s=arguments.length,r=new Array(s),i=0;i<s;i++)r[i]=arguments[i];var f=r.reduce(this._pullDefinitions,{});Object.keys(f).forEach(function(n){e.definitions[n]=C(C({},e.definitions[n]||{}),f[n]),o1(n,f[n]);var l=f2[p][n];l&&o1(l,f[n]),S3()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(e,s){var r=s.prefix&&s.iconName&&s.icon?{0:s}:s;return Object.keys(r).map(function(i){var f=r[i],n=f.prefix,l=f.iconName,t=f.icon,o=t[2];e[n]||(e[n]={}),o.length>0&&o.forEach(function(H){typeof H=="string"&&(e[n][H]=t)}),e[n][l]=t}),e}}]),c}(),O4=[],K={},Q={},Ps=Object.keys(Q);function Ts(c,a){var e=a.mixoutsTo;return O4=c,K={},Object.keys(Q).forEach(function(s){Ps.indexOf(s)===-1&&delete Q[s]}),O4.forEach(function(s){var r=s.mixout?s.mixout():{};if(Object.keys(r).forEach(function(f){typeof r[f]=="function"&&(e[f]=r[f]),k2(r[f])==="object"&&Object.keys(r[f]).forEach(function(n){e[f]||(e[f]={}),e[f][n]=r[f][n]})}),s.hooks){var i=s.hooks();Object.keys(i).forEach(function(f){K[f]||(K[f]=[]),K[f].push(i[f])})}s.provides&&s.provides(Q)}),e}function t1(c,a){for(var e=arguments.length,s=new Array(e>2?e-2:0),r=2;r<e;r++)s[r-2]=arguments[r];var i=K[c]||[];return i.forEach(function(f){a=f.apply(null,[a].concat(s))}),a}function X(c){for(var a=arguments.length,e=new Array(a>1?a-1:0),s=1;s<a;s++)e[s-1]=arguments[s];var r=K[c]||[];r.forEach(function(i){i.apply(null,e)})}function E(){var c=arguments[0],a=Array.prototype.slice.call(arguments,1);return Q[c]?Q[c].apply(null,a):void 0}function C1(c){c.prefix==="fa"&&(c.prefix="fas");var a=c.iconName,e=c.prefix||G();if(a)return a=_(e,a)||a,U4(b3.definitions,e,a)||U4(T.styles,e,a)}var b3=new As,Fs=function(){z.autoReplaceSvg=!1,z.observeMutations=!1,X("noAuto")},Bs={i2svg:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return U?(X("beforeI2svg",a),E("pseudoElements2svg",a),E("i2svg",a)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=a.autoReplaceSvgRoot;z.autoReplaceSvg===!1&&(z.autoReplaceSvg=!0),z.observeMutations=!0,us(function(){Rs({autoReplaceSvgRoot:e}),X("watch",a)})}},Ds={icon:function(a){if(a===null)return null;if(k2(a)==="object"&&a.prefix&&a.iconName)return{prefix:a.prefix,iconName:_(a.prefix,a.iconName)||a.iconName};if(Array.isArray(a)&&a.length===2){var e=a[1].indexOf("fa-")===0?a[1].slice(3):a[1],s=F2(a[0]);return{prefix:s,iconName:_(s,e)||e}}if(typeof a=="string"&&(a.indexOf("".concat(z.cssPrefix,"-"))>-1||a.match(es))){var r=B2(a.split(" "),{skipLookups:!0});return{prefix:r.prefix||G(),iconName:_(r.prefix,r.iconName)||r.iconName}}if(typeof a=="string"){var i=G();return{prefix:i,iconName:_(i,a)||a}}}},w={noAuto:Fs,config:z,dom:Bs,parse:Ds,library:b3,findIconDefinition:C1,toHtml:C2},Rs=function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=a.autoReplaceSvgRoot,s=e===void 0?u:e;(Object.keys(T.styles).length>0||z.autoFetchSvg)&&U&&z.autoReplaceSvg&&w.dom.i2svg({node:s})};function D2(c,a){return Object.defineProperty(c,"abstract",{get:a}),Object.defineProperty(c,"html",{get:function(){return c.abstract.map(function(s){return C2(s)})}}),Object.defineProperty(c,"node",{get:function(){if(U){var s=u.createElement("div");return s.innerHTML=c.html,s.children}}}),c}function Es(c){var a=c.children,e=c.main,s=c.mask,r=c.attributes,i=c.styles,f=c.transform;if(S1(f)&&e.found&&!s.found){var n=e.width,l=e.height,t={x:n/l/2,y:.5};r.style=T2(C(C({},i),{},{"transform-origin":"".concat(t.x+f.x/16,"em ").concat(t.y+f.y/16,"em")}))}return[{tag:"svg",attributes:r,children:a}]}function Us(c){var a=c.prefix,e=c.iconName,s=c.children,r=c.attributes,i=c.symbol,f=i===!0?"".concat(a,"-").concat(z.cssPrefix,"-").concat(e):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:C(C({},r),{},{id:f}),children:s}]}]}function w1(c){var a=c.icons,e=a.main,s=a.mask,r=c.prefix,i=c.iconName,f=c.transform,n=c.symbol,l=c.title,t=c.maskId,o=c.titleId,H=c.extra,V=c.watchable,M=V===void 0?!1:V,S=s.found?s:e,N=S.width,b=S.height,m=r==="fak",v=[z.replacementClass,i?"".concat(z.cssPrefix,"-").concat(i):""].filter(function(q){return H.classes.indexOf(q)===-1}).filter(function(q){return q!==""||!!q}).concat(H.classes).join(" "),h={children:[],attributes:C(C({},H.attributes),{},{"data-prefix":r,"data-icon":i,class:v,role:H.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(N," ").concat(b)})},d=m&&!~H.classes.indexOf("fa-fw")?{width:"".concat(N/b*16*.0625,"em")}:{};M&&(h.attributes[j]=""),l&&(h.children.push({tag:"title",attributes:{id:h.attributes["aria-labelledby"]||"title-".concat(o||l2())},children:[l]}),delete h.attributes.title);var g=C(C({},h),{},{prefix:r,iconName:i,main:e,mask:s,maskId:t,transform:f,symbol:n,styles:C(C({},d),H.styles)}),F=s.found&&e.found?E("generateAbstractMask",g)||{children:[],attributes:{}}:E("generateAbstractIcon",g)||{children:[],attributes:{}},y=F.children,c1=F.attributes;return g.children=y,g.attributes=c1,n?Us(g):Es(g)}function G4(c){var a=c.content,e=c.width,s=c.height,r=c.transform,i=c.title,f=c.extra,n=c.watchable,l=n===void 0?!1:n,t=C(C(C({},f.attributes),i?{title:i}:{}),{},{class:f.classes.join(" ")});l&&(t[j]="");var o=C({},f.styles);S1(r)&&(o.transform=Vs({transform:r,startCentered:!0,width:e,height:s}),o["-webkit-transform"]=o.transform);var H=T2(o);H.length>0&&(t.style=H);var V=[];return V.push({tag:"span",attributes:t,children:[a]}),i&&V.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),V}function qs(c){var a=c.content,e=c.title,s=c.extra,r=C(C(C({},s.attributes),e?{title:e}:{}),{},{class:s.classes.join(" ")}),i=T2(s.styles);i.length>0&&(r.style=i);var f=[];return f.push({tag:"span",attributes:r,children:[a]}),e&&f.push({tag:"span",attributes:{class:"sr-only"},children:[e]}),f}var s1=T.styles;function z1(c){var a=c[0],e=c[1],s=c.slice(4),r=p1(s,1),i=r[0],f=null;return Array.isArray(i)?f={tag:"g",attributes:{class:"".concat(z.cssPrefix,"-").concat(I.GROUP)},children:[{tag:"path",attributes:{class:"".concat(z.cssPrefix,"-").concat(I.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(z.cssPrefix,"-").concat(I.PRIMARY),fill:"currentColor",d:i[1]}}]}:f={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:a,height:e,icon:f}}var $s={found:!1,width:512,height:512};function Os(c,a){!H3&&!z.showMissingIcons&&c&&console.error('Icon with name "'.concat(c,'" and prefix "').concat(a,'" is missing.'))}function H1(c,a){var e=a;return a==="fa"&&z.styleDefault!==null&&(a=G()),new Promise(function(s,r){if(E("missingIconAbstract"),e==="fa"){var i=N3(c)||{};c=i.iconName||c,a=i.prefix||a}if(c&&a&&s1[a]&&s1[a][c]){var f=s1[a][c];return s(z1(f))}Os(c,a),s(C(C({},$s),{},{icon:z.showMissingIcons&&c?E("missingIconAbstract")||{}:{}}))})}var W4=function(){},m1=z.measurePerformance&&M2&&M2.mark&&M2.measure?M2:{mark:W4,measure:W4},c2='FA "6.2.1"',Gs=function(a){return m1.mark("".concat(c2," ").concat(a," begins")),function(){return k3(a)}},k3=function(a){m1.mark("".concat(c2," ").concat(a," ends")),m1.measure("".concat(c2," ").concat(a),"".concat(c2," ").concat(a," begins"),"".concat(c2," ").concat(a," ends"))},y1={begin:Gs,end:k3},N2=function(){};function I4(c){var a=c.getAttribute?c.getAttribute(j):null;return typeof a=="string"}function Ws(c){var a=c.getAttribute?c.getAttribute(L1):null,e=c.getAttribute?c.getAttribute(d1):null;return a&&e}function Is(c){return c&&c.classList&&c.classList.contains&&c.classList.contains(z.replacementClass)}function _s(){if(z.autoReplaceSvg===!0)return b2.replace;var c=b2[z.autoReplaceSvg];return c||b2.replace}function js(c){return u.createElementNS("http://www.w3.org/2000/svg",c)}function Xs(c){return u.createElement(c)}function w3(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=a.ceFn,s=e===void 0?c.tag==="svg"?js:Xs:e;if(typeof c=="string")return u.createTextNode(c);var r=s(c.tag);Object.keys(c.attributes||[]).forEach(function(f){r.setAttribute(f,c.attributes[f])});var i=c.children||[];return i.forEach(function(f){r.appendChild(w3(f,{ceFn:s}))}),r}function Ys(c){var a=" ".concat(c.outerHTML," ");return a="".concat(a,"Font Awesome fontawesome.com "),a}var b2={replace:function(a){var e=a[0];if(e.parentNode)if(a[1].forEach(function(r){e.parentNode.insertBefore(w3(r),e)}),e.getAttribute(j)===null&&z.keepOriginalSource){var s=u.createComment(Ys(e));e.parentNode.replaceChild(s,e)}else e.remove()},nest:function(a){var e=a[0],s=a[1];if(~x1(e).indexOf(z.replacementClass))return b2.replace(a);var r=new RegExp("".concat(z.cssPrefix,"-.*"));if(delete s[0].attributes.id,s[0].attributes.class){var i=s[0].attributes.class.split(" ").reduce(function(n,l){return l===z.replacementClass||l.match(r)?n.toSvg.push(l):n.toNode.push(l),n},{toNode:[],toSvg:[]});s[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",i.toNode.join(" "))}var f=s.map(function(n){return C2(n)}).join(`
`);e.setAttribute(j,""),e.innerHTML=f}};function _4(c){c()}function y3(c,a){var e=typeof a=="function"?a:N2;if(c.length===0)e();else{var s=_4;z.mutateApproach===Ze&&(s=O.requestAnimationFrame||_4),s(function(){var r=_s(),i=y1.begin("mutate");c.map(r),i(),e()})}}var A1=!1;function A3(){A1=!0}function v1(){A1=!1}var y2=null;function j4(c){if(D4&&z.observeMutations){var a=c.treeCallback,e=a===void 0?N2:a,s=c.nodeCallback,r=s===void 0?N2:s,i=c.pseudoElementsCallback,f=i===void 0?N2:i,n=c.observeMutationsRoot,l=n===void 0?u:n;y2=new D4(function(t){if(!A1){var o=G();Z(t).forEach(function(H){if(H.type==="childList"&&H.addedNodes.length>0&&!I4(H.addedNodes[0])&&(z.searchPseudoElements&&f(H.target),e(H.target)),H.type==="attributes"&&H.target.parentNode&&z.searchPseudoElements&&f(H.target.parentNode),H.type==="attributes"&&I4(H.target)&&~fs.indexOf(H.attributeName))if(H.attributeName==="class"&&Ws(H.target)){var V=B2(x1(H.target)),M=V.prefix,S=V.iconName;H.target.setAttribute(L1,M||o),S&&H.target.setAttribute(d1,S)}else Is(H.target)&&r(H.target)})}}),U&&y2.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Ks(){y2&&y2.disconnect()}function Qs(c){var a=c.getAttribute("style"),e=[];return a&&(e=a.split(";").reduce(function(s,r){var i=r.split(":"),f=i[0],n=i.slice(1);return f&&n.length>0&&(s[f]=n.join(":").trim()),s},{})),e}function Js(c){var a=c.getAttribute("data-prefix"),e=c.getAttribute("data-icon"),s=c.innerText!==void 0?c.innerText.trim():"",r=B2(x1(c));return r.prefix||(r.prefix=G()),a&&e&&(r.prefix=a,r.iconName=e),r.iconName&&r.prefix||(r.prefix&&s.length>0&&(r.iconName=ws(r.prefix,c.innerText)||b1(r.prefix,l1(c.innerText))),!r.iconName&&z.autoFetchSvg&&c.firstChild&&c.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=c.firstChild.data)),r}function Zs(c){var a=Z(c.attributes).reduce(function(r,i){return r.name!=="class"&&r.name!=="style"&&(r[i.name]=i.value),r},{}),e=c.getAttribute("title"),s=c.getAttribute("data-fa-title-id");return z.autoA11y&&(e?a["aria-labelledby"]="".concat(z.replacementClass,"-title-").concat(s||l2()):(a["aria-hidden"]="true",a.focusable="false")),a}function cr(){return{iconName:null,title:null,titleId:null,prefix:null,transform:B,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function X4(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},e=Js(c),s=e.iconName,r=e.prefix,i=e.rest,f=Zs(c),n=t1("parseNodeAttributes",{},c),l=a.styleParser?Qs(c):[];return C({iconName:s,title:c.getAttribute("title"),titleId:c.getAttribute("data-fa-title-id"),prefix:r,transform:B,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:f}},n)}var ar=T.styles;function P3(c){var a=z.autoReplaceSvg==="nest"?X4(c,{styleParser:!1}):X4(c);return~a.extra.classes.indexOf(m3)?E("generateLayersText",c,a):E("generateSvgReplacementMutation",c,a)}var W=new Set;g1.map(function(c){W.add("fa-".concat(c))});Object.keys(r2[p]).map(W.add.bind(W));Object.keys(r2[L]).map(W.add.bind(W));W=o2(W);function Y4(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!U)return Promise.resolve();var e=u.documentElement.classList,s=function(H){return e.add("".concat(R4,"-").concat(H))},r=function(H){return e.remove("".concat(R4,"-").concat(H))},i=z.autoFetchSvg?W:g1.map(function(o){return"fa-".concat(o)}).concat(Object.keys(ar));i.includes("fa")||i.push("fa");var f=[".".concat(m3,":not([").concat(j,"])")].concat(i.map(function(o){return".".concat(o,":not([").concat(j,"])")})).join(", ");if(f.length===0)return Promise.resolve();var n=[];try{n=Z(c.querySelectorAll(f))}catch{}if(n.length>0)s("pending"),r("complete");else return Promise.resolve();var l=y1.begin("onTree"),t=n.reduce(function(o,H){try{var V=P3(H);V&&o.push(V)}catch(M){H3||M.name==="MissingIcon"&&console.error(M)}return o},[]);return new Promise(function(o,H){Promise.all(t).then(function(V){y3(V,function(){s("active"),s("complete"),r("pending"),typeof a=="function"&&a(),l(),o()})}).catch(function(V){l(),H(V)})})}function er(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;P3(c).then(function(e){e&&y3([e],a)})}function sr(c){return function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=(a||{}).icon?a:C1(a||{}),r=e.mask;return r&&(r=(r||{}).icon?r:C1(r||{})),c(s,C(C({},e),{},{mask:r}))}}var rr=function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=e.transform,r=s===void 0?B:s,i=e.symbol,f=i===void 0?!1:i,n=e.mask,l=n===void 0?null:n,t=e.maskId,o=t===void 0?null:t,H=e.title,V=H===void 0?null:H,M=e.titleId,S=M===void 0?null:M,N=e.classes,b=N===void 0?[]:N,m=e.attributes,v=m===void 0?{}:m,h=e.styles,d=h===void 0?{}:h;if(a){var g=a.prefix,F=a.iconName,y=a.icon;return D2(C({type:"icon"},a),function(){return X("beforeDOMElementCreation",{iconDefinition:a,params:e}),z.autoA11y&&(V?v["aria-labelledby"]="".concat(z.replacementClass,"-title-").concat(S||l2()):(v["aria-hidden"]="true",v.focusable="false")),w1({icons:{main:z1(y),mask:l?z1(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:g,iconName:F,transform:C(C({},B),r),symbol:f,title:V,maskId:o,titleId:S,extra:{attributes:v,styles:d,classes:b}})})}},ir={mixout:function(){return{icon:sr(rr)}},hooks:function(){return{mutationObserverCallbacks:function(e){return e.treeCallback=Y4,e.nodeCallback=er,e}}},provides:function(a){a.i2svg=function(e){var s=e.node,r=s===void 0?u:s,i=e.callback,f=i===void 0?function(){}:i;return Y4(r,f)},a.generateSvgReplacementMutation=function(e,s){var r=s.iconName,i=s.title,f=s.titleId,n=s.prefix,l=s.transform,t=s.symbol,o=s.mask,H=s.maskId,V=s.extra;return new Promise(function(M,S){Promise.all([H1(r,n),o.iconName?H1(o.iconName,o.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(N){var b=p1(N,2),m=b[0],v=b[1];M([e,w1({icons:{main:m,mask:v},prefix:n,iconName:r,transform:l,symbol:t,maskId:H,title:i,titleId:f,extra:V,watchable:!0})])}).catch(S)})},a.generateAbstractIcon=function(e){var s=e.children,r=e.attributes,i=e.main,f=e.transform,n=e.styles,l=T2(n);l.length>0&&(r.style=l);var t;return S1(f)&&(t=E("generateAbstractTransformGrouping",{main:i,transform:f,containerWidth:i.width,iconWidth:i.width})),s.push(t||i.icon),{children:s,attributes:r}}}},fr={mixout:function(){return{layer:function(e){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=s.classes,i=r===void 0?[]:r;return D2({type:"layer"},function(){X("beforeDOMElementCreation",{assembler:e,params:s});var f=[];return e(function(n){Array.isArray(n)?n.map(function(l){f=f.concat(l.abstract)}):f=f.concat(n.abstract)}),[{tag:"span",attributes:{class:["".concat(z.cssPrefix,"-layers")].concat(o2(i)).join(" ")},children:f}]})}}}},nr={mixout:function(){return{counter:function(e){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=s.title,i=r===void 0?null:r,f=s.classes,n=f===void 0?[]:f,l=s.attributes,t=l===void 0?{}:l,o=s.styles,H=o===void 0?{}:o;return D2({type:"counter",content:e},function(){return X("beforeDOMElementCreation",{content:e,params:s}),qs({content:e.toString(),title:i,extra:{attributes:t,styles:H,classes:["".concat(z.cssPrefix,"-layers-counter")].concat(o2(n))}})})}}}},lr={mixout:function(){return{text:function(e){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=s.transform,i=r===void 0?B:r,f=s.title,n=f===void 0?null:f,l=s.classes,t=l===void 0?[]:l,o=s.attributes,H=o===void 0?{}:o,V=s.styles,M=V===void 0?{}:V;return D2({type:"text",content:e},function(){return X("beforeDOMElementCreation",{content:e,params:s}),G4({content:e,transform:C(C({},B),i),title:n,extra:{attributes:H,styles:M,classes:["".concat(z.cssPrefix,"-layers-text")].concat(o2(t))}})})}}},provides:function(a){a.generateLayersText=function(e,s){var r=s.title,i=s.transform,f=s.extra,n=null,l=null;if(t3){var t=parseInt(getComputedStyle(e).fontSize,10),o=e.getBoundingClientRect();n=o.width/t,l=o.height/t}return z.autoA11y&&!r&&(f.attributes["aria-hidden"]="true"),Promise.resolve([e,G4({content:e.innerHTML,width:n,height:l,transform:i,title:r,extra:f,watchable:!0})])}}},or=new RegExp('"',"ug"),K4=[1105920,1112319];function tr(c){var a=c.replace(or,""),e=gs(a,0),s=e>=K4[0]&&e<=K4[1],r=a.length===2?a[0]===a[1]:!1;return{value:l1(r?a[0]:a),isSecondary:s||r}}function Q4(c,a){var e="".concat(Je).concat(a.replace(":","-"));return new Promise(function(s,r){if(c.getAttribute(e)!==null)return s();var i=Z(c.children),f=i.filter(function(y){return y.getAttribute(n1)===a})[0],n=O.getComputedStyle(c,a),l=n.getPropertyValue("font-family").match(ss),t=n.getPropertyValue("font-weight"),o=n.getPropertyValue("content");if(f&&!l)return c.removeChild(f),s();if(l&&o!=="none"&&o!==""){var H=n.getPropertyValue("content"),V=~["Sharp"].indexOf(l[2])?L:p,M=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?i2[V][l[2].toLowerCase()]:rs[V][t],S=tr(H),N=S.value,b=S.isSecondary,m=l[0].startsWith("FontAwesome"),v=b1(M,N),h=v;if(m){var d=ys(N);d.iconName&&d.prefix&&(v=d.iconName,M=d.prefix)}if(v&&!b&&(!f||f.getAttribute(L1)!==M||f.getAttribute(d1)!==h)){c.setAttribute(e,h),f&&c.removeChild(f);var g=cr(),F=g.extra;F.attributes[n1]=a,H1(v,M).then(function(y){var c1=w1(C(C({},g),{},{icons:{main:y,mask:k1()},prefix:M,iconName:h,extra:F,watchable:!0})),q=u.createElement("svg");a==="::before"?c.insertBefore(q,c.firstChild):c.appendChild(q),q.outerHTML=c1.map(function(Te){return C2(Te)}).join(`
`),c.removeAttribute(e),s()}).catch(r)}else s()}else s()})}function Cr(c){return Promise.all([Q4(c,"::before"),Q4(c,"::after")])}function zr(c){return c.parentNode!==document.head&&!~cs.indexOf(c.tagName.toUpperCase())&&!c.getAttribute(n1)&&(!c.parentNode||c.parentNode.tagName!=="svg")}function J4(c){if(U)return new Promise(function(a,e){var s=Z(c.querySelectorAll("*")).filter(zr).map(Cr),r=y1.begin("searchPseudoElements");A3(),Promise.all(s).then(function(){r(),v1(),a()}).catch(function(){r(),v1(),e()})})}var Hr={hooks:function(){return{mutationObserverCallbacks:function(e){return e.pseudoElementsCallback=J4,e}}},provides:function(a){a.pseudoElements2svg=function(e){var s=e.node,r=s===void 0?u:s;z.searchPseudoElements&&J4(r)}}},Z4=!1,mr={mixout:function(){return{dom:{unwatch:function(){A3(),Z4=!0}}}},hooks:function(){return{bootstrap:function(){j4(t1("mutationObserverCallbacks",{}))},noAuto:function(){Ks()},watch:function(e){var s=e.observeMutationsRoot;Z4?v1():j4(t1("mutationObserverCallbacks",{observeMutationsRoot:s}))}}}},c3=function(a){var e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return a.toLowerCase().split(" ").reduce(function(s,r){var i=r.toLowerCase().split("-"),f=i[0],n=i.slice(1).join("-");if(f&&n==="h")return s.flipX=!0,s;if(f&&n==="v")return s.flipY=!0,s;if(n=parseFloat(n),isNaN(n))return s;switch(f){case"grow":s.size=s.size+n;break;case"shrink":s.size=s.size-n;break;case"left":s.x=s.x-n;break;case"right":s.x=s.x+n;break;case"up":s.y=s.y-n;break;case"down":s.y=s.y+n;break;case"rotate":s.rotate=s.rotate+n;break}return s},e)},vr={mixout:function(){return{parse:{transform:function(e){return c3(e)}}}},hooks:function(){return{parseNodeAttributes:function(e,s){var r=s.getAttribute("data-fa-transform");return r&&(e.transform=c3(r)),e}}},provides:function(a){a.generateAbstractTransformGrouping=function(e){var s=e.main,r=e.transform,i=e.containerWidth,f=e.iconWidth,n={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(r.x*32,", ").concat(r.y*32,") "),t="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),o="rotate(".concat(r.rotate," 0 0)"),H={transform:"".concat(l," ").concat(t," ").concat(o)},V={transform:"translate(".concat(f/2*-1," -256)")},M={outer:n,inner:H,path:V};return{tag:"g",attributes:C({},M.outer),children:[{tag:"g",attributes:C({},M.inner),children:[{tag:s.icon.tag,children:s.icon.children,attributes:C(C({},s.icon.attributes),M.path)}]}]}}}},r1={x:0,y:0,width:"100%",height:"100%"};function a3(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return c.attributes&&(c.attributes.fill||a)&&(c.attributes.fill="black"),c}function Vr(c){return c.tag==="g"?c.children:[c]}var Mr={hooks:function(){return{parseNodeAttributes:function(e,s){var r=s.getAttribute("data-fa-mask"),i=r?B2(r.split(" ").map(function(f){return f.trim()})):k1();return i.prefix||(i.prefix=G()),e.mask=i,e.maskId=s.getAttribute("data-fa-mask-id"),e}}},provides:function(a){a.generateAbstractMask=function(e){var s=e.children,r=e.attributes,i=e.main,f=e.mask,n=e.maskId,l=e.transform,t=i.width,o=i.icon,H=f.width,V=f.icon,M=vs({transform:l,containerWidth:H,iconWidth:t}),S={tag:"rect",attributes:C(C({},r1),{},{fill:"white"})},N=o.children?{children:o.children.map(a3)}:{},b={tag:"g",attributes:C({},M.inner),children:[a3(C({tag:o.tag,attributes:C(C({},o.attributes),M.path)},N))]},m={tag:"g",attributes:C({},M.outer),children:[b]},v="mask-".concat(n||l2()),h="clip-".concat(n||l2()),d={tag:"mask",attributes:C(C({},r1),{},{id:v,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[S,m]},g={tag:"defs",children:[{tag:"clipPath",attributes:{id:h},children:Vr(V)},d]};return s.push(g,{tag:"rect",attributes:C({fill:"currentColor","clip-path":"url(#".concat(h,")"),mask:"url(#".concat(v,")")},r1)}),{children:s,attributes:r}}}},hr={provides:function(a){var e=!1;O.matchMedia&&(e=O.matchMedia("(prefers-reduced-motion: reduce)").matches),a.missingIconAbstract=function(){var s=[],r={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};s.push({tag:"path",attributes:C(C({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var f=C(C({},i),{},{attributeName:"opacity"}),n={tag:"circle",attributes:C(C({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||n.children.push({tag:"animate",attributes:C(C({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:C(C({},f),{},{values:"1;0;1;1;0;1;"})}),s.push(n),s.push({tag:"path",attributes:C(C({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:C(C({},f),{},{values:"1;0;0;0;0;1;"})}]}),e||s.push({tag:"path",attributes:C(C({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:C(C({},f),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:s}}}},pr={hooks:function(){return{parseNodeAttributes:function(e,s){var r=s.getAttribute("data-fa-symbol"),i=r===null?!1:r===""?!0:r;return e.symbol=i,e}}}},ur=[hs,ir,fr,nr,lr,Hr,mr,vr,Mr,hr,pr];Ts(ur,{mixoutsTo:w});w.noAuto;var T3=w.config,Lr=w.library;w.dom;var A2=w.parse;w.findIconDefinition;w.toHtml;var dr=w.icon;w.layer;var gr=w.text;w.counter;function e3(c,a){var e=Object.keys(c);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(c);a&&(s=s.filter(function(r){return Object.getOwnPropertyDescriptor(c,r).enumerable})),e.push.apply(e,s)}return e}function P(c){for(var a=1;a<arguments.length;a++){var e=arguments[a]!=null?arguments[a]:{};a%2?e3(Object(e),!0).forEach(function(s){k(c,s,e[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(e)):e3(Object(e)).forEach(function(s){Object.defineProperty(c,s,Object.getOwnPropertyDescriptor(e,s))})}return c}function P2(c){return P2=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},P2(c)}function k(c,a,e){return a in c?Object.defineProperty(c,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):c[a]=e,c}function xr(c,a){if(c==null)return{};var e={},s=Object.keys(c),r,i;for(i=0;i<s.length;i++)r=s[i],!(a.indexOf(r)>=0)&&(e[r]=c[r]);return e}function Sr(c,a){if(c==null)return{};var e=xr(c,a),s,r;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(c);for(r=0;r<i.length;r++)s=i[r],!(a.indexOf(s)>=0)&&Object.prototype.propertyIsEnumerable.call(c,s)&&(e[s]=c[s])}return e}function V1(c){return Nr(c)||br(c)||kr(c)||wr()}function Nr(c){if(Array.isArray(c))return M1(c)}function br(c){if(typeof Symbol<"u"&&c[Symbol.iterator]!=null||c["@@iterator"]!=null)return Array.from(c)}function kr(c,a){if(c){if(typeof c=="string")return M1(c,a);var e=Object.prototype.toString.call(c).slice(8,-1);if(e==="Object"&&c.constructor&&(e=c.constructor.name),e==="Map"||e==="Set")return Array.from(c);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return M1(c,a)}}function M1(c,a){(a==null||a>c.length)&&(a=c.length);for(var e=0,s=new Array(a);e<a;e++)s[e]=c[e];return s}function wr(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
//# sourceMappingURL=preview-7a217695.js.map
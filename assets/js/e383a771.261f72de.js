"use strict";(self.webpackChunkso=self.webpackChunkso||[]).push([[41575],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},s="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=u(n),d=a,m=s["".concat(p,".").concat(d)]||s[d]||f[d]||o;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[s]="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},31976:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const o={},i="`printf()` Under Strace",l={unversionedId:"Lab/I/O/Zero-Copy/quiz/strace-printf",id:"Lab/I/O/Zero-Copy/quiz/strace-printf",title:"`printf()` Under Strace",description:"Question Text",source:"@site/docs/Lab/I/O/Zero-Copy/quiz/strace-printf.md",sourceDirName:"Lab/I/O/Zero-Copy/quiz",slug:"/Lab/I/O/Zero-Copy/quiz/strace-printf",permalink:"/operating-systems/Lab/I/O/Zero-Copy/quiz/strace-printf",draft:!1,tags:[],version:"current",frontMatter:{}},p={},u=[{value:"Question Text",id:"question-text",level:2},{value:"Question Answers",id:"question-answers",level:2},{value:"Feedback",id:"feedback",level:2}],c={toc:u};function s(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"printf-under-strace"},(0,a.kt)("inlineCode",{parentName:"h1"},"printf()")," Under Strace"),(0,a.kt)("h2",{id:"question-text"},"Question Text"),(0,a.kt)("p",null,"How many calls to ",(0,a.kt)("inlineCode",{parentName:"p"},"write()")," does the code in ",(0,a.kt)("inlineCode",{parentName:"p"},"support/buffering/printf_buffering.c")," do?"),(0,a.kt)("h2",{id:"question-answers"},"Question Answers"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"none")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"1")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"6")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"5"))),(0,a.kt)("h2",{id:"feedback"},"Feedback"),(0,a.kt)("p",null,"Just run the binary under ",(0,a.kt)("inlineCode",{parentName:"p"},"strace"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},'student@os:/.../support/buffering$ strace -e write ./printf_buffering\nwrite(1, "Dovahkiin, Dovahkiin Naal ok zin"..., 169Dovahkiin, Dovahkiin Naal ok zin los vahriin Wah dein vokul mahfaeraak ahst vaal! Ahrk fin norok paal graan Fod nust hon zindro zaan Dovahkiin, fah hin kogaan mu draal! ) = 169\n+++ exited with 0 +++\n')),(0,a.kt)("p",null,"There's ",(0,a.kt)("strong",{parentName:"p"},"one")," call to ",(0,a.kt)("inlineCode",{parentName:"p"},"write()"),"."))}s.isMDXComponent=!0}}]);
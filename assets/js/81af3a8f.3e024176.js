"use strict";(self.webpackChunkso=self.webpackChunkso||[]).push([[33597],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(r),d=o,m=p["".concat(s,".").concat(d)]||p[d]||f[d]||i;return r?n.createElement(m,a(a({ref:t},c),{},{components:r})):n.createElement(m,a({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:o,a[1]=l;for(var u=2;u<i;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5736:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>f,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var n=r(87462),o=(r(67294),r(3905));const i={},a="I/O Errors",l={unversionedId:"Lab/I/O/I/O Multiplexing/quiz/local-io-errors",id:"Lab/I/O/I/O Multiplexing/quiz/local-io-errors",title:"I/O Errors",description:"Question Text",source:"@site/docs/Lab/I/O/I/O Multiplexing/quiz/local-io-errors.md",sourceDirName:"Lab/I/O/I/O Multiplexing/quiz",slug:"/Lab/I/O/I/O Multiplexing/quiz/local-io-errors",permalink:"/operating-systems/Lab/I/O/I/O Multiplexing/quiz/local-io-errors",draft:!1,tags:[],version:"current",frontMatter:{}},s={},u=[{value:"Question Text",id:"question-text",level:2},{value:"Question Answers",id:"question-answers",level:2},{value:"Feedback",id:"feedback",level:2}],c={toc:u},p="wrapper";function f(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"io-errors"},"I/O Errors"),(0,o.kt)("h2",{id:"question-text"},"Question Text"),(0,o.kt)("p",null,"Which of the following types of errors are ",(0,o.kt)("strong",{parentName:"p"},"unlikely")," to occur during an I/O operation?"),(0,o.kt)("h2",{id:"question-answers"},"Question Answers"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The current user does not have sufficient permisions to access a given file")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"There is not enough space left on the disk"))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The file offset has reached the end of the file when reading")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Some data blocks in the filesystem are corrupted")),(0,o.kt)("h2",{id:"feedback"},"Feedback"),(0,o.kt)("p",null,"We can always reposition the file offset within a given file with either a ",(0,o.kt)("inlineCode",{parentName:"p"},"fseek()")," library call or an ",(0,o.kt)("inlineCode",{parentName:"p"},"lseek()")," syscall, so this is not an error.\nThe others are more difficult to manage, so can be regarded as errors."))}f.isMDXComponent=!0}}]);
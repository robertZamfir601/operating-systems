"use strict";(self.webpackChunkso=self.webpackChunkso||[]).push([[87585],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=c(n),k=i,m=p["".concat(s,".").concat(k)]||p[k]||d[k]||r;return n?a.createElement(m,l(l({ref:t},u),{},{components:n})):a.createElement(m,l({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=k;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:i,l[1]=o;for(var c=2;c<r;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},14301:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var a=n(87462),i=(n(67294),n(3905));const r={},l="libs",o={unversionedId:"Lab/Software Stack/App Investigation/quiz/libs",id:"Lab/Software Stack/App Investigation/quiz/libs",title:"libs",description:"Static Executables",source:"@site/docs/Lab/Software Stack/App Investigation/quiz/libs.md",sourceDirName:"Lab/Software Stack/App Investigation/quiz",slug:"/Lab/Software Stack/App Investigation/quiz/libs",permalink:"/operating-systems/Lab/Software Stack/App Investigation/quiz/libs",draft:!1,tags:[],version:"current",frontMatter:{}},s={},c=[{value:"Static Executables",id:"static-executables",level:2},{value:"Question Text",id:"question-text",level:3},{value:"Question Answers",id:"question-answers",level:3},{value:"Feedback",id:"feedback",level:3},{value:"Dynamic Libraries",id:"dynamic-libraries",level:2},{value:"Question Text",id:"question-text-1",level:3},{value:"Question Answers",id:"question-answers-1",level:3},{value:"Feedback",id:"feedback-1",level:3}],u={toc:c},p="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(p,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"libs"},"libs"),(0,i.kt)("h2",{id:"static-executables"},"Static Executables"),(0,i.kt)("h3",{id:"question-text"},"Question Text"),(0,i.kt)("p",null,"Which of the following tools has no influence over statically-linked executables? (choose 2 answers)"),(0,i.kt)("h3",{id:"question-answers"},"Question Answers"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ltrace"))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"strace"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"nm")))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ldd"))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"rm"))),(0,i.kt)("h3",{id:"feedback"},"Feedback"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"ltrace")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"ldd")," are used to capture connections to dynamic libraries.\nThey have no effect on statically-linked executables."),(0,i.kt)("h2",{id:"dynamic-libraries"},"Dynamic Libraries"),(0,i.kt)("h3",{id:"question-text-1"},"Question Text"),(0,i.kt)("p",null,"Which of the following is a dynamic library?"),(0,i.kt)("h3",{id:"question-answers-1"},"Question Answers"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"libc.a"))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"libc.so"))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"libc.exe"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"libc.c")))),(0,i.kt)("h3",{id:"feedback-1"},"Feedback"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},".so")," (",(0,i.kt)("em",{parentName:"p"},"shared object"),") extension is used for dynamic libraries in Linux."))}d.isMDXComponent=!0}}]);
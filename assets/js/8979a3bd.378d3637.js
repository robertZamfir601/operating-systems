"use strict";(self.webpackChunkso=self.webpackChunkso||[]).push([[33625],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},s="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),s=c(n),b=a,d=s["".concat(u,".").concat(b)]||s[b]||f[b]||i;return n?r.createElement(d,l(l({ref:t},p),{},{components:n})):r.createElement(d,l({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=b;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[s]="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}b.displayName="MDXCreateElement"},77430:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>f,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const i={},l="Flush Libc Buffer",o={unversionedId:"Lab/I/O/I/O Internals/quiz/flush-libc-buffer",id:"Lab/I/O/I/O Internals/quiz/flush-libc-buffer",title:"Flush Libc Buffer",description:"Question Text",source:"@site/docs/Lab/I/O/I/O Internals/quiz/flush-libc-buffer.md",sourceDirName:"Lab/I/O/I/O Internals/quiz",slug:"/Lab/I/O/I/O Internals/quiz/flush-libc-buffer",permalink:"/operating-systems/Lab/I/O/I/O Internals/quiz/flush-libc-buffer",draft:!1,tags:[],version:"current",frontMatter:{}},u={},c=[{value:"Question Text",id:"question-text",level:2},{value:"Question Answers",id:"question-answers",level:2},{value:"Feedback",id:"feedback",level:2}],p={toc:c},s="wrapper";function f(e){let{components:t,...n}=e;return(0,a.kt)(s,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"flush-libc-buffer"},"Flush Libc Buffer"),(0,a.kt)("h2",{id:"question-text"},"Question Text"),(0,a.kt)("p",null,"Which of the following is a method of flushing libc's internal buffer?"),(0,a.kt)("h2",{id:"question-answers"},"Question Answers"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"print a ",(0,a.kt)("inlineCode",{parentName:"li"},"\\0")," character")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"print a ",(0,a.kt)("inlineCode",{parentName:"li"},"\\n")," character")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"print a space character")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"print a ",(0,a.kt)("inlineCode",{parentName:"p"},"\\t")," character"))),(0,a.kt)("h2",{id:"feedback"},"Feedback"),(0,a.kt)("p",null,"Newlines (",(0,a.kt)("inlineCode",{parentName:"p"},"\\n"),") force ",(0,a.kt)("inlineCode",{parentName:"p"},"printf()")," to dump the internal buffer associated with the ",(0,a.kt)("inlineCode",{parentName:"p"},"stdout")," ",(0,a.kt)("inlineCode",{parentName:"p"},"FILE")," ",(0,a.kt)("inlineCode",{parentName:"p"},"struct"),".\nIf you place a ",(0,a.kt)("inlineCode",{parentName:"p"},"\\n")," character within one of the strings in ",(0,a.kt)("inlineCode",{parentName:"p"},"support/buffering/printf_buffering.c"),", a ",(0,a.kt)("inlineCode",{parentName:"p"},"write()")," syscall will be made right after it."))}f.isMDXComponent=!0}}]);
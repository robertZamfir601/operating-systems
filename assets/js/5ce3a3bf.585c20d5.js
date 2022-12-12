"use strict";(self.webpackChunkso=self.webpackChunkso||[]).push([[59617],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),u=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(p.Provider,{value:n},e.children)},s="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),s=u(t),d=a,m=s["".concat(p,".").concat(d)]||s[d]||f[d]||i;return t?r.createElement(m,l(l({ref:n},c),{},{components:t})):r.createElement(m,l({ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=d;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o[s]="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=t[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},68050:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>s,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var r=t(87462),a=(t(67294),t(3905));const i={},l="File handler in C",o={unversionedId:"Lab/I/O/Asynchronous I/O/quiz/file-handler-c",id:"Lab/I/O/Asynchronous I/O/quiz/file-handler-c",title:"File handler in C",description:"Question Text",source:"@site/docs/Lab/I/O/Asynchronous I/O/quiz/file-handler-c.md",sourceDirName:"Lab/I/O/Asynchronous I/O/quiz",slug:"/Lab/I/O/Asynchronous I/O/quiz/file-handler-c",permalink:"/operating-systems/Lab/I/O/Asynchronous I/O/quiz/file-handler-c",draft:!1,tags:[],version:"current",frontMatter:{}},p={},u=[{value:"Question Text",id:"question-text",level:2},{value:"Question Answers",id:"question-answers",level:2},{value:"Feedaback",id:"feedaback",level:2}],c={toc:u};function s(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"file-handler-in-c"},"File handler in C"),(0,a.kt)("h2",{id:"question-text"},"Question Text"),(0,a.kt)("p",null,"What is the type of the file handler in the C code located in ",(0,a.kt)("inlineCode",{parentName:"p"},"support/simple-file-operations/file_operations.c"),"?"),(0,a.kt)("h2",{id:"question-answers"},"Question Answers"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"File"))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"FILE *"))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"FILE"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"void *"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"struct file")))),(0,a.kt)("h2",{id:"feedaback"},"Feedaback"),(0,a.kt)("p",null,"The file is opened using either of the following lines:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},'f = fopen(file_name, "r");\n\nf = fopen(file_name, "w");\n')),(0,a.kt)("p",null,"The type of ",(0,a.kt)("inlineCode",{parentName:"p"},"f")," is ",(0,a.kt)("inlineCode",{parentName:"p"},"FILE *"),":\n",(0,a.kt)("inlineCode",{parentName:"p"},"FILE *f"),"."))}s.isMDXComponent=!0}}]);
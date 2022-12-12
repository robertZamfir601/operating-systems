"use strict";(self.webpackChunkso=self.webpackChunkso||[]).push([[997],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),f=o,m=u["".concat(l,".").concat(f)]||u[f]||d[f]||i;return n?r.createElement(m,a(a({ref:t},p),{},{components:n})):r.createElement(m,a({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},90481:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const i={},a="Prints Working after Closing `stdio`",s={unversionedId:"Lab/I/O/Asynchronous I/O/quiz/prints-work-no-stdio",id:"Lab/I/O/Asynchronous I/O/quiz/prints-work-no-stdio",title:"Prints Working after Closing `stdio`",description:"Question Text",source:"@site/docs/Lab/I/O/Asynchronous I/O/quiz/prints-work-no-stdio.md",sourceDirName:"Lab/I/O/Asynchronous I/O/quiz",slug:"/Lab/I/O/Asynchronous I/O/quiz/prints-work-no-stdio",permalink:"/operating-systems/Lab/I/O/Asynchronous I/O/quiz/prints-work-no-stdio",draft:!1,tags:[],version:"current",frontMatter:{}},l={},c=[{value:"Question Text",id:"question-text",level:2},{value:"Question Answers",id:"question-answers",level:2},{value:"Feedback",id:"feedback",level:2}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"prints-working-after-closing-stdio"},"Prints Working after Closing ",(0,o.kt)("inlineCode",{parentName:"h1"},"stdio")),(0,o.kt)("h2",{id:"question-text"},"Question Text"),(0,o.kt)("p",null,"Why does ",(0,o.kt)("inlineCode",{parentName:"p"},"support/redirect/redirect.c"),", still print messages to the console after closing file descriptor 1 (",(0,o.kt)("inlineCode",{parentName:"p"},"stdout"),")?"),(0,o.kt)("h2",{id:"question-answers"},"Question Answers"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"because ",(0,o.kt)("inlineCode",{parentName:"li"},"wait_for_input()")," calls ",(0,o.kt)("inlineCode",{parentName:"li"},"fprintf(stderr, ...)"),", which prints to ",(0,o.kt)("inlineCode",{parentName:"li"},"stderr")," (file descriptor 2)")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},'because the default file descriptors cannot be "truly" closed')),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"because the other two default file descriptors are still linked to the console")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"because the ",(0,o.kt)("inlineCode",{parentName:"p"},"wait_for_input()")," function started printed before closing the ",(0,o.kt)("inlineCode",{parentName:"p"},"stdout")," file descriptor"))),(0,o.kt)("h2",{id:"feedback"},"Feedback"),(0,o.kt)("p",null,"If you look at ",(0,o.kt)("inlineCode",{parentName:"p"},"wait_for_input()")," closely, you'll notice it calls ",(0,o.kt)("inlineCode",{parentName:"p"},"fprintf(stderr, ...)"),".\n",(0,o.kt)("inlineCode",{parentName:"p"},"stderr")," is liked to file descriptor 2, which is left unchanged so we can still write data to it."))}u.isMDXComponent=!0}}]);
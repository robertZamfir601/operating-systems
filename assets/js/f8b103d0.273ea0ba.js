"use strict";(self.webpackChunkso=self.webpackChunkso||[]).push([[19975],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>h});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},m=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),c=p(t),d=a,h=c["".concat(l,".").concat(d)]||c[d]||u[d]||o;return t?r.createElement(h,i(i({ref:n},m),{},{components:t})):r.createElement(h,i({ref:n},m))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[c]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},10356:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=t(87462),a=(t(67294),t(3905));const o={},i="`mmap()` vs `read()` and `write()` Benchmark",s={unversionedId:"Lab/I/O/Asynchronous I/O/quiz/mmap-read-write-benchmark",id:"Lab/I/O/Asynchronous I/O/quiz/mmap-read-write-benchmark",title:"`mmap()` vs `read()` and `write()` Benchmark",description:"Question Text",source:"@site/docs/Lab/I/O/Asynchronous I/O/quiz/mmap-read-write-benchmark.md",sourceDirName:"Lab/I/O/Asynchronous I/O/quiz",slug:"/Lab/I/O/Asynchronous I/O/quiz/mmap-read-write-benchmark",permalink:"/operating-systems/Lab/I/O/Asynchronous I/O/quiz/mmap-read-write-benchmark",draft:!1,tags:[],version:"current",frontMatter:{}},l={},p=[{value:"Question Text",id:"question-text",level:2},{value:"Question Answers",id:"question-answers",level:2},{value:"Feedback",id:"feedback",level:2}],m={toc:p};function c(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"mmap-vs-read-and-write-benchmark"},(0,a.kt)("inlineCode",{parentName:"h1"},"mmap()")," vs ",(0,a.kt)("inlineCode",{parentName:"h1"},"read()")," and ",(0,a.kt)("inlineCode",{parentName:"h1"},"write()")," Benchmark"),(0,a.kt)("h2",{id:"question-text"},"Question Text"),(0,a.kt)("p",null,"According to the times shown by ",(0,a.kt)("inlineCode",{parentName:"p"},"benchmark_cp.sh"),", which of the two implementations is faster?"),(0,a.kt)("h2",{id:"question-answers"},"Question Answers"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"the one using ",(0,a.kt)("inlineCode",{parentName:"p"},"mmap()"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"the one using ",(0,a.kt)("inlineCode",{parentName:"p"},"read()")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"write()")))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"they are roughly equivalent")),(0,a.kt)("h2",{id:"feedback"},"Feedback"),(0,a.kt)("p",null,"In our case, running the script a few times results in the following running times:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"student@os:/.../support/file-mappings$ ./benchmark_cp.sh \nmake: Nothing to be done for 'all'.\nBenchmarking mmap_cp on a 1GB file...\n\nreal    0m30,597s\nuser    0m0,569s\nsys 0m2,286s\nBenchmarking cp on a 1 GB file...\n\nreal    0m36,012s\nuser    0m0,039s\nsys 0m2,469s\n\n\nstudent@os:/.../support/file-mappings$ ./benchmark_cp.sh \nmake: Nothing to be done for 'all'.\nBenchmarking mmap_cp on a 1 GB file...\n\nreal    0m27,803s\nuser    0m0,590s\nsys 0m2,114s\nBenchmarking cp on a 1 GB file...\n\nreal    0m35,607s\nuser    0m0,033s\nsys 0m2,564s\n")),(0,a.kt)("p",null,"So it seems that using ",(0,a.kt)("inlineCode",{parentName:"p"},"mmap()")," rather than ",(0,a.kt)("inlineCode",{parentName:"p"},"read()")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"write()")," yields about a 15% increase in performance.\nHowever, you might get different results on your system.\nThis depends on your storage device (SSD vs HDD) and its specific speed (like its RPM for an HDD).\nSo the more conservative answer is to say that this depends on external aspects and that, in general, the 2 implementations are more or less equivalent."),(0,a.kt)("p",null,"If you want to know why there isn't much of a difference between the 2 implementations, check out ",(0,a.kt)("a",{parentName:"p",href:"https://stackoverflow.com/a/27987994"},"this explanation"),"."))}c.isMDXComponent=!0}}]);
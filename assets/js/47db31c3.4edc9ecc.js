"use strict";(self.webpackChunkso=self.webpackChunkso||[]).push([[80126],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(n),f=i,d=m["".concat(s,".").concat(f)]||m[f]||c[f]||a;return n?r.createElement(d,o(o({ref:t},u),{},{components:n})):r.createElement(d,o({ref:t},u))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},89672:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=n(87462),i=(n(67294),n(3905));const a={},o="`write_file.txt` Permissions",l={unversionedId:"Lab/I/O/Zero-Copy/quiz/write-file-permissions",id:"Lab/I/O/Zero-Copy/quiz/write-file-permissions",title:"`write_file.txt` Permissions",description:"Question Text",source:"@site/docs/Lab/I/O/Zero-Copy/quiz/write-file-permissions.md",sourceDirName:"Lab/I/O/Zero-Copy/quiz",slug:"/Lab/I/O/Zero-Copy/quiz/write-file-permissions",permalink:"/operating-systems/Lab/I/O/Zero-Copy/quiz/write-file-permissions",draft:!1,tags:[],version:"current",frontMatter:{}},s={},p=[{value:"Question Text",id:"question-text",level:2},{value:"Question Answers",id:"question-answers",level:2},{value:"Feedaback",id:"feedaback",level:2}],u={toc:p};function m(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"write_filetxt-permissions"},(0,i.kt)("inlineCode",{parentName:"h1"},"write_file.txt")," Permissions"),(0,i.kt)("h2",{id:"question-text"},"Question Text"),(0,i.kt)("p",null,"Assume ",(0,i.kt)("inlineCode",{parentName:"p"},"write_file.txt")," is opened like this:\n",(0,i.kt)("inlineCode",{parentName:"p"},'open("write_file.txt", O_WRONLY | O_CREAT)'),".\nWhat might cause it to have different permissions that ",(0,i.kt)("inlineCode",{parentName:"p"},"read_file.txt"),"?"),(0,i.kt)("h2",{id:"question-answers"},"Question Answers"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"an undefined behaviour in the kernel")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"using the ",(0,i.kt)("inlineCode",{parentName:"p"},"O_WRONLY")," flag"))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"not passing a ",(0,i.kt)("inlineCode",{parentName:"li"},"mode")," argument to ",(0,i.kt)("inlineCode",{parentName:"li"},"open()"),", so a random set of permissions is used.")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"a filesystem error.")),(0,i.kt)("h2",{id:"feedaback"},"Feedaback"),(0,i.kt)("p",null,"Quoting from ",(0,i.kt)("a",{parentName:"p",href:"https://man7.org/linux/man-pages/man2/open.2.html"},(0,i.kt)("inlineCode",{parentName:"a"},"open()"),"'s man page"),", regarding the ",(0,i.kt)("inlineCode",{parentName:"p"},"O_CREAT")," flag:"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"The mode argument must be supplied if O_CREAT or O_TMPFILE is\nspecified in flags; if it is not supplied, some arbitrary\nbytes from the stack will be applied as the file mode.")),(0,i.kt)("p",null,'The wording "arbitrary bytes from the stack" is a bit obsolete.\nTo demistify the quote above, let\'s consider that ',(0,i.kt)("inlineCode",{parentName:"p"},"open()")," is a function call.\nIn fact, ",(0,i.kt)("inlineCode",{parentName:"p"},"libc")," defines wrapper functions on top of all system calls and our code actually calls those wrappers, so our assumption is not far-fetched."),(0,i.kt)("p",null,"To call ",(0,i.kt)("inlineCode",{parentName:"p"},"open()")," correctly, the coulde would look something like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},'open("write_file.txt", O_WRONLY | O_CREAT, 0644).\n')),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"0644")," is the octal representation of ",(0,i.kt)("inlineCode",{parentName:"p"},"rw-r--r--"),".\nThe approximate Assembly code for this function call would look like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-asm"},"mov rdi, path_to_file   ; first argument: path\n\nmov rsi, O_WRONLY\nor rsi, O_CREAT         ; second argument: flags\n\nmov rdx, 0644           ; third argument: mode\n\ncall open\n")),(0,i.kt)("p",null,"When we don't specifty a ",(0,i.kt)("inlineCode",{parentName:"p"},"mode")," argument, the ",(0,i.kt)("inlineCode",{parentName:"p"},"open()")," function simply takes this value from ",(0,i.kt)("inlineCode",{parentName:"p"},"rdx")," as it was before the function call.\nThis is an undefined behaviour because this register might have been modified either way by the program before calling ",(0,i.kt)("inlineCode",{parentName:"p"},"open()"),"."))}m.isMDXComponent=!0}}]);
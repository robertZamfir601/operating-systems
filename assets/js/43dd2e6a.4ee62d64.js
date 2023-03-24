"use strict";(self.webpackChunkso=self.webpackChunkso||[]).push([[87332],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>h});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=s(n),d=o,h=u["".concat(p,".").concat(d)]||u[d]||m[d]||i;return n?r.createElement(h,a(a({ref:t},l),{},{components:n})):r.createElement(h,a({ref:t},l))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c[u]="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},23694:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var r=n(87462),o=(n(67294),n(3905));const i={},a="Time Server",c={unversionedId:"Lab/Application Interaction/The X Window System/content/time-server",id:"Lab/Application Interaction/The X Window System/content/time-server",title:"Time Server",description:"Check out the code in support/time-server/server.c and support/time-server/client.c.",source:"@site/docs/Lab/Application Interaction/The X Window System/content/time-server.md",sourceDirName:"Lab/Application Interaction/The X Window System/content",slug:"/Lab/Application Interaction/The X Window System/content/time-server",permalink:"/operating-systems/Lab/Application Interaction/The X Window System/content/time-server",draft:!1,tags:[],version:"current",frontMatter:{}},p={},s=[{value:"Python Version",id:"python-version",level:2},{value:"Practice",id:"practice",level:3}],l={toc:s},u="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"time-server"},"Time Server"),(0,o.kt)("p",null,"Check out the code in ",(0,o.kt)("inlineCode",{parentName:"p"},"support/time-server/server.c")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"support/time-server/client.c"),"."),(0,o.kt)("p",null,"This is a simple program consisting of a server and a client.\nThe server uses a tcp socket to wait for connections.\nOnce a client has connected, the server will send the current time to it.\nThe client will then print the received time to the console."),(0,o.kt)("p",null,"Let's build and run this example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"student@os:~/.../support/time-server$ make\ngcc -Wall -o server server.c\ngcc -Wall -o client client.c\nstudent@os:~/.../support/time-server$ ./server\n")),(0,o.kt)("p",null,"Then, in another terminal:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"student@os:~/.../support/time-server$ ./client 127.0.0.1 2000\nThe time is Thu Sep  1 11:48:03 2022\n")),(0,o.kt)("h2",{id:"python-version"},"Python Version"),(0,o.kt)("p",null,"In ",(0,o.kt)("inlineCode",{parentName:"p"},"support/time-server/python")," we have the equivalent python implementation for both the server and client:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"student@os:~/.../support/time-server/python$ python3 server.py\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"student@os:~/.../support/time-server/python$ python3 client.py 127.0.0.1 2000\nThe time is Thu Sep  1 11:58:01 2022\n")),(0,o.kt)("h3",{id:"practice"},"Practice"),(0,o.kt)("p",null,"Try to figure out the protocol used by the server and the client.\nYou can do this by reading the source code, corroborated with information obtained at runtime."),(0,o.kt)("p",null,"Run the server again (the version in C), but instead of running the client let's run ",(0,o.kt)("inlineCode",{parentName:"p"},"netcat")," and pipe the output to ",(0,o.kt)("inlineCode",{parentName:"p"},"hexdump"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"nc -d 127.0.0.1 2000 | hexdump -C\n")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/operating-systems/Lab/Application%20Interaction/The%20X%20Window%20System/quiz/time-server"},"Quiz")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/operating-systems/Lab/Application%20Interaction/The%20X%20Window%20System/quiz/time-server-interop"},"Quiz")))}m.isMDXComponent=!0}}]);
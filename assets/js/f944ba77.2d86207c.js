"use strict";(self.webpackChunkso=self.webpackChunkso||[]).push([[62605],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,i=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),u=c(n),d=o,f=u["".concat(i,".").concat(d)]||u[d]||m[d]||l;return n?r.createElement(f,p(p({ref:t},s),{},{components:n})):r.createElement(f,p({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,p=new Array(l);p[0]=d;var a={};for(var i in t)hasOwnProperty.call(t,i)&&(a[i]=t[i]);a.originalType=e,a[u]="string"==typeof e?e:o,p[1]=a;for(var c=2;c<l;c++)p[c]=n[c];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},54267:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>p,default:()=>u,frontMatter:()=>l,metadata:()=>a,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const l={},p="epoll echo-reply server",a={unversionedId:"Lab/I/O/Beyond Network Sockets/support/multiplex/README",id:"Lab/I/O/Beyond Network Sockets/support/multiplex/README",title:"epoll echo-reply server",description:"Use make to compile the epoll()-based echo-reply server:",source:"@site/docs/Lab/I/O/Beyond Network Sockets/support/multiplex/README.md",sourceDirName:"Lab/I/O/Beyond Network Sockets/support/multiplex",slug:"/Lab/I/O/Beyond Network Sockets/support/multiplex/",permalink:"/operating-systems/Lab/I/O/Beyond Network Sockets/support/multiplex/",draft:!1,tags:[],version:"current",frontMatter:{}},i={},c=[],s={toc:c};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"epoll-echo-reply-server"},"epoll echo-reply server"),(0,o.kt)("p",null,"Use ",(0,o.kt)("inlineCode",{parentName:"p"},"make")," to compile the ",(0,o.kt)("inlineCode",{parentName:"p"},"epoll()"),"-based echo-reply server:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"student@os:/.../multiplex/c$ make\n")),(0,o.kt)("p",null,"Start the server and use ",(0,o.kt)("inlineCode",{parentName:"p"},"telnet")," to connect to it and send messages.\nThe server will reply with the same message.\nThe server listens for connections on port ",(0,o.kt)("inlineCode",{parentName:"p"},"42424"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"student@os:/.../multiplex/c$ # on one console\nstudent@os:/.../multiplex/c$ ./epoll_echo_server\n\nstudent@os:/.../multiplex/c$ # on the second, third, ... console\nstudent@os:/.../multiplex/c$ telnet localhost 42424\n")),(0,o.kt)("p",null,"The server uses ",(0,o.kt)("inlineCode",{parentName:"p"},"epoll()")," for multiplexing connections and receiving notifications (input - ",(0,o.kt)("inlineCode",{parentName:"p"},"EPOLLIN")," and output - ",(0,o.kt)("inlineCode",{parentName:"p"},"EPOLLOUT"),").\nA specialized structure (",(0,o.kt)("inlineCode",{parentName:"p"},"struct connection"),") maintains information regarding each connection."),(0,o.kt)("p",null,"Wrappers over ",(0,o.kt)("inlineCode",{parentName:"p"},"epoll()")," are defined in ",(0,o.kt)("inlineCode",{parentName:"p"},"../../../utils/sock/w_epoll.h"),"."))}u.isMDXComponent=!0}}]);
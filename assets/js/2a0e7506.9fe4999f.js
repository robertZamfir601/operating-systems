"use strict";(self.webpackChunkso=self.webpackChunkso||[]).push([[60441],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>O});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=l(r),y=a,O=u["".concat(p,".").concat(y)]||u[y]||f[y]||o;return r?n.createElement(O,s(s({ref:t},c),{},{components:r})):n.createElement(O,s({ref:t},c))}));function O(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=y;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},97526:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var n=r(87462),a=(r(67294),r(3905));const o={},s="Sparse File",i={unversionedId:"Lab/I/O/I/O Multiplexing/support/sparse-file/README",id:"Lab/I/O/I/O Multiplexing/support/sparse-file/README",title:"Sparse File",description:"The swiss_cheese.sparse file is a sparse file.",source:"@site/docs/Lab/I/O/I/O Multiplexing/support/sparse-file/README.md",sourceDirName:"Lab/I/O/I/O Multiplexing/support/sparse-file",slug:"/Lab/I/O/I/O Multiplexing/support/sparse-file/",permalink:"/operating-systems/Lab/I/O/I/O Multiplexing/support/sparse-file/",draft:!1,tags:[],version:"current",frontMatter:{}},p={},l=[],c={toc:l};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"sparse-file"},"Sparse File"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"swiss_cheese.sparse")," file is a sparse file.\nIt stores 1 character of useful data followed by 10 bytes of spaces.\nThen another characters, then another 10 bytes of spaces, and so on."),(0,a.kt)("p",null,"Fill in the blanks in ",(0,a.kt)("inlineCode",{parentName:"p"},"solve.c")," to read the characters, concatenate them together and get the flag."))}u.isMDXComponent=!0}}]);
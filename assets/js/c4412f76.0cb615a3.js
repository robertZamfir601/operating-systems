"use strict";(self.webpackChunkso=self.webpackChunkso||[]).push([[13135],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(n),h=o,d=m["".concat(l,".").concat(h)]||m[h]||u[h]||a;return n?r.createElement(d,i(i({ref:t},c),{},{components:n})):r.createElement(d,i({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},42064:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const a={},i="Zero-Copy",s={unversionedId:"Lab/I/O/Overview/content/zero-copy",id:"Lab/I/O/Overview/content/zero-copy",title:"Zero-Copy",description:"Imagine a server that responds with files that it stores locally.",source:"@site/docs/Lab/I/O/Overview/content/zero-copy.md",sourceDirName:"Lab/I/O/Overview/content",slug:"/Lab/I/O/Overview/content/zero-copy",permalink:"/operating-systems/Lab/I/O/Overview/content/zero-copy",draft:!1,tags:[],version:"current",frontMatter:{}},l={},p=[{value:"Practice: Measure It",id:"practice-measure-it",level:2}],c={toc:p};function m(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"zero-copy"},"Zero-Copy"),(0,o.kt)("p",null,"Imagine a server that responds with files that it stores locally.\nIts actions would be those highlighted in the image below:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Receive a new request and extract the filename"),(0,o.kt)("li",{parentName:"ol"},"Read the filename from the disk into memory"),(0,o.kt)("li",{parentName:"ol"},"Send the file from memory to the client")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Client-Server Steps",src:n(24393).Z,width:"502",height:"752"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"The quiz below is tricky, yet very imporant."),"\n",(0,o.kt)("strong",{parentName:"p"},"Do NOT skip it in order for this section to make sense!")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/operating-systems/Lab/I/O/Overview/quiz/server-copies"},"Quiz")),(0,o.kt)("p",null,"As you might have guessed, 2 of these copies are useless.\nSince the app doesn't modify the file, there's no need for it to store the file in its own buffer.\nIt would be more efficient to use ",(0,o.kt)("strong",{parentName:"p"},"a single")," kernel buffer as intermediate storage between the disk and the NIC, as shown in the image below."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Server Copies - Zero-Copy",src:n(82403).Z,width:"562",height:"472"})),(0,o.kt)("p",null,'For an easier comparison with the "classic" ',(0,o.kt)("inlineCode",{parentName:"p"},"read()")," + ",(0,o.kt)("inlineCode",{parentName:"p"},"send()")," model, here's the first version again:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Server Copies - Read-Send",src:n(12943).Z,width:"572",height:"652"})),(0,o.kt)("p",null,"It should be obvious that the former approach is more efficient than the latter.\nThe syscall with which we can leverage ",(0,o.kt)("strong",{parentName:"p"},"zero-copy")," is called ",(0,o.kt)("a",{parentName:"p",href:"https://man7.org/linux/man-pages/man2/sendfile.2.html"},(0,o.kt)("inlineCode",{parentName:"a"},"sendfile()")),"."),(0,o.kt)("h2",{id:"practice-measure-it"},"Practice: Measure It"),(0,o.kt)("p",null,"So we have all the reasons to believe zero-copy is the faster of the two approaches we know.\nBut belief alone is meaningless.\nLet's test it!"),(0,o.kt)("p",null,"First, look at the code in ",(0,o.kt)("inlineCode",{parentName:"p"},"support/zero-copy/server.py"),".\nIt spawns 2 threads.\nOne of them listens on port 8081 and serves connections via ",(0,o.kt)("inlineCode",{parentName:"p"},"read()")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"send()"),".\nThe other listens on port 8082 and serves connections via ",(0,o.kt)("inlineCode",{parentName:"p"},"sendfile()"),".\nAs you can see, the difference between them is minimal."),(0,o.kt)("p",null,"First generate the test file using the Makefile.\nThen start the server in one terminal.\nNow, in another one, use ",(0,o.kt)("inlineCode",{parentName:"p"},"benchmark_client.py")," to benchmark both implementations.\nBelow are some generic results.\nYours migh differ by quite a lot as they depend on your disk, your NIC, your kernel, your Python version, the load on your system etc."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"student@os:/.../support/zero-copy$ python3 benchmark_client.py read-send\nTime taken: 7.175773588009179 seconds\n\nstudent@os:/.../support/zero-copy$ python3 benchmark_client.py sendfile\nTime taken: 3.71454380400246 seconds\n")),(0,o.kt)("p",null,"This is quite good!\nUsing ",(0,o.kt)("inlineCode",{parentName:"p"},"sendfile()")," halves the number of copies needed from 4 to 2.\nThus, it makes sense for the running time to ",(0,o.kt)("em",{parentName:"p"},"roughly")," halve as well."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/operating-systems/Lab/I/O/Overview/quiz/fewer-than-2-copies"},"Quiz")),(0,o.kt)("p",null,"You can read a slightlty more detailed article about zero-copy ",(0,o.kt)("a",{parentName:"p",href:"https://developer.ibm.com/articles/j-zerocopy/"},"here"),"."))}m.isMDXComponent=!0},24393:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/client-server-file-c21c08a102e6557188be7f080092a12c.svg"},12943:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/server-copies-normal-7e82d53d42a478d0313cb85917335f94.svg"},82403:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/server-copies-zero-copy-fc1fa1195f2444d92486d7d63dfc81a3.svg"}}]);
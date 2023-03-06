"use strict";(self.webpackChunkso=self.webpackChunkso||[]).push([[28239],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var o=n.createContext({}),p=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(a),u=l,h=m["".concat(o,".").concat(u)]||m[u]||d[u]||r;return a?n.createElement(h,s(s({ref:t},c),{},{components:a})):n.createElement(h,s({ref:t},c))}));function h(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,s=new Array(r);s[0]=u;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[m]="string"==typeof e?e:l,s[1]=i;for(var p=2;p<r;p++)s[p]=a[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},41070:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var n=a(87462),l=(a(67294),a(3905));const r={},s=void 0,i={unversionedId:"Lab/Software-Stack/Static-dynamic/content/basic-syscall",id:"Lab/Software-Stack/Static-dynamic/content/basic-syscall",title:"basic-syscall",description:"Analyzing the Software Stack",source:"@site/docs/Lab/Software-Stack/Static-dynamic/content/basic-syscall.md",sourceDirName:"Lab/Software-Stack/Static-dynamic/content",slug:"/Lab/Software-Stack/Static-dynamic/content/basic-syscall",permalink:"/operating-systems/Lab/Software-Stack/Static-dynamic/content/basic-syscall",draft:!1,tags:[],version:"current",frontMatter:{}},o={},p=[{value:"Analyzing the Software Stack",id:"analyzing-the-software-stack",level:2},{value:"System Calls Explained",id:"system-calls-explained",level:3},{value:"Basic System Calls",id:"basic-system-calls",level:3},{value:"Practice",id:"practice",level:4}],c={toc:p},m="wrapper";function d(e){let{components:t,...r}=e;return(0,l.kt)(m,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"analyzing-the-software-stack"},"Analyzing the Software Stack"),(0,l.kt)("p",null,"To get a better grasp on how the software stack works, let's do a bottom-up approach:\nwe build and run different programs, that start of by using the system call API (the lowest layer in the software stack) and progressively use higher layers."),(0,l.kt)("h3",{id:"system-calls-explained"},"System Calls Explained"),(0,l.kt)("p",null,"A system call, or syscall for short, is a method used by applications to communicate with the operating system's kernel."),(0,l.kt)("p",null,"The need for syscalls is tied to the modern operating systems model of conceptually separating into kernel space and user space."),(0,l.kt)("p",null,"The kernel space manages the hardware resources such as CPU, I/O devices, disk or memory.\nMoreover, the kernel also provides an interface for the user space applications to interact with the hardware."),(0,l.kt)("p",null,"The user space is where you are running your applications and processes.\nFrom the user space, we cannot directly access the hardware or perform privileged operations.\nYou need to use syscalls to perform privileged operations such as accessing the hardware."),(0,l.kt)("p",null,"Below, you can see some examples of system calls and what resource they request from the kernel:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"brk()")," is used to allocate memory")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"open()")," is used to access the file system and open a specific file")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"write()")," is used to access the file system and modify the contents of a specific file"))),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"System Call API Explained",src:a(58404).Z,width:"403",height:"405"})),(0,l.kt)("h3",{id:"basic-system-calls"},"Basic System Calls"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"support/basic-syscall/")," folder stores the implementation of a simple program in assembly language for the x86_64 (64 bit) architecture.\nThe program invokes two system calls: ",(0,l.kt)("inlineCode",{parentName:"p"},"write")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"exit"),".\nThe program is duplicated in two files using the two x86 assembly language syntaxes: the Intel / NASM syntax (",(0,l.kt)("inlineCode",{parentName:"p"},"hello.asm"),") and the AT&T / GAS syntax (",(0,l.kt)("inlineCode",{parentName:"p"},"hello.s"),")."),(0,l.kt)("p",null,"The implementation follows the ",(0,l.kt)("a",{parentName:"p",href:"https://x64.syscall.sh/"},"x86_64 Linux calling convention"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"system call ID is passed in the ",(0,l.kt)("inlineCode",{parentName:"li"},"rax")," register"),(0,l.kt)("li",{parentName:"ul"},"system call arguments are passed, in order, in the ",(0,l.kt)("inlineCode",{parentName:"li"},"rdi"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"rsi"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"rdx"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"r10"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"r8"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"r9")," registers")),(0,l.kt)("p",null,"Let's build and run the two programs:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-console"},"student@os:~/.../lab/support/basic-syscall$ ls\nhello.asm  hello.s  Makefile\n\nstudent@os:~/.../lab/support/basic-syscall$ make\nnasm -f elf64 -o hello-nasm.o hello.asm\ncc -nostdlib -no-pie -Wl,--entry=main -Wl,--build-id=none  hello-nasm.o   -o hello-nasm\ngcc -c -o hello-gas.o hello.s\ncc -nostdlib -no-pie -Wl,--entry=main -Wl,--build-id=none  hello-gas.o   -o hello-gas\n\nstudent@os:~/.../lab/support/basic-syscall$ ls\nhello.asm  hello-gas  hello-gas.o  hello-nasm  hello-nasm.o  hello.s  Makefile\n\nstudent@os:~/.../lab/support/basic-syscall$ ./hello-nasm\nHello, world!\nstudent@os:~/.../lab/support/basic-syscall$ ./hello-gas\nHello, world!\n")),(0,l.kt)("p",null,"The two programs end up printing the ",(0,l.kt)("inlineCode",{parentName:"p"},"Hello, world!")," message at standard output by issuing the ",(0,l.kt)("inlineCode",{parentName:"p"},"write")," system call.\nThen they complete their work by issuing the ",(0,l.kt)("inlineCode",{parentName:"p"},"exit")," system call."),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"write")," system call writes a buffer to the file referred by the first argument which is the file descriptor.\nFile descriptors are going to be studied in-depth in future chapters.\nFor now, it is enough for you to know that they are integers that behave like file handlers.\nThe 3 most common file descriptors are:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"0")," references the standard input (",(0,l.kt)("inlineCode",{parentName:"p"},"stdin"),")")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"1")," references the standard output (",(0,l.kt)("inlineCode",{parentName:"p"},"stdout"),")")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"2")," references the standard error (",(0,l.kt)("inlineCode",{parentName:"p"},"stderr"),")"))),(0,l.kt)("p",null,"Use ",(0,l.kt)("inlineCode",{parentName:"p"},"man 2 write")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"man 3 exit")," to get a detailed understanding of the syntax and use of the two system calls.\nYou can also check the online man pages: ",(0,l.kt)("a",{parentName:"p",href:"https://man7.org/linux/man-pages/man2/write.2.html"},(0,l.kt)("inlineCode",{parentName:"a"},"write")),", ",(0,l.kt)("a",{parentName:"p",href:"https://man7.org/linux/man-pages/man3/exit.3.html"},(0,l.kt)("inlineCode",{parentName:"a"},"exit"))),(0,l.kt)("p",null,"We use ",(0,l.kt)("inlineCode",{parentName:"p"},"strace")," to inspect system calls issued by a program:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-console"},'student@os:~/.../lab/support/basic-syscall$ strace ./hello-nasm\nexecve("./hello-nasm", ["./hello-nasm"], 0x7ffc4e175f00 /* 63 vars */) = 0\nwrite(1, "Hello, world!\\n", 14Hello, world!\n)         = 14\nexit(0)                                 = ?\n+++ exited with 0 +++\n')),(0,l.kt)("p",null,"There are three system calls captured by ",(0,l.kt)("inlineCode",{parentName:"p"},"strace"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"execve"),": this is issued by the shell to create the new process;\nyou'll find out more about ",(0,l.kt)("inlineCode",{parentName:"li"},"execve"),' in the "Compute" chapter'),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"write"),": called by the program to print ",(0,l.kt)("inlineCode",{parentName:"li"},"Hello, world!")," to standard output"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"exit"),": to exit the program")),(0,l.kt)("p",null,"This is the most basic program for doing system calls.\nGiven that system calls require a specific calling convention, their invocation can only be done in assembly language.\nObviously, this is not portable (specific to a given CPU architecture, x86_64 in our case) and too verbose and difficult to maintain.\nFor portability and maintainability, we require a higher level language, such as C.\nIn order to use C, we need function wrappers around system calls."),(0,l.kt)("h4",{id:"practice"},"Practice"),(0,l.kt)("p",null,"Update the ",(0,l.kt)("inlineCode",{parentName:"p"},"hello.asm")," and / or ",(0,l.kt)("inlineCode",{parentName:"p"},"hello.s")," files to print both ",(0,l.kt)("inlineCode",{parentName:"p"},"Hello, world!")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"Bye, world!"),".\nThis means adding another ",(0,l.kt)("inlineCode",{parentName:"p"},"write")," system call."),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/operating-systems/Lab/Software-Stack/Static-dynamic/quiz/syscalls"},"Quiz")))}d.isMDXComponent=!0},58404:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/syscall-explained-c884ed051906c31957f8621ae87d3b2f.svg"}}]);
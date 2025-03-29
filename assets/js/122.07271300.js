(window.webpackJsonp=window.webpackJsonp||[]).push([[122],{437:function(a,s,e){"use strict";e.r(s);var t=e(17),v=Object(t.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"gdb介绍及简单使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#gdb介绍及简单使用"}},[a._v("#")]),a._v(" GDB介绍及简单使用")]),a._v(" "),s("p",[s("code",[a._v("GDB")]),a._v(" 是 "),s("code",[a._v("GNU Debugger")]),a._v("的缩写，是"),s("code",[a._v("GNU软件系统中的标准调试器， 很多类")]),a._v("UNIX"),s("code",[a._v("系统都可以使用")]),a._v("GDB"),s("code",[a._v("，")]),a._v("GDB"),s("code",[a._v("主要用来调试")]),a._v("C/C++"),s("code",[a._v("编写的程序，也可以用来用来调试")]),a._v("Pascal/FORTRAN/D"),s("code",[a._v("等语言编写的程序。")]),a._v("GDB"),s("code",[a._v("最早由犹太裔美国人理查德·马修·斯托曼于")]),a._v("1988"),s("code",[a._v("年编写，后基于")]),a._v("GNU GPL`协议公开发布。")]),a._v(" "),s("h2",{attrs:{id:"基本用法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基本用法"}},[a._v("#")]),a._v(" 基本用法")]),a._v(" "),s("p",[a._v("要使用"),s("code",[a._v("GDB")]),a._v("需要在编译"),s("code",[a._v("c/c++")]),a._v("程序时带上编译参数"),s("code",[a._v("-g")]),a._v("，如:")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[a._v("g++ "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-g")]),a._v(" foo.cpp "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-o")]),a._v(" foo\n")])])]),s("p",[a._v("然后通过"),s("code",[a._v("gdb")]),a._v("命令来运行程序，如:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("gdb "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("executable"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n")])])]),s("p",[s("code",[a._v("gdb")]),a._v("命令可以直接运行程序，也可以调试程序，在运行程序时，可以通过"),s("code",[a._v("run")]),a._v("命令运行程序，在调试程序时，可以通过"),s("code",[a._v("break")]),a._v("设置断点，然后通过"),s("code",[a._v("continue")]),a._v("命令运行程序，当程序运行到断点处时，程序会自动停止。常用调试命令如下：")]),a._v(" "),s("ul",[s("li",[s("code",[a._v("run")]),a._v(" 运行程序")]),a._v(" "),s("li",[s("code",[a._v("list")]),a._v(" 查看源码信息")]),a._v(" "),s("li",[s("code",[a._v("break")]),a._v(" 设置断点")]),a._v(" "),s("li",[s("code",[a._v("disable")]),a._v(" 禁用断点，如"),s("code",[a._v("disable break_point1")])]),a._v(" "),s("li",[s("code",[a._v("enable")]),a._v("启用断点，如"),s("code",[a._v("enable break_point1")])]),a._v(" "),s("li",[s("code",[a._v("delete")]),a._v("删除断点等，如"),s("code",[a._v("delete breakpoint 1")])]),a._v(" "),s("li",[s("code",[a._v("continue")]),a._v(" 运行程序，直到遇到断点")]),a._v(" "),s("li",[s("code",[a._v("next")]),a._v(" 运行下一行")]),a._v(" "),s("li",[s("code",[a._v("step")]),a._v(" 进入函数内部")]),a._v(" "),s("li",[s("code",[a._v("finish/fin")]),a._v(" 执行直到当前函数运行结束，如何有返回值会打印返回值")]),a._v(" "),s("li",[s("code",[a._v("backtrace")]),a._v(" 查看调用栈")]),a._v(" "),s("li",[s("code",[a._v("info args")]),a._v(" 查看参数")]),a._v(" "),s("li",[s("code",[a._v("info locals")]),a._v(" 查看局部变量")]),a._v(" "),s("li",[s("code",[a._v("print")]),a._v(" 打印变量值/寄存器值")]),a._v(" "),s("li",[s("code",[a._v("disassemble")]),a._v(" 查看源代码相关的汇编代码")]),a._v(" "),s("li",[s("code",[a._v("quit")]),a._v(" 退出"),s("code",[a._v("gdb")])])]),a._v(" "),s("p",[a._v("常用命令示例：")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 查看某个寄存器的值：")]),a._v("\np "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$rdx")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 设置某个寄存器的值")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("set")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$rdx")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" 0x10\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 查看环境变量")]),a._v("\nshow environment "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("KEY"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n\n")])])]),s("h2",{attrs:{id:"查看汇编代码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查看汇编代码"}},[a._v("#")]),a._v(" 查看汇编代码")]),a._v(" "),s("ul",[s("li",[a._v("直接输入命令"),s("code",[a._v("disassemble")])])]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" disassemble\n")])])]),s("p",[a._v("查看当前函数的汇编代码")]),a._v(" "),s("ul",[s("li",[a._v("查看特定地址的汇编代码")])]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# x命令是用来查看内存地址的值，i命令是用来查看指令的")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# > x/FMT ADDDRESS")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" x/i 0xaddress\n")])])]),s("ul",[s("li",[a._v("查看特定源文件对应函数的汇编代码")])]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[a._v("disassemble /m "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'source.cpp'")]),a._v("::add\n")])])]),s("h2",{attrs:{id:"text-user-interface-tui"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#text-user-interface-tui"}},[a._v("#")]),a._v(" Text User Interface(TUI)")]),a._v(" "),s("p",[a._v("使用"),s("code",[a._v("GDB")]),a._v("的时候可以借助文本用户界面"),s("code",[a._v("Text User Interface")]),a._v("来提升代码调试的体验。使用"),s("code",[a._v("TUI")]),a._v("可以同时查看源码，汇编代码和控制调试指令输入。")]),a._v(" "),s("ul",[s("li",[a._v("可以通过以下指令启动"),s("code",[a._v("gdb")]),a._v("的"),s("code",[a._v("TUI")]),a._v("模式")])]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" gdb "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-tui")]),a._v("\n")])])]),s("ul",[s("li",[a._v("使用"),s("code",[a._v("layout next")]),a._v("命令来启动"),s("code",[a._v("TUI")]),a._v("，同时展示汇编和源码窗口")])]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" layout next\n")])])]),s("ul",[s("li",[a._v("使用"),s("code",[a._v("layout split")]),a._v("命令来启动"),s("code",[a._v("TUI")]),a._v("，同时展示汇编和源码窗口")])]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" layout "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("split")]),a._v("\n")])])]),s("ul",[s("li",[a._v("使用"),s("code",[a._v("layout regs")]),a._v("命令来查看寄存器信息")])]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" layout regs\n")])])]),s("ul",[s("li",[a._v("使用"),s("code",[a._v("layout asm")]),a._v("命令来查看汇编代码")])]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" layout asm\n")])])]),s("ul",[s("li",[a._v("使用"),s("code",[a._v("layout src")]),a._v("命令来查看源代码")])]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" layout src\n")])])]),s("p",[a._v("窗口切换的快捷键:")]),a._v(" "),s("ul",[s("li",[a._v("只显示源代码窗口")])]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[a._v("Ctrl + X "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v("\n")])])]),s("ul",[s("li",[a._v("打开汇编代码窗口")])]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[a._v("Ctrl + X "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),a._v("\n")])])]),s("h3",{attrs:{id:"refernece"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#refernece"}},[a._v("#")]),a._v(" refernece")]),a._v(" "),s("blockquote",[s("p",[s("a",{attrs:{href:"https://www.sourceware.org/gdb/documentation/",target:"_blank",rel:"noopener noreferrer"}},[a._v("1.https://www.sourceware.org/gdb/documentation/"),s("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=v.exports}}]);
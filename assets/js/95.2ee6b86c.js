(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{414:function(e,a,t){"use strict";t.r(a);var v=t(17),_=Object(v.a)({},(function(){var e=this,a=e._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"llvm"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#llvm"}},[e._v("#")]),e._v(" LLVM")]),e._v(" "),a("h2",{attrs:{id:"介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[e._v("#")]),e._v(" 介绍")]),e._v(" "),a("p",[e._v("和"),a("code",[e._v("GCC")]),e._v("一样，"),a("code",[e._v("LLVM")]),e._v("也是编译器，"),a("code",[e._v("GCC")]),e._v("是由"),a("code",[e._v("GNU")]),e._v("开发的编程语言编译器，是"),a("code",[e._v("GNU")]),e._v("项目的关键部分，也是自由的类"),a("code",[e._v("Unix")]),e._v("及苹果电脑"),a("code",[e._v("Mac OS X")]),e._v("操作系统的标准编译器。")]),e._v(" "),a("p",[a("code",[e._v("LLVM")]),e._v("本身不是缩略词，项目的名称就叫这个。该项目于2000年由美国伊利诺伊大学"),a("code",[e._v("University of Illinois")]),e._v("厄巴纳-香槟分校的"),a("code",[e._v("Vikram Adve")]),e._v("和"),a("code",[e._v("Chris Lattner")]),e._v("发起的，他们的目标在于提供一种基于静态单赋值"),a("code",[e._v("SSA")]),e._v(" 现代编译策略能够支持任意编程语言的静态和动态编译的工具。LLVM首次发布是在2003年。从那时起，LLVM 已经发展成为一个由许多子项目组成的项目集，其中许多子项目广泛应用于商业软件，开源软件和学术研究中。"),a("code",[e._v("LLVM")]),e._v("的开源协议为:"),a("a",{attrs:{href:"https://llvm.org/docs/DeveloperPolicy.html#new-llvm-project-license-framework",target:"_blank",rel:"noopener noreferrer"}},[e._v('"Apache 2.0 License with LLVM exceptions"'),a("OutboundLink")],1)]),e._v(" "),a("p",[a("code",[e._v("LLVM")]),e._v("包含的主要子工程有：")]),e._v(" "),a("ul",[a("li",[a("p",[a("code",[e._v("LLVM Core Libraries")]),e._v("，LLVM核心库提供了现代的独立于源码和目标的优化器，同时支持生成许多流行CPU的代码，这些库围绕一个明确的中间代码表示来构建，因此使用"),a("code",[e._v("LLVM")]),e._v("可以轻松地创建新的语言。")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("Clang")]),e._v("，"),a("code",[e._v("Clang")]),e._v("是"),a("code",[e._v("LLVM")]),e._v("原生的，主要用于"),a("code",[e._v("C")]),e._v("，"),a("code",[e._v("C++")]),e._v("和"),a("code",[e._v("Objective-C")]),e._v("的编译器。"),a("code",[e._v("Clang Static Analyzer")]),e._v("和"),a("code",[e._v("clang-tidy")]),e._v("是"),a("code",[e._v("Clang")]),e._v("前端工具，用于静态代码分析，可以自动的检测定位代码中的"),a("code",[e._v("bug")]),e._v("。")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("LLDB")]),e._v("，LLDB是一个由"),a("code",[e._v("Clang")]),e._v("和"),a("code",[e._v("LLVM")]),e._v("支持的用于调试"),a("code",[e._v("C")]),e._v("，"),a("code",[e._v("C++")]),e._v("，"),a("code",[e._v("Objective-C")]),e._v("和"),a("code",[e._v("Objective-C++")]),e._v("程序的交互式调试器。")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("Polly")]),e._v("，Polly是一个优化器插件，它使用数据流分析来提供高级优化。")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("MLIR")]),e._v("，"),a("code",[e._v("MLIR")]),e._v("是一个用于编译器和运行时系统的中间表示形式。"),a("code",[e._v("MLIR")]),e._v(" 旨在解决软件碎片化问题，改进异构硬件的编译，大幅降低构建特定领域编译器的成本，并帮助将现有编译器连接在一起。")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("OpenMP runtime")]),e._v("，OpenMP运行时库支持多核和分布式并行计算。")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("libc++")]),e._v("和"),a("code",[e._v("libc++abi")]),e._v("，"),a("code",[e._v("libc++")]),e._v("是"),a("code",[e._v("LLVM")]),e._v("的C++标准库的实现，其比"),a("code",[e._v("GCC")]),e._v("更严格的遵守"),a("code",[e._v("C++")]),e._v("标准。")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("LLD")]),e._v("是一个新的链接器"),a("code",[e._v("Linker")]),e._v(",它可以直接替代系统链接器，而且运行速度更快。")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("BOLT")]),e._v("工程是一个后链接优化器，它根据采样剖析器收集的执行情况优化应用程序的代码布局，从而实现改进。")])])]),e._v(" "),a("p",[e._v("除了官方的子工程外，还有很多"),a("a",{attrs:{href:"https://llvm.org/ProjectsWithLLVM/",target:"_blank",rel:"noopener noreferrer"}},[e._v("其他的工程使用"),a("code",[e._v("LLVM")]),e._v("来完成各种任务"),a("OutboundLink")],1),e._v("，借助这些工程，可以使用"),a("code",[e._v("LLVM")]),e._v("来编译"),a("code",[e._v("Ruby/Python/Haskell/Rust/PHP/Lua/Julia")]),e._v("等语言。"),a("code",[e._v("LLVM")]),e._v("的优势在于其通用性，灵活性和可重用性，这也是其能够广泛应用于各种不同任务的原因。")]),e._v(" "),a("h2",{attrs:{id:"安装llvm"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装llvm"}},[e._v("#")]),e._v(" 安装"),a("code",[e._v("LLVM")])]),e._v(" "),a("p",[e._v("参考手册"),a("a",{attrs:{href:"https://llvm.org/docs/GettingStarted.html#hardware",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://llvm.org/docs/GettingStarted.html#hardware"),a("OutboundLink")],1)]),e._v(" "),a("ul",[a("li",[e._v("获取源码")])]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" clone https://github.com/llvm/llvm-project.git\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 查看tag信息")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" tag\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 切到对应版本的分支上")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" checkout tag-name\n")])])]),a("ul",[a("li",[e._v("构建配置")])]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("cmake "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-S")]),e._v(" llvm "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-B")]),e._v(" build "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-G")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("generator"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n")])])]),a("p",[e._v("命令中"),a("code",[e._v("-S")]),e._v("用于指定源代码目录，"),a("code",[e._v("-B")]),e._v("用于指定构建目录，"),a("code",[e._v("-G")]),e._v("用于指定生成器，不同平台使用的生成器分别为：")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("Ninja")]),e._v(",生成"),a("code",[e._v("Ninja")]),e._v("构建文件")]),e._v(" "),a("li",[a("code",[e._v("Unix Makefiles")]),e._v("生成"),a("code",[e._v("makefile")])]),e._v(" "),a("li",[a("code",[e._v("Visual Studio")]),e._v("生成"),a("code",[e._v("Visual Stuio")]),e._v("工程需要的文件")]),e._v(" "),a("li",[a("code",[e._v("Xcode")]),e._v("生成"),a("code",[e._v("Xcode")]),e._v("工程")])]),e._v(" "),a("p",[e._v("常用的"),a("code",[e._v("cmake")]),e._v("构建选项参数[options]:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("-DLLVM_ENABLE_PROJECTS")]),e._v("想要构建的"),a("code",[e._v("LLVM")]),e._v("子项目列表，多个项目名称间使用逗号分割。譬如"),a("code",[e._v('-DLLVM_ENABLE_PROJECTS="clang;lld;clang-tools-extra;lldb;polly"')]),e._v("。")]),e._v(" "),a("li",[a("code",[e._v("-DCMAKE_INSTALL_PREFIX=directory")]),e._v("安装路径")]),e._v(" "),a("li",[a("code",[e._v("-DCMAKE_BUILD_TYPE=type")]),e._v("构建类型，可选值有"),a("code",[e._v("Debug")]),e._v("、"),a("code",[e._v("Release")]),e._v("、"),a("code",[e._v("RelWithDebInfo")]),e._v("、"),a("code",[e._v("MinSizeRel")]),e._v("。")]),e._v(" "),a("li",[a("code",[e._v("-DLLVM_ENABLE_ASSERTIONS=ON")]),e._v("在启用断言检查的情况下进行编译（对于调试构建，默认为打开，对于所有其他构建类型，默认为关闭）。")]),e._v(" "),a("li",[a("code",[e._v("-DLLVM_TARGETS_TO_BUILD=targets")]),e._v("指定要构建的目标平台，多个目标名称用分号分隔。譬如"),a("code",[e._v('-DLLVM_TARGETS_TO_BUILD="X86;ARM;AArch64"')]),e._v("。")]),e._v(" "),a("li",[a("code",[e._v("-DLLVM_USE_LINKER=lld")]),e._v("使用"),a("code",[e._v("LDD")]),e._v("作为链接器，")])]),e._v(" "),a("p",[e._v("一个构建命令示例：")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("cmake "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-S")]),e._v(" llvm "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-B")]),e._v(" build "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-G")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Unix Makefiles"')]),e._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-DLLVM_ENABLE_PROJECTS")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"clang;lld;clang-tools-extra;lldb;polly"')]),e._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-DCMAKE_INSTALL_PREFIX")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("/home/lx/data/sw/llvm-project-main/install "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-DCMAKE_BUILD_TYPE")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("Release "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-DLLVM_ENABLE_ASSERTIONS")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("ON "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-DLLVM_USE_LINKER")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("lld\n")])])]),a("ul",[a("li",[e._v("构建安装")])]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("make")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-jN")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&&")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("make")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v("\n")])])]),a("h2",{attrs:{id:"使用llvm"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用llvm"}},[e._v("#")]),e._v(" 使用"),a("code",[e._v("LLVM")])]),e._v(" "),a("p",[e._v("将"),a("code",[e._v("install_dir/bin")]),e._v("添加到环境变量"),a("code",[e._v("PATH")]),e._v("中，就可以使用"),a("code",[e._v("LLVM")]),e._v("了。")]),e._v(" "),a("ul",[a("li",[e._v("使用"),a("code",[e._v("LLVM")]),e._v("编译"),a("code",[e._v("C/C++")]),e._v("程序")])]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("clang++ "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-c")]),e._v(" hello.cpp "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-o")]),e._v(" hello.o\n")])])]),a("ul",[a("li",[e._v("使用"),a("code",[e._v("LLVM")]),e._v("链接程序")])]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("lld "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-flavor")]),e._v(" gnu "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-o")]),e._v(" hello hello.o\n")])])]),a("ul",[a("li",[e._v("使用"),a("code",[e._v("LLVM")]),e._v("的"),a("code",[e._v("lldb")]),e._v("调试程序")])]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("lldb ./hello\n")])])]),a("ul",[a("li",[e._v("在"),a("code",[e._v("cmake")]),e._v("中使用"),a("code",[e._v("clang")]),e._v(" "),a("ul",[a("li",[e._v("设置环境变量")])]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("export")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("CC")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("/usr/bin/clang\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("export")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("CXX")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("/usr/bin/clang++\ncmake "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("make")]),e._v("\n")])])]),a("ul",[a("li",[e._v("使用"),a("code",[e._v("cmake")]),e._v("参数")])]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("cmake "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-DCMAKE_C_COMPILER")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("/sw/llvm-project-main/install/bin/clang "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-DCMAKE_CXX_COMPILER")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("/sw/llvm-project-main/install/bin/clang\n")])])])])]),e._v(" "),a("h3",{attrs:{id:"reference"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#reference"}},[e._v("#")]),e._v(" reference")]),e._v(" "),a("blockquote",[a("p",[a("a",{attrs:{href:"https://llvm.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("1.https://llvm.org/"),a("OutboundLink")],1),a("br"),e._v(" "),a("a",{attrs:{href:"https://llvm.org/docs/GettingStarted.html#hardware",target:"_blank",rel:"noopener noreferrer"}},[e._v("2.https://llvm.org/docs/GettingStarted.html#hardware"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=_.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{434:function(a,e,c){"use strict";c.r(e);var s=c(17),t=Object(s.a)({},(function(){var a=this,e=a._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"c-加速编译工具ccache"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#c-加速编译工具ccache"}},[a._v("#")]),a._v(" C++加速编译工具ccache")]),a._v(" "),e("p",[a._v("当C++工程比较大的时候，编译时间将是一个不得不考虑的问题。有很多加快编译的方法，其中一种是使用缓存机制。"),e("code",[a._v("ccache")]),a._v("就是利用编译输出缓存加速编译的工具，当开发者试图构建相同的东西两次时，它将从读取缓存，而不是进行编译。")]),a._v(" "),e("h2",{attrs:{id:"ccache介绍"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ccache介绍"}},[a._v("#")]),a._v(" ccache介绍")]),a._v(" "),e("p",[e("code",[a._v("ccache")]),a._v("是一个编译器缓存工具，它通过缓存之前的编译结果来加速重新编译的过程。当再次进行相同的编译时，"),e("code",[a._v("ccache")]),a._v("可以检测到并直接从缓存中获取结果，从而避免了重复的编译过程。")]),a._v(" "),e("p",[a._v("ccache的主要特性包括：")]),a._v(" "),e("ul",[e("li",[a._v("支持GCC、Clang、MSVC（Microsoft Visual C++）等类似的编译器3。")]),a._v(" "),e("li",[a._v("在Linux、macOS、其他类Unix操作系统以及Windows上工作。")]),a._v(" "),e("li",[a._v("理解C、C++、汇编器、CUDA、Objective-C和Objective-C++。")]),a._v(" "),e("li",[a._v("支持通过HTTP（例如使用Nginx或Google Cloud Storage）、Redis或NFS进行远程缓存，可选择地将数据分片到服务器集群。")]),a._v(" "),e("li",[a._v("使用inode缓存来避免在构建过程中反复哈希相同的头文件（在支持的操作系统和文件系统上。")]),a._v(" "),e("li",[a._v("支持使用Zstandard进行压缩。使用XXH3校验缓存内容以检测数据损坏。")]),a._v(" "),e("li",[a._v("保持命中/未命中的统计信息。")]),a._v(" "),e("li",[a._v("自动管理缓存大小。")]),a._v(" "),e("li",[a._v("安装简单，可以从源码编译，也有编译好的二进制文件")]),a._v(" "),e("li",[a._v("开销低")]),a._v(" "),e("li",[a._v("支持将绝对路径重写为相对路径，以提高缓存命中率")]),a._v(" "),e("li",[a._v("可选地在可能的地方使用文件克隆（也称为“reflinks”）来避免复制。在可能的地方使用硬链接来避免复制")])]),a._v(" "),e("p",[a._v("值得注意的是，"),e("code",[a._v("ccache")]),a._v("只知道如何缓存单个文件的编译。对于其他类型的编译（如多文件编译、链接等），"),e("code",[a._v("ccache")]),a._v("会静默地回退到运行实际的编译器。")]),a._v(" "),e("p",[a._v("此外，一些编译器标志不受支持。如果检测到这样的标志，"),e("code",[a._v("ccache")]),a._v("也会静默地回退到运行实际的编译器。")]),a._v(" "),e("h2",{attrs:{id:"安装及使用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装及使用"}},[a._v("#")]),a._v(" 安装及使用")]),a._v(" "),e("p",[e("code",[a._v("ccache")]),a._v("的主页为:"),e("a",{attrs:{href:"https://ccache.dev/",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://ccache.dev/"),e("OutboundLink")],1)]),a._v(" "),e("p",[e("code",[a._v("ccache")]),a._v("对平台语言编译器的支持情况："),e("a",{attrs:{href:"https://ccache.dev/platform-compiler-language-support.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://ccache.dev/platform-compiler-language-support.html"),e("OutboundLink")],1)]),a._v(" "),e("p",[e("strong",[a._v("安装包下载")]),e("a",{attrs:{href:"https://ccache.dev/download.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://ccache.dev/download.html"),e("OutboundLink")],1)]),a._v(" "),e("p",[a._v("下载安装包后解压文件")]),a._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("tar")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-xvf")]),a._v(" ccache-4.9.1-linux-x86_64.tar.xz\n")])])]),e("p",[a._v("解压缩后的包中包含有使用手册，"),e("code",[a._v("MANUAL.html")])]),a._v(" "),e("p",[a._v("使用方式有两种，")]),a._v(" "),e("ul",[e("li",[a._v("一种是临时用法,直接作为gcc/g++命令前缀：")])]),a._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[a._v("ccache gcc test.c "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-o")]),a._v(" t\n")])])]),e("ul",[e("li",[a._v("另一种是全局用法：")])]),a._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("cp")]),a._v(" ccache-4.9.1-linux-x86_64/ccache /usr/local/bin\n\n"),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("ln")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-s")]),a._v(" /usr/local/bin/ccache /usr/local/bin/gcc\n"),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("ln")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-s")]),a._v(" /usr/local/bin/ccache /usr/local/bin/g++\n")])])]),e("p",[a._v("通过创建软链接后，将"),e("code",[a._v("ccache")]),a._v("化妆成了"),e("code",[a._v("gcc/g++")]),a._v(",‵cmake`等会自动调用。")]),a._v(" "),e("p",[e("code",[a._v("ccache")]),a._v("支持很多配置选项，可以在配置文件中进行配置:")]),a._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# ~/.ccache/ccache.conf")]),a._v("\nmax_size "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("5")]),a._v(".0G\n")])])]),e("p",[e("code",[a._v("ccache")]),a._v("还会统计缓存命中等信息，")]),a._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[a._v("ccache -- show-stats\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Cacheable calls:   7946 / 7957 (99.86%)")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#   Hits:            1541 / 7946 (19.39%)")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#     Direct:           0 / 1541 ( 0.00%)")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#     Preprocessed:  1541 / 1541 (100.0%)")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#   Misses:          6405 / 7946 (80.61%)")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Uncacheable calls:   11 / 7957 ( 0.14%)")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Local storage:")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#   Cache size (GB):  1.4 /  5.0 (27.75%)")]),a._v("\n")])])]),e("p",[a._v("以上就是使用"),e("code",[a._v("ccache")]),a._v("的介绍。")])])}),[],!1,null,null,null);e.default=t.exports}}]);
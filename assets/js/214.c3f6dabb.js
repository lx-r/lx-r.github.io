(window.webpackJsonp=window.webpackJsonp||[]).push([[214],{492:function(t,a,s){"use strict";s.r(a);var c=s(10),i=Object(c.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"系统引导项修复"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#系统引导项修复"}},[t._v("#")]),t._v(" 系统引导项修复")]),t._v(" "),a("h2",{attrs:{id:"_1-背景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-背景"}},[t._v("#")]),t._v(" 1.背景")]),t._v(" "),a("p",[t._v("本机安装了"),a("code",[t._v("Win10")]),t._v("和"),a("code",[t._v("Ubuntu20.04")]),t._v("的双系统，开机时出了点问题，不小心点了"),a("code",[t._v("Restore UEFI")]),t._v("，导致进不去"),a("code",[t._v("Ubuntu20.04")]),t._v("了，在"),a("code",[t._v("Win10")]),t._v("下安装了"),a("code",[t._v("Easy BCD")]),t._v(",不小心把"),a("code",[t._v("Win10")]),t._v("的开机引导项也给弄丢了，彻底进不去系统了，考虑重新安装系统，那么多环境要配置，因此先查了下修复引导项的方式，最后都恢复了。需要用到")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:""}},[t._v("软碟通")]),t._v(","),a("br"),t._v("\n链接: https://pan.baidu.com/s/1nzf-18G-fSjlejBx0wIgcQ  密码: vewa")]),t._v(" "),a("li",[a("a",{attrs:{href:""}},[t._v("win10 镜像")]),a("br"),t._v("\n链接: https://pan.baidu.com/s/1KiIIX-BAlGisY_69yYJszg  密码: qqam")]),t._v(" "),a("li",[a("a",{attrs:{href:"%E9%95%9C%E5%83%8F"}},[t._v("Ubuntu20.04")]),a("br"),t._v("\n链接: https://pan.baidu.com/s/1xays-LYFoh5var1qGLcsEg  密码: tcbl")]),t._v(" "),a("li",[t._v("和一个优盘。")])]),t._v(" "),a("h2",{attrs:{id:"_2-恢复win10的引导项目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-恢复win10的引导项目"}},[t._v("#")]),t._v(" 2.恢复"),a("code",[t._v("Win10")]),t._v("的引导项目")]),t._v(" "),a("blockquote",[a("p",[t._v("https://jingyan.baidu.com/article/6dad5075c4196be023e36ea9.html"),a("br"),t._v("\n先用"),a("strong",[t._v("软碟通")]),t._v("制作"),a("code",[t._v("Win 10")]),t._v("启动盘，然后开机按"),a("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[a("mjx-math",{staticClass:"MJX-TEX"},[a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"F"}})],1),a("mjx-mn",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:"1"}}),a("mjx-c",{attrs:{c:"2"}})],1)],1)],1),t._v("设置启动位置，进入"),a("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[a("mjx-math",{staticClass:"MJX-TEX"},[a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"W"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"i"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"n"}})],1)],1)],1),t._v("安装界面，选择命令提示符。")],1)]),t._v(" "),a("p",[a("img",{attrs:{src:"https://day-pic-1311699660.cos.ap-nanjing.myqcloud.com/image/4.png",alt:""}})]),t._v(" "),a("p",[t._v("打开命令提示符，依次执行：")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("bcdedit /enum\nSFC /SCANNOW  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 执行SFC /SCANNOW的命令搜索已经安装的系统")]),t._v("\nBOOTREC /SCANOS "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 执行如下命令修复 Windows 10 的主引导记录并重建 BCD 配置文件")]),t._v("\nBOOTREC /FIXMBR\nBOOTREC /FIXBOOT\nBOOTREC /REBUILDBCD\n")])])]),a("p",[t._v("重启计算机，即可进入到win10操作系统了")]),t._v(" "),a("h2",{attrs:{id:"_3-修复ubuntu启动引导"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-修复ubuntu启动引导"}},[t._v("#")]),t._v(" 3.修复ubuntu启动引导")]),t._v(" "),a("blockquote",[a("p",[t._v("https://blog.csdn.net/weixin_40818267/article/details/102645542?utm_medium=distribute.pc_relevant.none-task-blog-2%7Edefault%7Ebaidujs_title%7Edefault-0.pc_relevant_default&spm=1001.2101.3001.4242.1&utm_relevant_index=3")])]),t._v(" "),a("p",[t._v("先用"),a("strong",[t._v("软碟通")]),t._v("制作"),a("code",[t._v("Ubuntu")]),t._v("启动盘，然后开机按"),a("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[a("mjx-math",{staticClass:"MJX-TEX"},[a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"F"}})],1),a("mjx-mn",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:"1"}}),a("mjx-c",{attrs:{c:"2"}})],1)],1)],1),t._v("设置启动位置，进入"),a("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[a("mjx-math",{staticClass:"MJX-TEX"},[a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"U"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"b"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"u"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"n"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"t"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"u"}})],1)],1)],1),t._v("安装界面，选择试用"),a("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[a("mjx-math",{staticClass:"MJX-TEX"},[a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"U"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"b"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"u"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"n"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"t"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"u"}})],1)],1)],1),t._v(","),a("strong",[t._v("联网，打开终端，执行如下命令：")])],1),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("su")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" add-apt-repository ppa:yannubuntu/boot-repair\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" update\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" boot-repair\n")])])]),a("p",[t._v("安装成功之后，运行命令:")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("boot-repair \n")])])]),a("p",[t._v("选择“recommand repair”，自动执行完后显示“Boot successfully repaired”。重启动后即可恢复。")])])}),[],!1,null,null,null);a.default=i.exports}}]);
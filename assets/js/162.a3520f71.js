(window.webpackJsonp=window.webpackJsonp||[]).push([[162],{441:function(t,e,a){"use strict";a.r(e);var s=a(10),n=Object(s.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"常用shell命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#常用shell命令"}},[t._v("#")]),t._v(" 常用shell命令")]),t._v(" "),e("h2",{attrs:{id:"启动shell"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#启动shell"}},[t._v("#")]),t._v(" 启动shell")]),t._v(" "),e("p",[t._v("大部分"),e("code",[t._v("linux")]),t._v("都默认使用"),e("code",[t._v("GNU bash shell")]),t._v("。"),e("code",[t._v("/etc/passwd")]),t._v("文件包含了所有系统用户账户列表以及每个用户的基本配置信息。其中就包括了用户登陆时使用的"),e("code",[t._v("shell")]),t._v("类型。")]),t._v(" "),e("h2",{attrs:{id:"获取shell命令的帮助"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#获取shell命令的帮助"}},[t._v("#")]),t._v(" 获取shell命令的帮助")]),t._v(" "),e("p",[e("code",[t._v("man")]),t._v(" 命令用来访问存储在Linux系统上的手册页面。")]),t._v(" "),e("p",[t._v("如"),e("code",[t._v("man ls")]),t._v("展示如下")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[t._v("LS"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("                            User Commands                           LS"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nNAME\n       "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("ls")]),t._v(" - list directory contents\n\nSYNOPSIS\n       "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("ls")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("OPTION"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(". "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("FILE"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n\nDESCRIPTION\n       List  information  about  the FILEs "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("the current directory by default"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(".\n       Sort entries alphabetically "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" none of "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-cftuvSUX")]),t._v(" nor "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--sort")]),t._v("  is  speci‐\n       fied.\n\n       Mandatory  arguments  to  long  options are mandatory "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" short options\n       too.\n\n       -a, "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--all")]),t._v("\n              "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("do")]),t._v(" not ignore entries starting with "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v("\n\n       -A, --almost-all\n              "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("do")]),t._v(" not list implied "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v(" and "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("\n\n")])])]),e("p",[t._v("如果不记得命令名，可以使用关键字搜索手册页，命令格式为"),e("code",[t._v("man -k 关键字")]),t._v("。")]),t._v(" "),e("h2",{attrs:{id:"shell命令管理linux文件系统"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#shell命令管理linux文件系统"}},[t._v("#")]),t._v(" shell命令管理linux文件系统")]),t._v(" "),e("p",[e("code",[t._v("Linux")]),t._v("虚拟目录结构只包含一个称为根（root）目录的基础目录。根目录下的目录和文件会按照访问它们的目录路径一一列出。")]),t._v(" "),e("p",[t._v("在Linux PC上安装的第一块硬盘称为根驱动器。根驱动器包含了虚拟目录的核心，其他目录都是从那里开始构建的。Linux会在根驱动器上创建一些特别的目录，我们称之为挂载点（mount point）。挂载点是虚拟目录中用于分配额外存储设备的目录。")]),t._v(" "),e("p",[t._v("常见Linux目录名称表：")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("目 录")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("用 途")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("/")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("虚拟目录的根目录。通常不会在这里存储文件")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("/bin")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("二进制目录，存放许多用户级的GNU工具")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("/boot")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("启动目录，存放启动文件")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("/dev")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("device")]),t._v("，设备目录，Linux在这里创建设备节点")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("/etc")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("系统配置文件目录")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("/home")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("主目录，Linux在这里创建用户目录")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("/lib")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("库目录，存放系统和应用程序的库文件")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("/media/")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("媒体目录，可移动媒体设备的常用挂载点，如移动硬盘等")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("/opt")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("option")]),t._v("，可选目录，常用于存放第三方软件包和数据文件")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("/proc")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("进程目录，存放现有硬件及当前进程的相关信息")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("/root")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("root用户的主目录")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("/sbin")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("系统二进制目录，存放许多GNU管理员级工具")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("/run")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("运行目录，存放系统运作时的运行时数据")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("/srv")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("服务目录，存放本地服务的相关文件")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("/sys")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("系统目录，存放系统硬件信息的相关文件")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("/tmp")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("临时目录，可以在该目录中创建和删除临时工作文件,系统重启后将失去该路径下的文件")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("/usr")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("用户二进制目录，大量用户级的GNU工具和数据文件都存储在这里")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("/var")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("可变目录，用以存放经常变化的文件，比如日志文件")])])])]),t._v(" "),e("p",[t._v("切换目录命令 "),e("code",[t._v("cd")]),t._v(" 将"),e("code",[t._v("shell")]),t._v("会话切换到另一个目录。")]),t._v(" "),e("p",[e("code",[t._v("pwd")]),t._v(" 命令可以显示出"),e("code",[t._v("shell")]),t._v("会话的当前目录，这个目录被称为当前工作目录。")]),t._v(" "),e("p",[t._v("要想知道系统中有哪些文件，可以使用列表命令 "),e("code",[t._v("ls")]),t._v("。")]),t._v(" "),e("p",[t._v("文件或目录的"),e("code",[t._v("inode")]),t._v("编号是一个用于标识的唯一数字，这个数字由内核分配给文件系统中的每一个对象。要查看文件或目录的"),e("code",[t._v("inode")]),t._v("编号，可以给 "),e("code",[t._v("ls")]),t._v(" 命令加入 "),e("code",[t._v("-i")]),t._v(" 参数。")]),t._v(" "),e("p",[e("code",[t._v("mv")]),t._v("命令可以将文件和目录移动到另一个位置或重新命名。")]),t._v(" "),e("p",[e("code",[t._v("bash shell")]),t._v("中删除文件的命令是 "),e("code",[t._v("rm")]),t._v(","),e("code",[t._v("-i")]),t._v(" 命令参数提示你是不是要真的删除该文件。"),e("code",[t._v("bash shell")]),t._v("中没有回收站或垃圾箱，文件一旦删除，就无法再找回。因此，在使用 rm 命令时，要养成总是加入 -i 参数的好习惯。")]),t._v(" "),e("p",[e("code",[t._v("file")]),t._v("命令是一个随手可得的便捷工具。它能够探测文件的内部，并决定文件是什么类型的。")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("file")]),t._v(" build\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# build: directory")]),t._v("\n")])])]),e("p",[e("code",[t._v("cat")]),t._v("用来查看文件的内容。")]),t._v(" "),e("p",[e("code",[t._v("cat")]),t._v("命令的主要缺陷是：一旦运行，你就无法控制后面的操作。为了解决这个问题，开发人员编写了 "),e("code",[t._v("more")]),t._v("命令。可以将文本文件类型按进度展示。"),e("code",[t._v("less")]),t._v(" 命令是"),e("code",[t._v("more")]),t._v("命令的升级版，能够识别上下键以及上下翻页键。")]),t._v(" "),e("p",[e("code",[t._v("tail")]),t._v("命令会显示文件最后几行的内容。"),e("code",[t._v("-n")]),t._v(" 参数来修改所显示的行数。默认情况下，它会显示文件的末尾10行。")]),t._v(" "),e("p",[e("code",[t._v("head")]),t._v("命令，会显示文件开头那些行的内容。")]),t._v(" "),e("h2",{attrs:{id:"后台模式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#后台模式"}},[t._v("#")]),t._v(" 后台模式")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sleep")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("3000")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("\n")])])]),e("p",[t._v("会将"),e("code",[t._v("sleep 3000")]),t._v("放入后台运行。"),e("code",[t._v("jobs")]),t._v(" 命令可以显示出当前运行"),e("br"),t._v("\n在后台模式中的所有用户的进程。")]),t._v(" "),e("p",[t._v("将进程列表置入后台模式,另一种简单的方式是使用协程。")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[t._v("coproc "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sleep")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v("\n")])])]),e("h3",{attrs:{id:"reference"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#reference"}},[t._v("#")]),t._v(" reference")]),t._v(" "),e("blockquote",[e("p",[e("a",{attrs:{href:"https://book.douban.com/subject/35933905/",target:"_blank",rel:"noopener noreferrer"}},[t._v("1.https://book.douban.com/subject/35933905/"),e("OutboundLink")],1)])])])}),[],!1,null,null,null);e.default=n.exports}}]);
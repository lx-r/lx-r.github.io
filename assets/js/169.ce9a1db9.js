(window.webpackJsonp=window.webpackJsonp||[]).push([[169],{488:function(t,a,e){"use strict";e.r(a);var s=e(17),r=Object(s.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"_1-pip是什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-pip是什么"}},[t._v("#")]),t._v(" 1.Pip是什么")]),t._v(" "),a("p",[a("code",[t._v("pip")]),t._v(" 是 "),a("code",[t._v("Python")]),t._v(" 中的标准包管理器。2011年问世，原作者"),a("code",[t._v("Ian Bicking")]),t._v(",以"),a("code",[t._v("Python")]),t._v("语言编写的开源软件包管理器。项目地址："),a("a",{attrs:{href:"https://github.com/pypa/pip",target:"_blank",rel:"noopener noreferrer"}},[t._v("见github"),a("OutboundLink")],1),t._v("。它允许你安装和管理不属于"),a("a",{attrs:{href:"https://docs.python.org/zh-cn/3.8/py-modindex.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Python标准库"),a("OutboundLink")],1),t._v(" 的其它软件包。"),a("code",[t._v("pip")]),t._v("之于"),a("code",[t._v("Python")]),t._v("如"),a("code",[t._v("npm")]),t._v("之于"),a("code",[t._v("javascript")]),t._v(",就是第三方包管理工具。现在，在安装"),a("code",[t._v("Python3")]),t._v("的"),a("code",[t._v("3.4")]),t._v("和"),a("code",[t._v("Python2")]),t._v("的"),a("code",[t._v("2.7.9")]),t._v("之后的版本"),a("code",[t._v("Python")]),t._v("时，"),a("code",[t._v("pip")]),t._v("都会一起被安装。")]),t._v(" "),a("ul",[a("li",[t._v("查看"),a("code",[t._v("pip")]),t._v("的版本")])]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("pip "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("version\npython "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("m pip "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("version\n")])])]),a("ul",[a("li",[t._v("卸载"),a("code",[t._v("pip")])])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("python pip uninstall pip\n")])])]),a("h2",{attrs:{id:"_2-包管理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-包管理"}},[t._v("#")]),t._v(" 2.包管理")]),t._v(" "),a("ul",[a("li",[t._v("安装包")])]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 从pypi在线安装,latest version")]),t._v("\npython "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-m")]),t._v(" pip "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" SomePackage \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 指定版本")]),t._v("\npython "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-m")]),t._v(" pip "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("SomePackage")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.0")]),t._v(".4    \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 最小版本")]),t._v("\npython "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-m")]),t._v(" pip "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'SomePackage>=1.0.4'")]),t._v("     \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 离线安装")]),t._v("\npython "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-m")]),t._v(" pip "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" SomePackage-1.0-py2.py3-none-any.whl\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看即将安装包的文件")]),t._v("\npython "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-m")]),t._v(" pip show "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--files")]),t._v(" SomePackage\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看哪些包过时，并列出最近的包")]),t._v("\npython "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-m")]),t._v(" pip list "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--outdated")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 升级包")]),t._v("\npython "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-m")]),t._v(" pip "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--upgrade")]),t._v(" SomePackage\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 卸载包")]),t._v("\npython "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-m")]),t._v(" pip uninstall SomePackage\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看已安装的所有包")]),t._v("\npython "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-m")]),t._v(" pip list\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看某个已安装包的信息")]),t._v("\npython "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-m")]),t._v(" pip show somePackage\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 从pypi中查看可用的包")]),t._v("\npython "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-m")]),t._v(" pip search "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"query"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 不使用缓存安装")]),t._v("\npip "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" Cython --no-cache-dir\n")])])]),a("ul",[a("li",[t._v("安装文件中指定的包")])]),t._v(" "),a("p",[a("a",{attrs:{href:"https://pip.pypa.io/en/stable/user_guide/",target:"_blank",rel:"noopener noreferrer"}},[t._v("requirements.txt格式"),a("OutboundLink")],1)]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 从文件中安装")]),t._v("\npython "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-m")]),t._v(" pip "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-r")]),t._v(" requirements.txt\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 将已安装的包导出")]),t._v("\npython "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-m")]),t._v(" pip freeze "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" requirements.txt\n")])])]),a("ul",[a("li",[t._v("安装"),a("code",[t._v("wheel")]),t._v("文件包")])]),t._v(" "),a("p",[a("code",[t._v("wheel")]),t._v("是"),a("code",[t._v("Python")]),t._v("中用于加速安装的文档格式，详见"),a("a",{attrs:{href:"https://pip.pypa.io/en/stable/user_guide/",target:"_blank",rel:"noopener noreferrer"}},[t._v("WheelDocs"),a("OutboundLink")],1),t._v(",既相关的PEP（Python Enhancement Proposals）提案，"),a("a",{attrs:{href:"https://www.python.org/dev/peps/pep-0427/",target:"_blank",rel:"noopener noreferrer"}},[t._v("PEP427"),a("OutboundLink")],1),t._v(","),a("a",{attrs:{href:"https://www.python.org/dev/peps/pep-0425/",target:"_blank",rel:"noopener noreferrer"}},[t._v("PEP425"),a("OutboundLink")],1)]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("python -m pip install SomePackage-1.0-py2.py3-none-any.whl\n")])])]),a("ul",[a("li",[t._v("从"),a("code",[t._v("pypi")]),t._v("下载包到本地，然后再安装")])]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("python "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-m")]),t._v(" pip download --destination-directory DIR "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-r")]),t._v(" requirements.txt\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 指定安装路径")]),t._v("\npython "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-m")]),t._v(" pip wheel --wheel-dir DIR "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-r")]),t._v(" requirements.txt\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 仅从本地安装")]),t._v("\npython "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-m")]),t._v(" pip "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" --no-index --find-links"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("DIR "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-r")]),t._v(" requirements.txt\n")])])]),a("ul",[a("li",[t._v("包的安装路径")])]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看自带标准库的路径")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("import")]),t._v(" sys\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" sys.prefix\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看通过pip安装的第三方库的安装路径")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("import")]),t._v(" site\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" site.getsitepackages"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h2",{attrs:{id:"_3-缓存管理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-缓存管理"}},[t._v("#")]),t._v(" 3.缓存管理")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://pip.pypa.io/en/stable/cli/pip_cache/#pip-cache",target:"_blank",rel:"noopener noreferrer"}},[t._v("pip cache"),a("OutboundLink")],1),t._v("命令")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("pip cache dir")]),t._v(": 获取缓存目录")]),t._v(" "),a("li",[a("strong",[t._v("pip cache info")]),t._v(": 获取缓存信息")]),t._v(" "),a("li",[a("strong",[t._v("pip cache list")]),t._v(": 包目录列表")]),t._v(" "),a("li",[a("strong",[t._v("pip cache remove")]),t._v(": 移除一个或多个包")]),t._v(" "),a("li",[a("strong",[t._v("pip cache purge")]),t._v(": 清空所有缓存")])]),t._v(" "),a("h2",{attrs:{id:"_4-配置文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-配置文件"}},[t._v("#")]),t._v(" 4.配置文件")]),t._v(" "),a("ul",[a("li",[t._v("支持三种作用域范围的配置文件："),a("code",[t._v("global")]),t._v("全系统、"),a("code",[t._v("user")]),t._v("用户、"),a("code",[t._v("site")]),t._v("虚拟环境。")]),t._v(" "),a("li",[t._v("**"),a("a",{attrs:{href:"https://pip.pypa.io/en/stable/cli/pip_config/",target:"_blank",rel:"noopener noreferrer"}},[t._v("pip config"),a("OutboundLink")],1),t._v("**命令")]),t._v(" "),a("li",[t._v("**"),a("code",[t._v("pip config list -v")]),t._v("**查看配置的详细信息"),a("code",[t._v("-v, verbose")]),t._v("输出详细信息")]),t._v(" "),a("li",[t._v("配置缓存路径："),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# create the file and add")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("global")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\ncache"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("dir")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("path"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("to"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("dir")]),t._v("\n")])])])])]),t._v(" "),a("h2",{attrs:{id:"_5-指定源"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-指定源"}},[t._v("#")]),t._v(" 5.指定源")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("常用的源：\nhttps://pypi.tuna.tsinghua.edu.cn/simple\nhttp://mirrors.aliyun.com/pypi/simple/\nhttps://pypi.mirrors.ustc.edu.cn/simple/\nhttp://pypi.douban.com/simple/\n")])])]),a("ul",[a("li",[t._v("通过命令行指定")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("pip -i http://pypi.douban.com/simple install Flask -- trusted-host pypi.douban.com\n")])])]),a("ul",[a("li",[t._v("通过配置文件指定")])]),t._v(" "),a("p",[t._v("当前用户目录下创建"),a("code",[t._v(".pip")]),t._v("文件夹,在该目录下创建"),a("code",[t._v("pip.conf")]),t._v("文件填写，"),a("a",{attrs:{href:"https://pip.pypa.io/en/stable/user_guide/#config-file",target:"_blank",rel:"noopener noreferrer"}},[t._v("pip.conf文件官方示例"),a("OutboundLink")],1)]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("mkdir ~/.pip\n")])])]),a("p",[t._v("pip.conf内容：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("[global]trusted-host=mirrors.aliyun.com\nindex-url=http://mirrors.aliyun.com/pypi/simple/\n")])])]),a("InArticleAdsense",{attrs:{"data-ad-client":"ca-pub-8685746128991385","data-ad-slot":"2974191661"}}),t._v(" "),a("h3",{attrs:{id:"参考资料"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[t._v("#")]),t._v(" 参考资料")]),t._v(" "),a("blockquote",[a("ul",[a("li",[a("a",{attrs:{href:"https://realpython.com/what-is-pip/",target:"_blank",rel:"noopener noreferrer"}},[t._v("1.https://realpython.com/what-is-pip/"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://pip.pypa.io/en/stable/development/getting-started/#development-environment",target:"_blank",rel:"noopener noreferrer"}},[t._v("2.https://pip.pypa.io/en/stable/development/getting-started/#development-environment"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://pypi.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("3.https://pypi.org/"),a("OutboundLink")],1)])])])],1)}),[],!1,null,null,null);a.default=r.exports}}]);
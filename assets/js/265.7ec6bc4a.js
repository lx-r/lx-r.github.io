(window.webpackJsonp=window.webpackJsonp||[]).push([[265],{579:function(e,t,a){"use strict";a.r(t);var _=a(17),s=Object(_.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h2",{attrs:{id:"_1-crlf"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-crlf"}},[e._v("#")]),e._v(" 1.CRLF")]),e._v(" "),t("ul",[t("li",[e._v("1."),t("code",[e._v("CR")]),e._v("回⻋符号"),t("code",[e._v("Carriage Return")]),e._v("， 将光标移动到⾏⾸， 但不换⾏，转义符号"),t("code",[e._v("\\r")]),e._v(",十进制数"),t("code",[e._v("13")]),e._v("或十六进制"),t("code",[e._v("0x0d")])]),e._v(" "),t("li",[e._v("2."),t("code",[e._v("LF")]),e._v("换⾏符"),t("code",[e._v("Line Feed(newline)")]),e._v("， 将光标移动到下⼀⾏，转义符号"),t("code",[e._v("\\n")]),e._v(", 十进制数"),t("code",[e._v("10")]),e._v(",十六进制数"),t("code",[e._v("0x0a")])]),e._v(" "),t("li",[e._v("3."),t("code",[e._v("Windows")]),e._v("使⽤"),t("code",[e._v("CRLF")]),e._v("表⽰下⼀⾏， "),t("code",[e._v("UNIX")]),e._v("和"),t("code",[e._v("LINUX")]),e._v("使⽤"),t("code",[e._v("LF")]),e._v(" 表⽰下⼀⾏， "),t("code",[e._v("MACOS")]),e._v("使⽤"),t("code",[e._v("CR")]),e._v("表⽰下⼀⾏")])]),e._v(" "),t("h2",{attrs:{id:"_2-git对换行符的处理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-git对换行符的处理"}},[e._v("#")]),e._v(" 2.GIT对换行符的处理")]),e._v(" "),t("p",[e._v("我们从前⾯可以知道CRLF和LF是不同的字符表⽰， 因此缺少通⽤⾏结尾为 git 等 版本控制软件带来了⿇烦， 这类软件依赖于⾮常精确的字符⽐较来确定⽂件⾃上次 签⼊以来是否发⽣了变化。 如果开发⼈员使⽤ Windows 并且另⼀个使⽤ Mac 或 Linux， 他们每个⼈都保存和提交相同的⽂件， 他们可能会在他们的 git diff 中看到 ⾏结束更改——从 CRLF 到 LF 的转换")]),e._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" config "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("--global")]),e._v(" core.autocrlf "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("true"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),t("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("false")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v("input"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n")])])]),t("p",[e._v("在"),t("code",[e._v("git")]),e._v("上提交时是否进⾏⾏尾转换"),t("code",[e._v("autocrlf")]),e._v("为"),t("code",[e._v("true")]),e._v("时会在"),t("code",[e._v("windows")]),e._v("下push时将CRLF⾃动替换为LF,在拉取时将LF⾃动替换为CRLF,input时提交时转换为LF但拉取时不做任何转换。")]),e._v(" "),t("h2",{attrs:{id:"_3-vscode编辑器选择文件换行方式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-vscode编辑器选择文件换行方式"}},[e._v("#")]),e._v(" 3.VSCODE编辑器选择文件换行方式")]),e._v(" "),t("ul",[t("li",[e._v("快捷方式：右下角")])]),e._v(" "),t("p",[e._v("{% asset_img vscode.jpg This is an example image %}")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://day-pic-1311699660.cos.ap-nanjing.myqcloud.com/image/vscode.jpg",alt:""}})]),e._v(" "),t("ul",[t("li",[e._v("设置"),t("br"),e._v(" "),t("code",[e._v("File")]),e._v("=>"),t("code",[e._v("Perference")]),e._v("=>"),t("code",[e._v("Settings")]),e._v("=>"),t("code",[e._v("Text Editor")]),e._v("=>"),t("code",[e._v("Files")]),e._v("=>"),t("code",[e._v("Eol")])])]),e._v(" "),t("p",[t("img",{attrs:{src:"https://day-pic-1311699660.cos.ap-nanjing.myqcloud.com/image/eol_settings.jpg",alt:""}})]),e._v(" "),t("InArticleAdsense",{attrs:{"data-ad-client":"ca-pub-8685746128991385","data-ad-slot":"2974191661"}}),e._v(" "),t("h3",{attrs:{id:"参考资料"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[e._v("#")]),e._v(" 参考资料")]),e._v(" "),t("blockquote",[t("ul",[t("li",[t("a",{attrs:{href:"https://stackoverflow.com/questions/1967370/git-replacing-lf-with-crlf",target:"_blank",rel:"noopener noreferrer"}},[e._v("LF/CRLF"),t("OutboundLink")],1)])])])],1)}),[],!1,null,null,null);t.default=s.exports}}]);
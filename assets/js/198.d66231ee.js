(window.webpackJsonp=window.webpackJsonp||[]).push([[198],{514:function(s,a,t){"use strict";t.r(a);var e=t(17),n=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"linux的shift命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#linux的shift命令"}},[s._v("#")]),s._v(" Linux的"),a("code",[s._v("shift")]),s._v("命令")]),s._v(" "),a("h2",{attrs:{id:"命令功能"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#命令功能"}},[s._v("#")]),s._v(" 命令功能")]),s._v(" "),a("p",[a("code",[s._v("bash shell")]),s._v("的"),a("code",[s._v("shift")]),s._v("命令能够用来操作命令行参数。")]),s._v(" "),a("p",[s._v("在使用 "),a("code",[s._v("shift")]),s._v(" 命令时，默认情况下它会将每个参数变量向左移动一个位置。所以，变量 "),a("code",[s._v("$3")]),a("br"),s._v("\n的值会移到 "),a("code",[s._v("$2")]),s._v(" 中，变量 "),a("code",[s._v("$2")]),s._v(" 的值会移到 "),a("code",[s._v("$1")]),s._v(" 中，而变量 "),a("code",[s._v("$1")]),s._v(" 的值则会被删除，值得注意的是变量 "),a("code",[s._v("$0")]),s._v(" 的值，也就是程序名，不会改变。")]),s._v(" "),a("p",[s._v("在不知道到底有多少参数时，这是遍历命令行参数的另一个好方法。")]),s._v(" "),a("p",[s._v("使用 "),a("code",[s._v("shift")]),s._v(" 命令的时候要小心。如果某个参数被移出，它的值就被丢弃了，无法再恢复。")]),s._v(" "),a("h2",{attrs:{id:"实例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实例"}},[s._v("#")]),s._v(" 实例")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# !/bin/bash")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("cnt")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("while")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-n")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$1")]),s._v('"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Parameter #'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$cnt")]),s._v(" = "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$1")]),s._v('"')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("count")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("$"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$count")]),s._v(" + "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("shift")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("done")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ./test 1 2 3 4 5")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Parameter # = 1")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Parameter # = 2")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Parameter # = 3")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Parameter # = 4")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Parameter # = 5")]),s._v("\n")])])]),a("h2",{attrs:{id:"补充"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#补充"}},[s._v("#")]),s._v(" 补充")]),s._v(" "),a("p",[a("code",[s._v("shift")]),s._v("命令还支持"),a("code",[s._v("-n")]),s._v("参数，来控制向左移动的步数。")]),s._v(" "),a("p",[s._v("如上面的例子改写后为：")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# !/bin/bash")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("cnt")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("while")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-n")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$1")]),s._v('"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Parameter #'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$cnt")]),s._v(" = "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$1")]),s._v('"')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("count")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("$"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$count")]),s._v(" + "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("shift")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("done")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ./test.sh 1 2 3 4")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Parameter # = 1")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Parameter # = 3")]),s._v("\n")])])]),a("InArticleAdsense",{attrs:{"data-ad-client":"ca-pub-8685746128991385","data-ad-slot":"2974191661"}})],1)}),[],!1,null,null,null);a.default=n.exports}}]);
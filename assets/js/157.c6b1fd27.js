(window.webpackJsonp=window.webpackJsonp||[]).push([[157],{473:function(t,a,s){"use strict";s.r(a);var n=s(17),e=Object(n.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"python中常见问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#python中常见问题"}},[t._v("#")]),t._v(" Python中常见问题")]),t._v(" "),a("h2",{attrs:{id:"read-and-overwrite-a-file-in-python"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#read-and-overwrite-a-file-in-python"}},[t._v("#")]),t._v(" Read and overwrite a file in Python")]),t._v(" "),a("p",[t._v("使用"),a("code",[t._v("r+")]),t._v("模式可以以读写的模式操作打开的文件")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("f "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("open")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("filename"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'r+'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ntext "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" f"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("read"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ntext "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" re"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sub"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'foobar'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'bar'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" text"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("seek"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("write"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("text"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("close"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("如上可以向文件中写入修改后的内容，但是当要写入的内容大小小于原文件中的内容时，将会造成多余的部分还残留在文件中。")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# source.txt")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# This is foobarweb.")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 如上代码执行后内容变为")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# This is barbarweb.")]),t._v("\n")])])]),a("p",[t._v("这种情况下应该使用"),a("code",[t._v("truncate")]),t._v("函数，如下")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("with")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("open")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("filename"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'r+'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" f"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    text "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" f"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("read"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    text "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" re"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sub"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'foobar'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'bar'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" text"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    f"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("seek"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    f"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("write"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("text"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    f"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("truncate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("这样就可以满足功能了。其中"),a("code",[t._v("seek")]),t._v("是移动文件描述符所指向的位置，"),a("code",[t._v("seek(0)")]),t._v("表示移动到文件的开头,"),a("code",[t._v("truncate")]),t._v("是截断指针后面的内容，舍弃多余的部分。")]),t._v(" "),a("blockquote",[a("ul",[a("li",[a("a",{attrs:{href:"https://stackoverflow.com/questions/2424000/read-and-overwrite-a-file-in-python",target:"_blank",rel:"noopener noreferrer"}},[t._v("1.https://stackoverflow.com/questions/2424000/read-and-overwrite-a-file-in-python"),a("OutboundLink")],1)])])]),t._v(" "),a("InArticleAdsense",{attrs:{"data-ad-client":"ca-pub-8685746128991385","data-ad-slot":"2974191661"}})],1)}),[],!1,null,null,null);a.default=e.exports}}]);
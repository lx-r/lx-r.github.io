(window.webpackJsonp=window.webpackJsonp||[]).push([[152],{432:function(t,a,s){"use strict";s.r(a);var n=s(10),r=Object(n.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"pilerror-typeerror-cannot-handle-this-data-type"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pilerror-typeerror-cannot-handle-this-data-type"}},[t._v("#")]),t._v(" pilerror TypeError Cannot handle this data type")]),t._v(" "),a("h3",{attrs:{id:"_1-问题描述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-问题描述"}},[t._v("#")]),t._v(" 1.问题描述")]),t._v(" "),a("p",[t._v("PIL的"),a("code",[t._v("Image.fromarray")]),t._v("使用"),a("code",[t._v("numpy array")]),t._v("生成数组时报错，")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("Traceback "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("most recent call last"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(":\n  File "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/media/lx/data/code/test_python/pil_test.py"')]),t._v(", line "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),t._v(", "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("module"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    print"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Image.fromarray"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("img_array"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("))")]),t._v("\n  File "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/home/lx/anaconda3/envs/Python36/lib/python3.6/site-packages/PIL/Image.py"')]),t._v(", line "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2766")]),t._v(", "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" fromarray\n    raise TypeError"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Cannot handle this data type: %s, %s"')]),t._v(" % typekey"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" from e\nTypeError: Cannot handle this data type: "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(", "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(", "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("i8\n")])])]),a("h3",{attrs:{id:"_2-解决方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-解决方式"}},[t._v("#")]),t._v(" 2.解决方式")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 将numpy array转成np.uint8类型")]),t._v("\nimg_array "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" img_array"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("astype"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("np"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("uint8"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nimg_array "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" np"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("random"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("randint"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("34")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" dtype"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("np"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("uint8"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nImage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fromarray"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("img_array"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("InArticleAdsense",{attrs:{"data-ad-client":"ca-pub-8685746128991385","data-ad-slot":"2974191661"}}),t._v("\n### 参考资料\n"),a("blockquote",[a("ul",[a("li",[a("a",{attrs:{href:"https://stackoverflow.com/questions/55319949/pil-typeerror-cannot-handle-this-data-type",target:"_blank",rel:"noopener noreferrer"}},[t._v("1.https://stackoverflow.com/questions/55319949/pil-typeerror-cannot-handle-this-data-type"),a("OutboundLink")],1)])])])],1)}),[],!1,null,null,null);a.default=r.exports}}]);
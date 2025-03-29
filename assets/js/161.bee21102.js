(window.webpackJsonp=window.webpackJsonp||[]).push([[161],{479:function(t,s,n){"use strict";n.r(s);var a=n(17),e=Object(a.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"_1-判断函数类型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-判断函数类型"}},[t._v("#")]),t._v(" 1.判断函数类型")]),t._v(" "),s("ul",[s("li",[s("p",[s("strong",[t._v("使用hasattr")]),t._v("， "),s("code",[t._v("hasattr(add, '__call__')")]),t._v(", "),s("code",[t._v("function")]),t._v("和可调用的类函数类型都包含"),s("code",[t._v("__call__")]),t._v("属性，可以使用"),s("code",[t._v("hasattr和callable")]),t._v("判断对象是否支持调用，返回为"),s("code",[t._v("true")]),t._v("的对象，不一定是函数。")])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("使用isinstance")]),t._v("，"),s("code",[t._v("isinstance(add, types.FunctionType)")]),t._v("，"),s("code",[t._v("types.FunctionType")]),t._v("判断是否是用户定义的函数类型，此外还可以使用"),s("code",[t._v("types.LambdaType")]),t._v("。"),s("code",[t._v("types")]),t._v("中判断内建函数使用"),s("code",[t._v("types.BuiltinFunctionType")]),t._v(",判断是否是类种的方法使用"),s("code",[t._v("types.MethodType")]),t._v("。更多的介绍可以参考"),s("a",{attrs:{href:"https://docs.python.org/3/library/types.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("doc"),s("OutboundLink")],1)])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("使用inspect.isfunction")]),t._v("，"),s("code",[t._v("inspect.isfunction(add)")]),t._v(",判断一个对象是否是"),s("code",[t._v("Python")]),t._v("种用户自定义的函数，支持判断"),s("code",[t._v("lambda")]),t._v("表达式，但不能够判断"),s("code",[t._v("built-in")]),t._v("类型的函数。"),s("code",[t._v("inspect")]),t._v("是"),s("code",[t._v("Python")]),t._v("中的标准模块，用来检视活动对象，判断对象类型，源文件，源码，检查解释器堆栈等，具体可参考官方"),s("a",{attrs:{href:"https://docs.python.org/3/library/inspect.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("文档"),s("OutboundLink")],1),t._v("。")])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("使用callable")]),t._v("，"),s("code",[t._v("callable(add)")]),t._v(","),s("code",[t._v("callable")]),t._v("是"),s("code",[t._v("Python")]),t._v("中的内置函数，判断一个对象是否可调用，类可调用返回一个实例，实例可调用，如果其中定义了"),s("code",[t._v("__call__")]),t._v("方法。")])])]),t._v(" "),s("h2",{attrs:{id:"_2-示例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-示例"}},[t._v("#")]),t._v(" 2.示例")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" types\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" inspect\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" y"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("y"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Model")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("__call__")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" y"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string-interpolation"}},[s("span",{pre:!0,attrs:{class:"token string"}},[t._v('f"Model(')]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v(", ")]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("y"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v(") is: ")]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("x "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" y"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        \n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"function add:"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"isinstance(function): "')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("isinstance")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("add"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" types"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("FunctionType"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"isinstance(lambda): "')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("isinstance")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("add"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" types"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("LambdaType"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"inspect: "')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" inspect"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("isfunction"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("add"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"callable: "')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("callable")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("add"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"__call__: "')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("hasattr")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("add"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'__call__'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Callable Model:"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"isinstance: "')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("isinstance")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Model"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" types"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("FunctionType"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"inspect: "')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" inspect"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("isfunction"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Model"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"callable: "')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("callable")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Model"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"__call__: "')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("hasattr")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Model"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'__call__'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"buildin print:"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"isinstance: "')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("isinstance")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" types"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("FunctionType"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"inspect: "')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" inspect"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("isfunction"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"callable: "')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("callable")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"__call__: "')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("hasattr")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'__call__'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"BuiltinFunctionType:"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("isinstance")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("abs")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" types"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("BuiltinFunctionType"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# function add:")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# isinstance(function):  True")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# isinstance(lambda): True")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# inspect:  True")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# callable:  True")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# __call__:  True")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Callable Model:")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# isinstance:  False")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# inspect:  False")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# callable:  True")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# __call__:  True")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# buildin print:")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# isinstance:  False")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# inspect:  False")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# callable:  True")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# __call__:  True")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# BuiltinFunctionType: True")]),t._v("\n")])])]),s("InArticleAdsense",{attrs:{"data-ad-client":"ca-pub-8685746128991385","data-ad-slot":"2974191661"}}),t._v("\n### 参考资料\n"),s("blockquote",[s("ul",[s("li",[s("a",{attrs:{href:"https://docs.python.org/3/library/types.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("1.https://docs.python.org/3/library/types.html"),s("OutboundLink")],1)])])]),t._v(" "),s("blockquote",[s("ul",[s("li",[s("a",{attrs:{href:"https://docs.python.org/3/library/inspect.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("2.https://docs.python.org/3/library/inspect.html"),s("OutboundLink")],1)])])])],1)}),[],!1,null,null,null);s.default=e.exports}}]);
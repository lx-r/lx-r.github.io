(window.webpackJsonp=window.webpackJsonp||[]).push([[133],{453:function(t,s,a){"use strict";a.r(s);var n=a(17),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"c-中的noexcept关键字"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#c-中的noexcept关键字"}},[t._v("#")]),t._v(" C++中的noexcept关键字")]),t._v(" "),s("h2",{attrs:{id:"为什么引入noexcept关键字"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#为什么引入noexcept关键字"}},[t._v("#")]),t._v(" 为什么引入noexcept关键字")]),t._v(" "),s("p",[s("code",[t._v("noexcept")]),t._v("是C++11中添加的一个关键字，用于指定函数是否会抛出异常。")]),t._v(" "),s("p",[t._v("编译器可以使用"),s("code",[t._v("noexcept")]),t._v("信息来对不抛出异常的函数启用某些优化。")]),t._v(" "),s("p",[t._v("被"),s("code",[t._v("noexcept")]),t._v("关键字修饰的函数，可以使用"),s("code",[t._v("noexcept")]),t._v("运算符在编译时检查特定表达式是否被声明为抛出任何异常。")]),t._v(" "),s("p",[s("code",[t._v("noexcept")]),t._v("是"),s("code",[t._v("throw()")]),t._v("的改进版本，"),s("code",[t._v("throw()")]),t._v("在C++11中已被弃用。与"),s("code",[t._v("throw()")]),t._v("不同，"),s("code",[t._v("noexcept")]),t._v("不会调用"),s("code",[t._v("std::unexpected")]),t._v(",并且可能会或可能不会展开堆栈。")]),t._v(" "),s("h2",{attrs:{id:"定义与使用示例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#定义与使用示例"}},[t._v("#")]),t._v(" 定义与使用示例")]),t._v(" "),s("p",[t._v("声明一个函数会抛出异常：")]),t._v(" "),s("div",{staticClass:"language-cpp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("func")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("noexcept")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("func")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("noexcept")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("声明一个函数不会抛出异常：")]),t._v(" "),s("div",{staticClass:"language-cpp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("func")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("func")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("noexcept")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("旧版使用"),s("code",[t._v("throw")]),t._v("声明一个函数会不会抛出异常：")]),t._v(" "),s("div",{staticClass:"language-cpp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("func")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throw")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 不抛出异常")]),t._v("\n")])])]),s("p",[t._v("当在声明中有"),s("code",[t._v("noexcept")]),t._v("修饰的函数中抛出异常时，编译时不会报错，但在函数运行时会直接调用"),s("code",[t._v("terminate")]),t._v("终止程序，以确保在"),s("code",[t._v("noexcept")]),t._v("函数中不抛出异常。")]),t._v(" "),s("div",{staticClass:"language-cpp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("func")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("noexcept")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("func")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("noexcept")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throw")]),t._v(" std"),s("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[t._v("::")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("exception")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * terminate called after throwing an instance of 'std::exception'\n * what():  std::exception\n * Aborted (core dumped)\n */")]),t._v("\n")])])]),s("ul",[s("li",[t._v("1）可以函数指针的声明和定义中指定noexcept")]),t._v(" "),s("li",[t._v("2）在typedef和类型别名中不可以出现noexcept")]),t._v(" "),s("li",[t._v("3）noexcept要么出现在函数的所有生命语句和定义语句中，要么一次也不出现")]),t._v(" "),s("li",[t._v("4）类的成员函数中，noexcept需要跟在const以及引用限定符之后，在final、override或虚函数=0之前。")]),t._v(" "),s("li",[t._v("5）函数指针及该指针指向的函数必须具有一致的异常说明。如果一个指针做出了不抛出异常的声明，则该指针将只能指向不抛出异常的函数。")]),t._v(" "),s("li",[t._v("6）如果一个虚函数承诺不会抛出异常，则后续派生出来的衍生类的虚函数也必须做出同样的承诺。反之则不需要。")])]),t._v(" "),s("h3",{attrs:{id:"参考"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[t._v("#")]),t._v(" 参考")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://stackoverflow.com/questions/33210169/how-to-use-noexcept-in-c-or-how-does-it-work",target:"_blank",rel:"noopener noreferrer"}},[t._v("1.https://stackoverflow.com/questions/33210169/how-to-use-noexcept-in-c-or-how-does-it-work"),s("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=e.exports}}]);
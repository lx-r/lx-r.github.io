(window.webpackJsonp=window.webpackJsonp||[]).push([[184],{463:function(s,t,a){"use strict";a.r(t);var e=a(10),n=Object(e.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"sqlit基础操作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sqlit基础操作"}},[s._v("#")]),s._v(" sqlit基础操作")]),s._v(" "),t("h2",{attrs:{id:"附加数据库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#附加数据库"}},[s._v("#")]),s._v(" 附加数据库")]),s._v(" "),t("p",[s._v("当同一时间有多个数据库可用时，使用"),t("code",[s._v("ATTACH DATABASE")]),s._v("语句可将数据库附加到当前的操作环境中。")]),s._v(" "),t("p",[s._v("同时给数据库取别名，")]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[s._v("sqlite"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" ATTACH "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DATABASE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'testDB.db'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'TEST'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nsqlite"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("database")]),s._v("\nseq  name             "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("file")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("---  ---------------  ----------------------")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("    main             "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("home"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("sqlite"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("testDB"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("db\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("    test             "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("home"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("sqlite"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("testDB"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("db\n")])])]),t("p",[s._v("如果两个数据库中有一个想通的表名，这时要加上数据名一起访问，")]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" main"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("trade"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("h2",{attrs:{id:"查看当前数据库中的表"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看当前数据库中的表"}},[s._v("#")]),s._v(" 查看当前数据库中的表")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("sqlite"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" .tables\n")])])]),t("h2",{attrs:{id:"查看所有表的建表语句"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看所有表的建表语句"}},[s._v("#")]),s._v(" 查看所有表的建表语句")]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[s._v("sqlite"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("schema")]),s._v("\n")])])]),t("h2",{attrs:{id:"建表"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#建表"}},[s._v("#")]),s._v(" 建表")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("sqlite3 people.db\nsqlite"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" CREATE TABLE people"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("ids integer primary key, name text"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nsqlite"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" .quit\n")])])]),t("h2",{attrs:{id:"查看表"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看表"}},[s._v("#")]),s._v(" 查看表")]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- # --查看所有表结构及索引信息")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 打开行头 ")]),s._v("\nsqlite"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("headers "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("on")]),s._v("\nsqlite"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" sqlite_master "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("h2",{attrs:{id:"查看表的信息"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看表的信息"}},[s._v("#")]),s._v(" 查看表的信息")]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[s._v("PRAGMA TABLE_INFO"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("trade"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("h2",{attrs:{id:"删除表"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#删除表"}},[s._v("#")]),s._v(" 删除表")]),s._v(" "),t("p",[s._v("删除表，删除后表中的内容将无法恢复。")]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DROP")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TABLE")]),s._v(" table_name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("h2",{attrs:{id:"插入行insert"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#插入行insert"}},[s._v("#")]),s._v(" 插入行INSERT")]),s._v(" "),t("p",[s._v("给表中插入一行"),t("code",[s._v("INSERT INTO")]),s._v(":")]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INSERT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INTO")]),s._v(" TABLE_NAME "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("column1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" column2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" column3"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("columnN"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("  \n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("VALUES")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("value1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" value2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" value3"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("valueN"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("h2",{attrs:{id:"更新行update"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#更新行update"}},[s._v("#")]),s._v(" 更新行UPDATE")]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("UPDATE")]),s._v(" table_name\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SET")]),s._v(" column1 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" value1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" column2 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" value2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" columnN "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" valueN\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("condition"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("h2",{attrs:{id:"删除行delete"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#删除行delete"}},[s._v("#")]),s._v(" 删除行DELETE")]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DELETE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" table_name\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("condition"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("h2",{attrs:{id:"给表追加一个字段"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#给表追加一个字段"}},[s._v("#")]),s._v(" 给表追加一个字段")]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ALTER")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TABLE")]),s._v(" trade "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ADD")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("COLUMN")]),s._v(" index_item "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);
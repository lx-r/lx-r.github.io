(window.webpackJsonp=window.webpackJsonp||[]).push([[229],{507:function(a,s,t){"use strict";t.r(s);var r=t(10),e=Object(r.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"管理docker容器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#管理docker容器"}},[a._v("#")]),a._v(" 管理"),s("code",[a._v("docker")]),a._v("容器")]),a._v(" "),s("p",[a._v("每次"),s("code",[a._v("docker run")]),a._v("之后都会实例化容器，停机后的容器实例没有清理的话，还依然存在，久而久之"),s("code",[a._v("Host")]),a._v("上会剩下很多"),s("code",[a._v("docker")]),a._v("实例。")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://day-pic-1311699660.cos.ap-nanjing.myqcloud.com/image/conatainer_ls.jpg",alt:""}})]),a._v(" "),s("h2",{attrs:{id:"列出所有的docker容器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#列出所有的docker容器"}},[a._v("#")]),a._v(" 列出所有的"),s("code",[a._v("Docker")]),a._v("容器")]),a._v(" "),s("p",[s("code",[a._v("docker container ls -a")])]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("CONTAINER ID"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("IMAGE "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("COMMAND"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("CREATED "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("STATUS"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("PORTS"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("NAMES"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(":---"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(":---"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(":---"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(":---"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(":---"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(":---"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(":---"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("容器名称"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("镜像名称和Tag"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("实例化容器的命令"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("创建时间"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("状态"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("容器端口和"),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")]),a._v("Host"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")])]),a._v("端口的对应关系"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("容器名称"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("\n")])])]),s("h2",{attrs:{id:"重新启动容器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#重新启动容器"}},[a._v("#")]),a._v(" 重新启动容器")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" container start "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("container_id"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 打开交互终端")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("exec")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-it")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("container_id"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("bash")]),a._v("\n")])])]),s("h2",{attrs:{id:"清除已停机的容器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#清除已停机的容器"}},[a._v("#")]),a._v(" 清除已停机的容器")]),a._v(" "),s("ul",[s("li",[s("strong",[a._v("查看已过期的容器")])])]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("ps")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-q")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-f")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("status")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("exited\n")])])]),s("ul",[s("li",[s("strong",[a._v("删除容器")])])]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("rm")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("container_id"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),s("ul",[s("li",[s("strong",[a._v("自动清理停机的容器")])])]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" system prune\n")])])]),s("p",[s("strong",[a._v("这个命令会清理掉所有已经停机的容器，小心使用")])]),a._v(" "),s("InArticleAdsense",{attrs:{"data-ad-client":"ca-pub-8685746128991385","data-ad-slot":"2974191661"}}),a._v(" "),s("blockquote",[s("ul",[s("li",[s("a",{attrs:{href:"https://stackoverflow.com/questions/17236796/how-to-remove-old-docker-containers",target:"_blank",rel:"noopener noreferrer"}},[a._v("1.https://stackoverflow.com/questions/17236796/how-to-remove-old-docker-containers"),s("OutboundLink")],1)])])])],1)}),[],!1,null,null,null);s.default=e.exports}}]);
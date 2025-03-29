(window.webpackJsonp=window.webpackJsonp||[]).push([[236],{590:function(s,t,a){"use strict";a.r(t);var e=a(17),r=Object(e.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"how-to-kill-zombie-processes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#how-to-kill-zombie-processes"}},[s._v("#")]),s._v(" How to Kill Zombie Processes")]),s._v(" "),t("h2",{attrs:{id:"问题介绍"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#问题介绍"}},[s._v("#")]),s._v(" 问题介绍")]),s._v(" "),t("p",[s._v("正常情况下用户不需要管理僵尸进程"),t("code",[s._v("Zombie Process")]),s._v("，但有时候僵尸进程还是会占用资源，譬如题主遇到的情况是"),t("code",[s._v("Zombie Process")]),s._v("占用了显卡的显存，导致启动新的训练任务就会内存溢出，无法进行模型的训练。")]),s._v(" "),t("p",[s._v("僵尸进程通常由网络文件系统不响应，内核"),t("code",[s._v("bug")]),s._v("，硬件"),t("code",[s._v("bug")]),s._v("导致。")]),s._v(" "),t("h2",{attrs:{id:"解决办法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#解决办法"}},[s._v("#")]),s._v(" 解决办法")]),s._v(" "),t("p",[s._v("查看系统中的僵尸进程，及其对应的父进程：")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" axo stat,ppid,pid,comm "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-w")]),s._v(" defunct\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Z 555 10242 Damn-Zombie < defunct >")]),s._v("\n")])])]),t("p",[s._v("根据父进程号向其发送"),t("code",[s._v("SIGCHLD")]),s._v("信号，尝试杀死"),t("code",[s._v("PPID")]),s._v("下的僵尸进程：")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("kill")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-s")]),s._v(" SIGCHLD "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("555")]),s._v("\n")])])]),t("p",[s._v("如果"),t("code",[s._v("SIGCHLD")]),s._v("还是没能终止僵尸进程，尝试使用")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("kill")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-9")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("555")]),s._v("\n")])])]),t("p",[s._v("不过这个命令会杀死父进程"),t("code",[s._v("555")]),s._v("及其下的所有子进程。")]),s._v(" "),t("InArticleAdsense",{attrs:{"data-ad-client":"ca-pub-8685746128991385","data-ad-slot":"2974191661"}}),s._v(" "),t("blockquote",[t("p",[t("a",{attrs:{href:"https://unix.stackexchange.com/questions/81285/how-to-kill-a-process-which-cant-be-killed-without-rebooting",target:"_blank",rel:"noopener noreferrer"}},[s._v("1.https://unix.stackexchange.com/questions/81285/how-to-kill-a-process-which-cant-be-killed-without-rebooting"),t("OutboundLink")],1)])])],1)}),[],!1,null,null,null);t.default=r.exports}}]);
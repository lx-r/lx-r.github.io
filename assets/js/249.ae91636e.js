(window.webpackJsonp=window.webpackJsonp||[]).push([[249],{528:function(t,a,e){"use strict";e.r(a);var s=e(10),r=Object(s.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"设置hexo支持latex公式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设置hexo支持latex公式"}},[t._v("#")]),t._v(" 设置hexo支持Latex公式")]),t._v(" "),a("p",[t._v("网页上对"),a("code",[t._v("Latex")]),t._v("的支持需要借助能够解析"),a("code",[t._v("Latex")]),t._v("语法的插件引擎，将"),a("code",[t._v("Latex")]),t._v("语法转成"),a("code",[t._v("HTML")]),t._v("元素，常用的"),a("br"),t._v(" "),a("code",[t._v("Latex")]),t._v("公式引擎有"),a("code",[t._v("Katex")]),t._v(","),a("code",[t._v("mathjax")]),t._v("引擎等，如CSDN使用的就是"),a("code",[t._v("Katex")]),t._v("。")]),t._v(" "),a("ul",[a("li",[t._v("渲染引擎改成"),a("code",[t._v("pandoc")])])]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" uninstall hexo-rendered-marked\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" hexo-rendered-pandoc\n")])])]),a("ul",[a("li",[t._v("安装mathjax插件")])]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" hexo-filter-mathjax\n")])])]),a("ul",[a("li",[t._v("修改站点"),a("code",[t._v("_config.yaml")]),t._v("文件，注意不是"),a("code",[t._v("themes")]),t._v("中的"),a("code",[t._v("_config.yaml")])])]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("mathjax:\n  tags: none "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# or 'ams' or 'all'")]),t._v("\n  single_dollars: "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# enable single dollar signs as in-line math delimiters")]),t._v("\n  cjk_width: "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.9")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# relative CJK char width")]),t._v("\n  normal_width: "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.6")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# relative normal (monospace) width")]),t._v("\n  append_css: "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# add CSS to pages rendered by MathJax")]),t._v("\n  every_page: "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# if true, every page will be rendered by MathJax regardless the `mathjax` setting in Front-matter")]),t._v("\n")])])]),a("ul",[a("li",[t._v("每个页面"),a("code",[t._v(".md")]),t._v("头部设置"),a("code",[t._v("mathjax=true")])])]),t._v(" "),a("h2",{attrs:{id:"效果"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#效果"}},[t._v("#")]),t._v(" 效果")]),t._v(" "),a("div",{staticClass:"language-md extra-class"},[a("pre",{pre:!0,attrs:{class:"language-md"}},[a("code",[t._v("$$\nf(x) = \\frac{x^2}{x+y}\n$$\n")])])]),a("p",[t._v("渲染结果为：")]),t._v(" "),a("mjx-container",{staticClass:"MathJax",staticStyle:{direction:"ltr",display:"block","text-align":"center",margin:"1em 0",position:"relative"},attrs:{jax:"SVG",display:"true"}},[a("svg",{staticStyle:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-2.016ex"},attrs:{xmlns:"http://www.w3.org/2000/svg",width:"13.48ex",height:"5.432ex",role:"img",focusable:"false",viewBox:"0 -1509.9 5958 2400.9","aria-hidden":"true"}},[a("g",{attrs:{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"scale(1,-1)"}},[a("g",{attrs:{"data-mml-node":"math"}},[a("g",{attrs:{"data-mml-node":"mi"}},[a("path",{staticStyle:{"stroke-width":"3"},attrs:{"data-c":"1D453",d:"M118 -162Q120 -162 124 -164T135 -167T147 -168Q160 -168 171 -155T187 -126Q197 -99 221 27T267 267T289 382V385H242Q195 385 192 387Q188 390 188 397L195 425Q197 430 203 430T250 431Q298 431 298 432Q298 434 307 482T319 540Q356 705 465 705Q502 703 526 683T550 630Q550 594 529 578T487 561Q443 561 443 603Q443 622 454 636T478 657L487 662Q471 668 457 668Q445 668 434 658T419 630Q412 601 403 552T387 469T380 433Q380 431 435 431Q480 431 487 430T498 424Q499 420 496 407T491 391Q489 386 482 386T428 385H372L349 263Q301 15 282 -47Q255 -132 212 -173Q175 -205 139 -205Q107 -205 81 -186T55 -132Q55 -95 76 -78T118 -61Q162 -61 162 -103Q162 -122 151 -136T127 -157L118 -162Z"}})]),a("g",{attrs:{"data-mml-node":"mo",transform:"translate(550,0)"}},[a("path",{staticStyle:{"stroke-width":"3"},attrs:{"data-c":"28",d:"M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z"}})]),a("g",{attrs:{"data-mml-node":"mi",transform:"translate(939,0)"}},[a("path",{staticStyle:{"stroke-width":"3"},attrs:{"data-c":"1D465",d:"M52 289Q59 331 106 386T222 442Q257 442 286 424T329 379Q371 442 430 442Q467 442 494 420T522 361Q522 332 508 314T481 292T458 288Q439 288 427 299T415 328Q415 374 465 391Q454 404 425 404Q412 404 406 402Q368 386 350 336Q290 115 290 78Q290 50 306 38T341 26Q378 26 414 59T463 140Q466 150 469 151T485 153H489Q504 153 504 145Q504 144 502 134Q486 77 440 33T333 -11Q263 -11 227 52Q186 -10 133 -10H127Q78 -10 57 16T35 71Q35 103 54 123T99 143Q142 143 142 101Q142 81 130 66T107 46T94 41L91 40Q91 39 97 36T113 29T132 26Q168 26 194 71Q203 87 217 139T245 247T261 313Q266 340 266 352Q266 380 251 392T217 404Q177 404 142 372T93 290Q91 281 88 280T72 278H58Q52 284 52 289Z"}})]),a("g",{attrs:{"data-mml-node":"mo",transform:"translate(1511,0)"}},[a("path",{staticStyle:{"stroke-width":"3"},attrs:{"data-c":"29",d:"M60 749L64 750Q69 750 74 750H86L114 726Q208 641 251 514T294 250Q294 182 284 119T261 12T224 -76T186 -143T145 -194T113 -227T90 -246Q87 -249 86 -250H74Q66 -250 63 -250T58 -247T55 -238Q56 -237 66 -225Q221 -64 221 250T66 725Q56 737 55 738Q55 746 60 749Z"}})]),a("g",{attrs:{"data-mml-node":"mo",transform:"translate(2177.8,0)"}},[a("path",{staticStyle:{"stroke-width":"3"},attrs:{"data-c":"3D",d:"M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z"}})]),a("g",{attrs:{"data-mml-node":"mfrac",transform:"translate(3233.6,0)"}},[a("g",{attrs:{"data-mml-node":"msup",transform:"translate(857.9,676)"}},[a("g",{attrs:{"data-mml-node":"mi"}},[a("path",{staticStyle:{"stroke-width":"3"},attrs:{"data-c":"1D465",d:"M52 289Q59 331 106 386T222 442Q257 442 286 424T329 379Q371 442 430 442Q467 442 494 420T522 361Q522 332 508 314T481 292T458 288Q439 288 427 299T415 328Q415 374 465 391Q454 404 425 404Q412 404 406 402Q368 386 350 336Q290 115 290 78Q290 50 306 38T341 26Q378 26 414 59T463 140Q466 150 469 151T485 153H489Q504 153 504 145Q504 144 502 134Q486 77 440 33T333 -11Q263 -11 227 52Q186 -10 133 -10H127Q78 -10 57 16T35 71Q35 103 54 123T99 143Q142 143 142 101Q142 81 130 66T107 46T94 41L91 40Q91 39 97 36T113 29T132 26Q168 26 194 71Q203 87 217 139T245 247T261 313Q266 340 266 352Q266 380 251 392T217 404Q177 404 142 372T93 290Q91 281 88 280T72 278H58Q52 284 52 289Z"}})]),a("g",{attrs:{"data-mml-node":"mn",transform:"translate(605,363) scale(0.707)"}},[a("path",{staticStyle:{"stroke-width":"3"},attrs:{"data-c":"32",d:"M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z"}})])]),a("g",{attrs:{"data-mml-node":"mrow",transform:"translate(220,-686)"}},[a("g",{attrs:{"data-mml-node":"mi"}},[a("path",{staticStyle:{"stroke-width":"3"},attrs:{"data-c":"1D465",d:"M52 289Q59 331 106 386T222 442Q257 442 286 424T329 379Q371 442 430 442Q467 442 494 420T522 361Q522 332 508 314T481 292T458 288Q439 288 427 299T415 328Q415 374 465 391Q454 404 425 404Q412 404 406 402Q368 386 350 336Q290 115 290 78Q290 50 306 38T341 26Q378 26 414 59T463 140Q466 150 469 151T485 153H489Q504 153 504 145Q504 144 502 134Q486 77 440 33T333 -11Q263 -11 227 52Q186 -10 133 -10H127Q78 -10 57 16T35 71Q35 103 54 123T99 143Q142 143 142 101Q142 81 130 66T107 46T94 41L91 40Q91 39 97 36T113 29T132 26Q168 26 194 71Q203 87 217 139T245 247T261 313Q266 340 266 352Q266 380 251 392T217 404Q177 404 142 372T93 290Q91 281 88 280T72 278H58Q52 284 52 289Z"}})]),a("g",{attrs:{"data-mml-node":"mo",transform:"translate(794.2,0)"}},[a("path",{staticStyle:{"stroke-width":"3"},attrs:{"data-c":"2B",d:"M56 237T56 250T70 270H369V420L370 570Q380 583 389 583Q402 583 409 568V270H707Q722 262 722 250T707 230H409V-68Q401 -82 391 -82H389H387Q375 -82 369 -68V230H70Q56 237 56 250Z"}})]),a("g",{attrs:{"data-mml-node":"mi",transform:"translate(1794.4,0)"}},[a("path",{staticStyle:{"stroke-width":"3"},attrs:{"data-c":"1D466",d:"M21 287Q21 301 36 335T84 406T158 442Q199 442 224 419T250 355Q248 336 247 334Q247 331 231 288T198 191T182 105Q182 62 196 45T238 27Q261 27 281 38T312 61T339 94Q339 95 344 114T358 173T377 247Q415 397 419 404Q432 431 462 431Q475 431 483 424T494 412T496 403Q496 390 447 193T391 -23Q363 -106 294 -155T156 -205Q111 -205 77 -183T43 -117Q43 -95 50 -80T69 -58T89 -48T106 -45Q150 -45 150 -87Q150 -107 138 -122T115 -142T102 -147L99 -148Q101 -153 118 -160T152 -167H160Q177 -167 186 -165Q219 -156 247 -127T290 -65T313 -9T321 21L315 17Q309 13 296 6T270 -6Q250 -11 231 -11Q185 -11 150 11T104 82Q103 89 103 113Q103 170 138 262T173 379Q173 380 173 381Q173 390 173 393T169 400T158 404H154Q131 404 112 385T82 344T65 302T57 280Q55 278 41 278H27Q21 284 21 287Z"}})])]),a("rect",{attrs:{width:"2484.4",height:"60",x:"120",y:"220"}})])])])]),a("mjx-assistive-mml",{staticStyle:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",overflow:"hidden",width:"100%"},attrs:{unselectable:"on",display:"block"}},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"}},[a("mi",[t._v("f")]),a("mo",{attrs:{stretchy:"false"}},[t._v("(")]),a("mi",[t._v("x")]),a("mo",{attrs:{stretchy:"false"}},[t._v(")")]),a("mo",[t._v("=")]),a("mfrac",[a("msup",[a("mi",[t._v("x")]),a("mn",[t._v("2")])],1),a("mrow",[a("mi",[t._v("x")]),a("mo",[t._v("+")]),a("mi",[t._v("y")])],1)],1)],1)],1)],1),a("InArticleAdsense",{attrs:{"data-ad-client":"ca-pub-8685746128991385","data-ad-slot":"2974191661"}}),t._v(" "),a("h3",{attrs:{id:"参考资料"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[t._v("#")]),t._v(" 参考资料")]),t._v(" "),a("blockquote",[a("ul",[a("li",[a("a",{attrs:{href:"https://zicowarn.github.io/2020/12/19/hexo-04-use-mermaid-and-matjax-with-hexo-tranquilpeak-theme/#:~:text=%E9%BB%98%E8%AE%A4%E6%83%85%E5%86%B5%E4%B8%8BHexo%E6%98%AF,%E4%B8%A4%E4%B8%AA%E5%8A%9F%E8%83%BD%E7%9A%84%E6%94%AF%E6%8C%81%E3%80%82",target:"_blank",rel:"noopener noreferrer"}},[t._v("Hexo 如何在tranquilpeak主题中使用mermaid语句与Latex语句"),a("OutboundLink")],1)])])])],1)}),[],!1,null,null,null);a.default=r.exports}}]);
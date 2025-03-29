(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{361:function(t,s,a){"use strict";a.r(s);var n=a(17),p=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"pytorch中的grid-sample"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pytorch中的grid-sample"}},[t._v("#")]),t._v(" pytorch中的grid_sample")]),t._v(" "),s("h2",{attrs:{id:"grid-sample"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#grid-sample"}},[t._v("#")]),t._v(" grid_sample")]),t._v(" "),s("p",[t._v("直译为网格采样，给定一个"),s("code",[t._v("mask patch")]),t._v("，根据在目标图像上的坐标网格，将"),s("code",[t._v("mask")]),t._v("变换到目标图像上。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://day-pic-1311699660.cos.ap-nanjing.myqcloud.com/image/grid_sample1.png",alt:""}})]),t._v(" "),s("p",[t._v("如上图，是将一个"),s("code",[t._v("2x2")]),t._v("的"),s("code",[t._v("mask")]),t._v("根据坐标网格"),s("code",[t._v("grid")]),t._v("变换到"),s("code",[t._v("6x6")]),t._v("目标图像"),s("code",[t._v("x0 y0 x1 y1 = 1,1,3,3")]),t._v("的位置上，值得注意的是"),s("code",[t._v("grid")]),t._v("是经过运算得到的坐标网格，"),s("code",[t._v("mask")]),t._v("在"),s("code",[t._v("target image")]),t._v("对应位置的左上角处坐标应该为"),s("code",[t._v("-1,-1")]),t._v("，右下角处坐标应该为"),s("code",[t._v("1,1")]),t._v("，目标图像对应位置的像素值由"),s("code",[t._v("mask")]),t._v("通过插值得到。")]),t._v(" "),s("p",[t._v("知道了"),s("code",[t._v("grid_sample")]),t._v("的原理，再来看下"),s("code",[t._v("torch")]),t._v("中的函数。")]),t._v(" "),s("h2",{attrs:{id:"grid-sample函数原型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#grid-sample函数原型"}},[t._v("#")]),t._v(" "),s("code",[t._v("grid_sample")]),t._v("函数原型")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[t._v("torch"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("nn"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("functional"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("grid_sample"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("input")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                                grid"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n                                mode"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'bilinear'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("                \n                                padding_mode"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'zeros'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" align_corners"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("None")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("ul",[s("li",[s("code",[t._v("input")]),t._v("输入"),s("code",[t._v("image patch")]),t._v("，支持"),s("code",[t._v("4d")]),t._v("或"),s("code",[t._v("5d")]),t._v("输入。为"),s("code",[t._v("4d")]),t._v("时"),s("code",[t._v("shape")]),t._v("为"),s("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[s("mjx-math",{staticClass:"MJX-TEX"},[s("mjx-mi",{staticClass:"mjx-i"},[s("mjx-c",{attrs:{c:"N"}})],1),s("mjx-mo",{staticClass:"mjx-n"},[s("mjx-c",{attrs:{c:","}})],1),s("mjx-mi",{staticClass:"mjx-i",attrs:{space:"2"}},[s("mjx-c",{attrs:{c:"C"}})],1),s("mjx-mo",{staticClass:"mjx-n"},[s("mjx-c",{attrs:{c:","}})],1),s("mjx-msub",{attrs:{space:"2"}},[s("mjx-mi",{staticClass:"mjx-i",attrs:{noIC:"true"}},[s("mjx-c",{attrs:{c:"H"}})],1),s("mjx-script",{staticStyle:{"vertical-align":"-0.15em"}},[s("mjx-TeXAtom",{attrs:{size:"s"}},[s("mjx-mi",{staticClass:"mjx-i"},[s("mjx-c",{attrs:{c:"i"}})],1),s("mjx-mi",{staticClass:"mjx-i"},[s("mjx-c",{attrs:{c:"n"}})],1)],1)],1)],1),s("mjx-mo",{staticClass:"mjx-n"},[s("mjx-c",{attrs:{c:","}})],1),s("mjx-msub",{attrs:{space:"2"}},[s("mjx-mi",{staticClass:"mjx-i",attrs:{noIC:"true"}},[s("mjx-c",{attrs:{c:"W"}})],1),s("mjx-script",{staticStyle:{"vertical-align":"-0.15em"}},[s("mjx-TeXAtom",{attrs:{size:"s"}},[s("mjx-mi",{staticClass:"mjx-i"},[s("mjx-c",{attrs:{c:"i"}})],1),s("mjx-mi",{staticClass:"mjx-i"},[s("mjx-c",{attrs:{c:"n"}})],1)],1)],1)],1)],1)],1)],1),t._v(" "),s("li",[s("code",[t._v("grid")]),t._v("坐标网格，当"),s("code",[t._v("input")]),t._v("为"),s("code",[t._v("4d")]),t._v("时其"),s("code",[t._v("shape")]),t._v("为"),s("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[s("mjx-math",{staticClass:"MJX-TEX"},[s("mjx-mi",{staticClass:"mjx-i"},[s("mjx-c",{attrs:{c:"N"}})],1),s("mjx-mo",{staticClass:"mjx-n"},[s("mjx-c",{attrs:{c:","}})],1),s("mjx-msub",{attrs:{space:"2"}},[s("mjx-mi",{staticClass:"mjx-i",attrs:{noIC:"true"}},[s("mjx-c",{attrs:{c:"H"}})],1),s("mjx-script",{staticStyle:{"vertical-align":"-0.15em"}},[s("mjx-TeXAtom",{attrs:{size:"s"}},[s("mjx-mi",{staticClass:"mjx-i"},[s("mjx-c",{attrs:{c:"o"}})],1),s("mjx-mi",{staticClass:"mjx-i"},[s("mjx-c",{attrs:{c:"u"}})],1),s("mjx-mi",{staticClass:"mjx-i"},[s("mjx-c",{attrs:{c:"t"}})],1)],1)],1)],1),s("mjx-mo",{staticClass:"mjx-n"},[s("mjx-c",{attrs:{c:","}})],1),s("mjx-msub",{attrs:{space:"2"}},[s("mjx-mi",{staticClass:"mjx-i",attrs:{noIC:"true"}},[s("mjx-c",{attrs:{c:"W"}})],1),s("mjx-script",{staticStyle:{"vertical-align":"-0.15em"}},[s("mjx-TeXAtom",{attrs:{size:"s"}},[s("mjx-mi",{staticClass:"mjx-i"},[s("mjx-c",{attrs:{c:"o"}})],1),s("mjx-mi",{staticClass:"mjx-i"},[s("mjx-c",{attrs:{c:"u"}})],1),s("mjx-mi",{staticClass:"mjx-i"},[s("mjx-c",{attrs:{c:"t"}})],1)],1)],1)],1),s("mjx-mo",{staticClass:"mjx-n"},[s("mjx-c",{attrs:{c:","}})],1),s("mjx-mn",{staticClass:"mjx-n",attrs:{space:"2"}},[s("mjx-c",{attrs:{c:"2"}})],1)],1)],1),t._v("，输出的"),s("code",[t._v("shape")]),t._v("为"),s("code",[t._v("N,C,H_{out},W_{out}")]),t._v(",对于输出的位置"),s("code",[t._v("output[n, :, h, w]")]),t._v(",‵grid[n, h, w]"),s("code",[t._v("是二维向量，指定了其对应的")]),t._v("input"),s("code",[t._v("上的位置。")]),t._v("output[n, :, h, w]"),s("code",[t._v("根据‵grid[n, h, w]")]),t._v("指定的对应"),s("code",[t._v("input")]),t._v("位置上的像素插值得到。"),s("code",[t._v("grid")]),t._v("指定了在"),s("code",[t._v("input")]),t._v("输入维度上标准化后的坐标大小，"),s("code",[t._v("input")]),t._v("左上角对应的应该是"),s("code",[t._v("-1,-1")]),t._v("，右下角对应的是"),s("code",[t._v("1,1")])],1),t._v(" "),s("li",[s("code",[t._v("mode")]),t._v("插值方式，"),s("code",[t._v("'bilinear' | 'nearest' | 'bicubic'")])]),t._v(" "),s("li",[s("code",[t._v("padding_mode")]),t._v(",在(-1,1)外的输出图像上的像素值处理方式"),s("code",[t._v("'zeros' | 'border' | 'reflection'")])]),t._v(" "),s("li",[s("code",[t._v("align_corners")]),t._v(":是否对齐角")])]),t._v(" "),s("h2",{attrs:{id:"实例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#实例"}},[t._v("#")]),t._v(" 实例")]),t._v(" "),s("p",[t._v("以将一个"),s("code",[t._v("100x100")]),t._v("的"),s("code",[t._v("mask")]),t._v("，网格采样到"),s("code",[t._v("500x300")]),t._v("的图像上"),s("code",[t._v("(x,y,w,h)=(100, 100, 100, 200)")]),t._v("为例，看一下"),s("code",[t._v("grid_sample")]),t._v("是如何使用的。")]),t._v(" "),s("p",[t._v("先计算"),s("code",[t._v("grid")]),t._v(",")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" torch\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" numpy "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" np\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" cv2\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" torch"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("nn"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("functional "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" F\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" matplotlib"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pyplot "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" plt\n\nh"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" w "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("300")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("500")]),t._v("\nx0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" y0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" x1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" y1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" torch"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tensor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" torch"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tensor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" torch"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tensor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" torch"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tensor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("300")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nN "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\nx0_int"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" y0_int "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\nx1_int"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" y1_int "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("500")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("300")]),t._v("\nimg_y "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" torch"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("arange"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("y0_int"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" y1_int"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" dtype"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("torch"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("float32"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.5")]),t._v("\nimg_x "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" torch"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("arange"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x0_int"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" x1_int"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" dtype"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("torch"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("float32"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.5")]),t._v("\nimg_y "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("img_y "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" y0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("y1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" y0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\nimg_x "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("img_x "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" x0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" x0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n\ngx "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" img_x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("None")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("expand"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("N"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" img_y"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("size"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" img_x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("size"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ngy "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" img_y"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("None")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("expand"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("N"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" img_y"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("size"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" img_x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("size"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ngrid "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" torch"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("stack"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("gx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" gy"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" dim"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("这里使用的是"),s("code",[t._v("mask")]),t._v("在目标图像上的大小来对"),s("code",[t._v("grid")]),t._v("归一化的。")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[t._v("mask "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" np"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("zeros"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" dtype"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("np"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("uint8"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nct "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" np"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("array"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("50")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("99")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("50")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("50")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("99")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("50")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" dtype"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("np"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("int32"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nmask "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" cv2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("drawContours"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("mask"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("ct"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("255")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  cv2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("FILLED"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nplt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("figure"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nplt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("imshow"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("mask"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nmask "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" torch"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("from_numpy"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("mask"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nmasks "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" mask"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("None")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("None")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("not")]),t._v(" torch"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("jit"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("is_scripting"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("not")]),t._v(" masks"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dtype"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("is_floating_point"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        masks "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" masks"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("float")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        \nimg_masks "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" F"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("grid_sample"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("masks"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" grid"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("to"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("masks"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dtype"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" align_corners"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("False")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nplt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("figure"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nplt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("imshow"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("img_masks"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("squeeze"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("numpy"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("astype"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("np"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("uint8"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("根据"),s("code",[t._v("grid")]),t._v("将"),s("code",[t._v("mask")]),t._v("映射到目标图像上的指定区域指定大小。")]),t._v(" "),s("p",[s("code",[t._v("grid_sample")]),t._v("的使用，如"),s("code",[t._v("Mask RCNN")]),t._v("将对象实例分割的"),s("code",[t._v("mask")]),t._v("映射到原图像尺寸上。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://day-pic-1311699660.cos.ap-nanjing.myqcloud.com/image/grid_sample2.png",alt:""}})]),t._v(" "),s("InArticleAdsense",{attrs:{"data-ad-client":"ca-pub-8685746128991385","data-ad-slot":"2974191661"}}),t._v(" "),s("blockquote",[s("p",[s("a",{attrs:{href:"https://pytorch.org/docs/stable/generated/torch.nn.functional.grid_sample.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("1.https://pytorch.org/docs/stable/generated/torch.nn.functional.grid_sample.html"),s("OutboundLink")],1)])])],1)}),[],!1,null,null,null);s.default=p.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{320:function(t,s,a){"use strict";a.r(s);var o=a(10),e=Object(o.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"roi-pooling-与-roi-align"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#roi-pooling-与-roi-align"}},[t._v("#")]),t._v(" ROI Pooling 与 ROI Align")]),t._v(" "),s("h2",{attrs:{id:"_1-roi"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-roi"}},[t._v("#")]),t._v(" 1 ROI")]),t._v(" "),s("p",[t._v("首先，何为"),s("code",[t._v("ROI")]),t._v("？ "),s("code",[t._v("ROI")]),t._v("是"),s("code",[t._v("Region of Interest")]),t._v("的缩写，即感兴趣区域。在不同的情况下用户关心的图像区域是不同的，因此"),s("code",[t._v("ROI")]),t._v("所指含义也不同。对于物体检测的目标"),s("code",[t._v("ROI")]),t._v("，"),s("code",[t._v("ROI")]),t._v("就是要找到对象在图像中"),s("code",[t._v("Bounding Box")]),t._v("区域。如")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://day-pic-1311699660.cos.ap-nanjing.myqcloud.com/image/roi1person.jpg",alt:""}})]),t._v(" "),s("p",[t._v("对于物体检测的目标，我们关心的是对象是人，则上图中红色的框中人的框选区域就是"),s("code",[t._v("ROI")]),t._v("。")]),t._v(" "),s("p",[t._v("而在"),s("code",[t._v("Fast RCNN")]),t._v("中，"),s("code",[t._v("ROI Pooling")]),t._v("作用在"),s("code",[t._v("backbone")]),t._v("和检测头之间，其关心的是物体检测框的候选框"),s("code",[t._v("proposal boxes")]),t._v("，而非真正的"),s("code",[t._v("target boxes")]),t._v("，对"),s("code",[t._v("proposal boxes")]),t._v("经过置信度评分过滤和极大值抑制后才能生成"),s("code",[t._v("target boxes")]),t._v("。因此，此时的"),s("code",[t._v("ROI")]),t._v("指的是候选框"),s("code",[t._v("proposal boxes")]),t._v("所指的区域。如下图，目标框是准确框出图中的两只狗狗，但**通过"),s("code",[t._v("selective search")]),t._v("或"),s("code",[t._v("RPN")]),t._v("网络生成的"),s("code",[t._v("proposal boxes")]),t._v("**如图中花花绿绿的框所时，"),s("code",[t._v("ROI Pooling")]),t._v("和"),s("code",[t._v("ROI Align")]),t._v("正是作用在这些"),s("code",[t._v("proposal boxes")]),t._v("所指的"),s("code",[t._v("ROI")]),t._v("上。")]),t._v(" "),s("blockquote",[s("p",[t._v("图片来源于"),s("a",{attrs:{href:"https://d2l.ai/chapter_computer-vision/anchor.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://d2l.ai/chapter_computer-vision/anchor.html"),s("OutboundLink")],1)])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://day-pic-1311699660.cos.ap-nanjing.myqcloud.com/image/roi2rpn.jpg",alt:""}})]),t._v(" "),s("h2",{attrs:{id:"_2-roi-pooling"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-roi-pooling"}},[t._v("#")]),t._v(" 2.ROI Pooling")]),t._v(" "),s("p",[t._v("将深度学习用于目标检测，网络架构一般是分成"),s("code",[t._v("Backbone")]),t._v("基干网络用于提取图像特征，和检测头用来实现分类和检测框位置回归。2015年4月份微软的"),s("code",[t._v("Ross Girshick")]),t._v("发表的"),s("code",[t._v("Fast RCNN")]),t._v("论文中提出了"),s("code",[t._v("ROI Pooling")]),t._v(", "),s("strong",[t._v("解决了模型固定大小输入的问题，提升了检测的性能")]),t._v("，一起来看"),s("code",[t._v("ROI Pooling")]),t._v("到底是怎么回事。")]),t._v(" "),s("p",[s("code",[t._v("ROI Pooling")]),t._v("顾名思意，就是池化操作的一种，只不过这个池化操作是作用在"),s("code",[t._v("ROI")]),t._v("上面，而非整个图像区域。先看"),s("code",[t._v("fast RCNN")]),t._v("的整体架构,")]),t._v(" "),s("blockquote",[s("p",[t._v("图片来自"),s("code",[t._v("fast RCNN")]),t._v(" 论文")])]),t._v(" "),s("blockquote",[s("p",[s("img",{attrs:{src:"https://day-pic-1311699660.cos.ap-nanjing.myqcloud.com/image/roi3fastrcnn.jpg",alt:""}})])]),t._v(" "),s("p",[t._v("图中"),s("code",[t._v("Deep ConvNet")]),t._v("是深度卷积网络，也就是"),s("code",[t._v("backbone")]),t._v("是用来提取特征得到"),s("code",[t._v("feature map")]),t._v("的，"),s("code",[t._v("feature map")]),t._v("就是对输入的图像经过层层卷积后得到的shape为"),s("code",[t._v("NCHW")]),t._v("的张量，其中"),s("code",[t._v("feature map")]),t._v("的宽高大小通常等于输入图像宽高除以"),s("code",[t._v("stride")]),t._v(","),s("code",[t._v("stride")]),t._v("是输入图像经过卷积池化得到的"),s("code",[t._v("feature map")]),t._v("的缩放倍数,"),s("code",[t._v("ROI Pooling")]),t._v("正是紧跟在"),s("code",[t._v("feature map")]),t._v("后面，作用在"),s("code",[t._v("feature map")]),t._v("的池化操作。输入图像中红色的框是一个"),s("code",[t._v("proposal box")]),t._v("，这个"),s("code",[t._v("proposal box")]),t._v("是"),s("code",[t._v("selective search")]),t._v("或"),s("code",[t._v("region proposal network")]),t._v("算法自动生成的"),s("code",[t._v("ROI")]),t._v("区域，还不是物体检测框"),s("code",[t._v("bounding box")]),t._v("，"),s("code",[t._v("proposal boxes")]),t._v("的尺度是相对于输入图像的，因此可根据"),s("code",[t._v("stride")]),t._v("参数，将其映射到"),s("code",[t._v("feature map")]),t._v("尺度上，也就是图中的"),s("code",[t._v("ROI Projection")]),t._v("。得到"),s("code",[t._v("feature map")]),t._v("和经过"),s("code",[t._v("stride")]),t._v("缩放投射到"),s("code",[t._v("feature map")]),t._v("上的"),s("code",[t._v("proposal box")]),t._v("后，就可以开始进行池化操作了。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://day-pic-1311699660.cos.ap-nanjing.myqcloud.com/image/roi5roiPooling.jpg",alt:""}})]),t._v(" "),s("p",[t._v("从上图中可以看到"),s("code",[t._v("ROI Pooling")]),t._v("的全过程，绿色虚线框以外的部分是得到"),s("code",[t._v("proposals")]),t._v("并变换到"),s("code",[t._v("feature map")]),t._v("上的过程，绿色虚线框内是在1个通道上进行"),s("code",[t._v("ROI Pooling")]),t._v("的过程。"),s("code",[t._v("ROI Pooling")]),t._v("与"),s("a",{attrs:{href:"https://foobarweb.net/2022/04/19/3Yolov5Modules/",target:"_blank",rel:"noopener noreferrer"}},[t._v("空间金字塔池化"),s("OutboundLink")],1),s("code",[t._v("Spatial Pyramid Pooling")]),t._v("一样，都是无论输出的"),s("code",[t._v("WH")]),t._v("大小，指定池化后输入结果的"),s("code",[t._v("WH")]),t._v("，据此自适应计算池化核的大小，然后在划分后的池化核范围内进行最大值池化或均值池化，如图中绿色框中所示。空间金字塔池化Spatial Pyramid Pooling是何凯明于2014年06月份在微软亚洲研究院时发表的论文"),s("code",[t._v("Spatial Pyramid Pooling in Deep Convolutional Networks for Visual Recognition")]),t._v("中提出的。"),s("code",[t._v("ROI Pooling")]),t._v("是作用在每一个"),s("code",[t._v("proposal")]),t._v("上的，假如是"),s("code",[t._v("batch size=B")]),t._v(", "),s("code",[t._v("proposals")]),t._v("的数量为"),s("code",[t._v("N")]),t._v(", 则"),s("code",[t._v("ROI Pooling")]),t._v("后的张量大小为, "),s("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[s("mjx-math",{staticClass:"MJX-TEX"},[s("mjx-mi",{staticClass:"mjx-i"},[s("mjx-c",{attrs:{c:"B"}})],1),s("mjx-mo",{staticClass:"mjx-n",attrs:{space:"3"}},[s("mjx-c",{attrs:{c:"D7"}})],1),s("mjx-mi",{staticClass:"mjx-i",attrs:{space:"3"}},[s("mjx-c",{attrs:{c:"N"}})],1),s("mjx-mo",{staticClass:"mjx-n",attrs:{space:"3"}},[s("mjx-c",{attrs:{c:"D7"}})],1),s("mjx-mi",{staticClass:"mjx-i",attrs:{space:"3"}},[s("mjx-c",{attrs:{c:"C"}})],1),s("mjx-mo",{staticClass:"mjx-n",attrs:{space:"3"}},[s("mjx-c",{attrs:{c:"D7"}})],1),s("mjx-msub",{attrs:{space:"3"}},[s("mjx-mi",{staticClass:"mjx-i",attrs:{noIC:"true"}},[s("mjx-c",{attrs:{c:"H"}})],1),s("mjx-script",{staticStyle:{"vertical-align":"-0.15em"}},[s("mjx-TeXAtom",{attrs:{size:"s"}},[s("mjx-mi",{staticClass:"mjx-i"},[s("mjx-c",{attrs:{c:"r"}})],1),s("mjx-mi",{staticClass:"mjx-i"},[s("mjx-c",{attrs:{c:"o"}})],1),s("mjx-mi",{staticClass:"mjx-i"},[s("mjx-c",{attrs:{c:"i"}})],1),s("mjx-mi",{staticClass:"mjx-i"},[s("mjx-c",{attrs:{c:"p"}})],1),s("mjx-mi",{staticClass:"mjx-i"},[s("mjx-c",{attrs:{c:"o"}})],1),s("mjx-mi",{staticClass:"mjx-i"},[s("mjx-c",{attrs:{c:"o"}})],1),s("mjx-mi",{staticClass:"mjx-i"},[s("mjx-c",{attrs:{c:"l"}})],1)],1)],1)],1),s("mjx-mo",{staticClass:"mjx-n",attrs:{space:"3"}},[s("mjx-c",{attrs:{c:"D7"}})],1),s("mjx-msub",{attrs:{space:"3"}},[s("mjx-mi",{staticClass:"mjx-i",attrs:{noIC:"true"}},[s("mjx-c",{attrs:{c:"W"}})],1),s("mjx-script",{staticStyle:{"vertical-align":"-0.15em"}},[s("mjx-TeXAtom",{attrs:{size:"s"}},[s("mjx-mi",{staticClass:"mjx-i"},[s("mjx-c",{attrs:{c:"r"}})],1),s("mjx-mi",{staticClass:"mjx-i"},[s("mjx-c",{attrs:{c:"o"}})],1),s("mjx-mi",{staticClass:"mjx-i"},[s("mjx-c",{attrs:{c:"i"}})],1),s("mjx-mi",{staticClass:"mjx-i"},[s("mjx-c",{attrs:{c:"p"}})],1),s("mjx-mi",{staticClass:"mjx-i"},[s("mjx-c",{attrs:{c:"o"}})],1),s("mjx-mi",{staticClass:"mjx-i"},[s("mjx-c",{attrs:{c:"o"}})],1),s("mjx-mi",{staticClass:"mjx-i"},[s("mjx-c",{attrs:{c:"l"}})],1)],1)],1)],1)],1)],1),t._v("在将"),s("code",[t._v("proposals")]),t._v("投射到"),s("code",[t._v("feature map")]),t._v("上时，计算结果很有可能是不能整除的，如图中"),s("code",[t._v("21/32=0.625")]),t._v(",这时选择近似取整的方法选定"),s("code",[t._v("proposal")]),t._v("对应的"),s("code",[t._v("feature map")]),t._v("对应的区域，如上图中将红色的框近似到蓝色框上，这里做了"),s("strong",[t._v("第一次量化取整")]),t._v("，引入了误差。在计算自适应池化核大小时，遇到非整除的情况，这里"),s("strong",[t._v("对计算结果进行了向上取整和向下取整的近似")]),t._v("，如"),s("code",[t._v("8/3")]),t._v("通过近似得到池化核区域的大小为"),s("code",[t._v("3，3，2")]),t._v("，这里做了"),s("strong",[t._v("第二次量化")]),t._v("，引入了误差。")],1),t._v(" "),s("p",[t._v("通过以上的说明，有可能依然没有说清除，说明白，最能描述一个算法本身的应该是代码实现，"),s("code",[t._v("ROI Pooling")]),t._v("的具体代码实现可以参考 "),s("a",{attrs:{href:"https://github.com/AceCoooool/RoIAlign-RoIPool-pytorch/blob/master/roipool/roi_pool_cpu.cpp",target:"_blank",rel:"noopener noreferrer"}},[t._v("github ROI Pooling"),s("OutboundLink")],1),t._v("。")]),t._v(" "),s("h2",{attrs:{id:"_3-roi-align"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-roi-align"}},[t._v("#")]),t._v(" 3.ROI Align")]),t._v(" "),s("p",[t._v("从上面介绍中可知"),s("code",[t._v("ROI Pooling")]),t._v("中有两处对计算结果取了近似，一次是在将"),s("code",[t._v("proposal")]),t._v("投射到"),s("code",[t._v("feature map")]),t._v("上时，对浮点数进行了近似取整，另外一次是在进行池化操作计算池化核的大小时也进行了近似取整。这对于分类问题影响不大，但"),s("strong",[t._v("对于检测问题因对检测框进行了近似，会影响检测的定位精度")]),t._v("。"),s("strong",[s("code",[t._v("ROI Align")]),t._v("也是一种池化操作")]),t._v("，只不过其不对"),s("code",[t._v("proposals")]),t._v("映射和池化核大小做近似，而是使用浮点数计算，然后使用双线性插值再近似浮点数位置的值来做池化，比直接近似取整更加准确。"),s("code",[t._v("ROI Align")]),t._v("是"),s("code",[t._v("He KaiMing")]),t._v("和"),s("code",[t._v("Fast RCNN")]),t._v("的原作者"),s("code",[t._v("Ross Girshick")]),t._v("一起在"),s("code",[t._v("2017")]),t._v("年"),s("code",[t._v("03")]),t._v("月份发表的论文"),s("code",[t._v("Mask RCNN")]),t._v("中的提出的，用于目标检测和实例分割。有个小插曲，2015年"),s("code",[t._v("Ross Girshick")]),t._v("发表"),s("code",[t._v("Fast RCNN")]),t._v("时，其署名单位是微软，"),s("code",[t._v("2017")]),t._v("年署名单位已经是"),s("code",[t._v("Facebook")]),t._v("的"),s("code",[t._v("FAIR")]),t._v("了。")]),t._v(" "),s("p",[t._v("还以上图中狗的检测为例，这次直接使用"),s("code",[t._v("feature map")]),t._v("红色的框进行计算，而不再将其取整近似到蓝色框上。且在绿色框中的池化操作，池化核的大小也采用均分，而非近似的方法。其实现过程如下图：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://day-pic-1311699660.cos.ap-nanjing.myqcloud.com/image/roi6roiAlign.jpg",alt:""}})]),t._v(" "),s("p",[s("code",[t._v("ROI Align")]),t._v("主要涉及到的是如何求浮点位置的"),s("code",[t._v("feature map")]),t._v("上的值，其确定是通过双线性插值来实现的，比"),s("code",[t._v("ROI Pooling")]),t._v("中的取整近似要更准确。关于双线性插值的介绍可参考"),s("a",{attrs:{href:"https://foobarweb.net/2022/08/11/5bilinearInterpolation/",target:"_blank",rel:"noopener noreferrer"}},[t._v("(五)线性插值"),s("OutboundLink")],1),t._v(","),s("code",[t._v("ROI Align")]),t._v("的代码实现可参考：")]),t._v(" "),s("blockquote",[s("p",[s("a",{attrs:{href:"https://github.com/AceCoooool/RoIAlign-RoIPool-pytorch/blob/master/roialign/roi_align_cpu.cpp",target:"_blank",rel:"noopener noreferrer"}},[t._v("roi_align_cpu.cpp"),s("OutboundLink")],1)])]),t._v(" "),s("p",[t._v("其中计算线性插值的函数使用的方式是按邻近4个像素点对当前点贡献多少来决定的，也就是面积加权平均，可参考上面的线性插值介绍的文章。在计算坐标时")]),t._v(" "),s("div",{staticClass:"language-cpp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 公式是(src+0.5)/(dst+0.5) = srcWidth/dstWidth,即中心点对齐")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" T yy "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" start_y "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" ph "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" b_size_h "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token generic-function"}},[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("static_cast")]),s("span",{pre:!0,attrs:{class:"token generic class-name"}},[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("T"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")])])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("iy "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.5f")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" b_size_h "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token generic-function"}},[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("static_cast")]),s("span",{pre:!0,attrs:{class:"token generic class-name"}},[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("T"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")])])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("b_grid_h"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" ix "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" ix "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" b_grid_w"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v("ix"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" T xx "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" start_x "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" pw "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" b_size_w "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token generic-function"}},[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("static_cast")]),s("span",{pre:!0,attrs:{class:"token generic class-name"}},[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("T"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")])])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ix "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.5f")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" b_size_w "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token generic-function"}},[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("static_cast")]),s("span",{pre:!0,attrs:{class:"token generic class-name"}},[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("T"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")])])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("b_grid_w"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n     T x "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" xx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" y "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" yy"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n     "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// situation 1: out of range")]),t._v("\n     "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("y "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.0")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" y "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" h "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" x "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.0")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" x "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" w"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          PreCalc"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("T"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" pc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n          pre_calc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("idx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" pc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n          idx "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("continue")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n     "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("通过"),s("code",[t._v("ROI Pooling")]),t._v("或"),s("code",[t._v("ROI Align")]),t._v("后得到的张量的宽高同"),s("code",[t._v("SPPNet")]),t._v("，是固定的，因此其后可以跟全连接层用来实现，检测框类别的判断和更好的位置回归。")]),t._v(" "),s("InArticleAdsense",{attrs:{"data-ad-client":"ca-pub-8685746128991385","data-ad-slot":"2974191661"}}),t._v(" "),s("h3",{attrs:{id:"参考资料"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[t._v("#")]),t._v(" 参考资料")]),t._v(" "),s("blockquote",[s("ul",[s("li",[s("a",{attrs:{href:"https://github.com/AceCoooool/RoIAlign-RoIPool-pytorch",target:"_blank",rel:"noopener noreferrer"}},[t._v("1.https://github.com/AceCoooool/RoIAlign-RoIPool-pytorch"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/73138740",target:"_blank",rel:"noopener noreferrer"}},[t._v("2.https://zhuanlan.zhihu.com/p/73138740"),s("OutboundLink")],1)])])])],1)}),[],!1,null,null,null);s.default=e.exports}}]);
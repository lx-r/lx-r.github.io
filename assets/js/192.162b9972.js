(window.webpackJsonp=window.webpackJsonp||[]).push([[192],{471:function(a,n,t){"use strict";t.r(n);var e=t(10),o=Object(e.a)({},(function(){var a=this,n=a._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[n("h1",{attrs:{id:"built-in-invariance-of-dcnn"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#built-in-invariance-of-dcnn"}},[a._v("#")]),a._v(" Built-in Invariance of DCNN")]),a._v(" "),n("h2",{attrs:{id:"_1-问题介绍"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-问题介绍"}},[a._v("#")]),a._v(" 1.问题介绍")]),a._v(" "),n("p",[a._v("最近看的2015年前后的几篇语义分割网络中反复提到了一个点,深度卷积神经网络的内置不变性。")]),a._v(" "),n("p",[a._v("2014年11月发表的"),n("code",[a._v("Fully Convolutional Networks for Semantic Segmentation")]),a._v("中作者提到了卷积神经网络具有的平移不变性：")]),a._v(" "),n("p",[n("img",{attrs:{src:"https://day-pic-1311699660.cos.ap-nanjing.myqcloud.com/image/bidcnn1.jpg",alt:""}})]),a._v(" "),n("p",[a._v("2014年12月发表的"),n("code",[a._v("DeepLabV1")]),a._v("中，作者指出，深度卷积神经网络（Deep Convolution Nearal Network,DCNN）之所以在图像分类/目标检测上取得非常好的结果，正是由于"),n("code",[a._v("DCNN")]),a._v("具有的不变性，层级越深，其所学习到的特征越抽象，因此其表征能力更强。")]),a._v(" "),n("p",[n("img",{attrs:{src:"https://day-pic-1311699660.cos.ap-nanjing.myqcloud.com/image/bidcnn2.jpg",alt:""}})]),a._v(" "),n("p",[a._v("在上面这两篇文章中强调了"),n("code",[a._v("DCNN")]),a._v("具有的不变性，那么什么是"),n("code",[a._v("DCNN")]),a._v("的不变性呢？")]),a._v(" "),n("h2",{attrs:{id:"_2-dcnn的invariance"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-dcnn的invariance"}},[a._v("#")]),a._v(" 2.DCNN的Invariance")]),a._v(" "),n("p",[a._v("DCNN的不变性，Invariance是指当输入发生某些变化时，"),n("code",[a._v("DCNN")]),a._v("模型的输出可以保持不变，一般情况下都会希望模型具有输入不变性，使得输入的图像发生某些变化时，如平移，旋转，视角等变化时，模型仍然能够识别出图像中的对象。")]),a._v(" "),n("p",[n("img",{attrs:{src:"https://day-pic-1311699660.cos.ap-nanjing.myqcloud.com/image/bidcnn3.jpg",alt:""}})]),a._v(" "),n("p",[a._v("注意区分不变性Invariance和等变性Equivariance。对于"),n("code",[a._v("DCNN")]),a._v("的不变性是指即便对象在图像中的位置，尺度发生变化，仍然能正确识别出对象的类别。"),n("code",[a._v("DCNN")]),a._v("的等变性是指当输入发生变化时，输出也会产生相映的变化，如人脸检测的热力图，当人脸在输入图像上从一个位置平移到另一个位置时，输出的热力图上的人脸也会相映移动。")]),a._v(" "),n("h2",{attrs:{id:"_3-后记"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-后记"}},[a._v("#")]),a._v(" 3.后记")]),a._v(" "),n("p",[a._v("可以理解卷积神经网络通过使用深层的卷积网络和池化层可增大感受野，使模型具备一定的平移不变性，有文章专门研究图像表征的等变性，不变性和等效果性。")]),a._v(" "),n("p",[a._v("2014年11月发表的论文"),n("code",[a._v("Understanding image representations by measuring their equivariance and equivalence")]),a._v("专门研究了这个问题。")]),a._v(" "),n("p",[a._v("2015年06月发表的"),n("code",[a._v("Spatial Transformer Networks")]),a._v("提出了一种可增强模型平移旋转缩放等空间不变形的模块，文章分析了"),n("code",[a._v("DCNN")]),a._v("的不变性能力有限，缺少对输入数据进行高效空间变换的能力。Spatial Transformer空间变换器，可以在网络中对数据进行显式的平移(translation)/尺度缩放(scale)/旋转(rotation)等空间变换，使得训练得到的模型具有空间不变性。而且，Spatial Transformer是一个可微模块，不需要额外的监督训练，不需要改动传统的优化过程，可直接应用到卷积神经网络中。")]),a._v(" "),n("p",[a._v("2017年03月发表的"),n("code",[a._v("Deformable Convolutional Networks")]),a._v("提出了可变形卷积，能够学习对象的形变特征。具体介绍可以参考"),n("a",{attrs:{href:"https://foobarweb.net/2023/01/31/9DeformableCNN/",target:"_blank",rel:"noopener noreferrer"}},[a._v("9.Deformable CNN"),n("OutboundLink")],1)]),a._v(" "),n("p",[a._v("从以上可以看出来，关于"),n("code",[a._v("DCNN")]),a._v("不变性的讨论由来已久，相关的研究也在不断的更新。")]),a._v(" "),n("InArticleAdsense",{attrs:{"data-ad-client":"ca-pub-8685746128991385","data-ad-slot":"2974191661"}}),a._v("\n### 参考资料\n> - [1.Deformable CNN](https://foobarweb.net/2023/01/31/9DeformableCNN/)\n> - [2.https://stats.stackexchange.com/questions/208936/what-is-translation-invariance-in-computer-vision-and-convolutional-neural-netwo](https://stats.stackexchange.com/questions/208936/what-is-translation-invariance-in-computer-vision-and-convolutional-neural-netwo)")],1)}),[],!1,null,null,null);n.default=o.exports}}]);
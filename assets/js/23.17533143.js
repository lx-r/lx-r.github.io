(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{302:function(t,a,s){"use strict";s.r(a);var n=s(10),e=Object(n.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"在opencv中使用surf"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#在opencv中使用surf"}},[t._v("#")]),t._v(" 在OpenCV中使用SURF")]),t._v(" "),a("p",[t._v("作为图像对齐常使用的特征提取算法，"),a("code",[t._v("ORB")]),t._v("速度最快，但是效果较差，对光照变化的处理也差一些，有时候提取取的特征点比较少，影响使用。"),a("code",[t._v("SIFT")]),t._v("准确率最高，但速度很慢。作为"),a("code",[t._v("SIFT")]),t._v("的替代，"),a("code",[t._v("SURF")]),t._v("特征提取方法是性能和速度比较平衡的方法，不过"),a("code",[t._v("SURF")]),t._v("算法目前还受专利保护，在"),a("code",[t._v("OpenCV")]),t._v("中的实现在"),a("code",[t._v("contrib")]),t._v("包中，且必须打开"),a("code",[t._v("OPENCV_ENABLE_NONFREE")]),t._v(" "),a("code",[t._v("cmake")]),t._v("编译选项，这在研究中使用是允许的，但用于商业盈利活动就会侵权。")]),t._v(" "),a("h2",{attrs:{id:"编译报错及解决"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#编译报错及解决"}},[t._v("#")]),t._v(" 编译报错及解决")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),t._v('"\nterminate called after throwing an instance of '),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'cv::Exception'")]),t._v("\n  what"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(":  OpenCV"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4.5")]),t._v(".5"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" /home/xx/opencv/opencv_contrib-4.x/modules/xfeatures2d/src/surf.cpp:1027: error: "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("-213:The function/feature is not implemented"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" This algorithm is patented and is excluded "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" this configuration"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" Set OPENCV_ENABLE_NONFREE CMake option and rebuild the library "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'create'")]),t._v("\n\nAborted "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("core dumped"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),t._v('"\n')])])]),a("p",[t._v("使用"),a("code",[t._v("SURF")]),t._v("的应用程序编译成功了，但是在运行时报错如上，正如提示中所说，要想使用"),a("code",[t._v("SURF")]),t._v("需要在"),a("code",[t._v("OpenCV")]),t._v("源码编译时设置参数"),a("code",[t._v("OPENCV_ENABLE_NONFREE=ON")]),t._v("。")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("cmake "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-DOPENCV_EXTRA_MODULES_PATH")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("opencv_contrib/modules "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-DOPENCV_GENERATE_PKGCONFIG_INFO")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("YES "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-DCMAKE_INSTALL_PREFIX")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("XXX "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-DCMAKE_BUILD_TYPE")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("RELEASE "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-DOPENCV_ENABLE_NONFREE")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("ON "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("\n")])])]),a("h2",{attrs:{id:"opencv-使用surf示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#opencv-使用surf示例"}},[t._v("#")]),t._v(" "),a("code",[t._v("OpenCV")]),t._v(" 使用"),a("code",[t._v("SURF")]),t._v("示例")]),t._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("include")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("<opencv2/xfeatures2d.hpp>")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("include")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("<opencv2/highgui.hpp>")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("include")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("<opencv2/features2d.hpp>")])]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    cv"),a("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[t._v("::")]),t._v("Ptr"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("cv"),a("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[t._v("::")]),t._v("Feature2D"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" feat_extractor "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" cv"),a("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[t._v("::")]),t._v("xfeatures2d"),a("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SURF")]),a("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("create")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("400")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    std"),a("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[t._v("::")]),t._v("vector"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("cv"),a("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[t._v("::")]),t._v("KeyPoint"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" kpts"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    cv"),a("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[t._v("::")]),t._v("Mat descs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    std"),a("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[t._v("::")]),t._v("string image_file "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/mnt/data/code/basic_cplusplus_examples/data/lk_optical_flow/000000.png"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    cv"),a("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[t._v("::")]),t._v("Mat img "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" cv"),a("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("imread")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("image_file"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    feat_extractor"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("detectAndCompute")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("img"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" cv"),a("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("noArray")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" kpts"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" descs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    cv"),a("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("drawKeypoints")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("img"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" kpts"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" img"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" cv"),a("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Scalar")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("129")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("189")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    cv"),a("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("imshow")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"image"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" img"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    cv"),a("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("waitKey")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("编译：")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("g++ main.cpp "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-o")]),t._v(" main "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")]),t._v("pkg-config "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--cflags")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--libs")]),t._v(" opencv4"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("LD_LIBRARY_PATH")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$LD_LIBRARY_PATH")]),t._v(":/mnt/data/sw/opencv/opencv48/install/lib\n")])])]),a("p",[t._v("执行的结果如下：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://day-pic-1311699660.cos.ap-nanjing.myqcloud.com/image/surf1.png",alt:""}})]),t._v(" "),a("p",[t._v("可以看到"),a("code",[t._v("SURF")]),t._v("提取的特征更多。")]),t._v(" "),a("InArticleAdsense",{attrs:{"data-ad-client":"ca-pub-8685746128991385","data-ad-slot":"2974191661"}})],1)}),[],!1,null,null,null);a.default=e.exports}}]);
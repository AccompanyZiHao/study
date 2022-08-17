(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{579:function(t,s,a){t.exports=a.p+"assets/img/01.33cf920b.png"},644:function(t,s,a){"use strict";a.r(s);var n=a(5),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h2",{attrs:{id:"问题描述"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#问题描述"}},[t._v("#")]),t._v(" 问题描述")]),t._v(" "),n("p",[n("code",[t._v("img")]),t._v("和 "),n("code",[t._v("p")]),t._v(" 之间有一行空白间隙，在浏览查看了盒模型，发现没有设置任何的 "),n("code",[t._v("padding")]),t._v(" 和 "),n("code",[t._v("margin")]),t._v(" 。")]),t._v(" "),n("p",[n("img",{attrs:{src:a(579),alt:"alt",title:"图片间隙"}})]),t._v(" "),n("h2",{attrs:{id:"解决方案"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#解决方案"}},[t._v("#")]),t._v(" 解决方案")]),t._v(" "),n("ol",[n("li",[t._v("把图片设置为块元素")])]),t._v(" "),n("div",{staticClass:"language-css extra-class"},[n("pre",{pre:!0,attrs:{class:"language-css"}},[n("code",[n("span",{pre:!0,attrs:{class:"token selector"}},[t._v("img")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" block"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("ol",{attrs:{start:"2"}},[n("li",[t._v("外层父元素设置 "),n("code",[t._v("font-size: 0")])])]),t._v(" "),n("div",{staticClass:"language-css extra-class"},[n("pre",{pre:!0,attrs:{class:"language-css"}},[n("code",[n("span",{pre:!0,attrs:{class:"token selector"}},[t._v("div")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-size")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("ol",{attrs:{start:"3"}},[n("li",[t._v("修改 "),n("code",[t._v("img")]),t._v(" 的 "),n("code",[t._v("vertical-align")]),t._v(" 属性")])]),t._v(" "),n("div",{staticClass:"language-css extra-class"},[n("pre",{pre:!0,attrs:{class:"language-css"}},[n("code",[n("span",{pre:!0,attrs:{class:"token selector"}},[t._v("img")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("vertical-align")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" bottom"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token selector"}},[t._v("img")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("vertical-align")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" middle"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token selector"}},[t._v("img")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("vertical-align")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" top"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("ol",{attrs:{start:"4"}},[n("li",[t._v("浮动。")])]),t._v(" "),n("h2",{attrs:{id:"原因"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#原因"}},[t._v("#")]),t._v(" 原因")]),t._v(" "),n("p",[t._v("当父元素没有设置高度的时候，父元素被子元素的高度撑开就会出现这种情况。")]),t._v(" "),n("p",[t._v("在 "),n("code",[t._v("css")]),t._v(" 中， "),n("code",[t._v("inline-block")]),t._v(" 的默认垂直对齐方式是基于基线对齐 "),n("code",[t._v("vertical-align: baseline")]),t._v("，因此修改基线对齐方式就可以改变这种情况。")]),t._v(" "),n("p",[t._v("既然是行内基线问题导致的，那么修改它的行内属性也可以解决。")]),t._v(" "),n("p",[t._v("那为什么 "),n("code",[t._v("font-size: 0")]),t._v(" 可以解决呢?")]),t._v(" "),n("p",[t._v("它可以消除行内标签之间因为换行产生的间隙，比如我们在写 "),n("code",[t._v("html")]),t._v(" 的时候，为了格式化代码，保持代码的美观与可读性，标签之间会有换行，并不会挨着写，这个时候 "),n("code",[t._v("font-size: 0")]),t._v(" 就可以发挥作用了。")])])}),[],!1,null,null,null);s.default=e.exports}}]);
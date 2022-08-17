(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{663:function(a,s,t){"use strict";t.r(s);var e=t(5),l=Object(e.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("p",[a._v("给你两个字符串 "),t("code",[a._v("s")]),a._v(" 和 "),t("code",[a._v("goal")]),a._v(" ，只要我们可以通过交换 "),t("code",[a._v("s")]),a._v(" 中的两个字母得到与 "),t("code",[a._v("goal")]),a._v(" 相等的结果，就返回 "),t("code",[a._v("true")]),a._v(" ；否则返回 "),t("code",[a._v("false")]),a._v(" 。")]),a._v(" "),t("p",[a._v("交换字母的定义是：取两个下标 "),t("code",[a._v("i")]),a._v(" 和 "),t("code",[a._v("j")]),a._v(" （下标从 0 开始）且满足 "),t("code",[a._v("i")]),a._v(" != "),t("code",[a._v("j")]),a._v(" ，接着交换 "),t("code",[a._v("s[i]")]),a._v(" 和 "),t("code",[a._v("s[j]")]),a._v(" 处的字符。")]),a._v(" "),t("p",[a._v("例如，在 "),t("code",[a._v('"abcd"')]),a._v(" 中交换下标 0 和下标 2 的元素可以生成 "),t("code",[a._v('"cbad"')]),a._v(" 。")]),a._v(" "),t("h2",{attrs:{id:"示例-1"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#示例-1"}},[a._v("#")]),a._v(" 示例 1：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('输入：s = "ab", goal = "ba"\n输出：true\n解释：你可以交换 s[0] = \'a\' 和 s[1] = \'b\' 生成 "ba"，此时 s 和 goal 相等。\n')])])]),t("h2",{attrs:{id:"示例-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#示例-2"}},[a._v("#")]),a._v(" 示例 2：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('输入：s = "ab", goal = "ab"\n输出：false\n解释：你只能交换 s[0] = \'a\' 和 s[1] = \'b\' 生成 "ba"，此时 s 和 goal 不相等。\n')])])]),t("h2",{attrs:{id:"示例-3"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#示例-3"}},[a._v("#")]),a._v(" 示例 3：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('输入：s = "aa", goal = "aa"\n输出：true\n解释：你可以交换 s[0] = \'a\' 和 s[1] = \'a\' 生成 "aa"，此时 s 和 goal 相等。\n')])])]),t("h2",{attrs:{id:"示例-4"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#示例-4"}},[a._v("#")]),a._v(" 示例 4：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('输入：s = "aaaaaaabc", goal = "aaaaaaacb"\n输出：true\n')])])]),t("h2",{attrs:{id:"提示"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#提示"}},[a._v("#")]),a._v(" 提示：")]),a._v(" "),t("ul",[t("li",[a._v("1 <= s.length, goal.length <= 2 * 104")]),a._v(" "),t("li",[a._v("s 和 goal 由小写英文字母组成")])]),a._v(" "),t("h2",{attrs:{id:"题目分析"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#题目分析"}},[a._v("#")]),a._v(" 题目分析")]),a._v(" "),t("ol",[t("li",[a._v("字符串长度不相等，肯定不是亲密关系，直接返回 false")]),a._v(" "),t("li",[a._v("如果两个字符串相等有两种情况，'aa' 和 'aa', 'abc' 和 'abc'两种，第一种我们直接用 set 去重，如果去重后的长度小于原来的长度就说明是字符串中含有相同的字符那就是亲密关系了,长度如果一样的话那就是不是亲密关系了")]),a._v(" "),t("li",[a._v("不相等的话，我们就把他们的下标用 stash 存起来，如果要是亲密关系，那么要满足下面几个条件\n"),t("ol",[t("li",[a._v("只有两个字符串不同")]),a._v(" "),t("li",[a._v("s.charAt(stash[0]) == goal.charAt(stash[1])")]),a._v(" "),t("li",[a._v("s.charAt(stash[1]) == goal.charAt(stash[0])")])])])]),a._v(" "),t("h2",{attrs:{id:"solution"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#solution"}},[a._v("#")]),a._v(" solution")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("/*\n * @lc app=leetcode.cn id=859 lang=javascript\n *\n * [859] 亲密字符串\n */\n\n// @lc code=start\n/**\n * @param {string} s\n * @param {string} goal\n * @return {boolean}\n */\nvar buddyStrings = function(s, goal) {\n  const l = s.length\n  if(l != goal.length) return false\n\n  if(s == goal) return new Set(s).size < l\n\n  let stash = []\n  for(let i = 0; i < l; i ++){\n    if(s.charAt(i) != goal.charAt(i)){\n      stash.push(i)\n    }\n  }\n  return stash.length == 2 && s.charAt(stash[0]) == goal.charAt(stash[1]) && s.charAt(stash[1]) == goal.charAt(stash[0])\n};\n// @lc code=end\n\n")])])])])}),[],!1,null,null,null);s.default=l.exports}}]);
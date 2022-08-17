(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{657:function(t,e,n){"use strict";n.r(e);var s=n(5),a=Object(s.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("p",[t._v("你现在是一场采用特殊赛制棒球比赛的记录员。这场比赛由若干回合组成，过去几回合的得分可能会影响以后几回合的得分。")]),t._v(" "),n("p",[t._v("比赛开始时，记录是空白的。你会得到一个记录操作的字符串列表 "),n("code",[t._v("ops")]),t._v("，其中 "),n("code",[t._v("ops[i]")]),t._v(" 是你需要记录的第 "),n("code",[t._v("i")]),t._v(" 项操作，"),n("code",[t._v("ops")]),t._v(" 遵循下述规则：")]),t._v(" "),n("ol",[n("li",[t._v("整数 x - 表示本回合新获得分数 x")]),t._v(" "),n("li",[t._v('"+" - 表示本回合新获得的得分是前两次得分的总和。题目数据保证记录此操作时前面总是存在两个有效的分数。')]),t._v(" "),n("li",[t._v('"D" - 表示本回合新获得的得分是前一次得分的两倍。题目数据保证记录此操作时前面总是存在一个有效的分数。')]),t._v(" "),n("li",[t._v('"C" - 表示前一次得分无效，将其从记录中移除。题目数据保证记录此操作时前面总是存在一个有效的分数。')])]),t._v(" "),n("p",[t._v("请你返回记录中所有得分的总和。")]),t._v(" "),n("h2",{attrs:{id:"示例-1"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#示例-1"}},[t._v("#")]),t._v(" 示例 1：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('输入：ops = ["5","2","C","D","+"]\n输出：30\n解释：\n"5" - 记录加 5 ，记录现在是 [5]\n"2" - 记录加 2 ，记录现在是 [5, 2]\n"C" - 使前一次得分的记录无效并将其移除，记录现在是 [5].\n"D" - 记录加 2 * 5 = 10 ，记录现在是 [5, 10].\n"+" - 记录加 5 + 10 = 15 ，记录现在是 [5, 10, 15].\n所有得分的总和 5 + 10 + 15 = 30\n')])])]),n("h2",{attrs:{id:"示例-2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#示例-2"}},[t._v("#")]),t._v(" 示例 2：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('输入：ops = ["5","-2","4","C","D","9","+","+"]\n输出：27\n解释：\n"5" - 记录加 5 ，记录现在是 [5]\n"-2" - 记录加 -2 ，记录现在是 [5, -2]\n"4" - 记录加 4 ，记录现在是 [5, -2, 4]\n"C" - 使前一次得分的记录无效并将其移除，记录现在是 [5, -2]\n"D" - 记录加 2 * -2 = -4 ，记录现在是 [5, -2, -4]\n"9" - 记录加 9 ，记录现在是 [5, -2, -4, 9]\n"+" - 记录加 -4 + 9 = 5 ，记录现在是 [5, -2, -4, 9, 5]\n"+" - 记录加 9 + 5 = 14 ，记录现在是 [5, -2, -4, 9, 5, 14]\n所有得分的总和 5 + -2 + -4 + 9 + 5 + 14 = 27\n')])])]),n("h2",{attrs:{id:"示例-3"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#示例-3"}},[t._v("#")]),t._v(" 示例 3：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('输入：ops = ["1"]\n输出：1\n')])])]),n("h2",{attrs:{id:"提示"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#提示"}},[t._v("#")]),t._v(" 提示：")]),t._v(" "),n("ul",[n("li",[t._v("1 <= ops.length <= 1000")]),t._v(" "),n("li",[t._v('ops[i] 为 "C"、"D"、"+"，或者一个表示整数的字符串。整数范围是 [-3 * 104, 3 * 104]')]),t._v(" "),n("li",[t._v('对于 "+" 操作，题目数据保证记录此操作时前面总是存在两个有效的分数')]),t._v(" "),n("li",[t._v('对于 "C" 和 "D" 操作，题目数据保证记录此操作时前面总是存在一个有效的分数')])]),t._v(" "),n("p",[t._v("这个题过于简单，题说的也比较明白，直接撸代码了")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("/*\n * @lc app=leetcode.cn id=682 lang=javascript\n *\n * [682] 棒球比赛\n */\n\n// @lc code=start\n/**\n * @param {string[]} ops\n * @return {number}\n */\nvar calPoints = function (ops) {\n  let result = []\n  for (let i = 0; i < ops.length; i++) {\n    const item = ops[i];\n    switch (item) {\n      case '+':\n        result.push(result[result.length - 1] + result[result.length - 2])\n        break;\n      case 'D':\n        result.push(result[result.length - 1] * 2)\n        break;\n      case 'C':\n        result.pop()\n        break;\n      default:\n        result.push(Number(item))\n        break;\n    }\n  }\n\n  return result.reduce((pre, cur) => pre + cur, 0)\n\n};\n// @lc code=end\n\n")])])])])}),[],!1,null,null,null);e.default=a.exports}}]);
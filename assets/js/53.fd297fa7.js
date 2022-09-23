(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{669:function(e,n,t){"use strict";t.r(n);var r=t(5),a=Object(r.a)({},(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("p",[e._v("给定一个已排序的链表的头 "),t("code",[e._v("head")]),e._v(" ， 删除原始链表中所有重复数字的节点，只留下不同的数字。返回已排序的链表 。")]),e._v(" "),t("h2",{attrs:{id:"示例-1"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#示例-1"}},[e._v("#")]),e._v(" 示例 1：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("输入：head = [1,2,3,3,4,4,5]\n输出：[1,2,5]\n")])])]),t("h2",{attrs:{id:"示例-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#示例-2"}},[e._v("#")]),e._v(" 示例 2：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("输入：head = [1,1,1,2,3]\n输出：[2,3]\n")])])]),t("h2",{attrs:{id:"提示"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#提示"}},[e._v("#")]),e._v(" 提示：")]),e._v(" "),t("ul",[t("li",[e._v("链表中节点数目在范围 [0, 300] 内")]),e._v(" "),t("li",[e._v("-100 <= Node.val <= 100")]),e._v(" "),t("li",[e._v("题目数据保证链表已经按升序 排列")])]),e._v(" "),t("p",[e._v("我们先来分析")]),e._v(" "),t("ol",[t("li",[e._v("链表为空，返回 null")]),e._v(" "),t("li",[e._v("由于可能链表的前两个重复，那就需要操作头节点，因此我们搞个虚拟头节点 "),t("code",[e._v("let ret = new ListNode(-1, head)")])]),e._v(" "),t("li",[e._v("定义两个指针来循环这个链表， "),t("code",[e._v("pre = ret")]),e._v(", "),t("code",[e._v("cur = ret.next")])]),e._v(" "),t("li",[e._v("当慢指针的值不等于快指针的值即"),t("code",[e._v("pre.val != cur.val")]),e._v("，那快慢指针就各自走一步；如果相等，慢指针原地休息，快指针往后走，走到不想等时候， 慢指针指向快指针")])]),e._v(" "),t("p",[e._v("我们用示例 2 的例子来演示一下")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("let pre = ret        // pre -1,1,1,1,2,3\nlet cur = ret.next   // cur    1,1,1,2,3\n第一轮 pre.next.val == cur.next.val 值相等，快指针向后走，直到他们值不等\nwhile (cur && cur.next && pre.next.val == cur.next.val) {\n  cur = cur.next\n}\n1.1 轮\n// pre -1 1 1 1 2 3\n// cur 1 1 2 3\n1.2 轮\n// pre -1 1 1 1 2 3\n// cur 1 1 2 3\n1.3 轮\n// pre -1 1 1 1 2 3\n// cur 1 2 3\n此时值不相等跳出当前循环\npre.next = cur.next\ncur = cur.next\n// pre -1 2 3\n// cur 2 3\n第二轮 值不等\n// pre 2 3\n// cur 3\n第三轮 值不等\n// pre 3\n// cur null\n")])])]),t("h2",{attrs:{id:"solution"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#solution"}},[e._v("#")]),e._v(" solution")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("/*\n * @lc app=leetcode.cn id=82 lang=javascript\n *\n * [82] 删除排序链表中的重复元素 II\n */\n\n// @lc code=start\n/**\n * Definition for singly-linked list.\n * function ListNode(val, next) {\n *     this.val = (val===undefined ? 0 : val)\n *     this.next = (next===undefined ? null : next)\n * }\n */\n/**\n * @param {ListNode} head\n * @return {ListNode}\n */\nvar deleteDuplicates = function(head) {\n  if(!head) return null\n  let ret = new ListNode(-1, head)\n  // pre 的下一个等于 cur 下一个, 移动 cur，不相等 pre.next 指向 cur.next\n  // 不相等往后移\n  let pre  = ret\n  let cur = ret.next\n  while (cur && cur.next) {\n    if(pre.next.val == cur.next.val){\n      while (cur && cur.next && pre.next.val == cur.next.val) {\n        cur = cur.next\n      }\n      pre.next = cur.next\n      cur = cur.next\n    }else{\n      cur = cur.next\n      pre = pre.next\n    }\n  }\n  return ret.next\n};\n// @lc code=end\n\n\n")])])])])}),[],!1,null,null,null);n.default=a.exports}}]);
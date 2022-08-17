(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{653:function(e,t,n){"use strict";n.r(t);var a=n(5),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("p",[e._v("给你一个链表，两两交换其中相邻的节点，并返回交换后链表的头节点。你必须在不修改节点内部的值的情况下完成本题（即，只能进行节点交换）。")]),e._v(" "),n("h2",{attrs:{id:"示例-1"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#示例-1"}},[e._v("#")]),e._v(" 示例 1：")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("输入：head = [1,2,3,4]\n输出：[2,1,4,3]\n")])])]),n("h2",{attrs:{id:"示例-2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#示例-2"}},[e._v("#")]),e._v(" 示例 2：")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("输入：head = []\n输出：[]\n")])])]),n("h2",{attrs:{id:"示例-3"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#示例-3"}},[e._v("#")]),e._v(" 示例 3：")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("输入：head = [1]\n输出：[1]\n")])])]),n("h2",{attrs:{id:"提示"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#提示"}},[e._v("#")]),e._v(" 提示：")]),e._v(" "),n("p",[e._v("链表中节点的数目在范围 [0, 100] 内\n0 <= "),n("code",[e._v("Node.val")]),e._v(" <= 100")]),e._v(" "),n("p",[e._v("先理清楚一下思路")]),e._v(" "),n("ol",[n("li",[e._v("如果是空链表直接返回 "),n("code",[e._v("null")])]),e._v(" "),n("li",[e._v("由于我们需要操作头节点，因此设置一个虚拟头节点，即"),n("code",[e._v("let ret = new ListNode(-1, head)")])]),e._v(" "),n("li",[e._v("两两交换一般呢都是需要三个变量来存储，"),n("code",[e._v("temp")]),e._v(", "),n("code",[e._v("pre")]),e._v(", "),n("code",[e._v("cur")])]),e._v(" "),n("li",[e._v("返回 "),n("code",[e._v("ret.next")])])]),e._v(" "),n("p",[e._v("我们首先用 "),n("code",[e._v("temp")]),e._v(" 来存放一下我们新建立的链表，接着我们重点来看一下第三步，我们需要先循环链表，循环终止的条件就是这个链表的长度至少为 2 我们才交换，比如 "),n("code",[e._v("[1,2,3]")]),e._v("这样的链表，我们交换完前两个，发现还有一个节点，那我就不去去处理了，因此我们需要保证 "),n("code",[e._v("temp")]),e._v(" 的后两个节点是存在的，即 "),n("code",[e._v("temp.next && temp.next.next")]),e._v(" 存在")]),e._v(" "),n("p",[e._v("确定了循环条件，我们看下循环体的内容。我们用示例一的链表"),n("code",[e._v("[1,2,3,4]")]),e._v("来举例")]),e._v(" "),n("p",[e._v("确定初始位置")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("// temp -1 1 2 3 4\npre = temp.next;      // pre 1 2 3 4\ncur = temp.next.next  // cur 2 3 4\n")])])]),n("p",[e._v("开始两两交换链表, 把 1 指向 3，")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("pre.next = cur.next  // pre 1 3 4\ncur.next = pre       // cur 2 1 3 4\ntemp.next = cur      //temp -1 2 1 3 4\n// 重置 temp\ntemp = pre           //temp 1 3 4\n")])])]),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("/*\n * @lc app=leetcode.cn id=24 lang=javascript\n *\n * [24] 两两交换链表中的节点\n */\n\n// @lc code=start\n/**\n * Definition for singly-linked list.\n * function ListNode(val, next) {\n *     this.val = (val===undefined ? 0 : val)\n *     this.next = (next===undefined ? null : next)\n * }\n */\n/**\n * @param {ListNode} head\n * @return {ListNode}\n */\nvar swapPairs = function(head) {\n if(!head) return null\n let ret = new ListNode(-1, head)\n let temp = ret\n// 12345\n while (temp.next && temp.next.next) {\n  let pre = temp.next // 12345\n  let cur = temp.next.next // 2345\n  pre.next = cur.next // pre 1 345\n  cur.next = pre // cur 2 1345\n  temp.next = cur // temp -1 21345\n  temp = pre // tem 1345\n }\n return ret.next\n};\npre 1 2 3 4\ncur 234\npre 134\ncur 2134\ntem -1 2134\ntem 134\n// @lc code=end\n\n")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);
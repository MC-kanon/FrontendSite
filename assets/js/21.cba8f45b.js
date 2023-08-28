(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{300:function(e,t,a){"use strict";a.r(t);var s=a(14),n=Object(s.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"vue3"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vue3"}},[e._v("#")]),e._v(" vue3")]),e._v(" "),t("h2",{attrs:{id:"reactive"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#reactive"}},[e._v("#")]),e._v(" reactive")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("作用：接受对象类型数据的参数传入并返回一个响应式的对象\n例如：\n一般对象用reactive\nconst data = reactive({\n\tusername: '',\n\tpassword: ''\n})\n")])])]),t("h2",{attrs:{id:"ref"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ref"}},[e._v("#")]),e._v(" ref")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("作用：接收简单类型或者对象类型的数据传入并返回一个响应式的对象\n例如：\n一般原始数据类型用ref\nconst data = ref('')\n访问和修改通过 ***.value\n")])])]),t("h2",{attrs:{id:"computed"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#computed"}},[e._v("#")]),e._v(" computed")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("作用：返回一个只读的响应式 ref 对象\n例如\nconst count = ref(1)\nconst plusOne = computed(() => count.value + 1)\nconsole.log(plusOne.value) // 2\n")])])]),t("h2",{attrs:{id:"watch"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#watch"}},[e._v("#")]),e._v(" watch")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("作用：侦听一个或者多个数据的变化，数据变化时执行回调函数，两个额外参数：1. immediate（立即执行） 2. deep（深度侦听）\n例如：\nconst count = ref(0)\nwatch(count,(newValue,oldValue)=>{\n\tconsole.log(newValue,oldValue);\n})  // 监听一个ref对象\n\nconst route = useRoute()\nwatch(()=>route.params.name,(newName,oldName)=>{\n\tconsole.log(newName,oldName);\n})  // 监听一个getter函数\n\nconst state = reactive({ count: 0 })\nwatch(state, () => {\n  /* 深层级变更状态所触发的回调 */\n}) // 侦听一个响应式对象时，侦听器会自动启用深层模式\n")])])]),t("h2",{attrs:{id:"watcheffect"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#watcheffect"}},[e._v("#")]),e._v(" watchEffect")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("作用：立即运行一个函数，同时响应式地追踪其依赖，并在依赖更改时重新执行\n例如：\nconst count = ref(0)\nwatchEffect(() => console.log(count.value))\n// -> 输出 0\ncount.value++\n// -> 输出 1\n")])])]),t("h2",{attrs:{id:"父子组件通信"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#父子组件通信"}},[e._v("#")]),e._v(" 父子组件通信")]),e._v(" "),t("p",[e._v("父传子：通过prop传递")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('父组件\n<sonCpn message="msg"></sonCpn>\n\n子组件\nconst props = defineProps({\n\tmessage: String\n})\n模板里面直接使用：{{message}}\n')])])]),t("p",[e._v("子传父（事件）")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("父组件\n<sonCpn @get-message=\"handleMessage\"></sonCpn>\nconst handleMessage = (msg) => {\n\tconsole.log(msg)\n}\n子组件\nconst emit = defineEmits(['get-message'])\nconst sendMsg = () => {\n\temit('get-message','msg')\n}\n模板：<button @click=\"sendMsg\">send</button>\n")])])]),t("h2",{attrs:{id:"父组件用子组件的方法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#父组件用子组件的方法"}},[e._v("#")]),e._v(" 父组件用子组件的方法")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('父组件\nconst sonRef = ref(null)\nsonRef.value.a  // 1\nconst modal = ref<InstanceType<typeof MyModal> | null>(null)\nconst openModal = () => {\n  modal.value?.open()\n}\n<sonCpn ref="sonRef"></sonCpn>\n\n子组件\nconst a = ref(1)\nconst isContentShown = ref(false)\nconst open = () => (isContentShown.value = true)\ndefineExpose({\n\ta,\n\topen\n})\n')])])]),t("h2",{attrs:{id:"引用模板"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#引用模板"}},[e._v("#")]),e._v(" 引用模板")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("const btnRef = ref(null)  // btnRef就代表了btn\n\n<button ref='btnRef'>button</button>  // 两个名字得相同，都是btnRef\n")])])]),t("h2",{attrs:{id:"依赖注入"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#依赖注入"}},[e._v("#")]),e._v(" 依赖注入")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("provide(/* 注入名 */ 'message', /* 值 */ 'hello!')\nconst message = inject('message')\n")])])]),t("h1",{attrs:{id:"pinia"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pinia"}},[e._v("#")]),e._v(" pinia")]),e._v(" "),t("ul",[t("li",[e._v("state：就是一个共同维护的状态(数据)，或者说是某一个时刻的快照")]),e._v(" "),t("li",[e._v("gettes：类似于计算属性")]),e._v(" "),t("li",[e._v("action：类似于method方法")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("import { defineStore } from 'pinia'\n\n// 定义\nexport const useUserStore = defineStore('user', {\n  state: () => {\n    return {\n      username: ''\n    }\n  },\n  getters: {\n    upperName: (state) => state.username.toUpperCase()\n  },\n  actions: {\n    setUsername(newname: string) {\n      this.username = newname\n    }\n  }\n})\n\n使用\nconst userStore = useUserStore()\nconst { username, upperName } = storeToRefs(userStore)\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);
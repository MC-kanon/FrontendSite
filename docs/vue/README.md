# vue3
## reactive
```
作用：接受对象类型数据的参数传入并返回一个响应式的对象
例如：
一般对象用reactive
const data = reactive({
	username: '',
	password: ''
})
```
## ref
```
作用：接收简单类型或者对象类型的数据传入并返回一个响应式的对象
例如：
一般原始数据类型用ref
const data = ref('')
访问和修改通过 ***.value
```
## computed
```
作用：返回一个只读的响应式 ref 对象
例如
const count = ref(1)
const plusOne = computed(() => count.value + 1)
console.log(plusOne.value) // 2
```
##  watch
```
作用：侦听一个或者多个数据的变化，数据变化时执行回调函数，两个额外参数：1. immediate（立即执行） 2. deep（深度侦听）
例如：
const count = ref(0)
watch(count,(newValue,oldValue)=>{
	console.log(newValue,oldValue);
})  // 监听一个ref对象

const route = useRoute()
watch(()=>route.params.name,(newName,oldName)=>{
	console.log(newName,oldName);
})  // 监听一个getter函数

const state = reactive({ count: 0 })
watch(state, () => {
  /* 深层级变更状态所触发的回调 */
}) // 侦听一个响应式对象时，侦听器会自动启用深层模式
```

## watchEffect
```
作用：立即运行一个函数，同时响应式地追踪其依赖，并在依赖更改时重新执行
例如：
const count = ref(0)
watchEffect(() => console.log(count.value))
// -> 输出 0
count.value++
// -> 输出 1
```

## 父子组件通信
父传子：通过prop传递
```
父组件
<sonCpn message="msg"></sonCpn>

子组件
const props = defineProps({
	message: String
})
模板里面直接使用：{{message}}
```
子传父（事件）
```
父组件
<sonCpn @get-message="handleMessage"></sonCpn>
const handleMessage = (msg) => {
	console.log(msg)
}
子组件
const emit = defineEmits(['get-message'])
const sendMsg = () => {
	emit('get-message','msg')
}
模板：<button @click="sendMsg">send</button>
```
## 父组件用子组件的方法
```
父组件
const sonRef = ref(null)
sonRef.value.a  // 1
const modal = ref<InstanceType<typeof MyModal> | null>(null)
const openModal = () => {
  modal.value?.open()
}
<sonCpn ref="sonRef"></sonCpn>

子组件
const a = ref(1)
const isContentShown = ref(false)
const open = () => (isContentShown.value = true)
defineExpose({
	a,
	open
})
```

## 引用模板
```
const btnRef = ref(null)  // btnRef就代表了btn

<button ref='btnRef'>button</button>  // 两个名字得相同，都是btnRef
```
## 依赖注入
```
provide(/* 注入名 */ 'message', /* 值 */ 'hello!')
const message = inject('message')
```

# JavaScript

## 数组方法

### 静态方法
Array.of()   用参数中的值创建数组
Array.of(1,2,3,4)   得到的  [1,2,3,4]
Array.from(object, mapFunction, thisValue)  将类数组对象转成数组
Array.from({length:5},(_,index)=>index))	[0, 1, 2, 3, 4]
Array.isArray()	判断是否是一个对象

### 迭代器方法
arr.forEach((item,index)=>{console.log(item,index)})
arr.map()   映射返回一个新数组
arr.filter()   过滤器，返回符合条件的数组
arr.find()  返回元素
arr.findIndex() 返回特定数组元素的下标
arr.every()	  数组所有元素都满足条件则返回true（惰性）
arr.some()	数组存在一个元素满足条件（惰性）
arr.reduce()  归并方法
arr.reduce((pre,cur)=>pre+cur,0)   pre代表上一次结果，  cur表示当前数组元素，0代表初始结果。

### 打平方法
arr.flat()	打平数组，arr.flat(num)， num代表打平层数
arr.flatMap()  先映射数组再进行打平， arr.flatMap(callback)=a.map(f).flat()，[-2,-1,1,2].flatMap(x=>x<0?[]:Math.sqrt(x))

### 连接数组
a.concat(b)		连接   [1,2].concat(4,5)    [1, 2, 4, 5]

### 栈，队列操作数组（改变原数组）
arr.push()  加最后一个元素
arr.pop()  移除最后一个元素
arr.shift()	移除第一个元素
arr.unshift()	加第一个元素

### 处理区域
arr.slice(start,end)    取出[start,end)元素
arr.splice(start,num,insertA,insertB)  从start位置开始，删除num个元素，在插入insertA，insertB。
a.fill(ele,start,end)    用元素ele去填充[start,end)区域的值

### 数组索引和排序方法
arr.indexOf(a)		元素在数组当中的索引（从前往后数）
arr.lastIndexOf(a)	  元素在数组当中的索引 （从后往前数）
arr.includes(a)		 数组内是否存在当前元素
arr.sort()			数组排序（改变原数组） arr.sort((a,b)=>a-b)  从小到大排序
arr.reverse()		翻转数组（改变原数组）
arr.join()			将数组转换成字符串（默认以 , 进行分隔）

改变原数组的方法
- push()
- pop()
- shift()
- unshift()
- splice()
- sort()
- reverse()
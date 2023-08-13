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
a.fill(ele,start,end)    用元素ele去填充[start,end)区域的值，new Array(5).fill(1)   [1,1,1,1,1]

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

## 字符串
### 和数组一样的方法   （数组和字符串都有length属性）
s1.concat(s2)
s1.indexOf('a') | s1.indexOf('hello world')  没有返回-1
s1.lastIndexOf('a') | s1.lastIndexOf('hello world')
s1.includes('hello')
s1.slice(start,end)     [start,end) 下标   和substring用法一样，不过slice支持-1，substring不支持

### 匹配
s1.substring(start,end) [start,end) 下标
s1.substr(start,num)  从下标start开始，返回num个字符
s1.charAt(2)   返回下标为2的字符
s1.match(regexp)   返回存放结果的数组[]或者null
s1.search(searchvalue)   返回searchvalue起始位置
s1.replace(searchvalue,newvalue)   用newvalue替换searchvalue，只替换一次，返回替换之后的结果
s1.replaceAll(searchvalue,newvalue)   用newvalue替换searchvalue，替换多次，返回替换之后的结果
s1.startsWith(searchvalue, ?start)    检测s1是否是以searchvalue开头，从start位置开始检测

### 其他
s1.split("-")   将字符串转成数组
s1.repeat(num)  将s1重复num次

### 工具
s1.toLowerCase()  转小写
s1.toUpperCase()  转大写
s1.trim()  去除两边空白
valueOf()
toString()


## 数组扁平化
```
最简单的
function flatArr(arr){
    return arr.flat(Infinity)
}

// 利用 concat 进行递归
function flatArr(arr){
    let result = []
    for (let i = 0; i < arr.length; i++) {
        result = Array.isArray(arr[i]) ? result.concat(flatArr(arr[i])) : result.concat(arr[i])
    }
    return result
}

// 利用 扩展运算符 ...
function flatArr(arr){
    for (let i = 0; i < arr.length; i++) {
        if(Array.isArray(arr[i])){
            arr = [].concat(...arr)
        }
    }
    return arr
}

//  利用 flat
function flatArr(arr){
    for (let i = 0; i < arr.length; i++) {
        if(Array.isArray(arr[i])){
            arr = arr.flat(1)  // 与 ... 相比就是改成 flat 了
        }
    }
    return arr
}

function flatArr(arr){
    while(arr.some(item=>Array.isArray(item))){  // 更加简洁
        arr = arr.flat()
    }
    return arr
}

// 利用reduce
function flatArr(arr){
    return arr.reduce((pre,cur)=>
        pre.concat(Array.isArray(cur)? flatArr(cur):cur)
    ,[])
}
```

## 数组去重
```
// 利用set
function unique(arr){
    return Array.from(new Set(arr))
}

// 利用splice
function unique(arr){
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if(arr[i] === arr[j]){
                arr.splice(i,1)
                j--
            }
        }
    }
    return arr
}
// filter
function unique(arr){
    return arr.filter((item,index)=>{
        return arr.indexOf(item) === index
    })
}
// 利用indexOf 或者 includes ，开辟一个新数组
function unique(arr){
    let res = []
    for (let item of arr) {
        if(!res.includes(item)){  // if(res.indexOf(item) === -1)
            res.push(item)
        }
    }
    return res
}
// sort
function unique(arr) {
    arr = arr.sort()
    var arrry= [arr[0]];
    for (var i = 1; i < arr.length; i++) {
    	if (arr[i] !== arr[i-1]) {
    		arrry.push(arr[i]);
     	}
     }
    return arrry;
}

```
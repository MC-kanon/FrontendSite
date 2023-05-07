---
metaTitle: Node笔记
meta:
  - name: description
    content: Node的学习笔记，内置模块的使用
  - name: keywords
    content: 前端学习站
---

# 内置模块

+ fs：文件系统模块，用于读写文件和文件夹的操作。

+ path：路径模块，用于处理文件路径。

+ http：HTTP 模块，用于创建 HTTP 服务器和客户端。

+ os：操作系统模块，提供操作系统相关的信息和操作。

+ process：进程模块，提供有关进程的信息和操作。 

+ events：事件模块，提供事件相关的操作。 

  使用内置模块非常简单，只需要使用 require 函数引入即可，例如

  const fs = require('fs')

## fs
引入方法：	const fs = require('fs')     
参数解析	   [链接](https://nodejs.org/docs/latest-v14.x/api/fs.html#fs_fs_access_path_mode_callback)
```js
fs.writeFile(file, data[, options], callback)

file <string> | <Buffer> | <URL> | <integer> filename or file descriptor
data <string> | <Buffer> | <TypedArray> | <DataView> | <Object>
options <Object> | <string>
    encoding <string> | <null> Default: 'utf8'
    mode <integer> Default: 0o666
    flag <string> See support of file system flags. Default: 'w'.
    signal <AbortSignal> allows aborting an in-progress writeFile
callback <Function>
    err <Error>

mode	fs.constants.F_OK | fs.constants.W_OK | fs.constants.R_OK  //   是否存在，可写，可读   
```

```js
文件在fs中的增删改查

覆盖文件内容
fs.writeFile(file, data[, options], err=>{})
fs.writeFile(__dirname+'/node笔记.md','要写入的字符串','utf-8',error=>{})

追加文件内容
fs.appendFile(path, data[, options], err=>{})
const f = fs.appendFile(__dirname + "/count.txt","\n888 999",'utf-8',err => {});

删除文件
fs.unlink(path, callback)
fs.unlink('path/file.txt', (err) => {  
  if (err) throw err;
  console.log('path/file.txt was deleted');
});

读文件内容
fs.readFile(path[, options], (err,data)=>{})
fs.readFile(__dirname+'/node笔记.md','utf-8',(error,data)=>{})

判断是否为文件夹
fs.stat((path[, options], callback))
fs.stat(filePath,(err,stats)=>{
    console.log(stats.isDirectory());
    console.log(stats);
})

判断该路径是否存在，文件是否存在
if (fs.existsSync('/etc/passwd'))
  console.log('The path exists.');

判断文件是否可获取
fs.access(path[, mode], callback)
// Check if the file exists in the current directory.
fs.access(file, constants.F_OK, (err) => {
  console.log(`${file} ${err ? 'does not exist' : 'exists'}`);
});

// Check if the file is readable.
fs.access(file, constants.R_OK, (err) => {
  console.log(`${file} ${err ? 'is not readable' : 'is readable'}`);
});

// Check if the file is writable.
fs.access(file, constants.W_OK, (err) => {
  console.log(`${file} ${err ? 'is not writable' : 'is writable'}`);
});

按行读取文件
const readline = require('readline');
const readInterface = readline.createInterface({
  input: fs.createReadStream('/path/to/yourFilePath'),
  // output: process.stdout,
  // console: false
});
readInterface.on('line', function(line) {
    console.log(line);
});
```

## path

获取方法：const path = require("path")		[path链接](https://nodejs.org/docs/latest-v14.x/api/path.html)

<table border="2">
    <tr>
    	<td>方法</td>
        <td>作用</td>
        <td>实例</td>
        <td>结果</td>
    </tr>
    <tr>
    	<td>path.basename()</td>
        <td>获取文件</td>
        <td>path.basename("c:/a/b/c/d.html")</td>
        <td>d.html</td>
    </tr>
    <tr>
    	<td>path.dirname()</td>
        <td>获取路径</td>
        <td>path.dirname("c:/a/b/c/d.html")</td>
        <td>c:/a/b/c/</td>
    </tr>
    <tr>
    	<td>path.extname()</td>
        <td>获取文件后缀名</td>
        <td>path.extname("c:/a/b/c/d.html")</td>
        <td>.html</td>
    </tr>
    <tr>
    	<td>path.join()</td>
        <td>合并目录</td>
        <td>path.join("a","b","c")</td>
        <td>a\b\c</td>
    </tr>
    <tr>
    	<td rowspan="3">path.resolve()</td>
        <td rowspan="3">解析目录</td>
        <td>path.resolve("a","b","c")</td>
        <td>yourDir\a\b\c</td>
    </tr>
     <tr>
        <td>path.resolve("/a","b","c")</td>
        <td>C:\a\b\c</td>
    </tr>
     <tr>
        <td>path.resolve("a","../b","c")</td>
        <td>yourDir\b\c</td>
    </tr>
</table>

```js
path
const pathStr = path.join('/a', '/b/c', '../../', './d', 'e')
console.log(pathStr)  // \a\b\d\e

const fpath = '/a/b/c/index.html'

const fullName = path.basename(fpath)
console.log(fullName)   // 输出index.html

const nameWithoutExt = path.basename(fpath, '.html')
console.log(nameWithoutExt)   // 输出index

const fext = path.extname(fpath)
console.log(fext)  // 输出.html
```

## http

使用 const http = require("http")		[http链接](https://nodejs.org/docs/latest-v14.x/api/http.html)

<table>
    <tr>
    	<td>request属性or方法</td>
        <td>含义</td>
        <td>response属性or方法</td>
        <td>含义</td>
    </tr>
    <tr>
    	<td>request.aborted</td>
        <td>请求取消的话这个值为 true </td>
    </tr>
    <tr>
    	<td>request.getHeader(name)</td>
        <td>获取请求头的某个属性，request.getHeader('Content-Length')</td>
        <td>response.getHeader(name)</td>
        <td>获取响应头的某个属性，response.getHeader('Content-Length')</td>
    </tr>
    <tr>
    	<td>request.path</td>
        <td>请求路径</td>
    </tr>
    <tr>
    	<td>request.method</td>
        <td>请求方法</td>
    </tr>
    <tr>
    	<td>request.host</td>
        <td>请求域名</td>
    </tr>
    <tr>
    	<td>request.protocol</td>
        <td>请求协议</td>
    </tr>
    <tr>
    	<td>request.removeHeader(name)</td>
        <td>移出某个请求头，request.removeHeader('Content-Type')</td>
        <td>response.removeHeader(name)</td>
        <td>移出某个响应头，response.removeHeader('Content-Type')</td>
    </tr>
    <tr>
    	<td>request.removeHeader(name)</td>
        <td>移出某个请求头，request.removeHeader('Content-Type')</td>
    </tr>
    <tr>
    	<td>request.setHeader(name,value)</td>
        <td>设置请求头request.setHeader('Cookie', ['type=ninja', 'language=javascript']);</td>
        <td>response.setHeader(name,value)</td>
        <td>设置响应头response.setHeader('Content-Type', 'text/html');;</td>
    </tr>
</table>



```js
http
// 导入
const http = require("http");

// 创建web服务器实例
const server = http.createServer();

// 为服务器绑定request事件
server.on("request",(req,res)=>{
    const url = req.url;
    const { query } = url.parse(req.url,true); // 解析get方法的查询的参数，query是一个对象
    res.setHeader("Content-Type","text/html;charset=utf-8");
    //const str = `Your request url is ${req.url},and request method is ${req.method}`;
    if(url === "/" || url ==="/index.html"){
        res.end("This is an index html")
    }else if(url === "/about.html"){
        res.end("<h1>About Page</h1>")
    }
})

// 启动服务器  监听80端口
server.listen(80,()=>{
    console.log("127.0.0.1:80 is running");
})


const http = require("http");
const fs = require("fs");
const path = require("path");
// 创建一个服务器
const server = http.createServer();

// 监听请求
server.on("request", (req, res) => {
  console.log("req.url", req.url);
  console.log("req.method", req.method);
  // console.log("req.headers", req.headers);
  console.log("req.host", req.host);
  // res.setHeader("Content-Type", "text/html;charset=utf-8");
  // if (req.url === "/index.html") {
  //   res.end("This is index.html");
  // } else {
  //   res.end("<h1>This is other html</h1>");
  // }
  // console.log(path.dirname("sdadad/dasda"));
  console.log(__dirname);
  if (req.url.endsWith(".jpg")) {
    let url = req.url;

    fs.readFile(path.join(__dirname, `/public/${url}`), (err, data) => {
      res.end(data);
    });
  }
});

// 监听端口
server.listen(8080, () => {
  console.log("服务器已经启动...");
});

```


# test1 标题

test1

# test2 标题

test2
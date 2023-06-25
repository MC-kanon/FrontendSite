## 基本概念

```
webpack 是一个模块化的打包工具。


loader：webpack本身就认得js和json格式的模块，要想webpack去处理其他模块(.vue,.ts,.jsx)必须使用loader，loader相当于翻译，告诉webpack怎么去处理相应的模块。

plugin：在webpack打包的生命周期中完成其他的任务，使得webpack的功能更加强大。


```



## 基本配置

```
框架就是这样，最后往里面填东西
const { resolve } = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: resolve(__dirname, "dist"),
  },
  // loader 配置
  module: {
    rules: [],
  },
  // plugins 配置
  plugins: [],
};

```



```
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { resolve } = require("path");

module.exports = {
  mode: "development",
  entry: {
    index: "./src/index.js", // 多个入口
    print: "./src/print.js",
  },
  output: {
    filename: "[name].bundle.js", // 对应多个出口
    path: resolve(__dirname, "dist"),
    clean: true, // 在每次构建前清理出口文件夹
  },
  devtool: "inline-source-map", // 开启sourse maps，便于发现问题
  devServer: {
    static: "./dist",
  },
  // loader 配置,webpack 只认识js和json文件，处理其他文件都需要loader作为中介
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          "style-loader", // 处理样式文件
          "css-loader", //加载css文件
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i, // 处理图片信息
        type: "asset/resource", // webpack5 内置的Asset Modules
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i, // 处理字体
        type: "asset/resource",
      },
      {
        test: /\.(csv|tsv)$/i, // 处理 csv 文件
        use: ["csv-loader"],
      },
      {
        test: /\.xml$/i, // 处理 xml 文件
        use: ["xml-loader"],
      },
    ],
  },
  // plugins 配置
  plugins: [
    new HtmlWebpackPlugin({ template: "./index.html", title: "Development" }), // 以./index.html为模板在出口生成index.html文件
    new CleanWebpackPlugin(), // 每次构建前清理 /dist 文件夹
  ],
  optimization: {
    runtimeChunk: "single",
  }, // 有多个入口时，配合webpack-dev-server使用
};

命令
npm i html-webpack-plugin -D    // 自动引入生成的bundle并生成html文件
npm i clean-webpack-plugin -D   // 每次构建前清理 /dist 文件夹
npm i style-loader css-loader -D // 处理style和css
npm install --save-dev csv-loader xml-loader //处理CSV、和XML格式文件
npm install --save-dev webpack-dev-server // 实时重新加载，配合 npx webpack --watch 可以实现修改代码重新刷新浏览器，实时加载的效果
```



## 优化

```
优化方向1：打包后的体积（分包处理，减少包体积，CDN服务器）
	代码分离
	splitChunk
	动态导入(dynamic import)
	懒加载（路由懒加载）
	Prefetch和Preload
	CDN服务器
	TerserPlugin代码压缩
	Tree Shaking实现
	Scope Hoisting
	HTTP压缩
优化方向2：优化打包速度（exclude，cache-loader）
```



## 源码


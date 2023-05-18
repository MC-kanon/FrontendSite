(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{302:function(e,n,t){"use strict";t.r(n);var s=t(14),a=Object(s.a)({},(function(){var e=this,n=e._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h2",{attrs:{id:"基本概念"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#基本概念"}},[e._v("#")]),e._v(" 基本概念")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("webpack 是一个模块化的打包工具。\n\n\nloader：webpack本身就认得js和json格式的模块，要想webpack去处理其他模块(.vue,.ts,.jsx)必须使用loader，loader相当于翻译，告诉webpack怎么去处理相应的模块。\n\nplugin：在webpack打包的生命周期中完成其他的任务，使得webpack的功能更加强大。\n\n\n")])])]),n("h2",{attrs:{id:"基本配置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#基本配置"}},[e._v("#")]),e._v(" 基本配置")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('框架就是这样，最后往里面填东西\nconst { resolve } = require("path");\n\nmodule.exports = {\n  mode: "development",\n  entry: "./src/index.js",\n  output: {\n    filename: "bundle.js",\n    path: resolve(__dirname, "dist"),\n  },\n  // loader 配置\n  module: {\n    rules: [],\n  },\n  // plugins 配置\n  plugins: [],\n};\n\n')])])]),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('const { CleanWebpackPlugin } = require("clean-webpack-plugin");\nconst HtmlWebpackPlugin = require("html-webpack-plugin");\nconst { resolve } = require("path");\n\nmodule.exports = {\n  mode: "development",\n  entry: {\n    index: "./src/index.js", // 多个入口\n    print: "./src/print.js",\n  },\n  output: {\n    filename: "[name].bundle.js", // 对应多个出口\n    path: resolve(__dirname, "dist"),\n    clean: true, // 在每次构建前清理出口文件夹\n  },\n  devtool: "inline-source-map", // 开启sourse maps，便于发现问题\n  devServer: {\n    static: "./dist",\n  },\n  // loader 配置,webpack 只认识js和json文件，处理其他文件都需要loader作为中介\n  module: {\n    rules: [\n      {\n        test: /\\.css$/,\n        use: [\n          "style-loader", // 处理样式文件\n          "css-loader", //加载css文件\n        ],\n      },\n      {\n        test: /\\.(png|svg|jpg|jpeg|gif)$/i, // 处理图片信息\n        type: "asset/resource", // webpack5 内置的Asset Modules\n      },\n      {\n        test: /\\.(woff|woff2|eot|ttf|otf)$/i, // 处理字体\n        type: "asset/resource",\n      },\n      {\n        test: /\\.(csv|tsv)$/i, // 处理 csv 文件\n        use: ["csv-loader"],\n      },\n      {\n        test: /\\.xml$/i, // 处理 xml 文件\n        use: ["xml-loader"],\n      },\n    ],\n  },\n  // plugins 配置\n  plugins: [\n    new HtmlWebpackPlugin({ template: "./index.html", title: "Development" }), // 以./index.html为模板在出口生成index.html文件\n    new CleanWebpackPlugin(), // 每次构建前清理 /dist 文件夹\n  ],\n  optimization: {\n    runtimeChunk: "single",\n  }, // 有多个入口时，配合webpack-dev-server使用\n};\n\n命令\nnpm i html-webpack-plugin -D    // 自动引入生成的bundle并生成html文件\nnpm i clean-webpack-plugin -D   // 每次构建前清理 /dist 文件夹\nnpm i style-loader css-loader -D // 处理style和css\nnpm install --save-dev csv-loader xml-loader //处理CSV、和XML格式文件\nnpm install --save-dev webpack-dev-server // 实时重新加载，配合 npx webpack --watch 可以实现修改代码重新刷新浏览器，实时加载的效果\n')])])]),n("h2",{attrs:{id:"优化"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#优化"}},[e._v("#")]),e._v(" 优化")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("优化方向1：打包后的体积（分包处理，减少包体积，CDN服务器）\n\t代码分离\n\tsplitChunk\n\t动态导入(dynamic import)\n\t懒加载（路由懒加载）\n\tPrefetch和Preload\n\tCDN服务器\n\tTerserPlugin代码压缩\n\tTree Shaking实现\n\tScope Hoisting\n\tHTTP压缩\n优化方向2：优化打包速度（exclude，cache-loader）\n")])])]),n("h2",{attrs:{id:"源码"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#源码"}},[e._v("#")]),e._v(" 源码")])])}),[],!1,null,null,null);n.default=a.exports}}]);
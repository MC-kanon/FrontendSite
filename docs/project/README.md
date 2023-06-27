# 技术栈

## 基础技术栈

+ 核心：Vue3全家桶（Pinia，Vue-Router）
+ 构建工具：Vite
+ 类型检查：Typescript
+ 代码风格：ESLint



## ESLint
主要作用：代码质量检测
安装：npm install eslint --save-dev  
配置文件：`.eslintrc.js`  
在使用npx eslint --init 后，会出现很多用户配置项,根据用户不同的配置，产生不同的配置文件  
一般默认的选择为以下几个  
1. 怎样使用ESLint：To check syntax and find problems 检查语法和查找错误
2. 项目模块化类型：javascript modules（import/export） 使用js模块
3. 项目框架：Vue.js 根据实际情况选择Vue/React
4. 项目中是否使用了TypeScript No/Yes
5. 代码运行环境 - Browser/Node
6. config文件格式 - JavaScript/YAML/JSON
最后可能会让你选择是否用npm安装插件包
忽略文件：.eslintignore里面定义的目录和文件都不会被 ESlint 检查
在注释中也可以选择是否需要ESLint起作用
```javascript 
一个.eslintrc.js文件
module.exports = {
	env: {
		// 环境
		browser: true,
		es2021: true,
	},
	extends: [
		// 拓展
		'eslint:recommended', // 官方拓展
		'plugin:@typescript-eslint/recommended', // 插件拓展
	],
	parser: '@typescript-eslint/parser', // 解析器，本解析器支持Ts
	parserOptions: {
		// 解析器配置选项
		ecmaVersion: 12, // 指定es版本
		sourceType: 'module', // 代码支持es6，使用module
	},
	plugins: [
		// 插件
		'@typescript-eslint',
	],
	rules: {
		// 规则
        "indent": ["error", 4], // 拓展或覆盖extends配置的规则
        "no-console": "off",
	},
};
```

[解决Eslint 和 Prettier 之间的冲突](https://juejin.cn/post/7012160233061482532) 

核心就是考下面两个插件

```
"eslint-config-prettier": "^8.8.0" 关闭eslint中与prettier相互冲突的规则
"eslint-plugin-prettier": "^4.2.1" 赋予eslint用prettier格式化代码的能力。 安装依赖并修改.eslintrc文件
```
[彻底搞懂 ESLint 和 Prettier](https://juejin.cn/post/6909788084666105864#heading-28)  
[ESLint仓库](https://github.com/eslint/eslint)  
[ESLint官网](https://eslint.org/)  

## prettier
主要作用：保持代码风格的一致（可能会与ESLint有冲突，用上面方法解决）  
安装：`npm install prettier --save-dev`  
配置文件：`prettier.config.js`  
```javascript prettier.config.js
module.exports = {
  "printWidth": 80, // 每行代码长度（默认80）
  "tabWidth": 2, // 每个tab相当于多少个空格（默认2）
  "useTabs": false, // 是否使用tab进行缩进（默认false）
  "singleQuote": true, // 使用单引号（默认false）
  "semi": true, // 声明结尾使用分号(默认true)
  "trailingComma": "all", // 多行使用拖尾逗号（默认none）
  "bracketSpacing": true, // 对象字面量的大括号间使用空格（默认true）
  "jsxBracketSameLine": false, // 多行JSX中的>放置在最后一行的结尾，而不是另起一行（默认false）
  "arrowParens": "avoid" // 只有一个参数的箭头函数的参数是否带圆括号（默认avoid）
};
```
忽略文件：`.prettierignore`  
```javascript
/dist/*
.local
.output.js
/node_modules/**

**/*.svg
**/*.sh

/public/*
```
[prettier仓库](https://github.com/prettier/prettier)  
[prettier官网](https://prettier.io/)  

## husky 
作用：一个git hook，可以在执行git commit检验代码是否符合规范  
安装：`npm install husky -D`  
配置文件：
```javascript
修改 package.json 配置
{
  "scripts": {
    "precommit": "eslint src/**/*.js"
  }
}
```
[husky仓库](https://github.com/typicode/husky)  
[husky官网](https://typicode.github.io/husky)  

## lint-staged
场景：针对历史项目使用husky钩子，可能会出现大量的错误，针对这样的痛点，我们需要对增量代码进行检查（即对修改后的文件进行扫描并且使用ESLint检验）  
作用：识别加入到git stage区的文件，与husky钩子配合使用，完成对增量代码进行检查，对之前历史代码不检查。  
安装：npm install -D lint-staged
配置：
```javascript
在package.json中增加配置
"husky": {
  "hooks": {
    "pre-commit": "lint-staged"
  }
},
"lint-staged": {
  "src/**/*.{js,vue}": ["prettier --write", "eslint --cache --fix", "git add"]
}
在进行git commit的时候会触发到git hook进而执行precommit，
而precommit脚本引用了lint-staged配置表明只对git add到 stage 区的文件进行扫描，具体lint-staged做了三件事情：

1. 执行Prettier脚本，这是对代码进行格式化的;
2. 执行eslint --fix操作，进行扫描，对eslint问题进行修复；
3. 上述两项任务完成后将代码重新add进 stage 区，然后执行commit。
```
[lint-staged仓库](https://github.com/okonet/lint-staged)

## commitlint
作用：规范git commit提交的信息
安装：`npm install -D @commitlint/cli @commitlint/config-conventional`  
配置：项目目录下建`commitlint.config.js`  
使用：在.husky 中新建一个commit-msg
```
. "$(dirname "$0")/_/husky.sh"
npx --no-install commitlint --edit "$1"
```
```javascript
module.exports = {
  ignores: [commit => commit.includes('init')], // 忽略带有init的信息
  extends: ['@commitlint/config-conventional'],
  rules: {
    'body-leading-blank': [2, 'always'], // body换行
    'footer-leading-blank': [1, 'always'],  // footer 换行
    'header-max-length': [2, 'always', 108], // 头部的字数
    'subject-empty': [2, 'never'], // <subject> 不能为空 加never 应该表示可以为空(个人理解)
    'type-empty': [2, 'never'],
    'subject-case': [0],
    'type-enum': [
      2,
      'always',
      [
        'feat',  // 新功能
        'fix',  // 修改bug
        'perf', // 性能优化
        'style',  // 代码结构化修改
        'docs', // 文档和注释
        'test', // 测试相关
        'refactor', // 重构
        'ci', // 持续集成
        'chore', // 依赖更新/脚手架配置修改等
        'revert',  // 撤销修改
        'wip', // 正在开发
        'workflow', // 工作流
        'types', // 类型定义文件更改
      ],
    ],
  },
};
```
[commitlint官网](https://commitlint.js.org/#/)  
[commitlint仓库](https://github.com/conventional-changelog/commitlint)  

## commit规范
我们简单采用一个原则：完成一件事情，就提交一次 commit。而不是等到你写完一整天的代码后，才在下班前只提交一次。  
格式：<type>(<scope>): <subject>  
示范： 
fix(DAO):用户查询缺少username属性   
feat(Controller):用户查询接口开发  

```
type(必须)  
用于说明git commit的类别，只允许使用下面的标识。  
feat：新功能（feature）。  
fix/to：修复bug，可以是QA发现的BUG，也可以是研发自己发现的BUG。
fix：产生diff并自动修复此问题。适合于一次提交直接修复问题
to：只产生diff不自动修复此问题。适合于多次提交。最终修复问题提交时使用fix
docs：文档（documentation）相关。
style：格式（不影响代码运行的变动）。
refactor：重构（即不是新增功能，也不是修改bug的代码变动）。
perf：优化相关，比如提升性能、体验。
test：增加测试。
chore：构建过程或辅助工具的变动。
revert：回滚到上一个版本。
merge：代码合并。
sync：同步主线或分支的Bug。
chore: 更新依赖/修改脚手架配置等琐事
workflow: 工作流改进
ci: 持续集成相关
types: 类型定义文件更改
wip: 开发中

scope(可选)
1. scope用于说明 commit 影响的范围，比如数据层、控制层、视图层等等，视项目不同而不同。
2. 例如在Angular，可以是location，browser，compile，compile，rootScope， ngHref，ngClick，ngView等。如果你的修改影响了不止一个scope，你可以使用*代替。


subject(必须)
1. subject是commit目的的简短描述，不超过50个字符。
2. 建议使用中文（感觉中国人用中文描述问题能更清楚一些）。
3. 结尾不加句号或其他标点符号。
```

参考链接  
[【V3 Admin Vite】教程六：前端项目规范](https://juejin.cn/post/7231771821832618043)  
[统一公司的项目规范](https://juejin.cn/post/7241875166887444541#heading-15)  
[写的一般](https://juejin.cn/post/7080871202402598949#heading-1)  
[规范你的前端团队](https://juejin.cn/post/7245674094493171770#heading-11)  
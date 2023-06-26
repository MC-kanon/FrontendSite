# 技术栈

## 基础技术栈

+ 核心：Vue3全家桶（Pinia，Vue-Router）
+ 构建工具：Vite
+ 类型检查：Typescript
+ 代码风格：ESLint



## ESLint

主要作用：代码质量检测

[解决Eslint 和 Prettier 之间的冲突](https://juejin.cn/post/7012160233061482532) 

核心就是考下面两个插件

```
"eslint-config-prettier": "^8.8.0" 关闭eslint中与prettier相互冲突的规则
"eslint-plugin-prettier": "^4.2.1" 赋予eslint用prettier格式化代码的能力。 安装依赖并修改.eslintrc文件
```

## prettier

主要作用：保持代码风格的一致（可能会与ESLint有冲突，用上面方法解决）
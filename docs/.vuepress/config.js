const moment = require("moment-timezone");
const path = require("path");

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        "@public": path.resolve(__dirname, "public"),
      },
    },
  },
  locales: {
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    "/": {
      lang: "zh-CN", // 将会被设置为 <html> 的 lang 属性
      description: "前端学习站点，方便查阅前端知识",
    }
  },
  title: "FrontendSite",
  base: "/FrontendSite/",
  head: [["link", { rel: "icon", href: "./public/favicon.png" }]],
  themeConfig: {
    locales: {
      "/": {
        // 多语言下拉菜单的标题
        selectText: "Languages",
        // 该语言在下拉菜单中的标签
        label: "🇨🇳 简体中文",
        // 编辑链接文字
        editLinkText: "帮助我们完善文档",
        // 最后更新的描述
        lastUpdated: "文档更新于",
        // Service Worker 的配置
        serviceWorker: {
          updatePopup: {
            message: "发现新内容可用.",
            buttonText: "刷新",
          },
        },
        nav: [
          { text: "HTML & CSS", link: "/html&css/" },
          { text: "JavaScript", link: "javascript" },
          { text: "jQuery", link: "/jquery/" },
          // { text: "Node笔记", link: "/node/" },
          { text: "vue", link: "/vue/" },
          { text: "Git", link: "/git/" },
          { text: "Typescript", link: "/typescript/" },
          // { text: "构建工具", items: [
          //     { text: 'Webpack', link:'/webpack/' },
          //     { text: 'rollup', link:'/rollup/' },
          //     { text: 'Vite', link:'/vite/' }
          // ] },
          { text: "前端学习资源", link: "/resources/" },
          { text: "快捷键与编程技巧", link: "/skills/" },
          { text: "项目规范", link: "/project/" },
          // { text: "支持我们", link: "/contribute/" },
          { text: "GitHub", link: "https://github.com/MC-kanon/FrontendSite/" },
        ],
      },
    },
    // sidebar: "auto",
    sidebar: "auto",
    // 假如你的文档仓库和项目本身不在一个仓库：
    docsRepo: "MC-kanon/FrontendSite",
    // 假如文档不是放在仓库的根目录下：
    docsDir: "docs",
    // 假如文档放在一个特定的分支下：
    docsBranch: "main",
    // 默认是 false, 设置为 true 来启用
    editLinks: true,
  },
  plugins: {
    "@vuepress/last-updated": {
      transformer: (timestamp, lang) => {
        if (lang === "zh-CN") {
          return moment(timestamp).tz("Asia/Shanghai").locale(lang).format("lll");
        } else {
          return moment(timestamp).utc().locale(lang).format("lll");
        }
      },
    },
    "vuepress-plugin-clean-urls": {
      normalSuffix: "/",
      indexSuffix: "/",
      notFoundPath: "/404.html",
    },
    sitemap: {
      hostname: "https://MC-kanon.github.io/",
      dateFormatter: (time) => new moment(time, "lll").toISOString(),
    },
    seo: {
      siteTitle: (_, $site) => $site.title,
      title: ($page) => $page.title,
      description: ($page) => $page.frontmatter.description,
      tags: ($page) => $page.frontmatter.tags,
      twitterCard: (_) => "/favicon.png",
      type: ($page) =>
        ["articles", "posts", "blog"].some((folder) => $page.regularPath.startsWith("/" + folder))
          ? "article"
          : "website",
      url: (_, $site, path) => "https://MC-kanon.github.io/" + path,
      image: ($page, $site) => $page.frontmatter.image && ($site.themeConfig.domain || "") + $page.frontmatter.image,
      publishedAt: ($page) => $page.frontmatter.date && new Date($page.frontmatter.date),
      modifiedAt: ($page) => $page.lastUpdated && new Date($page.lastUpdated),
    },
    "vuepress-plugin-smooth-scroll": {},
    "vuepress-plugin-baidu-autopush": {},
  },
  dest: "./dist",
};

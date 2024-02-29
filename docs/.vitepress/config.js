// const head = require('./config/head')
// const nav = require('./config/nav')
import { defineConfig } from 'vitepress'
import head from './config/head'
import nav from './config/nav'
// 基于 vite/vitepress 的 markdown 代码块预览插件：https://www.npmjs.com/package/vite-plugin-markdown-preview
import MarkdownPreview from 'vite-plugin-markdown-preview'

import socialLinks from './config/socialLinks'
// const socialLinks = require('./config/socialLinks')

export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/hpw-vitepress-community/' : '/',

  lang: 'zh-CN',
  title: 'HuangPWの社区',
  description: 'HPW茂茂的成长之路，包含前端常用知识、源码阅读笔记、各种奇淫技巧、日常提效工具等，书山有路勤为径，学海无涯苦作舟。',
  head,
  themeConfig: {
    logo: '/logo.png',
    nav,
    socialLinks,

    lastUpdated: true,
    lastUpdatedText: '上次更新',
    // 用于自定义返回顶部按钮的标签，该标签仅在移动端视图中显示。
    returnToTopLabel: '返回顶部',
    // 用于自定义深色模式开关标签，该标签仅在移动端视图中显示。
    darkModeSwitchLabel: '外观',

    cleanUrls: true, // 当设置为 true 时，VitePress 将从 URL 中删除 .html 后缀。 访问 /foo 时提供 /foo.html
    markdown: {
      i18nRouting: false,
      lineNumbers: true, // 代码块启用行号
    },
    /* 右侧大纲配置 */
    outline: {
      level: 'deep',
      label: '本页目录',
    },
    // 上下翻页
    docFooter: {
      prev: '上一篇',
      next: '下一篇',
    },
  },
  vite: {
    plugins: [MarkdownPreview()],
  },
})

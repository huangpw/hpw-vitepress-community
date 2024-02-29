const head = require('./config/head')
const nav = require('./config/nav')

export default {
  base: process.env.NODE_ENV === 'production' ? '/hpw-vitepress-community/' : '/',

  lang: 'zh-CN',
  title: 'HuangPWの社区',
  description: 'HPW茂茂的成长之路，包含前端常用知识、源码阅读笔记、各种奇淫技巧、日常提效工具等，书山有路勤为径，学海无涯苦作舟。',
  head,
  themeConfig: {
    logo: '/logo.png',
    nav,
  },
}

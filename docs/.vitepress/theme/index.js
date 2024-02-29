import './global.scss';

import DefaultTheme from 'vitepress/theme';

import NavCard from './components/NavCard/MNavLinks.vue';

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    // 注册全局组件
    app.component('NavCard', NavCard)
  },
}

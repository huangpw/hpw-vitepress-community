---
layout: doc
outline: 2
---

<script setup>
// 引入组件
// import MNavLinks from '../components/MNavLinks.vue'
// 引入数据源
import { NAV_DATA } from './data'
</script>

# 编程社区

<NavCard v-for="{title, items} in NAV_DATA" :title="title" :items="items" />

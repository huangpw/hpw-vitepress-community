<script setup>
// 引入组件
// import MNavLinks from '../components/MNavLinks.vue'
// 引入数据源
import { NAV_DATA } from './data'
</script>

# HTML&CSS

<NavCard v-for="{title, items} in NAV_DATA" :title="title" :items="items" />

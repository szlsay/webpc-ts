<script lang="ts" setup>
import topNavVue from './components/top-nav.vue'
import topHeaderVue from './components/top-header.vue'
import layoutFooterVue from './components/layout-footer.vue'
import headerStickyVue from './components/header-sticky.vue'
import { useStore } from '@/stores'
const { categoryStore } = useStore()
categoryStore.getCategory()
</script>

<template>
  <!-- 顶部通栏 -->
  <topNavVue />
  <topHeaderVue />
  <headerStickyVue />
  <main>
    <!-- 二级路由 -->
    <router-view></router-view>
  </main>
  <layoutFooterVue />
</template>
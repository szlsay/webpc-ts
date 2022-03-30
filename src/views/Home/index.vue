<script lang="ts" setup>
import homeCategoryVue from './components/home-category.vue'
import homeBannerVue from './components/home-banner.vue'
import homeNewVue from './components/home-new.vue'
import homeHotVue from './components/home-hot.vue'
import homeBrandVue from './components/home-brand.vue'
</script>

<template>
  <div class="page-home">
    <div class="home-entry">
      <div class="container">
        <!-- 左侧分类 -->
        <homeCategoryVue />
        <!-- banner轮播图 -->
        <homeBannerVue />
        <homeNewVue />
        <homeHotVue />
        <homeBrandVue />
      </div>
    </div>
  </div>
</template>

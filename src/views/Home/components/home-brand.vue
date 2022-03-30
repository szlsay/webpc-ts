<script lang="ts" setup>
import homePannelVue from './home-pannel.vue'
import { useStore } from '@/stores'
const { homeStore } = useStore()
homeStore.getBrandList()
</script>

<template>
  <homePannelVue title="热门品牌" sub-title="国际经典 品质保障">
    <template #main>
      <ul class="brand-list">
        <li v-for="item in homeStore.brandList" :key="item.id">
          <img v-imgLazy="item.picture" alt="" />
        </li>
      </ul>
    </template>
  </homePannelVue>
</template>

<style lang="less">
.brand-list {
  display: flex;
  li {
    flex: 1;
    padding: 10px;
  }
}
</style>

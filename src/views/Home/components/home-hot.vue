<script lang="ts" setup>
import homePannelVue from './home-pannel.vue'
import { useStore } from '@/stores'
const { homeStore } = useStore()
homeStore.getHotList()
</script>

<template>
  <homePannelVue title="人气推荐" sub-title="新鲜出炉 品质靠谱">
    <template #right> </template>
    <template #main>
      <ul ref="pannel" class="goods-list">
        <li v-for="item in homeStore.hotGoodList" :key="item.id">
          <RouterLink to="/">
            <img :src="item.picture" alt="" />
            <p class="name">{{ item.title }}</p>
            <p class="desc">{{ item.alt }}</p>
          </RouterLink>
        </li>
      </ul>
    </template>
  </homePannelVue>
</template>

<style scoped lang='less'>
@import '@/styles/var.less';
.goods-list {
  display: flex;
  justify-content: space-between;
  height: 406px;
  li {
    width: 306px;
    height: 406px;
    background: #f0f9f4;
    img {
      width: 306px;
      height: 306px;
    }
    p {
      font-size: 22px;
      padding-top: 12px;
      text-align: center;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }
    .price {
      color: @priceColor;
    }
  }
}
</style>
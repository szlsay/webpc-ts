<script lang="ts" setup>
import { useStore } from '@/stores'
import { watchEffect } from 'vue'
import { useRoute } from 'vue-router'

const props = defineProps<{
  type: 1 | 2 | 3
}>()


const { goodStore } = useStore()
const route = useRoute()
watchEffect(() => {
  goodStore.getHot(route.params.id, props.type)
})

// title枚举
const TitleType = {
  1: '24小时热榜',
  2: '周热榜',
  3: '月度热榜'
}
</script>


<template>
  <div class="goods-hot">
    <h3>{{ TitleType[type] }}</h3>
    <!-- 商品区块 -->
    <RouterLink
      :to="`/good/${good.id}`"
      class="goods-item"
      v-for="good in goodStore.hotData"
      :key="good.id"
    >
      <img :src="good.picture" alt="" />
      <p class="name ellipsis">{{ good.name }}</p>
      <p class="desc ellipsis">{{ good.desc }}</p>
      <p class="price">&yen;{{ good.price }}</p>
    </RouterLink>
  </div>
</template>
<style scoped lang="less">
@import '@/styles/var.less';
.goods-hot {
  h3 {
    height: 70px;
    background: @helpColor;
    color: #fff;
    font-size: 18px;
    line-height: 70px;
    padding-left: 25px;
    margin-bottom: 10px;
    font-weight: normal;
  }
  .goods-item {
    display: block;
    padding: 20px 30px;
    text-align: center;
    background: #fff;
    img {
      width: 160px;
      height: 160px;
    }
    p {
      padding-top: 10px;
    }
    .name {
      font-size: 16px;
    }
    .desc {
      color: #999;
      height: 29px;
    }
    .price {
      color: @priceColor;
      font-size: 20px;
    }
  }
}
</style>

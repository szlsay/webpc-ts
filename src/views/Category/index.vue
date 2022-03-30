<script lang="ts" setup>
import { useStore } from '@/stores'
import { watchEffect } from 'vue'
import { onBeforeRouteLeave, useRoute } from 'vue-router'
const { categoryStore } = useStore()
const route = useRoute()
const stop = watchEffect(() => {
  categoryStore.getCategoryById(route.params.id)
})
onBeforeRouteLeave(() => stop())
</script>

<template>
  <div class="top-category">
    <div class="container">
      <!-- 所有二级分类 -->
      <div class="sub-list">
        <h3>全部分类</h3>
        <ul>
          <li
            v-for="item in categoryStore.categoryDetail.children"
            :key="item.id"
          >
            <a href="javascript:;">
              <img :src="item.picture" />
              <p>{{ item.name }}</p>
            </a>
          </li>
        </ul>
      </div>
      <!-- 分类关联商品 -->
      <div
        class="ref-goods"
        v-for="item in categoryStore.categoryDetail.children"
        :key="item.id"
      >
        <div class="head">
          <h3>- {{ item.name }} -</h3>
          <XtxMore to="/" />
        </div>
        <div class="body">
          <RouterLink
            to="/"
            class="goods-item"
            v-for="good in item.goods"
            :key="good.id"
          >
            <img :src="good.picture" alt="" />
            <p class="name ellipsis">{{ good.name }}</p>
            <p class="desc ellipsis">{{ good.desc }}}</p>
            <p class="price">&yen;{{ good.price }}</p>
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped lang="less">
@import '@/styles/var.less';
.top-category {
  h3 {
    font-size: 28px;
    color: #666;
    font-weight: normal;
    text-align: center;
    line-height: 100px;
  }
  .sub-list {
    margin-top: 20px;
    background-color: #fff;
    ul {
      display: flex;
      padding: 0 32px;
      flex-wrap: wrap;
      li {
        width: 168px;
        height: 160px;
        a {
          text-align: center;
          display: block;
          font-size: 16px;
          img {
            width: 100px;
            height: 100px;
          }
          p {
            line-height: 40px;
          }
          &:hover {
            color: @xtxColor;
          }
        }
      }
    }
  }
  .ref-goods {
    background-color: #fff;
    margin-top: 20px;
    position: relative;
    .head {
      .xtx-more {
        position: absolute;
        top: 20px;
        right: 20px;
      }
      .tag {
        text-align: center;
        color: #999;
        font-size: 20px;
        position: relative;
        top: -20px;
      }
    }
    .body {
      display: flex;
      justify-content: space-around;
      padding: 0 40px 30px;
    }
  }
}
.goods-item {
  display: block;
  width: 220px;
  padding: 20px 30px;
  text-align: center;
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
</style>
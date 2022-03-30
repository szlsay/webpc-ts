<script lang="ts" setup>
import { useStore } from '@/stores'
import { CartSku } from '@/types/cart'
import { useRouter } from 'vue-router'
const { cartStore } = useStore()
// 单选
const checkChange = (selected: boolean, curItem: CartSku) => {
  cartStore.singleCheck({
    skuId: curItem.skuId,
    count: curItem.count,
    selected,
  })
}

// 多选
const allCheckChange = (selected: boolean) => {
  cartStore.allCheck(selected)
}
// 删除
const delCart = (skuId: string) => {
  cartStore.delCart(skuId)
}
// 下单结算
const router = useRouter()
const goSettle = () => {
  router.push('/settle')
}
</script>

<template>
  <div class="xtx-cart-page">
    <div class="container m-top-20">
      <div class="cart">
        <table>
          <thead>
            <tr>
              <th width="120">
                <CheckBox
                  :model-value="cartStore.allSelected"
                  @change="allCheckChange"
                  >全选</CheckBox
                >
              </th>
              <th width="400">商品信息</th>
              <th width="220">单价</th>
              <th width="180">数量</th>
              <th width="180">小计</th>
              <th width="140">操作</th>
            </tr>
          </thead>
          <!-- 有效商品 -->
          <tbody>
            <tr v-for="i in cartStore.cartList" :key="i.id">
              <td>
                <CheckBox
                  :model-value="i.selected"
                  @change="checkChange($event, i)"
                />
              </td>
              <td>
                <div class="goods">
                  <RouterLink to="/"
                    ><img :src="i.picture" alt=""
                  /></RouterLink>
                  <div>
                    <p class="name ellipsis">{{ i.name }}</p>
                  </div>
                </div>
              </td>
              <td class="tc">
                <p>&yen;{{ i.nowPrice }}</p>
                <p>比加入时降价 <span class="red">&yen;20.00</span></p>
              </td>
              <td class="tc">
                <CheckNumber :is-label="false" v-model="i.count" />
              </td>
              <td class="tc">
                <p class="f16 red">
                  &yen;{{ (Number(i.nowPrice) * i.count).toFixed(2) }}
                </p>
              </td>
              <td class="tc">
                <p>
                  <a class="green" href="javascript:;" @click="delCart(i.skuId)"
                    >删除</a
                  >
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- 操作栏 -->
      <div class="action">
        <div class="batch">
          共 {{ cartStore.allCount }} 件商品，已选择
          {{ cartStore.selectedCount }} 件，商品合计：
          <span class="red">¥{{ cartStore.selectedPrice.toFixed(2) }}</span>
        </div>
        <div class="total">
          <Button type="primary" @click="goSettle">下单结算</Button>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="less">
@import '@/styles/var.less';
.tc {
  text-align: center;
  .xtx-numbox {
    margin: 0 auto;
    width: 120px;
  }
}
.red {
  color: @priceColor;
}
.green {
  color: @xtxColor;
}
.f16 {
  font-size: 16px;
}
.goods {
  display: flex;
  align-items: center;
  img {
    width: 100px;
    height: 100px;
  }
  > div {
    width: 280px;
    font-size: 16px;
    padding-left: 10px;
    .attr {
      font-size: 14px;
      color: #999;
    }
  }
}
.action {
  display: flex;
  background: #fff;
  margin-top: 20px;
  height: 80px;
  align-items: center;
  font-size: 16px;
  justify-content: space-between;
  padding: 0 30px;
  .xtx-checkbox {
    color: #999;
  }
  .batch {
    a {
      margin-left: 20px;
    }
  }
  .red {
    font-size: 18px;
    margin-right: 20px;
    font-weight: bold;
  }
}
.tit {
  color: #666;
  font-size: 16px;
  font-weight: normal;
  line-height: 50px;
}
.xtx-cart-page {
  .cart {
    background: #fff;
    color: #666;
    table {
      border-spacing: 0;
      border-collapse: collapse;
      line-height: 24px;
      th,
      td {
        padding: 10px;
        border-bottom: 1px solid #f5f5f5;
        &:first-child {
          text-align: left;
          padding-left: 30px;
          color: #999;
        }
      }
      th {
        font-size: 16px;
        font-weight: normal;
        line-height: 50px;
      }
    }
  }
}
</style>

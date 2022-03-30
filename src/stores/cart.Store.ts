import { defineStore } from 'pinia'
import request from '@/utils/request'
import type { ApiResponse } from '@/types/data'
import type { CartList, CartSku } from '@/types/cart'
import { getCart, setCart } from '@/utils/ls'

const useCartStore = defineStore({
  id: 'cart',
  state: () => ({
    cartList: (getCart() || []) as CartList,
  }),
  actions: {
    // 获取最新购物车列表
    async findCartList() {
      const res = await request.get<ApiResponse<CartList>>('/member/cart')
      this.cartList = res.data.result
      setCart(this.cartList)
    },
    // 加入购物车
    async insertCart(good: CartSku) {
      await request.post('/member/cart', good)
      this.findCartList()
    },
    // 单选
    async singleCheck(good: CartSku) {
      await request.put('/member/cart/' + good.skuId, good)
      this.findCartList()
    },
    // 全选
    async allCheck(selected: boolean) {
      await request.put('/member/cart/selected', {
        selected,
        ids: this.cartList.map((item) => item.skuId),
      })
      this.findCartList()
    },
    // 删除
    async delCart(skuId: string) {
      await request.delete('/member/cart', {
        data: {
          ids: [skuId],
        },
      })
      this.findCartList()
    },
  },
  getters: {
    allPrice(): number {
      return this.cartList.reduce((a, c) => {
        return a + c.count * c.price
      }, 0)
    },
    // 总数
    allCount(): number {
      return this.cartList.reduce((a, c) => a + c.count, 0)
    },
    // 选中项count之和
    selectedCount(): number {
      return this.cartList
        .filter((item) => item.selected)
        .reduce((a, c) => a + c.count, 0)
    },
    // 选中项的钱数之和
    selectedPrice(): number {
      return this.cartList
        .filter((item) => item.selected)
        .reduce((a, c) => a + c.count * c.nowOriginalPrice, 0)
    },
    // 全选
    allSelected(): boolean {
      return this.cartList.every((item) => item.selected === true)
    },
  },
})

export default useCartStore

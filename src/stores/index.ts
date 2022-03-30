import useCategoryStore from './category.Store'
import useHomeStore from './home.Store'
import useLoginStore from './login.Store'
import useGoodStore from './good.Store'
import useCartStore from './cart.Store'
import useSettleStore from './settle.Store'
export const useStore = () => {
  return {
    categoryStore: useCategoryStore(),
    homeStore: useHomeStore(),
    loginStore: useLoginStore(),
    goodStore: useGoodStore(),
    cartStore: useCartStore(),
    settleStore: useSettleStore()
  }
}
// 购物车
export type CartItem = {
  attrsText: string
  count: number
  id: string
  name: string
  nowOriginalPrice: number
  nowPrice: number
  picture: string
  postFee: number
  price: number
  selected: boolean
  skuId: string
}

export type CartList = CartItem[]

// 购物车规格
type Sku = {
  inventory: number
  oldPrice: string
  price: string
  skuId: string
  specsText: string
}

// 加入购物车
export type CartSku = {
  skuId: string
  count: number
  selected: boolean
}

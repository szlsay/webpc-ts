import type { Good } from "./good"

// 结算
export type Summary = {
  discountPrice: number
  goodsCount: number
  postFee: number
  totalPayPrice: number
  totalPrice: number
}

export type Address = {
  address: string
  addressTags: string
  cityCode: string
  contact: string
  countyCode: string
  fullLocation: string
  id: string
  isDefault: number
  postalCode: string
  provinceCode: string
  receiver: string
}

export type Settle = {
  goods: Good[]
  summary: Summary
  userAddresses: Address[]
}

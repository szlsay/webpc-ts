// 详情对象类型
export type Property = {
  name: string
  value: string
}
export type Good = {
  id: string
  name: string
  desc: string
  oldPrice: string
  price: number
  collectCount: number
  commentCount: number
  salesCount: number
  picture: string
  payPrice: number
  attrsText: string
  count: number
  totalPrice: number
  totalPayPrice: number
  brand: {
    name: string
  },
  mainPictures: string[]
  skus: []
  details: {
    properties: Property[]
    pictures: string[]
  }
}
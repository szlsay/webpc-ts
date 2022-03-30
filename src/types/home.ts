import { GoodItem } from './category'

// 轮播图类型
export type BannerItem = {
  hrefUrl: string
  id: string
  imgUrl: string
}

export type BannerList = BannerItem[]

// 新鲜好物类型

export type NewGoodList = GoodItem[]

// 热门推荐类型

export type HotGoodList = GoodItem[]

// 品牌类型
export type BrandItem = {
  id: string
  picture: string
}
export type BrandList = BrandItem[]

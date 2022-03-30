// 分类数据单项类型
export type GoodItem = {
  desc: string
  id: string
  name: string
  picture: string
  price: string
  title: string
  alt: string
}

export type ChildrenItem = {
  id: string
  name: string
  picture: string
  goods: GoodItem[]
}

export type CategoryItem = {
  id: string
  name: string
  children: ChildrenItem[]
  goods: GoodItem[]
}

// 分类数据列表类型
export type CategoryList = CategoryItem[]

// 分类对象类型
export type CategoryDetail = {
  children: ChildrenItem[]
  id: string
  name: string
  picture: string
}

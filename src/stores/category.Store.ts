import { defineStore } from 'pinia'
import request from '@/utils/request'
import type { ApiResponse } from '@/types/data'
import type { CategoryList, CategoryDetail } from '@/types/category'

const useCategoryStore = defineStore({
  id: 'category',
  state: () => ({
    categoryList: [] as CategoryList,
    categoryDetail: {} as CategoryDetail,
  }),
  getters: {
    filterList(state): CategoryList {
      return state.categoryList.map((item) => ({
        id: item.id,
        name: item.name,
        children: item.children.slice(0, 2),
        goods: item.goods,
      }))
    },
  },
  actions: {
    async getCategory() {
      const res = await request.get<ApiResponse<CategoryList>>(
        '/home/category/head'
      )
      this.categoryList = res.data.result
    },
    async getCategoryById(id: string | string[]) {
      const res = await request.get<ApiResponse<CategoryDetail>>('/category', {
        params: {
          id,
        },
      })
      this.categoryDetail = res.data.result
    },
  },
})

export default useCategoryStore

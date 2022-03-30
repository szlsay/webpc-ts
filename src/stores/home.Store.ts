import { defineStore } from 'pinia'
import request from '@/utils/request'
import type { ApiResponse } from '@/types/data'
import type { BannerList, NewGoodList, HotGoodList, BrandList } from '@/types/home'

const useHomeStore = defineStore({
  id: 'home',
  state: () => ({
    bannerList: [] as BannerList,
    newGoodList: [] as NewGoodList,
    hotGoodList: [] as HotGoodList,
    brandList: [] as BrandList
  }),
  actions: {
    async getBannerList() {
      const res = await request.get<ApiResponse<BannerList>>('/home/banner')
      this.bannerList = res.data.result
    },
    async getNewList() {
      const res = await request.get<ApiResponse<NewGoodList>>('/home/new')
      this.newGoodList = res.data.result
    },
    async getHotList() {
      const res = await request.get<ApiResponse<NewGoodList>>('/home/hot')
      this.hotGoodList = res.data.result
    },
    async getBrandList() {
      const res = await request.get<ApiResponse<BrandList>>('/home/brand?limit=4')
      this.brandList = res.data.result
    }
  }
})

export default useHomeStore

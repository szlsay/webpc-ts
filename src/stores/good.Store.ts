import { defineStore } from 'pinia'
import request from '@/utils/request'
import type { ApiResponse } from '@/types/data'
import type { Good } from '@/types/good'

type RouteId = string | string[]

const useGoodStore = defineStore({
  id: 'good',
  state: () => ({
    good: {} as Good,
    hotData: [] as Good[]
  }),
  actions: {
    async getGood(id: RouteId) {
      const res = await request.get<ApiResponse<Good>>('/goods', {
        params: {
          id
        }
      })
      this.good = res.data.result
    },
    async getHot(id: RouteId, type: number) {
      const res = await request.get<ApiResponse<Good[]>>('/goods/hot', {
        params: {
          id,
          type,
          limit: 3
        }
      })
      this.hotData = res.data.result
    }
  }
})

export default useGoodStore

import { defineStore } from 'pinia'
import request from '@/utils/request'
import type { ApiResponse } from '@/types/data'
import type { Address, Settle } from '@/types/settle'

const useSettleStore = defineStore({
  id: 'settle',
  state: () => ({
    settleInfo: {} as Settle,
    defaultAddress: {} as Address
  }),
  actions: {
    async getSettleInfo() {
      const res = await request.get<ApiResponse<Settle>>('/member/order/pre')
      this.settleInfo = res.data.result
      this.defaultAddress = this.settleInfo.userAddresses[0]
    }
  }
})

export default useSettleStore

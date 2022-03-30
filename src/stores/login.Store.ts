import { defineStore } from 'pinia'
import request from '@/utils/request'
import type { ApiResponse } from '@/types/data'
import type { UseInfo, LoginForm } from '@/types/login'
import { getToken, setToken, removeToken } from '@/utils/ls'

const useLoginStore = defineStore({
  id: 'login',
  state: () => ({
    userInfo: getToken() || {} as UseInfo
  }),
  actions: {
    async login(form: LoginForm) {
      const res = await request.post<ApiResponse<UseInfo>>('/login', {
        ...form
      })
      this.userInfo = res.data.result
      setToken(this.userInfo)
    },
    loginOut() {
      this.userInfo = {} as UseInfo
      removeToken()
    }
  }
})

export default useLoginStore

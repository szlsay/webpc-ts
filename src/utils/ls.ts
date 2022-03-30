import type { UseInfo } from '@/types/login'
import type { CartList } from '@/types/cart'

const TOKEN_KEY = 'rabbit-token'
const CART_KEY = 'rabbit-cart'

// 获取 token
export function getToken(): UseInfo {
  return JSON.parse(localStorage.getItem(TOKEN_KEY) || '{}')
}

// 设置 token
export function setToken(data: UseInfo): void {
  localStorage.setItem(TOKEN_KEY, JSON.stringify(data))
}

// 移除 token
export function removeToken(): void {
  localStorage.removeItem(TOKEN_KEY)
}

// 判断是否登录（授权）
export function hasToken(): boolean {
  return !!getToken().token
}

// 获取 购物车
export function getCart(): CartList {
  return JSON.parse(localStorage.getItem(CART_KEY)! || '[]')
}

// 设置 购物车
export function setCart(data: CartList): void {
  localStorage.setItem(CART_KEY, JSON.stringify(data))
}

// 移除 购物车
export function removeCart(): void {
  localStorage.removeItem(CART_KEY)
}

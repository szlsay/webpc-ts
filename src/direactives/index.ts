import defaltImg from '@/assets/images/200.png'
import { useIntersectionObserver } from '@vueuse/core'
import type { App } from 'vue'
export default {
  install(app: App) {
    app.directive('imgLazy', (el, binding) => {
      const { stop } = useIntersectionObserver(
        el,
        ([{ isIntersecting }], observerElement) => {
          if (isIntersecting) {
            // 当图片url无效加载失败的时候使用默认图片替代
            el.onerror = function () {
              el.src = defaltImg
            }
            el.src = binding.value
            stop()
          }
        },
        { threshold: 0 }
      )
    })
  },
}

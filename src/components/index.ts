
import type { App } from 'vue'
import Slider from './Slider/index.vue'
import Skeleton from './Skeleton/index.vue'
import More from './More/index.vue'
import ImageView from './ImageView/index.vue'
import Sku from './Sku/index.vue'
import CheckNumber from './Number/index.vue'
import Button from './Button/index.vue'
import CheckBox from './CheckBox/index.vue'

export default {
  install(app: App) {
    app.component('Slider', Slider)
    app.component('Skeleton', Skeleton)
    app.component('XtxMore', More)
    app.component('ImageView', ImageView)
    app.component('Sku', Sku)
    app.component('CheckNumber', CheckNumber)
    app.component('Button', Button)
    app.component('CheckBox', CheckBox)
  }
}

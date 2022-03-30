import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import '@/styles/common.less'
import componentPlugin from '@/components'
import directivePlugin from '@/direactives'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(componentPlugin).use(directivePlugin)

app.mount('#app')

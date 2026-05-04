import {createApp} from 'vue'
import {createPinia} from 'pinia'
import {lazyPlugin} from '@/directives'
import {componentsPlugin} from '@/components'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import App from './App.vue'
import router from './router'
import '@/styles/common.scss'

const app = createApp(App)

const pinia = createPinia();
//注册持久化
pinia.use(piniaPluginPersistedstate)


app.use(createPinia())
app.use(router)
app.use(lazyPlugin)
app.use(componentsPlugin)

app.mount('#app')



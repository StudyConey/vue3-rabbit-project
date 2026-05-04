import {createApp} from 'vue'
import {createPinia} from 'pinia'
import {lazyPlugin} from '@/directives'
import {componentsPlugin} from '@/components'

import App from './App.vue'
import router from './router'
import '@/styles/common.scss'



const app = createApp(App)


app.use(createPinia())
app.use(router)
app.use(lazyPlugin)
app.use(componentsPlugin)

app.mount('#app')



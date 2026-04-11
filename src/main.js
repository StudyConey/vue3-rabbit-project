import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import {getCategory} from "@/apis/testApi.js";
import '@/styles/common.scss'

const app = createApp(App)

//测试axios
// getCategory().then(res=>{
//     console.log(res)
// })
app.use(createPinia())
app.use(router)

app.mount('#app')

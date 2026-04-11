## Vue 3 项目

##  1. elements

安装

```sh
npm install element-plus --save
```

```sh
npm install -D unplugin-vue-components unplugin-auto-import
```

### 1.1  定制主题色

安装scss

```sh
npm i sass -D
```

准备定制样式文件

```sh
styles/element/index.scss
```

引入vite.config.js

```js
 css: {
        preprocessorOptions: {
            scss: {
                // 自动导入定制化样式文件进行样式覆盖
                additionalData: `@use "@/styles/index.scss" as *;`,
            }
        }
    }
```

```js
        Components({
            resolvers: [
                ElementPlusResolver({importStyle: "sass"}),
            ]
        }),
```

## 2. axios

```sh
npm i axios
```

引入axios

```js
import axios from "axios";

const httpInstance = axios.create({
    baseURL: 'https://pcapi-xiaotuxian-front-devtest.itheima.net/home/category/head',
    timeout: 5000
})

// axios请求拦截器
httpInstance.interceptors.request.use(config => {
    return config
}, e => Promise.reject(e))

// axios响应式拦截器
httpInstance.interceptors.response.use(res => res.data, e => {
    return Promise.reject(e)
})

export default httpInstance;
```



## 3. Pinia

解决重复请求

store.js

```js
export const useCategoryStore = defineStore('category', () => {
    //导航列表的数据管理
    const categoryList = ref();
    /**
     * 获取导航数据方法
     * @returns {Promise<void>}
     */
    const getCategory = async () => {
        const res = await getCategoryAPI();
        categoryList.value = res.result;
    }

    return {
        categoryList,
        getCategory
    }
})
```

在父组件中 onMounted引入

**触发action**

```js
const categoryStore = useCategoryStore();
onMounted(() => useCategoryStore().getCategory())
```

在子组件中

```js
//使用pinia中的数据
const categoryStore = useCategoryStore();
```

```vue
<li class="home" v-for="(item,index) in categoryStore.categoryList" :key="item.id">
  <RouterLink to="/">{{item.name}}</RouterLink>
</li>
```

a

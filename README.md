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

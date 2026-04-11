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



## 4. 部分页面实现

### 4.1 轮播图

如果后端接口是图片地址是*http*的话，控制台可能会报错

```
 was loaded over a secure connection, but the file at '
```

在后面加入切片强行加s

```ue
      <img :src="item.imgUrl.replace('http:', '')" alt="">
```



### 4.2 懒加载

在main.js中加入

```js
//定义全局指令
app.directive('img-lazy',{
    /**
     * @param el 绑定指令的那个元素 img
     * @param binding.value 指令等于后面绑定的表达式 图片url
     */
    mounted(el,binding){
        console.log(el,binding.value);
        //监听 
        useIntersectionObserver(
            el,
            ([{isIntersecting}])=>{
                console.log(isIntersecting); //布尔值
                if(isIntersecting){
                    el.src=binding.value
                }
            }
        )
    }
})
```

```html
<img v-img-lazy="item.picture" :src="item.picture" alt="" />
```

优化 作为插件使用

```js
//定义懒加载插件

import {useIntersectionObserver} from "@vueuse/core";

export const lazyPlugin = {
    install(app) {
        //懒加载指令逻辑
        //定义全局指令
        app.directive('img-lazy', {
            /**
             * @param el 绑定指令的那个元素 img
             * @param binding.value 指令等于后面绑定的表达式 图片url
             */
            mounted(el, binding) {
                console.log(el, binding.value);
                //监听
                const {stop} = useIntersectionObserver(
                    el,
                    ([{isIntersecting}]) => {
                        console.log(isIntersecting); //布尔值
                        if (isIntersecting) {
                            el.src = binding.value
                            stop()
                        }
                    }
                )
            }
        })
    }
}
```

在main.js进行注册

```js
import {lazyPlugin} from '@/directives'
app.use(createPinia())
```



## 5. 组件封装

把可复用的结构只写一次，把可能发生变化的部分抽象成组件参数(**props**/**插槽**)

- 纯文本可用props
- 复杂模板可用插槽

思想：要把显示的数据对象设计成props参数

### 5.1 创建props数据对象

```vue
defineProps({
  good: {
    type: Object,
    default: () => {
    }
  }
})
```

### 5.2 业务代码抽离

```vue
<template>
  <RouterLink to="/" class="goods-item">
    <img v-img-lazy="good.picture" alt=""/>
    <p class="name ellipsis">{{ good.name }}</p>
    <p class="desc ellipsis">{{ good.desc }}</p>
    <p class="price">&yen;{{ good.price }}</p>
  </RouterLink>
</template>
```

### 5.3 在原页面使用

```vue
<ul class="goods-list">
  <li v-for="good in cate.goods" :key="good.id">
    <GoodsItem :good="good" />
  </li>
</ul>
```

# 总结

熟练使用axios

- 封装api
- 调用接口
- 渲染

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
                // console.log(el, binding.value);
                //监听
                const {stop} = useIntersectionObserver(
                    el,
                    ([{isIntersecting}]) => {
                        // console.log(isIntersecting); //布尔值
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
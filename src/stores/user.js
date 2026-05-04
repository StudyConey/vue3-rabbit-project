//管理用户数据

import {defineStore} from 'pinia'
import {ref} from "vue";
import {LoginAPI} from "@/apis/user.js";

export const useUserStore = defineStore('user', () => {
    //1. 定义管理数据的state
    const userInfo = ref({})
    //2. 定义action函数
    const getUserInfo = async ({account, password}) => {
        const res = await LoginAPI({account, password});
        userInfo.value = res.result
    }
    //3. 以对象的格式把state和action return
    return {
        userInfo,
        getUserInfo
    }
})
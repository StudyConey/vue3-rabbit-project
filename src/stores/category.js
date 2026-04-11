import {ref, computed} from 'vue'
import {defineStore} from 'pinia'
import {getCategoryAPI} from "@/apis/Layout.js";

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

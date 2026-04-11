import httpInstance from "@/utils/https.js";

/**
 * 轮播图
 * @returns {*}
 */
export function getBannerAPI() {
    return httpInstance({
        url: '/home/banner'
    })
}

/**
 * 获取新鲜好物
 * @returns {*}
 */
export function findNewAPI() {
    return httpInstance({
        url: '/home/new'
    })
}
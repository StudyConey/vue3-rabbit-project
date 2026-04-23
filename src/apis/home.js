import httpInstance from "@/utils/https.js";

/**
 * 轮播图
 * @param params
 * @returns {*}
 */
export function getBannerAPI(params = {}) {
    //默认：1，商品：2
    const {distributionSite = '1'} = params;
    return httpInstance({
        url: '/home/banner',
        params: {
            distributionSite
        }
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

/**
 * 获取人气推荐
 * @returns {*}
 */
export function getHotAPI() {
    return httpInstance({
        url: '/home/hot'
    })
}

/**
 * 获取所有商品模块
 * @returns {*}
 */
export function getGoodsAPI() {
    return httpInstance({
        url: '/home/goods'
    })
}
import httpInstance from "@/utils/https.js";

export function getBannerAPI() {
    return httpInstance({
        url: '/home/banner'
    })
}
import httpInstance from "@/utils/https.js";


export function getCategoryAPI(){
    return httpInstance({
        url:'/home/category/head'
    })
}
import httpInstance from "@/utils/https.js";

export function getCategory(){
    return httpInstance({
        url:'home/category/head'
    })
}

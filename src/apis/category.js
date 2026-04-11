// import {request} from "axios";
import request from "@/utils/https.js";

export function getCategoryAPI(id) {
    return request({
        url: '/category',
        params:{
            id
        }
    })
}
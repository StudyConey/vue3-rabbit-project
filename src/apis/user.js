import request from "@/utils/https.js";

export const LoginAPI = ({account, password}) => {
    return request({
        url: "/login",
        method: "POST",
        data: {
            account,
            password
        }
    })
}
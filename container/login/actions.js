import { LOGIN_REQUEST } from "@/utils/request"

export const doPostLogin = async (loginData, set) => {
    return await LOGIN_REQUEST(loginData, set)
}
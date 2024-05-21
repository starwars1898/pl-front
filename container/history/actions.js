import { GET_REQUEST_PARAMS } from "@/utils/request"
import { GetLocalToken } from "@/utils/function"

const token = GetLocalToken()

export const doGetHistoryList = async (set, params) => {
    return await GET_REQUEST_PARAMS('/history/list', token, params, set)
}
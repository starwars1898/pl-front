import { GET_REQUEST } from "@/utils/request"
import { GetLocalToken } from "@/utils/function"

const token = GetLocalToken()

export const doGetBranchlist = async (set) => {
    return await GET_REQUEST('/branch/list', token, set)
}

export const doGetTransferData = async (set) => {
    return await GET_REQUEST('/transfer/test', token, set)
}

export const doGetBranchPriority = async (set) => {
    return await GET_REQUEST('/branch/priority', token, set)
}
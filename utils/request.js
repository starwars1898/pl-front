import axios from "axios"
import { CreateUrl } from "./url"
import { ErrorStatus, InvalidLogin, SpreadFunctions } from "./function"
import toast from "react-hot-toast"
import { DirectToHome } from "./function"

export const LOGIN_REQUEST = async (loginData, ...functions) => {
    try {
        const URL = CreateUrl('/auth/sign-in')
        const req = await axios.post(URL, loginData)  

        const data = req?.data
        SpreadFunctions(data, ...functions)
        toast.success('Successfully Logged In!')
        DirectToHome()

        return true
    } catch (error) {
        
        if(error.code !== 'ERR_NETWORK'){
            InvalidLogin(error?.response?.data)
        } else {
            toast.error(`${error?.message}`)
        }
        
        return null
    }
}

export const GET_REQUEST = async (url, token, ...functions) => {
    try {
        const URL = CreateUrl(url)
        const req = await axios({
            method: 'get',
            url: URL,
            headers: {
                Authorization: `Bearer ${token}`
            }
        })

        const data = req?.data
        SpreadFunctions(data, ...functions)

        return true
    } catch(error) {
        
        ErrorStatus(error)
        
        return null
    }
}

export const GET_REQUEST_PARAMS = async (url, token, params, ...functions) => {
    try {
        const URL = CreateUrl(url)
        const req = await axios({
            method: 'get',
            url: URL,
            headers: {
                Authorization: `Bearer ${token}`
            },
            params: params
        })

        const data = req?.data
        SpreadFunctions(data, ...functions)

        return true
    } catch(error) {
        
        ErrorStatus(error)
       
        return null
    }
}
import toast from "react-hot-toast"

export const GetLocalStore = (key) => {
    if (typeof window !== 'undefined') {
        const store = localStorage.getItem(key);
        if (store) {
            return JSON.parse(store)
        }
    }
    return null
}

export const GetLocalUser = (select) => {
    const local = GetLocalStore('user')
   
    switch(select) {
        case 'auth':
            return local?.state?.UserModel?.auth
        case 'name':
            return local?.state?.UserModel?.real_name
        case 'token':
            return local?.state?.UserModel?.token
    }
}

export const GetLocalToken = () => GetLocalUser('token')

export const SpreadFunctions = (reqData, ...functions) => {
    functions.forEach((func) => {
      if (typeof func === 'function') {
        func(reqData)
      }
    })
}

// export const InvalidAuth = (error) => {
//     if(error?.statusCode === 401){
//         toast.error(`${error?.message}`)
//         LogOut()
//     } else {
//         toast.error(`${error?.message}`)
//     }
// }

export const InvalidLogin = (error) => {
    toast.error(`${error?.message}`)
}

export const ErrorStatus = (error) => {
    const responseData = error?.response?.data

    if(error?.code === 'ERR_NETWORK'){
        toast.error(`${error?.message}`)
    } else {
        if(error?.response?.status === 401){
            LogOut()
        }
        toast.error(`${responseData?.message || 'An unexpected error occurred'}`)
    } 
}

export const LogOut = () => {
    localStorage.removeItem('user')
    window.location.href = '/'
}

export const DirectToHome = () => {
    window.location.href = '/home'
}

export const AddDelay = (time) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(false)
        }, time)
    })
}
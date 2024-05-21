import { create } from "zustand"
import { persist, createJSONStorage } from 'zustand/middleware'
import { ModelUser } from "./models"

export const UserStore = create(
    persist(
    (set) => ({
        UserModel: { ...ModelUser },
        setUserModel: (payload) => set(state => ({
          UserModel: {
            ...state.UserModel,
            ...payload
        },
        }))
      }),
      {
        name: 'user',
        storage: createJSONStorage(() => localStorage),
      }
    )
)

export const ErrorStore = create((set) => ({
    LoginErrorModel: {show: false, message: ''},
    setLoginErrorModel: (payload) => set(state => ({
        LoginErrorModel: {
            ...state.LoginErrorModel, 
            ...payload
        }
    }))
}))

export const SuccessStore = create((set) => ({
    LoginSuccessModel: {show: false, message: ''},
    setLoginSuccessModel: (payload) => set(state => ({
        LoginSuccessModel: {
            ...state.LoginSuccesModel, 
            ...payload
        }
    }))
}))

export const NavigationStore = create((set) => ({
    ShowMobileMenu: false,
    setShowMobileMenu: (payload) => set({ShowMobileMenu: payload})
}))
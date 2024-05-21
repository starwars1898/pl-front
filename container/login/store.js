import { create } from "zustand"

export const LoginStore = create((set) => ({
    LoginFormModel: {username: '', password: ''},
    setUsername: (username) => set(state => ({
        LoginFormModel: { ...state.LoginFormModel, username }
    })),
    setPassword: (password) => set(state => ({
        LoginFormModel: { ...state.LoginFormModel, password }
    }))
}))

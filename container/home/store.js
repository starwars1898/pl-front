import { create } from "zustand"

export const BranchStore = create((set) => ({
    BranchModel: [],
    setBranchModel: (payload) => set(state => ({
        BranchModel: {
            ...state.BranchModel, 
            ...payload
        }
    }))
})) 

export const BranchPriorityStore = create((set) => ({
    BranchPriorityModel: [],
    setBranchPriorityModel: (payload) => set({BranchPriorityModel: payload})
})) 

export const TransferDataStore = create((set) => ({
    TransferData: [],
    setTransferData: (payload) => set(state => ({
        TransferData: {
            ...state.TransferData, 
            ...payload
        }
    })),
    setDistTransferData: (payload) => set({TransferData: {...payload}})
}))
import { create } from "zustand"

export const HistoryStore = create((set) => ({
    HistoryModel: [],
    setHistoryModel: (payload) => set({HistoryModel: payload})
}))


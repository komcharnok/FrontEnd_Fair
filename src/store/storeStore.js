
import { create } from 'zustand'

const formatDate = (date) => {
    const day = String(date.getDate()).padStart(2, '0')
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const year = date.getFullYear()
    return `${day}/${month}/${year}`
}

const storeStore = (set) => ({
    opening_date: formatDate(new Date()),
    store_name: "",
    store_description: "",
    user_id: 1, // a default user ID for now
    setStoreName: (name) => set({ store_name: name }),
    setStoreDescription: (description) => set({ store_description: description }),
    resetForm: () => set({
        opening_date: formatDate(new Date()),
        store_name: "",
        store_description: "",
        user_id: 1
    })
})

const useStore = create(storeStore)

export { useStore }

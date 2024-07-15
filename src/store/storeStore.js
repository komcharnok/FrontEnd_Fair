import { create } from 'zustand'
import axios from 'axios'

const storeStore = (set) => ({
    opening_date: new Date().toLocaleDateString('en-CA'), // Setting default opening date in format YYYY-MM-DD
    store_name: "",
    store_description: "",
    user_id: 1, // Assuming a default user ID for now
    stores: [],

    setStoreName: (name) => set({ store_name: name }),
    setStoreDescription: (description) => set({ store_description: description }),
    resetForm: () => set({
        opening_date: new Date().toLocaleDateString('en-CA'),
        store_name: "",
        store_description: "",
        user_id: 1
    }),

    fetchStores: async (user_id) => {
        try {
            const response = await axios.get(`http://localhost:8080/store/${user_id}`)
            set({ stores: response.data })
        } catch (error) {
            console.error('Error fetching stores', error)
        }
    },

    createStore: async (storeData) => {
        try {
            const response = await axios.post('http://localhost:8080/store', storeData)
            console.log('Store created successfully', response.data)
            set((state) => ({
                stores: [...state.stores, response.data],
                store_name: "",
                store_description: "",
                opening_date: new Date().toLocaleDateString('en-CA'),
                user_id: 1
            }))
        } catch (error) {
            console.error('Error creating store', error)
        }
    }
})

const useStore = create(storeStore)

export { useStore }

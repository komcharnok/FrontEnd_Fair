import { create } from 'zustand';
import axios from 'axios';

const storeStore = (set) => ({
    store_name: "",
    store_description: "",
    user_id: null, // Default to null until set
    stores: [],

    setStoreName: (name) => set({ store_name: name }),
    setStoreDescription: (description) => set({ store_description: description }),
    setUserId: (user_id) => set({ user_id }),
    resetForm: () => set({
        store_name: "",
        store_description: "",
        user_id: null 
    }),

    fetchStores: async (token) => {
        try {
            const response = await axios.get('http://localhost:8080/store', {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            set({ stores: response.data });
        } catch (error) {
            console.error('Error fetching stores', error);
        }
    },

    createStore: async (token) => {
        try {
            const { store_name, store_description } = get(); // Retrieve current state
            const response = await axios.post('http://localhost:8080/store', {
                store_name,
                store_description,
            }, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            console.log('Store created successfully', response.data);
            set((state) => ({
                stores: [...state.stores, response.data],
                store_name: "",
                store_description: "",
                user_id: state.user_id // Keep the user_id intact
            }));
        } catch (error) {
            console.error('Error creating store', error);
        }
    }
});

const useStore = create(storeStore);

export { useStore };

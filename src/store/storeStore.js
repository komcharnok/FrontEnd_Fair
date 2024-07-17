import { create } from 'zustand';
import axios from 'axios';
  
const storeStore = (set, get) => ({
    store_name: "",
    store_description: "",
    user_id: null,
    stores: [],

    setStoreName: (name) => set({ store_name: name }),
    setStoreDescription: (description) => set({ store_description: description }),
    setUserId: (user_id) => set({ user_id }),
    resetForm: () => set({
        store_name: "",
        store_description: "",
        user_id: null
    }),

    fetchStores: async (user_id, token) => {
        if (user_id === null || user_id === undefined) {
            console.error('User ID is null or undefined');
            return;
        }
        try {
            const response = await axios.get(`http://localhost:8080/store/${user_id}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            set({ stores: response.data });
        } catch (error) {
            console.error('Error fetching stores', error);
        }
    },

    createStore: async (storeData) => {
        try {
            const response = await axios.post('http://localhost:8080/store', storeData);
            console.log('Store created successfully', response.data);
            set((state) => ({
                stores: [...state.stores, response.data.result],
                store_name: '',
                store_description: '',
                user_id: state.user_id
            }));
        } catch (error) {
            console.error('Error creating store', error);
            // Handle error state
        }
    },
    updateStore: async (store_id, ) => {
        try {
            const { store_name, store_description } = get();
            const response = await axios.put(`http://localhost:8080/store/${store_id}`, {
                store_name,
                store_description,
            }, 
            // {
            //     headers: {
            //         Authorization: `Bearer ${token}`,
            //     },
            // }
        );
            console.log('Store updated successfully', response.data);
            // Update the stores list or handle accordingly
        } catch (error) {
            console.error('Error updating store', error);
        }
    },

    deleteStore: async (store_id, token) => {
        try {
          const response = await axios.delete(`http://localhost:8080/store/${store_id}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          console.log('Store deleted successfully', response.data);
          // Update the stores list or handle accordingly
        } catch (error) {
          console.error('Error deleting store', error);
        }
      }
});

const useStore = create(storeStore);

export { useStore };
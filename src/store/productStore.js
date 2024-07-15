
import { create } from 'zustand'

const productStore = (set) => ({
    product_title: "",
    description: "",
    price: "",
    real_price: "",
    category: "phone",
    product_type: "Normal",
    store_id: 2, // a default store ID for now!!
    setProductTitle: (title) => set({ product_title: title }),
    setDescription: (description) => set({ description: description }),
    setPrice: (price) => set({ price: price }),
    setRealPrice: (realPrice) => set({ real_price: realPrice }),
    resetForm: () => set({
        product_title: "",
        description: "",
        price: "",
        real_price: "",
        category: "phone",
        product_type: "Normal",
        store_id: 2
    })
})

const useProduct = create(productStore)

export { useProduct }


import { create } from 'zustand'
import axios from 'axios';

const productStore = (set) => ({
    product_title: "",
    description: "",
    price: "",
    real_price: "",
    category: "phone",
    product_type: "Normal",
    store_id: 1, // a default store ID for now
    products: [],

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
        store_id: 1
    }),

    // fetchProducts: async (store_id) => {
    //     try {
    //         const response = await axios.get(`http://localhost:8080/product/${store_id}`)
    //         set({ products: response.data })
    //     } catch (error) {
    //         console.error('Error fetching products', error)
    //     }
    // },

    createProduct: async (productData) => {
        try {
            const response = await axios.post('http://localhost:8080/product', productData)
            console.log('Product created successfully', response.data)
            set((state) => ({
                products: [...state.products, response.data],
                product_title: "",
                description: "",
                price: "",
                real_price: "",
                category: "phone",
                product_type: "Normal",
                store_id: 1
            }))
        } catch (error) {
            console.error('Error creating product', error)
        }
    },
    // method to fetch products by store_id
    getProductsByStoreId: async (store_id) => {
        try {
            const response = await axios.get(`http://localhost:8080/product/store/${store_id}`);
            set({ products: response.data });
        } catch (error) {
            console.error('Error fetching products by store_id', error);
        }
    },
    deleteProduct: async (product_id, token) => {
        try {
          const response = await axios.delete(`http://localhost:8080/product/${product_id}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          console.log('product deleted successfully', response.data);
        } catch (error) {
          console.error('Error deleting product', error);
        }
      },
      updateProduct: async (product_id, productData) => {
        try {
            const response = await axios.put(`http://localhost:8080/product/${product_id}`, productData);
            console.log('Product updated successfully', response.data);
            set((state) => ({
                products: state.products.map((product) => {
                    if (product.product_id === product_id) {
                        return { ...product, ...productData };
                    }
                    return product;
                }),
            }));
        } catch (error) {
            console.error('Error updating product', error);
        }
    },
})

const useProduct = create(productStore)

export { useProduct }
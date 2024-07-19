import { create } from 'zustand'
import axios from 'axios';

const productStore = (set) => ({
    product_title: "",
    description: "",
    price: "",
    real_price: "",
    category: "",
    product_type: "",
    store_id: null,
    products: [],

    setProductTitle: (title) => set({ product_title: title }),
    setDescription: (description) => set({ description: description }),
    setPrice: (price) => set({ price: price }),
    setRealPrice: (realPrice) => set({ real_price: realPrice }),
    setCategory: (category) => set({ category: category }),
    setProductType: (productType) => set({ product_type: productType }),
    setStoreId: (storeId) => set({ store_id: storeId }),
    resetForm: () => set({
        product_title: "",
        description: "",
        price: "",
        real_price: "",
        category: "",
        product_type: "",
        store_id: null
    }),

    createProduct: async (productData) => {
        const { store_id } = productData; // Extract store_id from productData
        console.log('Sending product data:', productData); // Log the product data
        try {
            const response = await axios.post(`http://localhost:8080/product/store/${store_id}`, productData);
            console.log('Product created successfully', response.data);
            set((state) => ({
                products: [...state.products, response.data],
                product_title: "",
                description: "",
                price: "",
                real_price: "",
                category: "",
                product_type: "",
                store_id: null
            }));
        } catch (error) {
            console.error('Error creating product', error);
        }
    },
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
            console.log('Product deleted successfully', response.data);
            set((state) => ({
                products: state.products.filter(product => product.product_id !== product_id),
            }));
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
            console.log('Sending product data:', productData);
        } catch (error) {
            console.error('Error updating product', error);
        }
    },
    getProductsByProductType: async (product_type) => {
        try {
            const response = await axios.get(`http://localhost:8080/product/product-type/${product_type}`);
            set({ products: response.data });
        } catch (error) {
            console.error('Error fetching products by product_type', error);
        }
    },
}) 

const useProduct = create(productStore)

export { useProduct }

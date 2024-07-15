import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const ShopCardContext = createContext();

const ShopCardProvider = ({ children }) => {
    const [data, setData] = useState([]);

    const fetchAPI = async () => {
        try {
            const response = await axios.get('http://localhost:8080/cart/6'); // Replace with dynamic cart_id if needed
            const cartItems = response.data.cart?.cartitem || []; // Adjust property name
            setData(cartItems); // Update state with fetched data
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        fetchAPI();
    }, []);

    const removeItem = async (product_id) => {
        try {
            await axios.delete(`http://localhost:8080/cartitem/${product_id}`); // Assuming endpoint for removing item
            setData(prevData => prevData.filter(item => item.product_id !== product_id));
        } catch (error) {
            console.error("Error removing item:", error);
        }
    };

    const handleQuantityChange = async (product_id, quantity) => {
        try {
            await axios.put(`http://localhost:8080/cartitem/${product_id}`, { quantity }); // Assuming endpoint for updating quantity
            setData(prevData =>
                prevData.map(item =>
                    item.product_id === product_id ? { ...item, quantity: parseInt(quantity) } : item
                )
            );
        } catch (error) {
            console.error("Error updating quantity:", error);
        }
    };

    const calculateTotalPrice = () => {
        return data.reduce((total, item) => total + item.product.price * item.quantity, 0).toFixed(2);
    };

    return (
        <ShopCardContext.Provider value={{ data, removeItem, handleQuantityChange, calculateTotalPrice }}>
            {children}
        </ShopCardContext.Provider>
    );
};

export { ShopCardContext, ShopCardProvider };

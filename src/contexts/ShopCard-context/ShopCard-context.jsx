// ShopCardContext.jsx
import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const ShopCardContext = createContext();

const ShopCardProvider = ({ children }) => {
    const [data, setData] = useState([]);

    const fetchAPI = async () => {
        try {
            //  ./src/component/ShopCard/data.json
            const response = await axios.get("http://localhost:8585/data");
            setData(response.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        fetchAPI();
    }, []);

    const removeItem = (id) => {
        setData(data.filter(item => item.id !== id));
    };

    const handleQuantityChange = (id, quantity) => {
        setData(data.map(item => item.id === id ? { ...item, quantity: parseInt(quantity) } : item));
    };

    const calculateTotalPrice = () => {
        return data.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
    };

    return (
        <ShopCardContext.Provider value={{ data, setData, removeItem, handleQuantityChange, calculateTotalPrice }}>
            {children}
        </ShopCardContext.Provider>
    );
};

export { ShopCardContext, ShopCardProvider };

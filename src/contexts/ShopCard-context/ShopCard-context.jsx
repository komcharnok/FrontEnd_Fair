import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const ShopCardContext = createContext();

const ShopCardProvider = ({ children }) => {
    const [orderUser, setOrderUser] = useState([]);

    const getorderId = async () => {
        try {
            const rs = await axios.get(`http://localhost:8080/order`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }
            });
            setOrderUser(rs.data);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getorderId();
    }, []);

    const hdlDelete = async (id) => {
        await axios.delete(`http://localhost:8080/order/${id}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        });
        setOrderUser((prevOrders) => prevOrders.filter(order => order.order_id !== id));
    };

    

    const updateQuantity = async (productId, newQuantity) => {
        try {
            await axios.put(`http://localhost:8080/order/${productId}`, { quantity: newQuantity }, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }
            });
            setOrderUser((prevOrders) => 
                prevOrders.map(item => 
                    item.product_id === productId ? { ...item, quantity: newQuantity } : item
                )
            );
        } catch (err) {
            console.log(err);
        }
    };

    const calculateTotalPrice = () => {
        return orderUser.reduce((total, item) => total + (item.product.price * item.quantity), 0).toFixed(2);
    };
    

    return (
        <ShopCardContext.Provider value={{ orderUser, getorderId, hdlDelete, updateQuantity,calculateTotalPrice }}>
            {children}
        </ShopCardContext.Provider>
    );
};

export { ShopCardContext, ShopCardProvider };

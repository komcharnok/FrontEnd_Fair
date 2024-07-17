import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const OrderContext = createContext();

const OrderProvider = ({ children }) => {
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

    

    return (
        <OrderContext.Provider value={{ orderUser, getorderId }}>
            {children}
        </OrderContext.Provider>
    );
};

export { OrderContext, OrderProvider };

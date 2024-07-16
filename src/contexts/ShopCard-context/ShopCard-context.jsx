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

    const hdlDelete = async (id) =>{
        await axios.delete(`http://localhost:8080/order/${id}`,{
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        })
        
    }

    return (
        <ShopCardContext.Provider value={{ orderUser, getorderId,hdlDelete }}>
            {children}
        </ShopCardContext.Provider>
    );
};

export { ShopCardContext, ShopCardProvider };

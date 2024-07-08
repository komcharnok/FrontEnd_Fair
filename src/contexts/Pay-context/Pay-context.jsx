import React, { createContext, useState, useEffect } from 'react';
// import axios from 'axios';

const PayContext = createContext();

const PayProvider = ({ children }) => {
    const [opencloseCard, setOpencloseCard] = useState(false);


    const hdlOpenPatCard = () => {
        setOpencloseCard(true)
        document.getElementById('FormAddCreaditCard').showModal()
    }

    const hdlClosePatCard = () => {
        setOpencloseCard(false);
        document.getElementById('FormAddCreaditCard').showModal()

    };


    




    const contextValue = {
        opencloseCard,
        hdlOpenPatCard,
        hdlClosePatCard
    };

    return (
        <PayContext.Provider value={contextValue}>
            {children}
        </PayContext.Provider>
    );
};

export { PayContext, PayProvider };


import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const AddressContext = createContext();

const AddressProvider = ({ children }) => {
    const [opencloseAddname, setOpencloseAddname] = useState(false);
    const [opencloseEdit, setOpencloseEdit] = useState(false);
    const [opencloseCard, setOpencloseCard] = useState(false);

    const [editAddress, setEditAddress] = useState(null);
    const [address, setAddress] = useState([]);
    const [data, setData] = useState([]);

    // api
    const apiAddress = async () => {
        try {
            const response = await axios.get("http://localhost:8080/address");
            setAddress(response.data);
        } catch (error) {
            console.error("Error fetching address data:", error);
        }
    };

    useEffect(() => {
        apiAddress();
    }, []);
    
    const hdlDelete = async (e, id) => {
        try {
            e.stopPropagation();
            if (!confirm("Delete this address?")) {
                return;
            }
            const rs = await axios.delete(`http://localhost:8080/address/${id}`);
            if (rs.status === 204) {
                alert("Address deleted successfully.");
                apiAddress(); // Refresh the address list after deletion
            } else {
                alert('Unexpected response status: ' + rs.status);
            }
        } catch (error) {
            console.error("Error deleting address:", error);
            alert('Error deleting address: ' + error.message);
        }
    };


    const fetchApiData = async () => {
        try {
            const response = await axios.get("http://localhost:8585/data");
            setData(response.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        fetchApiData();
    }, []);




    


    //เปิด-ปิด FormAddName
    const hdlOpenAddname = () => {
        setOpencloseAddname(true)
        document.getElementById('FormAddName').showModal()
    }

    const hdlCloseAddname = () => {
        setOpencloseAddname(false);
        document.getElementById('FormAddName').showModal()

    };



    //เปิด-ปิด FormEdit
    const hdlOpenFromEdit = (address) => {
        setOpencloseEdit(true);
        document.getElementById('FormEdit').showModal()
        setEditAddress(address);
    };

    const hdlCloseFromEdit = () => {
        setOpencloseEdit(false);
        document.getElementById('FormEdit').showModal()
        setEditAddress(null);
    };





    const contextValue = {
        address,
        data,
        opencloseAddname,
        opencloseEdit,
        editAddress,
        hdlOpenAddname,
        hdlCloseAddname,
        hdlOpenFromEdit,
        hdlCloseFromEdit,
        hdlDelete,
        apiAddress // Export fetchApiAddress
    };

    return (
        <AddressContext.Provider value={contextValue}>
            {children}
        </AddressContext.Provider>
    );
};

export { AddressContext, AddressProvider };


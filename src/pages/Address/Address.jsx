import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AddressContext, AddressProvider } from '../../contexts/Address-context/Address-context';
import AddressList from '../../components/Address/AddressList';
import OrderShopCard from '../../components/Address/OrderShopCard';
import FormAddname from '../../components/Address/FormAddname';
import FormEdit from '../../components/Address/FormEdit';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast, Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Address = () => {
  return (
    <AddressProvider>
      <AddressContent />
    </AddressProvider>
  );
}

const AddressContent = () => {
  const navigate = useNavigate();
  const { opencloseAddname, opencloseEdit } = useContext(AddressContext);

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const datas = JSON.parse(queryParams.get('data'));

  if (!datas || !datas.orderUser || datas.orderUser.length === 0) {
    return <div>No items to display.</div>;
  }

  const loading = () => {
    toast.promise(
      new Promise(() => {
        setTimeout(() => {
          navigate(`/pays?data=${encodeURIComponent(JSON.stringify(datas))}`);
        }, 2000); // 2-second delay
      }),
      {
        pending: "กรุณารอสักครู่...",
      },
      {}
    );
  };

  return (
    <div className='container px-16 mx-auto'>
      <div className='flex-col'>
        <AddressList />
        <OrderShopCard />
      </div>
      <div className='shadow mt-3 mb-5'>
        <div className="mt-2 flex flex-col">
          <div className='flex mx-auto items-center justify-start gap-2 mr-1 pb-3'>
            <button onClick={loading} type="button" className='btn mt-4 w-32 bg-red-500 hover:bg-red-700 text-white rounded-3xl'>สั่งสินค้า</button>
            <ToastContainer/>
          </div>
        </div>
      </div>
      {opencloseAddname && <FormAddname />}
      {opencloseEdit && <FormEdit />}
    </div>
  );
}

export default Address;

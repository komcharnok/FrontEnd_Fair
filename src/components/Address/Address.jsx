import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AddressContext, AddressProvider } from '../../contexts/Address-context/Address-context';
import AddressList from '../Address/AddressList';
import Pay from '../Pay/Pay';
import OrderShopCard from '../Address/OrderShopCard';
import FormAddname from './FormAddname';
import FormEdit from './FormEdit';

const Address = () => {
  return (
    <AddressProvider> 
      <AddressContent />
    </AddressProvider>
  );
}

const AddressContent = () => {
  const { opencloseAddname,opencloseEdit } = useContext(AddressContext);
  

  return (
    <div className='max-w-[1200px] px-4 mx-auto'>
      <div className="mx-auto mt-16 flex text-slate-400 font-light">
        <Link to='/'>
          หน้าหลัก
        </Link>
        <p className='ml-3'>/</p>
        <Link to='/card'>
          ตะกร้า
        </Link>
        <p className='ml-3'>/</p>
        <Link to='/address'>
          <span className='ml-3 font-semibold text-black'>ที่อยู่</span>
        </Link>
      </div>
      <div className='flex-col'>
        <AddressList />
        <OrderShopCard />
      </div>
      <div className='shadow p-4 mt-3 mb-5'>
        <Pay />
      </div>
      {opencloseAddname && <FormAddname />}           
      {opencloseEdit && <FormEdit />}
    </div>
  );
}

export default Address;

import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AddressContext, AddressProvider } from '../../contexts/Address-context/Address-context';
import AddressList from '../../components/Address/AddressList';
import OrderShopCard from '../../components/Address/OrderShopCard';
import FormAddname from '../../components/Address/FormAddname';
import FormEdit from '../../components/Address/FormEdit';

const Address = () => {
  return (
    <AddressProvider>
      <AddressContent />
    </AddressProvider>
  );
}

const AddressContent = () => {
  const { opencloseAddname, opencloseEdit } = useContext(AddressContext);

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const datas = JSON.parse(queryParams.get('data'));

  if (!datas || !datas.orderUser || datas.orderUser.length === 0) {
    return <div>No items to display.</div>;
  }

  return (
    <div className='container px-16 mx-auto'>
      <div className='flex-col'>
        <AddressList />
        <OrderShopCard />
      </div>
      <div className='shadow mt-3 mb-5'>
        <div className="mt-2 flex flex-col">
          <div className='flex mx-auto items-center justify-start gap-2 mr-1 pb-3'>
            <Link to={`/pays?data=${encodeURIComponent(JSON.stringify(datas))}`}>
              <button type="button" className='btn mt-4 w-32 bg-red-500 hover:bg-red-700 text-white rounded-3xl'>สั่งสินค้า</button>
            </Link>
          </div>
        </div>
      </div>
      {opencloseAddname && <FormAddname />}
      {opencloseEdit && <FormEdit />}
    </div>
  );
}

export default Address;
